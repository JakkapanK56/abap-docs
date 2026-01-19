---
title: "ABENWHERE_LOGEXP_ANDORNOT"
description: |
  ABENWHERE_LOGEXP_ANDORNOT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENWHERE_LOGEXP_ANDORNOT.htm"
abapFile: "ABENWHERE_LOGEXP_ANDORNOT.html"
keywords: ["select", "do", "while", "if", "case", "data", "ABENWHERE", "LOGEXP", "ANDORNOT"]
---

[Short Reference](ABENSQL_COND_SHORTREF.html)

`... sql_cond1 AND sql_cond2 AND sql_cond3 ...`

`... sql_cond1 OR sql_cond2 OR sql_cond3 ...`

`... NOT sql_cond ...`

`... ( sql_cond ) ...`

Any number of logical [`sql_cond`](ABENABAP_SQL_STMT_LOGEXP.html) expressions can be combined into one logical expression using `AND` or `OR` and the result of a logical expression can be negated using `NOT`. The same [rules](ABENLOGEXP_BOOLE.html) apply as to general logical expressions, with the difference that the operator `NOT` cannot be specified more than once in direct succession. In particular, the explicit use of `( )` parentheses is also possible.

In SQL, the order in which two expressions are evaluated that are combined by `AND` is not defined. Results can be different on different database platforms.

The following additional rules apply to logical expressions whose result is unknown because an operand has the [null value](ABENNULL_VALUE_GLOSRY.html):

Reads flights from Frankfurt to Los Angeles or San Francisco.

-   An `AND` combination of two unknown expressions or a true expression with an unknown expression produces an unknown expression. An `AND` combination of a false expression with an unknown expression produces a false expression.
-   An `OR` combination of two unknown expressions or one false expression with an unknown expression produces an unknown expression. An `OR` combination of one true and one unknown expression produces a true expression.
-   The negation of an unknown expression with `NOT` produces an unknown expression.

-   In particular, the expressions specified [dynamically](ABENWHERE_LOGEXP_DYNAMIC.html) as `(cond_syntax)` are also possible as logical expressions within a combination or negation.
-   The operator `NOT` in a `WHERE` clause cannot be supported by an [index](ABENDDIC_DATABASE_TABLES_INDEX.html). For this reason, it is best to use the reverse comparison operator instead of `NOT`, for example `col <= dobj` instead of `NOT col > dobj`.
-   Two `NOT` operators can only be specified consecutively if they are separated by an opening parenthesis. If not, an even number of consecutive `NOT` operators has the same meaning as none, and an odd number of consecutive `NOT` operators has the same meaning as a single `NOT` and should be used accordingly.
-   If multiple expressions are combined using `AND`, rules such as the following cannot be relied on: If one expression is false, then the following expressions are not evaluated any more. For example, a condition `col1 <> 0 AND col2 / col1 > 1` can lead to an exception. To avoid such exceptions, `CASE` expressions can be used.
-   The rules for unknown expressions establish an important difference to the rules for a false expression. While a single unknown expression behaves mostly the same as a false expression in the sense that both are not true, the results of applying the operators can be unexpected. Especially an unknown expression cannot be made true by applying `NOT`.

SELECT \* \\n FROM spfli \\n WHERE cityfrom = 'FRANKFURT' AND \\n ( cityto = 'LOS ANGELES' OR \\n cityto = 'SAN FRANCISCO' ) \\n INTO TABLE @FINAL(spfli\_tab). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenasql\_cond.html