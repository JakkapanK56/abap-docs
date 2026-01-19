---
title: "ABAPTYPES_MESH"
description: |
  ABAPTYPES_MESH - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTYPES_MESH.htm"
abapFile: "ABAPTYPES_MESH.html"
keywords: ["select", "if", "data", "types", "internal-table", "field-symbol", "ABAPTYPES", "MESH"]
---

[Short Reference](ABAPTYPES_BEGIN_OF_MESH_SHORTREF.html)

`TYPES BEGIN OF MESH mesh_type.`\\ 
  `...`\\ 
  ``TYPES node \{ TYPE \{[REF TO] table_type\}|ref_type \}\             |\ \{ LIKE \{[REF TO] itab      \}|dref     \}\                  [[`association1`](ABAPTYPES_MESH_ASSOCIATION.html)],                  [[`association2`](ABAPTYPES_MESH_ASSOCIATION.html)],                  ...``\\ 
  `...`\\ 
`TYPES END OF MESH mesh_type.`

Definition of a [mesh type](ABENMESH_TYPE_GLOSRY.html) for a [mesh](ABENABAP_MESHES.html). A mesh type is a special structure type. The components of the structure type are referred to as mesh nodes and are subject to the following restrictions:

A regular structure type can be enhanced by defining one or more [mesh associations](ABENMESH_ASSOCIATION_GLOSRY.html)\\ [`association`](ABAPTYPES_MESH_ASSOCIATION.html) for each mesh node. Each association connects two mesh nodes using a condition. The relationships between the tabular nodes of a mesh type defined using mesh associations are evaluated in the special [expressions and statements](ABENMESH_PATH_USAGE.html) used to process [meshes](ABENABAP_MESHES.html) in [mesh paths](ABENMESH_PATHES.html).

Declaration of a mesh type with internal tables for the flight data model.

-   The type of a mesh node must be a non-generic [table type](ABENTABLE_TYPE_GLOSRY.html) or a [reference type](ABENREFERENCE_TYPE_GLOSRY.html) with the static type of a non-generic internal table. The node type can be defined as follows:

-   Using the addition `TYPE`, specifying a table type [`table_type`](ABAPTYPES_ITAB.html) with or without `REF TO`, or by specifying such a reference type [`ref_type`](ABAPTYPES_REFERENCES.html) directly.
-   Using the addition `LIKE`, specifying an internal table [`itab`](ABAPDATA_ITAB.html) with or without `REF TO`, or by specifying such a reference variable [`dref`](ABAPDATA_REFERENCES.html) directly.

-   The [line type](ABENROW_TYPE_GLOSRY.html) of a mesh node must be structured and cannot contain internal tables or reference variables as components. Elementary data types and [substructures](ABENSUBSTRUCTURE_GLOSRY.html) are allowed as components. Substructures must meet the same prerequisite.

-   Meshes must be fully [compatible](ABENCOMPATIBILITY.html) for assignments, comparisons, and parameter passing. Meshes are compatible if their structures are compatible, the node names match, and the mesh associations match in names, `ON` conditions, and the table key used.
-   Using the structure component selector (`-`), mesh nodes can be addressed and used as the components of the corresponding structure. If field symbols or reference variables point to mesh nodes, they are also handled like regular structure components. In particular, the statement [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html) can also be used between incompatible meshes and between meshes and structures.
-   A mesh type is always fully defined. Generic mesh types are not possible.
-   Reference types as components can be particularly useful when meshes are injected into existing programs in which suitable internal tables already exist.
-   The statements for defining a mesh type are usually summarized in a [chained statement](ABENCHAINED_STATEMENT_GLOSRY.html).

TYPES: \\n t\_scarr TYPE HASHED TABLE OF scarr \\n WITH UNIQUE KEY carrid, \\n t\_spfli TYPE HASHED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid, \\n t\_sflight TYPE HASHED TABLE OF sflight \\n WITH UNIQUE KEY carrid connid fldate, \\n t\_sairport TYPE HASHED TABLE OF sairport \\n WITH UNIQUE KEY id, \\n BEGIN OF MESH t\_flights, \\n scarr TYPE t\_scarr \\n ASSOCIATION \_spfli TO spfli \\n ON carrid = carrid, \\n spfli TYPE t\_spfli \\n ASSOCIATION \_sflight TO sflight \\n ON carrid = carrid AND \\n connid = connid \\n ASSOCIATION \_sairport TO sairport \\n ON id = airpfrom, \\n sflight TYPE t\_sflight, \\n sairport TYPE t\_sairport, \\n END OF MESH t\_flights. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html