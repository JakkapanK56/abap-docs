---
title: "ABAPDESCRIBE_LIST_PAGE_PROPERTIES"
description: |
  ABAPDESCRIBE_LIST_PAGE_PROPERTIES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDESCRIBE_LIST_PAGE_PROPERTIES.htm"
abapFile: "ABAPDESCRIBE_LIST_PAGE_PROPERTIES.html"
keywords: ["insert", "data", "ABAPDESCRIBE", "LIST", "PAGE", "PROPERTIES"]
---

[Short Reference](ABAPDESCRIBE_LIST_SHORTREF.html)

`... [LINE-SIZE width]`\\ 
    `[LINE-COUNT page_lines]`\\ 
    `[LINES lines]`\\ 
    `[FIRST-LINE first_line]`\\ 
    `[TOP-LINES top_lines]`\\ 
    `[TITLE-LINES title_lines]`\\ 
    `[HEAD-LINES header_lines]`\\ 
    `[END-LINES footer_lines] ...`

[1. `... LINE-SIZE width`](#ABAP_ADDITION_1@3@)

[2. `... LINE-COUNT page_lines`](#ABAP_ADDITION_2@3@)

[3. `... LINES lines`](#ABAP_ADDITION_3@3@)

[4. `... FIRST-LINE first_line`](#ABAP_ADDITION_4@3@)

[5. `... TOP-LINES top_lines`](#ABAP_ADDITION_5@3@)

[6. `... TITLE-LINES title_lines`](#ABAP_ADDITION_6@3@)

[7. `... HEAD-LINES header_lines`](#ABAP_ADDITION_7@3@)

[8. `... END-LINES footer_lines`](#ABAP_ADDITION_8@3@)

Determines the properties of pages using `DESCRIBE LIST`. The data type `i` is expected for all target fields.

Inserts the line length of the page defined using the addition `LINE-SIZE` of the statement at the start of the program or of [`NEW-PAGE`](ABAPNEW-PAGE.html) after `width`.

Inserts the page length defined using the addition `LINE-COUNT` of the statement at the start of the program or of `NEW-PAGE` after `page_lines`.

Inserts the number of lines output on the page including the [page header](ABENPAGE_HEADER_GLOSRY.html) and [page footer](ABENPAGE_FOOTER_GLOSRY.html) after `lines`.

Inserts the line number of the first line of the page, with respect to the entire list, after `first_line`. The [page headers](ABENPAGE_HEADER_GLOSRY.html) and [page footers](ABENPAGE_FOOTER_GLOSRY.html) are respected in the line count, but not the blank lines inserted automatically between the list pages.

Inserts the number of lines of the [page header](ABENPAGE_HEADER_GLOSRY.html) of the page after `top_lines`. The standard page header and the lines output by the event `TOP-OF-PAGE` are respected in the count.

Inserts the number of lines of the standard title of the [standard page header](ABENSTANDARD_PAGE_HEADER_GLOSRY.html) of the page after `title_lines`.

Inserts the number of lines of the column headers of the [standard page header](ABENSTANDARD_PAGE_HEADER_GLOSRY.html) of the page after `header_lines`.

Inserts the number of lines reserved by the addition `LINE-COUNT` of the statement at the start of the program for the [page footer](ABENPAGE_FOOTER_GLOSRY.html) after `footer_lines`.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists\_complex.html abapdescribe\_list.html