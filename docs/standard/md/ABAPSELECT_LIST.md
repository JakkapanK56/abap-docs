---
title: "Comma-separated list with"
description: |
  The individual specifications can be combined in any way, with the exception that `data_source~` cannot be used together with aggregate expressions(ABAPSELECT_AGGREGATE.html). Defines multiple columns of the result set using `data_source~`, where `data_source` stands for an individual DDIC datab
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT_LIST.htm"
abapFile: "ABAPSELECT_LIST.html"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "ABAPSELECT", "LIST"]
---

[Short Reference](ABAPSELECT_SHORTREF.html)

`... *`\\ 
  ``|\ \{..., [`data_source`](ABAPSELECT_DATA_SOURCE.html)~*, ..., [`col_spec`](ABAPSELECT_CLAUSE_COL_SPEC.html)\ [AS alias], ...\}``\\ 
  `| (column_syntax) ...`

[1. `... *`](#ABAP_ALTERNATIVE_1@2@)

[2. `..., data_source~*, ..., col_spec [AS alias], ...`](#ABAP_ALTERNATIVE_2@2@)

[3. `... (column_syntax)`](#ABAP_ALTERNATIVE_3@2@)

`SELECT` list of the [`SELECT` clause](ABAPSELECT_CLAUSE.html) of a [query](ABENASQL_QUERY_GLOSRY.html). The specifications determine which columns are used to construct the result set of the `SELECT` statement and how their values are obtained. There are two static variants and one dynamic variant.

The `SELECT` list actually passed to the database is determined by the addition [`INTO CORRESPONDING`](ABAPINTO_CLAUSE.html). If one or more names match, all the columns for which there are no name matches are removed from the `SELECT` list implicitly and therefore from the result set as well. If there are no name matches, none of the columns are removed from the result set.

Defines all columns of the result set using `*`. The result set is constructed from all columns in the [data sources](ABAPSELECT_DATA_SOURCE.html) specified after [`FROM`](ABAPFROM_CLAUSE.html), in the order specified there. The columns of the result set inherit their names and data types from the data sources. Only a single data object can be specified after [`INTO`](ABAPINTO_CLAUSE.html) and lists of data objects cannot be specified.

Reading of all columns with multiple rows.

[1. `... data_source~* ...`](#ABAP_VARIANT_1@1@)

[2. `... col_spec [AS alias] ...`](#ABAP_VARIANT_2@1@)

Comma-separated list with

The individual specifications can be combined in any way, with the exception that `data_source~*` cannot be used together with [aggregate expressions](ABAPSELECT_AGGREGATE.html).

Defines multiple columns of the result set using `data_source~*`, where `data_source` stands for an individual DDIC database table [`dbtab`](ABAPSELECT_DATA_SOURCE.html), a DDIC view [`view`](ABAPSELECT_DATA_SOURCE.html), a [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html)\\ [`cds_entity`](ABAPSELECT_DATA_SOURCE.html), or an [internal table](ABAPSELECT_ITAB.html). The result set contains all columns of the specified data source `data_source` at the relevant positions and in the order of the columns. The names of the database sources or their alias names can be specified for `data_source` that are also specified as [`data_source`](ABAPSELECT_DATA_SOURCE.html) after [`FROM`](ABAPFROM_CLAUSE.html). A data source can also be specified more than once. If `data_source~*` is used, only a structure can be specified after [`INTO`](ABAPINTO_CLAUSE.html), no elementary data objects or lists of data objects.

The following special conditions should be noted:

Reading of the columns of two DDIC database tables in a [join](ABAPSELECT_JOIN.html) into an internal table. Two columns are read from `SCARR` and all columns are read from `SPFLI`.

[`... AS alias`](#ABAP_ONE_ADD@1@)

Definition of individual columns of the result set via specified columns [`col_spec`](ABAPSELECT_CLAUSE_COL_SPEC.html), which can be defined using any [SQL expressions](ABAPSQL_EXPR.html). The order in which the columns are specified is arbitrary and defines the order of the columns in the result set. Only if a column of the type `LCHR` or `LRAW` is specified explicitly as [`col`](ABENABAP_SQL_COLUMNS.html) must the corresponding length field also be listed directly in front of it. Different specifications can be made after [`INTO`](ABAPINTO_CLAUSE.html), the interaction of which is described by the column specified there.

Reading of two columns from a cell in the DDIC database table `SCARR`.

The addition `AS` can be used to define an alias name `alias` with a maximum of thirty characters in the result set for every specified column `col_spec`. The alias name `alias` must follow the [naming conventions](ABENNAMING_CONVENTIONS.html) for internal program names and the name `table_line` cannot be used. This is checked in [strict mode of the syntax check from ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html) .

An alias name cannot be assigned more than once and should not be the name of a column that does not have any alias names assigned to it. The alias name is used implicitly in the addition [`INTO|APPENDING CORRESPONDING FIELDS OF`](ABAPINTO_CLAUSE.html). An alias name can only be specified after [`ORDER BY`](ABAPORDERBY_CLAUSE.html). A non-unique column name used after `ORDER BY` causes a syntax error or an exception.

Display of the flight date and average fare of all customers on Lufthansa flights with flight number 0400. The alternative name `avg` of the aggregate expression is required for the [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause and the inline declaration using [`@DATA(...)`](ABAPSELECT_INTO_TARGET.html) in the [`INTO`](ABAPINTO_CLAUSE.html) clauses.

Instead of the previous two static specifications, a data object `column_syntax` in parentheses can be specified. When the statement is executed, this data object either contains the syntax shown in static cases with the exception of [host expressions](ABENHOST_EXPRESSION_GLOSRY.html) or is initial.

The data object `column_syntax` can be a character-like data object or a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) with a character-like row type. The syntax in `column_syntax` is not case-sensitive, as in the static syntax. When an internal table is specified, the syntax can be distributed across multiple rows.

If `column_syntax` is initial when the statement is executed, `select_list` is set implicitly to `*` and all columns are read.

If columns are specified dynamically without the addition `SINGLE`, the result set is always regarded as having multiple rows.

Invalid syntax raises a catchable exception from the class `CX_SY_DYNAMIC_OSQL_ERROR`.

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

All departure or destination cities of Lufthansa flights are produced, depending on whether `'CITYFROM'` or `'CITYTO'` is specified. A method of the class `CL_ABAP_DYN_PRG` is used to check whether the input values are valid.

Comment character in a dynamically specified token. The rows introduced using `*` and the content from the character `"` are ignored.

[Remove Columns from the `SELECT` List](ABENSELECT_EXCEPT_COLUMNS_ABEXA.html).

-   If multiple DDIC database tables are specified after `FROM`, it is not possible to prevent multiple columns from inheriting the same name when `*` is specified.
-   For performance reasons, only those columns that are actually needed should be specified. `*` should only be specified if the content of all columns is actually needed.
-   If the addition [`INTO CORRESPONDING`](ABAPINTO_CLAUSE.html) is used, `*` can be transformed implicitly to a list of columns for which there is a name match.
-   When an internal table [`@itab`](ABAPSELECT_DATA_SOURCE.html) with elementary row type is accessed in the [`FROM`](ABAPFROM_CLAUSE.html) clause of a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) after [`WITH`](ABAPWITH.html), `*` cannot be specified as a `SELECT` list.
-   If [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), or [`EXCEPT`](ABAPUNION.html) is used, `*` cannot be specified as a `SELECT` list.

-   `data_source~*` specifying all columns of a data source [`data_source`](ABAPSELECT_DATA_SOURCE.html) or
-   the definition of individual columns [`col_spec`](ABAPSELECT_CLAUSE_COL_SPEC.html) of the result set.

-   Specifying individual blank-separated columns is [obsolete](ABENABAP_SQL_LISTS_OBSOLETE.html).
-   When a comma-separated list is used, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP05.html), which handles the statement more strictly than the regular syntax check.

-   If specified, `data_source~*` cannot be specified together with [aggregate expressions](ABAPSELECT_AGGREGATE.html). It can, however, be combined with [window expressions](ABAPSELECT_AGGREGATE.html).
-   When an internal table [`@itab`](ABAPSELECT_ITAB.html) with elementary row type is accessed in the [`FROM`](ABAPFROM_CLAUSE.html) clause of a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) after [`WITH`](ABAPWITH.html), `data_source~*` cannot be specified in the `SELECT` list.

-   For performance reasons, only those columns that are actually needed should be specified. `data_source~*` should, therefore, only be specified if the content of all columns is actually needed.
-   The definition of the result set can also be produced by specifying a single data source `data_source~*`. This defines the same result set as specifying `*` but can be different if information is specified after [`INTO`](ABAPINTO_CLAUSE.html) and the resulting behavior.
-   If [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), or [`EXCEPT`](ABAPUNION.html) is used, `data_source~*` cannot be specified in the `SELECT` list.
-   When `data_source~*` is used, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP08.html), which handles the statement more strictly than the regular syntax check.

-   The obsolete [short form](ABAPSELECT_OBSOLETE.html) without an explicitly specified target area cannot be used when specifying individual columns. The only exception here is when the aggregation function `count( * )` is used to statically specify nothing, if no alias name and no `GROUP BY` are specified.
-   Instead of using commas, blanks can be used to separate columns specified in an [obsolete form](ABENABAP_SQL_LISTS_OBSOLETE.html). Commas must be specified, however, in the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check from ABAP release 7.40, SP05.

-   If multiple DDIC database tables are specified after `FROM`, alternative names can be used when specifying single columns to avoid having multiple columns with the same name.
-   In particular, an alias name cannot be used as the operand of an [SQL expression](ABAPSQL_EXPR.html).
-   If an alias name is to be named exactly like an addition of the `SELECT` statement, it may be necessary to prefix it with the [escape character `!`](ABENNAMES_ESCAPING.html).
-   Outside of the [strict syntax check mode from ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html) , it is also possible for an alias name to contain the minus sign (`-`), which allows assignments to be made to components of substructures with the addition `CORRESPONDING FIELDS OF` in the [`INTO`](ABAPINTO_CLAUSE.html) clause.

-   If `column_syntax` is an internal table with a [header line](ABENHEADER_LINE_GLOSRY.html), the [table body](ABENTABLE_BODY_GLOSRY.html) is evaluated, and not the header line.
-   The class `CL_ABAP_DYN_PRG` contains methods that support the creation of correct and secure dynamic column specifications.
-   In dynamically specified columns, static attributes or constants of a class cannot be accessed from outside in cases where the class has a static constructor and the constructor has not yet been executed.
-   The literals of the dynamically specified ABAP SQL statements can span multiple rows of a token specified dynamically as an internal table.
-   When specified dynamically, ABAP SQL statements can contain the comment characters [`*`](ABENCOMMENT.html) and [`"`](ABENCOMMENT.html) as follows:

-   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character `"`.
-   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character `*`. In the row, all content is ignored from the first comment character `"`.

-   Comment characters placed within literals are, however, part of the literal.
-   The dynamic forms of the statements [`WITH`](ABAPWITH.html) and [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) enable fully dynamic `SELECT` statements, where all clauses except the `INTO` clause and the ABAP-specific additions can be specified in one dynamic token.

SELECT \* \\n FROM spfli \\n WHERE carrid = 'LH' \\n INTO TABLE @FINAL(wa). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES BEGIN OF structure. \\nTYPES carrname TYPE scarr-carrname. \\nINCLUDE TYPE spfli AS spfli. \\nTYPES url TYPE scarr-url. \\nTYPES END OF structure. \\n\\ \\nDATA itab TYPE STANDARD TABLE OF structure WITH EMPTY KEY. \\n\\ \\nSELECT scarr~carrname, spfli~\*, scarr~url \\n FROM scarr INNER JOIN spfli ON scarr~carrid = spfli~carrid \\n INTO TABLE @itab. \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). SELECT SINGLE \\n FROM scarr \\n FIELDS carrname, url \\n WHERE carrid = 'UA' \\n INTO @FINAL(result). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT fldate, AVG( loccuram as DEC( 31,2 ) ) AS avg \\n FROM sbook \\n WHERE sbook~carrid = 'LH' AND \\n sbook~connid = '0400' \\n GROUP BY fldate \\n ORDER BY avg DESCENDING \\n INTO TABLE @FINAL(itab). \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA column TYPE c LENGTH 16 VALUE 'cityfrom'. \\ncl\_demo\_input=>request( CHANGING field = column ). \\nTRY. \\n column = \\n cl\_abap\_dyn\_prg=>check\_whitelist\_tab( \\n val = to\_upper( column ) \\n whitelist = VALUE string\_hashed\_table( ( \`CITYFROM\` ) \\n ( \`CITYTO\` ) ) ). \\n CATCH cx\_abap\_not\_in\_whitelist. \\n out->write( 'Not allowed' ). \\n LEAVE PROGRAM. \\nENDTRY. \\n\\ \\nFINAL(name) = \`SPFLI-\` && column. \\nDATA dref TYPE REF TO data. \\nCREATE DATA dref TYPE (name). \\n\\ \\nDATA output TYPE TABLE OF string WITH EMPTY KEY. \\nSELECT DISTINCT (column) \\n FROM spfli \\n WHERE carrid = 'LH' \\n INTO @dref->\*. \\n output = VALUE #( BASE output ( |\\{ dref->\* \\}| ) ). \\nENDSELECT. \\nout->write( output ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: itab TYPE TABLE OF scarr, \\n columns TYPE TABLE OF string. \\n\\ \\ncolumns = VALUE #( ( \`\* Comment\` ) \\n ( \`carrid, "comment\` ) \\n ( \`\* Comment\` ) \\n ( \`carrname "comment\` ) ). \\n\\ \\nSELECT (columns) \\n FROM scarr \\n INTO CORRESPONDING FIELDS OF TABLE @itab. \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapselect\_clause.html