---
title: "ABENMESH_PATH_ASSOC"
description: |
  ABENMESH_PATH_ASSOC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMESH_PATH_ASSOC.htm"
abapFile: "ABENMESH_PATH_ASSOC.html"
keywords: ["delete", "loop", "do", "if", "try", "data", "types", "internal-table", "ABENMESH", "PATH", "ASSOC"]
---

`... \\_assoc[+|*][ ... ]    | \\_assoc~node[+|*][ ... ]    | \\^_assoc~node[+|*][ ... ] ...`

[1. `... \\_assoc`](#ABAP_VARIANT_1@1@)

[2. `... \\_assoc~node`](#ABAP_VARIANT_2@1@)

[3. `... \\^_assoc~node`](#ABAP_VARIANT_3@1@)

[1. `... [ ... ]`](#ABAP_ADDITION_1@3@)

[2. `... +|*`](#ABAP_ADDITION_2@3@)

Specifies a mesh association in a [mesh path](ABENMESH_PATH.html). A mesh association specification is introduced using a backslash character, `\\`, and is always located directly to the right of an entry node of the mesh path. A mesh association leads from its entry node to a follow-on node in the same mesh. A mesh association is either an initial mesh association [`\\_associ[ ... ]`](ABENMESH_PATH.html), for which the entry node of the [root node](ABENMESH_PATH.html) specified explicitly is at the start of a mesh path, or a path extension [`\\_assoc1[ ... ]`](ABENMESH_PATH.html), [`\\_assoc2[ ... ]`](ABENMESH_PATH.html), ..., for which the entry node is the follow-on node of a preceding mesh association.

The syntax variants define whether the association is a forward association or an inverse mesh association. The addition in square brackets `[ ]` determines the table line of the entry node from which the mesh association originates at runtime. The optional additions `+` or `*` can be used to make reflexive mesh associations ([self-associations](ABENSELF_ASSOCIATION_GLOSRY.html)) transitive.

In the [definition](ABAPTYPES_MESH_ASSOCIATION.html) of a mesh association, its nodes are known as start nodes and target nodes. In evaluations of mesh associations, however, they are known as entry nodes and follow-on nodes. In a forward association, the entry node is always a start node and the follow-on node is always a target node. In inverse mesh associations, the reverse applies.

Specifies a forward association. In a forward association, the entry node is a start node and the follow-on node is a target node of a mesh association [`_assoc`](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh. Both variants have the same semantics. `_assoc` is used to specify the name of a mesh association defined for the entry node in the [mesh type](ABAPTYPES_MESH.html). The follow-on node is the target node of this mesh association and can be specified as `node` after `~` in alternative 2.

The follow-on node `node` can be specified explicitly for logging purposes on the consumer side. If the recommended naming convention with the prefix `to_` in front of the name of the target node is used for [mesh associations](ABAPTYPES_MESH_ASSOCIATION.html), however, it is redundant.

Specifies an inverse mesh association. In an inverse mesh association, the entry node is a target node and the follow-on node is a start node of an association [`_assoc`](ABAPTYPES_MESH_ASSOCIATION.html) of the mesh. `_assoc` is used to specify the name of a mesh association that has the entry node as a target node in the [mesh type](ABAPTYPES_MESH.html). The start node of the required mesh association must be specified explicitly as the follow-on node using `node` after `~`.

Forward associations and an inverse mesh association as initial mesh associations of mesh paths.

The square brackets are part of the syntax. The square brackets define the table line of the entry node from which the mesh association originates at runtime. This specification in square brackets depends on whether the association is an initial mesh association or a path extension and where the mesh path is used:

Depending on where the association is used, further conditions [`cond`](ABENMESH_PATH_ASSOC_COND.html) can be specified. If no further conditions are specified, the square brackets of an initial mesh association contain only `source` and the square brackets of a path extension are empty.

[Mesh Path Expressions](ABENMESH_TABLE_EXPRESSIONS_ABEXA.html)

An optional `+` or `*` can be specified after the name of the mesh association to make it transitive. To be used transitively, the mesh association [`_assoc`](ABAPTYPES_MESH_ASSOCIATION.html) must be reflexive and have the same start node and target node ([self-association](ABENSELF_ASSOCIATION_GLOSRY.html)). If the last mesh association in the mesh path is used transitively, it can only be used for single lines with [`LOOP`](ABENMESH_LOOP.html) and [`FOR`](ABENMESH_LOOP.html) or [`DELETE`](ABENMESH_DELETE.html) and [`MODIFY`](ABENMESH_DELETE.html)

If an mesh association is used transitively, it is evaluated more than once when the mesh path is used. First, the regular [result](ABENMESH_PATH_RESULT.html) of the mesh association is determined. Starting with this result, the mesh association is evaluated recursively until no new lines are found in the follow-on node. Here, the result of each evaluation is the starting point of the next recursion. The result set of the transitive mesh association is the union set of the individual recursions

The variants `+` and `*` differ as follows:

Each line of the follow-on node occurs only once in the result set, even if it was found more than once when the mesh path was evaluated.

[Reflexive Mesh Associations in Mesh Paths](ABENMESH_FOR_REFLEX_SNGL_ABEXA.html)

-   The follow-on node `node` must be specified since the entry node can be the target node of different mesh associations of an identically named mesh type.
-   An inverse mesh association can also be specified for a reflexive mesh association ([self association](ABENSELF_ASSOCIATION_GLOSRY.html)) with the same start node and target node.

-   `[ source [[cond](ABENMESH_PATH_ASSOC_COND.html)] ]`
-   Specifies a structure `source` as a source in an initial mesh association [`\\_associ[ ... ]`](ABENMESH_PATH.html).
-   `[ [[cond](ABENMESH_PATH_ASSOC_COND.html)] ]`
-   Implicitly specifies the source in a path extension [`\\_assoc1[ ... ]`](ABENMESH_PATH.html), [`\\_assoc2[ ... ]`](ABENMESH_PATH.html). The source is the result of the preceding mesh association.

-   If `+` is specified, the result set is only determined by the [results](ABENMESH_PATH_RESULT.html) of the mesh associations.
-   If `*` is specified, the source of the mesh association is included in the result set. If the association is the initial mesh association, the line is determined from the specified source `source` using the primary table key and it cannot be empty. If no line is found, the result set is empty.

-   Transitive mesh associations are useful for evaluating hierarchical structures within a mesh node.
-   For a result set created with `+`, a line of an initial mesh association described using `source` does not need to exist in the internal table to ensure that this set is not empty. If `*` is used, however, this line must exist.

TYPES: \\n BEGIN OF MESH mesh, \\n node1 TYPE REF TO itab1 ASSOCIATION \_node2 TO node2 ON ... \\n node2 TYPE REF TO itab2, \\n END OF MESH mesh. \\n\\ \\nDATA(mesh) = VALUE mesh( ... ). \\n\\ \\n"Forward associations \\n... mesh-node1\\\\\_node2\[ ... \] ... \\n... mesh-node1\\\\\_node2~node2\[ ... \] ... \\n\\ \\n"Inverse association \\n... mesh-node2\\\\^\_node2~node1\[ ... \] ... abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_meshes.html abenmesh\_pathes.html abenmesh\_path.html