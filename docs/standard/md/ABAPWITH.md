---
title: "Static Form"
description: |
  Dynamic Form -   The static form contains the static specification of common table expressions(ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) (CTE for short) to be used in a final main query(ABENMAINQUERY_GLOSRY.html). There must be at least one definition of a CTE. -   The dynamic form contains one d
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWITH.htm"
abapFile: "ABAPWITH.html"
keywords: ["select", "loop", "do", "if", "case", "try", "catch", "class", "data", "internal-table", "ABAPWITH"]
---

[Short Reference](ABAPWITH_SHORTREF.html)

`WITH +cte1[( name1, name2, ... )] AS ( SELECT [subquery_clauses](ABAPWITH_SUBQUERY.html)\ [[UNION|INTERSECT|EXCEPT ...](ABAPUNION.html)] ), [[hierarchy](ABAPWITH_HIERARCHY.html)]\ [[associations](ABAPWITH_ASSOCIATIONS.html)][, +cte2[( name1, name2, ... )] AS ( SELECT [subquery_clauses](ABAPWITH_SUBQUERY.html)\ [[UNION|INTERSECT|EXCEPT ...](ABAPUNION.html)] ), [[hierarchy](ABAPWITH_HIERARCHY.html)]\ [[associations](ABAPWITH_ASSOCIATIONS.html)], ... ]\ SELECT [mainquery_clauses](ABAPWITH_MAINQUERY.html)\ [[UNION|INTERSECT|EXCEPT ...](ABAPUNION.html)]\ [INTO|APPENDING](ABAPINTO_CLAUSE.html) target [[UP TO ...]\ [OFFSET ...]](ABAPSELECT_UP_TO_OFFSET.html)\ [[OPTIONS ...](ABAPSELECT_OPTIONS.html)]. ... [ENDWITH].`

`WITH (select_syntax) [INTO|APPENDING](ABAPINTO_CLAUSE.html) target [[UP TO ...]\ [OFFSET ...]](ABAPSELECT_UP_TO_OFFSET.html)\ [[OPTIONS ...](ABAPSELECT_OPTIONS.html)]. ... [ENDWITH].`

[Static Form](#ABAP_VARIANT_1@1@)

[Dynamic Form](#ABAP_VARIANT_2@1@)

The [ABAP SQL](ABENABAP_SQL_GLOSRY.html) keyword `WITH` introduces `SELECT` statements with query clauses that produce a result set that is handled by an [`INTO`](ABAPINTO_CLAUSE.html) clause and optionally by [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html) and [`OPTIONS`](ABAPSELECT_OPTIONS.html) additions. There are a static and a dynamic form:

`WITH +cte1[( name1, name2, ... )] AS ( SELECT [subquery_clauses](ABAPWITH_SUBQUERY.html)\ [[UNION|INTERSECT|EXCEPT ...](ABAPUNION.html)] ), [[hierarchy](ABAPWITH_HIERARCHY.html)]\ [[associations](ABAPWITH_ASSOCIATIONS.html)][, +cte2[( name1, name2, ... )] AS ( SELECT [subquery_clauses](ABAPWITH_SUBQUERY.html)\ [[UNION|INTERSECT|EXCEPT ...](ABAPUNION.html)] ), [[hierarchy](ABAPWITH_HIERARCHY.html)]\ [[associations](ABAPWITH_ASSOCIATIONS.html)], ... ]\ SELECT [mainquery_clauses](ABAPWITH_MAINQUERY.html)\ [[UNION|INTERSECT|EXCEPT ...](ABAPUNION.html)]\ [INTO|APPENDING](ABAPINTO_CLAUSE.html) target [[UP TO ...]\ [OFFSET ...]](ABAPSELECT_UP_TO_OFFSET.html)\ [[OPTIONS ...](ABAPSELECT_OPTIONS.html)]. ... [ENDWITH].`

[`... ( name1, name2, ... )`](#ABAP_ONE_ADD@1@)

The static form of the statement `WITH` introduces the definition of at least one common table expression (CTE) and one main query. The static form of `WITH` can be used as a standalone statement, as shown here, or after the statement [`OPEN CURSOR`](ABAPOPEN_CURSOR.html).

Each common table expression creates a tabular result set in a [subquery](ABENSUBQUERY_GLOSRY.html), which can be used in the subsequent queries of the `WITH` statement as data source [`data_source`](ABAPSELECT_DATA_SOURCE.html). The `WITH` statement consists of the following parts:

The [set operators](ABENCDS_SET_OPERATORS_GLOSRY.html)\\ [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), and [`EXCEPT`](ABAPUNION.html) can be used to combine the result sets of multiple main queries. In this case, additional rules [`query_clauses`](ABAPUNION_CLAUSE.html) apply when specifying clauses.

A common table expression defined in the `WITH` statement can be used after its definition in the subquery of another common table expression and in the main query as the data source [`data_source`](ABAPSELECT_DATA_SOURCE.html). It cannot be used in its own subquery or in the subqueries of preceding definitions. A common table expression is only known within the current `WITH` statement.

Each common table expression defined in a `WITH` statement must be used at least once within the `WITH` statement, either in another common table expression or in the main query. This means that the main query must access at least one common table expression.

The name `+cte` of a common table expression is valid across the entire `WITH` statement. The character `+` is omitted from the name of the substructure only when a substructure is created as a data source for a common table expression in an inline declaration with [`@DATA(...)`](ABAPSELECT_INTO_TARGET.html) in the [`INTO`](ABAPINTO_CLAUSE.html) clause.

Generally, the result set of a common table expression has no [client column](ABENCLIENT_COLUMN_GLOSRY.html). Even if the client column of a client-dependent data source is included explicitly in the subquery to its `SELECT` list, it does not behave as such in the result set. For this reason, a query of the `WITH` statement that uses a common table expression as a data source cannot specify the addition [`USING`](ABAPSELECT_CLIENT.html) or the obsolete addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) . This behavior can be changed with the addition [`DECLARE CLIENT`](ABAPSELECT_DECLARE_CLIENT.html). With that addition, any column of type `CHAR` with length 3 can be declared as a client column. Then, the result set of the CTE is handled as client-dependent, implicit client handling is applied and the addition [`USING`](ABAPSELECT_CLIENT.html) can be specified.

The following additions can be used to expose hierarchies and associations for use in the current `WITH` statement:

The result set of the common table expression `+cities` is a list of all cities that are flown from or to by an airline. The common table expression is used in the main query as the data source of the subquery of the `WHERE` condition.

Defines the column names of a common table expression `+cte`. The specified names `name1`, `name2`, ... are assigned to the columns defined in the [`SELECT` list](ABAPSELECT_LIST.html) of the [subquery](ABAPWITH_SUBQUERY.html) of the common table expression in the order given. The names work like the alias names defined in the `SELECT` list using `AS` and overwrite these names.

The opening parenthesis must be directly after the name `+cte1`, `+cte2`, and so on. At least one blank must be placed after the opening parenthesis and in front of the closing parenthesis. There can be blanks in the comma-separated list of names.

The names can have a maximum of 30 characters, and can contain letters, numbers, and underscores. They must start with either a letter or an underscore.

It is possible to specify a name list if all columns with `*` are selected in the [`SELECT` list](ABAPSELECT_LIST.html) of the [subquery](ABAPWITH_SUBQUERY.html). This can lead to syntax errors if the data source of the subquery is subsequently extended.

The result sets of both common table expressions `+connections` and `+sum_seats` are merged in the subquery of the common table expression `+result` in a join expression. An explicit name list assigns names to the resulting columns. These names are used in the main query to sort the results. For each flight connection of the selected airline, the total number of occupied seats is output from the DDIC database table `SFLIGHT`.

`WITH (select_syntax) [INTO|APPENDING](ABAPINTO_CLAUSE.html) target [[UP TO ...]\ [OFFSET ...]](ABAPSELECT_UP_TO_OFFSET.html)\ [[OPTIONS ...](ABAPSELECT_OPTIONS.html)]. ... [ENDWITH].`

In the dynamic form of the statement `WITH`, a data object `select_syntax` is specified in parentheses. When the statement is executed, the data object can contain the complete syntax that is possible at the respective position for the static form between `WITH` and the `INTO` clause. The dynamic form of `WITH` cannot be used after the statement [`OPEN CURSOR`](ABAPOPEN_CURSOR.html).

The data object `select_syntax` can be a character-like data object or a standard table with a character-like row type. The syntax in `select_syntax` is not case-sensitive. When an internal table is specified, the syntax can be distributed across multiple rows. The subquery clauses and the main query clause specified in `select_syntax` must not contain further dynamic tokens. Invalid syntax raises a catchable exception of class `CX_SY_DYNAMIC_OSQL_ERROR`.

In contrast to the static form, the syntax in `select_syntax` must not contain the definition of CTEs. It may contain the main query only.

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

Dynamic `SELECT` statement without CTEs in a text string. The example indicates that the SQL statement can be seen as a template that can be modified dynamically.

Static Form

Dynamic Form

-   The static form contains the static specification of [common table expressions](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) (CTE for short) to be used in a final [main query](ABENMAINQUERY_GLOSRY.html). There must be at least one definition of a CTE.
-   The dynamic form contains one dynamic token `select_syntax` in parenthesis that can contain the definitions of the CTEs and the main query at runtime. In contrast to the static form, it may contain the main query only. It must not contain the definition of CTEs.

-   The static form can be partly dynamic because its subquery clauses and the main query clause can itself contain dynamic tokens.
-   The dynamic form offers the possibility to express a main query with or without CTEs completely dynamically.
-   See also the dynamic form of statement [`OPEN CURSOR`](ABAPOPEN_CURSOR.html).

-   A comma-separated list with at least one definition of a common table expression

-   Each common table expression has a unique name `+cte1`, `+cte2`, ... . The names `cte` can have a maximum of 30 characters, and can contain letters, numbers, and underscores. They must start with either a letter or an underscore. In addition, the name must be prefixed with the character `+`. The initial `+` character is part of the name, but cannot stand alone and must not be followed by a number.
-   An optional name list (`( name1, name2, ... )`) for the columns of the result set of the common table expression can be specified directly after the name (see below).
-   A parenthesized subquery `SELECT`\\ [`subquery_clauses`](ABAPWITH_SUBQUERY.html) follows the `AS`. This subquery creates the tabular result set of the common table expression. The [set operators](ABENCDS_SET_OPERATORS_GLOSRY.html)\\ [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), and [`EXCEPT`](ABAPUNION.html) can be used to combine the result sets of multiple subqueries. In this case, special rules [`query_clauses`](ABAPUNION_CLAUSE.html) apply when specifying clauses.

-   A closing main query `SELECT`\\ [`mainquery_clauses`](ABAPWITH_MAINQUERY.html), which can contain the same [clauses and additions](ABENSELECT_CLAUSES.html), apart from [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html), as a standalone [`SELECT`](ABAPSELECT.html) statement, and works in the same way:

-   The result set of the main query is assigned to ABAP data objects according to the [`INTO`](ABAPINTO_CLAUSE.html) clause.
-   As described in [`SELECT`](ABAPSELECT.html), a single- or multirow result set is created and, depending on the target area specified in the [`INTO`](ABAPINTO_CLAUSE.html) clause, a `SELECT` loop is either opened or not.
-   A `SELECT` loop must be closed with the [`ENDWITH`](ABAPENDWITH.html) statement. `ENDWITH` has exactly the same meaning for `WITH ... SELECT` as [`ENDSELECT`](ABAPENDSELECT.html) for a standalone [`SELECT`](ABAPSELECT.html) loop.
-   In the main query, each of the previously defined common table expressions `+cte1`, `+cte2`, and so on, can be used as the data source [`data_source`](ABAPSELECT_DATA_SOURCE.html).

-   The addition [`hierarchy`](ABAPWITH_HIERARCHY.html) can be used to expose the common table expression as a [CTE hierarchy](ABENCTE_HIERARCHY_GLOSRY.html).
-   The addition [`associations`](ABAPWITH_ASSOCIATIONS.html) can be used to do the following:

-   [Expose](ABAPWITH_ASSOCIATIONS_USING.html) the [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) of a common table expression when [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) or [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) are accessed.
-   [Define and expose](ABENCTE_ASSOCIATION_GLOSRY.html) dedicated [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html).

-   The associations can be used in [path expressions](ABENABAP_SQL_PATH.html) of the subsequent queries of the current `WITH` statement.

-   A common table expression creates a temporary tabular result set, which can be accessed during execution of the `WITH` statement. Common table expressions can therefore be considered temporary views, which only exist for the duration of the database access.
-   Common table expressions can be used whenever intermediate results are required in a `SELECT` statement. ABAP SQL statements are more readable if common table expressions are used, and a common table expression is always useful if intermediate results are required more than once. If required, common table expressions can also perform the tasks of [GTTs](ABENGLOBAL_TEMPORARY_TABLE_GLOSRY.html).
-   Using common table expressions as a data source also provides the option of selecting directly from a subquery `SELECT FROM subquery`, which is not possible in ABAP SQL.
-   The character `+` in front of the name of a common table expression marks it as such, just like the character `@` for host variables. Due to the character `+`, a common table expression cannot have the same name as a table from the ABAP Dictionary and hence cannot be hidden.
-   For `WITH` loops that are closed with `ENDWITH`, the same notes apply as to [`SELECT`](ABAPSELECT.html) loops. In particular, `WITH` loops should not be nested.
-   In the main query of the `WITH` statement, if `*` is specified in the `SELECT` list, this means that there is no unconverted transfer to a work area specified after [`INTO`](ABAPINTO_CLAUSE.html).
-   Only `WITH` statements that access only [internal tables](ABAPSELECT_ITAB.html) but no database tables can be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). If a database table is accessed at any position of the statement, the ABAP SQL statement bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   The addition [`USING`](ABAPSELECT_CLIENT.html) can be used in the queries of a `WITH` statement, as is usual for client-dependent data sources, to switch [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) there.
-   If the `WITH` statement is used, the syntax check is performed in the [strict mode for ABAP release 7.65](ABENABAP_SQL_STRICTMODE_765.html).

-   [`WITH`, Common Table Expressions](ABENWITH_CTE_ABEXA.html)
-   [`WITH`, Client Handling](ABENWITH_CLIENT_HANDLING_ABEXA.html)
-   [`WITH`, Aggregation for Join Set](ABENWITH_AGG_UNION_ABEXA.html)

-   If a name list is specified, it must contain a name for each column of the common table expression.
-   If no name list is specified, the columns of the results list have the names defined in the [`SELECT` list](ABAPSELECT_LIST.html) of the [subquery](ABAPWITH_SUBQUERY.html).

-   If `select_syntax` contains a main query but no CTEs, it presents a fully dynamic `SELECT` statement that can be compared to an [ADBC query](ABENADBC_QUERY.html) that is also passed as a string.
-   Since the statement [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) has its own dynamic form that includes the dynamic specification of `WITH`, it is not necessary to allow the dynamic form of `WITH` there.
-   When using the dynamic form of `WITH`, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_796.html), which handles the statement more strictly than the regular syntax check.

-   [`WITH`, Dynamic Form](ABENWITH_DYNAMIC_ABEXA.html)
-   [`SELECT`, Dynamic Query Clauses](ABENDYNAMIC_SELECT_ABEXA.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA carrid TYPE spfli-carrid VALUE 'LH'. \\ncl\_demo\_input=>request( CHANGING field = carrid ). \\n\\ \\nWITH \\n +cities AS ( \\n SELECT cityfrom AS city \\n FROM spfli \\n WHERE carrid = @carrid \\n UNION DISTINCT \\n SELECT cityto AS city \\n FROM spfli \\n WHERE carrid = @carrid ) \\n SELECT \* \\n FROM sgeocity \\n WHERE city IN ( SELECT city \\n FROM +cities ) \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA from\_id TYPE spfli-carrid VALUE 'AA'. \\ncl\_demo\_input=>add\_field( CHANGING field = from\_id ). \\nDATA to\_id TYPE spfli-carrid VALUE 'UA'. \\ncl\_demo\_input=>request( CHANGING field = to\_id ). \\nfrom\_id = to\_upper( from\_id ). \\nto\_id = to\_upper( to\_id ). \\n\\ \\nWITH \\n +connections AS ( \\n SELECT spfli~carrid, carrname, connid, cityfrom, cityto \\n FROM spfli \\n INNER JOIN scarr \\n ON scarr~carrid = spfli~carrid \\n WHERE spfli~carrid BETWEEN @from\_id AND @to\_id ), \\n +sum\_seats AS ( \\n SELECT carrid, connid, SUM( seatsocc ) AS sum\_seats \\n FROM sflight \\n WHERE carrid BETWEEN @from\_id AND @to\_id \\n GROUP BY carrid, connid ), \\n +result( name, connection, departure, arrival, occupied ) AS ( \\n SELECT carrname, c~connid, cityfrom, cityto, sum\_seats \\n FROM +connections AS c \\n INNER JOIN +sum\_seats AS s \\n ON c~carrid = s~carrid AND \\n c~connid = s~connid ) \\n SELECT \* \\n FROM +result \\n ORDER BY name, connection \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA result TYPE TABLE OF string WITH EMPTY KEY. \\n\\ \\nDATA(select\_source) = \\n \`SELECT carrid && ' ' && carrname AS carrier\` & \\n \` FROM scarr\` & \\n \` WHERE carrid BETWEEN 'LH' AND 'UA'\` & \\n \` ORDER BY carrid\`. \\n\\ \\n\* Modify SQL statement \\n... \\n\\ \\nTRY. \\n WITH \\n (select\_source) \\n INTO TABLE @result. \\n CATCH cx\_sy\_dynamic\_osql\_error INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\nENDTRY. \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html