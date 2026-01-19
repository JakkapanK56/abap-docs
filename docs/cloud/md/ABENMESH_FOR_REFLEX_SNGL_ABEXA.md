---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMESH_FOR_REFLEX_SNGL_ABEXA.htm"
abapFile: "ABENMESH_FOR_REFLEX_SNGL_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "ABENMESH", "FOR", "REFLEX", "SNGL", "ABEXA"]
---

This example demonstrates the results of reflexive mesh associations in mesh paths.

In a reflexive mesh association (self-association), the source and target nodes are the same. A reflexive mesh association implements semantic relationships between the lines of a mesh node. This example shows the result sets of reflexive mesh associations for an internal table in which a hierarchical tree structure is stored.

-   Simple reflexive mesh association
-   `mesh-node\\_node[ mesh-node[ id = id ] ]`
-   The result set includes all lines in which, in accordance with the `ON` condition, the column `parent_id` is the same as the column `id` of the source. In the tree hierarchy, these are the direct subnodes of the line described using `source`.
-   Transitive mesh association with `+`
-   `mesh-node\\_node+[ mesh-node[ id = id ] ]`
-   The result set also includes all further lines for which, based on the first result set, the `ON` condition is met. In the tree hierarchy, these are all subnodes of the line described using `source`.
-   Transitive mesh association with `*`
-   `mesh-node\\_node*[ mesh-node[ id = id ] ]`
-   The result set also includes the line described by `source`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_mesh\_rflxv\_assoc\_sngl DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n BEGIN OF line, \\n id TYPE i, \\n parent\_id TYPE i, \\n name TYPE string, \\n END OF line, \\n t\_itab TYPE SORTED TABLE OF line WITH UNIQUE KEY id \\n WITH NON-UNIQUE SORTED KEY by\_parent COMPONENTS parent\_id, \\n BEGIN OF MESH t\_mesh, \\n node TYPE t\_itab \\n ASSOCIATION \_node TO node ON parent\_id = id \\n USING KEY by\_parent, \\n END OF MESH t\_mesh. \\n DATA \\n mesh TYPE t\_mesh. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_mesh\_rflxv\_assoc\_sngl IMPLEMENTATION. \\n METHOD main. \\n DATA(id) = 1. \\n cl\_demo\_input=>new( )->request( CHANGING field = id ). \\n\\ \\n out->begin\_section( 'node' \\n )->write( mesh-node ). \\n\\ \\n IF line\_exists( mesh-node\[ id = id \] ). \\n out->next\_section( '\\\\\_node' \\n )->write( VALUE t\_itab( \\n FOR IN mesh-node\\\\\_node\[ mesh-node\[ id = id \] \] \\n ( ) ) ). \\n\\ \\n out->next\_section( '\\\\\_node+' \\n )->write( VALUE t\_itab( \\n FOR IN mesh-node\\\\\_node+\[ mesh-node\[ id = id \] \] \\n ( ) ) ). \\n\\ \\n out->next\_section( '\\\\\_node\*' \\n )->write( VALUE t\_itab( \\n FOR IN mesh-node\\\\\_node\*\[ mesh-node\[ id = id \] \] \\n ( ) ) ) ##PRIMKEY\[BY\_PARENT\]. \\n ELSE. \\n out->write( \`Enter a valid ID ...\` ). \\n ENDIF. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n mesh-node = VALUE t\_itab( \\n ( id = 1 parent\_id = 0 name = 'AA' ) \\n ( id = 2 parent\_id = 1 name = 'AA-AA' ) \\n ( id = 3 parent\_id = 2 name = 'AA-AA-AA' ) \\n ( id = 4 parent\_id = 2 name = 'AA-AA-BB' ) \\n ( id = 5 parent\_id = 1 name = 'AA-BB' ) \\n ( id = 6 parent\_id = 5 name = 'AA-BB-AA' ) \\n ( id = 7 parent\_id = 6 name = 'AA-BB-AA-AA' ) \\n ( id = 8 parent\_id = 6 name = 'AA-BB-AA-BB' ) \\n ( id = 9 parent\_id = 5 name = 'AA-BB-BB' ) \\n ( id = 10 parent\_id = 9 name = 'AA-BB-BB-AA' ) \\n ( id = 11 parent\_id = 1 name = 'AA-CC' ) \\n ( id = 12 parent\_id = 0 name = 'BB' ) \\n ( id = 13 parent\_id = 0 name = 'CC' ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_mesh\_rflxv\_assoc\_sngl DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n BEGIN OF line, \\n id TYPE i, \\n parent\_id TYPE i, \\n name TYPE string, \\n END OF line, \\n t\_itab TYPE SORTED TABLE OF line WITH UNIQUE KEY id \\n WITH NON-UNIQUE SORTED KEY by\_parent COMPONENTS parent\_id, \\n BEGIN OF MESH t\_mesh, \\n node TYPE t\_itab \\n ASSOCIATION \_node TO node ON parent\_id = id \\n USING KEY by\_parent, \\n END OF MESH t\_mesh. \\n DATA \\n mesh TYPE t\_mesh. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_mesh\_rflxv\_assoc\_sngl IMPLEMENTATION. \\n METHOD main. \\n DATA(id) = 1. \\n cl\_demo\_input=>new( )->request( CHANGING field = id ). \\n\\ \\n out->begin\_section( 'node' \\n )->write( mesh-node ). \\n\\ \\n IF line\_exists( mesh-node\[ id = id \] ). \\n out->next\_section( '\\\\\_node' \\n )->write( VALUE t\_itab( \\n FOR IN mesh-node\\\\\_node\[ mesh-node\[ id = id \] \] \\n ( ) ) ). \\n\\ \\n out->next\_section( '\\\\\_node+' \\n )->write( VALUE t\_itab( \\n FOR IN mesh-node\\\\\_node+\[ mesh-node\[ id = id \] \] \\n ( ) ) ). \\n\\ \\n out->next\_section( '\\\\\_node\*' \\n )->write( VALUE t\_itab( \\n FOR IN mesh-node\\\\\_node\*\[ mesh-node\[ id = id \] \] \\n ( ) ) ) ##PRIMKEY\[BY\_PARENT\]. \\n ELSE. \\n out->write( \`Enter a valid ID ...\` ). \\n ENDIF. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n mesh-node = VALUE t\_itab( \\n ( id = 1 parent\_id = 0 name = 'AA' ) \\n ( id = 2 parent\_id = 1 name = 'AA-AA' ) \\n ( id = 3 parent\_id = 2 name = 'AA-AA-AA' ) \\n ( id = 4 parent\_id = 2 name = 'AA-AA-BB' ) \\n ( id = 5 parent\_id = 1 name = 'AA-BB' ) \\n ( id = 6 parent\_id = 5 name = 'AA-BB-AA' ) \\n ( id = 7 parent\_id = 6 name = 'AA-BB-AA-AA' ) \\n ( id = 8 parent\_id = 6 name = 'AA-BB-AA-BB' ) \\n ( id = 9 parent\_id = 5 name = 'AA-BB-BB' ) \\n ( id = 10 parent\_id = 9 name = 'AA-BB-BB-AA' ) \\n ( id = 11 parent\_id = 1 name = 'AA-CC' ) \\n ( id = 12 parent\_id = 0 name = 'BB' ) \\n ( id = 13 parent\_id = 0 name = 'CC' ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_meshes.html abenmesh\_pathes.html abenmesh\_path\_result.html abenmesh\_path\_result\_abexas.html