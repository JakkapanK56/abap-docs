---
title: "ABENSQL_GEN_DATE_FUNC"
description: |
  ABENSQL_GEN_DATE_FUNC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_GEN_DATE_FUNC.htm"
abapFile: "ABENSQL_GEN_DATE_FUNC.html"
keywords: ["select", "insert", "delete", "do", "if", "case", "catch", "class", "data", "types", "ABENSQL", "GEN", "DATE", "FUNC"]
---

`... IS_VALID( date|time|utclong )    | EXTRACT_YEAR( date|utclong )    | EXTRACT_MONTH( date|utclong )    | EXTRACT_DAY( date|utclong )    | DAYNAME( date|utclong )    | MONTHNAME( date|utclong )    | WEEKDAY( date|utclong )    | DAYS_BETWEEN( \{date1|utclong1\},\{date2|utclong2\} )    | ADD_DAYS( \{date|utclong\},days )    | ADD_MONTHS( \{date|utclong\},months ) ...`

[1. `... IS_VALID( date|time|utclong )`](#ABAP_VARIANT_1@1@)

[2. `... EXTRACT_YEAR( date|utclong )`](#ABAP_VARIANT_2@1@)

[3. `... EXTRACT_MONTH( date|utclong )`](#ABAP_VARIANT_3@1@)

[4. `... EXTRACT_DAY( date|utclong )`](#ABAP_VARIANT_4@1@)

[5. `... DAYNAME( date|utclong )`](#ABAP_VARIANT_5@1@)

[6. `... MONTHNAME( date|utclong )`](#ABAP_VARIANT_6@1@)

[7. `... WEEKDAY( date|utclong )`](#ABAP_VARIANT_7@1@)

[8. `... DAYS_BETWEEN( \{date1|utclong1\},\{date2|utclong2\} )`](#ABAP_VARIANT_8@1@)

[9. `... ADD_DAYS( \{date|utclong\},days )`](#ABAP_VARIANT_9@1@)

[10. `... ADD_MONTHS( \{date|utclong\},months )`](#ABAP_VARIANT_10@1@)

These SQL functions perform operations with arguments of the built-in data types [`DATN`](ABENDDIC_BUILTIN_TYPES.html), [`DATS`](ABENDDIC_BUILTIN_TYPES.html), [`TIMN`](ABENDDIC_BUILTIN_TYPES.html), [`TIMS`](ABENDDIC_BUILTIN_TYPES.html), and [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

All generic functions enforce [strict mode from ABAP release 7.83](ABENABAP_SQL_STRICTMODE_783.html).

The generic function `IS_VALID` determines whether the specification `date`, `time`, or `utclong` has a valid format. For more information about the `IS_VALID` function, see [time functions](ABENSQL_TIME_FUNC.html).

The generic function `IS_VALID` applies to [time functions](ABENSQL_TIME_FUNC.html) and [time stamp functions](ABENSQL_TIMESTAMP_FUNC.html) as well.

Applying the generic function to a date column of the DDIC database table `DEMO_EXPRESSIONS`.

The generic function `EXTRACT_YEAR` extracts the year of a date or an UTC time stamp. The actual parameter must have the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html), [`DATS`](ABENDDIC_BUILTIN_TYPES.html), or [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

The result of the function `EXTRACT_YEAR` has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). The function returns the value 1 for initial input values. If no valid date is passed as a `DATS` value, the function `EXTRACT_YEAR` raises a catchable exception of class `CX_SY_OPEN_SQL_DB`.

The generic function `EXTRACT_MONTH` extracts the month of a date or an UTC time stamp. The actual parameter must have the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html), [`DATS`](ABENDDIC_BUILTIN_TYPES.html), or [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

The result of the function `EXTRACT_MONTH` has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). The function returns the value 1 for initial input values. If no valid date is passed as a `DATS` value, the function `EXTRACT_MONTH` raises a catchable exception of class `CX_SY_OPEN_SQL_DB`.

The generic function `EXTRACT_DAY` extracts the day of a date or an UTC time stamp. The actual parameter must have the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html), [`DATS`](ABENDDIC_BUILTIN_TYPES.html), or [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

The result of the function `EXTRACT_DAY` has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). The function returns the value 1 for initial input values. If no valid date is passed as a `DATS` value, the function `EXTRACT_DAY` raises a catchable exception of class `CX_SY_OPEN_SQL_DB`.

The generic function `DAYNAME` returns the name of a day of a date or an UTC time stamp in uppercase letters in English. The actual parameter must have the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html), [`DATS`](ABENDDIC_BUILTIN_TYPES.html), or [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

The result of the function `DAYNAME` has the data type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with length 9. If no valid date is saved in a `DATS` value, the function `DAYNAME` raises a catchable exception of class `CX_SY_OPEN_SQL_DB`.

The generic function `MONTHNAME` returns the name of a month of a date or an UTC time stamp in uppercase letters in English. The actual parameter must have the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html), [`DATS`](ABENDDIC_BUILTIN_TYPES.html), or [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

The result of the function `MONTHNAME` has the data type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with length 9. If no valid date is saved in a `DATS` value, the function `MONTHNAME` raises a catchable exception of class `CX_SY_OPEN_SQL_DB`.

The generic function `WEEKDAY` returns the number of a weekday of a date or an UTC time stamp from 0 to 6. The actual parameter must have the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html), [`DATS`](ABENDDIC_BUILTIN_TYPES.html), or [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

The result of the function `WEEKDAY` has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). If no valid date is saved in a `DATS` value, the function `WEEKDAY` raises a catchable exception of class `CX_SY_OPEN_SQL_DB`.

The function `DAYS_BETWEEN` calculates the difference between two dates `date1` or `utclong1` and `date2` or `utclong2` in days. The actual parameters must have the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html), [`DATS`](ABENDDIC_BUILTIN_TYPES.html), or [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) and must contain a valid date in the format `YYYYMMDD` or a valid UTC time stamp in a format like `0001-01-01T00:00:00.0000000`. Any invalid date is initialized and set to the value *00010101* before the calculation. Any invalid UTC time stamp is initialized and set to the value *0001-01-01T00:00:00.0000000* before the calculation.

The result has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). If `date2` is greater than `date1`, the result is positive. In the reverse case, it is negative.

It is possible to use two different data types for the function `DAYS_BETWEEN` and to calculate the days between these two dates.

The function `ADD_DAYS` adds `days` days to a specified date `date` or UTC time stamp `utclong`.

The result has the data type of the first actual parameter `days` or `utclong`. If `days` is positive, the number of days is added to `date` or `utclong`. In other cases, the number of days is subtracted. If the calculation produces an invalid date, the function raises a catchable exception of class `CX_SY_OPEN_SQL_DB` if the actual parameter `days` is of data type `DATN` or `UTCLONG`. If the actual parameter `days` is of data type `DATS`, the function returns the initial date.

The function `ADD_MONTHS` adds `months` months to a specified date `date` or UTC time stamp `utclong`.

The result has the data type of the first actual parameter `days` or `utclong`. If `months` is positive, the number of months is added to `date` or `utclong`. In other cases, the number of months is subtracted.

The system tries to create a date with the same day in an earlier or later month. If the target month has fewer days than the source month, the last day of the target month is returned. If the calculation produces an invalid date, the function raises a catchable exception of class `CX_SY_OPEN_SQL_DB` if the actual parameter `months` is of data type `DATN` or `UTCLONG`. If the actual parameter `months` is of data type `DATS`, the function returns the initial date.

Applying the generic functions to date and time stamp columns of the DDIC database table `DEMO_EXPRESSIONS`.

-   If the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html) or [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) is used, the function `EXTRACT_YEAR` calls the [HANA function `EXTRACT`](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20e1a58475191014a343f6fe96c9846c).
-   If the built-in data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) is used, the function `EXTRACT_YEAR` internally uses the ABAP SQL [`SUBSTRING`](ABENSQL_STRING_FUNC.html) function and a [`CAST`](ABENSQL_CAST.html) expression afterwards. The corresponding rules apply.

-   If the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html) or [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) is used, the function `EXTRACT_MONTH` calls the [HANA function `EXTRACT`](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20e1a58475191014a343f6fe96c9846c).
-   If the built-in data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) is used, the function `EXTRACT_MONTH` internally uses the ABAP SQL [`SUBSTRING`](ABENSQL_STRING_FUNC.html) function and a [`CAST`](ABENSQL_CAST.html) expression afterwards. The corresponding rules apply.

-   If the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html) or [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) is used, the function `EXTRACT_DAY` calls the [HANA function `EXTRACT`](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20e1a58475191014a343f6fe96c9846c).
-   If the built-in data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) is used, the function `EXTRACT_DAY` internally uses the ABAP SQL [`SUBSTRING`](ABENSQL_STRING_FUNC.html) function and a [`CAST`](ABENSQL_CAST.html) expression afterwards. The corresponding rules apply.

-   The actual parameter `date` must have the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html) or [`DATS`](ABENDDIC_BUILTIN_TYPES.html) and must contain a valid date in the format `YYYYMMDD`. The actual parameter `utclong` must have the built-in data type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) and must contain a valid UTC time stamp in a format like `0001-01-01T00:00:00.0000000`. Any invalid date is initialized and set to the value *00010101* before the calculation and any invalid UTC time stamp is initialized and set to the value *0001-01-01T00:00:00.0000000* before the calculation.
-   The actual parameter `days` must have the built-in data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html).

-   The actual parameter `date` must have the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html) or [`DATS`](ABENDDIC_BUILTIN_TYPES.html) and must contain a valid date in the format `YYYYMMDD`. The actual parameter `utclong` must have the built-in data type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) and must contain a valid UTC time stamp in a format like `0001-01-01T00:00:00.0000000`. Any invalid date is initialized and set to the value *00010101* before the calculation and any invalid UTC time stamp is initialized and set to the value *0001-01-01T00:00:00.0000000* before the calculation.
-   The actual parameter `months` must have the built-in data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html).

FINAL(date1) = cl\_demo\_date\_time=>get\_utc\_date( ). \\n\\ \\n... \\n\\ \\nDELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( VALUE #( \\n id = 'X' \\n dats1 = date1 ) ). \\n\\ \\nSELECT SINGLE \\n FROM demo\_expressions \\n FIELDS dats1 AS date1, \\n is\_valid( dats1 ) AS valid1 \\n INTO @FINAL(result). DELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( \\n VALUE #( id = 'X' dats1 = cl\_demo\_date\_time=>get\_user\_date( ) \\n datn2 = cl\_demo\_date\_time=>get\_user\_date( ) \\n utcl1 = \`2022-01-01T12:14:50\` ) ). \\n\\ \\nSELECT SINGLE dats1, datn2, utcl1, \\n extract\_year( dats1 ) AS extract\_year, \\n extract\_month( datn2 ) AS extract\_month, \\n extract\_day( utcl1 ) AS extract\_day, \\n dayname( dats1 ) AS dayname, \\n monthname( datn1 ) AS monthname, \\n weekday( utcl1 ) AS weekday, \\n days\_between( dats1,utcl1 ) AS days\_between, \\n add\_days( datn2,2 ) AS add\_days, \\n add\_months( utcl1,4 ) AS add\_months \\n FROM demo\_expressions \\n INTO @FINAL(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_special\_functions.html abenabap\_sql\_date\_time\_functions.html abensql\_date\_func.html