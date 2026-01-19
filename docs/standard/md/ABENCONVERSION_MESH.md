---
title: "ABENCONVERSION_MESH"
description: |
  ABENCONVERSION_MESH - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONVERSION_MESH.htm"
abapFile: "ABENCONVERSION_MESH.html"
keywords: ["if", "data", "ABENCONVERSION", "MESH"]
---

[Meshes](ABENMESH_GLOSRY.html) are not converted. Meshes can only be assigned to meshes and meshes can be assigned to each other only if they are fully [compatible](ABENCOMPATIBILITY.html), that is:

Assignments between meshes and data objects that cannot be assigned to meshes lead to a syntax error or the runtime error `OBJECTS_MOVE_NOT_SUPPORTED`.

[`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html) can also be used to assign incompatible meshes or structures and meshes to each other.

See [Comparing Meshes](ABENLOGEXP_RULES_OPERANDS_MESH.html)

-   Their node structure must be identical, including the names of the nodes.
-   The mesh associations of each node are completely identical, which means that

-   They must have the same name.
-   The same `ON` conditions must be specified.
-   The same table key must be used.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html