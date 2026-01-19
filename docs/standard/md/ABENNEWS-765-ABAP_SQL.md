---
title: "ABENNEWS-765-ABAP_SQL"
description: |
  ABENNEWS-765-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-765-ABAP_SQL.htm"
abapFile: "ABENNEWS-765-ABAP_SQL.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "ABENNEWS", "765", "ABAP", "SQL"]
---

[1\. Common Table Expressions](#ABAP_MODIFICATION_1@4@)

[2\. Cross Join](#ABAP_MODIFICATION_2@4@)

[3\. SQL Functions](#ABAP_MODIFICATION_3@4@)

[4\. Restrictions Removed](#ABAP_MODIFICATION_4@4@)

[5\. Access to Cached Views of the SAP HANA Database](#ABAP_MODIFICATION_5@4@)

[6\. Extended Result](#ABAP_MODIFICATION_6@4@)

[7\. Session Variables in the SAP HANA Database](#ABAP_MODIFICATION_7@4@)

[8. Inline Declaration for `OPEN CURSOR`](#ABAP_MODIFICATION_8@4@)

[9\. Strict Mode in the Syntax Check](#ABAP_MODIFICATION_9@4@)

The new ABAP SQL statement [`WITH`](ABAPWITH.html) enables [common table expressions](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) (CTEs) to be defined for use in the `WITH` statement. A common table expression creates a result set that is used in the queries of the `WITH` statement as a data source. The [main query](ABENMAINQUERY_GLOSRY.html) of the `WITH` statement has an `INTO` clause and transfers its result set to ABAP data objects.

As well as an inner and outer join, it is now possible to use a [cross join](ABAPSELECT_JOIN.html) in a [`SELECT` statement](ABAPSELECT.html).

The following changes have been made:

The following restrictions were removed:

Under certain conditions, a [query](ABENASQL_QUERY_GLOSRY.html) can read data from the cache when accessing a [cached view](ABENHANA_CACHED_VIEWS.html) of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). This can be checked using the addition [`EXTENDED RESULT`](ABAPSELECT_EXTENDED_RESULT.html) of an [`INTO`](ABAPINTO_CLAUSE.html) clause.

The new addition [`EXTENDED RESULT`](ABAPSELECT_EXTENDED_RESULT.html) of an [`INTO`](ABAPINTO_CLAUSE.html) clause can be used to provide an extended result for an object of the class [`CL_OSQL_EXTENDED_RESULT`](ABENCL_OSQL_EXTENDED_RESULT.html), which can be queried using methods of the class.

A new [ABAP-specific session variable](ABENHANA_SESSION_VARIABLES.html)\\ `CDS_CLIENT` for the client ID is modified in ABAP SQL reads of [CDS entities](ABENCDS_ENTITY_GLOSRY.html) whose client handling algorithm is governed by that variable by addition [`USING CLIENT`](ABAPSELECT_CLIENT.html). The [CDS session variable](ABENCDS_SESSION_VARIABLE_V1.html)\\ `client` is now linked to this HANA session variable.

An [inline declaration](ABENINLINE_DECLARATION_GLOSRY.html) with the [declaration operator](ABENDECLARATION_OPERATOR_GLOSRY.html)\\ [`DATA`](ABENDATA_INLINE.html) can now also be specified at the operand position for `dbcur` of the [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) statement.

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_765.html), which handles the statement more strictly than the regular syntax check.

-   The new numeric function [`DIVISION`](ABENSQL_ARITH_FUNC.html) enables divisions with decimal places.
-   The new string functions [`LOWER`](ABENSQL_STRING_FUNC.html) and [`UPPER`](ABENSQL_STRING_FUNC.html) implement uppercase and lowercase.
-   The new date functions [`DATS_IS_VALID`](ABENSQL_DATE_FUNC.html), [`DATS_DAYS_BETWEEN`](ABENSQL_DATE_FUNC.html), [`DATS_ADD_DAYS`](ABENSQL_DATE_FUNC.html) and [`DATS_ADD_MONTHS`](ABENSQL_DATE_FUNC.html) execute operations with date fields.
-   An addition [`AS dtype`](ABAPSELECT_AVG_AS.html) can now be specified in the aggregate function [`AVG`](ABAPSELECT_AGGREGATE.html) to define the data type of the result.

-   The addition [`ORDER BY PRIMARY KEY`](ABAPORDERBY_CLAUSE.html) of the [`SELECT`](ABAPSELECT.html) statement can now also be specified if a column is specified multiple times in the [`SELECT`](ABAPSELECT_LIST.html) list, without the same name being blocked by alternative names.
-   When accessing [CDS views](ABENCDS_VIEW_GLOSRY.html) that use session variables, addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) can now be used. When accessing [CDS views](ABENCDS_VIEW_GLOSRY.html) that do not use the [session variable](ABENCDS_SESSION_VARIABLE_V1.html)\\ `client`, the addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT.html) can now be used.

abenabap.html abennews.html abennews-76.html abennews-765.html