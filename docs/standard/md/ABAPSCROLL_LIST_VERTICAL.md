---
title: "ABAPSCROLL_LIST_VERTICAL"
description: |
  ABAPSCROLL_LIST_VERTICAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSCROLL_LIST_VERTICAL.htm"
abapFile: "ABAPSCROLL_LIST_VERTICAL.html"
keywords: ["select", "do", "if", "data", "ABAPSCROLL", "LIST", "VERTICAL"]
---

[Short Reference](ABAPSCROLL_SHORTREF.html)

`... \{TO \{\{FIRST PAGE\}|\{LAST PAGE\}|\{PAGE pag\}\}\ [LINE lin]\}`\\ 
  `|\ \{\{FORWARD|BACKWARD\}\ [n PAGES]\} ...`

[1. `... TO FIRST PAGE`](#ABAP_ALTERNATIVE_1@2@)

[2. `... TO LAST PAGE`](#ABAP_ALTERNATIVE_2@2@)

[3. `... TO PAGE pag`](#ABAP_ALTERNATIVE_3@2@)

[4. `... \{FORWARD|BACKWARD\}\ [n PAGES]`](#ABAP_ALTERNATIVE_4@2@)

[`... LINE lin`](#ABAP_ONE_ADD@1@)

These additions are used to scroll vertically in the list.

The addition `TO FIRST PAGE` sets the top page of the screen segment to the first page of the list.

The addition `TO LAST PAGE` sets the top page of the screen segment to the last page of the list.

The addition `TO PAGE pag` sets the top page of the screen segment to the page specified in `pag`. `pag` expects a data object of type `i`. If the value in `pag` is 0 or less, it is processed as 1. If it is greater than the number of pages, it is processed like this number of pages and `sy-subrc` is set to 4.

The addition `LINE` specifies which line is displayed first on the pages selected using `PAGE`. If the addition `LINE` is not used, the list is displayed starting with the first line on the selected page. If the addition `LINE` is specified, the line on the selected page specified in `lin` is displayed under the [page header](ABENPAGE_HEADER_GLOSRY.html), not counting the page header. `lin` expects a data object of type `i`. If the value in `lin` is 0 or less, it is processed as 1. If it is greater than the page length, it is processed like this page length and `sy-subrc` is set to 4.

The additions `FORWARD` and `BACKWARD` without `n PAGES` move the current screen segment up or down by the current number of lines in the GUI window (`sy-srows`). The [page header](ABENPAGE_HEADER_GLOSRY.html) of the top page displayed is always displayed first.

The additions `FORWARD` and `BACKWARD` with `n PAGES` define the top page in the screen segment on the page derived by adding or subtracting the value in `n` from the current top page. `n` expects a data object of type `i`. If the resulting value is less than or equal to 0 or is greater than the number of pages, it is processed as 1 or like this number of pages and `sy-subrc` is set to 4. The resulting page is displayed starting with the first line.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists\_complex.html abapscroll.html