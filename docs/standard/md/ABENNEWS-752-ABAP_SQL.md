---
title: "ABENNEWS-752-ABAP_SQL"
description: |
  ABENNEWS-752-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-752-ABAP_SQL.htm"
abapFile: "ABENNEWS-752-ABAP_SQL.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "internal-table", "ABENNEWS", "752", "ABAP", "SQL"]
---

[1\. Internal Tables as Data Sources](#ABAP_MODIFICATION_1@4@)

[2\. Relational Expressions](#ABAP_MODIFICATION_2@4@)

[3\. Conversion Functions](#ABAP_MODIFICATION_3@4@)

[4\. Path Expressions](#ABAP_MODIFICATION_4@4@)

[5\. Access Control](#ABAP_MODIFICATION_5@4@)

[6. `ORDER BY` and `UP TO`, `OFFSET` in Subquery](#ABAP_MODIFICATION_6@4@) 

[7. Cardinality in `LEFT OUTER JOIN`](#ABAP_MODIFICATION_7@4@)

[8. Addition `NOT` for `BETWEEN` and `LIKE`](#ABAP_MODIFICATION_8@4@)

[9\. Client Handling](#ABAP_MODIFICATION_9@4@)

[10\. Replacement Service for ABAP SQL](#ABAP_MODIFICATION_10@4@)

[11. `FOR ALL ENTRIES` and Strings in the `SELECT` List](#ABAP_MODIFICATION_11@4@) 

[12\. Strict Mode in the Syntax Check](#ABAP_MODIFICATION_12@4@)

An internal table can be specified as a [`data source`](ABAPSELECT_DATA_SOURCE.html) data source of a query. This statement cannot be executed on all database systems, if the data from the internal table needs to be passed to the database.

The following is now possible for [conditions in expressions](ABENABAP_SQL_EXPR_LOGEXP.html):

The new type conversion functions [`BINTOHEX`](ABENSQL_TYPE_CONV_FUNC.html) and [`HEXTOBIN`](ABENSQL_TYPE_CONV_FUNC.html) make it possible to convert byte strings to character strings (and the other way round) in [SQL expressions](ABAPSQL_EXPR.html), which is not possible with a [`CAST`](ABENSQL_CAST.html) expression.

The following is now possible for [path expressions](ABENABAP_SQL_PATH.html):

The new addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) switches [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) off.

In a [subquery](ABENSUBQUERY_GLOSRY.html), it is now possible to use an [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause and the additions [`UP TO`, `OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) can be used after the clause. It is not possible to execute a subquery with an `ORDER BY` clause on all database systems

In a [`LEFT OUTER JOIN`](ABAPSELECT_JOIN.html), an addition `ONE TO MANY` can now be specified for the cardinality. This is evaluated as a note for optimization by [SAP HANA databases](ABENHANA_DATABASE_GLOSRY.html).

The addition `NOT` can now specified in front of `BETWEEN` and `LIKE` in [relation expressions for expressions](ABENABAP_SQL_EXPR_LOGEXP.html).

The following (stricter) rules for the additions [`USING CLIENT`](ABAPSELECT_CLIENT.html) and [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) now apply when switching and disabling [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) in reads on [CDS entities](ABENCDS_ENTITY_GLOSRY.html):

The class [`CL_OSQL_REPLACE`](ABENCL_OSQL_REPLACE.html) can be used in [unit tests](ABENUNIT_TEST_GLOSRY.html) with [ABAP Unit](ABENABAP_UNIT_GLOSRY.html) to redirect database accesses in ABAP SQL to other databases.

In the previous [strict modes of the syntax check](ABENABAP_SQL_STRICT_MODES.html), the addition [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) of statement [`SELECT`](ABAPSELECT.html) could not be specified together with columns of the types `STRING` and `RAWSTRING` or `LCHR` and `LRAW` in the [`SELECT` list](ABAPSELECT_LIST.html). This restriction has been removed and now the syntax check simply issues a warning.

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_766.html), which handles the statement more strictly than the regular syntax check.

-   Size comparisons can now be made between character-like data types and are no longer restricted to numeric data types.
-   The operator `BETWEEN` is also no longer restricted to numeric data types and SQL expressions can now be specified on the right side.
-   The operator `LIKE` is now also supported.

-   Path expressions can now be split over several source code rows at the blanks in the syntax for parameter passes and filter conditions and also before slashes (`/`).
-   Associations can now be used whose target data sources are [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html).
-   [Parameters](ABENABAP_SQL_PARAMETERS.html) can now be passed after the associations of a [path expression](ABENABAP_SQL_PATH.html). This makes it possible to specify paths whose associations have CDS entities with input parameters as data sources.
-   In path expressions, it is now possible to specify the cardinality and type of the join expression as [attributes](ABENABAP_SQL_PATH_FILTER.html).
-   [Filter conditions](ABENABAP_SQL_PATH_FILTER.html) for associations can now be specified in path expressions.

-   [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) does not work for client-independent access. For this reason, the additions [`USING CLIENT`](ABAPSELECT_CLIENT.html) and [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT.html) can only be used in ABAP SQL in reads on CDS entities for which access control is switched off using the annotation `AccessControl.authorizationCheck.#NOT_ALLOWED` or the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) in the [`FROM`](ABAPFROM_CLAUSE.html) clause of an ABAP SQL query.
-   [Path expressions](ABENABAP_SQL_PATH.html) can only be evaluated if automatic client handling is switched on. This cannot be done using [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT.html) in cases where path expressions are used that contain [associations](ABENCDS_ASSOCIATION_V1.html) whose target data source is client-specific In path expressions in the `FROM` clause, the source data sources of the associations cannot be client-specific either.

abenabap.html abennews.html abennews-75.html abennews-752.html