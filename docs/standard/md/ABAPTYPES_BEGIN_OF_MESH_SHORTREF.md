---
title: "ABAPTYPES_BEGIN_OF_MESH_SHORTREF"
description: |
  ABAPTYPES_BEGIN_OF_MESH_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTYPES_BEGIN_OF_MESH_SHORTREF.htm"
abapFile: "ABAPTYPES_BEGIN_OF_MESH_SHORTREF.html"
keywords: ["if", "data", "types", "internal-table", "ABAPTYPES", "BEGIN", "MESH", "SHORTREF"]
---

[Reference](ABAPTYPES_MESH.html)

`TYPES BEGIN OF MESH mesh_type.    ...    TYPES  snode \{ TYPE \{[REF TO] table_type\}|ref_type \}\               |\ \{ LIKE \{[REF TO] itab      \}|dref     \}\                 [ASSOCIATION _assoc TO tnode ON tcomp1 = scomp1                                            [AND tcomp2 = scomp2                                            [AND ... ]]\                                            [USING KEY key_name]]\                 [...].    ...  DATA END OF MESH mesh_type.`

Defines a mesh type `mesh_type` whose nodes are tabular data types or reference types for internal tables.

-   [`ASSOCIATION ...`](ABAPTYPES_MESH_ASSOCIATION.html)\\
    Declares a [mesh association](ABENMESH_ASSOCIATION_GLOSRY.html)\\ `_assoc` between a start node `snode` and a target node `tnode`. The relationship between the nodes is defined using one or more `ON` conditions, where `USING KEY` can be used to specify the table key used.

abenabap.html abenabap\_reference.html abenabap\_shortref.html