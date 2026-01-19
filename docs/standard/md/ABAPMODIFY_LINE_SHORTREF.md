---
title: "ABAPMODIFY_LINE_SHORTREF"
description: |
  ABAPMODIFY_LINE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMODIFY_LINE_SHORTREF.htm"
abapFile: "ABAPMODIFY_LINE_SHORTREF.html"
keywords: ["do", "if", "data", "ABAPMODIFY", "LINE", "SHORTREF"]
---

[Reference](ABAPMODIFY_LINE.html)

`MODIFY \{\ \{LINE line [OF \{PAGE page\}|\{CURRENT PAGE\}]\ [INDEX idx]\}\         |\ \{CURRENT LINE\}\ \}\         [LINE VALUE FROM wa]\         [FIELD VALUE dobj1 [FROM wa1] dobj2 [FROM wa2] ...]\         [LINE FORMAT ext_format_options]\         [FIELD FORMAT dobj1 ext_format_options1                       dobj2 ext_format_options2 ...].`

Overwrites a list line in the list buffer with the content of `sy-lisel` and performs additional modifications in the additions.

-   [`LINE line`](ABAPMODIFY_LINE.html)\\
    Specifies the line to be changed in `line`.
-   [`OF \{PAGE page\}|\{CURRENT PAGE\}`](ABAPMODIFY_LINE.html)\\
    Specifies the page in `page` or the top page displayed in the list in which a list event was raised.
-   [`INDEX idx`](ABAPMODIFY_LINE.html)\\
    Specifies the list index in `idx`. If not specified, the list level is used on which a list event was raised.
-   [`CURRENT LINE`](ABAPMODIFY_LINE.html)\\
    Specifies the line in which a list event was raised.
-   [`LINE VALUE FROM wa`](ABAPMODIFY_LINE_MODIFICATION.html)\\
    Overwrites the whole list line with the content of `wa`.
-   [`FIELD VALUE dobj1 [FROM wa1] dobj2 [FROM wa2] ...`](ABAPMODIFY_LINE_MODIFICATION.html)\\
    Overwrites the output areas of the data objects `dobj1`, `dobj2`, ... displayed in the list line with the current content of these objects or with the content of the data objects `wa1`, `wa2`, ...
-   [`LINE FORMAT ext_format_options`](ABAPMODIFY_LINE_MODIFICATION.html)\\
    Formats the whole list line using the additions of the statement `FORMAT`.
-   [`FIELD FORMAT dobj1 ext_format_options1 dobj2 ext_format_options2 ...`](ABAPMODIFY_LINE_MODIFICATION.html)\\
    Formats the output areas of the data objects `dobj1`, `dobj2`, ... displayed in the list line using the additions of the statement `FORMAT`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html