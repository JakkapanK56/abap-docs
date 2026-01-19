---
title: "ABENNEWS-771-ABAP_SQL"
description: |
  ABENNEWS-771-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-771-ABAP_SQL.htm"
abapFile: "ABENNEWS-771-ABAP_SQL.html"
keywords: ["select", "do", "if", "case", "data", "internal-table", "ABENNEWS", "771", "ABAP", "SQL"]
---

[1\. Null Values in the Table Buffer](#ABAP_MODIFICATION_1@4@)

[2\. Date/Time Functions](#ABAP_MODIFICATION_2@4@)

[3\. Restrictions Removed](#ABAP_MODIFICATION_3@4@)

[4\. Weaker Check](#ABAP_MODIFICATION_4@4@)

[5\. New Check](#ABAP_MODIFICATION_5@4@)

The [table buffer](ABENTABLE_BUFFER_GLOSRY.html) now supports real [null values](ABENNULL_VALUE_GLOSRY.html). In [table buffering](ABENTABLE_BUFFERING_GLOSRY.html), null values are no longer transformed to type-dependent initial values. When the buffer is accessed, the same results are produced as when the database is accessed directly. The corresponding restrictions now no longer apply. The following are some of the aspects affected:

ABAP SQL now supports the following new date/time functions:

For [certain SQL expressions and functions](ABENSQL_ENGINE_EXPR.html), an ABAP SQL read statement no longer bypasses [table buffering](ABENTABLE_BUFFERING_GLOSRY.html).

ABAP SQL statements that exploit a database property not supported by all database platforms no longer produce a syntax check warning.

If the data of the [internal table](ABAPSELECT_ITAB.html) needs to be transported to the database in cases where the internal table is used as a [data source](ABAPSELECT_DATA_SOURCE.html) of the ABAP SQL statement [`SELECT`](ABAPSELECT.html), a syntax check warning occurs that can be hidden using the pragma `##itab_db_select`.

-   [Relational expressions](ABENABAP_SQL_STMT_LOGEXP.html) with operands that contain null values. The result of a comparison of this type is now also unknown when the comparison is made in the buffer (except in the expression [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html)).
-   If used, [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html) no longer bypasses table buffering.
-   Accesses to [buffered CDS views](ABENCDS_V1_BUFFERING.html). When the buffer is accessed, the same results are now produced as when the database is accessed directly. Null values are often produced by [outer joins](ABENCDS_JOINED_DATA_SOURCE_V1.html) or in expressions such as [case distinction](ABENCDS_CASE_EXPRESSION_V1.html) expressions. The restriction specifying that only those CDS views are buffered whose elements do not contain [null values](ABENNULL_VALUE_GLOSRY.html) no longer applies.

-   [Time functions](ABENSQL_TIME_FUNC.html)

-   `TIMS_IS_VALID`

-   [Time stamp functions](ABENSQL_TIMESTAMP_FUNC.html)

-   `TSTMP_IS_VALID`
-   `TSTMP_CURRENT_UTCTIMESTAMP`
-   `TSTMP_SECONDS_BETWEEN`
-   `TSTMP_ADD_SECONDS`

-   [Date/time conversions](ABENSQL_DATE_TIME_CONVERSIONS.html)

-   `TSTMP_TO_DATS`
-   `TSTMP_TO_TIMS`
-   `TSTMP_TO_DST`
-   `DATS_TIMS_TO_TSTMP`

abenabap.html abennews.html abennews-77.html abennews-771.html