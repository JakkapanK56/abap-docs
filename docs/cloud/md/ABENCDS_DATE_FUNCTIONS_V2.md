---
title: "ABENCDS_DATE_FUNCTIONS_V2"
description: |
  ABENCDS_DATE_FUNCTIONS_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DATE_FUNCTIONS_V2.htm"
abapFile: "ABENCDS_DATE_FUNCTIONS_V2.html"
keywords: ["select", "while", "if", "case", "class", "data", "types", "ABENCDS", "DATE", "FUNCTIONS"]
---

`... DATN_DAYS_BETWEEN(date1,date2)    | DATN_ADD_DAYS(date,days)    | DATN_ADD_MONTHS(date,months)    | DATS_IS_VALID(date)    | DATS_DAYS_BETWEEN(date1,date2)    | DATS_ADD_DAYS(date,days,on_error)    | DATS_ADD_MONTHS(date,months,on_error) ...`

[1. `... DATN_DAYS_BETWEEN(date1,date2)`](#ABAP_VARIANT_1@1@)

[2. `... DATN_ADD_DAYS(date,days)`](#ABAP_VARIANT_2@1@)

[3. `... DATN_ADD_MONTHS(date,months)`](#ABAP_VARIANT_3@1@)

[4. `... DATS_IS_VALID(date)`](#ABAP_VARIANT_4@1@)

[5. `... DATS_DAYS_BETWEEN(date1,date2)`](#ABAP_VARIANT_5@1@)

[6. `... DATS_ADD_DAYS(date,days,on_error)`](#ABAP_VARIANT_6@1@)

[7. `... DATS_ADD_MONTHS(date,months,on_error)`](#ABAP_VARIANT_7@1@)

In a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), these functions execute operations with arguments of the built-in data types [`DATN`](ABENDDIC_BUILTIN_TYPES.html) and [`DATS`](ABENDDIC_BUILTIN_TYPES.html). The functions have [positional parameters](ABENPOSITIONAL_PARAMETER_GLOSRY.html) to which actual parameters must be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](ABENCDS_DATA_SOURCE_V2.html), [literals](ABENCDS_LITERAL_V2.html), [session variables](ABENCDS_SESSION_VARIABLE_V2.html), [parameters](ABENCDS_PARAMETER_V2.html), [path expressions](ABENCDS_PATH_EXPRESSION_V2.html), [built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V2.html), [SQL-based scalar functions](ABENCDS_SQL_SCALAR_FUNCTION.html), [reuse expressions](ABENCDS_REUSABLE_EXPRESSION_V2.html) using `$projection`, or [expressions](ABENCDS_EXPRESSIONS_V2.html) can all be specified as actual parameters. Only literals can be passed to the parameter `on_error`. If an actual parameter contains the [null value](ABENNULL_VALUE_GLOSRY.html), every function except `DATS_IS_VALID` returns a null value.

The function `DATN_DAYS_BETWEEN` calculates the difference between two specified dates, `date1` and `date2`, in days. The actual parameters must have the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html) and must contain a valid date in the format `YYYYMMDD`. They can be specified as [literals](ABENCDS_LITERAL_V2.html), as fields of a [data source](ABENCDS_DATA_SOURCE_V2.html), [parameters](ABENCDS_PARAMETER_V2.html), or as [path expressions](ABENCDS_PATH_EXPRESSION_V2.html). To use a session variable, it must be converted to data type `DATN` using the conversion function `DATS_TO_DATN`. The result has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). If `date2` is greater than `date1`, the result is positive. In the reverse case, the result is negative. If the result is outside of the range of valid dates, an error occurs.

The function `DATN_ADD_DAYS` adds `days` days to a specified date `date`.

The result has the data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html). If `days` is positive, the number of days is added to `date`. Otherwise, the number of days is subtracted. If the calculation produces an invalid date, an error occurs.

The days missing from the Gregorian calendar (from 5.10.1582 to 15.10.1582) are [handled as usual](ABENCONVERSION_TYPE_D.html) in ABAP.

The function `DATN_ADD_MONTHS` adds `months` months to a specified date `date`.

The result has the data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html). If `months` is positive, the number of months is added to `date`. Otherwise, the number of months is subtracted.

An attempt is made to create a date with the same day in an earlier or later month. If the target month has fewer days than the source month, the last day of the target month is returned. If the calculation produces an invalid date, an error occurs.

The days missing from the Gregorian calendar (from 5.10.1582 to 15.10.1582) are [handled as usual](ABENCONVERSION_TYPE_D.html) in ABAP.

The function `DATS_IS_VALID` determines whether `date` contains a valid date in the format `YYYYMMDD`. The actual parameter must have the built-in data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html). It can be specified as [literal](ABENCDS_LITERAL_V2.html), as field of a [data source](ABENCDS_DATA_SOURCE_V2.html), [parameter](ABENCDS_PARAMETER_V2.html), or as [path expression](ABENCDS_PATH_EXPRESSION_V2.html). The result has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). A valid date produces the value 1 and all other input values (including the null value) produce the value 0.

The value '00010101' is a valid date but the value '00000000' is not.

The function `DATS_DAYS_BETWEEN` calculates the difference between two specified dates, `date1` and `date2`, in days. The actual parameters must have the built-in data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) and should contain a valid date in the format `YYYYMMDD`. They can be specified as [literals](ABENCDS_LITERAL_V2.html), as fields of a [data source](ABENCDS_DATA_SOURCE_V2.html), [parameters](ABENCDS_PARAMETER_V2.html), [session variables](ABENCDS_SESSION_VARIABLE_V2.html), or as [path expressions](ABENCDS_PATH_EXPRESSION_V2.html). The result has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). If `date2` is greater than `date1`, the result is positive. In the reverse case, it is negative.

Before the difference is calculated, the specified dates are converted to integers, like in ABAP, and the corresponding [rules](ABENCONVERSION_TYPE_D.html) apply.

The function `DATS_ADD_DAYS` adds `days` days to a specified date `date`.

The values are case-sensitive. Any incorrectly specified values raise an exception.

The result has the data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html). If `days` is positive, the number of days is added to `date`. In other cases, the number of days is subtracted. If the calculation produces an invalid date, the error is handled as specified in `on_error`.

For the calculation, the specified date is [converted](ABENCONVERSION_TYPE_D.html) to an integer, like in ABAP, and the result is [converted](ABENCONVERSION_TYPE_IBS.html) to a date again while applying the corresponding rules.

The function `DATS_ADD_MONTHS` adds `months` months to a specified date `date`.

The result has the data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html). If `months` is positive, the number of months is added to `date`. In other cases, the number of months is subtracted.

An attempt is made to create a date with the same day in an earlier or later month. If the maximum day possible in a month is exceeded, the greatest possible day is used. If the calculation produces an otherwise invalid date, the error is handled as specified in `on_error`.

The following CDS view entity applies date functions in the `SELECT` list to columns of the DDIC database table `DEMO_EXPRESSIONS`. The class `CL_DEMO_CDS_DATE_FUNC_VE` uses `SELECT` to access the view. You can assign values to the columns `DATN1`, `DATN2`, `DATS1` and `DATS2` and to the actual parameters for the input parameters. In the case of `DATS_ADD_DAYS` and `DATS_ADD_MONTHS`, invalid values or values that produce invalid results are handled as specified by the parameter `on_error`.

-   The session variable [`$session.system_date`](ABENCDS_SESSION_VARIABLE_V2.html) is used in a CDS view entity to provide direct access to the current system date. The session variable [`$session.user_date`](ABENCDS_SESSION_VARIABLE_V2.html) returns the current [user date](ABENUSER_DATE_GLOSRY.html). In addition, the special annotation [`@Environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) makes it possible to pass the value of the [ABAP system field](ABENSYSTEM_FIELD_GLOSRY.html)\\ `sy-datum` to [input parameters](ABENCDS_PARAMETER_LIST_V2.html).
-   The session variables [`$session.user_date`](ABENCDS_SESSION_VARIABLE_V2.html) and [`$session.system_date`](ABENCDS_SESSION_VARIABLE_V2.html) return the data type `DATS`. They can be specified as actual parameters in all functions that expect data type `DATS` as input. They can be converted to data type `DATN` with the conversion function [`DATS_TO_DATN`](ABENCDS_DATE_TIME_CONVERSIONS_V2.html).

-   Empty literals are not possible.
-   If an actual parameter is assigned the literal input '00000000', it is set to the initial value and the value '00010101' is used for the calculation.
-   The days missing from the Gregorian calendar (from 5.10.1582 to 15.10.1582) are [handled as usual](ABENCONVERSION_TYPE_D.html) in ABAP.

-   The actual parameter `date` must have the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html) and is must contain a valid date in the format `YYYYMMDD`. It can be specified as [typed literal](ABENCDS_TYPED_LITERAL_V2.html), field of a [data source](ABENCDS_DATA_SOURCE_V2.html), [parameter](ABENCDS_PARAMETER_V2.html), or as [path expression](ABENCDS_PATH_EXPRESSION_V2.html). To use a session variable, it must be converted to data type `DATN` using the conversion function `DATS_TO_DATN`.
-   The actual parameter `days` must have the built-in data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html).

-   The actual parameter `date` must have the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html) and it must contain a valid date in the format `YYYYMMDD`. It can be specified as [typed literal](ABENCDS_TYPED_LITERAL_V2.html), field of a [data source](ABENCDS_DATA_SOURCE_V2.html), [parameter](ABENCDS_PARAMETER_V2.html), or as [path expression](ABENCDS_PATH_EXPRESSION_V2.html). To use a session variable, it must be converted to data type `DATN` using the conversion function `DATS_TO_DATN`.
-   The actual parameter `months` must have the built-in data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html).

-   The actual parameter `date` must have the built-in data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) and should contain a valid date in the format `YYYYMMDD`.
-   The actual parameter `days` must have the built-in data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html).
-   The actual parameter `on_error` must have the built-in data type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with the length 10 and must have one of the following values:

-   `'FAIL'` (an error raises an exception)
-   `'NULL'` (an error returns the null value)
-   `'INITIAL'` (an error returns the initial value)
-   `'UNCHANGED'` (an error returns the unmodified value of `date`)

-   The actual parameter `date` must have the built-in data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) and should contain a valid date in the format `YYYYMMDD`.
-   The actual parameter `months` must have the built-in data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html).
-   The same applies to the actual parameter `on_error` as to `DATS_ADD_DAYS`.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_DATE\_FUNC\_VE\\n with parameters\\n p\_days :abap.int4,\\n p\_months :abap.int4\\n as select from demo\_expressions\\n\\{\\n key id,\\n dats1 as date1,\\n dats\_is\_valid(dats1) as valid1,\\n dats2 as date2,\\n dats\_is\_valid(dats2) as valid2,\\n dats\_days\_between($session.user\_date, 20200101) as diff,\\n dats\_add\_days(20200301,$parameters.p\_days,'INITIAL') as day1,\\n dats\_add\_months(dats2,$parameters.p\_months,'FAIL') as day2,\\n datn1 as date3,\\n datn2 as date4,\\n datn\_days\_between( datn1, datn2 ) as daysBetw,\\n datn\_add\_days( datn1,3+6 ) as add\_days,\\n datn\_add\_months( dats\_to\_datn\\n ($session.system\_date, 'FAIL', 'FAIL')\\n ,1 ) as add\_month\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html abencds\_builtin\_functions\_v2.html abencds\_special\_functions\_v2.html abencds\_date\_time\_functions\_v2.html