---
title: "ABENABAP_MESHES"
description: |
  ABENABAP_MESHES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_MESHES.htm"
abapFile: "ABENABAP_MESHES.html"
keywords: ["select", "if", "case", "data", "types", "internal-table", "field-symbol", "ABENABAP", "MESHES"]
---

Meshes are instances of mesh types defined as follows:

[TYPES BEGIN OF MESH](ABAPTYPES_MESH.html)\\ \\n  ... \\n  TYPES snode ... [ASSOCIATION \_assoc](ABAPTYPES_MESH_ASSOCIATION.html)\\ \\n                  TO tnode ON tcomp1 = scomp1 \[AND ...\]. \\n  ... \\n[TYPES END OF MESH](ABAPTYPES_MESH.html)

These are special [structures](ABENSTRUCTURE_GLOSRY.html) whose components, which are referred to as nodes, are either structured internal tables or reference variables that refer to such internal tables.

The addition [`ASSOCIATION`](ABAPTYPES_MESH_ASSOCIATION.html) can be used to declare [mesh associations](ABENMESH_ASSOCIATION_GLOSRY.html) defined using `ON` conditions between start nodes and target nodes of the mesh. These semantic relationships between the mesh nodes can be evaluated in mesh paths. The mesh paths can be used in expressions and processing statements for meshes.

-   [Mesh paths](ABENMESH_PATHES.html)
-   [Results of mesh paths](ABENMESH_PATH_USAGE.html)

-   A mesh node is addressed in the same way as a regular structure component; by using the structure component selector (`-`) or the object component selector (`->`). Mesh associations are evaluated in [mesh paths](ABENMESH_PATH.html). If no path is specified, a mesh node is handled in the same way as a regular structure component. The same applies to field symbols or reference variables that point to mesh nodes. The statement [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html) also handles a mesh like a regular structure.
-   In the simplest case, the relationships implemented between mesh nodes using mesh associations can be compared to [foreign key dependencies](ABENFOREIGN_KEY_DEPENDENCY_GLOSRY.html). Here, the start node of a mesh association is the check table and the target node is the foreign key table. The use of mesh paths makes it easier to evaluate these relationships, without the need to program the relevant selections.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html