---
title: "Assigns initial values"
description: |
  All components of `source` or all columns of the lines found in the second last path node that are specified in the `ON` condition(ABAPTYPES_MESH_ASSOCIATION.html) of the last mesh association of the mesh path as `scomp` are assigned their type-dependent initial value. In terms of semantics, key v
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMESH_SET_ASSOCIATION.htm"
abapFile: "ABENMESH_SET_ASSOCIATION.html"
keywords: ["insert", "do", "if", "try", "data", "types", "field-symbol", "ABENMESH", "SET", "ASSOCIATION"]
---

``SET ASSOCIATION [`mesh_path`](ABENMESH_PATH.html)\ \{ = wa    \}\                          |\ \{ LIKE wa \}\                          |\ \{ INITIAL \}.``

[1. `... = wa`](#ABAP_ADDITION_1@3@)

[2. `... LIKE wa`](#ABAP_ADDITION_2@3@)

[3. `... INITIAL`](#ABAP_ADDITION_3@3@)

Sets mesh associations for a [`mesh_path`](ABENMESH_PATH.html). The statement takes columns in the second last path node of the mesh path that are specified as `scomp` in the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh association starting with this node and sets these columns to values that are determined by the additions on the right side. The content of the last path node is ignored.

The last mesh association of the mesh path is used only to determine the modifying components using their `ON` condition, therefore the last association cannot contain any [additional conditions](ABENMESH_PATH_ASSOC_COND.html).

Assigns columns of a work area `wa`. The work area `wa` must be a structure with the same line type as the last path node.

The content of the components of `wa` that are listed in the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) of the last mesh association of the mesh path as `tcomp` is assigned to the assigned components `scomp` of the structure `source` or to the assigned columns of the lines found in the second last path node.

In terms of semantics, key values in an instance of an entry node of a mesh association are set as they are in an instance of a follow-on node.

Assigns columns of a work area `wa`. The work area `wa` must be a structure with the same line type as the second last path node.

The content of the components of `wa` is specified in the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) of the last mesh association of the mesh path as `scomp`. This content is assigned to the identically named components in the structure `source` or to the identically named columns of the lines found in the second last path node.

In terms of semantics, key values in an instance of an entry node of a mesh association are set as they are in a different instance of the same node.

Assigns initial values

All components of `source` or all columns of the lines found in the second last path node that are specified in the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) of the last mesh association of the mesh path as `scomp` are assigned their type-dependent initial value.

In terms of semantics, key values in an instance of an entry node of a mesh association are initialized.

-   If the mesh path only contains one [initial mesh association](ABENMESH_PATH.html), the second last node is the root node of the path whose content is neither read nor changed. Instead, the columns of the structure specified by the `ON` condition are set. The structure is specified as the `source` in the square brackets of the mesh association. The square brackets must not contain any [additional conditions](ABENMESH_PATH_ASSOC_COND.html).
-   If the mesh path contains [path extensions](ABENMESH_PATH.html), it is evaluated down to the second last node. The columns specified using the `ON` condition are changed in the lines of the second last path node, which are described in the [result](ABENMESH_PATH_RESULT_CHAINING.html). All mesh associations but the last one of the mesh path can contain additional conditions, which can be specified using [`USING KEY`](ABENMESH_PATH_ASSOC_COND.html) and [`WHERE log_exp`](ABENMESH_PATH_ASSOC_COND.html). The square brackets `[ ]` for the mesh association of the last path extension must be empty.

-   Using the statement `SET ASSOCIATION`, mesh association-relevant components can be set in structures and mesh nodes, without needing to know the component names. These structures can be used, for example, to build mesh nodes.
-   Using the statement `SET ASSOCIATION`, change operations can be performed that provide additional options to those offered by the statements [`INSERT`](ABENMESH_INSERT.html) and [`MODIFY`](ABENMESH_INSERT.html).
-   A mesh path that only contains an initial mesh association can also be used to modify mesh nodes by using a field symbol or data reference in `source` to reference a line in a mesh node.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_meshes.html abenmesh\_path\_usage.html