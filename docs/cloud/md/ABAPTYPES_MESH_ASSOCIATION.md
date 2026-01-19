---
title: "ABAPTYPES_MESH_ASSOCIATION"
description: |
  ABAPTYPES_MESH_ASSOCIATION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPTYPES_MESH_ASSOCIATION.htm"
abapFile: "ABAPTYPES_MESH_ASSOCIATION.html"
keywords: ["do", "if", "case", "data", "types", "internal-table", "ABAPTYPES", "MESH", "ASSOCIATION"]
---

`... ASSOCIATION _assoc TO node ON tcomp1 = scomp1                               [AND tcomp2 = scomp2                               [AND ... ]]\                               [USING KEY key_name] ...`

[1. `... ON tcomp1 = scomp1 [AND tcomp2 = scomp2 [AND ... ]]`](#ABAP_ADDITION_1@3@)

[2. `... USING KEY key_name`](#ABAP_ADDITION_2@3@)

Definition of a mesh association named `_assoc` for a mesh node of a mesh type. The addition `ASSOCIATION` to `TYPES` can only be used in the definition of a node of a mesh type between [`TYPES BEGIN OF MESH`](ABAPTYPES_MESH.html) and [`TYPES END OF MESH`](ABAPTYPES_MESH.html). The mesh node for which a mesh association is defined is its start node and the mesh node `node` specified after `TO` is the target node. Any node in the current mesh can be specified as the target node `node`, including the start node itself. A mesh association with the same start and target node is a [self-association](ABENSELF_ASSOCIATION_GLOSRY.html) or reflexive association.

The name of a mesh association can be up to 30 characters long and can only consist of the letters A-Z, the digits 0-9, and the underscore *\_* character, and cannot start with a digit.

For each mesh association, a condition must be specified after `ON` that consists of at least one [comparison](ABENCOMPARISON_GLOSRY.html) for equality. Further comparisons for equality can be added using `AND`. The left operand `tcomp` of each comparison must be a directly specified column of the target node and the right operand `scomp` must be a directly specified column of the start node that must be compatible with the column of the target node.

A mesh association creates a relationship between the start node and target node where all the rows of the target node that meet the condition are assigned to a line of the start node.

The mesh associations are type-only properties and also affect the compatibility of mesh types. Mesh associations are evaluated in [mesh paths](ABENMESH_PATHES.html) in expressions and in statements for meshes.

The addition `USING KEY` can be used for the `ON` condition of a mesh association to specify a table key of the target node that is used in expressions and statements to evaluate [meshes](ABENABAP_MESHES.html) for accessing the mesh node:

The name of the table key must be specified directly, that is, it cannot be specified dynamically in a data object. If the table key is specified explicitly, the `ON` condition must be defined to allow optimal key access.

Without the addition `USING KEY`, the primary key is used to access the mesh node and that access is not always optimized.

The table key specified in the definition of the `ON` condition can be overridden when the mesh association is used in a [mesh path](ABENMESH_PATH.html) by specifying `USING KEY` in an [additional condition](ABENMESH_PATH_ASSOC_COND.html). In this case, the `ON` condition and the additional condition are combined into a condition that must meet the above prerequisites.

Declaration of a mesh type. Some of the keys of the internal tables used are secondary keys that are used with `USING` in the definitions of the mesh associations.

-   The mesh associations defined for a mesh node are evaluated in [expressions and statements](ABENMESH_PATH_USAGE.html) for [meshes](ABENABAP_MESHES.html) in [mesh paths](ABENMESH_PATHES.html).
-   A target node does not have to be defined before the start node to be visible to it. However, the Code Completion function of the editor only works properly if this is the case.
-   The prefix `_` is recommended as the naming convention for mesh associations. The name that follows this prefix should contain the target node name in non-reflexive mesh associations. This convention makes it easier to read the [mesh path](ABENMESH_PATH.html).

-   In the `ON` condition, the target node components are on the left and the start node components are on the right, like in other statements and expressions for internal tables, where the columns of the table to be searched are always listed on the left.
-   As a rule of thumb, the target node components that are listed on the left in an `ON` condition should be key fields of the table key used for the condition, in order to achieve the most efficient access.

-   A [secondary key](ABENSECONDARY_KEY_GLOSRY.html) using its name
-   The primary key using its predefined name `primary_key` or an alias. If the primary key is specified, the target node must be a sorted table or a hashed table.

-   If a sorted key or the primary key of a sorted table is specified, the conditions specified after `ON` must cover a left initial part of the key fields in the target table.
-   If a secondary hash key or a primary key of a hashed table is specified, the conditions specified after `ON` must cover all key fields in the target table.

TYPES: \\n t\_scarr TYPE HASHED TABLE OF scarr \\n WITH UNIQUE KEY carrid, \\n t\_spfli TYPE HASHED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid \\n WITH NON-UNIQUE SORTED KEY carrid \\n COMPONENTS carrid, \\n t\_sflight TYPE HASHED TABLE OF sflight \\n WITH UNIQUE KEY carrid connid fldate \\n WITH NON-UNIQUE SORTED KEY carrid\_connid \\n COMPONENTS carrid connid, \\n t\_sairport TYPE HASHED TABLE OF sairport \\n WITH UNIQUE KEY id, \\n BEGIN OF MESH t\_flights, \\n scarr TYPE t\_scarr \\n ASSOCIATION \_spfli TO spfli \\n ON carrid = carrid USING KEY carrid, \\n spfli TYPE t\_spfli \\n ASSOCIATION \_sflight TO sflight \\n ON carrid = carrid AND \\n connid = connid USING KEY carrid\_connid \\n ASSOCIATION \_sairport TO sairport \\n ON id = airpfrom, \\n sflight TYPE t\_sflight, \\n sairport TYPE t\_sairport, \\n END OF MESH t\_flights. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html abaptypes\_mesh.html