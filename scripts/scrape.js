#!/usr/bin/env node
// ABAP Documentation Scraper
// Fetches HTML documentation from SAP ABAP Keyword Documentation
// Supports two libraries: "standard" (latest) and "cloud" (cp)

import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { load as loadHtml } from "cheerio";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const includesKeyword = [
  "ABAP Programming Guidelines",
  // "ABAP Programming Language",
];
const excludesKeyword = ["ABAP Glossary", "ABAP &#x2212; Reference"];

// const [rootUrl, basePrefix] = [
//   "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_PGL.html",
//   "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/",
// ];

const [rootUrl, basePrefix] = [
  "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm",
  "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/",
];

function parseArgs(argv) {
  const args = {};

  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];

    if (a === "--limit") {
      args.limit = Number(argv[++i]);
      continue;
    }

    if (a === "--retry-failed") {
      args.retryFailed = true;
      continue;
    }

    if (a === "--fresh") {
      args.fresh = true;
      continue;
    }

    if (a === "--out") {
      args.outputDir = argv[++i];
      continue;
    }
  }

  return {
    limit: Number.isFinite(args.limit) ? args.limit : Infinity,
    retryFailed: Boolean(args.retryFailed),
    fresh: Boolean(args.fresh),
    outputDir: args.outputDir || "docs",
  };
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalizeUrl(u) {
  try {
    const url = new URL(u);
    url.hash = "";
    return url.toString();
  } catch {
    return u.split("#")[0];
  }
}

function isDocHtml(url) {
  return url.startsWith(basePrefix) && /\.html?$/i.test(url);
}

function getOutputDirs(outputDir) {
  const base = path.resolve(repoRoot, outputDir);
  const html = path.resolve(base, "html");

  return { base, html };
}

async function ensureDir(dir) {
  await fsp.mkdir(dir, { recursive: true });
}

function getHtmlFilePath(htmlDir, url) {
  const relative = url.replace(basePrefix, "");
  const safeRel = relative.replace(/[?#].*$/, "");
  return path.resolve(htmlDir, safeRel);
}

async function saveHtml(filePath, html) {
  await ensureDir(path.dirname(filePath));
  await fsp.writeFile(filePath, html, "utf8");
}

function getRelativeHref(fromUrl, toUrl) {
  const from = new URL(fromUrl);
  const to = new URL(toUrl);

  if (from.origin !== to.origin) return to.toString();

  const fromDir = path.posix.dirname(from.pathname);
  let relativePath = path.posix.relative(fromDir, to.pathname);

  if (!relativePath) {
    relativePath = path.posix.basename(to.pathname);
  }

  return `${relativePath}${to.search}${to.hash}`;
}

function extractLinks(html, baseUrl) {
  const $ = loadHtml(html);
  const links = new Set();
  const hrefReplacements = new Map();

  $("a[href]").each((_, el) => {
    if ($(el.parent).is("nav.breadcrumbs, span.path")) return;

    const href = $(el).attr("href");

    if (!href) return;
    if (href.startsWith("mailto:")) return;
    if (
      href.includes("_glosry.htm") ||
      href.includes("_obsolete.htm") ||
      href.includes("_security.htm")
    )
      return;

    const jsCallLink = href.match(/^javascript:call_link\((['"])(.*?)\1\)/i);

    if (jsCallLink?.[2]) {
      try {
        const abs = new URL(jsCallLink[2], baseUrl).toString();
        const normalized = normalizeUrl(abs);

        links.add(normalized);
        hrefReplacements.set(href, getRelativeHref(baseUrl, abs));
      } catch {}

      return;
    }

    if (href.startsWith("javascript:")) return;

    try {
      const abs = new URL(href, baseUrl).toString();
      links.add(normalizeUrl(abs));
    } catch {}
  });

  let rewrittenHtml = html;

  for (const [from, to] of hrefReplacements) {
    rewrittenHtml = rewrittenHtml.replaceAll(`href="${from}"`, `href="${to}"`);
    rewrittenHtml = rewrittenHtml.replaceAll(`href='${from}'`, `href='${to}'`);
  }

  return {
    links: Array.from(links),
    html: rewrittenHtml,
    changed: hrefReplacements.size > 0,
  };
}

async function fetchWithRetry(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "abap-docs-scraper/1.0",
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      return await res.text();
    } catch (err) {
      if (i === tries - 1) throw err;
      await sleep(500 * (i + 1));
    }
  }
}

function parseSapUi5Model(jsonContent) {
  try {
    return Function(`"use strict"; return (${jsonContent});`)();
  } catch {
    return null;
  }
}

function convertBreadcrumbs(xml, oModel) {
  const $ = loadHtml(xml, {
    xml: true,
  });

  const breadcrumbsEl = $("Breadcrumbs");
  const currentText = breadcrumbsEl.attr("currentLocationText") || "";

  let html = "";
  breadcrumbsEl.find("Link").each((_, el) => {
    const text = $(el).attr("text") || "";
    let href = $(el).attr("href") || "#";

    href = href.replace(/\{\/(breadcrumb\d+)\}/g, (_, key) => {
      return oModel[key] || "#";
    });

    html += `<a href="${href}">${text}</a> / `;
  });

  if (!html && !currentText) return "";

  return `<nav class="breadcrumbs">${html}<span>${currentText}</span></nav>`;
}

function groupContentParts(contentParts) {
  const map = new Map();

  for (const part of contentParts) {
    if (!map.has(part.title)) {
      map.set(part.title, {
        title: part.title,
        parts: [],
      });
    }

    map.get(part.title).parts.push(part.content);
  }

  return [...map.values()];
}

function unwrapSapUi5Content(html) {
  if (!html.includes("sap-ui-bootstrap")) return html;

  const page = loadHtml(html);
  const pageXml = page("#main_page_xml").html();

  if (!pageXml) return html;

  const match = html.match(
    /var\s+oModel\s*=\s*new\s+sap\.ui\.model\.json\.JSONModel\(\s*({[\s\S]*?})\s*\);/,
  );

  if (!match) return html;

  const oModel = parseSapUi5Model(match[1]);

  if (!oModel) return html;

  const contentParts = [];

  const $ = loadHtml(pageXml, {
    xmlMode: true,
  });

  [...pageXml.matchAll(/\{\/([^}]+)\}/g)].forEach(([_, key]) => {
    if (key.startsWith("breadcrumb")) {
      return;
    }

    if (key.startsWith("code")) {
      const el = $(`[value="{/${key}}"]`).first();
      const parentTitle = el.parents("[title]").first().attr("title");

      const content = oModel[key];

      contentParts.push({
        title: parentTitle,
        content: `<pre><code>${content}</code></pre>`,
      });
      return;
    } else {
      const el = $(`[text="{/${key}}"], [htmlText="{/${key}}"]`).first();
      const parentTitle = el.parents("[title]").first().attr("title");
      const content = oModel[key];
      contentParts.push({ title: parentTitle, content });
    }
  });

  if (contentParts.length === 0) return html;

  const xml = loadHtml(pageXml, {
    xmlMode: true,
  });

  const breadcrumbsSource = xml("#page").html() || pageXml;
  const breadcrumbs = convertBreadcrumbs(breadcrumbsSource, oModel);

  const finalContent = groupContentParts(contentParts)
    .map((group) => {
      if (!group.title) return group.parts.join("\n");

      return `<h2>${group.title}</h2><div class="content">${group.parts.join("\n")}</div>`;
    })
    .join("\n");

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Extracted Content</title>
</head>
<body>
${breadcrumbs}
<div class="all">
${finalContent}
</div>
</body>
</html>`;
}

async function scrape(opts) {
  const { limit, retryFailed, fresh, outputDir } = opts;
  const dirs = getOutputDirs(outputDir);

  await ensureDir(dirs.base);
  await ensureDir(dirs.html);

  const manifestPath = path.resolve(dirs.base, "_manifest.json");

  if (fresh) {
    await fsp.rm(dirs.base, {
      recursive: true,
      force: true,
    });

    await ensureDir(dirs.base);
    await ensureDir(dirs.html);
  }

  let manifest = null;

  if (fs.existsSync(manifestPath)) {
    manifest = JSON.parse(await fsp.readFile(manifestPath, "utf8"));
  }

  let queue = [rootUrl];
  let seen = new Set([normalizeUrl(rootUrl)]);
  let saved = [];
  let skippedUrls = [];
  let savedFiles = [];
  let failedUrls = [];

  if (manifest && !retryFailed) {
    queue = manifest.queue?.length ? manifest.queue : [rootUrl];
    seen = new Set(manifest.seen || queue.map(normalizeUrl));
    saved = manifest.savedUrls || [];
    savedFiles = manifest.files || [];
    skippedUrls = manifest.skippedUrls || [];
    failedUrls = manifest.failedUrls || [];

    console.log(`🔁 Resuming scrape`);
    console.log(`   Saved: ${saved.length}`);
    console.log(`   Queue: ${queue.length}`);
    console.log(`   Failed: ${failedUrls.length}`);
  }

  if (manifest && retryFailed) {
    queue = manifest.failedUrls || [];
    seen = new Set(manifest.seen || []);
    saved = manifest.savedUrls || [];
    savedFiles = manifest.files || [];
    skippedUrls = manifest.skippedUrls || [];
    failedUrls = [];

    console.log(`🔄 Retrying failed URLs`);
    console.log(`   Failed queue: ${queue.length}`);
  }

  async function writeManifestSnapshot() {
    const snapshot = {
      rootUrl,
      basePrefix,
      savedCount: saved.length,
      savedUrls: saved,
      failedUrls,
      failedCount: failedUrls.length,
      skippedUrls,
      queue,
      seen: Array.from(seen),
      files: savedFiles,
      output: {
        htmlDir: path.relative(dirs.base, dirs.html),
      },
      updatedAt: new Date().toISOString(),
    };

    await fsp.writeFile(manifestPath, JSON.stringify(snapshot, null, 2));
  }

  console.log(`🚀 Scraping documentation...`);
  console.log(`   Root URL: ${rootUrl}`);
  console.log(`   Base prefix: ${basePrefix}`);

  while (queue.length > 0 && saved.length < limit) {
    const url = queue.shift();

    if (!url) break;

    const normalizedUrl = normalizeUrl(url);
    const htmlPath = getHtmlFilePath(dirs.html, normalizedUrl);

    if (skippedUrls.includes(normalizedUrl)) continue;

    try {
      console.log(`${normalizedUrl}`);

      let html = "";

      if (fs.existsSync(htmlPath)) {
        html = await fsp.readFile(htmlPath, "utf8");
      } else {
        html = await fetchWithRetry(normalizedUrl);
        html = unwrapSapUi5Content(html);

        if (
          !includesKeyword.some((keyword) => html.includes(keyword)) ||
          excludesKeyword.some((keyword) => html.includes(keyword))
        ) {
          console.log(`   [X] Skipping: ${normalizedUrl}`);

          if (!skippedUrls.includes(normalizedUrl)) {
            skippedUrls.push(normalizedUrl);
          }

          await writeManifestSnapshot();
          await sleep(50);
          continue;
        }

        await saveHtml(htmlPath, html);
      }

      if (!saved.includes(normalizedUrl)) {
        saved.push(normalizedUrl);
        savedFiles.push({
          url: normalizedUrl,
          htmlFile: path.relative(dirs.base, htmlPath),
        });
      }

      const extracted = extractLinks(html, normalizedUrl);

      if (extracted.changed) {
        html = extracted.html;
        await saveHtml(htmlPath, html);
      }

      for (const link of extracted.links) {
        if (saved.length + queue.length >= limit) break;
        if (!isDocHtml(link)) continue;

        const normalizedLink = normalizeUrl(link);

        if (!seen.has(normalizedLink)) {
          seen.add(normalizedLink);
          queue.push(normalizedLink);
        }
      }

      failedUrls = failedUrls.filter((failed) => failed !== normalizedUrl);

      if (saved.length % 50 === 0) {
        console.log(`   Progress: ${saved.length} files scraped`);
      }
    } catch (err) {
      console.warn(`⚠️ Failed: ${normalizedUrl}: ${err.message}`);

      if (!failedUrls.includes(normalizedUrl)) {
        failedUrls.push(normalizedUrl);
      }
    }

    await writeManifestSnapshot();
    await sleep(50);
  }

  await writeManifestSnapshot();

  console.log(`✅ Done`);
  console.log(`   Saved: ${saved.length}`);
  console.log(`   Failed: ${failedUrls.length}`);
  console.log(`   Skipped: ${skippedUrls.length}`);
  console.log(`   Queue remaining: ${queue.length}`);

  return {
    savedCount: saved.length,
    failedCount: failedUrls.length,
    skippedCount: skippedUrls.length,
  };
}

async function main() {
  const args = parseArgs(process.argv);

  try {
    await scrape(args);
  } catch (err) {
    console.error(`💥 Scraping failed: ${err.message}`);
    console.error(err.stack);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(`💥 Scraping failed: ${err.message}`);
  console.error(err.stack);
  process.exit(1);
});
