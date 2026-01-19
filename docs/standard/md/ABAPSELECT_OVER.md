---
title: "ABAPSELECT_OVER"
description: |
  ABAPSELECT_OVER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT_OVER.htm"
abapFile: "ABAPSELECT_OVER.html"
keywords: ["select", "update", "do", "while", "if", "method", "class", "data", "internal-table", "ABAPSELECT", "OVER"]
---

``... [`win_func`](ABENSQL_WIN_FUNC.html) OVER( [PARTITION BY [`sql_exp1`](ABAPSQL_EXPR.html), [`sql_exp2`](ABAPSQL_EXPR.html) ...]\                     [ORDER BY [`col1`](ABENABAP_SQL_COLUMNS.html)\ [ASCENDING|DESCENDING],                               [`col2`](ABENABAP_SQL_COLUMNS.html)\ [ASCENDING|DESCENDING]\                           [ROWS BETWEEN \{UNBOUNDED PRECEDING\}\                                        |\{CURRENT ROW\}\                                        |\{n PRECEDING\}\                                        |\{n FOLLOWING\}\                                 AND     \{UNBOUNDED FOLLOWING\}\                                        |\{CURRENT ROW\}\                                        |\{n PRECEDING\}\                                        |\{n FOLLOWING\}]] ) ...``

[1. `... ORDER BY col1 [ASCENDING|DESCENDING], col2 [ASCENDING|DESCENDING], ...`](#ABAP_ADDITION_1@3@)

[2. `... ROWS BETWEEN ...`](#ABAP_ADDITION_2@3@)

[Window expression](ABENWINDOW_EXPRESSION_GLOSRY.html) in ABAP SQL. A window expression uses a [window function](ABENWINDOW_FUNCTION_GLOSRY.html) to determine an individual value from the rows of a [window](ABENWINDOW_GLOSRY.html) of the result set of a [query](ABENASQL_QUERY_GLOSRY.html). A window expression can be specified as an [SQL expression](ABAPSQL_EXPR.html) or as an argument of any SQL expressions for defining a column [`col_spec`](ABAPSELECT_CLAUSE_COL_SPEC.html) of the result set in the [`SELECT` list](ABAPSELECT_LIST.html) of a query. [Aggregate](ABAPSELECT_AGGREGATE.html) expressions can also be nested if there is interest in both the aggregation and windowing in the same query. In each row of the result set, the result of the calculation is placed in the column defined in this way.

A window expression consists of a window function [`win_func`](ABENSQL_WIN_FUNC.html) followed by the addition `OVER( ... )` in whose parentheses the [window](ABENWINDOW_GLOSRY.html) on the result set is defined for whose rows the window function is evaluated:

If a window expression is used in the `SELECT` list of a `SELECT` statement with [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) clause, the windows are defined in the merged result list and aggregate expressions can be used as arguments of the window functions. Each column that is specified in any position in the window expression must also be specified in the `GROUP BY` clause.

The optional addition `ORDER BY`, which can be specified independently of `PARTITION BY`, defines an order in the current window and an evaluation framework for the window function. `ORDER BY` is followed by a comma-separated list of columns of the data sources of the current query. These columns are used to sort the rows of the window. A column can only be specified directly using the column name [`col1`](ABENABAP_SQL_COLUMNS.html), [`col2 ...`](ABENABAP_SQL_COLUMNS.html) Alias names defined using [`AS`](ABAPSELECT_LIST.html) or column positions cannot be specified. The additions `ASCENDING` and `DESCENDING` determine whether the rows are sorted in ascending or descending order by the column in question. The default is `ASCENDING`.

Specifying the order using `ORDER BY` causes the following:

While the restricted frame mainly affects the results of [aggregate functions](ABENAGGREGATE_FUNCTION_GLOSRY.html) specified as a [window function](ABENSQL_WIN_FUNC.html), the processing sequence primarily affects the [ranking functions](ABENRANKING_FUNCTION_GLOSRY.html). The addition `ORDER BY` must be specified for the ranking functions `RANK` and `DENSE_RANK`.

The definition of the window, the processing sequence, and the frame by `ORDER BY` following `OVER` is totally independent of the addition [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause of the `SELECT` statement.

[Window Expressions with Sort](ABENSQL_EXPR_OVER_ORDER_BY_ABEXA.html)

The window frame specification is an optional addition within the `OVER( ... ORDER BY ... )` clause. It allows the definition of a subset of rows inside a window, which is also referred to as a frame. Frames are determined with respect to the current row, which enables the frame to move within a window.

A frame is defined by a starting frame boundary and an ending frame boundary. There are three options for the starting and ending frame boundaries:

`ORDER BY` is mandatory.

The example demonstrates how different [window functions](ABENWINDOW_FUNCTION_GLOSRY.html) are applied to frames inside a window.

[Window Frame Specification](ABENSQL_EXPR_OVER_WIN_FRAME_ABEXA.html)

-   `PARTITION BY [sql_exp1](ABAPSQL_EXPR.html), [sql_exp2](ABAPSQL_EXPR.html) ...`
-   The optional addition `PARTITION BY` defines the windows using a comma-separated list of SQL expressions `sql_exp1`, `sql_exp2`, ... A window is constructed by the rows of the result set for which all SQL expressions have the same result. All [SQL expressions](ABAPSQL_EXPR.html) except for [aggregate expressions](ABAPSELECT_AGGREGATE.html) and window expressions can be used. The window function is calculated for the rows of the respective current window. If `PARTITION BY` is not specified, a single window is constructed that comprises all rows of the result set.
-   `ORDER BY`
-   The optional addition `ORDER BY` introduces both an order and a frame within the current window, which further restricts the rows for which the window function is calculated. It is also a prerequisite for certain [ranking functions](ABENRANKING_FUNCTION_GLOSRY.html).

-   A window expression works in a similar way to an [aggregate expression](ABAPSELECT_AGGREGATE.html), whereby the addition `PARTITION BY` assumes the role of the [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) clause. Unlike aggregate expressions, however, there is no aggregation of the rows defined using `PARTITION BY`. Instead, these are retained and are all assigned the value calculated using the window expression.
-   The window functions of a window expression work with the rows of a virtual table, which is defined by the specifications after `OVER`. Using the addition [`ORDER BY`](ABAPORDERBY_CLAUSE.html) of the `SELECT` statement has no effect on the result of a window expression. However, the rows of the result set can themselves be sorted according to the results of window expressions by using their alias name.
-   A window expression can only be specified in the result set in the [`SELECT` list](ABAPSELECT_LIST.html) of a query. It cannot be used like an [aggregate expression](ABENAGGREGATE_EXPRESSION_GLOSRY.html) in the [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) or [`HAVING`](ABAPHAVING_CLAUSE.html) clause.
-   By using window expressions in other SQL expressions, calculations can be performed, which combine values of the current row with the results of window expressions, for example, the percentage of a column in the current window, or the distance to the minimum or maximum value of the current window.
-   Window expressions are not supported by all databases. In an ABAP program, it is possible to use the method `USE_FEATURES` of the class [`CL_ABAP_DBFEATURES`](ABENCL_ABAP_DBFEATURES.html) to check whether the current database system or a database system accessed using a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) supports the use of window expressions. This requires the constant `WINDOWING` of this class to be passed to the method in an internal table.

-   [Window Expressions](ABENSQL_EXPR_OVER_ABEXA.html)
-   [Window Expressions without Partition](ABENSQL_EXPR_OVER_ALL_ABEXA.html)

-   The rows of the window are processed by the window function in the order defined by the sort order. The order of the processing of rows that appear more than once regarding the sort criterion is not defined. If the addition `ORDER BY` is not specified, this applies to all rows of the window.
-   The rows processed by the window function are additionally restricted by a frame. Only the rows of the window that are in front of the current row in the sorting, or that have the same values in the columns of the sort criterion are respected.

-   `\{UNBOUNDED PRECEDING\}` or `\{UNBOUNDED FOLLOWING\}`

-   `UNBOUNDED PRECEDING` as starting frame boundary specifies that the frame starts at the first row of the window.
-   `UNBOUNDED FOLLOWING` as ending frame boundary specifies that the frame ends at the last row of the partition.

-   `CURRENT ROW` can be used as both starting and ending frame boundary. It specifies that the window starts or ends at the current row, including the current row in the frame.
-   `\{n PRECEDING\}` or `\{n FOLLOWING\}`

-   `n PRECEDING` can be used as both starting and ending frame boundary. It specifies that the frame starts or ends `n` rows above the current row.
-   `n FOLLOWING` can be used as both starting and ending frame boundary. It specifies that the frame starts or ends `n` rows beneath the current row.
-   `n` must be 0, a positive [integer literal](ABENINTEGER_LITERAL_GLOSRY.html), or a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html) that can be resolved into a [constant](ABENCONSTANT_GLOSRY.html) of type `b`, `s`,`i`, or `int8`.

-   The ending frame boundary cannot be smaller than the starting frame boundary.
-   If no window frame is used, the default window frame is `BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`. That is to say that the window function computes all rows up to the current row. As a result, the function returns cumulative values.

-   `count` sorts the rows by column `ID` and counts the number of rows from the first row of the window to the current row. The result is the same as that returned by the [`ROW_NUMBER( )`](ABENSQL_WIN_FUNC.html) function.
-   `count_reverse` sorts the rows by column `ID` and counts the number of rows from the current row to the last row of the window. The result is reverse numbering.
-   `average` sorts the rows by column `ID` and calculates the rolling averages of a subset of rows from column `COL1`. The subset consists of the current row plus one preceding and one following row. With this function, it is possible, for example, to calculate the 3-day-average temperature for every day from a list of temperature data.
-   `accumulate` sorts the rows by column `ID` and accumulates the values from the first row of the window up to the current row, thus computing the running total of column `COL1`.

SELECT id, col1, col2, \\n COUNT( \* ) OVER( ORDER BY id ROWS BETWEEN UNBOUNDED PRECEDING \\n AND CURRENT ROW ) \\n AS count, \\n COUNT( \* ) OVER( ORDER BY id ROWS BETWEEN CURRENT ROW \\n AND UNBOUNDED FOLLOWING ) \\n AS count\_reverse, \\n AVG( col1 ) OVER( ORDER BY id ROWS BETWEEN 1 PRECEDING \\n AND 1 FOLLOWING ) \\n AS average, \\n SUM( col1 ) OVER( ORDER BY id ROWS BETWEEN UNBOUNDED PRECEDING \\n AND CURRENT ROW ) \\n AS accumulate \\n FROM demo\_update \\n INTO TABLE @FINAL(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html