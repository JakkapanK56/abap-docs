---
title: "ABAPSELECT_AGGREGATE"
description: |
  ABAPSELECT_AGGREGATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT_AGGREGATE.htm"
abapFile: "ABAPSELECT_AGGREGATE.html"
keywords: ["select", "do", "if", "data", "internal-table", "ABAPSELECT", "AGGREGATE"]
---

[Short Reference](ABENAGGREGATE_SHORTREF.html)

``... [`agg_func`](ABENSQL_AGG_FUNC.html) ...``

[Aggregate expression](ABENAGGREGATE_EXPRESSION_GLOSRY.html) in ABAP SQL. An aggregate expression consists of an [aggregate function](ABENAGGREGATE_FUNCTION_GLOSRY.html)\\ [`agg_func`](ABENSQL_AGG_FUNC.html) that aggregates the values of multiple rows of the result set of a [query](ABENASQL_QUERY_GLOSRY.html) into a single value. It can be used in the following operand positions:

All [aggregate functions](ABENSQL_AGG_FUNC.html) can be used as an aggregate expression except for `PRODUCT`. An aggregate function used as an aggregate expression can have one of the following arguments:

The aggregate functions take the values of the column or the results of the SQL expression of multiple rows of the query result set and determine a single value. Either all rows of the result set or the rows of the current group created using [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) are evaluated. If the value of an aggregate expression is too large for the [target area](ABAPINTO_CLAUSE.html), an exception is raised.

Returns the flight date, the number of passengers, and the average and maximum luggage weight of all Lufthansa flights with the flight number 0400.

-   As an [SQL expression](ABAPSQL_EXPR.html) for

-   a column [`col_spec`](ABAPSELECT_CLAUSE_COL_SPEC.html) of the result set in the [`SELECT` list](ABAPSELECT_LIST.html) of a [query](ABENASQL_QUERY_GLOSRY.html),
-   an operand on the left side of [relational expressions](ABENABAP_SQL_STMT_LOGEXP.html) of the condition [`sql_cond`](ABENASQL_COND.html) of the [`HAVING`](ABAPHAVING_CLAUSE.html) clause of a [query](ABENASQL_QUERY_GLOSRY.html).

-   Here, an aggregate expression can be specified directly or as an operand of an [SQL expression](ABAPSQL_EXPR.html) except for another aggregate expression.
-   As an operand on the right side of [relational expressions](ABENABAP_SQL_STMT_LOGEXP.html) of the condition [`sql_cond`](ABENASQL_COND.html) of the [`HAVING`](ABAPHAVING_CLAUSE.html) clause of a [query](ABENASQL_QUERY_GLOSRY.html). Here, no SQL expressions can be used except for directly specified aggregate expressions.

-   An SQL expression [`sql_exp`](ABAPSQL_EXPR.html) except aggregate expressions and window expressions for the aggregate functions `MAX`, `MIN`, `SUM`, `STRING_AGG`, and `COUNT`.
-   A column [`col`](ABENABAP_SQL_COLUMNS.html) of a [data source](ABAPSELECT_DATA_SOURCE.html) of a [query](ABENASQL_QUERY_GLOSRY.html) for the aggregate functions `AVG` and `GROUPING`.

-   The [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) cannot process all aggregate expressions except a standalone `COUNT( * )`, `MAX`, `MIN`, and `SUM` in the `SELECT` list. The ABAP SQL statement bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html), and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   If SQL expressions other than directly specified columns are specified as arguments of aggregate expressions, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP08.html), which handles the statement more strictly than the regular syntax check.

-   [SQL Expressions, Use in Aggregate Expressions](ABENSQL_EXPR_IN_AGGREGATES_ABEXA.html)
-   [SQL Expressions, Aggregate Expressions in SQL Expressions](ABENSQL_EXPR_AGGR_IN_EXPR_ABEXA.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT FROM sbook \\n FIELDS fldate, \\n COUNT( \* ) AS count, \\n AVG( luggweight AS DEC( 16,4 ) ) AS avg, \\n MAX( luggweight ) AS max \\n WHERE carrid = 'LH' AND \\n connid = '0400' \\n GROUP BY fldate \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html