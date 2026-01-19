---
title: "ABENNEWS-765-ABAP_SQL"
description: |
  ABENNEWS-765-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-765-ABAP_SQL.htm"
abapFile: "ABENNEWS-765-ABAP_SQL.html"
keywords: ["select", "if", "case", "data", "ABENNEWS", "765", "ABAP", "SQL"]
---

[1\. Common Table Expressions](#ABAP_MODIFICATION_1@4@)

[2\. Cross Join](#ABAP_MODIFICATION_2@4@)

[3\. SQL Functions](#ABAP_MODIFICATION_3@4@)

[4\. Restrictions Removed](#ABAP_MODIFICATION_4@4@)

The new ABAP SQL statement [`WITH`](ABAPWITH.html) enables [common table expressions](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) (CTEs) to be defined for use in the `WITH` statement. A common table expression creates a result set that is used in the queries of the `WITH` statement as a data source. The [main query](ABENMAINQUERY_GLOSRY.html) of the `WITH` statement has an `INTO` clause and transfers its result set to ABAP data objects.

As well as an inner and outer join, it is now possible to use a [cross join](ABAPSELECT_JOIN.html) in a [`SELECT` statement](ABAPSELECT.html).

The following changes have been made:

The following restrictions were removed:

-   The new numeric function [`DIVISION`](ABENSQL_ARITH_FUNC.html) enables divisions with decimal places.
-   The new string functions [`LOWER`](ABENSQL_STRING_FUNC.html) and [`UPPER`](ABENSQL_STRING_FUNC.html) implement uppercase and lowercase.
-   The new date functions [`DATS_IS_VALID`](ABENSQL_DATE_FUNC.html), [`DATS_DAYS_BETWEEN`](ABENSQL_DATE_FUNC.html), [`DATS_ADD_DAYS`](ABENSQL_DATE_FUNC.html) and [`DATS_ADD_MONTHS`](ABENSQL_DATE_FUNC.html) execute operations with date fields.
-   An addition [`AS dtype`](ABAPSELECT_AVG_AS.html) can now be specified in the aggregate function [`AVG`](ABAPSELECT_AGGREGATE.html) to define the data type of the result.

-   The addition [`ORDER BY PRIMARY KEY`](ABAPORDERBY_CLAUSE.html) of the [`SELECT`](ABAPSELECT.html) statement can now also be specified if a column is specified multiple times in the [`SELECT`](ABAPSELECT_LIST.html) list, without the same name being blocked by alternative names.

abenabap.html abennews.html abennews-76.html abennews-765.html