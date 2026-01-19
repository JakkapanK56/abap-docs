---
title: "ABENCDS_TIMESTAMP_FUNCTIONS_V2"
description: |
  ABENCDS_TIMESTAMP_FUNCTIONS_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_TIMESTAMP_FUNCTIONS_V2.htm"
abapFile: "ABENCDS_TIMESTAMP_FUNCTIONS_V2.html"
keywords: ["select", "while", "if", "case", "class", "data", "types", "ABENCDS", "TIMESTAMP", "FUNCTIONS"]
---

`... UTCL_CURRENT()    | UTCL_ADD_SECONDS(utcl,seconds)    | UTCL_SECONDS_BETWEEN(utcl1,utcl2)    | TSTMP_IS_VALID(tstmp)    | TSTMP_CURRENT_UTCTIMESTAMP()    | TSTMP_SECONDS_BETWEEN(tstmp1,tstmp2,on_error)    | TSTMP_ADD_SECONDS(tstmp,seconds,on_error) ...`

[1. `... UTCL_CURRENT()`](#ABAP_VARIANT_1@1@)

[2. `... UTCL_ADD_SECONDS(utcl,seconds)`](#ABAP_VARIANT_2@1@)

[3. `... UTCL_SECONDS_BETWEEN(utcl1,utcl2)`](#ABAP_VARIANT_3@1@)

[4. `... TSTMP_IS_VALID(tstmp)`](#ABAP_VARIANT_4@1@)

[5. `... TSTMP_CURRENT_UTCTIMESTAMP()`](#ABAP_VARIANT_5@1@)

[6. `... TSTMP_SECONDS_BETWEEN(tstmp1,tstmp2,on_error)`](#ABAP_VARIANT_6@1@)

[7. `... TSTMP_ADD_SECONDS(tstmp,seconds,on_error)`](#ABAP_VARIANT_7@1@)

In a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), these functions perform operations on [time stamps](ABENTIME_STAMP_GLOSRY.html). The values of time stamps are handled as [UTC time stamps](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html).

With the exception of `UTCL_CURRENT` and `TSTMP_CURRENT_UTCTIMESTAMP`, these functions have [positional parameters](ABENPOSITIONAL_PARAMETER_GLOSRY.html) to which arguments must be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](ABENCDS_DATA_SOURCE_V2.html), [literals](ABENCDS_LITERAL_V2.html), [parameters](ABENCDS_PARAMETER_V2.html), [path expressions](ABENCDS_PATH_EXPRESSION_V2.html), [built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V2.html), [SQL-based scalar functions](ABENCDS_SQL_SCALAR_FUNCTION.html), [expressions](ABENCDS_EXPRESSIONS_V2.html), or [reuse expressions](ABENCDS_REUSABLE_EXPRESSION_V2.html) using `$projection` can all be specified as arguments. Only literals can be passed to the parameter `on_error`. If an argument contains the [null value](ABENNULL_VALUE_GLOSRY.html), every function except `TSTMP_IS_VALID` returns a null value.

This function generates a [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) from the [system time](ABENSYSTEM_TIME_GLOSRY.html) and the [system date](ABENSYSTEM_DATE_GLOSRY.html) of AS ABAP in accordance with [POSIX](ABENPOSIX_TIMESTAMP_GLOSRY.html). The return value has the built-in dictionary type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

The function `UTCL_ADD_SECONDS` adds `seconds` seconds to a time stamp `utclong`. It has two [positional parameters](ABENPOSITIONAL_PARAMETER_GLOSRY.html). The argument for the formal parameter `utclong` must have the built-in dictionary type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) and contain a valid [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html). An invalid time stamp produces an error. The argument for the formal parameter `seconds` must have either the built-in data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html) or the data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 21 and 7 decimal places. Any negative values are subtracted. If the result is invalid, an error occurs.

The result is of type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

The function `UTCL_SECONDS_BETWEEN` calculates the difference between two specified time stamps, `utcl1` and `utcl2`, in seconds. It has two [positional parameters](ABENPOSITIONAL_PARAMETER_GLOSRY.html). The arguments for the formal parameters `utcl1` and `utcl2` must have the built-in dictionary type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) and contain a valid [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html). Any invalid time stamps produce an error. If `utcl2` is greater than `utcl1`, the result is positive. If the values are identical, the result is 0. In all other cases, the result is negative.

The result is of type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 21 and 7 decimal places.

The function `TSTMP_IS_VALID` determines whether an argument `tstmp` contains a [valid time stamp](ABENTIME_STAMPS_PACKED.html) in the format `YYYYMMDDHHMMSS`. The argument must have the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and no decimal places. The result has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). A valid time stamp produces the value 1 and all other input values (including the null value) produce the value 0.

The function `TSTMP_CURRENT_UTCTIMESTAMP` returns a [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) in accordance with the [POSIX](ABENPOSIX_TIMESTAMP_GLOSRY.html) standard. The result has the data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and no decimal places.

The function `TSTMP_SECONDS_BETWEEN` calculates the difference between two specified time stamps, `tstmp1` and `tstmp2`, in seconds. The argument must have the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and no decimal places and contain [valid time stamps](ABENTIME_STAMPS_PACKED.html) in the format `YYYYMMDDHHMMSS`. Any invalid time stamps produce an error. If `tstmp2` is greater than `tstmp1`, the result is positive. In the reverse case, it is negative.

The argument `on_error` controls error handling. It must have the built-in data type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with the length 10 and must have one of the following values:

The values are case-sensitive. Any incorrectly specified values raise an exception.

The function `TSTMP_ADD_SECONDS` adds `seconds` seconds to a time stamp `tstmp`. The argument `tstmp` must have the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and no decimal places and contain a valid [time stamp](ABENTIME_STAMPS_PACKED.html) in the format `YYYYMMDDHHMMSS`. An invalid time stamp produces an error. The argument `seconds` must also have the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and no decimal places. Any negative values are subtracted. If the result is invalid, an error occurs.

The argument `on_error` controls error handling. The same applies as to the function `TSTMP_SECONDS_BETWEEN`. The additional value *UNCHANGED* can be used to specify that an error caused the unchanged value of `tstmp` to be returned.

The following CDS view entity applies time stamp functions in the `SELECT` list to columns of the DDIC database table `DEMO_EXPRESSIONS`. The class `CL_DEMO_CDS_TIMESTAMP_FUNC_VE` uses `SELECT` to access the view. The column `NUM1` of the DDIC database table is given a value that is added to a time stamp in the column `TIMESTAMP1` as seconds. The difference is found between this sum and a time stamp retrieved on the database by the function `TSTMP_CURRENT_UTCTIMESTAMP`. A delay, `wait`, can be integrated between the time stamp in the ABAP program and the time stamp created on the database.

-   While the time stamp functions starting with `UTCL` process data that is stored as real time stamp on the database, the functions starting with `TSTMP` process time stamps on the database that are stored [as a packed number](ABENTIME_STAMPS_PACKED.html) in the ABAP-specific format in DDIC database tables. These `TSTMP` time stamps are interpreted as regular numeric values in ABAP and in other types of access.
-   [Conversion functions](ABENCDS_DATE_TIME_CONVERSIONS_V2.html) make it possible to transform a time stamp to date fields and time fields and to transform date fields and time fields to a time stamp.

-   If the positional parameter `utclong` is empty, it is set to its initial value.
-   The days missing from the Gregorian calendar (from 5.10.1582 to 15.10.1582) are [handled as usual](ABENCONVERSION_TYPE_D.html) in ABAP.

-   If an argument is empty, then this parameter is set to its initial value.
-   The days missing from the Gregorian calendar (from 5.10.1582 to 15.10.1582) are [handled as usual](ABENCONVERSION_TYPE_D.html) in ABAP.

-   The UTC time stamp is created from the clock on the database server. The [system date](ABENSYSTEM_DATE_GLOSRY.html) and the [system time](ABENSYSTEM_TIME_GLOSRY.html) in AS ABAP from which its time stamp is created using [`GET TIME STAMP`](ABAPGET_TIME-STAMP.html) are [synchronized](ABENSYSTEM_USER_TIME_ZONES.html) with the database server clock.
-   If the function `TSTMP_CURRENT_UTCTIMESTAMP` is used more than once within a view, it cannot be guaranteed that the every call within a database access produces the same result. Later calls can produce later time stamps.

-   *FAIL* (an error raises an exception)
-   *NULL* (an error returns the null value)
-   *INITIAL* (an error returns the initial value)

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_TIMESTAMP\_FUNC\_VE\\n with parameters\\n p\_seconds :abap.int4\\n as select from demo\_expressions\\n\\{\\n key id,\\n utcl\_current() as utcl\_timestamp,\\n utcl\_add\_seconds(\\n abap.utcl'2020-01-02 00:00:02.2222333',\\n $parameters.p\_seconds) as add\_seconds,\\n utcl\_seconds\_between(utcl1,utcl2) as seconds\_between,\\n timestamp1 as timestamp1,\\n tstmp\_is\_valid(abap.dec'202001022306050') as valid1,\\n tstmp\_seconds\_between(\\n tstmp\_current\_utctimestamp(),\\n tstmp\_add\_seconds(\\n timestamp1,\\n abap.dec'123456789123456',\\n 'FAIL'),\\n 'FAIL') as difference\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html abencds\_builtin\_functions\_v2.html abencds\_special\_functions\_v2.html abencds\_date\_time\_functions\_v2.html