---
title: "ABENCDS_CONDITIONAL_EXPRESSION_V2"
description: |
  ABENCDS_CONDITIONAL_EXPRESSION_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_CONDITIONAL_EXPRESSION_V2.htm"
abapFile: "ABENCDS_CONDITIONAL_EXPRESSION_V2.html"
keywords: ["select", "if", "case", "data", "ABENCDS", "CONDITIONAL", "EXPRESSION"]
---

`... rel_expr    | [NOT] cds_cond [AND|OR cds_cond] ...`

Logical expression `cds_cond` for formulating a [condition](ABENCDS_COND_GLOSRY.html) in a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). A logical expression is either a single relational expression `rel_exp`, or an expression composed of the Boolean operators `NOT`, `AND`, `OR` and one or more logical expressions, in which parentheses are possible. An atomic component of a compound logical expression is always one relational expression.

Possible relational expressions `rel_expr` from which a condition `cds_cond` can be constructed:

The Boolean operators work as follows:

The operator `NOT` is a stronger binding than `AND`, which itself is a stronger binding than `OR`. This produces implicit parentheses, which can be overridden by explicit parentheses.

In SQL, the order in which two expressions are evaluated that are combined by `AND` is not defined. Results can be different on different database platforms.

If multiple expressions are combined by `AND`, rules such as the following are not reliable: If one expression is false, then the following expressions are no longer evaluated. For example a condition `col1 <> 0 AND col2 / col1 > 1` can raise an exception. To avoid such exceptions, `CASE` expressions can be used.

-   Comparisons with [comparison operators](ABENCDS_COND_EXPR_COMP_V2.html)
-   Interval comparisons using [`BETWEEN`](ABENCDS_COND_EXPR_BETW_V2.html)
-   Pattern comparisons using [`LIKE`](ABENCDS_COND_EXPR_LIKE_V2.html)
-   Checks on the [null value](ABENNULL_VALUE_GLOSRY.html) using [`IS NULL`](ABENCDS_COND_EXPR_NULL_V2.html)
-   Checks on the [initial value](ABENINITIAL_VALUE_GLOSRY.html) using [`IS INITIAL`](ABENCDS_COND_EXPR_INITIAL_V2.html)

-   `NOT` negates the result of the following condition.
-   An `AND` combination is true if both combined conditions are true.
-   An `OR` combination is true if at least one of the combined conditions is true.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html