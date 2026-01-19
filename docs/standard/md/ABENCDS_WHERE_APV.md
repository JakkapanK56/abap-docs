---
title: "ABENCDS_WHERE_APV"
description: |
  ABENCDS_WHERE_APV - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_WHERE_APV.htm"
abapFile: "ABENCDS_WHERE_APV.html"
keywords: ["do", "if", "data", "ABENCDS", "WHERE", "APV"]
---

``... WHERE [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) ...``

Defines a `WHERE` condition for the result set of a [CDS analytical projection view](ABENCDS_ANALYTICAL_PV_GLOSRY.html). When the CDS projection view is accessed, the result set contains only the data from the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html)\\ `cds_entity` that meets the condition [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) specified after `WHERE`.

The condition is either a single [relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html)\\ `rel_expr` or an expression constructed from the [Boolean operators](ABENBOOLEAN_OPERATOR_GLOSRY.html)\\ `AND`, `OR`, and `NOT`.

In CDS analytical projection views, the following rules apply to the operands and syntax of the `WHERE` condition:

-   [Comparison operators](ABENCDS_COND_EXPR_COMP_V2.html) are allowed.
-   [`BETWEEN`](ABENCDS_COND_EXPR_BETW_V2.html), [`LIKE`](ABENCDS_COND_EXPR_LIKE_V2.html), and [`INITIAL`](ABENCDS_COND_EXPR_INITIAL_V2.html) are allowed as relational operators.
-   The Boolean operators `AND`, `OR`, and `NOT` are supported. Identical fields must be combined with `OR` and different fields must be combined with `AND`.
-   **Note** A filter condition does not support nested negations. The following is not supported: `AND NOT field_a <> 'B`. The reason is that `NOT` and <> are both negations.
-   `lhs` must be a field of the projected entity specified as [analytical dimension field](ABENCDS_DIMENSION_GLOSRY.html).
-   `rhs` can be a [CDS literal](ABENCDS_LITERAL_GLOSRY.html), a session variable (currently, only `$session.system_date` and `$session.user_date` are supported), or a parameter. When using the operator `LIKE`, `rhs` must be a character literal.
-   [Path expressions](ABENCDS_PATH_EXPR_APV.html)\\ `path_expr` are not allowed as operands in a `WHERE` condition.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_analytical\_query\_apv.html