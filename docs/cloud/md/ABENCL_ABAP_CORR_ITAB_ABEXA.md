---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCL_ABAP_CORR_ITAB_ABEXA.htm"
abapFile: "ABENCL_ABAP_CORR_ITAB_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "ABENCL", "ABAP", "CORR", "ITAB", "ABEXA"]
---

This example demonstrates the system class [`CL_ABAP_CORRESPONDING`](ABENCL_ABAP_CORRESPONDING.html) for internal tables.

The components of the internal table `itab1` are assigned to the internal table `itab2` using the system class [`CL_ABAP_CORRESPONDING`](ABENCL_ABAP_CORRESPONDING.html).

-   The mapping table is empty in the first assignment. The assignment is made as in [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html) using identical names and the column `col3` of the target table is not filled.
-   In the second assignment, a mapping table is passed that assigns all columns of the source table to a column in the target table regardless of their names.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_crrspndng\_class\_tb DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_crrspndng\_class\_tb IMPLEMENTATION. \\n METHOD main. \\n TYPES: BEGIN OF line1, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF line1, \\n BEGIN OF line2, \\n col2 TYPE i, \\n col3 TYPE i, \\n END OF line2. \\n\\ \\n DATA: itab1 TYPE TABLE OF line1 WITH EMPTY KEY, \\n itab2 TYPE TABLE OF line2 WITH EMPTY KEY. \\n\\ \\n itab1 = VALUE #( \\n ( col1 = 11 col2 = 12 ) \\n ( col1 = 21 col2 = 22 ) ). \\n\\ \\n itab2 = VALUE #( \\n ( col2 = 212 col3 = 312 ) \\n ( col2 = 222 col3 = 322 ) ). \\n\\ \\n cl\_abap\_corresponding=>create( \\n source = itab1 \\n destination = itab2 \\n mapping = VALUE cl\_abap\_corresponding=>mapping\_table( ) \\n )->execute( EXPORTING source = itab1 \\n CHANGING destination = itab2 ). \\n out->write( itab2 ). \\n\\ \\n cl\_abap\_corresponding=>create( \\n source = itab1 \\n destination = itab2 \\n mapping = VALUE cl\_abap\_corresponding=>mapping\_table( \\n ( level = 0 kind = 1 srcname = 'col1' dstname = 'col2' ) \\n ( level = 0 kind = 1 srcname = 'col2' dstname = 'col3' ) ) \\n )->execute( EXPORTING source = itab1 \\n CHANGING destination = itab2 ). \\n out->write( itab2 ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_crrspndng\_class\_tb DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_crrspndng\_class\_tb IMPLEMENTATION. \\n METHOD main. \\n TYPES: BEGIN OF line1, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF line1, \\n BEGIN OF line2, \\n col2 TYPE i, \\n col3 TYPE i, \\n END OF line2. \\n\\ \\n DATA: itab1 TYPE TABLE OF line1 WITH EMPTY KEY, \\n itab2 TYPE TABLE OF line2 WITH EMPTY KEY. \\n\\ \\n itab1 = VALUE #( \\n ( col1 = 11 col2 = 12 ) \\n ( col1 = 21 col2 = 22 ) ). \\n\\ \\n itab2 = VALUE #( \\n ( col2 = 212 col3 = 312 ) \\n ( col2 = 222 col3 = 322 ) ). \\n\\ \\n cl\_abap\_corresponding=>create( \\n source = itab1 \\n destination = itab2 \\n mapping = VALUE cl\_abap\_corresponding=>mapping\_table( ) \\n )->execute( EXPORTING source = itab1 \\n CHANGING destination = itab2 ). \\n out->write( itab2 ). \\n\\ \\n cl\_abap\_corresponding=>create( \\n source = itab1 \\n destination = itab2 \\n mapping = VALUE cl\_abap\_corresponding=>mapping\_table( \\n ( level = 0 kind = 1 srcname = 'col1' dstname = 'col2' ) \\n ( level = 0 kind = 1 srcname = 'col2' dstname = 'col3' ) ) \\n )->execute( EXPORTING source = itab1 \\n CHANGING destination = itab2 ). \\n out->write( itab2 ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abencorresponding.html abencorresponding\_abexas.html