---
title: "ABENMESH_PATH_ASSOC_COND"
description: |
  ABENMESH_PATH_ASSOC_COND - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMESH_PATH_ASSOC_COND.htm"
abapFile: "ABENMESH_PATH_ASSOC_COND.html"
keywords: ["insert", "delete", "loop", "do", "if", "case", "data", "types", "ABENMESH", "PATH", "ASSOC", "COND"]
---

`... \{ col1 = val1 col2 = val2 ... \}\    |\ \{\ [USING KEY key]\ [WHERE log_exp]\ \} ...`

[1. `... col1 = val1 col2 = val2 ...`](#ABAP_VARIANT_1@1@)

[2. `... [USING KEY key]\ [WHERE log_exp]`](#ABAP_VARIANT_2@1@)

Specifies an additional condition in the square brackets, [`[ ... ]`](ABENMESH_PATH_ASSOC.html), of a mesh association in a [mesh path](ABENMESH_PATH.html). In an initial mesh association, a condition of this type can be specified alongside the structure `source`. In the case of a path extension, the square brackets contain an additional condition or are empty.

Additional condition when using mesh paths in [mesh path expressions](ABENMESH_PATH_EXPRESSION.html). `col1`, `col2`, ... can be used to specify columns of the follow-on node of the mesh association that do not already occur in their [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html). Each of these columns is assigned a value `val1`, `val2`, ... Their content must match this value to meet the condition. `val1`, `val2`, ... are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html). The additional condition is joined with the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) to create a full condition. In the case of an initial mesh association, the comparison values of the `ON` condition are specified explicitly as a structure `source`. In the case of a path extension, the comparison values are taken from the result set of the preceding mesh association.

[Mesh Path Expressions](ABENMESH_TABLE_EXPRESSIONS_ABEXA.html)

Additional condition when using mesh paths in the statements and expressions:

Only one `WHERE` condition, `USING KEY` with a `WHERE` condition, or only `USING KEY` can be specified. `USING KEY` must be specified in front of a `WHERE` condition. The syntax and semantics of the `WHERE` condition are the same as when [`WHERE log_exp`](ABAPLOOP_AT_ITAB_COND.html) is specified statically for the statement [`LOOP AT itab`](ABAPLOOP_AT_ITAB.html), but the comparison is made for columns of the follow-on node.

`USING KEY` can be used to specify a [table key](ABENITAB_KEY.html)\\ `key` of the follow-on node. The name or alias name of the table key must be specified directly.

`USING KEY` can be specified without a `WHERE` condition, for example, to use a table key with a different order of key fields as in a table key specified in a mesh association.

See the examples of the [statements](ABENMESH_PATH_USAGE.html) discussed here.

-   [`LOOP AT mesh_path ...`](ABENMESH_LOOP.html)
-   [`FOR ... IN mesh_path ...`](ABENMESH_FOR.html)
-   [`INSERT ... INTO TABLE mesh_path ...`](ABENMESH_INSERT.html)
-   [`MODIFY mesh_path.`](ABENMESH_MODIFY.html)
-   [`DELETE mesh_path.`](ABENMESH_DELETE.html)
-   [`SET ASSOCIATION mesh_path ...`](ABENMESH_SET_ASSOCIATION.html)

-   If only one `WHERE` condition is specified, any comparisons for columns of the follow-on node are possible in this condition. These columns can also already be specified in the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh association. The `WHERE` condition works like an additional condition joined with the evaluation of the `ON` condition using `AND`.
-   The specification `USING KEY` defines the table key used to access the follow-on node. It overrides any other `USING KEY` specifications in the [definition](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh association.

-   If `USING KEY` is specified in front of a `WHERE` condition, the equality comparisons of the `WHERE` condition joined using `AND` are also joined using `AND` with the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) to form a condition. Optimized key access must be possible here: There can be no duplicate columns in the joined condition and, in the case of a sorted table key, it must cover a left initial part. In the case of a hash key, it must cover all key fields of the follow-on node. Further parts of the `WHERE` condition, such as comparisons joined using `OR` or comparisons for properties other than equality, are not required for optimized key access and work in the same way as only specifying a `WHERE` condition as an additional condition.
-   If `USING KEY` is specified without a `WHERE` condition, the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh association must meet the prerequisites for optimized access for the table key.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_meshes.html abenmesh\_pathes.html abenmesh\_path.html abenmesh\_path\_assoc.html