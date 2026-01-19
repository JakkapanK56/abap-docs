---
title: "ABAPNEW-PAGE_OPTIONS"
description: |
  ABAPNEW-PAGE_OPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPNEW-PAGE_OPTIONS.htm"
abapFile: "ABAPNEW-PAGE_OPTIONS.html"
keywords: ["select", "do", "if", "data", "ABAPNEW", "PAGE", "OPTIONS"]
---

[Short Reference](ABAPNEW-PAGE_SHORTREF.html)

`... [WITH-TITLE|NO-TITLE]`\\ 
    `[WITH-HEADING|NO-HEADING]`\\ 
    `[LINE-COUNT page_lines]`\\ 
    `[LINE-SIZE width]`\\ 
    `[NO-TOPOFPAGE] ...`

[1. `... WITH-TITLE|NO-TITLE`](#ABAP_ADDITION_1@3@)

[2. `... WITH-HEADING|NO-HEADING`](#ABAP_ADDITION_2@3@)

[3. `... LINE-COUNT page_lines`](#ABAP_ADDITION_3@3@)

[4. `... LINE-SIZE width`](#ABAP_ADDITION_4@3@)

[5. `... NO-TOPOFPAGE`](#ABAP_ADDITION_5@3@)

These additions set properties of the list for all subsequent pages of the current list level, until they are set again in another `NEW-PAGE` statement. The additions override identically named additions in the program-initiating statement.

These additions specify which components of the standard page header are output for the subsequent pages of the current list level. The standard page header consists of a standard header and column headers.

The additions `WITH-TITLE` and `NO-TITLE` switch the output of the standard header on or off for all subsequent pages. The predefined default setting for basic lists is `WITH-TITLE`, and for details lists is `NO-TITLE`.

The additions `WITH-HEADING` and `NO-HEADING` switch the output of the column headers on or off for all subsequent pages. The predefined default setting for basic lists is `WITH-HEADING`, and for details lists is `NO-HEADING`.

For basic lists, these additions override the setting made in the program-initiating statement. The addition `NO STANDARD PAGE HEADING` used here is equivalent to using `NO-TITLE` and `NO-HEADING` simultaneously, with the exception that the latter additions do not have an impact on the system field `sy-wtitl`.

This addition sets the page length of the subsequent pages of the current list level to the value in `page_lines` and sets `sy-linct` to this value. `page_lines` expects a data object of type `i`. If the value of `page_lines` is less than or equal to 0 or greater than 60000, the page length is set to 60000. For the basic list, the addition overrides the page length specified in the program-initiating statement.

The page length determines how many lines, including the [page header](ABENPAGE_HEADER_GLOSRY.html) and [page footer](ABENPAGE_FOOTER_GLOSRY.html), can be written to a list page. If output is written to a line outside the current page length or in the area reserved for the page footer of a basic list, a new page is created automatically.

The following code demonstrates automatic page breaks in a basic list. The pages have two-line page headers and page footers defined after [`TOP-OF-PAGE`](ABAPTOP-OF-PAGE.html) and [`END-OF-PAGE`](ABAPEND-OF-PAGE.html). The page length is specified after `NEW-PAGE`. The program displays five pages.

This addition sets the page width of the current list level to the value in `width` and sets `sy-linsz` to this value. The line width determines the number of characters in the list buffer as well as the number of columns in the list displayed. `width` expects a data object of type `i`. The value of `width` must not be negative. If the value of `width` is equal to 0 or greater than 1023, the line width is set to a default width, which is based on the window width of the current [dynpro](ABENDYNPRO_GLOSRY.html) (`sy-scols`), but is at least as wide as the width of a standard sized GUI window. For the basic list, the addition overrides the page width specified in the program-initiating statement.

The addition has an effect only if no output has yet been sent to the current list level. The page width of a list that has already been written cannot be changed.

The current maximum line width is stored in the constants `slist_max_linesize` of the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `SLIST`. A type `slist_max_listline` of type `c` and length `slist_max_linesize` is also defined there.

Creates a basic list and details lists with various page widths. Only the standard title of the standard page header is displayed.

This addition suppresses the event [`TOP-OF-PAGE`](ABAPTOP-OF-PAGE.html) on the new page and on all automatically created pages of the current list level up to the next statement `NEW-PAGE`. If the addition `NO-TOPOFPAGE` is not specified, the event `TOP-OF-PAGE` is raised before the output is sent to a new page.

The following program generates six pages. The event `TOP-OF-PAGE` is raised only on the first page.

-   The lines reserved in the program-initiating statement for the page footer of the basic list cannot be changed with the addition `LINE-COUNT` of the statement `NEW-PAGE`. A page footer cannot be created for details lists.
-   The default value should be used for screen lists since, as a rule, page breaks specified using `LINE-COUNT` are not adjusted to the window size.
-   The default value should also be used for spool lists, so that the page size can be selected on a printer-specific basis. A spool list should be created in such a way that it provides meaningful results for any page size.
-   Specifying a fixed line count is only useful for form-like lists with a fixed page layout. Here, however, it is always advisable to check whether these forms can be created by other means. This can be done, for example, by searching [SAP Help Portal](http://help.sap.com) for the term *form*.

REPORT NO STANDARD PAGE HEADING LINE-COUNT 0(2). \\n\\ \\nTOP-OF-PAGE. \\n WRITE sy-pagno. \\n ULINE. \\n\\ \\nEND-OF-PAGE. \\n ULINE. \\n WRITE 'Footer'. \\n\\ \\nSTART-OF-SELECTION. \\n NEW-PAGE LINE-COUNT 6. \\n DO 10 TIMES. \\n WRITE / sy-index. \\n ENDDO. REPORT demo NO STANDARD PAGE HEADING. \\n\\ \\nSTART-OF-SELECTION. \\n NEW-PAGE WITH-TITLE LINE-SIZE 40. \\n WRITE 'Basic list'. \\n\\ \\nAT LINE-SELECTION. \\n NEW-PAGE WITH-TITLE LINE-SIZE 20. \\n WRITE 'Secondary list'. REPORT demo NO STANDARD PAGE HEADING. \\n\\ \\nSTART-OF-SELECTION. \\n ULINE. \\n NEW-PAGE NO-TOPOFPAGE LINE-COUNT 2. \\n DO 10 TIMES. \\n WRITE / sy-index. \\n ENDDO. \\n\\ \\nTOP-OF-PAGE. \\n WRITE 'Basic list'. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html abapnew-page.html