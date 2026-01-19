---
title: "ABENCL_ABAP_CORR_STRUC_ABEXA"
description: |
  ABENCL_ABAP_CORR_STRUC_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_ABAP_CORR_STRUC_ABEXA.htm"
abapFile: "ABENCL_ABAP_CORR_STRUC_ABEXA.html"
keywords: ["do", "method", "class", "data", "ABENCL", "ABAP", "CORR", "STRUC", "ABEXA"]
---

This example demonstrates the system class [`CL_ABAP_CORRESPONDING`](ABENCL_ABAP_CORRESPONDING.html) for nested structures.

The components of the structure `struct1` are assigned to the structure `struct2` using the system class [`CL_ABAP_CORRESPONDING`](ABENCL_ABAP_CORRESPONDING.html).

-   At the top level:

-   `a1` is mapped to `b3` and `a3` is mapped to `b1`.
-   `a2` to `b2` are ignored, since their names do not match and `b2` keeps their value.
-   The component `a4` occurs in both structures and is assigned using identical names.
-   `a5` also occurs in both structures but is excluded explicitly by the mapping type.
-   The substructure `asub1` is mapped to the substructure `bsub1`.

-   At the level of the first substructure:

-   `s1_a1` is mapped to `s1_b3` and `s1_a3` is mapped to `s1_b1`.
-   `s1_a2` to `s1_b2` are ignored, since their names are not identical and `s1_b2` keeps their value.
-   The substructure `asub2` is mapped to the substructure `bsub2`.

-   At the level of the second substructure:

-   `s2_a1` is mapped to `s2_b3` and `s2_a3` is mapped to `s2_b1`.
-   `s2_a2` to `s2_b2` are ignored, since their names are not identical and `s2_b2` keeps their value.

\* Public class definition \\nCLASS cl\_demo\_crrspndng\_class\_str DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_crrspndng\_class\_str IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n BEGIN OF struct1, \\n a1 TYPE string VALUE 'a1', \\n a2 TYPE string VALUE 'a2', \\n a3 TYPE string VALUE 'a3', \\n a4 TYPE string VALUE 'a4', \\n a5 TYPE string VALUE 'a5', \\n BEGIN OF asub1, \\n s1\_a1 TYPE string VALUE 's1\_a1', \\n s1\_a2 TYPE string VALUE 's1\_a2', \\n s1\_a3 TYPE string VALUE 's1\_a3', \\n BEGIN OF asub2, \\n s2\_a1 TYPE string VALUE 's2\_a1', \\n s2\_a2 TYPE string VALUE 's2\_a2', \\n s2\_a3 TYPE string VALUE 's2\_a3', \\n END OF asub2, \\n END OF asub1, \\n END OF struct1, \\n BEGIN OF struct2, \\n b1 TYPE string VALUE 'b1', \\n b2 TYPE string VALUE 'b2', \\n b3 TYPE string VALUE 'b3', \\n a4 TYPE string VALUE 'b4', \\n a5 TYPE string VALUE 'b5', \\n BEGIN OF bsub1, \\n s1\_b1 TYPE string VALUE 's1\_b1', \\n s1\_b2 TYPE string VALUE 's1\_b2', \\n s1\_b3 TYPE string VALUE 's1\_b3', \\n BEGIN OF bsub2, \\n s2\_b1 TYPE string VALUE 's2\_b1', \\n s2\_b2 TYPE string VALUE 's2\_b2', \\n s2\_b3 TYPE string VALUE 's2\_b3', \\n END OF bsub2, \\n END OF bsub1, \\n END OF struct2. \\n\\ \\n FINAL(mapping\_tab) = VALUE cl\_abap\_corresponding=>mapping\_table( \\n ( level = 0 kind = 1 srcname = 'a1' dstname = 'b3' ) \\n ( level = 0 kind = 1 srcname = 'a3' dstname = 'b1' ) \\n ( level = 0 kind = 2 srcname = 'a5' ) \\n ( level = 0 kind = 1 srcname = 'asub1' dstname = 'bsub1' ) \\n ( level = 1 kind = 1 srcname = 's1\_a1' dstname = 's1\_b3' ) \\n ( level = 1 kind = 1 srcname = 's1\_a3' dstname = 's1\_b1' ) \\n ( level = 1 kind = 1 srcname = 'asub2' dstname = 'bsub2' ) \\n ( level = 2 kind = 1 srcname = 's2\_a1' dstname = 's2\_b3' ) \\n ( level = 2 kind = 1 srcname = 's2\_a3' dstname = 's2\_b1' ) ). \\n\\ \\n cl\_abap\_corresponding=>create( \\n source = struct1 \\n destination = struct2 \\n mapping = mapping\_tab \\n )->execute( EXPORTING source = struct1 \\n CHANGING destination = struct2 ). \\n\\ \\n out->write( struct1 \\n )->write( mapping\_tab \\n )->write( struct2 ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_crrspndng\_class\_str DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_crrspndng\_class\_str IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n BEGIN OF struct1, \\n a1 TYPE string VALUE 'a1', \\n a2 TYPE string VALUE 'a2', \\n a3 TYPE string VALUE 'a3', \\n a4 TYPE string VALUE 'a4', \\n a5 TYPE string VALUE 'a5', \\n BEGIN OF asub1, \\n s1\_a1 TYPE string VALUE 's1\_a1', \\n s1\_a2 TYPE string VALUE 's1\_a2', \\n s1\_a3 TYPE string VALUE 's1\_a3', \\n BEGIN OF asub2, \\n s2\_a1 TYPE string VALUE 's2\_a1', \\n s2\_a2 TYPE string VALUE 's2\_a2', \\n s2\_a3 TYPE string VALUE 's2\_a3', \\n END OF asub2, \\n END OF asub1, \\n END OF struct1, \\n BEGIN OF struct2, \\n b1 TYPE string VALUE 'b1', \\n b2 TYPE string VALUE 'b2', \\n b3 TYPE string VALUE 'b3', \\n a4 TYPE string VALUE 'b4', \\n a5 TYPE string VALUE 'b5', \\n BEGIN OF bsub1, \\n s1\_b1 TYPE string VALUE 's1\_b1', \\n s1\_b2 TYPE string VALUE 's1\_b2', \\n s1\_b3 TYPE string VALUE 's1\_b3', \\n BEGIN OF bsub2, \\n s2\_b1 TYPE string VALUE 's2\_b1', \\n s2\_b2 TYPE string VALUE 's2\_b2', \\n s2\_b3 TYPE string VALUE 's2\_b3', \\n END OF bsub2, \\n END OF bsub1, \\n END OF struct2. \\n\\ \\n FINAL(mapping\_tab) = VALUE cl\_abap\_corresponding=>mapping\_table( \\n ( level = 0 kind = 1 srcname = 'a1' dstname = 'b3' ) \\n ( level = 0 kind = 1 srcname = 'a3' dstname = 'b1' ) \\n ( level = 0 kind = 2 srcname = 'a5' ) \\n ( level = 0 kind = 1 srcname = 'asub1' dstname = 'bsub1' ) \\n ( level = 1 kind = 1 srcname = 's1\_a1' dstname = 's1\_b3' ) \\n ( level = 1 kind = 1 srcname = 's1\_a3' dstname = 's1\_b1' ) \\n ( level = 1 kind = 1 srcname = 'asub2' dstname = 'bsub2' ) \\n ( level = 2 kind = 1 srcname = 's2\_a1' dstname = 's2\_b3' ) \\n ( level = 2 kind = 1 srcname = 's2\_a3' dstname = 's2\_b1' ) ). \\n\\ \\n cl\_abap\_corresponding=>create( \\n source = struct1 \\n destination = struct2 \\n mapping = mapping\_tab \\n )->execute( EXPORTING source = struct1 \\n CHANGING destination = struct2 ). \\n\\ \\n out->write( struct1 \\n )->write( mapping\_tab \\n )->write( struct2 ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abencorresponding.html abencorresponding\_abexas.html