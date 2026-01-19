---
title: "ABENTABLE_EXP_ITAB_CHANGING_ABEXA"
description: |
  ABENTABLE_EXP_ITAB_CHANGING_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTABLE_EXP_ITAB_CHANGING_ABEXA.htm"
abapFile: "ABENTABLE_EXP_ITAB_CHANGING_ABEXA.html"
keywords: ["loop", "do", "if", "method", "class", "data", "types", "internal-table", "ABENTABLE", "EXP", "ITAB", "CHANGING", "ABEXA"]
---

This example demonstrates table expressions in write positions.

In a `DO` loop, the content of an internal table

The second method is quicker, of course, since only one read is performed on the internal table instead of two.

-   is passed component by component to an `IMPORTING` parameter and `EXPORTING` parameter of a method using two [table expressions](ABENTABLE_EXPRESSIONS.html). This modifies one column of the current line.
-   is passed line by line to a `CHANGING` parameter of a method using one [table expression](ABENTABLE_EXPRESSIONS.html). This modifies one column of the table line.

\* Public class definition \\nCLASS cl\_demo\_tab\_exp\_changing DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n BEGIN OF struct, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF struct, \\n itab TYPE STANDARD TABLE OF struct WITH EMPTY KEY. \\n METHODS: \\n change\_component \\n IMPORTING p1 TYPE i \\n EXPORTING p2 TYPE i, \\n change\_line \\n CHANGING p TYPE struct. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_tab\_exp\_changing IMPLEMENTATION. \\n METHOD main. \\n DATA(itab) = VALUE itab( \\n ( col1 = 3 ) \\n ( col1 = 5 ) \\n ( col1 = 7 ) ). \\n\\ \\n out->begin\_section( \`Before\` \\n )->write( itab ). \\n\\ \\n DO lines( itab ) TIMES. \\n change\_component( EXPORTING p1 = itab\[ sy-index \]-col1 \\n IMPORTING p2 = itab\[ sy-index \]-col2 ). \\n ENDDO. \\n\\ \\n out->next\_section( \`After change\_component\` \\n )->write( itab ). \\n\\ \\n DO lines( itab ) TIMES. \\n change\_line( CHANGING p = itab\[ sy-index \] ). \\n ENDDO. \\n\\ \\n out->next\_section( \`After change\_line\` \\n )->write( itab ). \\n\\ \\n ENDMETHOD. \\n METHOD change\_component. \\n p2 = ipow( base = p1 exp = 2 ). \\n ENDMETHOD. \\n METHOD change\_line. \\n p-col2 = ipow( base = p-col1 exp = 3 ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_tab\_exp\_changing DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n BEGIN OF struct, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF struct, \\n itab TYPE STANDARD TABLE OF struct WITH EMPTY KEY. \\n METHODS: \\n change\_component \\n IMPORTING p1 TYPE i \\n EXPORTING p2 TYPE i, \\n change\_line \\n CHANGING p TYPE struct. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_tab\_exp\_changing IMPLEMENTATION. \\n METHOD main. \\n DATA(itab) = VALUE itab( \\n ( col1 = 3 ) \\n ( col1 = 5 ) \\n ( col1 = 7 ) ). \\n\\ \\n out->begin\_section( \`Before\` \\n )->write( itab ). \\n\\ \\n DO lines( itab ) TIMES. \\n change\_component( EXPORTING p1 = itab\[ sy-index \]-col1 \\n IMPORTING p2 = itab\[ sy-index \]-col2 ). \\n ENDDO. \\n\\ \\n out->next\_section( \`After change\_component\` \\n )->write( itab ). \\n\\ \\n DO lines( itab ) TIMES. \\n change\_line( CHANGING p = itab\[ sy-index \] ). \\n ENDDO. \\n\\ \\n out->next\_section( \`After change\_line\` \\n )->write( itab ). \\n\\ \\n ENDMETHOD. \\n METHOD change\_component. \\n p2 = ipow( base = p1 exp = 2 ). \\n ENDMETHOD. \\n METHOD change\_line. \\n p-col2 = ipow( base = p-col1 exp = 3 ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abentable\_expressions.html abentable\_exp\_lhs.html