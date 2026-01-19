---
title: "ABENNEWS-751-ABAP_SQL"
description: |
  ABENNEWS-751-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-751-ABAP_SQL.htm"
abapFile: "ABENNEWS-751-ABAP_SQL.html"
keywords: ["select", "delete", "if", "case", "method", "class", "data", "ABENNEWS", "751", "ABAP", "SQL"]
---

[1\. Common Table Expressions](#ABAP_MODIFICATION_1@4@)

[2\. Cross Join](#ABAP_MODIFICATION_2@4@)

[3. New Addition `OFFSET` in `SELECT`](#ABAP_MODIFICATION_3@4@)

[4\. SQL Functions](#ABAP_MODIFICATION_4@4@)

[5\. Extended Result](#ABAP_MODIFICATION_5@4@)

[6. New Additions in `DELETE dbtab`](#ABAP_MODIFICATION_6@4@)

The new ABAP SQL statement [`WITH`](ABAPWITH.html) enables [common table expressions](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) (CTEs) to be defined for use in the `WITH` statement. A common table expression creates a results set that is used in the queries of the `WITH` statement as a data source. The [main query](ABENMAINQUERY_GLOSRY.html) of the `WITH` statement has an `INTO` clause and transfers its results set to ABAP data objects.

As well as an inner and outer join, it is now possible to use a [cross join](ABAPSELECT_JOIN.html) in a [`SELECT` statement](ABAPSELECT.html).

In the additions named under [`additional_options`](ABAPSELECT_OPTIONS.html) in the statement [`SELECT`](ABAPSELECT.html), an addition [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) can now be specified to specify the first row of the results set.

The following changes have been made:

The new addition [`EXTENDED RESULT`](ABAPSELECT_EXTENDED_RESULT.html) of an [`INTO`](ABAPINTO_CLAUSE.html) clause can be used to provide an extended result for an object of the class `CL_OSQL_EXTENDED_RESULT`, which can be queried using methods of the class.

In the variant `DELETE FROM target` of the statement [`DELETE`](ABAPDELETE_DBTAB.html), the additions [`ORDER BY`](ABAPDELETE_WHERE.html), [`OFFSET`](ABAPDELETE_WHERE.html), and [`UP TO`](ABAPDELETE_WHERE.html) can now be specified to restrict the number of rows to delete.

-   The new numeric function [`DIVISION`](ABENSQL_ARITH_FUNC.html) enables divisions with decimal places.
-   The new string functions [`LOWER`](ABENSQL_STRING_FUNC.html) and [`UPPER`](ABENSQL_STRING_FUNC.html) implement uppercase and lowercase.
-   The new string functions [`LEFT`](ABENSQL_STRING_FUNC.html), [`CONCAT_WITH_SPACE`](ABENSQL_STRING_FUNC.html), [`INSTR`](ABENSQL_STRING_FUNC.html), and [`RPAD`](ABENSQL_STRING_FUNC.html) perform operations on strings.
-   In the string functions [`LPAD`](ABENSQL_STRING_FUNC.html), [`LTRIM`](ABENSQL_STRING_FUNC.html), and [`RTRIM`](ABENSQL_STRING_FUNC.html), arguments passed as constants or literals can now contain special characters.
-   The new date functions [`DATS_IS_VALID`](ABENSQL_DATE_FUNC.html), [`DATS_DAYS_BETWEEN`](ABENSQL_DATE_FUNC.html), [`DATS_ADD_DAYS`](ABENSQL_DATE_FUNC.html) and [`DATS_ADD_MONTHS`](ABENSQL_DATE_FUNC.html) execute operations with date fields.
-   An addition [`AS dtype`](ABAPSELECT_AVG_AS.html) can now be specified in the aggregate function [`AVG`](ABAPSELECT_AGGREGATE.html) to define the data type of the result.

abenabap.html abennews.html abennews-75.html abennews-751.html