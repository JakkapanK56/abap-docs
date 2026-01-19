---
title: "ABENSQL_GEN_TIME_FUNC"
description: |
  ABENSQL_GEN_TIME_FUNC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_GEN_TIME_FUNC.htm"
abapFile: "ABENSQL_GEN_TIME_FUNC.html"
keywords: ["select", "insert", "delete", "do", "if", "catch", "class", "data", "types", "ABENSQL", "GEN", "TIME", "FUNC"]
---

`... IS_VALID( date|time|utclong )    | EXTRACT_HOUR( time|utclong )    | EXTRACT_MINUTE( time|utclong )    | EXTRACT_SECOND( time|utclong ) ...`

[1. `... IS_VALID( date|time|utclong ) ...`](#ABAP_VARIANT_1@1@)

[2. `... EXTRACT_HOUR( time|utclong ) ...`](#ABAP_VARIANT_2@1@)

[3. `... EXTRACT_MINUTE( time|utclong ) ...`](#ABAP_VARIANT_3@1@)

[4. `... EXTRACT_SECOND( time|utclong ) ...`](#ABAP_VARIANT_4@1@)

These SQL functions perform operations with arguments of the built-in data types [`DATN`](ABENDDIC_BUILTIN_TYPES.html), [`DATS`](ABENDDIC_BUILTIN_TYPES.html), [`TIMN`](ABENDDIC_BUILTIN_TYPES.html), [`TIMS`](ABENDDIC_BUILTIN_TYPES.html), and [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

The generic function `IS_VALID` determines whether

The result has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). A valid time and the initial value (for the data types `TIMN` and `TIMS`) produce the value 1 and all other input values (including the null value) produce the value 0.

The generic function `IS_VALID` is also available for [date functions](ABENSQL_DATE_FUNC.html) and [time stamp functions](ABENSQL_TIMESTAMP_FUNC.html).

Applying the generic function to a time column of the DDIC database table `DEMO_EXPRESSIONS`.

The generic function `EXTRACT_HOUR` extracts the hour of a time or an UTC time stamp. The actual parameter must have the built-in data type [`TIMN`](ABENDDIC_BUILTIN_TYPES.html), [`TIMS`](ABENDDIC_BUILTIN_TYPES.html), or [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

The result of the function `EXTRACT_HOUR` has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). The function returns the value 0 for initial input values. If no valid time is passed as a `TIMS` value, the function `EXTRACT_HOUR` raises a catchable exception of class `CX_SY_OPEN_SQL_DB`.

The generic function `EXTRACT_MINUTE` extracts the minute of a time or an UTC time stamp. The actual parameter must have the built-in data type [`TIMN`](ABENDDIC_BUILTIN_TYPES.html), [`TIMS`](ABENDDIC_BUILTIN_TYPES.html), or [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

The result of the function `EXTRACT_MINUTE` has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). The function returns the value 0 for initial input values. If no valid time is passed as a `TIMS` value, the function `EXTRACT_MINUTE` raises a catchable exception of class `CX_SY_OPEN_SQL_DB`.

The generic function `EXTRACT_SECOND` extracts the second of a time or an UTC time stamp. The actual parameter must have the built-in data type [`TIMN`](ABENDDIC_BUILTIN_TYPES.html), [`TIMS`](ABENDDIC_BUILTIN_TYPES.html), or [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

The result of the function `EXTRACT_SECOND` has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). The function returns the value 0 for initial input values. If no valid time is passed as a `TIMS` value, the function `EXTRACT_SECOND` raises a catchable exception of class `CX_SY_OPEN_SQL_DB`.

Applying the generic functions to time and time stamp columns of the DDIC database table `DEMO_EXPRESSIONS`.

-   the specified date `date` contains a valid date in the format `YYYYMMDD`. The actual parameter must have the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html) or [`DATS`](ABENDDIC_BUILTIN_TYPES.html).
-   the specified time `time` contains a valid time in the format `HHMMSS`. The actual parameter must have the built-in data type [`TIMN`](ABENDDIC_BUILTIN_TYPES.html) or [`TIMS`](ABENDDIC_BUILTIN_TYPES.html).
-   the specified time stamp `utclong` contains a valid [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX](ABENPOSIX_TIMESTAMP_GLOSRY.html) standard in a format like `0001-01-01T00:00:00.0000000`. The actual parameter must have the built-in data type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

-   If one of the built-in data types [`TIMN`](ABENDDIC_BUILTIN_TYPES.html) or [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) is used, the function `EXTRACT_HOUR` calls the [HANA function `EXTRACT`](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20e1a58475191014a343f6fe96c9846c).
-   If the built-in data type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html) is used, the function `EXTRACT_HOUR` internally uses the ABAP SQL [`SUBSTRING`](ABENSQL_STRING_FUNC.html) function and a [`CAST`](ABENSQL_CAST.html) expression afterwards. The corresponding rules apply.

-   If one of the built-in data types [`TIMN`](ABENDDIC_BUILTIN_TYPES.html) or [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) is used, the function `EXTRACT_MINUTE` calls the [HANA function `EXTRACT`](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20e1a58475191014a343f6fe96c9846c).
-   If the built-in data type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html) is used, the function `EXTRACT_MINUTE` internally uses the ABAP SQL [`SUBSTRING`](ABENSQL_STRING_FUNC.html) function and a [`CAST`](ABENSQL_CAST.html) expression afterwards. The corresponding rules apply.

-   If one of the built-in data types [`TIMN`](ABENDDIC_BUILTIN_TYPES.html) or [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) is used, the function `EXTRACT_SECOND` calls the [HANA function `EXTRACT`](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20e1a58475191014a343f6fe96c9846c).
-   If the built-in data type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html) is used, the function `EXTRACT_SECOND` internally uses the ABAP SQL [`SUBSTRING`](ABENSQL_STRING_FUNC.html) function and a [`CAST`](ABENSQL_CAST.html) expression afterwards. The corresponding rules apply.

FINAL(time1) = cl\_demo\_date\_time=>get\_utc\_time( ). \\n\\ \\n... \\n\\ \\nDELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( VALUE #( \\n id = 'X' \\n tims1 = time1 ) ). \\n\\ \\nSELECT SINGLE \\n FROM demo\_expressions \\n FIELDS tims1 AS time1, \\n is\_valid( tims1 ) AS valid1 \\n INTO @FINAL(result). DELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( \\n VALUE #( id = 'X' tims1 = cl\_demo\_date\_time=>get\_user\_time( ) \\n timn2 = cl\_demo\_date\_time=>get\_user\_time( ) \\n utcl1 = \`2022-01-01T12:14:50\` ) ). \\n\\ \\nSELECT SINGLE tims1, timn2, utcl1, \\n extract\_hour( tims1 ) AS extract\_hour, \\n extract\_minute( timn2 ) AS extract\_minute, \\n extract\_second( utcl1 ) AS extract\_second \\n FROM demo\_expressions \\n INTO @FINAL(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_special\_functions.html abenabap\_sql\_date\_time\_functions.html abensql\_time\_func.html