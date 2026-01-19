---
title: "ABENNEWS-751-ABAP_SQL"
description: |
  ABENNEWS-751-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-751-ABAP_SQL.htm"
abapFile: "ABENNEWS-751-ABAP_SQL.html"
keywords: ["select", "delete", "do", "if", "case", "method", "class", "data", "ABENNEWS", "751", "ABAP", "SQL"]
---

[1\. Common Table Expressions](#ABAP_MODIFICATION_1@4@)

[2\. Cross Join](#ABAP_MODIFICATION_2@4@)

[3. New Addition `OFFSET` in `SELECT`](#ABAP_MODIFICATION_3@4@)

[4\. SQL Functions](#ABAP_MODIFICATION_4@4@)

[5\. Extended Result](#ABAP_MODIFICATION_5@4@)

[6. New Additions in `DELETE dbtab`](#ABAP_MODIFICATION_6@4@)

[7\. Access to Cached Views of the SAP HANA Database](#ABAP_MODIFICATION_7@4@)

[8\. Restrictions Removed](#ABAP_MODIFICATION_8@4@)

[9\. Session Variables in the SAP HANA Database](#ABAP_MODIFICATION_9@4@)

[10. Inline Declaration for `OPEN CURSOR`](#ABAP_MODIFICATION_10@4@)

[11\. Strict Mode in the Syntax Check](#ABAP_MODIFICATION_11@4@)

The new ABAP SQL statement [`WITH`](ABAPWITH.html) enables [common table expressions](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) (CTEs) to be defined for use in the `WITH` statement. A common table expression creates a results set that is used in the queries of the `WITH` statement as a data source. The [main query](ABENMAINQUERY_GLOSRY.html) of the `WITH` statement has an `INTO` clause and transfers its results set to ABAP data objects.

As well as an inner and outer join, it is now possible to use a [cross join](ABAPSELECT_JOIN.html) in a [`SELECT` statement](ABAPSELECT.html).

In the additions named under [`additional_options`](ABAPSELECT_OPTIONS.html) in the statement [`SELECT`](ABAPSELECT.html), an addition [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) can now be specified to specify the first row of the results set.

The following changes have been made:

The new addition [`EXTENDED RESULT`](ABAPSELECT_EXTENDED_RESULT.html) of an [`INTO`](ABAPINTO_CLAUSE.html) clause can be used to provide an extended result for an object of the class `CL_OSQL_EXTENDED_RESULT`, which can be queried using methods of the class.

In the variant `DELETE FROM target` of the statement [`DELETE`](ABAPDELETE_DBTAB.html), the additions [`ORDER BY`](ABAPDELETE_WHERE.html), [`OFFSET`](ABAPDELETE_WHERE.html), and [`UP TO`](ABAPDELETE_WHERE.html) can now be specified to restrict the number of rows to delete.

Under certain conditions, a [query](ABENASQL_QUERY_GLOSRY.html) can read data from the cache when accessing a [cached view](ABENHANA_CACHED_VIEWS.html) of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). This can be checked using the addition [`EXTENDED RESULT`](ABAPSELECT_EXTENDED_RESULT.html) of an [`INTO`](ABAPINTO_CLAUSE.html) clause.

The following restrictions were removed:

A new [ABAP-specific session variable](ABENHANA_SESSION_VARIABLES.html)\\ `CDS_CLIENT` for the client ID is modified by the addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) in ABAP SQL reads of [CDS entities](ABENCDS_ENTITY_GLOSRY.html) whose client handling algorithm is governed by that variable. The [CDS session variable](ABENCDS_SESSION_VARIABLE_V1.html)\\ `client` is now linked to this HANA session variable.

An [inline declaration](ABENINLINE_DECLARATION_GLOSRY.html) with the [declaration operator](ABENDECLARATION_OPERATOR_GLOSRY.html)\\ [`DATA`](ABENDATA_INLINE.html) can now also be specified at the operand position for `dbcur` of the [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) statement.

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_763.html), which handles the statement more strictly than the regular syntax check.

-   The new numeric function [`DIVISION`](ABENSQL_ARITH_FUNC.html) enables divisions with decimal places.
-   The new string functions [`LOWER`](ABENSQL_STRING_FUNC.html) and [`UPPER`](ABENSQL_STRING_FUNC.html) implement uppercase and lowercase.
-   The new string functions [`LEFT`](ABENSQL_STRING_FUNC.html), [`CONCAT_WITH_SPACE`](ABENSQL_STRING_FUNC.html), [`INSTR`](ABENSQL_STRING_FUNC.html), and [`RPAD`](ABENSQL_STRING_FUNC.html) perform operations on strings.
-   In the string functions [`LPAD`](ABENSQL_STRING_FUNC.html), [`LTRIM`](ABENSQL_STRING_FUNC.html), and [`RTRIM`](ABENSQL_STRING_FUNC.html), arguments passed as constants or literals can now contain special characters.
-   The new date functions [`DATS_IS_VALID`](ABENSQL_DATE_FUNC.html), [`DATS_DAYS_BETWEEN`](ABENSQL_DATE_FUNC.html), [`DATS_ADD_DAYS`](ABENSQL_DATE_FUNC.html) and [`DATS_ADD_MONTHS`](ABENSQL_DATE_FUNC.html) execute operations with date fields.
-   An addition [`AS dtype`](ABAPSELECT_AVG_AS.html) can now be specified in the aggregate function [`AVG`](ABAPSELECT_AGGREGATE.html) to define the data type of the result.

-   The addition [`ORDER BY PRIMARY KEY`](ABAPORDERBY_CLAUSE.html) of the [`SELECT`](ABAPSELECT.html) statement can now also be specified if a column is specified multiple times in the [`SELECT`](ABAPSELECT_LIST.html) list, without the same name being blocked by alternative names.
-   The components of a [replacement object](ABENREPLACEMENT_OBJECT_GLOSRY.html) must no longer be in the same order as the associated components of the replaced database table or classic view.
-   When accessing [CDS views](ABENCDS_VIEW_GLOSRY.html) that use [session variables](ABENCDS_SESSION_VARIABLE_V1.html), the addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) can now be used. When accessing [CDS views](ABENCDS_VIEW_GLOSRY.html) that do not use the [session variable](ABENCDS_SESSION_VARIABLE_V1.html)\\ `client`, the addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT.html) can now be used.

abenabap.html abennews.html abennews-75.html abennews-751.html