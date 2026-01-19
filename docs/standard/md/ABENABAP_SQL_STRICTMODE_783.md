---
title: "ABENABAP_SQL_STRICTMODE_783"
description: |
  ABENABAP_SQL_STRICTMODE_783 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_783.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_783.html"
keywords: ["ABENABAP", "SQL", "STRICTMODE", "783"]
---

The strict mode of the syntax check in ABAP release 7.83 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.83](ABENNEWS-783-ABAP_SQL.html):

The strict mode in ABAP release 7.83 covers all rules of the [strict mode in ABAP release 7.82](ABENABAP_SQL_STRICTMODE_782.html).

-   Use of the string function [`INITCAP`](ABENSQL_STRING_FUNC.html).
-   Use of one of the new date/time functions [`IS_VALID`](ABENSQL_TIME_FUNC.html), [`EXTRACT_YEAR`](ABENSQL_DATE_FUNC.html), [`EXTRACT_MONTH`](ABENSQL_DATE_FUNC.html), [`EXTRACT_DAY`](ABENSQL_DATE_FUNC.html), [`EXTRACT_HOUR`](ABENSQL_TIME_FUNC.html), [`EXTRACT_MINUTE`](ABENSQL_TIME_FUNC.html), [`EXTRACT_SECOND`](ABENSQL_TIME_FUNC.html), [`DAYNAME`](ABENSQL_DATE_FUNC.html), [`MONTHNAME`](ABENSQL_DATE_FUNC.html), [`WEEKDAY`](ABENSQL_DATE_FUNC.html), [`DAYS_BETWEEN`](ABENSQL_DATE_FUNC.html), [`ADD_DAYS`](ABENSQL_DATE_FUNC.html), and [`ADD_MONTHS`](ABENSQL_DATE_FUNC.html).
-   Use of [new casts](ABENSQL_CAST.html).
-   Use of the set operators [`INTERSECT`](ABAPUNION.html) and [`EXCEPT`](ABAPUNION.html).
-   Use of the function [`UNIT_CONVERSION`](ABENSQL_CURR_UNIT_CONV_FUNC.html).
-   New special expression [`sql_null`](ABENSQL_NULL.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html