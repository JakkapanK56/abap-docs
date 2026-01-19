---
title: "ABENSQL_AGG_FUNC"
description: |
  ABENSQL_AGG_FUNC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_AGG_FUNC.htm"
abapFile: "ABENSQL_AGG_FUNC.html"
keywords: ["select", "insert", "delete", "do", "while", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "ABENSQL", "AGG", "FUNC"]
---

```... AVG( [DISTINCT]\ [`sql_exp`](ABAPSQL_EXPR.html)\ [[`AS dtype`](ABAPSELECT_AVG_AS.html)] )    | MEDIAN( [DISTINCT]\ [`sql_exp`](ABAPSQL_EXPR.html) )    | MAX( [DISTINCT]\ [`sql_exp`](ABAPSQL_EXPR.html) )    | MIN( [DISTINCT]\ [`sql_exp`](ABAPSQL_EXPR.html) )    | SUM( [DISTINCT]\ [`sql_exp`](ABAPSQL_EXPR.html) )    | PRODUCT( col )    | STDDEV( [DISTINCT]\ [`sql_exp`](ABAPSQL_EXPR.html) )    | VAR( [DISTINCT]\ [`sql_exp`](ABAPSQL_EXPR.html) )    | CORR( [`sql_exp1`](ABAPSQL_EXPR.html),[`sql_exp2`](ABAPSQL_EXPR.html) )    | CORR_SPEARMAN( [`sql_exp1`](ABAPSQL_EXPR.html),[`sql_exp2`](ABAPSQL_EXPR.html)  )    | STRING_AGG( [`sql_exp`](ABAPSQL_EXPR.html)[, sep]\ [ORDER BY [`col1`](ABENABAP_SQL_COLUMNS.html)\ [ASCENDING|DESCENDING],                                           [`col2`](ABENABAP_SQL_COLUMNS.html)\ [ASCENDING|DESCENDING], ...] )    | COUNT( [DISTINCT]\ [`sql_exp`](ABAPSQL_EXPR.html) )    | COUNT( * )    | COUNT(*)    |\ [`GROUPING`](ABENGROUPING_FUNCTION.html)( [`col`](ABENABAP_SQL_COLUMNS.html) ) ...    |\ [`` `ALLOW_PRECISION_LOSS`( ... ) ``](ABAPSELECT_ALLOW_PRECISION_LOSS.html)```

[1. `... AVG( [DISTINCT] sql_exp [AS dtype] )`](#ABAP_VARIANT_1@1@)

[2. `... MEDIAN( [DISTINCT] sql_exp )`](#ABAP_VARIANT_2@1@)

[3. `... MAX( [DISTINCT] sql_exp )`](#ABAP_VARIANT_3@1@)

[4. `... MIN( [DISTINCT] sql_exp )`](#ABAP_VARIANT_4@1@)

[5. `... SUM( [DISTINCT] sql_exp )`](#ABAP_VARIANT_5@1@)

[6. `... PRODUCT( col )`](#ABAP_VARIANT_6@1@)

[7. `... STDDEV( [DISTINCT] sql_exp )`](#ABAP_VARIANT_7@1@)

[8. `... VAR( [DISTINCT] sql_exp )`](#ABAP_VARIANT_8@1@)

[9. `... CORR( sql_exp1,sql_exp2 )`](#ABAP_VARIANT_9@1@)

[10. `... CORR_SPEARMAN( sql_exp1,sql_exp2 )`](#ABAP_VARIANT_10@1@)

[11. `... STRING_AGG( sql_exp[, sep]\ [ORDER BY ...] )`](#ABAP_VARIANT_11@1@)

[12. `... COUNT( [DISTINCT] sql_exp )`](#ABAP_VARIANT_12@1@)

[13. `... COUNT( * )`](#ABAP_VARIANT_13@1@)

[14. `... COUNT(*)`](#ABAP_VARIANT_14@1@)

[15. `... GROUPING( col )`](#ABAP_VARIANT_15@1@)

[16. `... ALLOW_PRECISION_LOSS( ... )`](#ABAP_VARIANT_16@1@)

[Aggregate function](ABENAGGREGATE_FUNCTION_GLOSRY.html) in ABAP SQL. An aggregate function aggregates the values of the rows in a specific set of rows to a single value. Aggregate functions can be used in the following places:

The following table shows which aggregate functions can be used in which places:

The following shared properties apply here:

The database platform determines whether an overflow occurs if the result of an aggregate function exceeds its value range. On some database platforms, intermediate results outside the value range are allowed. The overflow behavior of SQL expressions, on the other hand, is platform-independent. If an SQL expression in an aggregate expression produces an overflow, an exception is raised on every platform, even if a corresponding result of the aggregate function would not raise an exception on every platform.

For further details on the calculation on SAP HANA Platform, see the [SAP HANA SQL Reference Guide](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).

Determines the average value of the content of an SQL expression [`sql_exp`](ABAPSQL_EXPR.html) in a row set. The optional addition [`AS dtype`](ABAPSELECT_AVG_AS.html) can be used to define the result type explicitly.

The data type of the column must be numeric. The data types `DF16_RAW` and `DF34_RAW` and the obsolete types `DF16_SCL` and `DF34_SCL` are not allowed. The data type `INT8` is only allowed together with the addition [`AS dtype`](ABAPSELECT_AVG_AS.html).

The implicit data type of the result for [decimal floating point numbers](ABENDECFLOAT_GLOSRY.html) is the corresponding data type (`DECFLOAT16` or `DECFLOAT34` or `DF16_DEC` or `DF34_DEC`) and is otherwise the type `FLTP`, a platform-dependent intermediate result, or is determined by the addition [`AS dtype`](ABAPSELECT_AVG_AS.html).

Determination of the average value of all values in a column and checking of the result.

Determines the statistical median of an input expression. Null values are ignored. If the number of non-null values is even, then the return value is the average of the two middle elements. Otherwise, the middle element is returned. The data type of the result is the DDIC data type of the result of the SQL expression.

The result of the SQL expression `sql_exp` must have one of the [numeric data types](ABENDDIC_BUILTIN_TYPES.html)\\ `INT1`, `INT2`, `INT4`, `INT8`, `DEC`, `DECFLOAT16`, `DECFLOAT34`, or `FLTP`.

The aggregate function `MEDIAN` cannot be used in the [hierarchy aggregate navigators](ABENHIERARCHY_AGG_NAVI_GLOSRY.html)\\ [`HIERARCHY_DESCENDANTS_AGGREGATE`](ABENSELECT_HIERARCHY_DESC_AGG.html) and [`HIERARCHY_ANCESTORS_AGGREGATE`](ABENSELECT_HIERARCHY_ANCS_AGG.html).

Determination of the median value of all values in a column. As the number of non-null values is even, the average of the two middle values is calculated. Since the data type of the result is `INT4`, the integer is rounded. The value returned is 6.

Determines the maximum value or minimum value of the results of the SQL expression [`sql_exp`](ABAPSQL_EXPR.html) in a row set. The data type of the result is the DDIC data type of the result of the SQL expression.

The result of the SQL expression `sql_exp` must be numeric except for:

If a single column [`col`](ABENABAP_SQL_COLUMNS.html) is specified for the expression, this column can also have any data type.

The [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) can process the `MAX` and `MIN` functions in the `SELECT` list.

Determination of the minimum value and maximum value of all values in a column and checking of the result.

Determines the sum of the results of the SQL expression [`sql_exp`](ABAPSQL_EXPR.html) in a row set. The data type of the result is the DDIC data type of the result of the SQL expression.

The result of the SQL expression `sql_exp` must be numeric except for the [replacement types for decimal floating point numbers](ABENDDIC_DECIMAL_FLOATING_POINT.html). If a single column [`col`](ABENABAP_SQL_COLUMNS.html) is specified for the expression, this column can have any numeric data type except `DF16_RAW` and `DF34_RAW` and except the obsolete data types `DF16_SCL` and `DF34_SCL`.

The [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) can process the `SUM` function in the `SELECT` list.

Summation of all values in a column and checking the result.

Determines the product of the values of a column `col` in a row set. The data type of the result is the DDIC data type of the column. The column must have a numeric type except for the [replacement types for decimal floating point numbers](ABENDDIC_DECIMAL_FLOATING_POINT.html).

The aggregate function `PRODUCT` can only be used in the [hierarchy aggregate navigator](ABENHIERARCHY_AGG_NAVI_GLOSRY.html)[`HIERARCHY_ANCESTORS_AGGREGATE`](ABENSELECT_HIERARCHY_ANCS_AGG.html).

See [Hierarchy Navigator `HIERARCHY_ANCESTORS_AGGREGATE`](ABENHIER_ANCS_AGG_ABEXA.html)

Determines the standard deviation of a given expression as the square root of the `VAR` function. The result of the SQL expression `sql_exp` can have either the data type `FLTP` or `DECFLOAT34`. To use `STDDEV` with other data types, a conversion must first be performed using the SQL function [`CAST`](ABENSQL_CAST.html). The data type of the result is the DDIC data type of the result of the SQL expression, that is, either `FLTP` or `DECFLOAT34`.

The [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) can process the `STDDEV` function in the `SELECT` list.

See Variant 8 below for an example.

Determines the variance of a given expression as the square of the standard deviation. The SQL expression `sql_exp` can only be `FLTP` or `DECFLOAT34`. To use `VAR` with other data types, a conversion must first be performed using the SQL function [`CAST`](ABENSQL_CAST.html). The data type of the result is the DDIC data type of the result of the SQL expression, that is, either `FLTP` or `DECFLOAT34`.

Determination of the average, the standard deviation, and the variance of the salaries of all employees listed in table `DEMO_EMPLOYEES`. The data type of column `SALARY` is `DEC` and to calculate the standard deviation and variance, the column is converted to type `DECFLOAT34`.

Determines the Pearson product-moment correlation coefficient between two columns. In other words, it measures the linear correlation of two value sets. The result of the SQL expressions `sql_exp1` and `sql_exp2` can have any [numeric data type](ABENBUILTIN_TYPES_NUMERIC.html). The data type of the result is always `FLTP`. The result ranges from -1 to 1. If a correlation cannot be computed, the result is null.

See Variant 10 below for an example.

Determines the Spearman's rank correlation coefficient of the values found in the corresponding rows of two columns. In other words, it measures the monotonous correlation of two value sets. The result of the SQL expressions `sql_exp1` and `sql_exp2` can have any numeric data type. The data type of the result is always `FLTP`. The result ranges from -1 to 1.

Determination of the Pearson product-moment and the Spearman's rank correlation for columns `NUM1` and `NUM2` of table `DEMO_EXPRESSIONS`. `CORR` is 0.959, since the correlation is not linear. `CORR_SPEARMAN` is 1, since the value sets are correlated monotonously.

Chains the results of the SQL expression [`sql_exp`](ABAPSQL_EXPR.html) in a row set. The data type of the result is `SSTRING` with the length 1333. If the string in question is greater than 1333, a catchable exception of the class `CX_SY_OPEN_SQL_DB` is raised. The results of the SQL expression `sql_exp` must be a flat character-like data type like `CHAR`, `SSTRING`, `DATS`, or `TIMS`.

An optional separator `sep` separated by a comma can be specified after the SQL expression. If `sep` is specified, its content is inserted into the string between consecutive results of the SQL expression. If `sep` is not specified, these results are appended to each other directly. `sep` can be a [literal](ABENABAP_SQL_LITERALS.html), a [host constant](ABENABAP_SQL_HOST_VARIABLES.html), or a [host variable](ABENABAP_SQL_HOST_VARIABLES.html) with the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c`, `d`, `t`, or `n` with a maximum of 1333 characters. In `sep`, all trailing blanks are respected.

The optional addition `ORDER BY` can be used to define the order in which the results of the SQL expression are chained. If `ORDER BY` is not specified, the order is undefined. `ORDER BY` is followed by a comma-separated list of columns of the data sources of the current query. These columns are used to sort the rows of the row set. A column can only be specified directly using the column name [`col1`](ABENABAP_SQL_COLUMNS.html), [`col2 ...`](ABENABAP_SQL_COLUMNS.html). Alias names defined using [`AS`](ABAPSELECT_LIST.html) and column positions cannot be specified. The additions `ASCENDING` and `DESCENDING` determine whether the rows are sorted in ascending or descending order by the column in question. The default is `ASCENDING`.

While the first `SELECT` statement most probably will fail due to the restriction of the result length of `STRING_AGG` to 1333, the second `SELECT` statement will be successful because of [`TO_CLOB`](ABENSQL_TYPE_CONV_FUNC.html).

[SQL Expressions, Aggregate Function `string_agg`](ABENSQL_EXPR_STRING_AGG_ABEXA.html)

Determines the number of distinct values of the results of the SQL expression [`sql_exp`](ABAPSQL_EXPR.html) in a row set.

The data type of the result is `INT8`. The SQL expression `sql_exp` can be a result with any type except for the [replacement types for decimal floating point numbers](ABENDDIC_DECIMAL_FLOATING_POINT.html). If a single column [`col`](ABENABAP_SQL_COLUMNS.html) is specified for the expression, this column can have any data type.

Determination of the number of airlines flying to New York.

The two spellings have the same meaning and return the number of rows in a row set independent from the column content. The data type of the result is `INT8`.

Example for counting rows using `COUNT`. The single-row result contains the values 7, 2, and 10 in its columns.

The difference 3 of the results of `COUNT(*)` and `COUNT` without `DISTINCT` is the number of rows in which the [case distinction](ABENSQL_SIMPLE_CASE.html) produces the null value.

The grouping function [`GROUPING`](ABENGROUPING_FUNCTION.html) can be used to verify whether a column [`col`](ABENABAP_SQL_COLUMNS.html) is part of the aggregation. The grouping function can be used only if the `GROUP BY` clause contains the addition `GROUPING SETS`. The data type of the result of the grouping function is [`INT1`](ABENDDIC_BUILTIN_TYPES.html). [SQL expressions](ABAPSQL_EXPR.html) cannot be specified as arguments for `GROUPING`. For more information, see [`sql_agg - GROUPING`](ABENGROUPING_FUNCTION.html).

The aggregate function `GROUPING` can be used in [aggregate expressions](ABAPSELECT_AGGREGATE.html).

[`GROUPING`, Aggregate Function](ABENGROUPING_FUNCTION_ABEXA.html)

The `ALLOW_PRECISION_LOSS` statement improves the performance of an [aggregate expression](ABENAGGREGATE_EXPRESSION_GLOSRY.html)\\ [`agg_exp`](ABAPSELECT_AGGREGATE.html) at the cost of accuracy of the result. This function should only be used on decimal values and when loss of precision is acceptable. Currently, `SUM` is the only supported aggregate expression.

For more information, see [`sql_agg - ALLOW_PRECISION_LOSS`](ABAPSELECT_ALLOW_PRECISION_LOSS.html).

The aggregate function `ALLOW_PRECISION_LOSS` can be used in [aggregate expressions](ABAPSELECT_AGGREGATE.html).

[`sql_agg` - Aggregate Function `ALLOW_PRECISION_LOSS`](ABENSQL_EXPR_AGGR_PREC_LOSS_ABEXA.html)

-   As a standalone [aggregate expression](ABENAGGREGATE_EXPRESSION_GLOSRY.html)\\ [`agg_exp`](ABAPSELECT_AGGREGATE.html) in specific operand positions of a query. The evaluated row set is the full result set of the query or a group created using the addition [`GROUP BY`](ABAPGROUPBY_CLAUSE.html). The general rules described here apply.
-   As a [window function](ABENWINDOW_FUNCTION_GLOSRY.html)\\ [`win_func`](ABENSQL_WIN_FUNC.html) in a [window expression](ABAPSELECT_OVER.html). The evaluated row set is the current [window](ABENWINDOW_GLOSRY.html) or a box inside the window. The general rules apply in addition to the rules for window functions.
-   As an aggregate function in a [hierarchy aggregate navigator](ABENSELECT_HIERARCHY_AGG_NAVIS.html). The evaluated row set consists of the [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html) determined by the navigator. The general rules apply in addition to the rules for hierarchy aggregate navigators.

-   The addition `DISTINCT` excludes duplicate values from the calculation in any operand positions in which it is specified.
-   If the argument of an aggregate function (except `COUNT(*)`) has the [null value](ABENNULL_VALUE_GLOSRY.html), it is ignored when the function is evaluated. The result is a null value only if all the rows in the column in question contain a null value.
-   The aggregate function `COUNT` counts rows and never produces the [null value](ABENNULL_VALUE_GLOSRY.html).
-   Arguments of type `STRING`, `RAWSTRING`, `LCHR`, `LRAW`, and `GEOM_EWKB` cannot be handled using aggregate functions.

-   The aggregate function `AVG` can be used in [aggregate expressions](ABAPSELECT_AGGREGATE.html), in [window expressions](ABAPSELECT_OVER.html), and in the [hierarchy aggregate navigators](ABENHIERARCHY_AGG_NAVI_GLOSRY.html)\\ [`HIERARCHY_DESCENDANTS_AGGREGATE`](ABENSELECT_HIERARCHY_DESC_AGG.html) and [`HIERARCHY_ANCESTORS_AGGREGATE`](ABENSELECT_HIERARCHY_ANCS_AGG.html).
-   The addition `DISTINCT` can only be used in the `SELECT` list.
-   The `sql_exp` can only be used in `SELECT` list positions.
-   The result of the aggregate functions `AVG` in the data type `FLTP` is platform-dependent. The type of platform also determines whether the result of an aggregate expression `AVG`, which is used in a `HAVING` clause as an intermediate result, is of type `FLTP`. The addition [`AS dtype`](ABAPSELECT_AVG_AS.html) can be used to force the type `FLTP`.

-   The aggregate function `MEDIAN` can be used in [aggregate expressions](ABAPSELECT_AGGREGATE.html) and in [window expressions](ABAPSELECT_OVER.html).
-   The addition `DISTINCT` can only be used in the `SELECT` list.
-   The `sql_exp` can only be used in `SELECT` list positions.

-   the [replacement types for decimal floating point numbers](ABENDDIC_DECIMAL_FLOATING_POINT.html),
-   [window expressions](ABAPSELECT_OVER.html),
-   and [hierarchy aggregate navigators](ABENSELECT_HIERARCHY_DESC_AGG.html).

-   The aggregate functions `MAX` and `MIN` can be used in [aggregate expressions](ABAPSELECT_AGGREGATE.html), in [window expressions](ABAPSELECT_OVER.html), and in the [hierarchy aggregate navigators](ABENHIERARCHY_AGG_NAVI_GLOSRY.html)\\ [`HIERARCHY_DESCENDANTS_AGGREGATE`](ABENSELECT_HIERARCHY_DESC_AGG.html) and [`HIERARCHY_ANCESTORS_AGGREGATE`](ABENSELECT_HIERARCHY_ANCS_AGG.html).
-   The addition `DISTINCT` can only be used in the `SELECT` list.
-   The `sql_exp` can only be used in `SELECT` list positions.

-   The aggregate function `SUM` can be used in [aggregate expressions](ABAPSELECT_AGGREGATE.html), in [window expressions](ABAPSELECT_OVER.html), and in the [hierarchy aggregate navigators](ABENHIERARCHY_AGG_NAVI_GLOSRY.html)\\ [`HIERARCHY_DESCENDANTS_AGGREGATE`](ABENSELECT_HIERARCHY_DESC_AGG.html) and [`HIERARCHY_ANCESTORS_AGGREGATE`](ABENSELECT_HIERARCHY_ANCS_AGG.html).
-   The addition `DISTINCT` can only be used in the `SELECT` list.
-   The `sql_exp` can only be used in `SELECT` list positions.
-   If the aggregate function `SUM` is used for columns of types `DECFLOAT16` or `DF16_DEC`, it is best to use a target field with the data type `decfloat34` to avoid overflows.

-   The aggregate function `STDDEV` can be used in [aggregate expressions](ABAPSELECT_AGGREGATE.html) and in [window expressions](ABAPSELECT_OVER.html).
-   The addition `DISTINCT` can only be used in the `SELECT` list.
-   The `sql_exp` can only be used in `SELECT` list positions.

-   The aggregate function `VAR` can be used in [aggregate expressions](ABAPSELECT_AGGREGATE.html) and in [window expressions](ABAPSELECT_OVER.html).
-   The addition `DISTINCT` can only be used in the `SELECT` list.
-   The `sql_exp` can only be used in `SELECT` list positions.

-   The aggregate function `CORR` can be used in [aggregate expressions](ABAPSELECT_AGGREGATE.html) and in [window expressions](ABAPSELECT_OVER.html). If the aggregate function `CORR` is used as a [window function](ABENSQL_WIN_FUNC.html), the `ROWS BETWEEN` addition is only supported with `UNBOUNDED PRECEDING` and `UNBOUNDED FOLLOWING`. Otherwise, a syntax warning occurs, if detected at compile time, or a catchable exception of class `CX_SY_OPEN_SQL_DB` occurs, if detected at runtime.
-   The `sql_exp` can only be used in `SELECT` list positions.

-   The aggregate function `CORR_SPEARMAN` can be used in [aggregate expressions](ABAPSELECT_AGGREGATE.html) and in [window expressions](ABAPSELECT_OVER.html). If the aggregate function `CORR_SPEARMAN` is used as a [window function](ABENSQL_WIN_FUNC.html), the `ROWS BETWEEN` addition is only supported with `UNBOUNDED PRECEDING` and `UNBOUNDED FOLLOWING`. Otherwise, a syntax warning occurs, if detected at compile time, or a catchable exception of class `CX_SY_OPEN_SQL_DB` occurs, if detected at runtime.
-   The `sql_exp` can only be used in `SELECT` list positions.

-   The aggregate function `STRING_AGG` can be used in [aggregate expressions](ABAPSELECT_AGGREGATE.html).
-   The `sql_exp` can only be used in `SELECT` list positions.
-   The restriction of the result length to 1333 can be removed by using the built-in function [`TO_CLOB`](ABENSQL_TYPE_CONV_FUNC.html). The use of `TO_CLOB` for `STRING_AGG` is recommended if the result length is expected to exceed 1333.
-   Respecting all trailing blanks in `sep` is different to the behavior of [`&&`](ABENSQL_STRING.html), where a truncation occurs.
-   When used, the aggregate function `STRING_AGG` leads to the [strict mode from ABAP release 7.75](ABENABAP_SQL_STRICTMODE_775.html).

-   If the addition `DISTINCT` is not specified, `COUNT` determines all rows in which the result of the SQL expression [`sql_exp`](ABAPSQL_EXPR.html) is not the [null value](ABENNULL_VALUE_GLOSRY.html).
-   If the addition `DISTINCT` is specified, `COUNT` determines the number of distinct values of the results of the SQL expression [`sql_exp`](ABAPSQL_EXPR.html). [Null values](ABENNULL_VALUE_GLOSRY.html) are ignored here.

-   The aggregate function `COUNT` can be used in [aggregate expressions](ABAPSELECT_AGGREGATE.html), in [window expressions](ABAPSELECT_OVER.html), and in the [hierarchy aggregate navigators](ABENHIERARCHY_AGG_NAVI_GLOSRY.html)\\ [`HIERARCHY_DESCENDANTS_AGGREGATE`](ABENSELECT_HIERARCHY_DESC_AGG.html) and [`HIERARCHY_ANCESTORS_AGGREGATE`](ABENSELECT_HIERARCHY_ANCS_AGG.html).
-   The addition `DISTINCT` can only be used in the `SELECT` list.
-   The `sql_exp` can only be used in `SELECT` list positions.
-   A target object of the type `INT8`, `p`, or `decfloat34` must be specified if a function `COUNT( * )` or `COUNT(*)` is expected to return a value greater than the value range of `INT4`.
-   An aggregate function `COUNT` without the addition `DISTINCT` leads to the [strict mode from ABAP release 7.75](ABENABAP_SQL_STRICTMODE_775.html).

-   The aggregate functions `COUNT( * )` and `COUNT(*)` can be used in [aggregate expressions](ABAPSELECT_AGGREGATE.html), in [window expressions](ABAPSELECT_OVER.html), and in the [hierarchy aggregate navigators](ABENHIERARCHY_AGG_NAVI_GLOSRY.html)\\ [`HIERARCHY_DESCENDANTS_AGGREGATE`](ABENSELECT_HIERARCHY_DESC_AGG.html) and [`HIERARCHY_ANCESTORS_AGGREGATE`](ABENSELECT_HIERARCHY_ANCS_AGG.html).
-   A target object of the type `INT8`, `p`, or `decfloat34` must be specified if a function `COUNT( * )` or `COUNT(*)` is expected to return a value greater than the value range of `INT4`.
-   Using `COUNT( * )` or `COUNT(*)` standalone in the [`SELECT` list](ABAPSELECT_LIST.html), that is not together with other columns, can be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) for accessing the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and for accessing internal tables with [`FROM @itab`](ABAPSELECT_ITAB.html).

-   10 is the total number of rows in the result set determined using `COUNT(*)` and is independent of a single value.
-   7 is the number of rows determined using `COUNT` without `DISTINCT` in which [case distinction](ABENSQL_SIMPLE_CASE.html) does not produce the null value.
-   2 is the number of distinct results *X* and *Y* determined using `COUNT` and `DISTINCT` of the [case distinction](ABENSQL_SIMPLE_CASE.html) while ignoring the null value.

FINAL(n) = 9. \\n\\ \\nDELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM TABLE @( VALUE #( \\n FOR i = 0 UNTIL i > n \\n ( id = CONV #( i ) num1 = i ) ) ). \\n\\ \\nSELECT AVG( num1 ) \\n FROM demo\_expressions \\n INTO (@FINAL(avg)). \\n\\ \\nASSERT avg = n / 2. DELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM TABLE @( \\nVALUE #( \\n( id = 'A' num1 = 2 dats1 = '20200504' ) \\n( id = 'B' num1 = 20 dats1 = '20200505' ) \\n( id = 'C' num1 = 4 dats1 = '20200506' ) \\n( id = 'D' num1 = 6 dats1 = '20200507' ) \\n( id = 'E' num1 = 5 dats1 = '20200508' ) \\n( id = 'F' num1 = 8 dats1 = '20200509' ) ) ). \\n\\ \\nSELECT \\n FROM demo\_expressions \\n FIELDS \\n MEDIAN( num1 ) AS median\_value \\n INTO @FINAL(result). FINAL(n) = 9. \\n\\ \\nDELETE FROM demo\_expressions. \\n\\ \\nINSERT demo\_expressions FROM TABLE @( VALUE #( \\n FOR i = 0 UNTIL i > n \\n ( id = CONV #( i ) num1 = i ) ) ). \\n\\ \\nSELECT MIN( num1 ) AS min, MAX( num1 ) AS max \\n FROM demo\_expressions \\n INTO (@FINAL(min),@FINAL(max)). \\n\\ \\nASSERT min = 0. \\nASSERT max = n. FINAL(n) = 9. \\n\\ \\nDELETE FROM demo\_expressions. \\n\\ \\nINSERT demo\_expressions FROM TABLE @( VALUE #( \\n FOR i = 0 UNTIL i > n \\n ( id = CONV #( i ) num1 = i ) ) ). \\n\\ \\nSELECT SUM( num1 ) \\n FROM demo\_expressions \\n INTO (@FINAL(sum)). \\n\\ \\nASSERT sum = ( n \* ( n + 1 ) ) / 2. SELECT \\n FROM demo\_employees \\n FIELDS \\n AVG( salary as dec( 10,2 ) ) AS average, \\n STDDEV( CAST( salary AS D34N ) ) AS stddev, \\n VAR( CAST( salary AS D34N ) ) AS variance \\n INTO @FINAL(result). DELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM TABLE @( \\nVALUE #( \\n( id = 'A' num1 = 1 num2 = 2 ) \\n( id = 'B' num1 = 2 num2 = 4 ) \\n( id = 'C' num1 = 3 num2 = 8 ) \\n( id = 'D' num1 = 4 num2 = 16 ) ) ). \\n\\ \\nSELECT \\n CORR( num1,num2 ) AS corr, \\n CORR\_SPEARMAN( num1, num2 ) AS corr\_spearman \\n FROM demo\_expressions \\n INTO @FINAL(result). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nout->next\_section( 'Without TO\_CLOB' ). \\nTRY. \\n SELECT arbgb, STRING\_AGG( text,' - ' ) AS texts \\n FROM t100 \\n WHERE sprsl = 'E' \\n GROUP BY arbgb \\n ORDER BY arbgb \\n INTO TABLE @DATA(t100\_texts) \\n UP TO 100 ROWS. \\n out->write( t100\_texts ). \\n CATCH cx\_sy\_open\_sql\_db INTO FINAL(exc1). \\n out->write( exc1->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->next\_section( 'With TO\_CLOB' ). \\nTRY. \\n SELECT arbgb, to\_clob( STRING\_AGG( text,' - ' ) ) AS texts \\n FROM t100 \\n WHERE sprsl = 'E' \\n GROUP BY arbgb \\n ORDER BY arbgb \\n INTO TABLE @t100\_texts \\n UP TO 100 ROWS. \\n out->write( t100\_texts ). \\n CATCH cx\_sy\_open\_sql\_db INTO FINAL(exc2). \\n out->write( exc2->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->display( ). SELECT COUNT( DISTINCT carrid ) \\n FROM spfli \\n WHERE cityto = 'NEW YORK' \\n INTO @FINAL(count). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_expressions. \\nINSERT demo\_expressions \\n FROM TABLE @( VALUE #( \\n FOR i = 1 UNTIL i > 10 ( id = CONV #( i ) num1 = i ) ) ). \\n\\ \\nSELECT FROM demo\_expressions \\n FIELDS \\n COUNT( \\n CASE WHEN num1 < 4 THEN 'X' \\n WHEN num1 BETWEEN 4 AND 7 THEN 'Y' END ) AS cnt, \\n COUNT( DISTINCT \\n CASE WHEN num1 < 4 THEN 'X' \\n WHEN num1 BETWEEN 4 AND 7 THEN 'Y' END ) AS cntdist, \\n COUNT(\*) AS cntstar \\n INTO TABLE @FINAL(result). \\n\\ \\nout->display( result ). **\-** [`agg_exp`](ABAPSELECT_AGGREGATE.html) \\ [`win_exp`](ABAPSELECT_OVER.html) [`HIERARCHY_DESCENDANTS_AGGREGATE`](ABENSELECT_HIERARCHY_DESC_AGG.html) [`HIERARCHY_ANCESTORS_AGGREGATE`](ABENSELECT_HIERARCHY_ANCS_AGG.html)\\ `AVG` x x x x `MEDIAN` x x - - `MAX` x x x x `MIN` x x x x `SUM` x x x x `PRODUCT` - - - x `STDDEV` x x - - `VAR` x x - - `CORR` x x - - `CORR_SPEARMAN` x x - - `STRING_AGG` x - - x `COUNT` x x x x `COUNT(*)` x x x x `GROUPING` x - - - `ALLOW_PRECISION_LOSS` x - - - abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abapselect\_aggregate.html