---
title: "ABENSQL_WIN_FUNC"
description: |
  ABENSQL_WIN_FUNC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_WIN_FUNC.htm"
abapFile: "ABENSQL_WIN_FUNC.html"
keywords: ["select", "update", "do", "if", "case", "try", "class", "data", "types", "ABENSQL", "WIN", "FUNC"]
---

``... [`AVG`](ABAPSELECT_AGGREGATE.html)( [`col`](ABENABAP_SQL_COLUMNS.html)\ [[`AS dtype`](ABAPSELECT_AVG_AS.html)] )    |\ [`MEDIAN`](ABAPSELECT_AGGREGATE.html)( [`sql_exp`](ABAPSQL_EXPR.html) )    |\ [`MAX`](ABAPSELECT_AGGREGATE.html)( [`sql_exp`](ABAPSQL_EXPR.html) )    |\ [`MIN`](ABAPSELECT_AGGREGATE.html)( [`sql_exp`](ABAPSQL_EXPR.html) )    |\ [`SUM`](ABAPSELECT_AGGREGATE.html)( [`sql_exp`](ABAPSQL_EXPR.html) )    |\ [`STDDEV`](ABAPSELECT_AGGREGATE.html)( [`sql_exp`](ABAPSQL_EXPR.html) )    |\ [`VAR`](ABAPSELECT_AGGREGATE.html)( [`sql_exp`](ABAPSQL_EXPR.html) )    |\ [`CORR`](ABAPSELECT_AGGREGATE.html)( [`sql_exp1`](ABAPSQL_EXPR.html),[`sql_exp2`](ABAPSQL_EXPR.html) )    |\ [`CORR_SPEARMAN`](ABAPSELECT_AGGREGATE.html)( [`sql_exp`](ABAPSQL_EXPR.html),[`sql_exp2`](ABAPSQL_EXPR.html) )    |\ [`COUNT`](ABAPSELECT_AGGREGATE.html)( [`sql_exp`](ABAPSQL_EXPR.html) )    |\ [`COUNT`](ABAPSELECT_AGGREGATE.html)( * )    |\ [`COUNT`](ABAPSELECT_AGGREGATE.html)(*)    | ROW_NUMBER( )    | RANK( )    | DENSE_RANK( )    | NTILE( n )    | LEAD|LAG( [`sql_exp1`](ABAPSQL_EXPR.html)[, diff[, [`sql_exp2`](ABAPSQL_EXPR.html)]] )    | FIRST_VALUE|LAST_VALUE( [`col`](ABENABAP_SQL_COLUMNS.html)|[`sql_null`](ABENSQL_NULL.html) ) ...``

[1. `... AVG( ... ) | ... | COUNT(*)`](#ABAP_VARIANT_1@1@)

[2. `... ROW_NUMBER( )`](#ABAP_VARIANT_2@1@)

[3. `... RANK( )`](#ABAP_VARIANT_3@1@)

[4. `... DENSE_RANK( )`](#ABAP_VARIANT_4@1@)

[5. `... NTILE( n )`](#ABAP_VARIANT_5@1@)

[6. `... LEAD|LAG( sql_exp1[, diff[, sql_exp2]] )`](#ABAP_VARIANT_6@1@)

[7. `... FIRST_VALUE|LAST_VALUE( col|sql_null )`](#ABAP_VARIANT_7@1@)

[Window function](ABENWINDOW_FUNCTION_GLOSRY.html) in a [window expression](ABAPSELECT_OVER.html). Window functions are:

Specifies one of the aggregate functions [`AVG`](ABENSQL_AGG_FUNC.html), [`MEDIAN`](ABENSQL_AGG_FUNC.html), [`MAX`](ABENSQL_AGG_FUNC.html), [`MIN`](ABENSQL_AGG_FUNC.html), [`STDDEV`](ABENSQL_AGG_FUNC.html), [`VAR`](ABENSQL_AGG_FUNC.html), [`CORR`](ABENSQL_AGG_FUNC.html), [`CORR_SPEARMAN`](ABENSQL_AGG_FUNC.html), [`SUM`](ABENSQL_AGG_FUNC.html), [`COUNT`](ABENSQL_AGG_FUNC.html), or [`COUNT(*)`](ABENSQL_AGG_FUNC.html) as a window function. The aggregate functions evaluate the rows of the current window or of the frame defined by an addition `ORDER BY` after [`OVER`](ABAPSELECT_OVER.html). The aggregate functions are applied as in the [general description](ABENSQL_AGG_FUNC.html), with the following differences:

The same applies to the arguments of aggregate functions as in the [general description](ABENSQL_AGG_FUNC.html), with the difference that the argument of an aggregate function in a window expression can itself, as a window function, be an aggregate function. This is the precise case when a grouping is made using the [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) clause in the current query. The windows on the combined result set are then defined and the aggregate expressions allowed as specified columns of the current [`SELECT` list](ABAPSELECT_LIST.html) can be used either as standalone expressions or as part of an SQL expression as an argument of window functions of the window expressions there. A window function then determines its result from the aggregated values of the rows of the current window.

[Window Expressions with Grouping](ABENSQL_EXPR_OVER_GROUP_ABEXA.html)

Specifies the ranking function `ROW_NUMBER` as a window function. This ranking function assigns each row a row number of the data type `INT8` and does not have an argument. The rows of each window are numbered starting with 1. This numbering takes place in the order in which the rows of a window are processed. The order is either undefined or can be defined by specifying the addition `ORDER BY` after [`OVER`](ABAPSELECT_OVER.html).

If `ORDER BY` is not specified after [`OVER`](ABAPSELECT_OVER.html), `ROW_NUMBER` still assigns a unique row number, but these numbers are not sorted.

[Examples of Window Expressions](ABENSQL_EXPR_OVER_ABEXAS.html)

Specifies the ranking function `RANK` as a window function. This ranking function assigns each row a rank of the data type `INT8` and does not have an argument. It can only be specified together with `ORDER BY` after [`OVER`](ABAPSELECT_OVER.html).

The rank of a row is the position of this row in the ranking defined by the addition `ORDER BY` after `OVER` and is defined as follows:

If a window does not contain any multiple rows with respect to the sort criterion, `RANK` produces the same result as `ROW_NUMBER`. If any other cases, a ranking determined by `RANK` is not gap-free. `DENSE_RANK` can be used to remove gaps.

[Window Expressions with Sort](ABENSQL_EXPR_OVER_ORDER_BY_ABEXA.html)

Specifies the ranking function `DENSE_RANK` as a window function. This ranking function assigns each row a rank of the data type `INT8` and does not have an argument. It can only be specified together with `ORDER BY` after [`OVER`](ABAPSELECT_OVER.html).

`DENSE_RANK` works in largely the same way as `RANK`, but counts without any gaps, starting from the first group, and does not determine the rank using the lowest row number of groups of identical values with respect to the sort criterion.

If a window does not contain any multiple rows with respect to the sort criterion, `DENSE_RANK` produces the same result as `RANK`.

[Window Expressions with Sort](ABENSQL_EXPR_OVER_ORDER_BY_ABEXA.html)

Specifies the ranking function `NTILE` as a window function. This window function divides the rows of a window into `n` buckets. The goal is to fill all buckets with the same number of rows by following the rule specified after `ORDER BY`.

If the number of rows of the window `m` cannot be distributed equally between the number of buckets `n`, the remainder `r` is distributed in such a way that the first (`m [MOD](ABENARITH_OPERATORS.html) n`) buckets each contain one element more. The buckets are numbered starting with the start value 1 and the result of the `NTILE` function is the number of the bucket a particular row belongs to.

`n` must be a [host variable](ABENABAP_SQL_HOST_VARIABLES.html), a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html), or a [literal](ABENABAP_SQL_LITERALS.html) of type `b`, `s`,`i`, or `int8` which represents a positive integer. The [`OVER`](ABAPSELECT_OVER.html) clause including `ORDER BY` is mandatory.

If `n` is negative, for literals and host constants, a syntax error occurs. If `n` is a variable or an expression, instead of a syntax error, a database error and its respective exception `CX_SY_OPEN_SQL_DB` can occur. The result of the `NTILE` function is always of type `INT8`.

Since the maximum number of rows in a bucket can vary by 1, rows with the same value can also be in different buckets.

Sorting of all employees listed in table `DEMO_EMPLOYEES` by their salary and distributes them into five salary groups. Group 1 has one entry more, as the number of employees (11) cannot be distributed into five groups of equal size.

[Window Function `NTILE`](ABENSQL_EXPR_OVER_NTILE_ABEXA.html)

Specifies one of the value functions `LEAD` or `LAG` as a window function. They can only be specified together with `ORDER BY` after [`OVER`](ABAPSELECT_OVER.html).

The result of the functions is the value of the SQL expression [`sql_exp1`](ABAPSQL_EXPR.html) for the row of the current window defined by the addition `diff` or the box defined by the addition `ORDER BY` after [`OVER`](ABAPSELECT_OVER.html). For `diff`, a [literal](ABENABAP_SQL_LITERALS.html) or a [host constant](ABENABAP_SQL_HOST_VARIABLES.html) with the ABAP type `b`, `s`, `i`, `int8` can be specified, whose value is a positive number other than 0.

If `diff` is not specified, the value 1 is used implicitly. In the case of `LEAD`, this is the row that follows directly and in the case of `LAG`, the directly preceding row. If the row determined by `diff` is not in the current window, the result is the [null value](ABENNULL_VALUE_GLOSRY.html) by default. If the optional SQL expression [`sql_exp2`](ABAPSQL_EXPR.html) is specified, it is evaluated and returned for the current row in cases where the row does not exist.

The result of the functions `LEAD` and `LAG` has the following data type:

`SELECT` statement with the window functions `LEAD` and `LAG` as operands of an [arithmetic expression](ABENSQL_ARITH.html). The addition [`PARTITION BY`](ABAPSELECT_OVER.html) is not specified, which means there is only one window with all rows of the result set. Both `LEAD` and `LAG` have only one argument each, which means that the difference between the values of the column `NUM1` is calculated using the directly following or preceding row, and any nonexistent rows produce null values. The latter are defined using a [null indicator](ABENNULL_INDICATOR_GLOSRY.html). The class `CL_DEMO_SELECT_OVER_LEAD_LAG_D` uses this `SELECT` statement and displays the result.

[Window Functions `LEAD` and `LAG`](ABENSQL_EXPR_OVER_LEAD_LAG_ABEXA.html)

Specifies one of the value functions `FIRST_VALUE` or `LAST_VALUE` as a window function. The `FIRST_VALUE` function returns the first value of a sorted set of values, the `LAST_VALUE` function returns the last value of a sorted set of values.

If the value is null or if the expression is empty, null is returned (see example, row `H`).

`OVER` and `ORDER BY` are mandatory. `PARTITION BY` is optional. If a window is divided into partitions, the `FIRST_VALUE`/`LAST_VALUE` function returns a result for each partition (see example). If there is no `PARTITON BY` clause, the functions work on the entire window.

With the `LAST_VALUE` function, framing is an important aspect to consider. The default frame is [`ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`](ABAPSELECT_OVER.html), so the `LAST_VALUE` function always returns the value from the current row. To find the last value for a partition or a window, the correct frame has to be specified explicitly: [`ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING`](ABAPSELECT_OVER.html).

The class `CL_DEMO_SELECT_FIRST_LAST` divides the rows from the `DEMO_UPDATE` table into three partitions, depending on their value in `COL1`. Within the partitions, the rows are ordered by their value in `COL3`.

The column `FIRST_VALUE` returns the first value of `COL2` for each partition.

The column `LAST_VALUE` does not return the last value. As described above, the default frame is from the first row to the current row. If `COL3` contains duplicate values, the rows are considered equal and the last value from the group of equals is returned. To get the last value of `COL2` of the partition, the frame size has to be specified explicitly, as demonstrated in `LAST_VALUE_CORRECT`.

In this example, `COL3` has multiple duplicate values. The key field - here the field `ID` - is used to sort rows with the same value.

-   [Aggregate functions](ABENAGGREGATE_FUNCTION_GLOSRY.html)\\ `AVG( ... )`, ..., `COUNT(*)` that can also be used in [aggregate expressions](ABAPSELECT_AGGREGATE.html).
-   [Ranking functions](ABENRANKING_FUNCTION_GLOSRY.html)\\ `ROW_NUMBER( )`, `RANK( )`, `DENSE_RANK( )`, and `NTILE (n)` that can only be used in [window expressions](ABAPSELECT_OVER.html).
-   [Value functions](ABENVALUE_FUNCTION_GLOSRY.html)\\ `LEAD( ... )`, `LAG( ... )`, `FIRST_VALUE ( ... )`, `LAST_VALUE ( ... )` that can be used only in [window expressions](ABAPSELECT_OVER.html).

-   The addition `DISTINCT` is only allowed for the aggregate function `COUNT` in a window expression.
-   The result of the function `COUNT` has the data type `INT8` and not `INT4`.
-   When used in window expressions, `STDDEV` and `VAR` can have only data type `FLTP` as argument.

-   All rows that occur more than once with respect to the sort criterion have the same rank. This rank is the lowest row number in this group, as determined by the function `ROW_NUMBER`.
-   The first group of each window starts with the value 1.

-   For the function `LEAD`, `diff` determines the row positioned in a corresponding distance after the current row.
-   For the function `LAG`, `diff` determines the row positioned in a corresponding distance in front of the current row.

-   If [`sql_exp2`](ABAPSQL_EXPR.html) is not specified, the data type is determined by [`sql_exp1`](ABAPSQL_EXPR.html).
-   If [`sql_exp2`](ABAPSQL_EXPR.html) is specified, the results of `sql_exp1` and `sql_exp2` must match in a way that a common result type can be determined: The data types must either be the same or the data type of an expression must represent the value of the other expression. The result has the dictionary type of the expression with the largest value range.

-   The window functions `LEAD` or `LAG` are suitable for calculations, such as determining the difference between values in the current row and values of the preceding or following rows.

SELECT name, \\n salary, \\n NTILE( 5 ) OVER( ORDER BY salary ) AS ntile \\n FROM demo\_employees \\n INTO TABLE @FINAL(result). SELECT num1 AS number, \\n num1 - LEAD( num1 ) OVER( ORDER BY id ) AS diff\_lead, \\n num1 - LAG( num1 ) OVER( ORDER BY id ) AS diff\_lag \\n FROM demo\_expressions \\n ORDER BY id \\n INTO TABLE @FINAL(lead\_lag\_diffs) \\n INDICATORS NULL STRUCTURE null\_ind. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \\n id, \\n col1, \\n col2, \\n col3, \\n FIRST\_VALUE( col2 ) OVER( PARTITION BY col1 ORDER BY col3 ) \\n AS first\_value, \\n LAST\_VALUE( col2 ) OVER( PARTITION BY col1 ORDER BY col3 ) \\n AS last\_value, \\n LAST\_VALUE( col2 ) OVER( PARTITION BY col1 ORDER BY col3 \\n ROWS BETWEEN UNBOUNDED PRECEDING \\n AND UNBOUNDED FOLLOWING ) \\n AS last\_value\_correct \\n FROM demo\_update \\n INTO TABLE @FINAL(result). \\n\\ \\nout->display( result ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abapselect\_over.html