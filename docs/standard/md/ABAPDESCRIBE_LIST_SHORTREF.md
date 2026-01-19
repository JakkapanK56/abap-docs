---
title: "ABAPDESCRIBE_LIST_SHORTREF"
description: |
  ABAPDESCRIBE_LIST_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDESCRIBE_LIST_SHORTREF.htm"
abapFile: "ABAPDESCRIBE_LIST_SHORTREF.html"
keywords: ["if", "ABAPDESCRIBE", "LIST", "SHORTREF"]
---

[Reference](ABAPDESCRIBE_LIST.html)

`DESCRIBE LIST \{\ \{NUMBER OF \{LINES|PAGES\} n\}\                |\ \{LINE linno PAGE page\}\                |\ \{PAGE pagno [LINE-SIZE width]\                              [LINE-COUNT page_lines]\                              [LINES lines]\                              [FIRST-LINE first_line]\                              [TOP-LINES top_lines]\                              [TITLE-LINES title_lines]\                              [HEAD-LINES header_lines]\                              [END-LINES footer_lines]\}\ \}\                [INDEX idx].`

Determines the properties of a list in the list buffer.

-   `NUMBER OF \{LINES|PAGES\} n`\\
    Returns the number of lines or pages in `n`.
-   `LINE linno PAGE page`\\
    Returns the page of the line specified in `linno` in `page`.
-   `PAGE pagno`\\
    Returns properties of the page specified in `pagno`:
    \\
    [`LINE-SIZE width`](ABAPDESCRIBE_LIST_PAGE_PROPERTIES.html) - Width
    \\
    [`LINE-COUNT page_lines`](ABAPDESCRIBE_LIST_PAGE_PROPERTIES.html) - Page lines
    \\
    [`LINES lines`](ABAPDESCRIBE_LIST_PAGE_PROPERTIES.html) - Number of lines
    \\
    [`FIRST-LINE first_line`](ABAPDESCRIBE_LIST_PAGE_PROPERTIES.html) - Line number of the first line
    \\
    [`TOP-LINES top_lines`](ABAPDESCRIBE_LIST_PAGE_PROPERTIES.html) - Number of [header lines](ABENHEADER_LINE_GLOSRY.html)\\
    \\
    [`TITLE-LINES title_lines`](ABAPDESCRIBE_LIST_PAGE_PROPERTIES.html) - Number of title lines
    \\
    [`HEAD-LINES header_lines`](ABAPDESCRIBE_LIST_PAGE_PROPERTIES.html) - Number of column header lines
    \\
    [`END-LINES footer_lines`](ABAPDESCRIBE_LIST_PAGE_PROPERTIES.html) - Number of footer lines
-   `INDEX idx`\\
    Specifies the list index in `idx`. If the index is not specified, either the basic list or the list in which a list event occurred is evaluated.

abenabap.html abenabap\_reference.html abenabap\_shortref.html