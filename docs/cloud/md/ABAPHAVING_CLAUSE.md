---
title: "ABAPHAVING_CLAUSE"
description: |
  ABAPHAVING_CLAUSE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPHAVING_CLAUSE.htm"
abapFile: "ABAPHAVING_CLAUSE.html"
keywords: ["select", "do", "if", "case", "class", "data", "ABAPHAVING", "CLAUSE"]
---

``... HAVING [`sql_cond`](ABENASQL_COND.html) ...``

The addition `HAVING` limits the number of rows in groups in the result set of a [query](ABENASQL_QUERY_GLOSRY.html) by using the logical expression `sql_cond` on these rows. The logical expression evaluates the content of row groups. Those rows are placed in the result set for which the logical expression is true.

The following applies to the operands of the relational expressions of the logical expression [`sql_cond`](ABENABAP_SQL_STMT_LOGEXP.html):

If a `HAVING` clause is specified, all columns in the [`SELECT` list](ABAPSELECT_LIST.html) that are not arguments of [aggregate expressions](ABAPSELECT_AGGREGATE.html) here must be specified after [`GROUP BY`](ABAPGROUPBY_CLAUSE.html). If the [`SELECT` list](ABAPSELECT_LIST.html) is specified as `*`, `HAVING` clauses without [`GROUP BY` clauses](ABAPGROUPBY_CLAUSE.html) cannot be used.

[Implicit ABAP SQL client handling](ABENABAP_SQL_CLIENT_HANDLING.html) applies to the `HAVING` clause. The [client column](ABENCLIENT_COLUMN_GLOSRY.html) of a client-dependent data source cannot be used as an operand in the `HAVING` condition.

Reading of the number of bookings in each class and for each flight date of a connection.

[SQL Expressions, Use in Aggregate Expressions](ABENSQL_EXPR_IN_AGGREGATES_ABEXA.html)

-   Non-aggregated [columns](ABENABAP_SQL_COLUMNS.html) used as operands in the [data sources](ABAPSELECT_DATA_SOURCE.html) specified after [`FROM`](ABAPFROM_CLAUSE.html) do not have to be listed as such in the [`SELECT` list](ABAPSELECT_LIST.html) and are listed after the addition [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) instead. For each group, the value used for the grouping is evaluated.
-   If [SQL expressions](ABAPSQL_EXPR.html) are used on the left side, either the same expression must be specified or all non-aggregated columns of the expression must be specified individually after [`GROUP BY`](ABAPGROUPBY_CLAUSE.html).
-   In a `HAVING` condition, aggregate expressions [`sql_agg`](ABAPSELECT_AGGREGATE.html) can be used directly or as operands of SQL expressions on both sides of comparisons. Columns that are specified as the argument of an aggregate expression directly or via an SQL expression do not need to be listed after `GROUP BY`. This kind of aggregate expression is evaluated for each row group defined in `GROUP BY` and its result is used as an operand in the comparison. The aggregate functions of the [`SELECT` list](ABAPSELECT_LIST.html) and the `HAVING` clause and the SQL expressions specified as arguments here do not need to be the same.

-   Aggregate expressions on the left side of a logical expression after `HAVING` are SQL expressions. Thus, all SQL expressions except for window expressions can be specified there. Aggregate expressions on the right side of a logical expression are an exception to the rule that no SQL expressions can be specified here.
-   Columns that are specified as arguments of aggregate expressions after `HAVING` can also be specified after `GROUP BY`.
-   If the addition `GROUP BY` is not specified or the data object `column_syntax` in the dynamic column specification after `GROUP BY` is initial, the addition `HAVING` can only be specified if the entire result set is grouped into a row, that is, if there are only aggregate expressions specified after `SELECT`. In this case, only those aggregate expressions can be specified as operands in `sql_cond` that are evaluated for all rows in the result set.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: carrid TYPE sbook-carrid VALUE 'LH', \\n connid TYPE sbook-connid VALUE '400'. \\n\\ \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = carrid \\n )->add\_field( CHANGING field = connid )->request( ). \\n\\ \\nSELECT fldate, class, COUNT( \* ) AS class\_cnt \\n FROM sbook \\n WHERE connid = @connid \\n GROUP BY carrid, fldate, class \\n HAVING carrid = @carrid \\n ORDER BY fldate, class \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html