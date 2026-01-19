#!/usr/bin/env node
// ABAP Documentation Scraper
// Fetches HTML documentation from SAP ABAP Keyword Documentation
// Supports two libraries: "standard" (latest) and "cloud" (cp)

import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { load as loadHtml } from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

// Library configuration
const LIBRARY_CONFIG = {
  standard: {
    urlPattern: 'abapdocu_latest_index_htm',
    pathSegment: 'latest',
    name: 'Standard ABAP'
  },
  cloud: {
    urlPattern: 'abapdocu_cp_index_htm',
    pathSegment: 'CLOUD',
    name: 'ABAP Cloud'
  }
};

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--library') { args.library = argv[++i]; continue; }
    if (a === '--limit') { args.limit = Number(argv[++i]); continue; }
    if (a === '--concurrency') { args.concurrency = Number(argv[++i]); continue; }
    if (a === '--all') { args.all = true; continue; }
    if (a === '--force') { args.force = true; continue; }
    if (a === '--retry-failed') { args.retryFailed = true; continue; }
  }
  return {
    library: args.library || 'standard',
    limit: Number.isFinite(args.limit) ? args.limit : Infinity,
    concurrency: Number.isFinite(args.concurrency) ? args.concurrency : 8,
    all: Boolean(args.all),
    force: Boolean(args.force),
    retryFailed: Boolean(args.retryFailed)
  };
}

function sleep(ms) { 
  return new Promise(r => setTimeout(r, ms)); 
}

async function readRoots() {
  const rootsPath = path.resolve(repoRoot, 'roots.txt');
  const content = await fsp.readFile(rootsPath, 'utf8');
  return content.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
}

/**
 * Determines library type from root URL
 * @param {string} url - The root URL
 * @returns {'standard' | 'cloud'} - The library type
 */
function libraryFromRootUrl(url) {
  if (url.includes(LIBRARY_CONFIG.cloud.urlPattern) || url.includes('/CLOUD/')) {
    return 'cloud';
  }
  return 'standard';
}

function normalizeUrl(u) {
  try {
    const url = new URL(u);
    url.hash = '';
    return url.toString();
  } catch {
    return u.split('#')[0];
  }
}

function isDocHtml(url, basePrefix) {
  if (!url.startsWith(basePrefix)) return false;
  return /\.htm(l)?$/i.test(url);
}

function extractLinks(html, baseUrl) {
  const $ = loadHtml(html);
  const links = new Set();
  
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href || href.startsWith('mailto:')) return;

    // Handle javascript:call_link('...') pattern
    const jsCallLink = href.match(/^javascript:call_link\('(.*?)'\)/i);
    if (jsCallLink && jsCallLink[1]) {
      try {
        const abs = new URL(jsCallLink[1], baseUrl).toString();
        links.add(normalizeUrl(abs));
      } catch {}
      return;
    }

    if (href.startsWith('javascript:')) return;

    try {
      const abs = new URL(href, baseUrl).toString();
      links.add(normalizeUrl(abs));
    } catch {}
  });
  
  return Array.from(links);
}

async function fetchWithRetry(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { 
        headers: { 'User-Agent': 'abap-docs-scraper/1.0' } 
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.text();
    } catch (err) {
      if (i === tries - 1) throw err;
      await sleep(500 * (i + 1));
    }
  }
}

function deriveBasePrefix(rootUrl) {
  const u = new URL(rootUrl);
  let prefix = u.toString();
  // Remove index file from prefix
  prefix = prefix.replace(/\/(index\.htm|ABENABAP\.html)$/, '/');
  // Ensure trailing slash
  if (!prefix.endsWith('/')) prefix += '/';
  return prefix;
}

function getOutputDirs(library) {
  const base = path.resolve(repoRoot, 'docs', library);
  const html = path.resolve(base, 'html');
  return { base, html };
}

async function ensureDir(dir) {
  await fsp.mkdir(dir, { recursive: true });
}

function getHtmlFilePath(htmlDir, basePrefix, url) {
  const relative = url.replace(basePrefix, '');
  const safeRel = relative.replace(/[?#].*$/, '');
  return path.resolve(htmlDir, safeRel);
}

async function saveHtml(filePath, html) {
  await ensureDir(path.dirname(filePath));
  await fsp.writeFile(filePath, html, 'utf8');
}

async function getSeedUrls(rootUrl) {
  const basePrefix = deriveBasePrefix(rootUrl);
  const seeds = new Set();
  
  // Known entry documents - using .html for modern wrapper compatibility
  const knownFiles = [
    'ABENABAP.html',
    'ABENABAP_GLOSSARY.html', 
    'ABENABAP_INDEX.html',
    'ABENABAP_SUBJECTS.html',
    'ABENABAP_EXAMPLES.html'
  ];
  
  for (const file of knownFiles) {
    seeds.add(new URL(file, basePrefix).toString());
  }
  
  return { basePrefix, seeds: Array.from(seeds) };
}

function unwrapSapUi5Content(html) {
  if (!html.includes('sap-ui-bootstrap')) return html;
  
  // Find the JSONModel initialization for the content
  // Look for: var oModel = new sap.ui.model.json.JSONModel({ ... });
  const match = html.match(/var\s+oModel\s*=\s*new\s+sap\.ui\.model\.json\.JSONModel\(\s*({[\s\S]*?})\s*\);/);
  if (!match) return html;
  
  const jsonContent = match[1];
  
  // Extract all values that look like content
  // Regex matches key: "value" pattern where value is double-quoted
  const valueRegex = /\b\w+:\s*"((?:[^"\\]|\\.)*)"/g;
  let valMatch;
  const contentParts = [];
  
  while ((valMatch = valueRegex.exec(jsonContent)) !== null) {
    let content = valMatch[1];
    // Unescape quotes: \" -> "
    content = content.replace(/\\"/g, '"');
    contentParts.push(content);
  }
  
  if (contentParts.length === 0) return html;
  
  // Join parts
  const fullContent = contentParts.join('\n');
  
  // Reconstruct a simple HTML page compatible with existing tools
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Extracted Content</title>
</head>
<body>
<div class="all">
${fullContent}
</div>
</body>
</html>`;
}

async function scrapeLibrary(rootUrl, opts) {
  const { limit, concurrency, force, retryFailed } = opts;
  const library = libraryFromRootUrl(rootUrl);
  const config = LIBRARY_CONFIG[library];
  const { basePrefix, seeds } = await getSeedUrls(rootUrl);
  const dirs = getOutputDirs(library);
  
  console.log(`🔄 Scraping ${config.name} documentation...`);
  console.log(`   Library: ${library}`);
  console.log(`   Root URL: ${rootUrl}`);
  console.log(`   Base prefix: ${basePrefix}`);
  
  await ensureDir(dirs.base);

  const manifestPath = path.resolve(dirs.base, '_manifest.json');
  let existingManifest = null;
  
  // Handle --retry-failed: only retry previously failed URLs
  if (retryFailed && fs.existsSync(manifestPath)) {
    existingManifest = JSON.parse(await fsp.readFile(manifestPath, 'utf8'));
    const failedUrls = existingManifest.failedUrls || [];
    
    if (failedUrls.length === 0) {
      console.log(`   ✅ No failed URLs to retry`);
      return existingManifest;
    }
    
    console.log(`   🔄 Retrying ${failedUrls.length} previously failed URLs...`);
    
    const retryQueue = [...failedUrls];
    const retrySaved = [];
    const retryFailed2 = [];
    
    for (const url of retryQueue) {
      try {
        let html = await fetchWithRetry(url);
        html = unwrapSapUi5Content(html);
        const htmlPath = getHtmlFilePath(dirs.html, basePrefix, url);
        await saveHtml(htmlPath, html);
        retrySaved.push(url);
        console.log(`   ✅ Recovered: ${url.split('/').pop()}`);
      } catch (err) {
        retryFailed2.push(url);
        console.warn(`   ⚠️  Still failing: ${url.split('/').pop()}: ${err.message}`);
      }
      await sleep(100); // Rate limiting
    }
    
    // Update manifest
    existingManifest.savedCount += retrySaved.length;
    existingManifest.savedUrls.push(...retrySaved);
    existingManifest.failedUrls = retryFailed2;
    existingManifest.lastRetryAt = new Date().toISOString();
    
    await fsp.writeFile(manifestPath, JSON.stringify(existingManifest, null, 2));
    
    console.log(`   ✅ Recovered ${retrySaved.length} files, ${retryFailed2.length} still failing`);
    return existingManifest;
  }

  // Check if already scraped (normal mode)
  if (!force && fs.existsSync(manifestPath)) {
    existingManifest = JSON.parse(await fsp.readFile(manifestPath, 'utf8'));
    const failedCount = (existingManifest.failedUrls || []).length;
    console.log(`   ⏭️  Already scraped: ${existingManifest.savedCount} files`);
    if (failedCount > 0) {
      console.log(`   ⚠️  ${failedCount} URLs failed previously. Use --retry-failed to retry them.`);
    }
    return existingManifest;
  }

  // Clean HTML directory if force
  if (force && fs.existsSync(dirs.html)) {
    await fsp.rm(dirs.html, { recursive: true });
  }

  const queue = [...seeds];
  const seen = new Set(queue.map(normalizeUrl));
  const saved = [];
  const savedFiles = [];
  const failedUrls = [];

  async function worker() {
    while (queue.length > 0 && saved.length < limit) {
      const url = queue.shift();
      if (!url) break;
      
      const htmlPath = getHtmlFilePath(dirs.html, basePrefix, url);
      let html = '';
      let fromCache = false;

      try {
        // Check if file already exists
        if (!force && fs.existsSync(htmlPath)) {
          html = await fsp.readFile(htmlPath, 'utf8');
          fromCache = true;
        } else {
          html = await fetchWithRetry(url);
          // Unwrap SAPUI5 wrapper if present
          html = unwrapSapUi5Content(html);
          await saveHtml(htmlPath, html);
        }
        
        saved.push(url);
        savedFiles.push({
          url,
          htmlFile: path.relative(dirs.base, htmlPath)
        });
        
        const links = extractLinks(html, url);
        
        // Add new links to queue
        for (const link of links) {
          if (saved.length + queue.length >= limit) break;
          if (!isDocHtml(link, basePrefix)) continue;
          
          const norm = normalizeUrl(link);
          if (!seen.has(norm)) {
            seen.add(norm);
            queue.push(norm);
          }
        }
        
        // Progress update
        if (saved.length % 100 === 0) {
          console.log(`   Progress: ${saved.length} files scraped`);
        }
        
      } catch (err) {
        console.warn(`   ⚠️  Failed to process ${url}: ${err.message}`);
        failedUrls.push(url);
      }
      
      if (!fromCache) {
        await sleep(50); // Rate limiting only for network requests
      }
    }
  }

  // Run workers concurrently
  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);

  // Create manifest
  const manifest = {
    library,
    libraryName: config.name,
    rootUrl,
    basePrefix,
    savedCount: saved.length,
    savedUrls: saved,
    failedUrls: failedUrls,
    failedCount: failedUrls.length,
    files: savedFiles,
    output: {
      htmlDir: path.relative(dirs.base, dirs.html)
    },
    scrapedAt: new Date().toISOString()
  };
  
  await fsp.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`   ✅ Scraped ${saved.length} files for ${config.name}`);
  if (failedUrls.length > 0) {
    console.log(`   ⚠️  ${failedUrls.length} URLs failed. Use --retry-failed to retry them later.`);
  }
  return manifest;
}

async function main() {
  const args = parseArgs(process.argv);
  const roots = await readRoots();
  
  if (args.all) {
    console.log(`🚀 Scraping all ABAP documentation libraries...`);
    const results = [];
    
    for (const rootUrl of roots) {
      try {
        const result = await scrapeLibrary(rootUrl, args);
        results.push(result);
      } catch (err) {
        const library = libraryFromRootUrl(rootUrl);
        console.error(`❌ Failed to scrape ${library}: ${err.message}`);
      }
    }
    
    console.log(`\n📊 Scraping Summary:`);
    console.log(`   Libraries processed: ${results.length}`);
    console.log(`   Total files: ${results.reduce((sum, r) => sum + r.savedCount, 0)}`);
    
    return results;
  }
  
  // Single library
  const rootForLibrary = roots.find(r => libraryFromRootUrl(r) === args.library);
  if (!rootForLibrary) {
    throw new Error(`No root URL found for library "${args.library}". Valid options: standard, cloud`);
  }
  
  const result = await scrapeLibrary(rootForLibrary, args);
  console.log(`\n✅ Scraping completed for ${result.libraryName}`);
  console.log(`   Files scraped: ${result.savedCount}`);
  console.log(`   Output directory: docs/${result.library}/html/`);
  
  return result;
}

main().catch(err => {
  console.error(`💥 Scraping failed: ${err.message}`);
  console.error(err.stack);
  process.exit(1);
});
