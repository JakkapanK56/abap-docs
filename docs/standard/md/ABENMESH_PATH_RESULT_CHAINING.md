---
title: "ABENMESH_PATH_RESULT_CHAINING"
description: |
  ABENMESH_PATH_RESULT_CHAINING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMESH_PATH_RESULT_CHAINING.htm"
abapFile: "ABENMESH_PATH_RESULT_CHAINING.html"
keywords: ["select", "if", "try", "data", "types", "ABENMESH", "PATH", "RESULT", "CHAINING"]
---

A path extension with the [syntax](ABENMESH_PATH.html)

`...[\\_assoc1](ABENMESH_PATH_ASSOC.html)[ [[cond](ABENMESH_PATH_ASSOC_COND.html)] ][\\_assoc2](ABENMESH_PATH_ASSOC.html)[ [[cond](ABENMESH_PATH_ASSOC_COND.html)] ] ...`

describes a set of lines in the last path node.

Each mesh association specified in a mesh path with path extension describes a set of lines in its follow-on node that is used as a starting point for its follow-on nodes of the lines and meets the following conditions:

In the set of lines described by a path extension, each line occurs only once, even if it was found more than once in the evaluation of the mesh path.

Each mesh association specified in a mesh path with path extension selects a single line in its follow-on node (or fails with one exception). This line is used as the starting point for the follow-on node in accordance with the conditions described above.

The set of lines described by the result can be either one line or multiple lines.

[Results of Mesh Paths](ABENMESH_PATH_RESULT_ABEXAS.html)

-   All lines meet the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh association used in relation to the set of lines described in the preceding mesh association. Every `tcomp` column listed in the `ON` condition has the same content as in the `scomp` column of the entry node assigned in the `ON` condition in a line of its result.
-   Depending on the mesh path [usage](ABENMESH_PATH_USAGE.html), the set of lines can be further restricted by using additional [`cond`](ABENMESH_PATH_ASSOC_COND.html) conditions.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_meshes.html abenmesh\_pathes.html abenmesh\_path\_result.html