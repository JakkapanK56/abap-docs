---
title: "ABAPUNION"
description: |
  ABAPUNION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPUNION.htm"
abapFile: "ABAPUNION.html"
keywords: ["select", "insert", "delete", "loop", "do", "if", "case", "data", "internal-table", "ABAPUNION"]
---

1\. `[[WITH ...](ABAPWITH.html)]\ SELECT [query_clauses](ABAPUNION_CLAUSE.html)\ \{UNION [ALL|DISTINCT]\}\ |\ \{INTERSECT [DISTINCT]\}\ |\ \{EXCEPT [DISTINCT]\}\ [(] SELECT [query_clauses](ABAPUNION_CLAUSE.html)\ [)]\ [\{UNION [ALL|DISTINCT]\}\ |\ \{INTERSECT [DISTINCT]\}\ |\ \{EXCEPT [DISTINCT]\}\ ...]\ [[ORDER BY](ABAPORDERBY_CLAUSE.html) sort_key]\ [INTO|APPENDING](ABAPINTO_CLAUSE.html) target [[OPTIONS ...](ABAPSELECT_OPTIONS.html)]. ... \ [[ENDSELECT](ABAPENDSELECT.html)|[ENDWITH](ABAPENDWITH.html).]`\\
\\
\\
2\. `[OPEN CURSOR ... FOR](ABAPOPEN_CURSOR.html)\ [[WITH ...](ABAPWITH.html)]\ SELECT [query_clauses](ABAPUNION_CLAUSE.html)\ \{UNION [ALL|DISTINCT]\}\ |\ \{INTERSECT [DISTINCT]\}\ |\ \{EXCEPT [DISTINCT]\}\ [(] SELECT [query_clauses](ABAPUNION_CLAUSE.html)\ [)]\ [\{UNION [ALL|DISTINCT]\}\ |\ \{INTERSECT [DISTINCT]\}\ |\ \{EXCEPT [DISTINCT]\}\ ...]\ [[ORDER BY](ABAPORDERBY_CLAUSE.html) sort_key]\ [[OPTIONS ...](ABAPSELECT_OPTIONS.html)].`

3\. `... ( SELECT [query_clauses](ABAPUNION_CLAUSE.html)\ \{UNION[ALL|DISTINCT]\}\ |\ \{INTERSECT [DISTINCT]\}\ |\ \{EXCEPT [DISTINCT]\}\ [(] SELECT [query_clauses](ABAPUNION_CLAUSE.html)\ [)]\ [\{UNION [ALL|DISTINCT]\}\ |\ \{INTERSECT [DISTINCT]\}\ |\ \{EXCEPT [DISTINCT]\}\ ...] ) ...`

[1. `... UNION ...`](#ABAP_VARIANT_1@1@)

[2. `... INTERSECT ...`](#ABAP_VARIANT_2@1@)

[3. `... EXCEPT ...`](#ABAP_VARIANT_3@1@)

[`... ALL|DISTINCT`](#ABAP_ONE_ADD@1@)

The [set operators](ABENCDS_SET_OPERATORS_GLOSRY.html)\\ `UNION`, `INTERSECT`, and `EXCEPT` merge the result sets of multiple queries into a single result set. The syntax forms show where `UNION`, `INTERSECT`, and `EXCEPT` can be used:

In all syntax forms, it is possible to specify the same [clauses and additions](ABENSELECT_CLAUSES.html), specifically [`query_clauses`](ABAPUNION_CLAUSE.html), for `SELECT` statements of queries in front of and after `UNION`, `INTERSECT`, or `EXCEPT` for defining result sets. A query on the right side of `UNION`, `INTERSECT`, or `EXCEPT` can be enclosed in parentheses `( )`. A pair of parentheses can include multiple unions, intersections, or differences. The queries joined with `UNION`, `INTERSECT`, or `EXCEPT` are evaluated from left to right. Specific statements can be prioritized using parentheses.

In the case of a standalone [`SELECT`](ABAPSELECT.html) or [`WITH`](ABAPWITH.html) statement and after `OPEN CURSOR`, the [`ORDER BY`](ABAPORDERBY_CLAUSE.html) and the additions [`OPTIONS`](ABAPSELECT_OPTIONS.html) after the last query or after the position of the last closing bracket are listed and affect the merged result set. In the case of standalone statements, the [`INTO`](ABAPINTO_CLAUSE.html) clause is to be listed as the last clause and in front of the additions [`OPTIONS`](ABAPSELECT_OPTIONS.html). The following special features apply to standalone statements with set operators:

The ABAP SQL set operator `UNION` merges the result sets of two [queries](ABENASQL_QUERY_GLOSRY.html). The rows of the result set of the query after `UNION` are inserted into the result set of the query in front of `UNION`.

When `UNION` is used, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_760.html), which handles the statement more strictly than the regular syntax check. More specifically, the [`INTO`](ABAPINTO_CLAUSE.html) clause and the additions [`OPTIONS`](ABAPSELECT_OPTIONS.html) must be specified at the end of the entire `SELECT` statement.

Creates the union of one row from the DDIC database table `SCARR` with multiple rows from the DDIC database table `SPFLI`. Those columns that do not exist in the other table are replaced by literals. Here, a [`CAST`](ABENSQL_CAST.html) is required for the column `CONNID`.

[`UNION` - Examples](ABENUNION_ABEXAS.html)

The ABAP SQL set operator `INTERSECT` returns all distinct rows of the result set of the query in front of `INTERSECT` that are also present in the result set of the query after `INTERSECT`.

When `INTERSECT` is used, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_783.html), which handles the statement more strictly than the regular syntax check. More specifically, the [`INTO`](ABAPINTO_CLAUSE.html) clause and the additions [`OPTIONS`](ABAPSELECT_OPTIONS.html) must be specified at the end of the entire `SELECT` statement.

Creates the intersect of multiple rows from a joined table with multiple rows from the DDIC database table `SCARR`.

[`INTERSECT` - Examples](ABENINTERSECT_ABEXAS.html)

The ABAP SQL set operator `EXCEPT` returns all distinct rows of the result set of the query in front of `EXCEPT` that are not present in the result set of the query after `EXCEPT`.

Selects all airline codes and airline names from the DDIC database table `SCARR` that do not exist in the DDIC database table `SPFLI`.

[`EXCEPT` - Examples](ABENEXCEPT_ABEXAS.html)

The additions `ALL` and `DISTINCT` control how duplicate rows are handled. `DISTINCT` is the default here:

The DDIC database table `DEMO_EXPRESSIONS` is filled with one row and the union of the table with itself is created. Using the addition `DISTINCT`, the result set contains one row and using the addition `ALL` it contains two rows.

`UNION`, `INTERSECT`, and `EXCEPT` in Main Queries

`UNION`, `INTERSECT`, and `EXCEPT` in Subqueries

-   `ORDER BY` clause

-   The addition [`ORDER BY PRIMARY KEY`](ABAPORDERBY_CLAUSE.html) is not allowed.
-   Columns of the merged result set specified after [`ORDER BY`](ABAPORDERBY_CLAUSE.html) must occur with the same name in all relevant `SELECT` statements. The names must be specified directly and cannot be specified with the [column selector](ABENTABLE_COMP_SELECTOR_GLOSRY.html)\\ `~` after a column name.

-   `INTO` clause

-   If the addition `CORRESPONDING` or an inline declaration `@DATA|@FINAL(...)` is used in the [`INTO`](ABAPINTO_CLAUSE.html) clause, the column names of all result sets defined in the [`query_clauses`](ABAPUNION_CLAUSE.html) from left to right must match.
-   The merged result set is always multirow. When assigning to a non-table target area, that is, a `SELECT` statement without the addition [`INTO|APPENDING ... TABLE`](ABAPINTO_CLAUSE.html), a loop to be terminated with [`ENDSELECT`](ABAPENDSELECT.html) or [`ENDWITH`](ABAPENDWITH.html) is always opened.

-   Restricting the result set

-   The additions [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html) and [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) are not currently allowed with `UNION`, `INTERSECT`, and `EXCEPT`.
-   Since the result set is tabular, [`SINGLE`](ABAPSELECT_SINGLE.html) cannot be used.

-   Prioritizations using parentheses are particularly applicable when handling duplicate rows using `DISTINCT`.
-   `UNION`, `INTERSECT`, or `EXCEPT` cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). The ABAP SQL statement bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   The maximum number of different `SELECT` statements that can be joined using `UNION`, `INTERSECT`, or `EXCEPT` depends on the database system. If this number is exceeded, an exception is raised when the program is executed.

-   ABAP SQL does not support the alternative syntax `MINUS` that is available for the SAP HANA database.
-   When `EXCEPT` is used, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_783.html), which handles the statement more strictly than the regular syntax check. More specifically, the [`INTO`](ABAPINTO_CLAUSE.html) clause and the additions [`OPTIONS`](ABAPSELECT_OPTIONS.html) must be specified at the end of the entire `SELECT` statement.

-   If the addition `ALL` is specified, all rows from the result set of the right `SELECT` statement are inserted into the existing result set.
-   If the addition `DISTINCT` is specified or if neither of the two additions is specified, the behavior is as follows:

-   First, all rows of the result set of the right `SELECT` statement are inserted into the existing result set.
-   Then all rows that occur more than once are deleted except for one. For determining the duplicate rows, all columns of the result set are respected.

-   The default behavior or the addition `DISTINCT` is always applied to the entire existing result set of the left side. The addition `DISTINCT` also removes any duplicate rows produced by the addition `ALL` of preceding `UNION` additions.
-   The ABAP SQL set operator `UNION` can be used together with the addition `ALL` or `DISTINCT`.
-   The ABAP SQL set operators `INTERSECT` and `EXCEPT` can be used together with the addition `DISTINCT`.

1.  For creating the result set of the [main query](ABENMAINQUERY_GLOSRY.html) of a standalone statement, which is introduced using [`WITH`](ABAPWITH.html) or [`SELECT`](ABAPSELECT.html).
2.  For creating the result set of the [main query](ABENMAINQUERY_GLOSRY.html) after [`OPEN CURSOR`](ABAPOPEN_CURSOR.html).
3.  For creating the result set of a parenthesized [subquery](ABENSUBQUERY_GLOSRY.html) in a [relational expression](ABENABAP_SQL_STMT_LOGEXP.html), the definition of a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) after [`WITH`](ABAPWITH.html), or an [`INSERT`](ABAPINSERT_DBTAB.html) statement.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT FROM scarr \\n FIELDS carrname, \\n CAST( '-' AS CHAR( 4 ) ) AS connid, \\n '-' AS cityfrom, \\n '-' AS cityto \\n WHERE carrid = 'LH' \\n UNION \\n SELECT FROM spfli \\n FIELDS '-' AS carrname, \\n CAST( connid AS CHAR( 4 ) ) AS connid, \\n cityfrom, \\n cityto \\n WHERE carrid = 'LH' \\n ORDER BY carrname DESCENDING, connid, cityfrom, cityto \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). SELECT spfli~carrid, scarr~carrname \\n FROM spfli \\n INNER JOIN scarr ON scarr~carrid = spfli~carrid \\n INTERSECT \\n SELECT carrid, carrname \\n FROM scarr \\n ORDER BY carrid ASCENDING, carrname \\n INTO TABLE @FINAL(result). SELECT carrid, carrname \\n FROM scarr \\n EXCEPT \\n SELECT spfli~carrid, scarr~carrname \\n FROM spfli \\n INNER JOIN scarr ON scarr~carrid = spfli~carrid \\n ORDER BY carrid ASCENDING, carrname \\n INTO TABLE @FINAL(result). DELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( VALUE #( id = 'X' num1 = 111 ) ). \\n\\ \\nSELECT id, num1 \\n FROM demo\_expressions \\n UNION DISTINCT \\n SELECT id, num1 \\n FROM demo\_expressions \\n INTO TABLE @FINAL(result1). \\n\\ \\nSELECT id, num1 \\n FROM demo\_expressions \\n UNION ALL \\n SELECT id, num1 \\n FROM demo\_expressions \\n INTO TABLE @FINAL(result2). \\n\\ \\nASSERT lines( result1 ) = 1. \\nASSERT lines( result2 ) = 2. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html