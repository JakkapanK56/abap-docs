---
title: "ABAPREAD_LINE_SHORTREF"
description: |
  ABAPREAD_LINE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_LINE_SHORTREF.htm"
abapFile: "ABAPREAD_LINE_SHORTREF.html"
keywords: ["do", "if", "data", "ABAPREAD", "LINE", "SHORTREF"]
---

[Reference](ABAPREAD_LINE.html)

`READ \{\ \{LINE line [\{OF PAGE page\}|\{OF CURRENT PAGE\}]\                    [INDEX idx]\}\       |\ \{CURRENT LINE\}\ \}\       [LINE VALUE INTO wa]\       [FIELD VALUE dobj1 [INTO wa1] dobj2 [INTO wa2] ...].`

Reads a list line from the [list buffer](ABENLIST_BUFFER_GLOSRY.html) and assigns the content to `sy-lisel`.

-   [`LINE line`](ABAPREAD_LINE.html)\\
    Specifies the line to be read in `line`.
-   [`OF \{PAGE page\}|\{CURRENT PAGE\}`](ABAPREAD_LINE.html)\\
    Specifies the page on which a list event was raised in `page` or as the top page of the displayed list.
-   [`INDEX idx`](ABAPREAD_LINE.html)\\
    Specifies the list index in `idx`. If not specified, the list level is used on which a list event occurred.
-   [`CURRENT LINE`](ABAPREAD_LINE.html)\\
    Specifies the line in which a list event was raised.
-   [`LINE VALUE INTO wa`](ABAPREAD_LINE_RESULT.html)\\
    Assigns the content of the list line to the work area `wa`.
-   [`FIELD VALUE dobj1 [INTO wa1] dobj2 [INTO wa2] ...`](ABAPREAD_LINE_RESULT.html)\\
    Assigns the output areas of the data objects `dobj1`, `dobj2`, ... (in the list line output) to the data objects `wa1`, `wa2`, ...

abenabap.html abenabap\_reference.html abenabap\_shortref.html