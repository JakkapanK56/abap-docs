---
title: "ABAPWRITE_TO_ITAB_SHORTREF"
description: |
  ABAPWRITE_TO_ITAB_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWRITE_TO_ITAB_SHORTREF.htm"
abapFile: "ABAPWRITE_TO_ITAB_SHORTREF.html"
keywords: ["do", "data", "internal-table", "ABAPWRITE", "ITAB", "SHORTREF"]
---

[Reference](ABAPWRITE_TO_ITAB.html)

`WRITE dobj TO itab[+off][(len)] INDEX idx        [int_format_options].`

**Obsolete:** Writes the content of a data object to the line of the internal table `itab` with the index `idx`.

-   `[+off][(len)]`\\
    Writes to the section from position `pos` and the length `len` of the table line.
-   [`format_options`](ABAPWRITE_TO_OPTIONS.html)\\
    Additions as in the statement [`WRITE TO`](ABAPWRITE_TO_SHORTREF.html) for variables.

abenabap.html abenabap\_reference.html abenabap\_shortref.html