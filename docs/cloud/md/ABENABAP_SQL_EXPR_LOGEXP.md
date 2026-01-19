---
title: "ABENABAP_SQL_EXPR_LOGEXP"
description: |
  ABENABAP_SQL_EXPR_LOGEXP - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SQL_EXPR_LOGEXP.htm"
abapFile: "ABENABAP_SQL_EXPR_LOGEXP.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "ABENABAP", "SQL", "EXPR", "LOGEXP"]
---

\\ `... \{\ \{operand1 \{=|EQ|<>|NE|>|GT|<|LT|>=|GE|<=|LE\} operand2\}\      |\ \{operand  [NOT] BETWEEN operand1 AND operand2\}\      |\ \{operand1 [NOT] LIKE operand2 [ESCAPE esc]\}\      |\ \{operand  IS [NOT] NULL\}\      |\ \{operand  IS [NOT] INITIAL\}\ \} ...`

Relational expression in a condition of an expression in an ABAP SQL statement. From the relational expressions shown here, logical expressions `sql_cond` can be formed for the following conditions:

The relational expressions that can be used in expressions are a subset of the [relational expressions for statements](ABENABAP_SQL_STMT_LOGEXP.html), but also allow [SQL expressions](ABAPSQL_EXPR.html) as operands on the right side. SQL expressions on the right side must be enclosed in parentheses with a blank after the opening parenthesis and in front of the closing parenthesis.

The operands on the left side can be any SQL expressions except for [aggregate expressions](ABAPSELECT_AGGREGATE.html) and [window expressions](ABAPSELECT_OVER.html). All columns and expressions, except for `LIKE`, can have any dictionary type except for `ACCP`, `LCHR`, `LRAW`, `PREC`, `RAWSTRING`, `STRING`, and `GEOM_EWKB`. Individually specified literals, host variables, and host expressions are handled as [elementary SQL expressions](ABENSQL_ELEM.html) and can be of any ABAP type.

It must be possible to [compare](ABENWHERE_LOGEXP_COMPARE_TYPES.html) the data types of the operands of a relational expression. If this is not the case, a statically specified type raises a syntax error and a dynamically specified type raises an exception of the class `CX_SY_DYNAMIC_OSQL_SEMANTICS`. Unlike in [conditions for statements](ABENABAP_SQL_STMT_LOGEXP.html), operands of the types `DATS` and `TIMS` are handled like regular flat character-like operands.

If an expression is used for a selection, the [client column](ABENCLIENT_COLUMN_GLOSRY.html) of a client-dependent data source of a query or the target of a write statement in an SQL condition of this expression cannot be used as an operand due to [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html).

-   [`ON` condition](ABAPWITH_ASSOCIATIONS_DEFINING.html) in the definition of a [CTE association](ABENCTE_ASSOCIATION_GLOSRY.html).
-   [Filter condition](ABENABAP_SQL_PATH_FILTER.html) of a [path expression](ABENABAP_SQL_PATH.html).
-   [`WHEN` condition](ABENSQL_SEARCHED_CASE.html) of a complex [case distinction](ABENSQL_CASE.html).
-   Start condition of the table function [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html).
-   [`WHERE`](ABENSELECT_HIERARCHY_AGG_NAVIS.html), [`ON`](ABENSELECT_HIERARCHY_DESC_AGG.html), and [`START WHERE`](ABENSELECT_HIERARCHY_ANCS_AGG.html) condition in a [hierarchy aggregate navigator](ABENHIERARCHY_AGG_NAVI_GLOSRY.html).

-   `operand1 =|<>|>|<|>=|<= operand2`
-   Comparison of the operand `operand1` on the left side with the operand `operand2` on the right side. The same applies to comparison operators as in a [condition for statements](ABENWHERE_LOGEXP_COMPARE.html). Here, the operands of size comparisons can have the following data types:

-   Numeric data types: All except for the [replacement types for decimal floating point numbers](ABENDDIC_DECIMAL_FLOATING_POINT.html).
-   Character-like data types: `CHAR`, `CLNT`, `LANG`, `CUKY`, `UNIT`, and `NUMC`.
-   Date types, time types, and time stamp types: `DATN`, `DATS`, `TIMN`, `TIMS`, and `UTCLONG`.

-   The operand `operand2` on the right-hand side can be any [SQL expression](ABAPSQL_EXPR.html) except for [aggregate expressions](ABAPSELECT_AGGREGATE.html) and [window expressions](ABAPSELECT_OVER.html). If an operand of the comparison has the [null value](ABENNULL_VALUE_GLOSRY.html), the result of this comparison is unknown.
-   `operand [NOT] BETWEEN operand1 AND operand2`
-   Checks the assignment to an interval. The relational expression has the same effect as the corresponding [condition for statements](ABENWHERE_LOGEXP_INTERVAL.html). The operands can have the same data types as for size comparisons. For `operand1` and `operand2`, any [SQL expressions](ABAPSQL_EXPR.html) except [aggregate expressions](ABAPSELECT_AGGREGATE.html) and [window expressions](ABAPSELECT_OVER.html) can be specified. If one of the operands has the [null value](ABENNULL_VALUE_GLOSRY.html), the result of the check is unknown.
-   `operand1 [NOT] LIKE operand2 [ESCAPE esc]`
-   Pattern comparison. The relational expression has the same effect as the corresponding [condition for statements](ABENWHERE_LOGEXP_LIKE.html). The same applies to the operands as in the [condition for statements](ABENWHERE_LOGEXP_LIKE.html). The operands must be character-like and only [literals](ABENABAP_SQL_LITERALS.html) and [host variables](ABENABAP_SQL_HOST_VARIABLES.html) can be specified on the right-hand side.
-   `operand IS [NOT] NULL`
-   Checks for the [null value](ABENNULL_VALUE_GLOSRY.html). The relational expression has the same effect as the corresponding [condition for statements](ABENWHERE_LOGEXP_NULL.html).
-   `operand IS [NOT] INITIAL`
-   Checks for the initial value of the assigned elementary ABAP type. The relational expression has the same effect as the corresponding [condition for statements](ABENWHERE_LOGEXP_INITIAL.html).

-   Because an expression is passed to the database essentially unchanged, the possible relational expressions and their operands represent only a subset of the [relational expressions for statements](ABENABAP_SQL_STMT_LOGEXP.html). In some constructs, however, a `WHERE`, `HAVING`, or `ON` condition of a statement is processed by the ABAP runtime framework before the pass, to achieve platform-independent behavior.
-   When specifying [literals](ABENABAP_SQL_LITERALS.html), [host variables](ABENABAP_SQL_HOST_VARIABLES.html), and [host expressions](ABENABAP_SQL_HOST_EXPRESSIONS.html), it should be noted that these are used as elementary SQL expressions in expressions and that their ABAP type is mapped to a dictionary type according to the corresponding [tables](ABENSQL_ELEM.html). This type must fulfill the [comparability](ABENWHERE_LOGEXP_COMPARE_TYPES.html) rules. This differs from [relational expressions for statements](ABENABAP_SQL_STMT_LOGEXP.html), for which the ABAP type is generally converted to the appropriate dictionary type.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenasql\_cond.html