---
title: "ABENMESH_PATH_RESULT"
description: |
  ABENMESH_PATH_RESULT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMESH_PATH_RESULT.htm"
abapFile: "ABENMESH_PATH_RESULT.html"
keywords: ["loop", "try", "data", "ABENMESH", "PATH", "RESULT"]
---

The mesh path result is a description of a set of lines in the last node path node of the expression. The result is used in statements and expressions for [using mesh paths](ABENMESH_PATH_USAGE.html) (with one exception); either for navigating in the last path node or for manipulating the last path node. The exception is statement [`SET ASSOCIATION`](ABENMESH_SET_ASSOCIATION.html), which works with the second last path node.

-   [Result of the initial mesh association](ABENMESH_PATH_RESULT_INIT_ASSOC.html)
-   [Result of a path extension](ABENMESH_PATH_RESULT_CHAINING.html)

-   At runtime, the mesh path result expresses the relationship defined by mesh associations between the entry node and follow-on node. The result is managed internally by the ABAP runtime framework and evaluated in line with [Using Mesh Paths](ABENMESH_PATH_USAGE.html).
-   Loops implemented with [`LOOP AT`](ABENMESH_LOOP.html) or [`FOR`](ABENMESH_FOR.html) are suitable for performing reads on all the lines described by the mesh path result.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_meshes.html abenmesh\_pathes.html