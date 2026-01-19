---
title: "ABAPREPORT_SHORTREF"
description: |
  ABAPREPORT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREPORT_SHORTREF.htm"
abapFile: "ABAPREPORT_SHORTREF.html"
keywords: ["do", "if", "class", "data", "ABAPREPORT", "SHORTREF"]
---

[Reference](ABAPREPORT.html)

`REPORT rep [NO STANDARD PAGE HEADING]\             [LINE-SIZE width]\             [LINE-COUNT page_lines[(footer_lines)]]\             [MESSAGE-ID mid]\             [DEFINING DATABASE ldb]\             [REDUCED FUNCTIONALITY].`

Introduces an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html)\\ `rep`.

-   [`NO STANDARD PAGE HEADING`](ABAPREPORT_LIST_OPTIONS.html)\\
    Suppresses the output of a [standard page header](ABENSTANDARD_PAGE_HEADER_GLOSRY.html).
-   [`LINE-SIZE width`](ABAPREPORT_LIST_OPTIONS.html)\\
    Sets the line width of lists of the program to `width` characters.
-   [`LINE-COUNT page_lines[(footer_lines)]`](ABAPREPORT_LIST_OPTIONS.html)\\
    Sets the page length of the basic list of the program to `page_lines` and reserves `footer_lines` footer lines.
-   [`MESSAGE-ID mid`](ABAPREPORT.html)\\
    Specifies a message class `mid` for short forms of `MESSAGE`.
-   [`DEFINING DATABASE ldb`](ABAPREPORT_DEFINING.html)\\
    **Obsolete:** Does not call an executable program, but calls the [database program](ABENDATABASE_PROGRAM_GLOSRY.html) of the [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html)\\ `ldb` instead.
-   [`REDUCED FUNCTIONALITY`](ABAPPROGRAM.html)\\
    This addition is only intended for the [`PROGRAM`](ABAPPROGRAM.html) statement in subroutine pools.

abenabap.html abenabap\_reference.html abenabap\_shortref.html