---
title: "Static Form"
description: |
  Dynamic Form -   The static form contains the static specification of the main query `SELECT` and optional common table expressions (CTEs) behind `WITH`. -   The dynamic form contains one dynamic token `select_syntax` in that can contain the main query and the optional CTEs at runtime. -   The stati
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPOPEN_CURSOR.htm"
abapFile: "ABAPOPEN_CURSOR.html"
keywords: ["select", "loop", "do", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "ABAPOPEN", "CURSOR"]
---

[Short Reference](ABAPOPEN_CURSOR_SHORTREF.html)

`OPEN CURSOR [WITH HOLD] @dbcur|@DATA(dbcur) FOR [[WITH](ABAPWITH.html)\ +cte1 AS ( SELECT [subquery_clauses](ABAPWITH_SUBQUERY.html) )[, +cte2 AS ( SELECT [subquery_clauses](ABAPWITH_SUBQUERY.html) ) ...]]\ SELECT [mainquery_clauses](ABAPOPEN_CURSOR_MAINQUERY.html)\ [[UNION|INTERSECT|EXCEPT ...](ABAPUNION.html)]\ [[UP TO ...]\ [OFFSET ...]](ABAPSELECT_UP_TO_OFFSET.html)\ [[OPTIONS ...](ABAPSELECT_OPTIONS.html)].`

`OPEN CURSOR [WITH HOLD] @dbcur|@DATA(dbcur) FOR (select_syntax) [[UP TO ...]\ [OFFSET ...]](ABAPSELECT_UP_TO_OFFSET.html)\ [[OPTIONS ...](ABAPSELECT_OPTIONS.html)].`

[Static Form](#ABAP_VARIANT_1@1@)

[Dynamic Form](#ABAP_VARIANT_2@1@)

The [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement `OPEN CURSOR` opens a [database cursor](ABENDATABASE_CURSOR_GLOSRY.html) for the result set of the [main query](ABENMAINQUERY_GLOSRY.html) defined after `FOR` and links a cursor variable `dbcur` with this database cursor. The result set of the main query can be read with the statement [`FETCH`](ABAPFETCH.html). There are a static and a dynamic form:

`OPEN CURSOR [WITH HOLD] @dbcur|@DATA(dbcur) FOR [[WITH](ABAPWITH.html)\ +cte1 AS ( SELECT [subquery_clauses](ABAPWITH_SUBQUERY.html) )[, +cte2 AS ( SELECT [subquery_clauses](ABAPWITH_SUBQUERY.html) ) ...]]\ SELECT [mainquery_clauses](ABAPOPEN_CURSOR_MAINQUERY.html)\ [[UNION|INTERSECT|EXCEPT ...](ABAPUNION.html)]\ [[UP TO ...]\ [OFFSET ...]](ABAPSELECT_UP_TO_OFFSET.html)\ [[OPTIONS ...](ABAPSELECT_OPTIONS.html)].`

[`... WITH HOLD`](#ABAP_ONE_ADD@1@)

The static form of the statement `OPEN CURSOR` introduces the definition of a main query behind `SELECT` and optional common table expressions (CTEs) behind `WITH`. The queries are specified after `FOR` as follows:

The following can be specified for the cursor:

A row of the result set is always assigned to an opened database cursor as a cursor position. After the statement `OPEN CURSOR`, the database cursor is positioned in front of the first row of the result set.

In a program, a maximum of 17 database cursors can be open simultaneously across the [ABAP SQL interface](ABENABAP_SQL_INTERFACE_GLOSRY.html). If an attempt is made to open more than 17 database cursors, the runtime error `DBSQL_TOO_MANY_OPEN_CURSOR` occurs. An open database cursor can be closed using the statement [`CLOSE CURSOR`](ABAPCLOSE_CURSOR.html). In addition, any open database cursors are closed by [database commits](ABENDATABASE_COMMIT_GLOSRY.html) or [database rollbacks](ABENDATABASE_ROLLBACK_GLOSRY.html) if these occur after the first use of the cursor in a [`FETCH`](ABAPFETCH.html) statement.

If a cursor variable `dbcur` of an open database cursor is assigned to another cursor variable or passed as a parameter, the latter is linked with the same database cursor at the same position. A cursor variable of an open database cursor can also be passed to externally called [procedures](ABENPROCEDURE_GLOSRY.html) to access the database cursor from there.

Opens two cursors for the DDIC database table `SPFLI`. For more information on how to use this function, see the example for [`FETCH`](ABAPFETCH.html).

If the addition `WITH HOLD` is specified, the database cursor is not closed in a [database commit](ABENDATABASE_COMMIT_GLOSRY.html) executed using [Native SQL](ABENNATIVE_SQL_GLOSRY.html).

The addition `WITH HOLD` can be used only in reads performed on the standard database. It cannot be specified together with the addition [`CONNECTION`](ABAPSELECT_CONNECTION.html).

The addition `WITH HOLD` prevents the database cursor from being closed using an explicit database commit with the statement [`COMMIT CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html) and hence prevents an exception from being raised in the second [`FETCH`](ABAPFETCH.html) statement. An exception is, however, raised after the statement `COMMIT WORK`.

`OPEN CURSOR [WITH HOLD] @dbcur|@DATA(dbcur) FOR (select_syntax) [[UP TO ...]\ [OFFSET ...]](ABAPSELECT_UP_TO_OFFSET.html)\ [[OPTIONS ...](ABAPSELECT_OPTIONS.html)].`

In the dynamic form of the statement `OPEN CURSOR`, a data object `select_syntax` is specified in parentheses. When the statement is executed, the data object can contain the complete syntax that is possible at the respective position for the static form between `FOR` and the optional additions `UP TO` and `OPTIONS`.

The data object `select_syntax` can be a character-like data object or a standard table with a character-like row type. The syntax in `select_syntax` is not case-sensitive. When an internal table is specified, the syntax can be distributed across multiple rows. The subquery clauses and the main query clause specified in `select_syntax` must not contain further dynamic tokens. Invalid syntax raises a catchable exception of class `CX_SY_DYNAMIC_OSQL_ERROR`.

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

Dynamic `SELECT` statement in a text string. The example indicates that the SQL statement can be seen as a template that can be modified dynamically.

Static Form

Dynamic Form

-   The static form contains the static specification of the main query `SELECT` and optional common table expressions (CTEs) behind `WITH`.
-   The dynamic form contains one dynamic token `select_syntax` in that can contain the main query and the optional CTEs at runtime.

-   The static form can be partly dynamic because its subquery clauses and the main query clause can itself contain dynamic tokens.
-   The dynamic form offers the possibility to express a main query with or without CTEs completely dynamically.
-   See also the dynamic form of statement [`WITH`](ABAPWITH.html).

-   The main query is specified using the language element `SELECT`, and its clauses and additions [`mainquery_clauses`](ABAPOPEN_CURSOR_MAINQUERY.html) define the result set.
-   The [set operator](ABENCDS_SET_OPERATORS_GLOSRY.html)\\ [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), or [`EXCEPT`](ABAPUNION.html) can be used to combine the result sets of multiple queries. In this case, special rules [`query_clauses`](ABAPUNION_CLAUSE.html) apply when specifying clauses.
-   Finally, the optional ABAP-specific additions can be specified behind [`OPTIONS`](ABAPSELECT_OPTIONS.html)
-   Optional [common table expressions](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) can be defined in the main query using the language element `WITH`. When defining and using common table expressions, the same applies as when using the static form of `WITH` to introduce a [standalone statement](ABAPWITH.html). The dynamic form of `WITH` cannot be used here.

-   A [host variable](ABENABAP_SQL_HOST_VARIABLES.html)\\ `dbcur` declared with the special predefined data type [`cursor`](ABENBUILT_IN_TYPES_COMPLETE.html). A database cursor `dbcur` that has already been opened cannot be opened again.
-   An [inline declaration](ABENINLINE_DECLARATION_GLOSRY.html) of a corresponding [host variable](ABENABAP_SQL_HOST_VARIABLES.html)\\ `dbcur`. Only the [declaration operator](ABENDECLARATION_OPERATOR_GLOSRY.html)\\ [`DATA`](ABENDATA_INLINE.html) is possible and must be prefixed with the escape character `@`. The declaration operator [`FINAL`](ABENFINAL_INLINE.html) is not possible here.

-   It is not recommended that cursor variables are assigned to each other and they should be set only using the statements `OPEN CURSOR` and `CLOSE CURSOR`.
-   If [write accesses](ABENABAP_SQL_WRITING.html) are made on a DDIC database table for which a database cursor is open, the result set is database-dependent and undefined. This kind of parallel access should therefore be avoided.
-   As well as explicit ABAP SQL reads using `OPEN CURSOR` and [`SELECT`](ABAPSELECT.html) loops, the ABAP SQL interface also opens database cursors implicitly, such as when loading [buffered](ABENSAP_PUFFERING.html) tables. The runtime error `DBSQL_TOO_MANY_OPEN_CURSOR` can be avoided by not using explicit reads to exploit the maximum number of open database cursors.
-   If a CDS view is defined as a [replacement object](ABENDDIC_REPLACEMENT_OBJECTS.html) for a DDIC database table or DDIC database view specified as a [data source](ABAPSELECT_DATA_SOURCE.html) of the `SELECT` statement of `OPEN CURSOR`, the statement [`FETCH`](ABAPFETCH.html) accesses the CDS view and not the DDIC database table or the DDIC database view.
-   Host variables without the escape character `@` are [obsolete](ABENABAP_SQL_HOSTVAR_OBSOLETE.html). The escape character `@` must be specified in the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check from ABAP release 7.40, SP05. The use of an inline declaration for `dbcur` activates the strict mode with [release 7.65](ABENABAP_SQL_STRICTMODE_765.html) and higher. If a statement `OPEN CURSOR` is checked in accordance with the rules for the [strict mode](ABENABAP_SQL_STRICTMODE_760.html) from ABAP release 7.60, each statement [`FETCH`](ABAPFETCH.html) that accesses the database cursor is also checked in strict mode. Conversely, the strict syntax check mode from [ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html) also applies the strict mode for the associated statement `OPEN CURSOR` in the statement `FETCH`. A violation of the rules specified by `FETCH` in `OPEN CURSOR` raises an exception of the class `CX_SY_DYNAMIC_OSQL_SEMANTICS`.

-   A Native SQL database commit closes the database cursor only after the cursor is used in a [`FETCH`](ABAPFETCH.html) statement. A Native SQL database commit between the statement `OPEN CURSOR` and the first `FETCH` statement does not close the cursor.
-   The addition `WITH HOLD` is ignored by the following:

-   Implicit [database commits](ABENDATABASE_COMMIT_GLOSRY.html)
-   Commits made by the statement [`COMMIT WORK`](ABAPCOMMIT.html)
-   Any rollbacks

-   These always close the database cursor.
-   A Native SQL database commit can be made explicitly using the statement [`COMMIT CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html).

-   The main query in dynamic token `select_syntax` presents a fully dynamic `SELECT` statement that can be compared to an [ADBC query](ABENADBC_QUERY.html) that is also passed as a string..
-   When using the dynamic form of `OPEN CURSOR`, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_796.html), which handles the statement more strictly than the regular syntax check.

-   [`WITH`, Dynamic Form](ABENWITH_DYNAMIC_ABEXA.html)
-   [`SELECT`, Dynamic Query Clauses](ABENDYNAMIC_SELECT_ABEXA.html)

OPEN CURSOR @DATA(dbcur1) FOR \\n SELECT carrid, COUNT(\*) AS count \\n FROM spfli \\n GROUP BY carrid \\n ORDER BY carrid. \\n\\ \\nOPEN CURSOR @DATA(dbcur2) FOR \\n SELECT \* \\n FROM spfli \\n ORDER BY carrid. DATA wa TYPE scarr. \\n\\ \\nOPEN CURSOR WITH HOLD @DATA(dbcur) FOR \\n SELECT \* \\n FROM scarr. \\n\\ \\nFETCH NEXT CURSOR @dbcur INTO @wa. \\nCOMMIT CONNECTION default. \\nFETCH NEXT CURSOR @dbcur INTO @wa. \\nCLOSE CURSOR @dbcur. \\n\\ \\nTRY. \\n OPEN CURSOR WITH HOLD @dbcur FOR \\n SELECT \* \\n FROM scarr. \\n\\ \\n COMMIT WORK. \\n FETCH NEXT CURSOR @dbcur INTO @wa. \\n CLOSE CURSOR @dbcur. \\n\\ \\n CATCH cx\_sy\_open\_sql\_db. \\n ... \\nENDTRY. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA result TYPE TABLE OF string WITH EMPTY KEY. \\n\\ \\nDATA(select\_source) = \\n \`SELECT carrid && ' ' && carrname AS carrier\` & \\n \` FROM scarr\` & \\n \` WHERE carrid BETWEEN 'LH' AND 'UA'\` & \\n \` ORDER BY carrid\`. \\n\\ \\n\* Modify SQL statement \\n... \\n\\ \\nTRY. \\n OPEN CURSOR @DATA(dbcur) FOR \\n (select\_source). \\n\\ \\n FETCH NEXT CURSOR @dbcur \\n INTO TABLE @result. \\n\\ \\n CLOSE CURSOR @dbcur. \\n\\ \\n out->write( result ). \\n\\ \\n CATCH cx\_sy\_dynamic\_osql\_error INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html