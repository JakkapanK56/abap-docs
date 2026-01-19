---
title: "ABENSQL_DATN_DATE_FUNC"
description: |
  ABENSQL_DATN_DATE_FUNC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_DATN_DATE_FUNC.htm"
abapFile: "ABENSQL_DATN_DATE_FUNC.html"
keywords: ["if", "case", "data", "types", "ABENSQL", "DATN", "DATE", "FUNC"]
---

`... DATN_DAYS_BETWEEN( date1,date2 )    | DATN_ADD_DAYS( date,days )    | DATN_ADD_MONTHS( date,months ) ...`

[1. `... DATN_DAYS_BETWEEN( date1,date2 )`](#ABAP_VARIANT_1@1@)

[2. `... DATN_ADD_DAYS( date,days )`](#ABAP_VARIANT_2@1@)

[3. `... DATN_ADD_MONTHS( date,months )`](#ABAP_VARIANT_3@1@)

These SQL functions perform operations on dates with arguments of the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html).

The function `DATN_DAYS_BETWEEN` calculates the difference between two specified dates `date1` and `date2` in days. The actual parameters must have the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html) and must contain a valid date in the format `YYYYMMDD`. The result has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). If `date2` is greater than `date1`, the result is positive. Otherwise, the result is negative. If the result is outside of the range of valid dates, an error occurs.

`DATN_DAYS_BETWEEN` enforces [strict mode from ABAP release 7.78](ABENABAP_SQL_STRICTMODE_778.html).

The function `DATN_ADD_DAYS` adds `days` days to a specified date `date`.

The result has the data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html). If `days` is positive, the number of days is added to `date`. In other cases, the number of days is subtracted. If the calculation produces an invalid date, an error occurs.

`DATN_ADD_DAYS` enforces [strict mode from ABAP release 7.78](ABENABAP_SQL_STRICTMODE_778.html).

The function `DATN_ADD_MONTHS` adds `months` months to a specified date `date`.

The result has the data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html). If `months` is positive, the number of months is added to `date`. In other cases, the number of months is subtracted.

The system tries to create a date with the same day in an earlier or later month. If the target month has fewer days than the source month, the last day of the target month is returned. If the calculation produces an invalid date, an error occurs.

`DATN_ADD_MONTHS` enforces [strict mode from ABAP release 7.78](ABENABAP_SQL_STRICTMODE_778.html).

-   The actual parameter `date` must have the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html) and must contain a valid date in the format `YYYYMMDD`.
-   The actual parameter `days` must have the built-in data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html).

-   The actual parameter `date` must have the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html) and it must contain a valid date in the format `YYYYMMDD`.
-   The actual parameter `months` must have the built-in data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_special\_functions.html abenabap\_sql\_date\_time\_functions.html abensql\_date\_func.html