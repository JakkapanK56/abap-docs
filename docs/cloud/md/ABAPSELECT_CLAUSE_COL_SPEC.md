---
title: "ABAPSELECT_CLAUSE_COL_SPEC"
description: |
  ABAPSELECT_CLAUSE_COL_SPEC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSELECT_CLAUSE_COL_SPEC.htm"
abapFile: "ABAPSELECT_CLAUSE_COL_SPEC.html"
keywords: ["select", "insert", "do", "if", "case", "data", "types", "internal-table", "field-symbol", "ABAPSELECT", "CLAUSE", "COL", "SPEC"]
---

``... [`sql_exp`](ABAPSQL_EXPR.html) ...``

[1. `... col`](#ABAP_ALTERNATIVE_1@2@)

[2. `... literal | @dobj | @( expr )`](#ABAP_ALTERNATIVE_2@2@)

[3. `... sql_func | cds_scalar_func | sql_arith | sql_cast | sql_string | sql_case`](#ABAP_ALTERNATIVE_3@2@)

[4. `... sql_agg`](#ABAP_ALTERNATIVE_4@2@)

[5. `... sql_win`](#ABAP_ALTERNATIVE_5@2@)

Specifies columns in the [`SELECT` list](ABAPSELECT_LIST.html) of the [`SELECT` clause](ABAPSELECT_CLAUSE.html) of a [query](ABENASQL_QUERY_GLOSRY.html). The specified columns are used to construct the result set of a [query](ABENASQL_QUERY_GLOSRY.html) from individual columns. Each column is specified using an [SQL expression](ABENSQL_EXPRESSION_GLOSRY.html)\\ [`sql_exp`](ABAPSQL_EXPR.html). Any SQL expressions and [parentheses](ABENSQL_EXP_PARENTHESES.html) can be used.

For each SQL expression a value is calculated from its arguments. Its data type that depends on the expression and places this value in the column of the result set. The corresponding data host variable after `INTO` or `APPENDING` must be a [suitable](ABENSELECT_INTO_CONVERSION.html) choice.

To be able to evaluate the result of SQL expressions except for individual column specifications in [`INTO|APPENDING CORRESPONDING FIELDS`](ABAPINTO_CLAUSE.html), [`INTO ...@DATA(...)`](ABAPINTO_CLAUSE.html), and [`ORDER BY`](ABAPORDERBY_CLAUSE.html), an alias name must be defined using [`AS`](ABAPSELECT_LIST.html), which is then used by these additions.

The following sections discuss the special characteristics of the various SQL expressions.

[Certain SQL expressions](ABENSQL_ENGINE_EXPR.html) can be calculated by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). If any other SQL expressions are used, [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) is bypassed and internal tables accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

Direct specification [`col`](ABENABAP_SQL_COLUMNS.html) of an individual column of a [data source](ABAPSELECT_DATA_SOURCE.html) as an [elementary SQL expression](ABENSQL_ELEM.html). If the name of a data source is specified directly, its content is placed directly in the associated column of the result set. The data type of a column in the result set is the data type of the corresponding component in the ABAP Dictionary.

The following special conditions apply:

Direct specification of the columns `CARRID`, `CARRNAME`, and `URL` of the DDIC database table `SCARR`.

Specification of a literal [`literal`](ABENABAP_SQL_LITERALS.html), host variable [`@dobj`](ABENABAP_SQL_HOST_VARIABLES.html), host expression [`@( expr )`](ABENABAP_SQL_HOST_EXPRESSIONS.html), or as an [elementary SQL expression](ABENSQL_ELEM.html). These are values of the ABAP program that are determined before the query is executed in ABAP and are transferred to the database system, where they are inserted into the result set as a column. A column defined in this way contains the same value in all rows of the result set.

Specification of the constant `abap_true` from the type pool `ABAP` to determine whether a specific row exists.

Specification of a non-elementary SQL expression in the form of a built-in function [`sql_func`](ABENSQL_BUILTIN_FUNC.html), of a [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html)\\ `cds_scalar_func` of an arithmetic expression [`sql_arith`](ABENSQL_ARITH.html), cast expression [`sql_cast`](ABENSQL_CAST.html), string expression [`sql_string`](ABENSQL_STRING.html), or case distinction [`sql_case`](ABENSQL_CASE.html). The values of these expressions are calculated in the database. The rules and restrictions described for these apply. The values of the data source columns specified as operands are the selected values of the current row.

Use of a non-elementary SQL expression as a column specification.

Specifies an aggregate expression [`sql_agg`](ABAPSELECT_AGGREGATE.html), in which a column of a [data source](ABAPSELECT_DATA_SOURCE.html) or an [SQL expression](ABAPSQL_EXPR.html) is specified as an argument of an [aggregate function](ABENAGGREGATE_FUNCTION_GLOSRY.html). An aggregate function uses the values from multiple rows of the specified column or SQL expression to calculate a single value with a data type that depends on the aggregate function, and then places this value in the column of the result set.

The following rules apply when aggregate expressions are used in the `SELECT` list:

Determination of the number of rows in the DDIC database table `SCARR`.

Specifies a window expression [`sql_win`](ABAPSELECT_OVER.html) in which a [window function](ABENWINDOW_FUNCTION_GLOSRY.html) is applied to a [window](ABENWINDOW_GLOSRY.html) of the result set. Window expressions can only be specified in the `SELECT` list.

-   If required, the specified column can contain a [path expression](ABENABAP_SQL_PATH.html) for [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) or [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html). If the addition `CORRESPONDING` or an inline declaration `@DATA(...)` or `@FINAL(...)` is used in the [`INTO`](ABAPINTO_CLAUSE.html) clause, any columns specified using a path expression must have an alias name `alias` defined using [`AS`](ABAPSELECT_LIST.html).
-   If the value of a column of type `LRAW` or `LCHR` is read, the associated length field of type `INT2` or `INT4` must also be read and specified in the list in front of the column of type `LRAW` or `LCHR`.

-   A column can be specified more than once.

-   The restrictions on [elementary SQL expressions](ABENSQL_ELEM.html) apply with respect to the data types that can be used. More specifically, any host variables specified as field symbols or formal parameters cannot have generic data types.
-   It can be a good idea to specify a literal, a host variable, or a host expression as an elementary expression of a `SELECT` list to assign a defined value to a column of a result set that is not read from the database.
-   Specifying a constant or a literal as the only element of a `SELECT` list is one way of defining whether data in a selection exists without having to read data from the database.

-   If aggregate expressions are used, all column names that are not specified within an aggregate expression must be specified after the addition [`GROUP BY`](ABAPGROUPBY_CLAUSE.html). The aggregate functions evaluate the content of the groups defined by `GROUP BY` in the database system and pass the result to the merged rows of the result set.
-   If the addition `FOR ALL ENTRIES` is used before [`WHERE`](ABAPWHERE.html), no aggregate expressions can be used except `COUNT( * )`. In cases like these, the aggregate expression is not evaluated in the database, but is emulated on the AS ABAP.
-   If columns are only used within aggregate expressions in the `SELECT` list, the result set has just one row and the addition `GROUP BY` is not required. If a non-table-like target area is specified after `INTO` for aggregated-only columns and without the addition `GROUP BY` after a single `SELECT` statement, that is, not in the case of multiple statements joined using [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), or [`EXCEPT`](ABAPUNION.html), the statement `ENDSELECT` cannot be specified, as is also the case when using the addition `SINGLE`. If the aggregate expression `COUNT( * )` is not used, an internal table can be specified after `INTO` regardless of the addition `GROUP BY` and the first row of this table filled.
-   In the case of exclusively aggregated columns without `GROUP BY`, the result set also contains a row if no data is found in the database. If `COUNT( * )` is used, the column in question contains the value 0. The columns of the other aggregate functions contain initial values. This row is assigned to the data object specified after `INTO` and, unless `COUNT( * )` is used only statically and an alias name is not specified, `sy-subrc` is set to 0 and `sy-dbcnt` is set to 1.
-   If `COUNT( * )` is used as the only static column specified and an alias name is not specified using [`AS`](ABAPSELECT_LIST.html) and `GROUP BY` is not specified at the same time, the addition `INTO` can be omitted. The number of selected rows can then be taken from the system field `sy-dbcnt`. If more than 2,147,483,647 rows are selected, `sy-dbcnt` contains the value -1. If no data is found on the database, `sy-dbcnt` is set to 0 and `sy-subrc` is set to 4.

-   Aggregate expressions cannot be specified together with [`data_source~*`](ABAPSELECT_LIST.html) in the comma-separated list.
-   If [aggregate expressions](ABAPSELECT_AGGREGATE.html) are used as operands of SQL expressions, the same rules apply as if they were specified directly.

SELECT FROM scarr \\n FIELDS carrid, carrname, url \\n INTO TABLE @FINAL(itab). SELECT SINGLE \\n FROM scarr \\n FIELDS @abap\_true \\n WHERE carrid = '...' \\n INTO @FINAL(flag). \\nIF flag IS INITIAL. \\n RETURN. \\nENDIF. SELECT CONCAT\_WITH\_SPACE( carrname && ' (' && carrid && '),', url, 1 ) \\n FROM scarr \\n INTO TABLE @FINAL(itab). SELECT FROM scarr \\n FIELDS COUNT( \* ) \\n INTO @FINAL(wa). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapselect\_clause.html abapselect\_list.html