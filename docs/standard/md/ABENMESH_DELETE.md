---
title: "ABENMESH_DELETE"
description: |
  ABENMESH_DELETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMESH_DELETE.htm"
abapFile: "ABENMESH_DELETE.html"
keywords: ["delete", "do", "if", "data", "types", "internal-table", "ABENMESH", "DELETE"]
---

``DELETE \{ TABLE [`mesh_path`](ABENMESH_PATH.html)\ [`table_key`](ABAPDELETE_ITAB_KEY.html)\ \}\       |\ \{\ [`mesh_path`](ABENMESH_PATH.html)\ \}.``

[1. `DELETE TABLE mesh_path table_key.`](#ABAP_VARIANT_1@1@)

[2. `DELETE mesh_path.`](#ABAP_VARIANT_2@1@)

Deletes one or more lines from the last path node of a mesh path [`mesh_path`](ABENMESH_PATH.html).

It should be noted that the addition `TABLE` is highly significant for directly specified internal tables, as in [`DELETE`](ABAPDELETE_ITAB.html), and distinguishes different variants of statements from each other.

Deletes exactly one line from the follow-on node of an [initial mesh association](ABENMESH_PATH.html). In this variant, no path extensions can be specified, and the square brackets of the initial mesh association cannot contain any [additional conditions](ABENMESH_PATH_ASSOC_COND.html). The line to be modified is determined using the table key:

The line is deleted in accordance with the rules of [`DELETE`](ABAPDELETE_ITAB.html). If the follow-on node contains multiple lines that match the specified key, the first line found is deleted. If the line to be deleted is not found, nothing is deleted.

The return code `sy-subrc` is set in the same way as in the corresponding statement [`DELETE itab`](ABAPDELETE_ITAB.html).

[Deleting Single Lines in Mesh Paths](ABENMESH_DELETE_TABLE_ABEXA.html)

Deletes multiple lines from the last path node of a mesh path [`mesh_path`](ABENMESH_PATH.html). All lines from the last path node described by the [result](ABENMESH_PATH_RESULT.html) of the mesh path are deleted. An additional condition can be specified in the square brackets [`[ ... ]`](ABENMESH_PATH_ASSOC.html) of each mesh association of the mesh path using the additions [`USING KEY`](ABENMESH_PATH_ASSOC_COND.html) and [`WHERE log_exp`](ABENMESH_PATH_ASSOC_COND.html).

[Deleting Multiple Lines in Mesh Paths](ABENMESH_DELETE_ABEXA.html)

-   If the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh association used covers all key fields of the table key it uses, the line to be deleted is determined using the [result](ABENMESH_PATH_RESULT_INIT_ASSOC.html) of the mesh path. Here, only those fields of the `ON` condition are respected that are also key fields.
-   If the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh association used does not cover the key fields of the table key it uses, the missing key fields must be specified in the addition [`table_key`](ABAPDELETE_ITAB_KEY.html) and these are combined with the [result](ABENMESH_PATH_RESULT_INIT_ASSOC.html) of the mesh path. The same can be specified for [`table_key`](ABAPDELETE_ITAB_KEY.html) as in the statement [`DELETE`](ABAPDELETE_ITAB.html)\\ [`TABLE itab`](ABAPDELETE_ITAB_LINE.html) with a directly specified internal table:

-   [`WITH TABLE KEY`](ABAPDELETE_ITAB_KEY.html) must be used to specify all key fields not covered by the `ON` condition. No key fields can be specified that are already covered by the `ON` condition. Furthermore, all fields of the follow-on node used in the `ON` condition must exist in the table key used by the mesh association.
-   Only those components are taken from a work area specified using [`FROM wa`](ABAPDELETE_ITAB_KEY.html) that match the non-covered key fields. All other components are ignored. The work area `wa` must be compatible with the line type of the last path node.

-   If a table key is specified in [`table_key`](ABAPDELETE_ITAB_KEY.html) using `keyname COMPONENTS` or `USING keyname`, this key overrides any [`USING KEY`](ABAPTYPES_MESH_ASSOCIATION.html) additions specified in the definition of the mesh association. The line is deleted with respect to this table key and its key fields must be completely covered.

-   If the `ON` condition covers all key fields, the addition [`WITH TABLE KEY`](ABAPDELETE_ITAB_KEY.html) cannot be specified. The addition [`FROM wa`](ABAPDELETE_ITAB_KEY.html) can be specified, but is ignored.
-   If no explicit table key is specified in the definition of the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) and in the statement `DELETE TABLE mesh_path`, the line is deleted with respect to the primary table key.
-   Columns of the follow-on node that are listed in the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) but are not part of the table key used are either forbidden or ignored in this variant. This means that the line to be deleted cannot be determined beyond the bounds of the table key.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_meshes.html abenmesh\_path\_usage.html