---
title: "ABENNEWS-769-ABAP_SQL"
description: |
  ABENNEWS-769-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-769-ABAP_SQL.htm"
abapFile: "ABENNEWS-769-ABAP_SQL.html"
keywords: ["select", "do", "if", "case", "data", "types", "internal-table", "ABENNEWS", "769", "ABAP", "SQL"]
---

[1\. Internal Tables as Data Sources](#ABAP_MODIFICATION_1@4@)

[2\. Relational Expressions](#ABAP_MODIFICATION_2@4@)

[3\. Path Expressions](#ABAP_MODIFICATION_3@4@)

[4\. Access Control](#ABAP_MODIFICATION_4@4@)

[5. `ORDER BY` and `UP TO`, `OFFSET` in Subquery](#ABAP_MODIFICATION_5@4@) 

[6. Addition `NOT` for `BETWEEN` and `LIKE`](#ABAP_MODIFICATION_6@4@)

[7\. Client Handling](#ABAP_MODIFICATION_7@4@)

[8\. Strict Mode in the Syntax Check](#ABAP_MODIFICATION_8@4@)

An [internal table](ABAPSELECT_ITAB.html) can be specified as a [`data source`](ABAPSELECT_DATA_SOURCE.html) data source of a query. This statement cannot be executed on all database systems, if the data from the internal table needs to be passed to the database.

The following is now possible for [conditions in expressions](ABENABAP_SQL_EXPR_LOGEXP.html):

The following is now possible for [path expressions](ABENABAP_SQL_PATH.html):

The new addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) disables [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).

In a [subquery](ABENSUBQUERY_GLOSRY.html), it is now possible to use an [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause and the additions [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html) and [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) can be used after the clause. It is not possible to execute a subquery with an `ORDER BY` clause on all database systems

The addition `NOT` can now be specified in front of `BETWEEN` and `LIKE` in [relation expressions for expressions](ABENABAP_SQL_EXPR_LOGEXP.html).

The following (stricter) rules for the additions [`USING CLIENT`](ABAPSELECT_CLIENT.html) and [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) now apply when switching and disabling [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) in reads on [CDS entities](ABENCDS_ENTITY_GLOSRY.html):

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_769.html), which handles the statement more strictly than the regular syntax check.

-   Size comparisons can now be made between character-like data types and are no longer restricted to numeric data types.
-   The operator `BETWEEN` is also no longer restricted to numeric data types and SQL expressions can now be specified on the right side.
-   The operator `LIKE` is now also supported.

-   CDS associations can now be used whose [association targets](ABENASSOCIATION_TARGET_GLOSRY.html) are [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html).
-   [Parameters](ABENABAP_SQL_PARAMETERS.html) can now be passed after the CDS associations of a [path expression](ABENABAP_SQL_PATH.html) in the [specified columns](ABENABAP_SQL_COLUMNS.html) of [queries](ABENASQL_QUERY_GLOSRY.html). Until now, this was only possible in path expressions in the [data source](ABAPSELECT_DATA_SOURCE.html) of the [`FROM` clause](ABAPFROM_CLAUSE.html) of a [query](ABENASQL_QUERY_GLOSRY.html). This makes it possible to specify paths whose CDS associations have CDS entities with input parameters as data sources.
-   The [cardinality](ABENCARDINALITY_GLOSRY.html) and type of the join expression can now be specified as attributes in the [square brackets](ABENABAP_SQL_PATH_FILTER.html) after the CDS associations of a [path expression](ABENABAP_SQL_PATH.html). Until now, only filter conditions were possible.
-   [Attributes](ABENABAP_SQL_PATH_FILTER.html) can now be specified after the CDS associations of a [path expression](ABENABAP_SQL_PATH.html) in the [specified columns](ABENABAP_SQL_COLUMNS.html) of [queries](ABENASQL_QUERY_GLOSRY.html). Until now, attributes could only be specified in path expressions in the [data source](ABAPSELECT_DATA_SOURCE.html) of the [`FROM` clause](ABAPFROM_CLAUSE.html) of a [query](ABENASQL_QUERY_GLOSRY.html), and only filter conditions were possible.

-   [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) does not work for client-independent access. For this reason, the additions [`USING CLIENT`](ABAPSELECT_CLIENT.html) and [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT.html) can only be used in ABAP SQL in reads on CDS entities for which access control is disabled using the annotation `AccessControl.authorizationCheck.#NOT_ALLOWED` or the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) in the [`FROM`](ABAPFROM_CLAUSE.html) clause of an ABAP SQL query.
-   [Path expressions](ABENABAP_SQL_PATH.html) can only be evaluated if implicit client handling is enabled. This cannot be done using [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT.html) in cases where path expressions are used that contain [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) whose [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is client-dependent In path expressions in the [`FROM`](ABAPFROM_CLAUSE.html) clause, the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) of the CDS associations cannot be client-dependent either.

abenabap.html abennews.html abennews-76.html abennews-769.html