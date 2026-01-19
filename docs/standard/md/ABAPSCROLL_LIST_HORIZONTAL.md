---
title: "ABAPSCROLL_LIST_HORIZONTAL"
description: |
  ABAPSCROLL_LIST_HORIZONTAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSCROLL_LIST_HORIZONTAL.htm"
abapFile: "ABAPSCROLL_LIST_HORIZONTAL.html"
keywords: ["select", "do", "if", "data", "ABAPSCROLL", "LIST", "HORIZONTAL"]
---

[Short Reference](ABAPSCROLL_SHORTREF.html)

`... \{TO COLUMN col\}\    |\ \{\{LEFT|RIGHT\}\ [BY n PLACES]\} ...`

[1. `... TO COLUMN col`](#ABAP_ALTERNATIVE_1@2@)

[2. `... LEFT [BY n PLACES]`](#ABAP_ALTERNATIVE_2@2@)

[3. `... RIGHT [BY n PLACES]`](#ABAP_ALTERNATIVE_3@2@)

These additions are used to scroll horizontally in the list.

When scrolling horizontally using the statement `SCROLL`, only the upper or lower limit of data objects displayed should be specified because the positions in the list buffer and in the list displayed only match for these values.

The addition `TO COLUMN` specifies the value from `col` for the first column in the screen segment. `col` expects a data object of type `i`. If the value in `col` is less than or equal to 0, it is processed as 1. If it is greater than the current line width, it is processed like this line width and `sy-subrc` is set to 4.

Before the first display, the main list is scrolled to column 25. Since [`SET LEFT SCROLL-BOUNDARY`](ABAPSET_SCROLL-BOUNDARY.html) is specified, the display of the IDs of the carriers stays fixed.

The addition `LEFT` without `BY n PLACES` sets the first column in the screen segment to the value 1. The addition `LEFT` with `BY n PLACES` sets the current first column (`sy-staco`) minus the value in `n` as the first column in the display segment. `n` expects a data object of type `i`. If the result is less than or equal to 0, it is processed as 1 and `sy-subrc` is set to 4.

The addition `RIGHT` without `BY n PLACES` sets the line length (`sy-linsz`) minus the window width (`sy-scols` minus 2) for the first column in the screen segment. If the result is less than or equal to 0, it is processed as 1. The addition `RIGHT` with `BY n PLACES` enters the current first column (`sy-staco`) plus the value in `n` for the first column in the display segment; `n` expects a data object of type `i`. If the result is greater than the current line length, it is processed like the current line length and `sy-subrc` is set to 4.

DATA scarr\_wa TYPE scarr. \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO @scarr\_wa. \\n WRITE: / scarr\_wa-carrid COLOR COL\_KEY. \\n SET LEFT SCROLL-BOUNDARY. \\n WRITE: scarr\_wa-carrname, \\n scarr\_wa-currcode, \\n (40) scarr\_wa-url. \\nENDSELECT. \\n\\ \\nSCROLL LIST TO COLUMN 25. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists\_complex.html abapscroll.html