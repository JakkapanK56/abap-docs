---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENAPPEND_LINES_ABEXA.htm"
abapFile: "ABENAPPEND_LINES_ABEXA.html"
keywords: ["loop", "do", "if", "method", "class", "data", "types", "internal-table", "ABENAPPEND", "LINES", "ABEXA"]
---

This example demonstrates how lines can be appended to internal tables.

The example has three parts:

It could be better to use the value operator [`VALUE` for internal tables](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html) instead of using `APPEND VALUE #( ... )` shown here.

-   In the first part, the internal table `wa_tab` is created with two columns and filled in the loop `DO`. In each pass of the loop, a line with initial values is appended, then a structure of the line type is constructed and appended from the loop index and the square of the loop index.
-   In the second part, two internal tables `tab1` and `tab2` are created. `tab2` has a deep structure, since the second component of the line type has the data type of the table `tab1`. Structures of the line type `line1` are appended to `tab1`. After this, a structure with the line type `line2` is constructed and appended to `tab2`. After `tab1` has been initialized using the statement `CLEAR`, the same process is repeated.
-   In the final part, two lines of the internal table `jtab` are appended to the internal table `itab` using the statement `APPEND` and the addition `LINES OF`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_int\_tbls\_append DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_int\_tbls\_append IMPLEMENTATION. \\n METHOD main. \\n\\ \\n "Part 1 \\n TYPES: BEGIN OF wa, \\n col1 TYPE c LENGTH 1, \\n col2 TYPE i, \\n END OF wa. \\n\\ \\n DATA wa\_tab TYPE TABLE OF wa WITH EMPTY KEY. \\n\\ \\n DO 3 TIMES. \\n APPEND INITIAL LINE TO wa\_tab. \\n APPEND VALUE #( col1 = sy-index col2 = sy-index \*\* 2 ) TO wa\_tab. \\n ENDDO. \\n\\ \\n out->write\_data( wa\_tab \\n )->line( ). \\n\\ \\n "Part 2 \\n TYPES: BEGIN OF line1, \\n col1 TYPE c LENGTH 3, \\n col2 TYPE n LENGTH 2, \\n col3 TYPE i, \\n END OF line1, \\n BEGIN OF line2, \\n field1 TYPE c LENGTH 1, \\n field2 TYPE TABLE OF line1 WITH EMPTY KEY, \\n END OF line2. \\n\\ \\n DATA: tab1 TYPE TABLE OF line1 WITH EMPTY KEY, \\n tab2 TYPE TABLE OF line2 WITH EMPTY KEY. \\n\\ \\n APPEND VALUE #( col1 = 'abc' col2 = '12' col3 = 3 ) TO tab1. \\n APPEND VALUE #( col1 = 'def' col2 = '34' col3 = 5 ) TO tab1. \\n APPEND VALUE #( field1 = 'A' field2 = tab1 ) TO tab2. \\n\\ \\n CLEAR tab1. \\n APPEND VALUE #( col1 = 'ghi' col2 = '56' col3 = 7 ) TO tab1. \\n APPEND VALUE #( col1 = 'jkl' col2 = '78' col3 = 9 ) TO tab1. \\n APPEND VALUE #( field1 = 'B' field2 = tab1 ) TO tab2. \\n\\ \\n LOOP AT tab2 ASSIGNING FIELD-SYMBOL(). \\n out->write\_data( \-field1 ). \\n out->write\_data( \-field2 ). \\n ENDLOOP. \\n out->line( ). \\n\\ \\n "Part 3 \\n TYPES: BEGIN OF line, \\n col1 TYPE c LENGTH 1, \\n col2 TYPE i, \\n END OF line. \\n\\ \\n DATA: itab TYPE TABLE OF line WITH EMPTY KEY, \\n jtab LIKE itab. \\n\\ \\n DO 3 TIMES. \\n APPEND VALUE #( col1 = sy-index col2 = sy-index \*\* 2 ) TO itab. \\n APPEND VALUE #( col1 = sy-index col2 = sy-index \*\* 3 ) TO jtab. \\n ENDDO. \\n APPEND LINES OF jtab FROM 2 TO 3 TO itab. \\n out->write\_data( itab ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_int\_tbls\_append DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_int\_tbls\_append IMPLEMENTATION. \\n METHOD main. \\n\\ \\n "Part 1 \\n TYPES: BEGIN OF wa, \\n col1 TYPE c LENGTH 1, \\n col2 TYPE i, \\n END OF wa. \\n\\ \\n DATA wa\_tab TYPE TABLE OF wa WITH EMPTY KEY. \\n\\ \\n DO 3 TIMES. \\n APPEND INITIAL LINE TO wa\_tab. \\n APPEND VALUE #( col1 = sy-index col2 = sy-index \*\* 2 ) TO wa\_tab. \\n ENDDO. \\n\\ \\n out->write\_data( wa\_tab \\n )->line( ). \\n\\ \\n "Part 2 \\n TYPES: BEGIN OF line1, \\n col1 TYPE c LENGTH 3, \\n col2 TYPE n LENGTH 2, \\n col3 TYPE i, \\n END OF line1, \\n BEGIN OF line2, \\n field1 TYPE c LENGTH 1, \\n field2 TYPE TABLE OF line1 WITH EMPTY KEY, \\n END OF line2. \\n\\ \\n DATA: tab1 TYPE TABLE OF line1 WITH EMPTY KEY, \\n tab2 TYPE TABLE OF line2 WITH EMPTY KEY. \\n\\ \\n APPEND VALUE #( col1 = 'abc' col2 = '12' col3 = 3 ) TO tab1. \\n APPEND VALUE #( col1 = 'def' col2 = '34' col3 = 5 ) TO tab1. \\n APPEND VALUE #( field1 = 'A' field2 = tab1 ) TO tab2. \\n\\ \\n CLEAR tab1. \\n APPEND VALUE #( col1 = 'ghi' col2 = '56' col3 = 7 ) TO tab1. \\n APPEND VALUE #( col1 = 'jkl' col2 = '78' col3 = 9 ) TO tab1. \\n APPEND VALUE #( field1 = 'B' field2 = tab1 ) TO tab2. \\n\\ \\n LOOP AT tab2 ASSIGNING FIELD-SYMBOL(). \\n out->write\_data( \-field1 ). \\n out->write\_data( \-field2 ). \\n ENDLOOP. \\n out->line( ). \\n\\ \\n "Part 3 \\n TYPES: BEGIN OF line, \\n col1 TYPE c LENGTH 1, \\n col2 TYPE i, \\n END OF line. \\n\\ \\n DATA: itab TYPE TABLE OF line WITH EMPTY KEY, \\n jtab LIKE itab. \\n\\ \\n DO 3 TIMES. \\n APPEND VALUE #( col1 = sy-index col2 = sy-index \*\* 2 ) TO itab. \\n APPEND VALUE #( col1 = sy-index col2 = sy-index \*\* 3 ) TO jtab. \\n ENDDO. \\n APPEND LINES OF jtab FROM 2 TO 3 TO itab. \\n out->write\_data( itab ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapappend.html