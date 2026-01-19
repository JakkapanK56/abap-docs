---
title: "ABENNEWS-740_SP05-MESH"
description: |
  ABENNEWS-740_SP05-MESH - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740_SP05-MESH.htm"
abapFile: "ABENNEWS-740_SP05-MESH.html"
keywords: ["insert", "delete", "loop", "if", "data", "types", "internal-table", "ABENNEWS", "740", "SP05", "MESH"]
---

[1\. Data Types for Meshes](#ABAP_MODIFICATION_1@4@)

[2\. Processing Meshes](#ABAP_MODIFICATION_2@4@)

The [meshes](ABENABAP_MESHES.html) (introduced in ABAP release 7.40 SP05) are special structures whose components are internal tables, which can be linked to each other using mesh associations. Mesh associations are evaluated by specifying mesh paths in suitable expressions and statements.

Mesh types can be created using the following new variant of the `TYPES` statement:

[TYPES BEGIN OF MESH](ABAPTYPES_MESH.html)\\ \\n  ... \\n  TYPES snode ... [ASSOCIATION](ABAPTYPES_MESH_ASSOCIATION.html) \_assoc \\n                  TO tnode ON tcomp1 = scomp1 \[AND ...\]. \\n  ... \\n[TYPES END OF MESH](ABAPTYPES_MESH.html)

Meshes are instances of these types and can be used in suitable expressions and statements.

These relationships (defined using mesh associations) between mesh nodes in a mesh can be evaluated in [mesh paths](ABENMESH_PATHES.html). These mesh paths can be [used](ABENMESH_PATH_USAGE.html) in the following expressions and statements:

-   [`... mesh_path ...`](ABENMESH_PATH_EXPRESSION.html)
-   [`LOOP AT mesh_path`](ABENMESH_LOOP.html)
-   [`FOR ... IN mesh_path`](ABENMESH_FOR.html)
-   [`INSERT ... INTO ... mesh_path`](ABENMESH_INSERT.html)
-   [`MODIFY ... mesh_path`](ABENMESH_MODIFY.html)
-   [`DELETE ... mesh_path`](ABENMESH_DELETE.html)
-   [`SET ASSOCIATION mesh_path`](ABENMESH_SET_ASSOCIATION.html)

abenabap.html abennews.html abennews-740.html abennews-740\_sp05.html