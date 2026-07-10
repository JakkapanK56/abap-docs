#!/usr/bin/env node

import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { load as loadHtml } from "cheerio";
import TurndownService from "turndown";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const baseUrl =
  "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US";

function parseArgs(argv) {
  const args = {};

  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];

    if (a === "--src") {
      args.srcDir = argv[++i];
      continue;
    }
  }

  return {
    srcDir: args.srcDir || "docs",
  };
}

function getOutputDirs(srcDir) {
  const base = path.resolve(repoRoot, srcDir);
  return {
    base,
    html: path.resolve(base, "html"),
    md: path.resolve(base, "md"),
  };
}

async function ensureDir(dir) {
  await fsp.mkdir(dir, { recursive: true });
}

function getSourceUrl(htmlFile) {
  return `${baseUrl}/${htmlFile}`;
}

function cleanTitleFromFile(file) {
  return file
    .replace(/\.(htm|html)$/i, "")
    .replace(/^aben/i, "")
    .replace(/_/g, " ");
}

function extractTitle($, htmlFile) {
  const h1 = $("h1").first().text().trim();
  if (h1) return h1;

  const title = $("title").first().text().trim();
  if (title) return title;

  const navCurrent = $(".breadcrumbs span").last().text().trim();
  if (navCurrent) return navCurrent;

  return cleanTitleFromFile(htmlFile);
}

function fixLinks(markdown) {
  let fixed = markdown;

  fixed = fixed.replace(
    /javascript:call_link\\?\(['"]([^'"]+\.html?)['"]\\?\)/gi,
    (match, href) => {
      return href.toUpperCase().replace(/\.(htm|html)$/i, ".md");
    },
  );

  fixed = fixed.replace(
    /\]\(([^)\s]+\.html?)(\s+"[^"]*")?\)/gi,
    (match, href, title = "") => {
      const mdHref = href.toUpperCase().replace(/\.(htm|html)$/i, ".md");

      return `](${mdHref}${title})`;
    },
  );

  fixed = fixed.replace(/\]\(([^)]+)\)/g, (match, href) => {
    if (/^https?:\/\//i.test(href)) return match;
    if (href.startsWith("#")) return match;

    const [filePart, anchorPart = ""] = href.split("#");

    if (!/\.(htm|html)$/i.test(filePart)) return match;

    const mdHref =
      filePart.toUpperCase().replace(/\.(htm|html)$/i, ".md") +
      (anchorPart ? `#${anchorPart}` : "");

    return `](${mdHref})`;
  });

  return fixed;
}

function generateFrontmatter({ title, htmlFile }) {
  const safeTitle = title.replace(/"/g, "'");

  return `---
title: "${safeTitle}"
sourceUrl: "${getSourceUrl(htmlFile)}"
abapFile: "${htmlFile}"
type: "abap-reference"
---

`;
}

function htmlToMarkdown(html, htmlFile) {
  const $ = loadHtml(html);

  $("script, style, noscript, link").remove();

  const title = extractTitle($, htmlFile);

  const fragment = $(".all").length
    ? $(".all").html() || ""
    : $("body").html() || "";

  const turndown = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
    emDelimiter: "*",
  });

  turndown.addRule("br", {
    filter: "br",
    replacement: () => "\n",
  });

  let markdown = turndown.turndown(fragment);

  markdown = fixLinks(markdown);
  markdown = markdown.replace(/\n{3,}/g, "\n\n").trim();

  return generateFrontmatter({ title, htmlFile }) + markdown + "\n";
}

async function generate() {
  const { srcDir } = parseArgs(process.argv);
  const dirs = getOutputDirs(srcDir);

  if (!fs.existsSync(dirs.html)) {
    throw new Error(`HTML directory not found: ${dirs.html}`);
  }

  if (fs.existsSync(dirs.md)) {
    await fsp.rm(dirs.md, {
      recursive: true,
      force: true,
    });
  }

  await ensureDir(dirs.md);

  const files = await fsp.readdir(dirs.html);
  const converted = [];

  for (const file of files) {
    if (!/\.(htm|html)$/i.test(file)) continue;
    if (file.includes("abap_docu_tree")) continue;
    if (file.startsWith("abennews")) continue;

    try {
      const htmlPath = path.resolve(dirs.html, file);
      const mdFile = file.toUpperCase().replace(/\.(htm|html)$/i, ".md");
      const mdPath = path.resolve(dirs.md, mdFile);

      const html = await fsp.readFile(htmlPath, "utf8");
      const markdown = htmlToMarkdown(html, file);

      await fsp.writeFile(mdPath, markdown, "utf8");

      converted.push({
        htmlFile: file,
        mdFile,
      });

      console.log(`✅ ${file} -> ${mdFile}`);
    } catch (err) {
      console.warn(`⚠️ Failed ${file}: ${err.message}`);
    }
  }

  const indexPath = path.resolve(dirs.base, "md_index.json");

  await fsp.writeFile(
    indexPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        count: converted.length,
        files: converted,
      },
      null,
      2,
    ),
    "utf8",
  );

  console.log(`\nDone: ${converted.length} files converted`);
}

generate().catch((err) => {
  console.error(`💥 Generation failed: ${err.message}`);
  console.error(err.stack);
  process.exit(1);
});
