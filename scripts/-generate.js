#!/usr/bin/env node
// ABAP Documentation Generator
// Converts HTML to Markdown, creates bundles, and applies all enhancements
// Supports two libraries: "standard" (latest) and "cloud" (cp)

import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { load as loadHtml } from "cheerio";
import TurndownService from "turndown";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

function parseArgs(argv) {
  return {};
}

function getOutputDirs(library) {
  const base = path.resolve(repoRoot, "docs", library);
  const html = path.resolve(base, "html");
  const md = path.resolve(base, "md");
  const bundles = path.resolve(base, "bundles");
  const megaBundles = path.resolve(base, "mega-bundles");
  const quickRef = path.resolve(base, "quick-ref");
  return { base, html, md, bundles, megaBundles, quickRef };
}

async function ensureDir(dir) {
  await fsp.mkdir(dir, { recursive: true });
}

// === HTML TO MARKDOWN CONVERSION WITH FRONTMATTER ===

function convertAndEnhanceMarkdown(html, htmlFile, library) {
  const $ = loadHtml(html);
  $("script, style, noscript, link").remove();

  const container = $(".all");
  const fragment = container.length
    ? container.html() || ""
    : $("body").html() || "";

  const turndown = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
    emDelimiter: "*",
  });

  turndown.addRule("keepBreaks", {
    filter: ["br"],
    replacement: () => "\n",
  });

  let content = turndown.turndown(fragment);

  // Fix JavaScript links
  content = fixJavaScriptLinks(content, library);

  // Extract metadata for frontmatter
  const metadata = extractMetadataFromContent(content, htmlFile, library);

  // Optimize content structure
  content = optimizeContentStructure(content);

  return { content, metadata };
}

function extractMetadataFromContent(content, htmlFile, library) {
  const config = LIBRARY_CONFIG[library];

  // Extract title from content
  const lines = content.split(/\r?\n/);
  let title = htmlFile.replace(/\.(htm|html)$/i, "").replace("aben", "");

  // Find actual title from content
  for (const line of lines) {
    const trimmed = line.trim();
    if (
      trimmed &&
      !trimmed.startsWith("AS ABAP Release") &&
      !trimmed.startsWith("[ABAP -") &&
      !trimmed.startsWith("[![") &&
      !trimmed.includes("Mail Feedback") &&
      !trimmed.includes("* * *") &&
      trimmed.match(/^[A-Z][a-zA-Z\s,\-()]+$/)
    ) {
      title = trimmed;
      break;
    }
  }

  // Extract description (first meaningful paragraph)
  const meaningfulLines = [];
  let foundTitle = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // Skip until we find the title
    if (!foundTitle) {
      if (trimmed === title) {
        foundTitle = true;
      }
      continue;
    }

    // Skip metadata and navigation
    if (
      !trimmed ||
      trimmed.startsWith("AS ABAP Release") ||
      trimmed.includes("©Copyright") ||
      trimmed.startsWith("[ABAP -") ||
      trimmed.includes("Mail Feedback") ||
      trimmed.startsWith("Continue") ||
      trimmed.startsWith("Programming Guideline")
    ) {
      continue;
    }

    meaningfulLines.push(trimmed);

    // Stop when we have enough for a good description
    if (meaningfulLines.join(" ").length > 300) {
      break;
    }
  }

  let description = meaningfulLines.join(" ").trim();
  if (description.length < 50) {
    description = `${title} - ${config.description}`;
  }

  // Extract ABAP-specific keywords
  const keywords = extractAbapKeywords(content);
  keywords.push(
    ...htmlFile
      .replace(/\.(htm|html)$/i, "")
      .split(/[_-]/)
      .filter((k) => k.length > 2),
  );

  return {
    title,
    description: description.substring(0, 300),
    category: determineCategory(title),
    library,
    libraryName: config.name,
    sourceUrl: getAbapFileUrl(
      htmlFile.replace(/\.(htm|html)$/i, ".md"),
      library,
    ),
    keywords: [...new Set(keywords)],
    abapFile: htmlFile,
    type: "abap-reference",
  };
}

function generateFrontmatter(metadata) {
  // Clean strings to avoid YAML parsing issues
  const cleanDescription = metadata.description
    .replace(/\n/g, " ")
    .replace(/\r/g, "")
    .replace(/\t/g, " ")
    .replace(/[\x00-\x1f\x7f-\x9f]/g, "") // Remove control characters
    .replace(/[*{}[\]|\\]/g, "") // Remove problematic YAML characters
    .replace(/"/g, "'") // Use single quotes
    .trim();

  const cleanTitle = metadata.title
    .replace(/[*{}[\]|\\]/g, "")
    .replace(/"/g, "'")
    .trim();

  const cleanKeywords = metadata.keywords
    .map((k) =>
      k
        .replace(/[*{}[\]|\\]/g, "")
        .replace(/"/g, "'")
        .trim(),
    )
    .filter((k) => k.length > 0);

  // Use YAML literal block for description to avoid escaping issues
  return `title: "${cleanTitle}"
description: |
  ${cleanDescription}
library: "${metadata.library}"
libraryName: "${metadata.libraryName}"
category: "${metadata.category}"
type: "${metadata.type}"
sourceUrl: "${metadata.sourceUrl}"
abapFile: "${metadata.abapFile}"
keywords: [${cleanKeywords.map((k) => `"${k}"`).join(", ")}]
`;
}

async function convertHtmlToMarkdownOptimized(library, force = true) {
  const dirs = getOutputDirs(library);
  const config = LIBRARY_CONFIG[library];

  if (!fs.existsSync(dirs.html)) {
    throw new Error(
      `HTML directory not found: ${dirs.html}. Run scraper first.`,
    );
  }

  // Always clean MD directory for fresh generation
  if (fs.existsSync(dirs.md)) {
    await fsp.rm(dirs.md, { recursive: true });
  }

  await ensureDir(dirs.md);

  const htmlFiles = await fsp.readdir(dirs.html);
  const mdFiles = [];

  console.log(
    `   📄 Converting ${htmlFiles.length} HTML files to optimized Markdown...`,
  );

  for (const htmlFile of htmlFiles) {
    if (!htmlFile.endsWith(".htm") && !htmlFile.endsWith(".html")) continue;
    if (htmlFile.includes("abap_docu_tree.htm")) continue; // Skip tree files

    // Skip news files - not relevant for standard search
    if (htmlFile.startsWith("abennews")) {
      console.log(`   ⏭️  Skipping news file: ${htmlFile}`);
      continue;
    }

    const htmlPath = path.resolve(dirs.html, htmlFile);
    const mdPath = path.resolve(
      dirs.md,
      htmlFile.replace(/\.(htm|html)$/i, ".md"),
    );

    try {
      const html = await fsp.readFile(htmlPath, "utf8");
      const { content, metadata } = convertAndEnhanceMarkdown(
        html,
        htmlFile,
        library,
      );

      // Generate frontmatter + content
      const frontmatterYaml = generateFrontmatter(metadata);
      const finalContent = `---\n${frontmatterYaml}---\n\n${content}`;

      await fsp.writeFile(mdPath, finalContent, "utf8");

      mdFiles.push({
        htmlFile,
        mdFile: path.relative(dirs.base, mdPath),
        file: htmlFile,
        title: metadata.title,
        category: metadata.category,
      });
    } catch (err) {
      console.warn(`   ⚠️  Failed to convert ${htmlFile}: ${err.message}`);
    }
  }

  console.log(
    `   ✅ Converted ${mdFiles.length} files to optimized Markdown (skipped ${htmlFiles.filter((f) => f.startsWith("abennews")).length} news files)`,
  );
  return mdFiles;
}

// === TREE PARSING AND BUNDLE GENERATION ===

function parseTreeFromHtml(html) {
  const $ = loadHtml(html);
  const rootContainer = $("body > div").first();
  if (!rootContainer.length) return null;

  function getHrefFile(href) {
    const m = href && href.match(/javascript:call_link\('(.*?)'\)/i);
    return m ? m[1] : null;
  }

  function parseContainer(container) {
    const nodes = [];
    const children = container.contents().toArray();

    for (let i = 0; i < children.length; i++) {
      const el = children[i];
      if (!el || !el.name) continue;

      const $el = $(el);

      if (
        el.name === "a" &&
        ($el.attr("href") || "").startsWith("javascript:change")
      ) {
        const changeHref = $el.attr("href") || "";
        const idMatch = changeHref.match(/change\(\s*'([^']+)'/);
        const subtreeId = idMatch ? idMatch[1] : null;

        let j = i + 1;
        let title = null;
        let file = null;

        // Find the associated link
        for (; j < children.length; j++) {
          const n = children[j];
          if (!n || !n.name) continue;
          const $n = $(n);
          if (n.name === "a") {
            const f = getHrefFile($n.attr("href"));
            if (f) {
              title = $n.text().trim();
              file = f;
              break;
            }
          }
        }

        // Find subtree
        let subtreeDiv = subtreeId
          ? container.find(`div#${subtreeId}`).first()
          : null;
        if (!subtreeDiv || !subtreeDiv.length) {
          for (let k = j + 1; k < children.length; k++) {
            const sib = children[k];
            if (sib && sib.name === "div" && $(sib).attr("id") === subtreeId) {
              subtreeDiv = $(sib);
              break;
            }
          }
        }

        const node = { title, file, children: [] };
        if (subtreeDiv && subtreeDiv.length) {
          node.children = parseContainer(subtreeDiv);
        }
        nodes.push(node);
        continue;
      }

      if (el.name === "a") {
        const f = getHrefFile($el.attr("href"));
        if (f) {
          nodes.push({ title: $el.text().trim(), file: f, children: [] });
        }
      }
    }
    return nodes;
  }

  const rootAnchor = rootContainer
    .children('a[href^="javascript:call_link("]')
    .first();
  const root = rootAnchor.length
    ? {
        title: rootAnchor.text().trim(),
        file: getHrefFile(rootAnchor.attr("href")),
        children: [],
      }
    : null;

  const items = parseContainer(rootContainer);

  if (root) {
    return { root, items };
  }
  return { root: null, items };
}

async function generateBundles(library, mdFiles, bundleBudget, force) {
  const dirs = getOutputDirs(library);

  // Clean bundles directory if force
  if (force && fs.existsSync(dirs.bundles)) {
    await fsp.rm(dirs.bundles, { recursive: true });
  }

  await ensureDir(dirs.bundles);

  // Parse tree structure
  const treeHtmlPath = path.resolve(dirs.html, "abap_docu_tree.htm");
  let bundles = [];

  if (!fs.existsSync(treeHtmlPath)) {
    console.log(`   ⚠️  Tree file not found, skipping bundle generation`);
    return bundles;
  }

  console.log(`   🌳 Parsing documentation tree and creating bundles...`);

  try {
    const html = await fsp.readFile(treeHtmlPath, "utf8");
    const tree = parseTreeFromHtml(html);

    if (!tree) {
      console.log(`   ⚠️  Failed to parse tree structure`);
      return bundles;
    }

    // Save tree structure
    const treePath = path.resolve(dirs.base, "tree.json");
    await fsp.writeFile(treePath, JSON.stringify(tree, null, 2));

    // Build file mapping
    const fileToMd = new Map();
    for (const f of mdFiles) {
      if (f.file && f.mdFile) {
        fileToMd.set(f.file, path.resolve(dirs.base, f.mdFile));
      }
    }

    function collectDescendantFiles(node) {
      const files = [];
      if (node.file) files.push(node.file);
      for (const c of node.children || []) {
        files.push(...collectDescendantFiles(c));
      }
      return files;
    }

    async function createBundleForNode(node, pathTitles) {
      if (!node || !node.children || node.children.length === 0) return;

      const descendantFiles = collectDescendantFiles(node).filter(
        (f) => f && !/abap_docu_tree\.htm/i.test(f),
      );

      const parts = [];

      for (const file of descendantFiles) {
        const mdPath = fileToMd.get(file);
        if (!mdPath) continue;
        try {
          const content = await fsp.readFile(mdPath, "utf8");
          parts.push({ file, content });
        } catch {}
      }

      const totalLength = parts.reduce((sum, p) => sum + p.content.length, 0);

      if (totalLength <= bundleBudget && parts.length > 1) {
        // Create bundle
        const combined = parts
          .map((p) => `\n\n### ${p.file}\n\n${p.content}\n`)
          .join("");
        const bundleTitle = [...pathTitles, node.title || "Section"].join(
          " / ",
        );

        let bundleNameSafe = bundleTitle
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");

        // Truncate long filenames
        if (bundleNameSafe.length > 100) {
          bundleNameSafe = bundleNameSafe.substring(0, 100).replace(/-+$/, "");
        }

        const bundlePath = path.resolve(dirs.bundles, bundleNameSafe + ".md");
        const header = `# ${bundleTitle}\n\nIncluded pages: ${parts.length}\n`;

        await fsp.writeFile(bundlePath, header + combined, "utf8");
        bundles.push({
          title: bundleTitle,
          file: path.relative(dirs.base, bundlePath),
          count: parts.length,
        });
      } else if (node.children && node.children.length) {
        // Process children recursively
        for (const child of node.children) {
          await createBundleForNode(child, [...pathTitles, node.title || ""]);
        }
      }
    }

    // Generate bundles from tree
    for (const topNode of tree.items || []) {
      await createBundleForNode(topNode, [
        tree.root ? tree.root.title : "ABAP - Keyword Documentation",
      ]);
    }

    console.log(`   ✅ Generated ${bundles.length} bundles`);
  } catch (err) {
    console.warn(`   ⚠️  Bundle generation failed: ${err.message}`);
  }

  return bundles;
}

// === LINK FIXING ===

function getAbapBaseUrl(library) {
  const config = LIBRARY_CONFIG[library];
  if (!config) {
    throw new Error(
      `Unknown library: ${library}. Valid options: standard, cloud`,
    );
  }
  return config.baseUrl;
}

function getAbapFileUrl(filename, library) {
  const htmFile = filename.replace(".md", ".htm");
  const baseUrl = getAbapBaseUrl(library);
  return `${baseUrl}/${htmFile}`;
}

function fixJavaScriptLinks(content, library) {
  const baseUrl = getAbapBaseUrl(library);
  let fixed = content;

  // Fix all variations of javascript:call_link
  const patterns = [
    /javascript:call_link\\\s*\(\s*['"](.*?)['"]\s*\\\)/g, // Escaped version
    /javascript:call_link\s*\(\s*['"](.*?)['"]\s*\)/g, // Regular version
  ];

  patterns.forEach((pattern) => {
    fixed = fixed.replace(pattern, (match, filename) => {
      const cleanFilename = filename.replace(/['"]/g, "").trim();
      return `${baseUrl}/${cleanFilename}`;
    });
  });

  // Fix internal table of contents links
  fixed = fixed.replace(
    /#@@ITOC@@([^@]+)@/g,
    (match, anchor) => `#${anchor.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
  );

  return fixed;
}

async function fixLinksInFiles(library, dirs) {
  console.log(`   🔗 Fixing JavaScript links...`);

  let fixedCount = 0;
  const directoriesToFix = [
    { path: dirs.md, name: "individual files" },
    { path: dirs.bundles, name: "bundles" },
  ];

  for (const { path: dirPath, name } of directoriesToFix) {
    if (!fs.existsSync(dirPath)) continue;

    const files = await fsp.readdir(dirPath);
    for (const file of files) {
      if (!file.endsWith(".md")) continue;

      const filePath = path.resolve(dirPath, file);
      const content = await fsp.readFile(filePath, "utf8");

      if (content.includes("javascript:call_link")) {
        const fixedContent = fixJavaScriptLinks(content, library);
        await fsp.writeFile(filePath, fixedContent, "utf8");
        fixedCount++;
      }
    }
  }

  console.log(`   ✅ Fixed JavaScript links in ${fixedCount} files`);
  return fixedCount;
}

// === STANDARD SYSTEM OPTIMIZATIONS ===

async function optimizeIndividualFiles(library) {
  const dirs = getOutputDirs(library);
  const config = LIBRARY_CONFIG[library];
  const mdFiles = await fsp.readdir(dirs.md);

  console.log(
    `   📄 Optimizing ${mdFiles.length} individual files for standard search...`,
  );

  const optimizedFiles = [];

  for (const file of mdFiles) {
    if (!file.endsWith(".md")) continue;

    const filePath = path.resolve(dirs.md, file);
    let content = await fsp.readFile(filePath, "utf8");

    // 1. Fix all JavaScript links to proper URLs
    content = fixJavaScriptLinks(content, library);

    // 2. Add source attribution header
    const sourceUrl = getAbapFileUrl(file, library);
    const htmFile = file.replace(".md", ".htm");
    const header = `> **📖 Official SAP Documentation**: [${htmFile}](${sourceUrl})\n\n`;

    // Only add header if not already present
    if (!content.includes("📖 Official SAP Documentation")) {
      content = header + content;
    }

    // 3. Extract metadata for better search
    const metadata = extractFileMetadata(content, file, library);

    // 4. Optimize content structure for LLM consumption
    content = optimizeContentStructure(content);

    // Write optimized file back
    await fsp.writeFile(filePath, content, "utf8");

    const stats = await fsp.stat(filePath);
    optimizedFiles.push({
      file,
      size: stats.size,
      title: metadata.title,
      keywords: metadata.keywords,
      category: metadata.category,
    });
  }

  console.log(`   ✅ Optimized ${optimizedFiles.length} individual files`);
  return optimizedFiles;
}

async function createSimpleIndex(library, optimizedFiles) {
  const dirs = getOutputDirs(library);
  const config = LIBRARY_CONFIG[library];

  // Simple index for standard search system integration
  const simpleIndex = {
    library,
    libraryName: config.name,
    generatedAt: new Date().toISOString(),
    totalFiles: optimizedFiles.length,
    baseUrl: getAbapBaseUrl(library),
    files: optimizedFiles.map((f) => ({
      file: f.file,
      title: f.title,
      size: f.size,
      keywords: f.keywords,
      category: f.category,
      url: getAbapFileUrl(f.file, library),
    })),
  };

  // Write simple index (not the complex bundling indexes)
  await fsp.writeFile(
    path.resolve(dirs.base, "files_index.json"),
    JSON.stringify(simpleIndex, null, 2),
  );

  console.log(
    `   📋 Created simple index with ${simpleIndex.totalFiles} files`,
  );
  return simpleIndex;
}

function optimizeContentStructure(content) {
  // Remove excessive whitespace but preserve structure
  content = content.replace(/\n{3,}/g, "\n\n");

  // Ensure proper heading hierarchy
  content = content.replace(/^#{5,}/gm, "####"); // Max 4 levels

  // Add clear section breaks
  content = content.replace(/^(#{1,4}\s+)/gm, "\n$1");

  // Remove empty sections
  content = content.replace(/^#+\s*\n+(?=^#+)/gm, "");

  return content.trim();
}

function extractFileMetadata(content, filename, library) {
  const config = LIBRARY_CONFIG[library];

  // Extract title (first heading or from filename)
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch
    ? titleMatch[1].trim()
    : filename.replace(".md", "").replace("aben", "");

  // Extract keywords from content and filename
  const keywords = [
    // From filename
    ...filename
      .replace(".md", "")
      .split(/[_-]/)
      .filter((k) => k.length > 2),
    // From title
    ...title
      .toLowerCase()
      .split(/\s+/)
      .filter((k) => k.length > 2),
    // From content (common ABAP terms)
    ...extractAbapKeywords(content),
  ];

  // Determine category
  const category = determineCategory(title + " " + filename);

  return {
    title,
    keywords: [...new Set(keywords)],
    category,
  };
}

function extractAbapKeywords(content) {
  const abapKeywords = [];
  const contentLower = content.toLowerCase();

  // ABAP statements
  const statements = [
    "select",
    "insert",
    "update",
    "delete",
    "loop",
    "do",
    "while",
    "if",
    "case",
    "try",
    "catch",
    "method",
    "class",
    "data",
    "types",
  ];
  statements.forEach((stmt) => {
    if (contentLower.includes(stmt)) abapKeywords.push(stmt);
  });

  // ABAP concepts
  const concepts = [
    "internal table",
    "field symbol",
    "exception handling",
    "object oriented",
  ];
  concepts.forEach((concept) => {
    if (contentLower.includes(concept))
      abapKeywords.push(concept.replace(" ", "-"));
  });

  return abapKeywords;
}

// === ENHANCEMENT FEATURES ===

function determineCategory(title) {
  const titleLower = title.toLowerCase();

  if (titleLower.includes("sql") || titleLower.includes("database"))
    return "database";
  if (
    titleLower.includes("object") ||
    titleLower.includes("class") ||
    titleLower.includes("interface")
  )
    return "oop";
  if (titleLower.includes("table") || titleLower.includes("itab"))
    return "data-structures";
  if (titleLower.includes("exception") || titleLower.includes("error"))
    return "error-handling";
  if (
    titleLower.includes("ui") ||
    titleLower.includes("screen") ||
    titleLower.includes("dynpro")
  )
    return "ui";
  if (titleLower.includes("cds") || titleLower.includes("annotation"))
    return "cds";
  if (titleLower.includes("type") || titleLower.includes("ddic"))
    return "types";

  return "general";
}

function determineDifficulty(title) {
  const advanced = [
    "amdp",
    "cds",
    "annotations",
    "hierarchies",
    "meshes",
    "channels",
    "transformations",
  ];
  const beginner = [
    "basic",
    "simple",
    "introduction",
    "overview",
    "getting started",
  ];

  const titleLower = title.toLowerCase();

  if (advanced.some((term) => titleLower.includes(term))) return "advanced";
  if (beginner.some((term) => titleLower.includes(term))) return "beginner";
  return "intermediate";
}

function enhanceBundleIndex(bundles, library) {
  const searchIndex = {
    keywords: new Set(),
    topics: new Set(),
    statements: new Set(),
  };

  const enhancedBundles = bundles.map((bundle) => {
    // Extract keywords from title
    const titleWords = bundle.title
      .toLowerCase()
      .split(/[\/\-\s\(\)]+/)
      .filter((word) => word.length > 2)
      .filter(
        (word) =>
          ![
            "abap",
            "keyword",
            "documentation",
            "the",
            "and",
            "for",
            "with",
          ].includes(word),
      );

    // Categorize content
    const topics = [];
    const statements = [];

    titleWords.forEach((word) => {
      searchIndex.keywords.add(word);

      // Identify ABAP statements
      if (
        [
          "select",
          "insert",
          "update",
          "delete",
          "loop",
          "do",
          "while",
          "if",
          "case",
          "try",
          "catch",
        ].includes(word)
      ) {
        statements.push(word);
        searchIndex.statements.add(word);
      }

      // Identify major topics
      if (
        [
          "sql",
          "cds",
          "oop",
          "objects",
          "tables",
          "types",
          "exceptions",
          "classes",
        ].includes(word)
      ) {
        topics.push(word);
        searchIndex.topics.add(word);
      }
    });

    return {
      ...bundle,
      keywords: titleWords,
      topics,
      statements,
      searchText: bundle.title.toLowerCase(),
      difficulty: determineDifficulty(bundle.title),
      category: determineCategory(bundle.title),
    };
  });

  return {
    metadata: {
      library,
      bundleCount: bundles.length,
      generatedAt: new Date().toISOString(),
      keywords: Array.from(searchIndex.keywords).sort(),
      topics: Array.from(searchIndex.topics).sort(),
      statements: Array.from(searchIndex.statements).sort(),
    },
    bundles: enhancedBundles,
  };
}

async function createMegaBundles(library, enhancedIndex) {
  const dirs = getOutputDirs(library);
  await ensureDir(dirs.megaBundles);

  console.log(`   🚀 Creating mega bundles...`);

  // Group bundles by category
  const categories = {};
  enhancedIndex.bundles.forEach((bundle) => {
    const category = bundle.category;
    if (!categories[category]) categories[category] = [];
    categories[category].push(bundle);
  });

  const megaBundles = [];
  const config = LIBRARY_CONFIG[library];

  for (const [category, bundles] of Object.entries(categories)) {
    if (bundles.length < 3) continue; // Skip categories with too few bundles

    const megaBundleContent = [];
    megaBundleContent.push(
      `# ABAP ${category.toUpperCase()} - Complete Reference (${config.name})`,
    );
    megaBundleContent.push(`\n**Generated**: ${new Date().toISOString()}`);
    megaBundleContent.push(`**Bundles Combined**: ${bundles.length}`);
    megaBundleContent.push(`**Category**: ${category}`);
    megaBundleContent.push(`**Library**: ${library}`);
    megaBundleContent.push("\n---\n");

    let totalFiles = 0;

    for (const bundle of bundles) {
      const bundlePath = path.resolve(
        dirs.bundles,
        bundle.file.replace("bundles/", ""),
      );

      try {
        const content = await fsp.readFile(bundlePath, "utf8");
        const fixedContent = fixJavaScriptLinks(content, library);

        megaBundleContent.push(`\n## ${bundle.title}\n`);
        megaBundleContent.push(
          `**Files**: ${bundle.count} | **Difficulty**: ${bundle.difficulty}\n`,
        );
        megaBundleContent.push(fixedContent);
        megaBundleContent.push("\n---\n");

        totalFiles += bundle.count;
      } catch (err) {
        console.warn(
          `   ⚠️  Failed to read bundle ${bundle.file}: ${err.message}`,
        );
      }
    }

    const megaBundleFilename = `abap-${category}-complete.md`;
    const megaBundlePath = path.resolve(dirs.megaBundles, megaBundleFilename);

    await fsp.writeFile(megaBundlePath, megaBundleContent.join("\n"), "utf8");

    megaBundles.push({
      title: `ABAP ${category.toUpperCase()} - Complete Reference`,
      file: `mega-bundles/${megaBundleFilename}`,
      category,
      bundleCount: bundles.length,
      totalFiles,
      keywords: [...new Set(bundles.flatMap((b) => b.keywords))],
      difficulty: "comprehensive",
    });
  }

  console.log(`   ✅ Created ${megaBundles.length} mega bundles`);
  return megaBundles;
}

async function createQuickReferences(library, enhancedIndex) {
  const dirs = getOutputDirs(library);
  await ensureDir(dirs.quickRef);

  console.log(`   📋 Creating quick references...`);

  const baseUrl = getAbapBaseUrl(library);
  const config = LIBRARY_CONFIG[library];

  // ABAP Statements Quick Reference
  const statements = enhancedIndex.metadata.statements;
  const statementsRef = [
    "# ABAP Statements Quick Reference",
    `\n**Library**: ${config.name}`,
    `**Generated**: ${new Date().toISOString()}`,
    `**📖 Source Documentation**: [ABAP Keyword Documentation](${baseUrl}/index.htm)`,
    "\n## Core Statements\n",
    ...statements.map(
      (stmt) =>
        `- **${stmt.toUpperCase()}** - [Search for details](abap_search?query=${stmt})`,
    ),
    "\n## Categories\n",
    "### Data Processing",
    "- SELECT, INSERT, UPDATE, DELETE - Database operations",
    "- READ TABLE, LOOP AT - Internal table operations",
    "- MOVE, ASSIGN - Data assignments",
    "\n### Control Flow",
    "- IF/ENDIF, CASE/ENDCASE - Conditional logic",
    "- DO/ENDDO, WHILE/ENDWHILE - Loops",
    "- TRY/CATCH - Exception handling",
    "\n### Object-Oriented",
    "- CLASS/ENDCLASS - Class definitions",
    "- METHOD/ENDMETHOD - Method implementations",
    "- CREATE OBJECT - Object instantiation",
  ];

  await fsp.writeFile(
    path.resolve(dirs.quickRef, "abap-statements-quick-ref.md"),
    statementsRef.join("\n"),
    "utf8",
  );

  // Topic Index
  const topicsRef = [
    "# ABAP Topics Index",
    `\n**Library**: ${config.name}`,
    `**Generated**: ${new Date().toISOString()}`,
    `**📖 Source Documentation**: [ABAP Keyword Documentation](${baseUrl}/index.htm)`,
    "\n## Major Topics\n",
    ...enhancedIndex.metadata.topics.map(
      (topic) =>
        `- **${topic.toUpperCase()}** - [Search bundles](abap_search?query=${topic})`,
    ),
    "\n## By Difficulty\n",
    "### Beginner",
    ...enhancedIndex.bundles
      .filter((b) => b.difficulty === "beginner")
      .slice(0, 10)
      .map((b) => `- ${b.title}`),
    "\n### Advanced",
    ...enhancedIndex.bundles
      .filter((b) => b.difficulty === "advanced")
      .slice(0, 10)
      .map((b) => `- ${b.title}`),
  ];

  await fsp.writeFile(
    path.resolve(dirs.quickRef, "abap-topics-index.md"),
    topicsRef.join("\n"),
    "utf8",
  );

  const quickRefs = [
    {
      title: "ABAP Statements Quick Reference",
      file: "quick-ref/abap-statements-quick-ref.md",
      type: "quick-reference",
      keywords: statements,
    },
    {
      title: "ABAP Topics Index",
      file: "quick-ref/abap-topics-index.md",
      type: "index",
      keywords: enhancedIndex.metadata.topics,
    },
  ];

  console.log(`   ✅ Created ${quickRefs.length} quick references`);
  return quickRefs;
}

async function createIndividualFileIndex(library) {
  const dirs = getOutputDirs(library);

  if (!fs.existsSync(dirs.md)) {
    return [];
  }

  const mdFiles = await fsp.readdir(dirs.md);
  const individualFiles = [];

  for (const file of mdFiles) {
    if (!file.endsWith(".md")) continue;

    const filePath = path.resolve(dirs.md, file);
    const stats = await fsp.stat(filePath);
    const content = await fsp.readFile(filePath, "utf8");

    // Extract title from content
    const titleMatch = content.match(/^# (.+)$/m);
    const title = titleMatch ? titleMatch[1] : file.replace(".md", "");

    // Extract keywords from filename and title
    const keywords = [
      ...file
        .replace(".md", "")
        .split(/[_-]/)
        .filter((k) => k.length > 2),
      ...title
        .toLowerCase()
        .split(/\s+/)
        .filter((k) => k.length > 2),
    ];

    // Determine topic category
    let category = "general";
    const titleLower = title.toLowerCase();
    if (titleLower.includes("select") || titleLower.includes("database"))
      category = "database";
    else if (titleLower.includes("class") || titleLower.includes("method"))
      category = "oop";
    else if (
      titleLower.includes("loop") ||
      titleLower.includes("do") ||
      titleLower.includes("while")
    )
      category = "control-flow";
    else if (titleLower.includes("type") || titleLower.includes("data"))
      category = "data-types";
    else if (titleLower.includes("exception") || titleLower.includes("try"))
      category = "exception-handling";
    else if (titleLower.includes("cds") || titleLower.includes("annotation"))
      category = "cds";

    individualFiles.push({
      file: `md/${file}`,
      title,
      size: stats.size,
      category,
      keywords: [...new Set(keywords)],
      difficulty:
        stats.size > 10000
          ? "advanced"
          : stats.size > 5000
            ? "intermediate"
            : "beginner",
      searchText: `${title} ${file}`.toLowerCase(),
    });
  }

  return individualFiles.sort((a, b) => a.title.localeCompare(b.title));
}

// === MAIN GENERATION FUNCTION ===

async function generateLibraryForStandardSystem(library, opts) {
  const { force = true } = opts;
  const dirs = getOutputDirs(library);
  const config = LIBRARY_CONFIG[library];

  console.log(
    `🔄 Generating ${config.name} documentation for standard MCP system...`,
  );

  if (!fs.existsSync(dirs.html)) {
    throw new Error(
      `HTML directory not found: ${dirs.html}. Run scraper first.`,
    );
  }

  // Step 1: Convert HTML to optimized Markdown with frontmatter
  const mdFiles = await convertHtmlToMarkdownOptimized(library, force);

  // Step 2: Optimize individual files for standard search
  const optimizedFiles = await optimizeIndividualFiles(library);

  // Step 3: Create simple index for integration
  const simpleIndex = await createSimpleIndex(library, optimizedFiles);

  console.log(
    `   ⏭️  Skipping complex bundling (not needed for standard MCP system)`,
  );

  return {
    library,
    libraryName: config.name,
    fileCount: optimizedFiles.length,
    avgFileSize: Math.round(
      optimizedFiles.reduce((sum, f) => sum + f.size, 0) /
        optimizedFiles.length,
    ),
    baseUrl: getAbapBaseUrl(library),
    integration: "standard-mcp-system",
  };
}

async function generateLibrary(library, opts) {
  const { force = true, standardSystem = true } = opts;
  const config = LIBRARY_CONFIG[library];

  if (!config) {
    throw new Error(
      `Unknown library: ${library}. Valid options: standard, cloud`,
    );
  }

  // Use standard system by default
  if (standardSystem) {
    return await generateLibraryForStandardSystem(library, opts);
  }

  // Original complex generation (preserved for compatibility)
  const dirs2 = getOutputDirs(library);

  console.log(`🔄 Generating documentation for ${config.name}...`);

  if (!fs.existsSync(dirs2.html)) {
    throw new Error(
      `HTML directory not found: ${dirs2.html}. Run scraper first.`,
    );
  }

  // Step 1: Convert HTML to Markdown
  const mdFiles = await convertHtmlToMarkdownOptimized(library, force);

  // Step 2: Generate bundles from tree structure
  const bundles = await generateBundles(
    library,
    mdFiles,
    opts.bundleBudget,
    force,
  );

  // Step 3: Fix JavaScript links in all files
  await fixLinksInFiles(library, dirs2);

  // Step 4: Create enhanced bundle index
  const enhancedIndex = enhanceBundleIndex(bundles, library);

  // Step 5: Create mega bundles
  const megaBundles = await createMegaBundles(library, enhancedIndex);

  // Step 6: Create quick references
  const quickRefs = await createQuickReferences(library, enhancedIndex);

  // Step 7: Create individual file index for optimal LLM consumption
  const individualFiles = await createIndividualFileIndex(library);

  // Write all indexes
  await fsp.writeFile(
    path.resolve(dirs2.base, "bundles_index.json"),
    JSON.stringify({ bundles }, null, 2),
  );

  const enhancedBundleIndex = {
    ...enhancedIndex,
    megaBundles,
    quickReferences: quickRefs,
  };

  await fsp.writeFile(
    path.resolve(dirs2.base, "enhanced_bundles_index.json"),
    JSON.stringify(enhancedBundleIndex, null, 2),
  );

  const optimizedIndex = {
    metadata: {
      library,
      libraryName: config.name,
      generatedAt: new Date().toISOString(),
      individualFiles: individualFiles.length,
      bundles: bundles.length,
      megaBundles: megaBundles.length,
      quickRefs: quickRefs.length,
      optimization: "individual-files-first",
    },
    individualFiles,
    bundles: enhancedIndex.bundles,
    megaBundles,
    quickReferences: quickRefs,
    searchStrategy: {
      priority1: "individual-files",
      priority2: "focused-bundles",
      priority3: "quick-references",
      priority4: "mega-bundles",
    },
  };

  await fsp.writeFile(
    path.resolve(dirs2.base, "optimized_index.json"),
    JSON.stringify(optimizedIndex, null, 2),
  );

  // Update manifest
  const manifestPath = path.resolve(dirs2.base, "_manifest.json");
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(await fsp.readFile(manifestPath, "utf8"));

    // Update file mappings
    if (manifest.files) {
      manifest.files = manifest.files.map((f) => {
        const mdFile = mdFiles.find((md) => md.htmlFile === f.htmlFile);
        return {
          url: f.url,
          htmlFile: f.htmlFile,
          mdFile: mdFile ? mdFile.mdFile : undefined,
        };
      });
    }

    manifest.generatedAt = new Date().toISOString();
    manifest.output = {
      ...manifest.output,
      mdDir: path.relative(dirs2.base, dirs2.md),
      bundlesDir: path.relative(dirs2.base, dirs2.bundles),
      megaBundlesDir: path.relative(dirs2.base, dirs2.megaBundles),
      quickRefDir: path.relative(dirs2.base, dirs2.quickRef),
    };

    await fsp.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  }

  return {
    library,
    libraryName: config.name,
    mdCount: mdFiles.length,
    bundleCount: bundles.length,
    megaBundleCount: megaBundles.length,
    quickRefCount: quickRefs.length,
    individualFiles: individualFiles.length,
    baseUrl: getAbapBaseUrl(library),
  };
}

async function main() {
  const args = parseArgs(process.argv);

  if (args.all) {
    console.log(`🚀 Generating all ABAP documentation libraries...`);

    const libraries = ["standard", "cloud"];
    const results = [];

    for (const library of libraries) {
      try {
        const result = await generateLibrary(library, args);
        results.push(result);

        if (result.integration === "standard-mcp-system") {
          console.log(
            `✅ ${result.libraryName}: ${result.fileCount} optimized files (avg: ${result.avgFileSize}B)`,
          );
        } else {
          console.log(
            `✅ ${result.libraryName}: ${result.mdCount} MD files, ${result.bundleCount} bundles, ${result.megaBundleCount} mega-bundles`,
          );
        }
      } catch (err) {
        console.error(`❌ ${library}: ${err.message}`);
      }
    }

    console.log(`\n📊 Generation Summary:`);
    console.log(`   Libraries processed: ${results.length}`);

    const standardResults = results.filter(
      (r) => r.integration === "standard-mcp-system",
    );
    const complexResults = results.filter(
      (r) => r.integration !== "standard-mcp-system",
    );

    if (standardResults.length > 0) {
      console.log(
        `   📄 Standard system files: ${standardResults.reduce((sum, r) => sum + r.fileCount, 0)}`,
      );
      console.log(
        `   📊 Average file size: ${Math.round(standardResults.reduce((sum, r) => sum + r.avgFileSize, 0) / standardResults.length)}B`,
      );
    }

    if (complexResults.length > 0) {
      console.log(
        `   📄 Total MD files: ${complexResults.reduce((sum, r) => sum + (r.mdCount || 0), 0)}`,
      );
      console.log(
        `   📦 Total bundles: ${complexResults.reduce((sum, r) => sum + (r.bundleCount || 0), 0)}`,
      );
      console.log(
        `   🚀 Total mega-bundles: ${complexResults.reduce((sum, r) => sum + (r.megaBundleCount || 0), 0)}`,
      );
    }

    return results;
  }

  // Single library
  try {
    const result = await generateLibrary(args.library, args);
    console.log(`\n✅ Generation completed for ${result.libraryName}:`);

    if (result.integration === "standard-mcp-system") {
      // Standard system output
      console.log(`   📄 ${result.fileCount} individual files optimized`);
      console.log(`   📊 Average file size: ${result.avgFileSize} bytes`);
      console.log(`   🌐 Base URL: ${result.baseUrl}`);
      console.log(
        `   📂 Output: docs/${result.library}/md/ (ready for standard MCP)`,
      );
      console.log(`   ✨ Integration: ${result.integration}`);
    } else {
      // Complex bundling output
      console.log(`   📄 ${result.mdCount} Markdown files`);
      console.log(`   📦 ${result.bundleCount} bundles`);
      console.log(`   🚀 ${result.megaBundleCount} mega-bundles`);
      console.log(`   📋 ${result.quickRefCount} quick references`);
      console.log(`   📋 ${result.individualFiles} individual files indexed`);
      console.log(`   🌐 Base URL: ${result.baseUrl}`);
      console.log(`   📂 Output: docs/${result.library}/`);
    }
  } catch (err) {
    console.error(`❌ Generation failed: ${err.message}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(`💥 Generation failed: ${err.message}`);
  console.error(err.stack);
  process.exit(1);
});
