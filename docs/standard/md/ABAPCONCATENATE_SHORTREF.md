---
title: "ABAPCONCATENATE_SHORTREF"
description: |
  ABAPCONCATENATE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCONCATENATE_SHORTREF.htm"
abapFile: "ABAPCONCATENATE_SHORTREF.html"
keywords: ["do", "if", "internal-table", "ABAPCONCATENATE", "SHORTREF"]
---

[Reference](ABAPCONCATENATE.html)

`CONCATENATE \{dobj1 dobj2 ...\}|\{LINES OF itab\}`\\ 
            `INTO result`\\ 
            `[IN \{CHARACTER|BYTE\} MODE]`\\ 
            `[SEPARATED BY sep]`\\ 
            `[RESPECTING BLANKS].`

Concatenates the content of `dobj1 dobj2 ...` or the lines of an internal table `itab` and assigns the result `result`.

-   `IN \{CHARACTER|BYTE\} MODE`\\
    Specifies character string or byte string processing.
-   `SEPARATED BY sep`\\
    Specifies a separator character or a separator byte in `sep`.
-   `RESPECTING BLANKS`\\
    Respects trailing blanks in `dobj1 dobj2 ...` or in the lines of `itab`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html