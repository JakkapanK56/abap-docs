---
title: "ABENLOGEXP_RULES_OPERANDS_MESH"
description: |
  ABENLOGEXP_RULES_OPERANDS_MESH - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP_RULES_OPERANDS_MESH.htm"
abapFile: "ABENLOGEXP_RULES_OPERANDS_MESH.html"
keywords: ["data", "types", "internal-table", "ABENLOGEXP", "RULES", "OPERANDS", "MESH"]
---

[Meshes](ABENABAP_MESHES.html) can only be compared with meshes that are fully [compatible](ABENCOMPATIBILITY.html). The comparison is performed component by component, as for the corresponding [structure](ABENLOGEXP_RULES_OPERANDS_STRUC.html). The rules for [internal tables](ABENLOGEXP_RULES_OPERANDS_ITAB.html) also apply to comparing components.

After `mesh1` has been assigned to `mesh2`, both meshes are the same. After increasing the number of lines of component `node2` in `mesh2`, this mesh is greater than `mesh1`.

TYPES: \\n BEGIN OF line1, \\n col1 TYPE i, \\n END OF line1, \\n t\_itab1 TYPE SORTED TABLE OF line1 \\n WITH UNIQUE KEY col1, \\n BEGIN OF line2, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF line2, \\n t\_itab2 TYPE SORTED TABLE OF line2 \\n WITH UNIQUE KEY col1 col2, \\n BEGIN OF MESH t\_mesh, \\n node1 TYPE t\_itab1 \\n ASSOCIATION \_node2 TO node2 ON col1 = col1, \\n node2 TYPE t\_itab2, \\n END OF MESH t\_mesh. \\n\\ \\nDATA: \\n mesh1 TYPE t\_mesh, \\n mesh2 TYPE t\_mesh. \\n\\ \\nmesh1-node1 = VALUE t\_itab1( \\n ( col1 = 1 ) ). \\nmesh1-node2 = VALUE t\_itab2( \\n ( col1 = 1 col2 = 11 ) \\n ( col1 = 1 col2 = 12 ) ). \\n\\ \\nmesh2 = mesh1. \\nASSERT mesh2 = mesh1. \\n\\ \\nmesh2-node2 = VALUE t\_itab2( \\n BASE mesh2-node2 \\n ( col1 = 1 col2 = 13 ) ). \\nASSERT mesh2 > mesh1. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_rules.html