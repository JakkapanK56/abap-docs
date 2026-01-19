---
title: "ABAPSKIP"
description: |
  ABAPSKIP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSKIP.htm"
abapFile: "ABAPSKIP.html"
keywords: ["select", "do", "if", "case", "data", "ABAPSKIP"]
---

[Short Reference](ABAPSKIP_SHORTREF.html)

`SKIP \{\ [n]\       |\ \{TO LINE line\}\ \}.`

[1. `SKIP [n].`](#ABAP_VARIANT_1@1@)

[2. `SKIP TO LINE line.`](#ABAP_VARIANT_2@1@)

Positions the [list cursor](ABENLIST_CURSOR_GLOSRY.html) relative to the current line or in any other line.

This statement positions the list cursor relative to the current line. The new line is determined by the value of `n`. `n` expects a data object of type `i`. If the value of `n` is less than or equal to 0, the statement is ignored. If `n` is not specified, the statement is executed as if `n` contains the value 1.

The cursor is positioned as follows:

The following special conditions should be noted:

In most cases, this variant of the statement `SKIP` works as if it creates `n` blank lines. It should be noted, however, that these blank lines have no content that can be formatted using the [`FORMAT`](ABAPFORMAT.html) statement. Blank lines that can be formatted can only be created using the `WRITE` statement in combination with [`SET BLANK LINES`](ABAPSET_BLANK_LINES.html)\\ `ON`.

This statement positions the list cursor in the first position of the line on the current page whose number is determined by the value in `line`. `line` expects a data object of type `i`. If the value of `line` is less than or equal to 0, or greater than the page length defined in `sy-linct` using the addition [`LINE-COUNT`](ABAPNEW-PAGE_OPTIONS.html) of the program-initiating statement, or [`NEW-PAGE`](ABAPNEW-PAGE.html), the addition `TO LINE` is ignored and the statement `SKIP` without additions is executed instead.

If the list cursor is positioned in the first list line using `SKIP TO LINE`, and the list has a standard page header, the output in the first line is overwritten by the standard header. If, however, the cursor is positioned using `SKIP TO LINE` in the lines of page headers and page footers that are defined for [`TOP-OF-PAGE`](ABAPTOP-OF-PAGE.html) and [`END-OF-PAGE`](ABAPEND-OF-PAGE.html), the page headers or footers are overwritten.

The first `SKIP` statement creates a blank line for the event `TOP-OF-PAGE`. The second `SKIP` statement positions the list cursor in this line.

-   If the line of the current list cursor was set using an output statement ([`WRITE`](ABAPWRITE-.html), [`ULINE`](ABAPULINE.html)), the list cursor is set the first position of the line that is `n` lines under the current line.
-   If the lines of the current list cursor was set using a positioning statement ([`BACK`](ABAPBACK.html), [`NEW-LINE`](ABAPNEW-LINE.html), [`NEW-PAGE`](ABAPNEW-PAGE.html), `SKIP`), the list cursor is set in the current position in the line that is `n` minus 1 lines under the current line.

-   If the list cursor cannot be positioned on the current page, a new page is created, which includes any [page footers](ABENPAGE_FOOTER_GLOSRY.html) that the current page may have. The list cursor is positioned in the first position of the first line under the [page header](ABENPAGE_HEADER_GLOSRY.html) of the new page.
-   The statement is only executed at the start of the page if this page is the first in a list level, or it was created using the statement `NEW-PAGE`.

REPORT demo\_skip NO STANDARD PAGE HEADING. \\n\\ \\nDATA sum TYPE i. \\n\\ \\nTOP-OF-PAGE. \\n SKIP. \\n ULINE. \\n\\ \\nSTART-OF-SELECTION. \\n DO 10 TIMES. \\n WRITE / sy-index. \\n sum += sy-index. \\n ENDDO. \\n\\ \\n SKIP TO LINE 1. \\n WRITE: 'Numbers with sum' COLOR COL\_HEADING, \\n sum COLOR COL\_TOTAL. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html