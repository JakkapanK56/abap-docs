---
title: "ABENMESH_PATH_EXPRESSION"
description: |
  ABENMESH_PATH_EXPRESSION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMESH_PATH_EXPRESSION.htm"
abapFile: "ABENMESH_PATH_EXPRESSION.html"
keywords: ["select", "do", "if", "data", "ABENMESH", "PATH", "EXPRESSION"]
---

``... [`mesh_path`](ABENMESH_PATH.html) ...``

Specifies a mesh path [`mesh_path`](ABENMESH_PATH.html) as a standalone mesh path expression at an operand position. The result of a mesh path expression is a line from the last path node of the mesh path described by the [result](ABENMESH_PATH_RESULT.html) of the mesh path and has the corresponding line type.

In the square brackets [`[ ... ]`](ABENMESH_PATH_ASSOC.html) of each mesh association, an additional condition can be specified using [`col1 = ... col2 = ...`](ABENMESH_PATH_ASSOC_COND.html). If a path node contains multiple lines that fit the description, the first line found is read.

A mesh path expression is a special type of [table expression](ABENTABLE_EXPRESSIONS.html) and can be used in the same way as a table expression:

If the follow-on node does not contain any lines that meet the condition in the square brackets [`[ ... ]`](ABENMESH_PATH_ASSOC.html), the response is the same as in regular table expressions. In other words, the exception `CX_SY_ITAB_LINE_NOT_FOUND` is raised, except when used in the statement [`ASSIGN`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html), in the predicate function [`line_exists`](ABENLINE_EXISTS_FUNCTION.html), or in the table function [`line_index`](ABENLINE_INDEX_FUNCTION.html).

Since the lines of a mesh node cannot have tabular components, a mesh path expression cannot have any [chainings](ABENTABLE_EXP_CHAINING.html) to other table expressions.

[Mesh Path Expressions](ABENMESH_TABLE_EXPRESSIONS_ABEXA.html)

-   Possible operand positions are all read and write positions listed for [table expressions](ABENTABLE_EXPRESSIONS.html). In a write position, key fields of primary or secondary table keys of the last path node must not be overwritten.
-   [`VALUE`](ABENTABLE_EXP_RESULT.html) and [`REF`](ABENTABLE_EXP_RESULT.html) can be used to control how the result is passed as in regular table expressions.
-   A [chaining](ABENTABLE_EXP_CHAINING.html) with the structure component selector (`-`) can be used to access a component of the read line.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_meshes.html abenmesh\_path\_usage.html