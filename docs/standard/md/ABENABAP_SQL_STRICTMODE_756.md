---
title: "ABENABAP_SQL_STRICTMODE_756"
description: |
  ABENABAP_SQL_STRICTMODE_756 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_756.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_756.html"
keywords: ["ABENABAP", "SQL", "STRICTMODE", "756"]
---

The strict mode of the syntax check in ABAP release 7.56 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.56](ABENNEWS-756-ABAP_SQL.html):

The strict mode in ABAP release 7.56 covers all rules of the [strict mode in ABAP release 7.55](ABENABAP_SQL_STRICTMODE_755.html).

-   Use of the string function [`INITCAP`](ABENSQL_STRING_FUNC.html).
-   Use of one of the new date/time functions [`IS_VALID`](ABENSQL_TIME_FUNC.html), [`EXTRACT_YEAR`](ABENSQL_DATE_FUNC.html), [`EXTRACT_MONTH`](ABENSQL_DATE_FUNC.html), [`EXTRACT_DAY`](ABENSQL_DATE_FUNC.html), [`EXTRACT_HOUR`](ABENSQL_TIME_FUNC.html), [`EXTRACT_MINUTE`](ABENSQL_TIME_FUNC.html), [`EXTRACT_SECOND`](ABENSQL_TIME_FUNC.html), [`DAYNAME`](ABENSQL_DATE_FUNC.html), [`MONTHNAME`](ABENSQL_DATE_FUNC.html), [`WEEKDAY`](ABENSQL_DATE_FUNC.html), [`DAYS_BETWEEN`](ABENSQL_DATE_FUNC.html), [`ADD_DAYS`](ABENSQL_DATE_FUNC.html), and [`ADD_MONTHS`](ABENSQL_DATE_FUNC.html).
-   Use of [new casts](ABENSQL_CAST.html).
-   Use of the set operators [`INTERSECT`](ABAPUNION.html) and [`EXCEPT`](ABAPUNION.html).
-   Use of the function [`UNIT_CONVERSION`](ABENSQL_CURR_UNIT_CONV_FUNC.html).
-   New special expression [`sql_null`](ABENSQL_NULL.html).
-   Use of the CDS system table functions [`SERIES_GENERATE_DATE`](ABENCDS_SERIES_GENERATORS.html), [`SERIES_GENERATE_INTEGER`](ABENCDS_SERIES_GENERATORS.html), [`SERIES_GENERATE_TIME`](ABENCDS_SERIES_GENERATORS.html), and [`SERIES_GENERATE_TIMESTAMP`](ABENCDS_SERIES_GENERATORS.html).
-   Use of the parameter `start` in the string function [`REPLACE_REGEXPR`](ABENSQL_STRING_FUNC.html).
-   Use of the string function [`SUBSTRING_REGEXPR`](ABENSQL_STRING_FUNC.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html