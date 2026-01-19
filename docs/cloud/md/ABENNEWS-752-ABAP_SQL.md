---
title: "ABENNEWS-752-ABAP_SQL"
description: |
  ABENNEWS-752-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-752-ABAP_SQL.htm"
abapFile: "ABENNEWS-752-ABAP_SQL.html"
keywords: ["select", "if", "data", "types", "internal-table", "ABENNEWS", "752", "ABAP", "SQL"]
---

[1\. Internal Tables as Data Sources](#ABAP_MODIFICATION_1@4@)

[2\. Relational Expressions](#ABAP_MODIFICATION_2@4@)

[3\. Conversion Functions](#ABAP_MODIFICATION_3@4@)

[4\. Path Expressions](#ABAP_MODIFICATION_4@4@)

[5\. Access Control](#ABAP_MODIFICATION_5@4@)

[6. `ORDER BY` and `UP TO`, `OFFSET` in Subquery](#ABAP_MODIFICATION_6@4@) 

[7. Cardinality in `LEFT OUTER JOIN`](#ABAP_MODIFICATION_7@4@)

[8. Addition `NOT` for `BETWEEN` and `LIKE`](#ABAP_MODIFICATION_8@4@)

An internal table can be specified as a [`data source`](ABAPSELECT_DATA_SOURCE.html) data source of a query. This statement cannot be executed on all database systems, if the data from the internal table needs to be passed to the database.

The following is now possible for [conditions in expressions](ABENABAP_SQL_EXPR_LOGEXP.html):

The new type conversion functions [`BINTOHEX`](ABENSQL_TYPE_CONV_FUNC.html) and [`HEXTOBIN`](ABENSQL_TYPE_CONV_FUNC.html) make it possible to convert byte strings to character strings (and the other way round) in [SQL expressions](ABAPSQL_EXPR.html), which is not possible with a [`CAST`](ABENSQL_CAST.html) expression.

The following is now possible for [path expressions](ABENABAP_SQL_PATH.html):

The new addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) switches [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) off.

In a [subquery](ABENSUBQUERY_GLOSRY.html), it is now possible to use an [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause and the additions [`UP TO`, `OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) can be used after the clause. It is not possible to execute a subquery with an `ORDER BY` clause on all database systems

In a [`LEFT OUTER JOIN`](ABAPSELECT_JOIN.html), an addition `ONE TO MANY` can now be specified for the cardinality. This is evaluated as a note for optimization by [SAP HANA databases](ABENHANA_DATABASE_GLOSRY.html).

The addition `NOT` can now specified in front of `BETWEEN` and `LIKE` in [relation expressions for expressions](ABENABAP_SQL_EXPR_LOGEXP.html).

-   Size comparisons can now be made between character-like data types and are no longer restricted to numeric data types.
-   The operator `BETWEEN` is also no longer restricted to numeric data types and SQL expressions can now be specified on the right side.
-   The operator `LIKE` is now also supported.

-   Path expressions can now be split over several source code rows at the blanks in the syntax for parameter passes and filter conditions and also before slashes (`/`).
-   Associations can now be used whose target data sources are [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html).
-   [Parameters](ABENABAP_SQL_PARAMETERS.html) can now be passed after the associations of a [path expression](ABENABAP_SQL_PATH.html). This makes it possible to specify paths whose associations have CDS entities with input parameters as data sources.
-   In path expressions, it is now possible to specify the cardinality and type of the join expression as [attributes](ABENABAP_SQL_PATH_FILTER.html).
-   [Filter conditions](ABENABAP_SQL_PATH_FILTER.html) for associations can now be specified in path expressions.

abenabap.html abennews.html abennews-75.html abennews-752.html