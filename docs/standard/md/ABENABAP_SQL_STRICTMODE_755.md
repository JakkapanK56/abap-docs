---
title: "ABENABAP_SQL_STRICTMODE_755"
description: |
  ABENABAP_SQL_STRICTMODE_755 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_755.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_755.html"
keywords: ["select", "update", "do", "if", "try", "ABENABAP", "SQL", "STRICTMODE", "755"]
---

The strict mode of the syntax check in ABAP release 7.55 applies to all ABAP SQL statements that use one of the following properties introduced in [ABAP release 7.55](ABENNEWS-755-ABAP_SQL.html):

The strict mode in ABAP release 7.55 covers all rules of the [strict mode in ABAP release 7.54](ABENABAP_SQL_STRICTMODE_754.html).

-   Use of the function [`ALLOW_PRECISION_LOSS`](ABAPSELECT_ALLOW_PRECISION_LOSS.html)
-   Optional addition [window frame specification](ABAPSELECT_OVER.html)
-   Window functions [`FIRST_VALUE`](ABENSQL_WIN_FUNC.html) and [`LAST_VALUE`](ABENSQL_WIN_FUNC.html).
-   Use of one of the new date/time functions [`TSTMPL_TO_UTCL`](ABENSQL_DATE_TIME_CONVERSIONS.html), [`TSTMPL_FROM_UTCL`](ABENSQL_DATE_TIME_CONVERSIONS.html), [`DATS_TO_DATN`](ABENSQL_DATE_TIME_CONVERSIONS.html), [`DATS_FROM_DATN`](ABENSQL_DATE_TIME_CONVERSIONS.html), [`TIMS_TO_TIMN`](ABENSQL_DATE_TIME_CONVERSIONS.html), [`TIMS_FROM_TIMN`](ABENSQL_DATE_TIME_CONVERSIONS.html), [`UTCL_CURRENT`](ABENSQL_TIMESTAMP_FUNC.html), [`UTCL_ADD_SECONDS`](ABENSQL_TIMESTAMP_FUNC.html), [`UTCL_SECONDS_BETWEEN`](ABENSQL_TIMESTAMP_FUNC.html), [`DATN_ADD_DAYS`](ABENSQL_DATE_FUNC.html), [`DATN_ADD_MONTHS`](ABENSQL_DATE_FUNC.html), and [`DATN_DAYS_BETWEEN`](ABENSQL_DATE_FUNC.html).
-   New additions after the `ORDER BY` clause: [`NULLS FIRST`](ABAPORDERBY_CLAUSE.html) and [`NULLS LAST`](ABAPORDERBY_CLAUSE.html).
-   Use of one of the new [aggregate functions](ABENSQL_AGG_FUNC.html)\\ `MEDIAN`, `STDDEV`, `VAR`, `CORR`, and `CORR_SPEARMAN`.
-   New geometry conversion function `as_geo_json`.
-   Subqueries in a relational expression using the operator [`IN`](ABENWHERE_LOGEXP_LIST_IN.html) with an operand list.
-   Use of the window function [`NTILE`](ABENSQL_WIN_FUNC.html)
-   Use of the SQL function [`TO_CLOB`](ABENSQL_TYPE_CONV_FUNC.html)
-   Use of the SQL function [`TO_BLOB`](ABENSQL_TYPE_CONV_FUNC.html)
-   Use of [typed literals](ABENABAP_SQL_TYPED_LITERALS.html)
-   Use of the string functions [`REPLACE_REGEXPR`](ABENSQL_STRING_FUNC.html), [`LIKE_REGEXPR`](ABENSQL_STRING_FUNC.html), and [`OCCURRENCES_REGEXPR`](ABENSQL_STRING_FUNC.html).
-   Use of [set indicators](ABAPUPDATE_SET_INDICATOR.html) after [`UPDATE FROM`](ABAPUPDATE_SOURCE.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html