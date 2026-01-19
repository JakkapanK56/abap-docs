---
title: "ABENMESH_LOOP"
description: |
  ABENMESH_LOOP - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMESH_LOOP.htm"
abapFile: "ABENMESH_LOOP.html"
keywords: ["insert", "delete", "loop", "do", "if", "data", "internal-table", "ABENMESH", "LOOP"]
---

``LOOP AT [`mesh_path`](ABENMESH_PATH.html)\ [`result`](ABAPLOOP_AT_ITAB_RESULT.html).    ...  ENDLOOP.``

Reads all lines described by the [results](ABENMESH_PATH_RESULT.html) of a mesh path [`mesh_path`](ABENMESH_PATH.html) in a loop. Essentially, the loop works like the statement [`LOOP AT itab`](ABAPLOOP_AT_ITAB.html) across a directly specified table and accesses the lines of the last path node described by the mesh path instead. The output behavior [`result`](ABAPLOOP_AT_ITAB_RESULT.html) is specified in exactly the same way as in `LOOP AT itab` and must match the line type of the last path node. The system fields are set in the same way as in the corresponding statement `LOOP AT itab`, where `sy-tabix` depends on the table key used.

An additional condition can be specified in the square brackets [`[ ... ]`](ABENMESH_PATH_ASSOC.html) of each mesh association using the additions [`USING KEY`](ABENMESH_PATH_ASSOC_COND.html) and [`WHERE log_exp`](ABENMESH_PATH_ASSOC_COND.html).

The order in which the lines of the last path node are read depends on the order in which the lines were found when the mesh path was evaluated. Here, an iteration is performed across every follow-on node in the mesh path, in accordance with the table key used.

If only the initial mesh association is specified, the same rules apply when changing the last path node in the loop as when using `LOOP AT itab`. If a path extension is specified, the following additional restrictions apply:

The entire internal table must never be replaced or deleted in the loop. Mesh nodes that are evaluated when path extensions are used before the last path node, however, can be modified as required.

[Loops Across Mesh Paths](ABENMESH_LOOPS_ABEXA.html)

-   No line can be deleted from the last path node.
-   No line can be inserted into the last path node, unless a hash key is used.
-   No component of the table key used can be changed.

-   A loop across a mesh path can be understood as a nesting of loops [`LOOP AT itab`](ABAPLOOP_AT_ITAB.html) across the matching follow-on nodes, whose [`WHERE` conditions](ABAPLOOP_AT_ITAB_COND.html) are constructed from `ON` conditions and the explicitly specified additional conditions. The evaluation itself, however, does not take place in nested `LOOP` statements and multiple iterations across a single table line never take place.
-   If [path extensions](ABENMESH_PATH_RESULT_CHAINING.html) are used, any lines found more than once in mesh path evaluations are iterated only once.
-   Tables located in front of the last path node in path extensions can be modified in any way in the loop, since they are evaluated only once before the loop is executed across the last path node.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_meshes.html abenmesh\_path\_usage.html