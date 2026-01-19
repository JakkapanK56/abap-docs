---
title: "ABAPGROUPING_SETS_CLAUSE"
description: |
  ABAPGROUPING_SETS_CLAUSE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGROUPING_SETS_CLAUSE.htm"
abapFile: "ABAPGROUPING_SETS_CLAUSE.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "internal-table", "ABAPGROUPING", "SETS", "CLAUSE"]
---

[Short Reference](ABAPSELECT_SHORTREF.html)

``... GROUPING SETS ( ( \{\ \}\                      |\ \{\ [`sql_exp1`](ABAPSQL_EXPR.html), [`sql_exp2`](ABAPSQL_EXPR.html), ... \} ),                      ( \{\ \}\                      |\ \{\ [`sql_exp1`](ABAPSQL_EXPR.html), [`sql_exp2`](ABAPSQL_EXPR.html), ... \} ), ... ) ...``

`GROUPING SETS` is an addition of the `GROUP BY` clause that allows the definition of multiple grouping sets under a `GROUP BY` clause. The grouping sets are aggregated separately and grouped in a result set.

The [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) addition `GROUPING SETS` consists of a comma-separated list of grouping sets enclosed in parentheses. Each grouping set is itself parenthesized and is specified as follows:

Each grouping is viewed as a separate `GROUP BY` list and is evaluated as such. Here, the [SQL expressions](ABAPSQL_EXPR.html)\\ `sql_exp1, sql_exp2, ...` outside of the grouping set are also respected. The following two examples demonstrate this:

`GROUP BY sql_exp1, GROUPING SETS( ( sql_exp2 ), ( sql_exp3, sql_exp4 ) )`

`GROUP BY GROUPING SETS( ( sql_exp1, sql_exp2 ), (sql_exp1, sql_exp3, sql_exp4 ) )`

The results of the two `GROUP BY` clauses are equivalent and are the same as two [`SELECT`](ABAPSELECT.html) statements joined using [`UNION ALL`](ABAPUNION.html). The following two `GROUP BY` lists are used here:

The addition `GROUPING SETS` has an advantage over a `UNION` clause grouping because the `SELECT` clause only needs to be specified once. It is also potentially easier for the database to optimize a statement with the addition `GROUPING SETS` than its `UNION` equivalent.

The grouping function [`GROUPING`](ABENGROUPING_FUNCTION.html) can be used to check whether a specific column in the result set was aggregated or not.

For Lufthansa flights, the following example calculates the sum of the maximum available seats depending on the plane type (column `planetype`) and the connection (column `connid`) Two grouping sets are defined, which contain either the plane type or the connection.

See [`SELECT`, Grouping Sets](ABENSELECT_GROUPING_SETS_ABEXA.html)

-   **As an empty grouping set `( )`**
-   An empty grouping set represents an [aggregation](ABENAGGREGATE_EXPRESSION_GLOSRY.html) across the entire [data source](ABAPSELECT_DATA_SOURCE.html). It is used, for example, to calculate a [total sum](ABAPSELECT_AGGREGATE.html).
-   **As a comma-separated list `( sql_exp1, sql_exp2, ... )`**
-   A comma-separated list consisting of SQL expressions `sql_exp1, sql_exp2, ...` that defines the set of expressions to be aggregated.

-   All columns used in the addition `GROUPING SETS` must be specified in the [`SELECT` list](ABAPSELECT_LIST.html).
-   The expressions specified in `GROUPING SETS` cannot have the [data type](ABENDDIC_BUILTIN_TYPES.html)\\ `LCHR`, `LRAW`, `RAWSTRING`, `STRING`, or `GEOM_EWKB`.
-   The result rows, plus the SQL expressions, can be in any order in the comma-separated list and the order does not affect the result of the aggregation. If the results of the aggregation need to be sorted in a specific way, an [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause must be specified. The `ORDER BY` addition `PRIMARY KEY` is allowed.
-   The expressions that are part of the aggregation contain the null values as placeholders in the corresponding results.

-   The `GROUP BY` addition `GROUPING SETS` cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). The ABAP SQL statement bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   If the addition `GROUPING SETS` is used, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_773.html), which handles the `SELECT` statement more strictly than the regular syntax check.
-   Grouping sets are not supported by all databases. In an ABAP program, it is possible to use the method `USE_FEATURES` of the class [`CL_ABAP_DBFEATURES`](ABENCL_ABAP_DBFEATURES.html) to check whether the current database system or a database system accessed using a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) supports access to grouping sets. This requires the constant `GROUPING_SETS` of the class to be passed to the method in an internal table.

1.  `sql_exp1, sql_exp2`
2.  `sql_exp1, sql_exp3, sql_exp4`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT FROM sflight \\n FIELDS carrid, \\n connid, \\n planetype, \\n SUM( seatsmax ) AS sum\_seatsmax \\n WHERE carrid = 'LH' \\n GROUP BY GROUPING SETS ( ( carrid, planetype ), \\n ( carrid, connid ), \\n ( ) ) \\n ORDER BY connid, planetype \\n INTO TABLE @FINAL(result\_grouping\_sets). \\n\\ \\n out->write( result\_grouping\_sets ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapgroupby\_clause.html