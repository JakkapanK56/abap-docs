---
title: "ABAPSQL_EXPR"
description: |
  ABAPSQL_EXPR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSQL_EXPR.htm"
abapFile: "ABAPSQL_EXPR.html"
keywords: ["select", "do", "if", "case", "data", "internal-table", "ABAPSQL", "EXPR"]
---

``... [`sql_elem`](ABENSQL_ELEM.html)\    |\ [`sql_func`](ABENSQL_BUILTIN_FUNC.html)\    |\ [`cds_scalar_func`](ABENSQL_CDS_SCALAR_FUNC.html)\    |\ [`sql_arith`](ABENSQL_ARITH.html)\    |\ [`sql_cast`](ABENSQL_CAST.html)\    |\ [`sql_string`](ABENSQL_STRING.html)\    |\ [`sql_case`](ABENSQL_CASE.html)\    |\ [`sql_agg`](ABAPSELECT_AGGREGATE.html)\    |\ [`sql_win`](ABAPSELECT_OVER.html)\    |\ [`sql_null`](ABENSQL_NULL.html) ...``

SQL expressions are expressions that generally can be specified in the following positions of ABAP SQL statements:

Some expressions, such as `CAST` expressions, can also be specified at other positions and built-in functions can be specified on the right side of SQL conditions for statements. This is documented for the respective positions.

SQL expressions are passed to the database system, executed there, and the result is passed to the AS ABAP if requested.

In general, the operands of SQL expressions can also be SQL expressions whose result must have a suitable data type. There are restrictions to individual operand positions, which are described for these.

The following SQL expressions exist:

Every expression can be enclosed in [parentheses](ABENSQL_EXP_PARENTHESES.html). The result of an expression is used in the ABAP SQL statement in accordance with the operand position, with the data type in nested expressions based on the outermost expression.

Syntax example for specifying SQL expressions in different operand positions in a [`SELECT`](ABAPSELECT.html) statement.

-   As [columns specified](ABAPSELECT_CLAUSE_COL_SPEC.html) in the [`SELECT` list](ABAPSELECT_LIST.html)
-   As arguments of certain [aggregate functions](ABAPSELECT_AGGREGATE.html) in the [`SELECT` list](ABAPSELECT_LIST.html) and in the [`HAVING` clause](ABAPHAVING_CLAUSE.html)
-   As operands of [SQL conditions](ABENASQL_COND.html):

-   On the left side of an [SQL condition for statements](ABENABAP_SQL_STMT_LOGEXP.html)
-   On the left and right side of an [SQL condition for expressions](ABENABAP_SQL_EXPR_LOGEXP.html)

-   As a grouping criterion after [`GROUP BY`](ABAPGROUPBY_CLAUSE.html)
-   As a sort criterion after [`ORDER BY`](ABAPORDERBY_CLAUSE.html)
-   As a window criterion after [`PARTITION BY`](ABAPSELECT_OVER.html)

-   [Elementary SQL expressions](ABENSQL_ELEM.html)
-   [Calls of built-in SQL functions](ABENABAP_SQL_FUNCTIONS.html)
-   [Arithmetic expressions](ABENSQL_ARITH.html)
-   [Cast expressions](ABENSQL_CAST.html)
-   [String expressions](ABENSQL_STRING.html)
-   [Case distinctions](ABENSQL_CASE.html)
-   [Aggregate expressions](ABAPSELECT_AGGREGATE.html)
-   [Window expressions](ABAPSELECT_OVER.html)
-   [Null expressions](ABENSQL_NULL.html)

-   No alias names defined using [`AS`](ABAPSELECT_LIST.html) can be used as operands of SQL expressions. This also means that none of the expressions used in a `SELECT` list can be specified as operands using their alias names.
-   SQL expressions cannot currently be used together with the addition [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html). An exception to this rule are individual columns and an individually specified aggregate expression `COUNT( * )`.
-   [Certain SQL expressions](ABENSQL_ENGINE_EXPR.html) can be calculated by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). If any other SQL expressions are used, [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) is bypassed and internal tables accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

SELECT FROM sflight \\n FIELDS CONCAT( carrid, connid ) AS key, \\n MAX( seatsmax - seatsocc ) AS max\_free, \\n MIN( seatsmax - seatsocc ) AS min\_free \\n GROUP BY carrid, connid \\n HAVING SUM( seatsmax - seatsocc ) > 100 \\n ORDER BY key \\n INTO TABLE @FINAL(itab). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html