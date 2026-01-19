---
title: "ABAPREPORT_LIST_OPTIONS"
description: |
  ABAPREPORT_LIST_OPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREPORT_LIST_OPTIONS.htm"
abapFile: "ABAPREPORT_LIST_OPTIONS.html"
keywords: ["select", "do", "if", "ABAPREPORT", "LIST", "OPTIONS"]
---

[Short Reference](ABAPREPORT_SHORTREF.html)

`... [NO STANDARD PAGE HEADING]\      [LINE-SIZE width]\      [LINE-COUNT page_lines[(footer_lines)]] ...`

[1. `... NO STANDARD PAGE HEADING`](#ABAP_ADDITION_1@3@)

[2. `... LINE-SIZE width`](#ABAP_ADDITION_2@3@)

[3. `... LINE-COUNT page_lines[(footer_lines)]`](#ABAP_ADDITION_3@3@)

These additions affect the basic list of the program.

This addition suppresses the output of the [standard page header](ABENSTANDARD_PAGE_HEADER_GLOSRY.html) (standard header and column headers) in the basic list of the program and sets the system field `sy-wtitl` to the value *N*. This setting can be overwritten when the list is created using the additions `NO-TITLE|WITH-TITLE` and `NO-HEADING|WITH-HEADING` of the statement [`NEW-PAGE`](ABAPNEW-PAGE_OPTIONS.html).

This addition specifies the line width of the basic list and details list of the program to `width` characters and sets the system field `sy-linsz` to this value. The line width determines the number of characters in the line buffer as well as the number of columns in the list displayed. The value `width` must be specified directly as a positive number. The maximum line width is 1023.

If `LINE-SIZE` is not specified, the line width of the basic list is set to a standard width based on the window width of the current [dynpro](ABENDYNPRO_GLOSRY.html), but is at least as wide as a standard size GUI window. For the standard width, the content of `sy-linsz` is 0. The specification of `LINE-SIZE` overwrites the value passed to the identically named addition `LINE-SIZE` of the statement [`SUBMIT`](ABAPSUBMIT_LIST_OPTIONS.html) and can be overwritten when the list is created using the identically named addition `LINE-SIZE` of the statement [`NEW-PAGE`](ABAPNEW-PAGE_OPTIONS.html).

The current maximum line width is stored in the constant `SLIST_MAX_LINESIZE` of the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `SLIST`. A type `SLIST_MAX_LISTLINE` of type `c` with length `SLIST_MAX_LINESIZE` is also defined there. The constant `SLIST_MAX_LINESIZE` cannot be used in the statement `REPORT` but can be used in the statement [`NEW-PAGE`](ABAPNEW-PAGE.html).

This addition specifies the page length for the basic list of the program as `page_lines` lines and fills the system field `sy-linct` with this value. If `LINE-COUNT` is not specified and for `page_lines` less than 0 or greater than 60000, the page length is set internally to 60000. This setting overwrites the value passed to the identically named addition `LINE-SIZE` of the statement [`SUBMIT`](ABAPSUBMIT_LIST_OPTIONS.html) and can be overwritten when the list is created by the identically named addition `LINE-COUNT` of the statement [`NEW-PAGE`](ABAPNEW-PAGE_OPTIONS.html).

The optional specification of a number for `footer_lines` is used to reserve a corresponding number of lines for the [page footer](ABENPAGE_FOOTER_GLOSRY.html), which can be described in the event block `END-OF-PAGE`.

`page_lines` and `footer_lines` must be specified directly as positive numbers and no sign can be specified for `footer_lines` here.

The page length of the basic list is set to 65 lines, of which eight lines are reserved for the page footer. The line width is 132 characters.

-   The default value should be used for screen lists because page changes specified using `LINE-COUNT` are usually not adjusted to the window size.
-   The default value should also be used for spool lists, so that the page size can be selected on a printer-specific basis. A spool list should be created in such a way that it provides meaningful results for each page size.
-   Specifying a fixed line number only makes sense for form-like lists with a fixed page layout. However, a check should always be made on whether such forms can be created by other means.

REPORT myreport LINE-COUNT 65(8) LINE-SIZE 132. abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_program\_statement.html abapreport.html