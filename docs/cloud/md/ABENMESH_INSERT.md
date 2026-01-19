---
title: "ABENMESH_INSERT"
description: |
  ABENMESH_INSERT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMESH_INSERT.htm"
abapFile: "ABENMESH_INSERT.html"
keywords: ["insert", "if", "case", "data", "types", "internal-table", "ABENMESH", "INSERT"]
---

``INSERT [`line_spec`](ABAPINSERT_ITAB_LINESPEC.html) INTO TABLE [`mesh_path`](ABENMESH_PATH.html)\ [`result`](ABAPINSERT_ITAB_RESULT.html).``

Inserts lines in the last path node of a mesh path [`mesh_path`](ABENMESH_PATH.html). As in [inserts](ABAPINSERT_ITAB.html) into a directly specified table using [`INTO TABLE`](ABAPINSERT_ITAB_POSITION.html), the position of the lines to be inserted is determined using the primary table key. The behavior for duplicate lines encountered with respect to unique table keys is also the same. When specifying the inserted lines using [`line_spec`](ABAPINSERT_ITAB_LINESPEC.html), the same applies when inserting lines into directly specified internal tables and they must be compatible with the line type of the last path node.

A set of lines with the line type of the last path node is instantiated internally from the specification in `line_spec` and the [result](ABENMESH_PATH_RESULT.html) of the mesh path. This set is inserted into the last path node in accordance with the rules of [`INSERT`](ABAPINSERT_ITAB.html):

The following applies when specifying the mesh associations:

The number of lines to be inserted is the number of lines specified in `lin_spec` multiplied by the number of lines described in [result](ABENMESH_PATH_RESULT.html). If, due to an additional `WHERE` condition, the result set is empty, no lines are inserted.

`[result](ABAPINSERT_ITAB_RESULT.html)` can be used to specify the output behavior when exactly one line is inserted, as in [`INSERT`](ABAPINSERT_ITAB.html). Since more than one line can be inserted when path extensions are used, the addition `result` can only be specified in the following cases:

The return code in system field `sy-subrc` is set in the same way as in the corresponding statement [`INSERT`](ABAPINSERT_ITAB.html).

-   For each line in [`line_spec`](ABAPINSERT_ITAB_LINESPEC.html) or for each line in a table to be inserted, the same number of lines is created as described by the [result](ABENMESH_PATH_RESULT.html). If the mesh path contains only the initial mesh associations, one line is created. In the case of path extensions, multiple lines can be created.
-   In the new lines, the columns in the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) of the last mesh association of the mesh path are filled as follows:

-   If the mesh path contains only an initial mesh association, each of these columns is filled with the current comparison value from `source`.
-   If the mesh path contains path extensions, each of these columns is filled with the value described by the result of the preceding mesh association.

-   The remaining components have the value of the lines specified in [`line_spec`](ABAPINSERT_ITAB_LINESPEC.html).

-   If the mesh path contains only an initial mesh association, the square brackets cannot contain an [additional condition](ABENMESH_PATH_ASSOC_COND.html).
-   If the mesh path contains path extensions, all mesh associations can contain additional conditions using the additions [`USING KEY`](ABENMESH_PATH_ASSOC_COND.html) and [`WHERE log_exp`](ABENMESH_PATH_ASSOC_COND.html). The square brackets `[ ]` for the mesh association of the last path extension must be empty.

-   If the variant `LINES OF` is not used in [`line_spec`](ABAPINSERT_ITAB_LINESPEC.html).
-   The mesh path contains only the initial mesh association.

-   When `INITIAL LINE` is used to specify an initial line in [`line_spec`](ABAPINSERT_ITAB_LINESPEC.html), only those components remain initial that are not specified in the `ON` condition.
-   The square brackets of the mesh association of the last path extension are empty, since it needs only to indicate the mesh node in which the lines are inserted.

-   [Insertions in Mesh Paths](ABENMESH_INSERT_ABEXA.html)
-   [Table Builds Using Mesh Paths](ABENMESH_BUILD_ABEXA.html)

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_meshes.html abenmesh\_path\_usage.html