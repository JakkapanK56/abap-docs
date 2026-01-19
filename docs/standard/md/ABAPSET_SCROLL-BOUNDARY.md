---
title: "ABAPSET_SCROLL-BOUNDARY"
description: |
  ABAPSET_SCROLL-BOUNDARY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_SCROLL-BOUNDARY.htm"
abapFile: "ABAPSET_SCROLL-BOUNDARY.html"
keywords: ["select", "if", "data", "ABAPSET", "SCROLL", "BOUNDARY"]
---

[Short Reference](ABAPSET_LEFT_SCROLL_BOUND_SHORTREF.html)

`SET LEFT SCROLL-BOUNDARY [COLUMN col].`

[`... COLUMN col`](#ABAP_ONE_ADD@1@)

This statement sets the left boundary of the horizontally movable area of the current page. This applies to both user-activated scrolling through the list displayed on-screen and to scrolling activated by the [`SCROLL`](ABAPSCROLL.html) statement. For the statement to work properly, the [list cursor](ABENLIST_CURSOR_GLOSRY.html) must be positioned on a page with an output statement or with [`SKIP`](ABAPSKIP.html). The statement works only on this page. If the statement is executed multiple times for one page, the last statement takes effect.

If the addition `COLUMN` is not specified, all places on the current page that are located to the left of the current position of the list cursor (`sy-colno`) are excluded from horizontal scrolling.

If the addition `COLUMN` is specified, this applies to all columns in the current page that are located to the left of the position specified in `col`. Here `col` refers to the columns in the list displayed. `col` expects a data object of the type `i`. If the value in `col` is less than or equal to 0, or greater than the current list width, the statement is ignored.

Output of a tabular list of airlines from the database table `SCARR`, in which the area for output from the key field is fixed.

-   Only the lower or upper limit of output data objects should be used as the edge of a movable area, because only the position of Unicode characters in the list buffer and in the displayed list is guaranteed to match these limits.
-   To prevent an entire line from being horizontally movable, the [`NEW-LINE`](ABAPNEW-LINE.html)\\ `NO-SCROLLING` statement should be used.

DATA scarr\_wa TYPE scarr. \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO @scarr\_wa. \\n WRITE: / scarr\_wa-carrid COLOR COL\_KEY. \\n SET LEFT SCROLL-BOUNDARY. \\n WRITE: scarr\_wa-carrname, \\n scarr\_wa-currcode, \\n (40) scarr\_wa-url. \\nENDSELECT. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html