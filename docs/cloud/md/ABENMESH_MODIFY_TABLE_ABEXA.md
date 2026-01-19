---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMESH_MODIFY_TABLE_ABEXA.htm"
abapFile: "ABENMESH_MODIFY_TABLE_ABEXA.html"
keywords: ["insert", "do", "while", "if", "method", "class", "data", "types", "ABENMESH", "MODIFY", "TABLE", "ABEXA"]
---

This example demonstrates how single lines are changed in mesh paths.

Starting from the filled mesh nodes `mesh-node1` and `mesh-node2`, single lines from `mesh-node2` are changed:

-   Statement `MODIFY TABLE` for changing a line using the `ON` condition.
-   `MODIFY TABLE mesh-node1\\_node2_1[ mesh-node1[ 1 ] ] FROM VALUE line2( col2 = 111 col3 = 222 ) TRANSPORTING col2 col3.`
-   The `ON` condition of the mesh association `_node2_1` covers the primary table key of the node `node2` and is used to identify the line that needs to be modified.
-   Statement `MODIFY TABLE` for changing a line using the `ON` condition and with a key field from the work area.
-   `MODIFY TABLE mesh-node1\\_node2_2[ mesh-node1[ 2 ] ] FROM VALUE line2( col2 = 22 col3 = 333 ) USING KEY mkey TRANSPORTING col3.`
-   The `ON` condition of the mesh association `_node2_2` does not cover the table key `mkey` and the missing information is taken from column `col2` of the work area after `FROM`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_mesh\_modify\_tble\_nmbrs DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n BEGIN OF line1, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF line1, \\n t\_itab1 TYPE SORTED TABLE OF line1 \\n WITH NON-UNIQUE KEY col1 col2, \\n BEGIN OF line2, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE i, \\n END OF line2, \\n t\_itab2 TYPE SORTED TABLE OF line2 \\n WITH NON-UNIQUE KEY col1 \\n WITH UNIQUE HASHED KEY mkey \\n COMPONENTS col1 col2, \\n BEGIN OF MESH t\_mesh, \\n node1 TYPE t\_itab1 \\n ASSOCIATION \_node2\_1 TO node2 ON col1 = col1 \\n AND col2 = col2 \\n ASSOCIATION \_node2\_2 TO node2 ON col1 = col1, \\n node2 TYPE t\_itab2, \\n END OF MESH t\_mesh. \\n DATA \\n mesh TYPE t\_mesh. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_mesh\_modify\_tble\_nmbrs IMPLEMENTATION. \\n METHOD main. \\n out->begin\_section( 'Initial node1' \\n )->write( mesh-node1 \\n )->next\_section( 'Initial node2' \\n )->write( mesh-node2 ). \\n\\ \\n out->next\_section( 'Modify One Line Using ON' ). \\n MODIFY TABLE mesh-node1\\\\\_node2\_1\[ mesh-node1\[ 1 \] \] \\n FROM VALUE line2( col2 = 111 col3 = 222 ) \\n TRANSPORTING col2 col3. \\n out->write( mesh-node2 ). \\n\\ \\n out->next\_section( 'Modify One Line Using ON and FROM wa' ). \\n MODIFY TABLE mesh-node1\\\\\_node2\_2\[ mesh-node1\[ 2 \] \] \\n FROM VALUE line2( col2 = 22 col3 = 333 ) \\n USING KEY mkey TRANSPORTING col3. \\n out->write( mesh-node2 ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n mesh-node1 = VALUE #( \\n FOR j = 11 THEN j + 10 WHILE j < 30 \\n ( col1 = j col2 = j + 1 ) ). \\n DO lines( mesh-node1 ) TIMES. \\n INSERT VALUE line2( col3 = 3 + sy-index \* 10 ) \\n INTO TABLE mesh-node1\\\\\_node2\_1\[ mesh-node1\[ sy-index \] \]. \\n ENDDO. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_mesh\_modify\_tble\_nmbrs DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n BEGIN OF line1, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF line1, \\n t\_itab1 TYPE SORTED TABLE OF line1 \\n WITH NON-UNIQUE KEY col1 col2, \\n BEGIN OF line2, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE i, \\n END OF line2, \\n t\_itab2 TYPE SORTED TABLE OF line2 \\n WITH NON-UNIQUE KEY col1 \\n WITH UNIQUE HASHED KEY mkey \\n COMPONENTS col1 col2, \\n BEGIN OF MESH t\_mesh, \\n node1 TYPE t\_itab1 \\n ASSOCIATION \_node2\_1 TO node2 ON col1 = col1 \\n AND col2 = col2 \\n ASSOCIATION \_node2\_2 TO node2 ON col1 = col1, \\n node2 TYPE t\_itab2, \\n END OF MESH t\_mesh. \\n DATA \\n mesh TYPE t\_mesh. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_mesh\_modify\_tble\_nmbrs IMPLEMENTATION. \\n METHOD main. \\n out->begin\_section( 'Initial node1' \\n )->write( mesh-node1 \\n )->next\_section( 'Initial node2' \\n )->write( mesh-node2 ). \\n\\ \\n out->next\_section( 'Modify One Line Using ON' ). \\n MODIFY TABLE mesh-node1\\\\\_node2\_1\[ mesh-node1\[ 1 \] \] \\n FROM VALUE line2( col2 = 111 col3 = 222 ) \\n TRANSPORTING col2 col3. \\n out->write( mesh-node2 ). \\n\\ \\n out->next\_section( 'Modify One Line Using ON and FROM wa' ). \\n MODIFY TABLE mesh-node1\\\\\_node2\_2\[ mesh-node1\[ 2 \] \] \\n FROM VALUE line2( col2 = 22 col3 = 333 ) \\n USING KEY mkey TRANSPORTING col3. \\n out->write( mesh-node2 ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n mesh-node1 = VALUE #( \\n FOR j = 11 THEN j + 10 WHILE j < 30 \\n ( col1 = j col2 = j + 1 ) ). \\n DO lines( mesh-node1 ) TIMES. \\n INSERT VALUE line2( col3 = 3 + sy-index \* 10 ) \\n INTO TABLE mesh-node1\\\\\_node2\_1\[ mesh-node1\[ sy-index \] \]. \\n ENDDO. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_meshes.html abenmesh\_path\_usage.html abenmesh\_modify.html