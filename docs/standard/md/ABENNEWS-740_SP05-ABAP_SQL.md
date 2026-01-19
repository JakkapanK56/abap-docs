---
title: "ABENNEWS-740_SP05-ABAP_SQL"
description: |
  ABENNEWS-740_SP05-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740_SP05-ABAP_SQL.htm"
abapFile: "ABENNEWS-740_SP05-ABAP_SQL.html"
keywords: ["select", "update", "delete", "if", "case", "data", "types", "internal-table", "ABENNEWS", "740", "SP05", "ABAP", "SQL"]
---

[1\. Comma-Separated Lists](#ABAP_MODIFICATION_1@4@)

[2\. Escape Character for Host Variables](#ABAP_MODIFICATION_2@4@)

[3\. SQL Expressions](#ABAP_MODIFICATION_3@4@)

[4\. Switching Implicit Client Handling](#ABAP_MODIFICATION_4@4@)

[5\. Rule Changes for Joins](#ABAP_MODIFICATION_5@4@)

[6. Evaluating `INTO CORRESPONDING`](#ABAP_MODIFICATION_6@4@)

[7\. Access to CDS Entities](#ABAP_MODIFICATION_7@4@)

[8\. Strict Mode in the Syntax Check](#ABAP_MODIFICATION_8@4@)

[9\. Stricter Checks on Syntax Rules](#ABAP_MODIFICATION_9@4@)

[10\. Specifying Dynamic Tokens](#ABAP_MODIFICATION_10@4@)

In ABAP SQL, all operands in lists can now be separated by commas and this is also the recommended way of separating them from ABAP release 7.40, SP05. Until now, comma-separated lists could only be used when single target fields were specified in parentheses after [`INTO`](ABAPINTO_CLAUSE.html) in `SELECT` and when data objects were specified in parentheses after [`WHERE`](ABENWHERE_LOGEXP_OPERAND_IN.html). Comma-separated lists are now also possible in programs of ABAP language version [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html) where the program property [*fixed point arithmetic*](ABENFIXED_POINT_ARITHMETIC_GLOSRY.html) is activated:

This makes blank-separated lists [obsolete](ABENABAP_SQL_LISTS_OBSOLETE.html). If one of these lists is separated by commas, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP05.html), which handles the statement more strictly than the regular syntax check.

The constraint that blanks were forbidden after the opening parenthesis in comma-separated lists after `INTO` and `IN` if more than one comma occurs (if more than one data object is specified) no longer applies from SP05.

ABAP data objects used in ABAP SQL statements (usually variables) are now interpreted as [host variables](ABENABAP_SQL_HOST_VARIABLES.html), as in statically embedded [Native SQL](ABENNATIVESQL.html). From ABAP release 7.40, SP05, host variables can and should be prefixed with the escape character `@`. Host variables without the escape character are [obsolete](ABENABAP_SQL_HOSTVAR_OBSOLETE.html). If the escape character is used in front of a name of an ABAP SQL statement, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP05.html), which handles the statement more strictly than the regular syntax check.

The escape character can only be used in programs of language version [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html), in which the program property [*fixed point arithmetic*](ABENFIXED_POINT_ARITHMETIC_GLOSRY.html) is activated. Using the escape character requires a strict syntax check of the complete statement. During this check, any errors that would normally only be displayed as syntax warnings are reported as syntax errors.

From ABAP release 7.40, SP05, [SQL expressions](ABAPSQL_EXPR.html) can be specified in a comma-separated [`SELECT` list](ABAPSELECT_LIST.html). The result of an expression of this type (whose operands can be the names of columns or host variables) is determined by the database system and passed to AS ABAP in the appropriate column of the result set.

SQL expressions can only be used in programs of language version [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html), in which the program property [*fixed point arithmetic*](ABENFIXED_POINT_ARITHMETIC_GLOSRY.html) is activated. When SQL expressions are used, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP05.html), which handles the statement more strictly than the regular syntax check.

The new addition [`USING CLIENT clnt`](ABAPSELECT_CLIENT.html), which can be specified in all ABAP SQL statements as an alternative to [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html), switches [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) to the [client](ABENCLIENT_GLOSRY.html) specified in `clnt`.

When the addition `USING CLIENT` is used, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP05.html), which handles the statement more strictly than the regular syntax check.

The following previous constraints on [joins](ABAPSELECT_JOIN.html) have been lifted:

In `SELECT` statements that exploit the rule changes above, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP05.html), which handles the statement more strictly than the regular syntax check.

If all required components are known statically, the assignment of the fields in the addition `CORRESPONDING` after [`INTO`](ABAPINTO_CLAUSE.html) is now determined when the program is generated and is not delayed until runtime.

The addition `INTO CORRESPONDING` now also modifies the actual [`SELECT` list](ABAPSELECT_LIST.html) that is passed to the database and hence also the `SELECT` statement. If one or more names match, all the columns for which there are no name matches are removed from the `SELECT` list implicitly. If there are no name matches, none of the columns are removed from the result set. If `*` is specified for the [`SELECT` list](ABAPSELECT_LIST.html), a list of columns may be updated implicitly.

[`SELECT`](ABAPSELECT.html) can be used to access [CDS entities](ABENCDS_ENTITY_GLOSRY.html). Potential CDS entities are currently [CDS views](ABENCDS_VIEW_GLOSRY.html) defined in the [ABAP CDS](ABENABAP_CDS_GLOSRY.html) DDL using [`DEFINE VIEW`](ABENCDS_DEFINE_VIEW_V1.html).

[Implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) is performed for [client-dependent](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) CDS views. If this handling is disabled using the addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html), the client column is part of the result set, even though the column is not an element of the CDS view. The new addition [`CLIENT SPECIFIED`](ABAPTYPES_CLIENT_SPECIFIED.html) of statement `TYPES` can be used to declare a suitable target area. New additions for [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT.html) after [`FROM`](ABAPFROM_CLAUSE.html) make it possible to address the column in the `SELECT` statement.

If (as recommended) the name of the [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is used for accesses and not the name of the [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html), the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP05.html), which subjects the statement to stricter checks than in the regular syntax check.

If one of the new features specified above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP05.html), which handles the statement more strictly than the regular syntax check.

In [ABAP release 7.40, SP02](ABENNEWS-740-ABAP_SQL.html), a new SQL parser was introduced for ABAP SQL. These parser performs stricter checks on some rules than the old parser. More specifically, the same parser is now used for statically specified ABAP SQL and for the content of dynamic tokens. In [ABAP release 7.40, SP02](ABENNEWS-740-ABAP_SQL.html), this parser will initially only be used for the statement [`SELECT`](ABAPSELECT.html). From ABAP release 7.40, SP05, the new parser will be used for all ABAP SQL statements. One consequence of this is that any following syntax constructs that have always contained errors now produce syntax errors or runtime errors.

From ABAP release 7.40, SP05 and higher, internal tables, which are specified as dynamic tokens can also have secondary keys in [modifying ABAP SQL statements](ABENABAP_SQL_WRITING.html).

-   The following restrictions apply in the statement [`SELECT`](ABAPSELECT.html)

-   When columns, aggregation expressions or SQL expressions are specified in the [`SELECT` list](ABAPSELECT_LIST.html).
-   When columns are specified after [`GROUP BY`](ABAPGROUPBY_CLAUSE.html)
-   When columns are specified after [`ORDER BY`](ABAPORDERBY_CLAUSE.html)

-   In the statement [`UPDATE`](ABAPUPDATE.html)

-   When set expressions are specified after [`SET`](ABAPUPDATE_SOURCE.html)

-   From ABAP release 7.40, SP05, it is no longer the case that all comparisons of the `ON` condition must contain a column from a database table or view on the right side as an operand.
-   From ABAP release 7.40, SP05, the right side of a join expression is no longer restricted to single tables or views. The right side can itself be a (parenthesized) join expression whose result set is then evaluated.
-   In ABAP release 7.40, SP05 and higher, `RIGHT OUTER JOIN` can be used in addition to `LEFT OUTER JOIN`.
-   From ABAP release 7.40, SP05, fields from the right side in the `WHERE` condition of the current `SELECT` statement can be specified in `LEFT OUTER JOIN`. Fields from the left side can be specified in `RIGHT OUTER JOIN`.

-   Corrections for the `WHERE` Condition
-   All corrections in [ABAP release 7.40, SP02](ABENNEWS-740-ABAP_SQL.html) that apply to the [`WHERE` condition](ABAPWHERE.html) now also apply to the statements [`DELETE`](ABAPDELETE_DBTAB.html), [`OPEN CURSOR`](ABAPOPEN_CURSOR.html), and [`UPDATE`](ABAPUPDATE.html) from ABAP release 7.40, SP05.
    \\
    **Example**\\
    \\
    From ABAP release 7.40 SP05, syntax errors for:
    \\
    `DELETE FROM spfli WHERE NOT NOT carrid = 'LH'.`
-   Corrections for dynamic tokens
-   All corrections in [ABAP release 7.40, SP02](ABENNEWS-740-ABAP_SQL.html) that apply to dynamic tokens now also apply to all ABAP SQL statements from ABAP release 7.40, SP05.
    \\
    **Example**\\
    \\
    From ABAP release 7.40 SP05, exception for:
    \\
    ``DELETE FROM (`SPFLI .`) WHERE (`. CARRID = 'LH'`).``
-   Correction for `OPEN CURSOR`
-   The addition `WITH HOLD` of the statement [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) can be used only in reads performed on the standard database. If the addition [`CONNECTION`](ABAPSELECT_OPTIONS.html) is specified at the same time, a runtime error was produced before ABAP release 7.40 SP05 (and not a syntax error), if the database table was specified dynamically. This gap was closed in ABAP release 7.40 SP05.
    \\
    **Example**\\
    \\
    From ABAP release 7.40 SP05, syntax errors for:
    \\
    `OPEN CURSOR WITH HOLD cursor FOR SELECT * FROM ('SPFLI') CONNECTION con.`

abenabap.html abennews.html abennews-740.html abennews-740\_sp05.html