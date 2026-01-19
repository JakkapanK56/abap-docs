---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMOVE_CORRESPONDING_STRUC_ABEXA.htm"
abapFile: "ABENMOVE_CORRESPONDING_STRUC_ABEXA.html"
keywords: ["delete", "do", "if", "method", "class", "data", "types", "ABENMOVE", "CORRESPONDING", "STRUC", "ABEXA"]
---

This example demonstrates the statement [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html) for structures.

Two structures, `struct1` and `struct2` are declared using the available additions and [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html) assigns `struct1` to `struct2`.

The structures are filled with values. For the output, the structured components are resolved to elementary components of an output table, `output`.

The statement `MOVE-CORRESPONDING` finds the identically named components `col2` and `col3` in `struct1` and `struct2` and the assignments work as follows:

-   `struct1` contains two elementary components, `col1` and `col2`, and a tabular component `col3` with the components `col1` and `col2`.
-   `struct2` contains two elementary components, `col2` and `col4`, and a tabular component `col3` with the components `col2` and `col3`.

-   `MOVE-CORRESPONDING`
-   After the assignment, the components `col2` and `col3` in `struct2` have the same content as in `struct1`. Component `col4` keeps its value.
-   `MOVE-CORRESPONDING EXPANDING NESTED TABLES`
-   After the assignment, the component `col2` in `struct2` has the same content as in `struc1`. `col4` preserves its value. The tabular component `col3` is resolved and the identically named component `col2` is found there. The original content of `struct2-col3` is deleted. After the assignment, the column `col2` has the same content as in `struct1-col3`, whereas the column `col3` remains initial.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_move\_crrspndng\_struct DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n c3 TYPE c LENGTH 3, \\n BEGIN OF iline1, \\n col1 TYPE c3, \\n col2 TYPE c3, \\n END OF iline1, \\n BEGIN OF iline2, \\n col2 TYPE c3, \\n col3 TYPE c3, \\n END OF iline2, \\n BEGIN OF line1, \\n col1 TYPE c3, \\n col2 TYPE c3, \\n col3 TYPE STANDARD TABLE OF iline1 WITH EMPTY KEY, \\n END OF line1, \\n BEGIN OF line2, \\n col2 TYPE c3, \\n col3 TYPE STANDARD TABLE OF iline2 WITH EMPTY KEY, \\n col4 TYPE c3, \\n END OF line2. \\n DATA: \\n struct1 TYPE line1, \\n struct2 TYPE line2. \\n METHODS: \\n fill\_structures. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_move\_crrspndng\_struct IMPLEMENTATION. \\n METHOD main. \\n fill\_structures( ). \\n\\ \\n out->begin\_section( \`struct1\` \\n )->write( struct1 \\n )->next\_section( \`struct2\` \\n )->write( struct2 ). \\n\\ \\n out->begin\_section( \\n \`MOVE-CORRESPONDING\` ). \\n\\ \\n MOVE-CORRESPONDING struct1 TO struct2. \\n\\ \\n out->write( struct2 \\n )->next\_section( \\n \`MOVE-CORRESPONDING EXPANDING NESTED TABLES\` ). \\n\\ \\n MOVE-CORRESPONDING struct1 TO struct2 EXPANDING NESTED TABLES. \\n\\ \\n out->write( struct2 ). \\n ENDMETHOD. \\n METHOD fill\_structures. \\n struct1 = VALUE #( \\n col1 = 'a1' \\n col2 = 'a2' \\n col3 = VALUE #( ( col1 = 'a11' col2 = 'a12' ) \\n ( col1 = 'a21' col2 = 'a22' ) ) ). \\n\\ \\n struct2 = VALUE #( \\n col2 = 'x11' \\n col3 = VALUE #( ( col2 = 'x11' col3 = 'x12' ) \\n ( col2 = 'x21' col3 = 'x22' ) \\n ( col2 = 'x31' col3 = 'x32' ) ) \\n col4 = 'x12' ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_move\_crrspndng\_struct DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n c3 TYPE c LENGTH 3, \\n BEGIN OF iline1, \\n col1 TYPE c3, \\n col2 TYPE c3, \\n END OF iline1, \\n BEGIN OF iline2, \\n col2 TYPE c3, \\n col3 TYPE c3, \\n END OF iline2, \\n BEGIN OF line1, \\n col1 TYPE c3, \\n col2 TYPE c3, \\n col3 TYPE STANDARD TABLE OF iline1 WITH EMPTY KEY, \\n END OF line1, \\n BEGIN OF line2, \\n col2 TYPE c3, \\n col3 TYPE STANDARD TABLE OF iline2 WITH EMPTY KEY, \\n col4 TYPE c3, \\n END OF line2. \\n DATA: \\n struct1 TYPE line1, \\n struct2 TYPE line2. \\n METHODS: \\n fill\_structures. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_move\_crrspndng\_struct IMPLEMENTATION. \\n METHOD main. \\n fill\_structures( ). \\n\\ \\n out->begin\_section( \`struct1\` \\n )->write( struct1 \\n )->next\_section( \`struct2\` \\n )->write( struct2 ). \\n\\ \\n out->begin\_section( \\n \`MOVE-CORRESPONDING\` ). \\n\\ \\n MOVE-CORRESPONDING struct1 TO struct2. \\n\\ \\n out->write( struct2 \\n )->next\_section( \\n \`MOVE-CORRESPONDING EXPANDING NESTED TABLES\` ). \\n\\ \\n MOVE-CORRESPONDING struct1 TO struct2 EXPANDING NESTED TABLES. \\n\\ \\n out->write( struct2 ). \\n ENDMETHOD. \\n METHOD fill\_structures. \\n struct1 = VALUE #( \\n col1 = 'a1' \\n col2 = 'a2' \\n col3 = VALUE #( ( col1 = 'a11' col2 = 'a12' ) \\n ( col1 = 'a21' col2 = 'a22' ) ) ). \\n\\ \\n struct2 = VALUE #( \\n col2 = 'x11' \\n col3 = VALUE #( ( col2 = 'x11' col3 = 'x12' ) \\n ( col2 = 'x21' col3 = 'x22' ) \\n ( col2 = 'x31' col3 = 'x32' ) ) \\n col4 = 'x12' ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abencorresponding.html abencorresponding\_abexas.html