---
title: "ABENMESH_PATH_RESULT_INIT_ASSOC"
description: |
  ABENMESH_PATH_RESULT_INIT_ASSOC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMESH_PATH_RESULT_INIT_ASSOC.htm"
abapFile: "ABENMESH_PATH_RESULT_INIT_ASSOC.html"
keywords: ["if", "data", "types", "ABENMESH", "PATH", "RESULT", "INIT", "ASSOC"]
---

An initial mesh association with the [syntax](ABENMESH_PATH.html)

`...rnode[\\_associ](ABENMESH_PATH_ASSOC.html)[ source [[cond](ABENMESH_PATH_ASSOC_COND.html)] ] ...`

describes a set of lines in the follow-on node of the used mesh association that meets the following conditions:

The set of lines described by the result can be either one line or multiple lines.

[Results of Mesh Paths](ABENMESH_PATH_RESULT_ABEXAS.html)

-   All lines meet the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) of the used mesh association with respect to the specified structure `source`. Every `tcomp` column specified in the `ON` condition has the same content as in the `scomp` column of the root node in the `source` structure that is assigned to the `ON` condition.
-   Depending on the mesh path [usage](ABENMESH_PATH_USAGE.html), the set of lines can be further restricted by using additional [`cond`](ABENMESH_PATH_ASSOC_COND.html) conditions.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_meshes.html abenmesh\_pathes.html abenmesh\_path\_result.html