---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCORRESPONDING_STRUCT_ABEXA.htm"
abapFile: "ABENCORRESPONDING_STRUCT_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENCORRESPONDING", "STRUCT", "ABEXA"]
---

This example demonstrates the [component operator](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html) for structures.

This example uses the same structures as the [executable example](ABENMOVE_CORRESPONDING_STRUC_ABEXA.html) for `MOVE-CORRESPONDING`. Here, the source structure `struct1` is used as a parameter of a constructor expression with the component operator `CORRESPONDING` and the result is assigned to the target structure `struct2`. The source structure `struct1` is assigned to the result with the type of `struct2` with and without the addition `DEEP`. If the addition `BASE` is used, the result is given the original value of `struct2` as its start value and otherwise stays initial. The assignment is made exactly as described in the [executable example](ABENMOVE_CORRESPONDING_STRUC_ABEXA.html) for `MOVE-CORRESPONDING` with or without `EXPANDING NESTED TABLES`. If `DEEP` is used, the name comparison is made for the components of the substructure `col3`, which means that fewer assignments are made than when omitting `DEEP`. The uninvolved component `col4` keeps its initial value without using the addition `BASE`. If `BASE` is used, it keeps the set value. The result is assigned to the target structure `struct2`.

The result of the component operator matches the result of `MOVE-CORRESPONDING` only if the addition `BASE` is used.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_crrspndng\_struct DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n c3 TYPE c LENGTH 3, \\n BEGIN OF iline1, \\n col1 TYPE c3, \\n col2 TYPE c3, \\n END OF iline1, \\n BEGIN OF iline2, \\n col2 TYPE c3, \\n col3 TYPE c3, \\n END OF iline2, \\n BEGIN OF line1, \\n col1 TYPE c3, \\n col2 TYPE c3, \\n col3 TYPE STANDARD TABLE OF iline1 WITH EMPTY KEY, \\n END OF line1, \\n BEGIN OF line2, \\n col2 TYPE c3, \\n col3 TYPE STANDARD TABLE OF iline2 WITH EMPTY KEY, \\n col4 TYPE c3, \\n END OF line2. \\n DATA: \\n struct1 TYPE line1, \\n struct2 TYPE line2. \\n METHODS: \\n fill\_structures. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_crrspndng\_struct IMPLEMENTATION. \\n METHOD main. \\n fill\_structures( ). \\n out->begin\_section( \`struct1\` \\n )->write( struct1 ). \\n out->next\_section( \`struct2\` \\n )->write( struct2 ). \\n\\ \\n FINAL(base) = struct2. \\n\\ \\n out->begin\_section( \\n \`CORRESPONDING struct2( struct1 )\` ). \\n\\ \\n struct2 = CORRESPONDING #( struct1 ). \\n\\ \\n out->write( struct2 \\n )->next\_section( \\n \`CORRESPONDING struct2( BASE ( struct2 ) struct1 )\` ). \\n\\ \\n struct2 = CORRESPONDING #( BASE ( base ) struct1 ). \\n\\ \\n out->write( struct2 \\n )->next\_section( \\n \`CORRESPONDING struct2( DEEP struct1 )\` ). \\n\\ \\n struct2 = CORRESPONDING #( DEEP struct1 ). \\n\\ \\n out->write( struct2 \\n )->next\_section( \\n \`CORRESPONDING struct2( DEEP BASE ( struct2 ) struct1 )\` ). \\n\\ \\n struct2 = CORRESPONDING #( DEEP BASE ( base ) struct1 ). \\n\\ \\n out->write( struct2 ). \\n ENDMETHOD. \\n METHOD fill\_structures. \\n struct1 = VALUE #( \\n col1 = 'a1' \\n col2 = 'a2' \\n col3 = VALUE #( ( col1 = 'a11' col2 = 'a12' ) \\n ( col1 = 'a21' col2 = 'a22' ) ) ). \\n\\ \\n struct2 = VALUE #( \\n col2 = 'x11' \\n col3 = VALUE #( ( col2 = 'x11' col3 = 'x12' ) \\n ( col2 = 'x21' col3 = 'x22' ) \\n ( col2 = 'x31' col3 = 'x32' ) ) \\n col4 = 'x12' ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_crrspndng\_struct DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n c3 TYPE c LENGTH 3, \\n BEGIN OF iline1, \\n col1 TYPE c3, \\n col2 TYPE c3, \\n END OF iline1, \\n BEGIN OF iline2, \\n col2 TYPE c3, \\n col3 TYPE c3, \\n END OF iline2, \\n BEGIN OF line1, \\n col1 TYPE c3, \\n col2 TYPE c3, \\n col3 TYPE STANDARD TABLE OF iline1 WITH EMPTY KEY, \\n END OF line1, \\n BEGIN OF line2, \\n col2 TYPE c3, \\n col3 TYPE STANDARD TABLE OF iline2 WITH EMPTY KEY, \\n col4 TYPE c3, \\n END OF line2. \\n DATA: \\n struct1 TYPE line1, \\n struct2 TYPE line2. \\n METHODS: \\n fill\_structures. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_crrspndng\_struct IMPLEMENTATION. \\n METHOD main. \\n fill\_structures( ). \\n out->begin\_section( \`struct1\` \\n )->write( struct1 ). \\n out->next\_section( \`struct2\` \\n )->write( struct2 ). \\n\\ \\n FINAL(base) = struct2. \\n\\ \\n out->begin\_section( \\n \`CORRESPONDING struct2( struct1 )\` ). \\n\\ \\n struct2 = CORRESPONDING #( struct1 ). \\n\\ \\n out->write( struct2 \\n )->next\_section( \\n \`CORRESPONDING struct2( BASE ( struct2 ) struct1 )\` ). \\n\\ \\n struct2 = CORRESPONDING #( BASE ( base ) struct1 ). \\n\\ \\n out->write( struct2 \\n )->next\_section( \\n \`CORRESPONDING struct2( DEEP struct1 )\` ). \\n\\ \\n struct2 = CORRESPONDING #( DEEP struct1 ). \\n\\ \\n out->write( struct2 \\n )->next\_section( \\n \`CORRESPONDING struct2( DEEP BASE ( struct2 ) struct1 )\` ). \\n\\ \\n struct2 = CORRESPONDING #( DEEP BASE ( base ) struct1 ). \\n\\ \\n out->write( struct2 ). \\n ENDMETHOD. \\n METHOD fill\_structures. \\n struct1 = VALUE #( \\n col1 = 'a1' \\n col2 = 'a2' \\n col3 = VALUE #( ( col1 = 'a11' col2 = 'a12' ) \\n ( col1 = 'a21' col2 = 'a22' ) ) ). \\n\\ \\n struct2 = VALUE #( \\n col2 = 'x11' \\n col3 = VALUE #( ( col2 = 'x11' col3 = 'x12' ) \\n ( col2 = 'x21' col3 = 'x22' ) \\n ( col2 = 'x31' col3 = 'x32' ) ) \\n col4 = 'x12' ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abencorresponding.html abencorresponding\_abexas.html