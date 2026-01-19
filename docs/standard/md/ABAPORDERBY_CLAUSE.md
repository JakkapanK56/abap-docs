---
title: "ABAPORDERBY_CLAUSE"
description: |
  ABAPORDERBY_CLAUSE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPORDERBY_CLAUSE.htm"
abapFile: "ABAPORDERBY_CLAUSE.html"
keywords: ["select", "loop", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "ABAPORDERBY", "CLAUSE"]
---

[Short Reference](ABAPSELECT_SHORTREF.html)

``... ORDER BY        \{\ \{PRIMARY KEY\}\        |\ \{\ \{[`col1`](ABENABAP_SQL_COLUMNS.html)|a1|n1|[`sql_exp1`](ABAPSQL_EXPR.html)\}\ [`[col_additions]`](ABAPORDERBY_CLAUSE_ADDITIONS.html),            \{[`col2`](ABENABAP_SQL_COLUMNS.html)|a2|n2|[`sql_exp2`](ABAPSQL_EXPR.html)\}\ [`[col_additions]`](ABAPORDERBY_CLAUSE_ADDITIONS.html), ...\}\        | (column_syntax) \} ...``

[1. `... ORDER BY PRIMARY KEY`](#ABAP_ALTERNATIVE_1@2@)

[2. `... ORDER BY \{col1|a1|n1|sql_exp1\}\ [col_additions],`](#ABAP_ALTERNATIVE_2@2@)

[`\{col2|a2|n2|sql_exp2\}\ [col_additions], ...`](#ABAP_ALTERNATIVE_2@2@)

[3. `... ORDER BY (column_syntax)`](#ABAP_ALTERNATIVE_3@2@)

The addition `ORDER BY` sorts a multirow result set of a [query](ABENASQL_QUERY_GLOSRY.html) by the content of the specified column. The order of the rows in the result set is undefined with respect to all columns that are not listed after `ORDER BY` and can be different in repeated executions of the same `SELECT` statement. If the addition `ORDER BY` is not specified, the order of the rows in the result set is undefined with respect to all its columns.

The following restrictions apply when using the addition `ORDER BY` with other additions:

The result set is sorted in ascending order by the content of the [primary key](ABENPRIMARY_KEY_GLOSRY.html) of a single [data source](ABAPSELECT_DATA_SOURCE.html). The following restrictions apply:

If `ORDER BY PRIMARY KEY` is used with the addition [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) in front of the [`WHERE` condition](ABAPWHERE.html), all fields of the primary key, except for the client column in client-dependent table, must be in the [`SELECT` list](ABAPSELECT_LIST.html).

Reading of the data from the DDIC database table `SPFLI` for carrier Lufthansa sorted by the complete primary key.

[1. `... col|a|n`](#ABAP_VARIANT_1@1@)

[2. `... sql_exp`](#ABAP_VARIANT_2@1@)

With this variant, columns or expressions can be specified in a comma-separated list as a sort criterion. Optional additions [`col_additions`](ABAPORDERBY_CLAUSE_ADDITIONS.html) determine the sort direction and the handling of [null values](ABENNULL_VALUE_GLOSRY.html).

Column specification via column name, alias, or position:

Reading of the data from the DDIC database table `SFLIGHT` for Lufthansa flight 0400, sorted by the third key field, the flight date, in descending order.

The `SELECT` statements show usages of `ORDER BY n`. A literal or a constant of type `i` with value *3* order the rows descending by the third column `CURRCODE` of the result set.

`sql_exp1`, `sql_exp2`, ..., can be used to specify [SQL expressions](ABENSQL_EXPRESSION_GLOSRY.html). [Alias names](ABAPSELECT_LIST.html) can be used as operands of the SQL expressions.

A SQL expression without a column specification as an operand. has no effect.

The second `SELECT` statement shows the ordering by a SQL expression. The result is the same as when ordering by an alias for the same expression in the `SELECT` list.

Reading of data from the DDIC database table `SFLIGHT` by sorting the result table by the overall number of rows for each carrier using an aggregate expression.

Bad examples of how to order by `sql_exp`. In both cases, the expressions do not depend on the content of the data source and the `ORDER BY` clause has no effect. While in the first case, the SQL expression might be mixed up with a dynamic column specification, the second case looks like a position specification, but it is not. **Note:** If *n* were declared with *CONSTANTS* instead of *DATA*, it were a position specification.

As an alternative to specifying columns statically, a parenthesized data object `column_syntax` can be specified that contains the syntax of `PRIMARY KEY` or the list of columns or is initial when the statement is executed.

The same applies to `column_syntax` as when specifying the [`SELECT` list](ABAPSELECT_LIST.html) dynamically. If the content of `column_syntax` is initial, the addition `ORDER BY` is ignored. Invalid syntax raises a catchable exception from the class `CX_SY_DYNAMIC_OSQL_ERROR`.

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

Dynamic sort by two columns that can be specified.

[Dynamic `ORDER BY` Clause](ABENDYNAMIC_ORDER_BY_ABEXA.html)

-   The addition `ORDER BY` cannot be used with the addition [`SINGLE`](ABAPSELECT_SINGLE.html).
-   All columns specified after `ORDER BY` must also be specified after the addition [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) at the same time.
-   If [aggregate functions](ABENAGGREGATE_FUNCTION_GLOSRY.html) are specified after `SELECT`, all columns that are specified after `ORDER BY` and that do not have an alias name for an aggregate function must also be specified after `SELECT` and after [`GROUP BY`](ABAPGROUPBY_CLAUSE.html).
-   If an alias name defined using [`AS`](ABAPSELECT_LIST.html) is used for sorting, this name must be unique and cannot be the same name as a column to which no alias name is assigned.
-   If the addition [`DISTINCT`](ABAPSELECT_CLAUSE.html) is used, only those columns can be specified after `ORDER BY` that are also listed after `SELECT`. The exception to this rule is the [client column](ABENCLIENT_COLUMN_GLOSRY.html) when `PRIMARY KEY` is specified. If not, other columns can also be used, as long as there are no restrictions by other additions such as [`GROUP BY`](ABAPGROUPBY_CLAUSE.html).
-   If the addition [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) is used in front of the [`WHERE` condition](ABAPWHERE.html), `ORDER BY` can only be used with the addition `PRIMARY KEY` and all columns of the primary key, except the client column of client-dependent tables, must be specified in the [`SELECT` list](ABAPSELECT_LIST.html).

-   The data is sorted in the database system, once all other actions are completed, such as determining the hit list using `WHERE`, calculating aggregate functions, and grouping using `GROUP BY`. Only the additions [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html) and [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) are executed on the sorted hits.
-   Sorts in the database system are performed in accordance with the rules for [size comparisons](ABENWHERE_LOGEXP_COMPARE.html) and the restrictions with regard to platform dependencies apply. More specifically, sorts after character-like values can be platform-dependent under certain circumstances and produce different results than ABAP sorts.
-   If a sorted resulting set is assigned to a sorted internal table, the internal table is sorted again according to the sorting instructions.

-   The addition `PRIMARY KEY` cannot be specified if a [join expression](ABENJOIN_EXPRESSION_GLOSRY.html) or a [path expression](ABENABAP_SQL_PATH.html) is used in the `SELECT` statement to select the data of multiple data sources.
-   The addition `PRIMARY KEY` cannot be specified in a [subquery](ABENSUBQUERY_GLOSRY.html).
-   The addition `PRIMARY KEY` cannot be specified for a result set joined with [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), or [`EXCEPT`](ABAPUNION.html).
-   The addition `PRIMARY KEY` cannot be used when accessing a common table expression defined using [`WITH`](ABAPWITH.html).
-   The addition `PRIMARY KEY` cannot be specified when [views](ABENVIEW_GLOSRY.html) that contain exactly the same number of key fields as view fields are accessed. If a [DDIC database view](ABENDATABASE_VIEW_GLOSRY.html) like this is specified after `FROM` in the dynamically specified `source_syntax`, an exception is raised only in the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check from ABAP release 7.40, SP05. In all other cases, the result set is sorted by all columns.
-   If a [CDS](ABENCDS_ENTITY_GLOSRY.html) entity is sorted by the `PRIMARY KEY`, its key elements must be defined at the start of the structure without any gaps.

-   When a comma-separated list is used, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP05.html), which handles the statement more strictly than the regular syntax check.
-   Instead of using commas, blanks can be used to separate columns specified in an [obsolete form](ABENABAP_SQL_LISTS_OBSOLETE.html). Commas must be used, however, in the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check from ABAP release 7.40, SP05.

-   With `col1`, `col2`, ..., any columns of the [`SELECT`](ABAPSELECT_LIST.html) list can be specified directly by their [column names](ABENABAP_SQL_COLUMNS.html).
-   With `a1`, `a2`, ..., columns can be specified using alias names defined with [`AS`](ABAPSELECT_LIST.html) in the `SELECT` list. This is necessary if sorting is to be done by columns of the result set that are defined in the `SELECT` list using non-elementary [SQL expressions](ABAPSQL_EXPR.html).
-   With `n1`, `n2`, ..., columns can be specified via their position in the result set as defined by the [`SELECT` list](ABAPSELECT_LIST.html). If `n` is a [literal](ABENABAP_SQL_LITERALS.html) or a [host constant](ABENHOST_CONSTANT_GLOSRY.html) with an [integer type](ABENINTEGER_TYPE_GLOSRY.html) that contains a number between 1 and the number of columns in the result set, the sort criterion is the respective column of the result set. If the number is outside this range, a syntax error occurs.

-   Column specifications `col1`, `col2`, ... can contain a [path expression](ABENABAP_SQL_PATH.html) for [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) or [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html).
-   Alias names specified in the `SELECT` list must be handled with care. Especially, non-alphanumeric characters should be prevented. In the following example, the sorting is carried out based on three columns: 1, +, 1: `SELECT col1 as 1 col2 as + FROM ... ORDER BY 1 + 1 ...`
-   The column specified by `n` is independent from the addition `CORRESPONDING FIELDS` of the [`INTO`](ABAPINTO_CLAUSE.html) clause. The columns of the result set are counted independently from their assignment to the target area.
-   If `n` is a variable or does not have an integer type, it does not specify a position but is handled as an SQL expression `sql_exp` that has no effect.
-   When accessing [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html) data sources with `*` or `data_source~*` in the [select list](ABAPSELECT_LIST.html), the [client column](ABENCLIENT_COLUMN_GLOSRY.html) is part of the result set and relevant for counting the columns for `n`.
-   The above is especially true for client-dependent [CDS DDIC-based views](ABENCDS_V1_VIEW_GLOSRY.html) when the addition [`CLIENT SPECIFIED entity~clnt`](ABAPSELECT_CLIENT_OBSOLETE.html) is used.

-   As a rule, a SQL expression should contain at least one column specification as an operand.
-   A single literal or [host constant](ABENHOST_CONSTANT_GLOSRY.html) with an [integer type](ABENINTEGER_TYPE_GLOSRY.html) is not handled as a SQL expression but as a column position `n`.
-   Columns that are specified in an SQL expression used in the `ORDER BY` clause need to be specified in the `GROUP BY` clause. If the same SQL expression is specified in the `GROUP BY` clause, the columns do not need to be specified there again.
-   Alias names that are used in an SQL expression in the `ORDER BY` clause do not need to be specified in the `GROUP BY` clause.
-   If only aggregate functions are specified after `SELECT` and in the `ORDER BY` clause, a `SELECT` statement that opens a loop must not be closed using the statements `ENDSELECT` or `ENDWITH` when reading into a non-table-like [target area](ABAPINTO_CLAUSE.html).
-   If a SQL expression appears identically in the `SELECT` list and behind `ORDER BY`, it makes no difference whether its alias from the `SELECT` list or the SQL expression is listed in the `ORDER BY` clause. But using SQL expressions directly in the `ORDER BY` clause allows ordering independent from the appearance in the `SELECT` list.
-   Currently, SQL expressions are not supported in the `ORDER BY` clause of `SELECT` statements using [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), and [`EXCEPT`](ABAPUNION.html).
-   SQL expressions are handled by the SQL parser introduced with ABAP release 7.40, SP02. They can only be used in queries where the corresponding syntax is recognizable, e. g. by `@` in front of host variables, by comma-separated lists, or by queries in CTEs.

-   The class `CL_ABAP_DYN_PRG` contains methods that support the creation of correct and secure dynamically specified columns.
-   The literals of the dynamically specified ABAP SQL statements can span multiple rows of a token specified dynamically as an internal table.
-   When specified dynamically, ABAP SQL statements can contain the comment characters [`*`](ABENCOMMENT.html) and [`"`](ABENCOMMENT.html) as follows:

-   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character `"`.
-   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character `*`. In the row, all content is ignored from the first comment character `"`.

-   Comment characters placed within literals are, however, part of the literal.
-   The dynamic forms of the statements [`WITH`](ABAPWITH.html) and [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) enable fully dynamic `SELECT` statements, where all clauses except the `INTO` clause and the ABAP-specific additions can be specified in one dynamic token.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM spfli \\n WHERE carrid = 'LH' \\n ORDER BY PRIMARY KEY \\n INTO TABLE @FINAL(result). \\n\\ \\nout->display( result ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM sflight \\n WHERE carrid = 'LH' AND \\n connid = '0400' \\n ORDER BY fldate DESCENDING \\n INTO TABLE @FINAL(result). \\n\\ \\nout->display( result ). SELECT carrid, carrname, currcode \\n FROM scarr \\n ORDER BY 3 DESCENDING \\n INTO TABLE @DATA(result1). \\n\\ \\nCONSTANTS n TYPE i VALUE 3. \\nSELECT carrid, carrname, currcode \\n FROM scarr \\n ORDER BY @n DESCENDING \\n INTO TABLE @DATA(result2). \\n\\ \\nASSERT result1 = result2. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT carrid, connid, fldate, seatsmax - seatsocc AS seatsfree \\n FROM sflight \\n WHERE carrid = 'LH' AND \\n connid = '0400' \\n ORDER BY seatsfree DESCENDING \\n INTO TABLE @FINAL(result1). \\n\\ \\nSELECT carrid, connid, fldate, seatsmax - seatsocc AS seatsfree \\n FROM sflight \\n WHERE carrid = 'LH' AND \\n connid = '0400' \\n ORDER BY seatsmax - seatsocc DESCENDING \\n INTO TABLE @FINAL(result2). \\n\\ \\nASSERT result1 = result2. \\n\\ \\nout->display( result1 ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT COUNT(\*) AS cnt, carrid FROM spfli \\n GROUP BY carrid \\n ORDER BY COUNT(\*) DESCENDING \\n INTO TABLE @FINAL(res). \\n\\ \\nout->write( res ). \\n\\ \\nout->display( ). SELECT carrid, carrname, currcode \\n FROM scarr \\n INTO TABLE @DATA(result1). \\n\\ \\n\\ \\nSELECT carrid, carrname, currcode \\n FROM scarr \\n ORDER BY 'CURRCODE' DESCENDING \\n INTO TABLE @DATA(result2). \\n\\ \\nASSERT result1 = result2. \\n\\ \\nDATA n TYPE i VALUE 3. \\nSELECT carrid, carrname, currcode \\n FROM scarr \\n ORDER BY @n DESCENDING \\n INTO TABLE @DATA(result3). \\n\\ \\nASSERT result1 = result3. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(column1) = \`carrid\`. \\nDATA(column2) = \`connid\`. \\n\\ \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = column1 \\n )->add\_field( CHANGING field = column2 )->request( ). \\n\\ \\nFINAL(column\_syntax) = column1 && \`, \` && column2. \\n\\ \\nTRY. \\n SELECT carrid, connid, cityfrom, cityto \\n FROM spfli \\n ORDER BY (column\_syntax) \\n INTO TABLE @FINAL(result). \\n out->write( result ). \\n CATCH cx\_sy\_dynamic\_osql\_semantics. \\n out->write( 'Error' ). \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html