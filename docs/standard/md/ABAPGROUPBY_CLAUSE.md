---
title: "ABAPGROUPBY_CLAUSE"
description: |
  ABAPGROUPBY_CLAUSE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGROUPBY_CLAUSE.htm"
abapFile: "ABAPGROUPBY_CLAUSE.html"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "ABAPGROUPBY", "CLAUSE"]
---

[Short Reference](ABAPSELECT_SHORTREF.html)

``... GROUP BY \{\ \{\ [`sql_exp1`](ABAPSQL_EXPR.html), [`sql_exp2`](ABAPSQL_EXPR.html) ...                   [`grouping_sets1`](ABAPGROUPING_SETS_CLAUSE.html), [`grouping_sets2`](ABAPGROUPING_SETS_CLAUSE.html), ...\}\               | (grouping_syntax) \} ...``

[1. `... sql_exp1, sql_exp2, ...`](#ABAP_ADDITION_1@3@)

[2. `... grouping_sets1, grouping_sets2, ...`](#ABAP_ADDITION_2@3@)

[3. `... (grouping_syntax)`](#ABAP_ADDITION_3@3@)

The addition `GROUP BY` combines groups of rows of the result set of a [query](ABENASQL_QUERY_GLOSRY.html) into one row. After `GROUP BY`, the grouping criteria are specified statically or dynamically. The static specification is a comma-separated list of the following:

The order of the SQL expressions or grouping sets within the comma-separated list is not important. The dynamic specification is as a parenthesized data object `grouping_syntax`.

If used, `GROUP BY` demands that only individual elements [`col_spec`](ABAPSELECT_CLAUSE_COL_SPEC.html) and not all the columns are specified in the [`SELECT` list](ABAPSELECT_LIST.html) using `*`. If `GROUP BY` is used, all columns that are specified directly after `SELECT` or as an argument of an [SQL expression](ABAPSQL_EXPR.html) and not as the argument of an [aggregate function](ABENAGGREGATE_FUNCTION_GLOSRY.html), except the [grouping function](ABENGROUPING_FUNCTION.html), must be specified in an [aggregate expression](ABAPSELECT_AGGREGATE.html). This means that columns not specified after `GROUP BY` can only be specified after `SELECT` as the argument of an aggregate function of an aggregate expression, with the exception of the grouping function. The aggregate expressions determine how the content of these columns is determined in the combined row from the content of all the rows of a group. For the grouping function [`GROUPING`](ABENGROUPING_FUNCTION.html), the column that is specified as its argument must be listed after `GROUP BY`.

The SQL expressions specified after `GROUP BY` cannot have the type `STRING`, `RAWSTRING`, `LCHR`, `LRAW`, or `GEOM_EWKB`.

Specifies SQL expressions whose result is used for grouping. A group is formed by the rows that have the same result in all SQL expressions `sql_exp1`, `sql_exp2`, ... Every [SQL expression](ABAPSQL_EXPR.html) specified after `GROUP BY` must also be specified somewhere in the [`SELECT` list](ABAPSELECT_LIST.html), with identical spelling. When specifying individual columns [`col`](ABENABAP_SQL_COLUMNS.html), the same column names as in the [`SELECT` list](ABAPSELECT_LIST.html) must be specified. It is not possible to specify alias names defined with [`AS`](ABAPSELECT_LIST.html).

When a column [`col`](ABENABAP_SQL_COLUMNS.html) is specified as the operand of an SQL expression after `GROUP BY`, the effect on the interaction with the `SELECT` list is the same as specifying the column individually. A column that is not the argument of an aggregate function in the `SELECT` list can be specified either individually after `GROUP BY` or as the operand of an SQL expression. If a column like this is specified as the operand of an SQL expression, it does not need to be specified individually.

All [SQL expressions](ABAPSQL_EXPR.html), except for [aggregate expressions](ABAPSELECT_AGGREGATE.html) and [window expressions](ABAPSELECT_OVER.html), possible in the `SELECT` list can be specified after `GROUP BY`, with the following restrictions:

The rows of the DDIC database table `SFLIGHT` that have the same content in column `CARRID` are combined. The lowest and highest values in column `PRICE` are determined for each of these groups and placed into the combined row.

Grouping after a concatenation of the columns `CARRID` and `CONNID`.

[`SELECT`, `GROUP BY` for SQL expressions](ABENSQL_EXPR_WITH_GROUP_BY_ABEXA.html)

`GROUPING SETS` is an addition of the `GROUP BY` clause that can be used to define multiple grouping sets `grouping_sets1,`\\ `grouping_sets2, ...` under a `GROUP BY` clause. The grouping sets are aggregated separately and grouped in a result set. For more information, see [`SELECT - GROUP BY, grouping_sets`](ABAPGROUPING_SETS_CLAUSE.html).

As an alternative to specifying columns statically, a parenthesized data object `grouping_syntax` can be specified, which either contains the syntax of the list of SQL expressions (with the exception of [host expressions](ABENHOST_EXPRESSION_GLOSRY.html)) or is initial when the statement is executed. The same applies to `grouping_syntax` as when specifying columns dynamically as a [`SELECT` list](ABAPSELECT_LIST.html).

If the content of `grouping_syntax` is initial, either all the rows or no rows are grouped together. The columns in the [`SELECT` list](ABAPSELECT_LIST.html) must then be specified either solely as arguments of aggregate functions or only directly. If not, the catchable exception `CX_SY_OPEN_SQL_DB` is raised. Invalid syntax raises a catchable exception from the class `CX_SY_DYNAMIC_OSQL_ERROR`.

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

After entering any column of DDIC database table `SPFLI` the selected data is organized according to this column, which means that similar entries are combined. In `count`, the number of flight connections for the different values in column `spflicol` is determined. If, for example, `CITYFROM` is entered as `spflicol`, the number of destinations for each departure city is determined in `count`. Various possible exceptions are handled in `TRY` control structures. In particular, user input is checked for validity using a method of the class `CL_ABAP_DYN_PRG`.

-   [SQL expressions](ABENSQL_EXPRESSION_GLOSRY.html)\\ `sql_exp1`, `sql_exp2`, ...
-   [Grouping sets](ABENGROUPING_SET_GLOSRY.html)\\ `grouping_sets1`, `grouping_sets2`, ...

-   `GROUP BY` cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). The ABAP SQL statement bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   Using `GROUP BY` and aggregate functions ensures that aggregates and groups are already built by the database system, not AS ABAP. This can considerably reduce the volume of data that has to be transported from the database to AS ABAP.

-   Each expression must contain at least one column of a [data source](ABAPSELECT_DATA_SOURCE.html) as its operand.
-   The expressions cannot contain any [host variables](ABENABAP_SQL_HOST_VARIABLES.html) or ABAP literals as operands, with the exception of statically known constants or literals with the data type `i` or with a flat character-like type. Only constants defined by [`CONSTANTS`](ABAPCONSTANTS.html) are allowed and no [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html).

-   If a grouping criterion specified after `GROUP BY` contains [null values](ABENNULL_VALUE_GLOSRY.html) in the result set, these values are not part of the group of ABAP-specific initial values and form a distinct group instead.
-   If individual columns [`col`](ABENABAP_SQL_COLUMNS.html) that are grouped in the `SELECT` list in an [SQL expression](ABAPSQL_EXPR.html) are specified directly after `GROUP BY`, multiple groups with the same result can arise. To prevent this, the columns must be grouped after the expression.
-   The spelling of the expressions after `GROUP BY` and in the `SELECT` list must be identical. An identical result is not enough. An expression `col1 + col2` after `GROUP BY` does not have the same semantics as an expression `col2 + col1` in the `SELECT` list. An alias name defined with [`AS`](ABAPSELECT_LIST.html) in the `SELECT` list, however, is ignored.
-   An SQL expression that is specified more than once outside of an aggregate expression in the `SELECT` list does not need to be specified more than once after `GROUP BY`. An SQL expression can be specified more than once after `GROUP BY` but has the same effect has specifying the expression once.
-   After `GROUP BY`, it is not possible to specify, instead of an expression, the alias name defined in the rule with [`AS`](ABAPSELECT_LIST.html) for the expression.
-   Instead of using commas, only direct column specifications `col1`, `col2`, ... in an [obsolete form](ABENABAP_SQL_LISTS_OBSOLETE.html), can be separated using blanks. Commas must be specified, however, in the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check from ABAP release 7.40, SP05.
-   If specified columns contain a [path expression](ABENABAP_SQL_PATH.html) for [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) or [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html), these must be the same in the `GROUP BY` clause and in the `SELECT` list, whereby parameter passing and attribute specifications are also compared.
-   If SQL expressions other than direct column specifications are specified after `GROUP BY`, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP08.html), which handles the statement more strictly than the regular syntax check.

-   The conditions for specifying SQL expressions after `GROUP BY` are particularly relevant for dynamic tokens and a check at runtime verifies whether the expressions match those in the `SELECT` list.
-   No host variables or ABAP literals can usually be specified in SQL expressions in `grouping_syntax`. In particular, static attributes or constants of a class cannot be accessed from outside if the class has a static constructor and the constructor was not yet executed.
-   The class `CL_ABAP_DYN_PRG` contains methods that support the creation of correct and secure dynamically specified columns.
-   The literals of the dynamically specified ABAP SQL statements can span multiple rows of a token specified dynamically as an internal table.
-   When specified dynamically, ABAP SQL statements can contain the comment characters [`*`](ABENCOMMENT.html) and [`"`](ABENCOMMENT.html) as follows:

-   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character `"`.
-   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character `*`. In the row, all content is ignored from the first comment character `"`.

-   Comment characters placed within literals are, however, part of the literal.
-   The dynamic forms of the statements [`WITH`](ABAPWITH.html) and [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) enable fully dynamic `SELECT` statements, where all clauses except the `INTO` clause and the ABAP-specific additions can be specified in one dynamic token.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT FROM sflight \\n FIELDS carrid, \\n MIN( price ) AS min\_price, \\n MAX( price ) AS max\_price \\n GROUP BY carrid \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT FROM sflight \\n FIELDS CONCAT( carrid, connid ) AS key, \\n MIN( seatsocc ) AS min\_seatsocc, \\n MAX( seatsocc ) AS max\_seatsocc \\n GROUP BY CONCAT( carrid, connid ) \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA spflicol TYPE c LENGTH 20 VALUE 'CITYFROM'. \\ncl\_demo\_input=>request( CHANGING field = spflicol ). \\n\\ \\nTRY. \\n spflicol = \\n cl\_abap\_dyn\_prg=>check\_column\_name( to\_upper( spflicol ) ). \\n CATCH cx\_abap\_invalid\_name. \\n out->display( 'Not allowed' ). \\n RETURN. \\nENDTRY. \\n\\ \\nDATA dref TYPE REF TO data. \\nTRY. \\n FINAL(name) = \`SPFLI-\` && spflicol. \\n CREATE DATA dref TYPE (name). \\n CATCH cx\_sy\_create\_data\_error. \\n out->display( 'Not possible' ). \\n RETURN. \\nENDTRY. \\n\\ \\nDATA count TYPE i. \\nFINAL(fieldlist) = spflicol && \`, count(\*)\`. \\nTRY. \\n SELECT DISTINCT (fieldlist) \\n FROM spfli \\n GROUP BY (spflicol) \\n ORDER BY (spflicol) \\n INTO (@dref->\*, @count). \\n out->write( |\\{ dref->\* \\} \\{ \\n count \\}| ). \\n ENDSELECT. \\n CATCH cx\_sy\_dynamic\_osql\_error. \\n out->display( 'Not possible' ). \\n RETURN. \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html