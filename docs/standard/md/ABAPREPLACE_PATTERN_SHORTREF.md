---
title: "ABAPREPLACE_PATTERN_SHORTREF"
description: |
  ABAPREPLACE_PATTERN_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREPLACE_PATTERN_SHORTREF.htm"
abapFile: "ABAPREPLACE_PATTERN_SHORTREF.html"
keywords: ["do", "if", "ABAPREPLACE", "PATTERN", "SHORTREF"]
---

[Reference](ABAPREPLACE_OBSOLETE.html)

`REPLACE substring WITH new INTO dobj          [IN \{BYTE|CHARACTER\} MODE]\          [LENGTH len].`

**Obsolete:** Searches for a character string or byte string `substring` in the variable `dobj` and replaces it with the content of `new`.

-   `IN \{CHARACTER|BYTE\} MODE`\\
    Specifies character string or byte string processing.
-   `LENGTH len`\\
    Uses only the first `len` characters or bytes from `substring` for searches.

abenabap.html abenabap\_reference.html abenabap\_shortref.html