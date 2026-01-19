---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCOND_ITERATION_MATRIX_ABEXA.htm"
abapFile: "ABENCOND_ITERATION_MATRIX_ABEXA.html"
keywords: ["loop", "do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "ABENCOND", "ITERATION", "MATRIX", "ABEXA"]
---

This example demonstrates how a matrix is created using iterations.

The lines and columns of a matrix are simulated using an internal table whose line types are arrays. These tables are filled using nested [`DO`](ABAPDO.html) loops and equivalent iteration expressions for [conditional iterations](ABENFOR_CONDITIONAL.html) in a constructor expression with the operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html). The [`ASSERT`](ABAPASSERT.html) statement shows that both internal tables have the same content. It is possible to access each individual element.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_matrix DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n TYPES: t\_column TYPE STANDARD TABLE OF string WITH EMPTY KEY, \\n t\_rows TYPE STANDARD TABLE OF t\_column WITH EMPTY KEY. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n rows TYPE i, \\n columns TYPE i, \\n x TYPE i VALUE 1, \\n y TYPE i VALUE 1, \\n abcde TYPE string VALUE 'abcdefghijklmnopqrstuvwxyz'. \\n METHODS initialize. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_matrix IMPLEMENTATION. \\n METHOD main. \\n initialize( ). \\n "Old way \\n DATA: column TYPE t\_column, \\n matrix\_old TYPE t\_rows. \\n DO columns TIMES. \\n FINAL(idx) = sy-index - 1. \\n CLEAR column. \\n DO rows TIMES. \\n APPEND abcde+idx(1) && |\\{ sy-index \\}| TO column. \\n ENDDO. \\n APPEND column TO matrix\_old. \\n ENDDO. \\n\\ \\n "New way \\n FINAL(matrix\_new) = \\n VALUE t\_rows( \\n FOR i = 0 UNTIL i > columns - 1 ( \\n VALUE t\_column( \\n FOR j = 1 UNTIL j > rows \\n ( abcde+i(1) && |\\{ j \\}| ) ) ) ). \\n\\ \\n ASSERT matrix\_new = matrix\_old. \\n\\ \\n TRY. \\n out->write( matrix\_new\[ x \]\[ y \] ). \\n CATCH cx\_sy\_itab\_line\_not\_found. \\n out->write( 'Not found' ). \\n ENDTRY. \\n ENDMETHOD. \\n METHOD initialize. \\n rows = 100. \\n columns = strlen( abcde ). \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = x \\n )->add\_field( CHANGING field = y \\n )->request( ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_matrix DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n TYPES: t\_column TYPE STANDARD TABLE OF string WITH EMPTY KEY, \\n t\_rows TYPE STANDARD TABLE OF t\_column WITH EMPTY KEY. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n rows TYPE i, \\n columns TYPE i, \\n x TYPE i VALUE 1, \\n y TYPE i VALUE 1, \\n abcde TYPE string VALUE 'abcdefghijklmnopqrstuvwxyz'. \\n METHODS initialize. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_matrix IMPLEMENTATION. \\n METHOD main. \\n initialize( ). \\n "Old way \\n DATA: column TYPE t\_column, \\n matrix\_old TYPE t\_rows. \\n DO columns TIMES. \\n FINAL(idx) = sy-index - 1. \\n CLEAR column. \\n DO rows TIMES. \\n APPEND abcde+idx(1) && |\\{ sy-index \\}| TO column. \\n ENDDO. \\n APPEND column TO matrix\_old. \\n ENDDO. \\n\\ \\n "New way \\n FINAL(matrix\_new) = \\n VALUE t\_rows( \\n FOR i = 0 UNTIL i > columns - 1 ( \\n VALUE t\_column( \\n FOR j = 1 UNTIL j > rows \\n ( abcde+i(1) && |\\{ j \\}| ) ) ) ). \\n\\ \\n ASSERT matrix\_new = matrix\_old. \\n\\ \\n TRY. \\n out->write( matrix\_new\[ x \]\[ y \] ). \\n CATCH cx\_sy\_itab\_line\_not\_found. \\n out->write( 'Not found' ). \\n ENDTRY. \\n ENDMETHOD. \\n METHOD initialize. \\n rows = 100. \\n columns = strlen( abcde ). \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = x \\n )->add\_field( CHANGING field = y \\n )->request( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abeniteration\_expressions.html abenfor.html abeniteration\_expressions\_abexas.html