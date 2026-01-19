---
title: "ABENCDS_INTERFACE_COND_EXPR"
description: |
  ABENCDS_INTERFACE_COND_EXPR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_INTERFACE_COND_EXPR.htm"
abapFile: "ABENCDS_INTERFACE_COND_EXPR.html"
keywords: ["do", "if", "data", "ABENCDS", "INTERFACE", "COND", "EXPR"]
---

`... WHERE cds_cond ...`

Defines a `WHERE` condition for the result set of a [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html). When the transactional interface is accessed, the result set contains only the data from the projected entity [`cds_entity`](ABENCDS_DEFINE_VIEW_AS_INTERFACE.html) that meets the condition `cds_cond` specified after `WHERE`.

The condition is either a single relational expression `rel_expr` or an expression constructed from the Boolean operators `NOT`, `AND`, and `OR`.

In transactional interfaces, the following rules apply to the operands and syntax of the `WHERE` condition:

-   Comparison operators, `BETWEEN`, `LIKE`, and `IS [NOT] INITIAL` are allowed as operators.
-   The Boolean operators `NOT`, `AND`, and `OR` are supported.
-   `lhs` expects a field of the projected entity. The field does not necessarily have to be included in the projection list.
-   `rhs` can be a field of the projected entity, a [CDS literal](ABENCDS_LITERAL_GLOSRY.html), or a [session variable](ABENCDS_SESSION_VARIABLE_V2.html). When using the operator `LIKE`, `rhs` must be a character literal.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_pv\_transactional\_interface.html abencds\_define\_view\_as\_interface.html