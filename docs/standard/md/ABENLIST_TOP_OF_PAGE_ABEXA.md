---
title: "ABENLIST_TOP_OF_PAGE_ABEXA"
description: |
  ABENLIST_TOP_OF_PAGE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLIST_TOP_OF_PAGE_ABEXA.htm"
abapFile: "ABENLIST_TOP_OF_PAGE_ABEXA.html"
keywords: ["select", "do", "if", "data", "ABENLIST", "TOP", "PAGE", "ABEXA"]
---

The example shows how to define the page header at the `TOP-OF-PAGE` event.

This program creates a two-page list. In the user-defined page header, column headers are placed in relative position to each other using the system field `sy-colno` and the `POSITION` statement. The actual list output is positioned under the fields of the header line using the addition `UNDER` of the `WRITE` statement. The line breaks are achieved using `NEW-LINE`.

The alignment of the individual fields results from the ABAP default of representing character strings as left-aligned and numeric fields as right-aligned. The alignment can be adjusted using the formatting options `LEFT-JUSTIFIED`, `RIGHT-JUSTIFIED`, and `CENTERED` of the `WRITE` statement (see [`WRITE - format_options`](ABAPWRITE_TO_OPTIONS.html)).

REPORT demo\_list\_top\_of\_page NO STANDARD PAGE HEADING\\n LINE-SIZE 80 LINE-COUNT 7.\\n\\nDATA: h1(10) TYPE c VALUE ' Number',\\n h2(10) TYPE c VALUE ' Square',\\n h3(10) TYPE c VALUE ' Cube',\\n n1 TYPE i, n2 TYPE i, n3 TYPE i,\\n x TYPE i.\\n\\nTOP-OF-PAGE.\\n\\n x = sy-colno + 8. POSITION x. WRITE h1.\\n x = sy-colno + 8. POSITION x. WRITE h2.\\n x = sy-colno + 8. POSITION x. WRITE h3.\\n x = sy-colno + 16. POSITION x. WRITE sy-pagno.\\n ULINE.\\n\\nSTART-OF-SELECTION.\\n\\n DO 10 TIMES.\\n n1 = sy-index. n2 = sy-index \*\* 2. n3 = sy-index \*\* 3.\\n NEW-LINE.\\n WRITE: n1 UNDER h1,\\n n2 UNDER h2,\\n n3 UNDER h3.\\n ENDDO.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists\_interactive.html abaptop-of-page.html