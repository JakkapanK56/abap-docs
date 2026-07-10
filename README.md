# ABAP Documentation Scraper & Generator

This project scrapes and processes SAP ABAP Keyword Documentation, optimizing it for consumption by MCP servers and LLMs.

## 📚 Supported Libraries

| Library           | Description                                                      | Source URL                                                |
| ----------------- | ---------------------------------------------------------------- | --------------------------------------------------------- |
| **Standard ABAP** | Complete Standard ABAP language reference (includes all history) | `help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US` |

## 🚀 Quick Start

### Prerequisites

- Node.js 22+ (uses native fetch)
- Dependencies: `npm install`

### Basic Usage

```bash
# Scrape HTML documentation
npm run scrape              # Standard ABAP (default)
npm run scrape:retry        # Retry scrape (limited concurrency)

# Generate Markdown, bundles, and enhancements
npm run generate            # Standard ABAP (default)

# Complete pipeline (scrape + generate)
npm run pipeline            # Standard ABAP (default)
```

## 📁 Output Structure

```
docs/
├── html/              # Raw scraped HTML files
├── md/                # Individual Markdown files (1-10KB each)
├── _manifest.json     # Scraping metadata
└── md_index.json      # File Mapping
```

### Search Strategy (Priority Order)

1. **Individual Files** (`md/` folder) - Best for specific queries

### Key Features

- ✅ **All JavaScript links eliminated** - No `javascript:call_link()` instances
- ✅ **Source URLs embedded** - Direct links to official SAP documentation
- ✅ **Size-optimized** - Individual files 1-10KB, perfect for LLM context windows
- ✅ **Rich metadata** - Categories, keywords for enhanced search

### Recommended Implementation

Use `optimized_index.json` for the optimal "Individual Files First" search strategy (as recommended in `.cursor` documentation):

## 📊 Statistics

- **~6,000+ documentation pages** per library
- **Zero JavaScript links** - all converted to direct URLs
- **Multi-tier indexing** - Individual files, bundles, mega-bundles, and quick refs

## 🔧 Advanced Options

### Scraping Options

```bash
node scripts/scrape.js --fresh --out docs
```

### Generation Options

```bash
node scripts/generate.js --src docs
```

### Available Flags

| Flag      | Description        | Default |
| --------- | ------------------ | ------- |
| `--fresh` | Force fresh scrape | `false` |
| `--retry` | Retry scrape       | `false` |
| `--out`   | Output directory   | `docs`  |
| `--src`   | Source directory   | `html`  |

## 🎉 Architecture

This streamlined version uses just **2 scripts**:

- **`scripts/scrape.js`** - Clean, focused HTML scraping
- **`scripts/generate.js`** - Complete MD generation with all enhancements integrated

### Integrated Features in `generate.js`:

- ✅ HTML to Markdown conversion
- ✅ JavaScript link fixing
- ✅ Enhanced metadata generation (frontmatter)
- ✅ Source URL embedding
- ✅ Content optimization for LLM consumption

No complex pipeline scripts or separate enhancement steps - everything is integrated and optimized for maintainability.
