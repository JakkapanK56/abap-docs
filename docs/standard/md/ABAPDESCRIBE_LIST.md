---
title: "ABAPDESCRIBE_LIST"
description: |
  ABAPDESCRIBE_LIST - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDESCRIBE_LIST.htm"
abapFile: "ABAPDESCRIBE_LIST.html"
keywords: ["select", "insert", "do", "if", "data", "ABAPDESCRIBE", "LIST"]
---

[Short Reference](ABAPDESCRIBE_LIST_SHORTREF.html)

`DESCRIBE LIST \{\ \{NUMBER OF  \{LINES|PAGES\} n\}`\\ 
              `|\ \{LINE linno PAGE page\}`\\ 
              ``|\ \{PAGE pagno [`page_properties`](ABAPDESCRIBE_LIST_PAGE_PROPERTIES.html)\}\ \}``\\ 
              `[INDEX idx].`

[1. `... NUMBER OF \{LINES|PAGES\} n`](#ABAP_ALTERNATIVE_1@2@)

[2. `... LINE linno PAGE page`](#ABAP_ALTERNATIVE_2@2@)

[3. `... PAGE pagno page_properties`](#ABAP_ALTERNATIVE_3@2@)

[`... INDEX idx`](#ABAP_ONE_ADD@1@)

This statement assigns the properties of a list stored in a list buffer to the variables `n`, `page`, or the variables specified in [`page_properties`](ABAPDESCRIBE_LIST_PAGE_PROPERTIES.html).

The statement `DESCRIBE LIST` should only be used for completed lists, because not all properties of a list can be read when it is being created.

The list level can be specified with the addition `INDEX`, where `idx` expects a data object of type `i`, which contains the list index. The value of `idx` must be greater than or equal to 0. If the addition `INDEX` is not specified, the list level 0 (the basic list itself) is selected when the basic list is created and the list level at which the event was raised (`sy-listi`) is selected when a list event is processed. If the list level specified in `idx` does not exist, the variables are not changed and `sy-subrc` is set to the value 8.

If specified, `LINES` expects the number of lines, `PAGES` expects the number of pages in the list stored in `n`. `n` expects a data object of the type `i`. The number of lines is counted from the first to the last line described by an output statement and contains the page headers and page footers. The blank lines inserted automatically between the list pages are not counted.

The corresponding page for the line number specified in `linno` is determined and stored in `page`. `linno` and `page` expect data objects of the type `i`. If the line specified in `linno` does not exist, `page` is not changed and `sy-subrc` is set to 4. The page headers and page footers are respected in the line count, but not the blank lines inserted automatically between the list pages.

Various properties [`page_properties`](ABAPDESCRIBE_LIST_PAGE_PROPERTIES.html) for the page number specified in `pagno` are determined and passed to the specified variables. At least one addition must be specified after `pagno`. `pagno` expects the data type `i`. If the page specified in `pagno` does not exist, the variables are not changed and `sy-subrc` is set to the value 4.

Determines some properties of the last page of the list currently displayed using two `DESCRIBE` statements in a list event.

DATA: last\_page TYPE i, \\n lines TYPE i, \\n first\_line TYPE i, \\n top\_lines TYPE i. \\n\\ \\n... \\n\\ \\nAT LINE-SELECTION. \\n DESCRIBE LIST: NUMBER OF PAGES last\_page, \\n PAGE last\_page LINES lines \\n FIRST-LINE first\_line \\n TOP-LINES top\_lines. `sy-subrc` **Meaning** 0 The list property was successfully specified. 4 The line specified in `linno` or page specified in `pagno` cannot be found. 8 The list level specified in `idx` cannot be found. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists\_complex.html