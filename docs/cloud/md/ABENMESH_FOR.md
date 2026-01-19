---
title: "ABENMESH_FOR"
description: |
  ABENMESH_FOR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMESH_FOR.htm"
abapFile: "ABENMESH_FOR.html"
keywords: ["loop", "if", "data", "internal-table", "ABENMESH", "FOR"]
---

``... [`FOR wa|<fs> IN`](ABENFOR_IN_ITAB.html)\ [`mesh_path`](ABENMESH_PATH.html)\ [[`let_exp`](ABAPLET.html)] ...``

Evaluates all lines described by a [`mesh_path`](ABENMESH_PATH.html) using a `FOR` expression of a constructor expression. The syntax and meaning are the same as for [`FOR` expressions](ABENFOR_IN_ITAB.html) for lines of internal tables, however a mesh path is specified after `FOR ... IN`, instead of a directly specified internal table. Groupings and `FOR` expressions for groups, the addition `INDEX INTO`, and conditions outside of the mesh path cannot be specified here. A `FOR` expression with a mesh path can be used like a `FOR` expression with an internal table for [table comprehensions](ABENTABLE_COMPREHENSION_GLOSRY.html) and [table reductions](ABENTABLE_REDUCTION_GLOSRY.html).

When specifying the mesh paths, the same applies as to mesh paths in the statement [`LOOP AT`](ABENMESH_LOOP.html). The `FOR` expression works in the same way as the corresponding `LOOP` loop on the last path node of the mesh path. In particular, additional conditions can be specified in the square brackets [`[ ... ]`](ABENMESH_PATH_ASSOC.html) of a mesh association of the mesh path using the additions [`USING KEY`](ABENMESH_PATH_ASSOC_COND.html) and [`WHERE log_exp`](ABENMESH_PATH_ASSOC_COND.html).

In the constructor expression `NEW`, `VALUE`, or `REDUCE`, `FOR` expressions with mesh paths and `FOR` expressions with directly specified internal tables can occur together.

[`FOR` Expressions for Mesh Paths](ABENMESH_FOR_ABEXA.html)

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_meshes.html abenmesh\_path\_usage.html