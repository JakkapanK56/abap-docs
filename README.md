# ABAP Documentation Scraper & Generator

This project scrapes and processes SAP ABAP Keyword Documentation, optimizing it for consumption by MCP servers and LLMs.

## 📚 Supported Libraries

| Library | Description | Source URL |
|---------|-------------|------------|
| **Standard ABAP** | Complete Standard ABAP language reference (includes all history) | `help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/` |
| **ABAP Cloud** | ABAP Cloud language reference for cloud development | `help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/` |

## 🚀 Quick Start

### Prerequisites
- Node.js 22+ (uses native fetch)
- Dependencies: `npm install`

### Basic Usage

```bash
# Scrape HTML documentation
npm run scrape              # Standard ABAP (default)
npm run scrape:standard     # Standard ABAP explicitly
npm run scrape:cloud        # ABAP Cloud
npm run scrape:all          # Both libraries

# Generate Markdown, bundles, and enhancements
npm run generate            # Standard ABAP (default)
npm run generate:standard   # Standard ABAP explicitly
npm run generate:cloud      # ABAP Cloud
npm run generate:all        # Both libraries

# Complete pipeline (scrape + generate)
npm run pipeline            # Standard ABAP (default)
npm run pipeline:standard   # Standard ABAP explicitly
npm run pipeline:cloud      # ABAP Cloud
npm run pipeline:all        # Both libraries
```

## 📁 Output Structure

```
docs/
├── standard/              # Standard ABAP (from "latest")
│   ├── html/              # Raw scraped HTML files
│   ├── md/                # Individual Markdown files (1-10KB each)
│   ├── _manifest.json     # Scraping metadata
│   └── files_index.json   # File index for MCP integration
└── cloud/                 # ABAP Cloud (from "cp")
    ├── html/              # Raw scraped HTML files
    ├── md/                # Individual Markdown files (1-10KB each)
    ├── _manifest.json     # Scraping metadata
    └── files_index.json   # File index for MCP integration
```

## 🎯 MCP Server Integration

The generated documentation is optimized for MCP server consumption:

### Search Strategy (Priority Order)
1. **Individual Files** (`md/` folder) - Best for specific queries
2. **File Index** (`files_index.json`) - Quick lookup by keywords/categories

### Key Features
- ✅ **All JavaScript links eliminated** - No `javascript:call_link()` instances
- ✅ **Source URLs embedded** - Direct links to official SAP documentation
- ✅ **Size-optimized** - Individual files 1-10KB, perfect for LLM context windows
- ✅ **Rich metadata** - Categories, keywords for enhanced search
- ✅ **Two libraries** - Standard ABAP and ABAP Cloud

### Recommended Implementation
Use `optimized_index.json` for the optimal "Individual Files First" search strategy (as recommended in `.cursor` documentation):

```javascript
// Load the optimized index
const index = JSON.parse(fs.readFileSync('docs/standard/optimized_index.json'));

// Priority 1: Search individual files (best for LLMs)
const specificResults = index.individualFiles.filter(f => 
  f.keywords.some(k => k.includes(query.toLowerCase()))
).sort((a, b) => b.score - a.score);

// Priority 2: Fall back to focused bundles if needed
if (specificResults.length < 5) {
  const bundleResults = index.bundles.filter(b => ...);
}
```

## 📊 Statistics

- **~6,000+ documentation pages** per library
- **Zero JavaScript links** - all converted to direct URLs
- **Two libraries** - Standard ABAP and ABAP Cloud
- **Multi-tier indexing** - Individual files, bundles, mega-bundles, and quick refs

## 🔧 Advanced Options

### Scraping Options
```bash
node scripts/scrape.js --library standard --limit 1000 --concurrency 4 --force
node scripts/scrape.js --library cloud --force
```

### Generation Options  
```bash
node scripts/generate.js --library standard --force
node scripts/generate.js --library cloud --force
```

### Available Flags
| Flag | Description | Default |
|------|-------------|---------|
| `--library` | Library to process (`standard` or `cloud`) | `standard` |
| `--all` | Process both libraries | `false` |
| `--force` | Force re-scrape/regenerate even if already done | `false` |
| `--limit` | Maximum number of pages to scrape | `Infinity` |
| `--concurrency` | Number of concurrent fetch requests | `8` |

## 📝 Library Support

Supported ABAP libraries (defined in `roots.txt`):
- **Standard ABAP** (`standard`) - Latest Standard ABAP documentation with full history
- **ABAP Cloud** (`cloud`) - ABAP Cloud documentation for cloud development

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
