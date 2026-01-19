---
title: "ABENNEWS-778-ABAP_SQL"
description: |
  ABENNEWS-778-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-778-ABAP_SQL.htm"
abapFile: "ABENNEWS-778-ABAP_SQL.html"
keywords: ["select", "do", "if", "try", "ABENNEWS", "778", "ABAP", "SQL"]
---

[1. New Aggregate Function `ALLOW_PRECISION_LOSS`](#ABAP_MODIFICATION_1@4@)

[2\. Optional Window Frame Specification within a Window Function](#ABAP_MODIFICATION_2@4@)

[3. New Window Functions `FIRST_VALUE` and `LAST_VALUE`](#ABAP_MODIFICATION_3@4@)

[4\. New Date/Time Conversion Functions](#ABAP_MODIFICATION_4@4@)

[5\. New Time Stamp Functions](#ABAP_MODIFICATION_5@4@)

[6\. New Date Functions](#ABAP_MODIFICATION_6@4@)

[7. New Additions After the `ORDER BY` Clause](#ABAP_MODIFICATION_7@4@) 

[8\. New Aggregate Functions](#ABAP_MODIFICATION_8@4@)

[9. New Geometry Conversion Function `as_geo_json`](#ABAP_MODIFICATION_9@4@)

[10\. SQL Conditions Revised](#ABAP_MODIFICATION_10@4@)

ABAP SQL now supports the following new [aggregate function](ABENAGGREGATE_FUNCTION_GLOSRY.html) in combination with the [aggregate expression](ABENAGGREGATE_EXPRESSION_GLOSRY.html)\\ [`SUM`](ABENSQL_AGG_FUNC.html):

The optional [window frame specification](ABAPSELECT_OVER.html) allows a subset of rows within a window, called a frame, to be defined. Frames are determined with respect to the current row, which enables the frame to move within a window.

ABAP SQL now supports the following new [window functions](ABENWINDOW_FUNCTION_GLOSRY.html) in [window expressions](ABENWINDOW_EXPRESSION_GLOSRY.html):

ABAP SQL now supports the following new [date/time conversion functions](ABENSQL_DATE_TIME_CONVERSIONS.html):

ABAP SQL now supports the following new [time stamp functions](ABENSQL_TIMESTAMP_FUNC.html):

ABAP SQL now supports the following new [date functions](ABENSQL_DATE_FUNC.html):

ABAP SQL now supports the following additions after the [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause:

ABAP SQL now supports the following new [aggregate functions](ABENSQL_AGG_FUNC.html):

ABAP SQL now supports the following new [geometry conversion function](ABENSQL_GEO_CONV_FUNC.html):

The following SQL conditions were revised:

-   [`ALLOW_PRECISION_LOSS`](ABAPSELECT_ALLOW_PRECISION_LOSS.html)

-   [`FIRST_VALUE`](ABENSQL_WIN_FUNC.html) and [`LAST_VALUE`](ABENSQL_WIN_FUNC.html).

-   [`TSTMPL_TO_UTCL`](ABENSQL_DATE_TIME_CONVERSIONS.html) and [`TSTMPL_FROM_UTCL`](ABENSQL_DATE_TIME_CONVERSIONS.html)
-   [`DATS_TO_DATN`](ABENSQL_DATE_TIME_CONVERSIONS.html) and [`DATS_FROM_DATN`](ABENSQL_DATE_TIME_CONVERSIONS.html)
-   [`TIMS_TO_TIMN`](ABENSQL_DATE_TIME_CONVERSIONS.html) and [`TIMS_FROM_TIMN`](ABENSQL_DATE_TIME_CONVERSIONS.html)

-   [`UTCL_CURRENT`](ABENSQL_TIMESTAMP_FUNC.html), [`UTCL_ADD_SECONDS`](ABENSQL_TIMESTAMP_FUNC.html), and [`UTCL_SECONDS_BETWEEN`](ABENSQL_TIMESTAMP_FUNC.html).

-   [`DATN_DAYS_BETWEEN`](ABENSQL_DATE_FUNC.html), [`DATN_ADD_DAYS`](ABENSQL_DATE_FUNC.html), and [`DATN_ADD_MONTHS`](ABENSQL_DATE_FUNC.html).

-   [`NULLS FIRST`](ABAPORDERBY_CLAUSE.html) and [`NULLS LAST`](ABAPORDERBY_CLAUSE.html).

-   `MEDIAN`, `STDDEV`, `VAR`, `CORR`, and `CORR_SPEARMAN`.

-   [`as_geo_json`](ABENSQL_GEO_CONV_FUNC.html)

-   The operator [`IN`](ABENWHERE_LOGEXP_LIST_IN.html) can now be used with a [subquery that returns value tuples](ABENWHERE_LOGEXP_LIST_IN.html).
-   [SQL functions](ABENABAP_SQL_BUILTIN_FUNCTIONS.html) and [cast expressions](ABENSQL_CAST.html) can now be used as operands on the right side of [comparison operators](ABENWHERE_LOGEXP_COMPARE.html).

abenabap.html abennews.html abennews-77.html abennews-778.html