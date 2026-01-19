---
title: "ABENABAP_SQL_STRICTMODE_778"
description: |
  ABENABAP_SQL_STRICTMODE_778 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_778.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_778.html"
keywords: ["select", "do", "if", "try", "ABENABAP", "SQL", "STRICTMODE", "778"]
---

The strict mode of the syntax check in ABAP release 7.78 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.78](ABENNEWS-778-ABAP_SQL.html):

The strict mode in ABAP release 7.78 covers all rules of the [strict mode in ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html).

-   Use of the function [`ALLOW_PRECISION_LOSS`](ABAPSELECT_ALLOW_PRECISION_LOSS.html)
-   Optional addition [window frame specification](ABAPSELECT_OVER.html)
-   Window functions [`FIRST_VALUE`](ABENSQL_WIN_FUNC.html) and [`LAST_VALUE`](ABENSQL_WIN_FUNC.html).
-   Use of one of the new date/time functions [`TSTMPL_TO_UTCL`](ABENSQL_DATE_TIME_CONVERSIONS.html), [`TSTMPL_FROM_UTCL`](ABENSQL_DATE_TIME_CONVERSIONS.html), [`DATS_TO_DATN`](ABENSQL_DATE_TIME_CONVERSIONS.html), [`DATS_FROM_DATN`](ABENSQL_DATE_TIME_CONVERSIONS.html), [`TIMS_TO_TIMN`](ABENSQL_DATE_TIME_CONVERSIONS.html), [`TIMS_FROM_TIMN`](ABENSQL_DATE_TIME_CONVERSIONS.html), [`UTCL_CURRENT`](ABENSQL_TIMESTAMP_FUNC.html), [`UTCL_ADD_SECONDS`](ABENSQL_TIMESTAMP_FUNC.html), [`UTCL_SECONDS_BETWEEN`](ABENSQL_TIMESTAMP_FUNC.html), [`DATN_ADD_DAYS`](ABENSQL_DATE_FUNC.html), [`DATN_ADD_MONTHS`](ABENSQL_DATE_FUNC.html), and [`DATN_DAYS_BETWEEN`](ABENSQL_DATE_FUNC.html).
-   New additions after the `ORDER BY` clause: [`NULLS FIRST`](ABAPORDERBY_CLAUSE.html) and [`NULLS LAST`](ABAPORDERBY_CLAUSE.html).
-   Use of one of the new [aggregate functions](ABENSQL_AGG_FUNC.html)\\ `MEDIAN`, `STDDEV`, `VAR`, `CORR`, and `CORR_SPEARMAN`.
-   New geometry conversion function `as_geo_json`.
-   Subqueries in a relational expression using the operator [`IN`](ABENWHERE_LOGEXP_LIST_IN.html) with an operand list.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html