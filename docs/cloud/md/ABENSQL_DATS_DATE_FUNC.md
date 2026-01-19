---
title: "ABENSQL_DATS_DATE_FUNC"
description: |
  ABENSQL_DATS_DATE_FUNC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_DATS_DATE_FUNC.htm"
abapFile: "ABENSQL_DATS_DATE_FUNC.html"
keywords: ["select", "insert", "delete", "while", "if", "case", "class", "data", "types", "ABENSQL", "DATS", "DATE", "FUNC"]
---

`... DATS_IS_VALID( date )    | DATS_DAYS_BETWEEN( date1,date2 )    | DATS_ADD_DAYS( date,days )    | DATS_ADD_MONTHS( date,months ) ...`

[1. `... DATS_IS_VALID( date )`](#ABAP_VARIANT_1@1@)

[2. `... DATS_DAYS_BETWEEN( date1,date2 )`](#ABAP_VARIANT_2@1@)

[3. `... DATS_ADD_DAYS( date,days )`](#ABAP_VARIANT_3@1@)

[4. `... DATS_ADD_MONTHS( date,months )`](#ABAP_VARIANT_4@1@)

These SQL functions perform operations on dates with arguments of the built-in data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html).

The function `DATS_IS_VALID` determines whether `date` contains a valid date in the format `YYYYMMDD`. The actual parameter must have the built-in data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html). The result has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). A valid date produces the value 1 and all other input values (including the null value) produce the value 0.

The value *00010101* is a valid date here but the value *00000000* is not.

The function `DATS_DAYS_BETWEEN` calculates the difference between two dates `date1` and `date2` in days. The actual parameters must have the built-in data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) and should contain a valid date in the format `YYYYMMDD`. Any invalid date is initialized and set to the value *00010101* before the calculation. The result has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). If `date2` is greater than `date1`, the result is positive. In the reverse case, it is negative.

Before the difference is calculated, the specified dates are converted to integers like in ABAP, and the corresponding [rules](ABENCONVERSION_TYPE_D.html) apply.

The function `DATS_ADD_DAYS` adds `days` days to a specified date `date`.

The result has the data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html). If `days` is positive, the number of days is added to `date`. In other cases, the number of days is subtracted. If the calculation produces an invalid date, the initial value is reset.

For the calculation, the specified date is [converted](ABENCONVERSION_TYPE_D.html) to an integer like in ABAP, and the result is [converted](ABENCONVERSION_TYPE_IBS.html) to a date again while the corresponding rules apply.

The function `DATS_ADD_MONTHS` adds `months` months to a specified date `date`.

The result has the data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html). If `months` is positive, the number of months is added to `date`. In other cases, the number of months is subtracted.

The system tries to create a date with the same day in an earlier or later month. If the target month has fewer days than the source month, the last day of the target month is returned. If the calculation produces an invalid date, an error occurs.

Applying the date functions to date columns of the DDIC database table `DEMO_EXPRESSIONS`. The class `CL_DEMO_SQL_DATE_FUNCTIONS` executes this access to the table and displays the result.

-   The actual parameter `date` must have the built-in data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) and should contain a valid date in the format `YYYYMMDD`. Any invalid date is initialized and set to the value *00010101* before the calculation.
-   The actual parameter `days` must have the built-in data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html).

-   The actual parameter `date` must have the built-in data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) and should contain a valid date in the format `YYYYMMDD`. Any invalid date is initialized and set to the value *00010101* before the calculation.
-   The actual parameter `months` must have the built-in data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html).

DELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( \\n VALUE #( id = 'X' dats1 = cl\_demo\_date\_time=>get\_user\_date( ) \\n dats2 = cl\_demo\_date\_time=>get\_user\_date( ) + 100 \\n datn1 = cl\_demo\_date\_time=>get\_user\_date( ) + 5 \\n datn2 = cl\_demo\_date\_time=>get\_user\_date( ) + 200 ) ). \\n\\ \\nSELECT SINGLE dats1, dats2, \\n dats\_is\_valid( dats1 ) AS valid, \\n dats\_days\_between( dats1, dats2 ) AS days\_between, \\n dats\_add\_days( dats1,100 ) AS add\_days, \\n dats\_add\_months( dats1,-1 ) AS add\_month, \\n datn1, datn2, \\n datn\_days\_between( datn1, datn2 ) AS datn\_between, \\n datn\_add\_days( datn1,1 ) AS datn\_add\_days, \\n datn\_add\_months( datn1,1 ) AS datn\_add\_month \\n FROM demo\_expressions \\n INTO @FINAL(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_special\_functions.html abenabap\_sql\_date\_time\_functions.html abensql\_date\_func.html