---
title: "ABAPNEW-LINE"
description: |
  ABAPNEW-LINE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPNEW-LINE.htm"
abapFile: "ABAPNEW-LINE.html"
keywords: ["do", "if", "ABAPNEW", "LINE"]
---

[Short Reference](ABAPNEW-LINE_SHORTREF.html)

`NEW-LINE [NO-SCROLLING|SCROLLING].`

[1. `... NO-SCROLLING`](#ABAP_ADDITION_1@3@)

[2. `... SCROLLING`](#ABAP_ADDITION_2@3@)

This statement sets the [list cursor](ABENLIST_CURSOR_GLOSRY.html) to the first position of the next line after the current line, if the current position of the list cursor resulted from a previous output statement. In the first line of a new page and if the current list cursor was set to the list line using the statements [`SKIP`](ABAPSKIP.html), `NEW-LINE`, [`NEW-PAGE`](ABAPNEW-PAGE.html) or [`BACK`](ABAPBACK.html), `NEW-LINE` is ignored by the list cursor.

The statement `NEW-LINE` is executed implicitly at the end of an [event block](ABENEVENT_BLOCK_GLOSRY.html).

The addition `NO-SCROLLING` has the effect that the first line of the current list level written after the statement `NEW-LINE` using an output statement ([`WRITE`](ABAPWRITE-.html) or [`ULINE`](ABAPULINE.html)) cannot be moved horizontally. This applies to scrolling in the list displayed on the screen by the user and also to scrolling using the statement [`SCROLL`](ABAPSCROLL.html). Vertical scrolling is not affected.

To freeze an area that covers multiple lines, the statement [`SET LEFT SCROLL-BOUNDARY`](ABAPSET_SCROLL-BOUNDARY.html) can be used.

The line with the output *Fixed Line* is not moved by horizontal scrolling.

The addition `SCROLLING` undoes the addition `NO-SCROLLING` (default setting). The addition `NO-SCROLLING` can only be undone before an output statement is executed. Once a line has been frozen, this state can no longer be undone.

WRITE / 'Scrollable Line'. \\nNEW-LINE NO-SCROLLING. \\nWRITE: / 'Fixed Line', \\n / 'Scrollable Line'. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html