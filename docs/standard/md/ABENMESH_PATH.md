---
title: "ABENMESH_PATH"
description: |
  ABENMESH_PATH - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMESH_PATH.htm"
abapFile: "ABENMESH_PATH.html"
keywords: ["select", "do", "if", "try", "data", "types", "internal-table", "field-symbol", "ABENMESH", "PATH"]
---

``... \{mesh-|<mesh>-|mesh_ref->\}rnode[`\\_associ[ ...`](ABENMESH_PATH_ASSOC.html)[`]`](ABENMESH_PATH_ASSOC.html)[`\\_assoc1[ ... ]`](ABENMESH_PATH_ASSOC.html)[`\\_assoc2[ ... ]`](ABENMESH_PATH_ASSOC.html) ...``

[1. `... \{mesh-|<mesh>-|mesh_ref->\}rnode`](#ABAP_ADDITION_1@3@)

[2. `... \\_associ[ source [cond] ]`](#ABAP_ADDITION_2@3@)

[3. `... \\_assoc1[ [cond] ]\\_assoc2[ [cond] ] ...`](#ABAP_ADDITION_3@3@)

Specifies a mesh path in [statements and expressions](ABENMESH_PATH_USAGE.html) used to process meshes. A mesh path is always constructed as follows:

When specifying a mesh path, it is not significant whether the address nodes of the mesh are internal tables or references to internal tables. When a mesh path is evaluated, references to internal tables are dereferenced automatically. A mesh path describes a set of lines in its final path node as its [result](ABENMESH_PATH_RESULT.html).

A mesh path cannot exit a mesh. Each follow-on node is part of the same mesh as the root node. Meshes can, however, be nested by specified a [mesh path expression](ABENMESH_PATH_EXPRESSION.html) as the source of the initial mesh association.

Root node `rnode` of a mesh path. `rnode` is a node of a [mesh type](ABENMESH_TYPE_GLOSRY.html) that must be the start node or target node of a [mesh association](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh type. The same options are available when specifying the mesh as when addressing regular structure components:

Definition of a mesh type `mesh` with internal tables and a mesh type `refmesh` with references to internal tables as components. A data object `mesh` has the type `mesh` and a data object `meshref` points to a data object of type `refmesh`. The root node of the first mesh path is `mesh-node1`. The structure component selector is used here. The root node of the second mesh path is `node1` in the anonymous data object of type `refmesh`, for which the object component selector is used. The references within the mesh are dereferenced implicitly.

Initial mesh association of a mesh path. Each mesh path has an initial mesh association specified after its root node. For `\\_associ[ ... ]`, all mesh associations [`\\_assoc[ ... ]`](ABENMESH_PATH_ASSOC.html) suitable for the root node can be specified, namely:

The syntax used to specify the line of the entry node in the square brackets of the mesh association [`\\_assoc[ ... ]`](ABENMESH_PATH_ASSOC.html) is

`[ source [[cond](ABENMESH_PATH_ASSOC_COND.html)] ]`

A structure `source` of the line type of the root node must be specified as the source of the mesh association. This is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html). When the mesh path is evaluated, the content of `source` is used as the starting point of the mesh association. Here, the evaluation of the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh association used and any additional conditions [`cond`](ABENMESH_PATH_ASSOC_COND.html) produces a description of a set of lines of the follow-on node as a [result](ABENMESH_PATH_RESULT_INIT_ASSOC.html).

A structure specified as `source` does not need to occur as a line in the root node. It is a good idea to use a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html) that read a line from the root node. A [mesh path expression](ABENMESH_PATH_EXPRESSION.html) can, however, also be specified to nest meshes.

Forward associations and an inverse mesh association as initial mesh associations of mesh paths. Table expressions that read a line from the root node are used as sources of the mesh associations.

Path extension of a mesh path. Any number of further mesh associations can be chained after the initial mesh association. All mesh associations [`\\_assoc`](ABENMESH_PATH_ASSOC.html) can be specified for `\\_assoc1`, `\\_assoc2`, ... that match the entry node in question, namely:

The syntax used to specify the line of the start node in the square brackets of the mesh association [`\\_assoc[ ... ]`](ABENMESH_PATH_ASSOC.html) is

`[ [[cond](ABENMESH_PATH_ASSOC_COND.html)] ]`

When the mesh path is evaluated, the result of the preceding mesh association, that is, the description of a set of lines in the entry node, is used as the starting point of the mesh association. Here, the evaluation of the [`ON` condition](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh association used and any additional conditions [`cond`](ABENMESH_PATH_ASSOC_COND.html) produces a description of a set of lines of the follow-on node as a [result](ABENMESH_PATH_RESULT_CHAINING.html). If no further conditions are specified, the square brackets are empty.

Path extension of the initial mesh association. The follow-on node of the initial mesh association is `node2` and this node is the entry node of the path extension. The result of the entire mesh path is a description of lines in `node3`. The result of the initial mesh association, whose starting point is defined by a table expression, is the implicit source of the path extension.

-   A root node `rnode` specification
-   An initial mesh association `\\_associ` specification between a root node and a follow-on node
-   Optional further mesh associations `\\_assoc1`, `\\_assoc2`, ... specifications whose start nodes can be the follow-on nodes of preceding mesh associations.

-   `mesh-rnode`
-   `mesh` is a mesh, that is, a data object of the respective [mesh type](ABENMESH_TYPE_GLOSRY.html). The root node is addressed using the structure component selector (`-`).
-   `<mesh>-rnode`
-   `<mesh>` is a field symbol typed with the mesh type and to which a mesh is assigned. The root node is addressed using the structure component selector (`-`).
-   `mesh_ref->rnode`
-   `mesh_ref` is a reference variable whose static type is the mesh type and that points to a mesh. The root node is addressed using the object component selector (`->`).

-   [Forward associations](ABENMESH_PATH_ASSOC.html) with a [mesh association](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh type that has the root node as the start node.
-   [Inverse mesh associations](ABENMESH_PATH_ASSOC.html) with a [mesh association](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh type that has the root node as the target node.

-   [Forward associations](ABENMESH_PATH_ASSOC.html) with a [mesh association](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh type that has the entry node as the start node.
-   [Inverse mesh associations](ABENMESH_PATH_ASSOC.html) with a [mesh association](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh type that has the entry node as the target node.

TYPES: \\n BEGIN OF MESH mesh, \\n node1 TYPE itab1 ASSOCIATION \_assoc2 TO node2 ON ... \\n node2 TYPE itab2, \\n END OF MESH mesh, \\n BEGIN OF MESH refmesh, \\n node1 TYPE REF TO itab1 ASSOCIATION \_assoc2 TO node2 ON ... \\n node2 TYPE REF TO itab2, \\n END OF MESH refmesh. \\n\\ \\nDATA(mesh) = VALUE mesh( ). \\nDATA(meshref) = NEW refmesh( VALUE refmesh( ) ). \\n\\ \\n... mesh-node1\\\\\_assoc2\[ ... \] ... \\n... meshref->node1\\\\\_assoc2\[ ... \] ... TYPES: \\n BEGIN OF MESH mesh, \\n node1 TYPE itab1 ASSOCIATION \_assoc2 TO node2 ON ... \\n node2 TYPE itab2, \\n END OF MESH mesh. \\n\\ \\nDATA(mesh) = VALUE mesh( ... ). \\n\\ \\n... mesh-node1\\\\\_assoc2\[ mesh-node1\[ ... \] \]. \\n... mesh-node1\\\\\_assoc2~node2\[ mesh-node1\[ ... \] \]. \\n... mesh-node2\\\\^\_assoc2~node1\[ mesh-node2\[ ... \] \]. TYPES: \\n BEGIN OF MESH mesh, \\n node1 TYPE itab1 ASSOCIATION \_assoc2 TO node2 ON ... \\n node2 TYPE itab2 ASSOCIATION \_assoc3 TO node3 ON ... \\n node3 TYPE itab3, \\n END OF MESH mesh. \\n\\ \\nDATA(mesh) = VALUE mesh( ). \\n\\ \\n... mesh-node1\\\\\_assoc2\[ mesh-node1\[ ... \] \]\\\\\_assoc3\[ \] ... abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_meshes.html abenmesh\_pathes.html