---
title: "ABAPSCROLL_SHORTREF"
description: |
  ABAPSCROLL_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSCROLL_SHORTREF.htm"
abapFile: "ABAPSCROLL_SHORTREF.html"
keywords: ["do", "if", "ABAPSCROLL", "SHORTREF"]
---

[Reference](ABAPSCROLL.html)

`SCROLL LIST [\ \{ TO COLUMN col \}\              |\ \{\ \{LEFT|RIGHT\}\ [BY n PLACES]\ \}\ ]\              [\ \{ TO \{\ \{FIRST PAGE\}\                     |\ \{LAST PAGE\}\                     |\ \{PAGE pag\}\ \}\                     [LINE lin]\ \}\                |\ \{\ \{FORWARD|BACKWARD\}\ [n PAGES]\ \}\ ]\              [INDEX idx].`

Moves the display area of a list stored in the list buffer.

-   [`TO COLUMN col`](ABAPSCROLL_LIST_HORIZONTAL.html)\\
    Moves the area horizontally to the column `col`.
-   [`\{LEFT|RIGHT\}\ [BY n PLACES]`](ABAPSCROLL_LIST_HORIZONTAL.html)\\
    Moves the display area left or right either by the line width or by `n` places.
-   [`TO \{\ \{FIRST PAGE\}\ |\ \{LAST PAGE \}\ |\ \{PAGE pag\}\ [LINE lin]\ \}`](ABAPSCROLL_LIST_VERTICAL.html)\\
    Moves the display area vertically to the first or last page or to the page specified in `pag`. Here, the top line `lin` can be specified.
-   [`\{FORWARD|BACKWARD\}\ [n PAGES]`](ABAPSCROLL_LIST_VERTICAL.html)\\
    Moves the display area up or down, either by one page or by `pag` pages.
-   [`INDEX idx`](ABAPSCROLL.html)\\
    Specifies the list index in `idx`. If not specified, the list level is used on which a list event occurred.

abenabap.html abenabap\_reference.html abenabap\_shortref.html