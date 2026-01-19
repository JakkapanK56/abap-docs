---
title: "ABAPSELECTION-SCREEN_SKIP"
description: |
  ABAPSELECTION-SCREEN_SKIP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_SKIP.htm"
abapFile: "ABAPSELECTION-SCREEN_SKIP.html"
keywords: ["select", "if", "data", "ABAPSELECTION", "SCREEN", "SKIP"]
---

[Short Reference](ABAPSELECTION-SCREEN_SHORTREF.html)

``SELECTION-SCREEN SKIP [n]\ [[`ldb_additions`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html)].``

This statement creates `n` blank lines on the current [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) below the lines already filled. The value `n` must be specified directly as a single-digit positive number. If `n` is not specified, a single blank line is created.

The [`ldb_additions`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html) can only be used in the selection include of a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_layout.html