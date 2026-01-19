---
title: "ABAPSCROLL"
description: |
  ABAPSCROLL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSCROLL.htm"
abapFile: "ABAPSCROLL.html"
keywords: ["select", "do", "while", "if", "data", "ABAPSCROLL"]
---

[Short Reference](ABAPSCROLL_SHORTREF.html)

``SCROLL LIST [[`horizontal`](ABAPSCROLL_LIST_HORIZONTAL.html)]``\\ 
            ``[[`vertical`](ABAPSCROLL_LIST_VERTICAL.html)]``\\ 
            `[INDEX idx].`

[`... INDEX idx`](#ABAP_ONE_ADD@1@)

This statement scrolls the display area of a list stored in the list buffer to the position specified in [`horizontal`](ABAPSCROLL_LIST_HORIZONTAL.html) and/or [`vertical`](ABAPSCROLL_LIST_VERTICAL.html). At least one of these additions must be specified, whereby all horizontal specifications refer to the columns of a displayed list. The corresponding section is displayed when the list is next displayed.

If the `SCROLL` statement is not used, a list is displayed during the initial display, starting from the first column of the first line. If the user navigates from a details list back to a lower list level, the list is displayed with the section in which it was last displayed. The `SCROLL` statement sets a new first column, a new first line, or both. Each `SCROLL` statement sets only the size specified in it, without changing any positions that are not affected.

The list level can be specified with the addition `INDEX`, where `idx` expects a data object of type `i`, which contains the list index. The value of `idx` must be greater than or equal to 0. If the addition `INDEX` is not specified, the list level 0 (the basic list itself) is selected when the basic list is created and the list level at which the event was raised (`sy-listi`) is selected when a list event is processed. If the list level specified in `idx` is not available, `sy-subrc` is set to the value 8.

While scrolling through the list that is being created (`sy-lsind`), it should be noted that a `SCROLL` statement is ignored prior to the first output statement, since the list does not yet exist in the list buffer.

By double-clicking the basic list, it is possible to scroll down this list in the event block [`AT LINE-SELECTION`](ABAPAT_LINE-SELECTION.html) to the page entered in a [selection screen](ABENSELECTION_SCREEN_GLOSRY.html). The lines on the page retain their original position with reference to the [page header](ABENPAGE_HEADER_GLOSRY.html) by using `sy-staro`. However, it is not necessary to set the column to `sy-staco` explicitly, since this position is retained during vertical scrolling.

REPORT LINE-COUNT 100 LINE-SIZE 100 \\n NO STANDARD PAGE HEADING. \\n\\ \\nSELECTION-SCREEN BEGIN OF SCREEN 500 AS WINDOW. \\nPARAMETERS page TYPE i. \\nSELECTION-SCREEN END OF SCREEN 500. \\n\\ \\nSTART-OF-SELECTION. \\n DO 10000 TIMES. \\n WRITE sy-index. \\n ENDDO. \\n\\ \\nTOP-OF-PAGE. \\n ULINE. \\n WRITE sy-pagno. \\n ULINE. \\n\\ \\nAT LINE-SELECTION. \\n CALL SELECTION-SCREEN 500 STARTING AT 10 10. \\n SCROLL LIST TO COLUMN sy-staco \\n TO PAGE page LINE sy-staro. `sy-subrc` **Meaning** 0 Screen section was scrolled successfully. 4 Complete scrolling not possible because the list margin was reached. 8 Scrolling not possible because the specified list level does not exist. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists\_complex.html