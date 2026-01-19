---
title: "ABENNEWS-755-ABAP_SQL"
description: |
  ABENNEWS-755-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-755-ABAP_SQL.htm"
abapFile: "ABENNEWS-755-ABAP_SQL.html"
keywords: ["select", "update", "do", "if", "try", "data", "types", "ABENNEWS", "755", "ABAP", "SQL"]
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

[11. New Window Function `NTILE`](#ABAP_MODIFICATION_11@4@)

[12. `SELECT`, `INTO target` Modification](#ABAP_MODIFICATION_12@4@) 

[13. New Type Conversion Function `to_blob`](#ABAP_MODIFICATION_13@4@)

[14. New Type Conversion Function `to_clob`](#ABAP_MODIFICATION_14@4@)

[15.  New Currency Conversion Function `currency conversion`](#ABAP_MODIFICATION_15@4@)

[16\. Streaming and Locators Can Now Be Used on SQL Expressions](#ABAP_MODIFICATION_16@4@)

[17\. Further Data Types Allowed in Elementary SQL Expressions](#ABAP_MODIFICATION_17@4@)

[18\. Hierarchy Load Options](#ABAP_MODIFICATION_18@4@)

[19\. Typed Literals](#ABAP_MODIFICATION_19@4@)

[20\. New String Functions](#ABAP_MODIFICATION_20@4@)

[21. Addition to the `UPDATE FROM` Clause](#ABAP_MODIFICATION_21@4@)

ABAP SQL now supports the following new [aggregate function](ABENAGGREGATE_FUNCTION_GLOSRY.html) in combination with the [aggregate expression](ABENAGGREGATE_EXPRESSION_GLOSRY.html) [`SUM`](ABENSQL_AGG_FUNC.html):

The optional [window frame specification](ABAPSELECT_OVER.html) defines a subset of rows within a window, called frame. Frames are determined with respect to the current row, which enables the frame to move within a window.

ABAP SQL now supports the following new [window functions](ABENWINDOW_FUNCTION_GLOSRY.html) in [window expressions](ABENWINDOW_EXPRESSION_GLOSRY.html):

ABAP SQL now supports the following new [date/time conversion functions](ABENSQL_DATE_TIME_CONVERSIONS.html):

ABAP SQL now supports the following new [time stamp functions](ABENSQL_TIMESTAMP_FUNC.html):

ABAP SQL now supports the following new [date functions](ABENSQL_DATE_FUNC.html):

ABAP SQL now supports the following additions after the [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause:

ABAP SQL now supports the following new [aggregate functions](ABENSQL_AGG_FUNC.html):

ABAP SQL now supports the following new [geometry conversion function](ABENSQL_GEO_CONV_FUNC.html):

The following ABAP SQL conditions were revised:

ABAP SQL now supports the following new [window function](ABENWINDOW_FUNCTION_GLOSRY.html) in [window expressions](ABENWINDOW_EXPRESSION_GLOSRY.html):

When using `SELECT, INTO target`, host variables can now be declared inline even when the `FROM` clause is dynamic, as long as all fields of the `SELECT` list are known statically. Previously, the structure of the result set, including the `SELECT` list, the `FROM` clause, and any indicators needed to be static.

See [New Type Conversion Function `to_clob`](ABENNEWS-755-ABAP_SQL.html).

ABAP SQL now supports the new [type conversion functions](ABENSQL_TYPE_CONV_FUNC.html)\\ [`to_clob`](ABENSQL_TYPE_CONV_FUNC.html) and [`to_blob`](ABENSQL_TYPE_CONV_FUNC.html).

ABAP SQL now supports the new currency conversion function [`currency_conversion`](ABENSQL_CURR_UNIT_CONV_FUNC.html).

Streaming and locators can now be used in combination with SQL expressions such as [`TO_CLOB`](ABENSQL_TYPE_CONV_FUNC.html), [`TO_BLOB`](ABENSQL_TYPE_CONV_FUNC.html), and [`AS_GEO_JSON`](ABENSQL_GEO_CONV_FUNC.html).

[Elementary SQL expressions](ABENSQL_ELEM.html) can now also have the dictionary data types `STRING` and `RAWSTRING`.

The [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) can now use the new addition `LOAD BULK|INCREMENTAL|load_option` to specify the load policy for a generated hierarchy.

[Typed literals](ABENABAP_SQL_TYPED_LITERALS.html) for many ABAP Dictionary types are now available in ABAP SQL.

ABAP SQL now supports the new string functions [`REPLACE_REGEXPR`](ABENSQL_STRING_FUNC.html), [`LIKE_REGEXPR`](ABENSQL_STRING_FUNC.html), and [`OCCURRENCES_REGEXPR`](ABENSQL_STRING_FUNC.html) that support regular expressions.

[Set indicators](ABAPUPDATE_SET_INDICATOR.html) can now be used as additions after the [`UPDATE FROM`](ABAPUPDATE_SOURCE.html) clause to indicate columns to be updated.

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

-   [`NTILE`](ABENSQL_WIN_FUNC.html)

abenabap.html abennews.html abennews-75.html abennews-755.html