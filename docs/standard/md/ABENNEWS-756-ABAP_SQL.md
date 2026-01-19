---
title: "ABENNEWS-756-ABAP_SQL"
description: |
  ABENNEWS-756-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-756-ABAP_SQL.htm"
abapFile: "ABENNEWS-756-ABAP_SQL.html"
keywords: ["select", "if", "types", "ABENNEWS", "756", "ABAP", "SQL"]
---

[1\. New String Function](#ABAP_MODIFICATION_1@4@)

[2\. New Date and Time Functions](#ABAP_MODIFICATION_2@4@)

[3\. New Casts](#ABAP_MODIFICATION_3@4@)

[4\. New Set Operators](#ABAP_MODIFICATION_4@4@)

[5\. New Function for Unit Conversion](#ABAP_MODIFICATION_5@4@)

[6\. New Expression Null](#ABAP_MODIFICATION_6@4@)

[7. Addition for the String Function `REPLACE_REGEXPR`](#ABAP_MODIFICATION_7@4@)

[8. New String Function `SUBSTRING_REGEXPR`](#ABAP_MODIFICATION_8@4@)

[9\. Byte Fields as Null Indicators](#ABAP_MODIFICATION_9@4@)

[10\. Position of Null Indicators](#ABAP_MODIFICATION_10@4@)

[11\. Strict Mode of the Syntax Check](#ABAP_MODIFICATION_11@4@)

ABAP SQL now supports the new string function [`INITCAP`](ABENSQL_STRING_FUNC.html).

The following new generic [date and time functions](ABENABAP_SQL_DATE_TIME_FUNCTIONS.html) are available:

The following [new casts](ABENSQL_CAST.html) are available:

ABAP SQL now supports the new set operators [`INTERSECT`](ABAPUNION.html) and [`EXCEPT`](ABAPUNION.html).

ABAP SQL now supports the new function [`UNIT_CONVERSION`](ABENSQL_CURR_UNIT_CONV_FUNC.html) for unit conversions.

ABAP SQL now supports the new expression [`NULL`](ABENSQL_NULL.html).

The new parameter `start` can now be used in the function [`REPLACE_REGEXPR`](ABENSQL_STRING_FUNC.html). Additionally, the parameter `occurrence` can now include [expressions](ABENEXPRESSION_GLOSRY.html).

ABAP SQL now supports the new string function [`SUBSTRING_REGEXPR`](ABENSQL_STRING_FUNC.html) which supports regular expressions.

The new addition [`INDICATORS ... NULL BITFIELD`](ABAPSELECT_INDICATORS.html) of the `INTO` clause of a `SELECT` statement allows a [byte field type](ABENBYTE_FIELD_TYPE_GLOSRY.html) component to be specified as a [null indicator](ABENNULL_INDICATOR_GLOSRY.html). The single bits of the byte field serve for indicating null values in the result set of the query. For this purpose, [condensed indicator structures](ABENCONDENSED_IND_STRUCTURE_GLOSRY.html) can be declared with the addition [`AS BITFIELD`](ABAPTYPES_INDICATORS.html) of the `TYPES` statement.

If `CORRESPONDING FIELDS` is used in the [`INTO`](ABAPINTO_CLAUSE.html) clause of a `SELECT` statement, a [null indicator](ABENNULL_INDICATOR_GLOSRY.html) defined by [`INDICATORS`](ABAPSELECT_INDICATORS.html) can be positioned anywhere in the target area. Otherwise, it must be the last component.

If one the new features listed above or one of the new CDS system table functions [`SERIES_GENERATE_`](ABENCDS_SERIES_GENERATORS.html) is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_783.html), which handles the statement more strictly than the regular syntax check.

**SQL Function** **Date** **Time** **Time Stamp**\\ `IS_VALID` [x](ABENSQL_DATE_FUNC.html) [x](ABENSQL_TIME_FUNC.html) [x](ABENSQL_TIMESTAMP_FUNC.html)\\ `EXTRACT_YEAR` [x](ABENSQL_DATE_FUNC.html) - [x](ABENSQL_TIMESTAMP_FUNC.html)\\ `EXTRACT_MONTH` [x](ABENSQL_DATE_FUNC.html) - [x](ABENSQL_TIMESTAMP_FUNC.html)\\ `EXTRACT_DAY` [x](ABENSQL_DATE_FUNC.html) - [x](ABENSQL_TIMESTAMP_FUNC.html)\\ `EXTRACT_HOUR` - [x](ABENSQL_TIME_FUNC.html) [x](ABENSQL_TIMESTAMP_FUNC.html)\\ `EXTRACT_MINUTE` - [x](ABENSQL_TIME_FUNC.html) [x](ABENSQL_TIMESTAMP_FUNC.html)\\ `EXTRACT_SECOND` - [x](ABENSQL_TIME_FUNC.html) [x](ABENSQL_TIMESTAMP_FUNC.html)\\ `DAYNAME` [x](ABENSQL_DATE_FUNC.html) - [x](ABENSQL_TIMESTAMP_FUNC.html)\\ `MONTHNAME` [x](ABENSQL_DATE_FUNC.html) - [x](ABENSQL_TIMESTAMP_FUNC.html)\\ `WEEKDAY` [x](ABENSQL_DATE_FUNC.html) - [x](ABENSQL_TIMESTAMP_FUNC.html)\\ `DAYS_BETWEEN` [x](ABENSQL_DATE_FUNC.html) - [x](ABENSQL_TIMESTAMP_FUNC.html)\\ `ADD_DAYS` [x](ABENSQL_DATE_FUNC.html) - [x](ABENSQL_TIMESTAMP_FUNC.html)\\ `ADD_MONTHS` [x](ABENSQL_DATE_FUNC.html) - [x](ABENSQL_TIMESTAMP_FUNC.html) **Source type** **Numeric target type** **Character-like target type** **Date/time field as target type**\\ `CHAR`, `SSTRING`, `DATS`, `TIMS` `INT1`, `INT2`, `INT4`, `INT8`, `DEC`, `CURR`, `QUAN`, `DECFLOAT16`, `DECFLOAT34`, `FLTP` - - `FLTP` `INT1`, `INT2`, `INT4`, `INT8`, `DEC`, `CURR`, `QUAN`, `DECFLOAT16`, `DECFLOAT34` `CHAR`, `SSTRING` - `DF16_DEC`, `DF34_DEC` `FLTP` - - `DATN` - - `DATS`\\ `TIMN` - - `TIMS` abenabap.html abennews.html abennews-75.html abennews-756.html