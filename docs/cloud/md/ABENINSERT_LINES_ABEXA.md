---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENINSERT_LINES_ABEXA.htm"
abapFile: "ABENINSERT_LINES_ABEXA.html"
keywords: ["insert", "loop", "do", "if", "method", "class", "data", "types", "internal-table", "ABENINSERT", "LINES", "ABEXA"]
---

This example demonstrates how lines are inserted into internal tables.

This example is consists of four parts where lines are inserted in different ways. First, two internal tables, `itab` and `jtab`, are filled with squared and cubic numbers. These are also used to reset the tables above to their initial values, using an assignment, between the individual parts of the example.

-   In the first part, a new line is inserted in front of the second line and a line with initial values is inserted in front of the first line.
-   Next, using a `LOOP`, a new line is inserted before each existing line.
-   In the third part, the whole of the table `itab1` is inserted in front of the first line of `jtab1`.
-   In the final part, the whole of the table `itab2` is inserted into the sorted table `jtab2`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_int\_tbls\_insert DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_int\_tbls\_insert IMPLEMENTATION. \\n METHOD main. \\n TYPES: BEGIN OF line, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF line. \\n\\ \\n DATA: itab TYPE TABLE OF line WITH EMPTY KEY, \\n jtab LIKE itab, \\n\\ \\n itab1 TYPE TABLE OF line WITH EMPTY KEY, \\n jtab1 LIKE itab, \\n itab2 TYPE TABLE OF line WITH EMPTY KEY, \\n jtab2 TYPE SORTED TABLE OF line \\n WITH NON-UNIQUE KEY col1 col2. \\n\\ \\n itab = VALUE #( FOR i = 1 UNTIL i > 3 \\n ( VALUE #( col1 = i col2 = i \*\* 2 ) ) ). \\n out->write( itab ). \\n jtab = VALUE #( FOR i = 1 UNTIL i > 3 \\n ( VALUE #( col1 = i col2 = i \*\* 3 ) ) ). \\n out->write( jtab ). \\n\\ \\n "Insert a single line into an index table \\n itab1 = itab. \\n INSERT VALUE #( col1 = 11 col2 = 22 ) INTO itab1 INDEX 2. \\n INSERT INITIAL LINE INTO itab1 INDEX 1. \\n out->write( itab1 ). \\n\\ \\n "Insert lines into an index table with LOOP \\n itab1 = itab. \\n LOOP AT itab1 ASSIGNING FIELD-SYMBOL(). \\n INSERT VALUE #( col1 = 3 \* sy-tabix col2 = 5 \* sy-tabix ) \\n INTO itab1. \\n ENDLOOP. \\n out->write( itab1 ). \\n\\ \\n "Insert lines into an index table \\n itab1 = itab. \\n jtab1 = jtab. \\n INSERT LINES OF itab1 INTO jtab1 INDEX 1. \\n out->write( jtab1 ). \\n\\ \\n "Insert lines into a sorted table \\n itab2 = itab. \\n jtab2 = jtab. \\n INSERT LINES OF itab2 INTO TABLE jtab2. \\n out->write( jtab2 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_int\_tbls\_insert DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_int\_tbls\_insert IMPLEMENTATION. \\n METHOD main. \\n TYPES: BEGIN OF line, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF line. \\n\\ \\n DATA: itab TYPE TABLE OF line WITH EMPTY KEY, \\n jtab LIKE itab, \\n\\ \\n itab1 TYPE TABLE OF line WITH EMPTY KEY, \\n jtab1 LIKE itab, \\n itab2 TYPE TABLE OF line WITH EMPTY KEY, \\n jtab2 TYPE SORTED TABLE OF line \\n WITH NON-UNIQUE KEY col1 col2. \\n\\ \\n itab = VALUE #( FOR i = 1 UNTIL i > 3 \\n ( VALUE #( col1 = i col2 = i \*\* 2 ) ) ). \\n out->write( itab ). \\n jtab = VALUE #( FOR i = 1 UNTIL i > 3 \\n ( VALUE #( col1 = i col2 = i \*\* 3 ) ) ). \\n out->write( jtab ). \\n\\ \\n "Insert a single line into an index table \\n itab1 = itab. \\n INSERT VALUE #( col1 = 11 col2 = 22 ) INTO itab1 INDEX 2. \\n INSERT INITIAL LINE INTO itab1 INDEX 1. \\n out->write( itab1 ). \\n\\ \\n "Insert lines into an index table with LOOP \\n itab1 = itab. \\n LOOP AT itab1 ASSIGNING FIELD-SYMBOL(). \\n INSERT VALUE #( col1 = 3 \* sy-tabix col2 = 5 \* sy-tabix ) \\n INTO itab1. \\n ENDLOOP. \\n out->write( itab1 ). \\n\\ \\n "Insert lines into an index table \\n itab1 = itab. \\n jtab1 = jtab. \\n INSERT LINES OF itab1 INTO jtab1 INDEX 1. \\n out->write( jtab1 ). \\n\\ \\n "Insert lines into a sorted table \\n itab2 = itab. \\n jtab2 = jtab. \\n INSERT LINES OF itab2 INTO TABLE jtab2. \\n out->write( jtab2 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapinsert\_itab.html