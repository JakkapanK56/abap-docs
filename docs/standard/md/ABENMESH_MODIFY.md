---
title: "ABENMESH_MODIFY"
description: |
  ABENMESH_MODIFY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMESH_MODIFY.htm"
abapFile: "ABENMESH_MODIFY.html"
keywords: ["do", "if", "data", "types", "internal-table", "ABENMESH", "MODIFY"]
---

``MODIFY \{ TABLE [`mesh_path`](ABENMESH_PATH.html)\ [USING KEY [`keyname`](ABENKEYNAME.html)]\                           FROM wa                           [TRANSPORTING [`comp1`](ABENITAB_COMPONENTS.html)\ [`comp2`](ABENITAB_COMPONENTS.html) ...]\                           [`result`](ABAPMODIFY_ITAB_RESULT.html)\ \}\       |\ \{\ [`mesh_path`](ABENMESH_PATH.html) FROM wa                     [TRANSPORTING [`comp1`](ABENITAB_COMPONENTS.html)\ [`comp2`](ABENITAB_COMPONENTS.html) ...]\ \}.``

[1. `MODIFY TABLE mesh_path FROM wa ...`](#ABAP_VARIANT_1@1@)

[2. `MODIFY mesh_path FROM wa ...`](#ABAP_VARIANT_2@1@)

[`... TRANSPORTING comp1 comp2 ...`](#ABAP_ONE_ADD@1@)

Modifies one or more lines in the last path node of a mesh path [`mesh_path`](ABENMESH_PATH.html). In the line or lines described by the mesh path, the following columns are assigned the corresponding values from the work area `wa`:

`wa` expects a structure that is compatible with the line type of the last path node. No key fields of primary or secondary table keys in the last path node can be overwritten. The return code `sy-subrc` is set in the same way as in the corresponding statement [`MODIFY itab`](ABAPMODIFY_ITAB.html).

It should be noted that the addition `TABLE` is highly significant for directly specified internal tables, as in [`MODIFY`](ABAPMODIFY_ITAB.html), and distinguishes different variants of statements from each other.

Modifies exactly one line in the follow-on node of an [initial mesh association](ABENMESH_PATH.html). In this variant, no path extensions can be specified, and the square brackets of the initial mesh association cannot contain any [additional conditions](ABENMESH_PATH_ASSOC_COND.html). The line to be modified is determined using the table key used:

The line is modified in accordance with the rules of [`MODIFY`](ABAPMODIFY_ITAB.html). If the follow-on node contains multiple lines that match the specified key, the first line found is modified. If the line to be modified is not found, nothing is modified. The key used can be specified using the addition `USING KEY`, just as in the statement [`MODIFY`](ABAPMODIFY_ITAB_SINGLE.html) with directly specified internal table. [`result`](ABAPMODIFY_ITAB_RESULT.html) can be used to specify the output behavior.

Columns of the follow-on node that are listed in the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) but are not part of the table key used are always ignored in this variant. This means that the line to be modified cannot be determined beyond the bounds of the table key.

[Changing Single Lines in Mesh Paths](ABENMESH_MODIFY_TABLE_ABEXA.html)

Modifies multiple lines in the last path node of a mesh path [`mesh_path`](ABENMESH_PATH.html). All lines in the last path node that are described by the [result](ABENMESH_PATH_RESULT.html) of the mesh path are modified. An additional condition can be specified in the square brackets [`[ ... ]`](ABENMESH_PATH_ASSOC.html) of each mesh association of the mesh path using the additions [`USING KEY`](ABENMESH_PATH_ASSOC_COND.html) and [`WHERE log_exp`](ABENMESH_PATH_ASSOC_COND.html). In the last mesh association, the addition `USING KEY` cannot be specified if it is specified after `FROM wa`.

[Changing Multiple Lines in Mesh Paths](ABENMESH_MODIFY_ABEXA.html)

The same applies to the addition `TRANSPORTING` as to the statement [`MODIFY`](ABAPMODIFY_ITAB_SINGLE.html) with directly specified internal table, with the restriction that no columns can be specified that are part of the primary key of the last path node if the table is a sorted table or hashed table.

The `TRANSPORTING` addition can also be used to modify columns that are specified in the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh association used.

-   If the optional addition `TRANSPORTING` is not specified, all columns are modified

-   that are not in the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh association used,
-   that are no part of the primary key of the last path node, if the table is a sorted table or a hashed table.

-   If the optional addition `TRANSPORTING` is specified, the columns listed after it are modified

-   If the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh association used covers all key fields of the table key it uses, the line to be modified is determined using the [result](ABENMESH_PATH_RESULT_INIT_ASSOC.html) of the mesh path. However, only those fields of the `ON` condition are respected that are also key fields.
-   If the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh association used does not cover the key fields of the table key it uses, the missing key fields are taken from the associated components of the work area `wa`.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_meshes.html abenmesh\_path\_usage.html