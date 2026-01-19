---
title: "ABENCDS_TIMESTAMP_FUNCTIONS_V1"
description: |
  ABENCDS_TIMESTAMP_FUNCTIONS_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_TIMESTAMP_FUNCTIONS_V1.htm"
abapFile: "ABENCDS_TIMESTAMP_FUNCTIONS_V1.html"
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

In a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), these functions perform operations on time stamps. The values of time stamps are handled as [UTC time stamps](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html).

With the exception of `UTCL_CURRENT` and `TSTMP_CURRENT_UTCTIMESTAMP`, these functions have [positional parameters](ABENPOSITIONAL_PARAMETER_GLOSRY.html) to which arguments must be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](ABENCDS_DATA_SOURCE_V1.html), [literals](ABENCDS_LITERAL_V1.html), [parameters](ABENCDS_PARAMETER_V1.html), [path expressions](ABENCDS_PATH_EXPRESSION_V1.html), built-in functions, or expressions can all be specified as arguments. Only literals can be passed to the parameter `on_error`. If an argument contains the [null value](ABENNULL_VALUE_GLOSRY.html), every function except `TSTMP_IS_VALID` returns a null value.

This function generates a [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) from the [system time](ABENSYSTEM_TIME_GLOSRY.html) and the [system date](ABENSYSTEM_DATE_GLOSRY.html) of AS ABAP in accordance with [POSIX](ABENPOSIX_TIMESTAMP_GLOSRY.html). The return value has the built-in dictionary type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

The function `UTCL_ADD_SECONDS` adds `seconds` seconds to a time stamp `utclong`. It has two [positional parameters](ABENPOSITIONAL_PARAMETER_GLOSRY.html). The argument for the formal parameter `utclong` must have the built-in dictionary type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) and contain a valid [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html). An invalid time stamp produces an error. The argument for the formal parameter `seconds` must have either the built-in data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html) or the data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 21 and 7 decimal places. Any negative values are subtracted. If the result is invalid, an error occurs.

The result is of type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

The function `UTCL_SECONDS_BETWEEN` calculates the difference between two specified time stamps, `utcl1` and `utcl2`, in seconds. It has two [positional parameters](ABENPOSITIONAL_PARAMETER_GLOSRY.html). The arguments for the formal parameters `utcl1` and `utcl2` must have the built-in dictionary type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) and contain a valid [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html). Any invalid time stamps produce an error. If `utcl2` is greater than `utcl1`, the result is positive. If the values are identical, the result is 0. In all other cases, the result is negative.

The result is of type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 21 and 7 decimal places.

The function `TSTMP_IS_VALID` determines whether an argument `tstmp` contains a [valid time stamp](ABENTIME_STAMPS_PACKED.html) in the format `YYYYMMDDHHMMSS`. The argument must have the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and no decimal places. The result has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). A valid time stamp produces the value 1 and all other input values (including the null value) produce the value 0.

The argument `tstmp` cannot be specified as literal. This is only possible indirectly by using a cast expression. For example, this is valid syntax:

tstmp\_is\_valid(cast(20200102334455 as abap.dec(15,0)) as demo

The function `TSTMP_CURRENT_UTCTIMESTAMP` returns a [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) in accordance with the [POSIX](ABENPOSIX_TIMESTAMP_GLOSRY.html) standard. The result has the data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and no decimal places.

The function `TSTMP_SECONDS_BETWEEN` calculates the difference between two specified time stamps, `tstmp1` and `tstmp2` in seconds. The argument must have the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and no decimal places and contain [valid time stamps](ABENTIME_STAMPS_PACKED.html) in the format `YYYYMMDDHHMMSS`. Any invalid time stamps produce an error. If `tstmp2` is greater than `tstmp1`, the result is positive. In the reverse case, it is negative.

The argument `on_error` controls error handling. It must have the built-in data type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with the length 10 and must have one of the following values:

The values are case-sensitive. Any incorrectly specified values raise an exception.

`tstmp1` and `tstmp2` cannot be specified as literals. This is only possible indirectly by using a cast expression. For example, this is valid syntax:

tstmp\_seconds\_between(cast(20200102122345 as abap.dec(15,0)),cast(20200401161034 as abap.dec(15,0)), 'FAIL') as demo

The function `TSTMP_ADD_SECONDS` adds `seconds` seconds to a time stamp `tstmp`. The argument `tstmp` must have the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and no decimal places and contain a valid [time stamp](ABENTIME_STAMPS_PACKED.html) in the format `YYYYMMDDHHMMSS`. An invalid time stamp produces an error. The argument `seconds` must also have the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and no decimal places. Any negative values are subtracted. If the result is invalid, an error occurs.

The argument `on_error` controls error handling. The same applies as to the function `TSTMP_SECONDS_BETWEEN`. The additional value *UNCHANGED* can be used to specify that an error caused the unchanged value of `tstmp` to be returned.

`tstmp` and `seconds` cannot be specified as literals. This is only possible indirectly by using cast expressions. For example, this is valid syntax:

tstmp\_add\_seconds(cast(20200102122345 as abap.dec(15,0)),cast(5 as abap.dec(15,0)), 'FAIL') as demo

The following CDS view applies time stamp functions in the `SELECT` list to columns of the DDIC database table `DEMO_EXPRESSIONS`. The class `CL_DEMO_CDS_TIMESTAMP_FNCTNS` uses `SELECT` to access the view. A current [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) time stamp is generated, seconds are added to a [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) time stamp and the difference in seconds between two [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) time stamps is calculated. The column `NUM1` of the DDIC database table is given a value that is added to a time stamp in the column `TIMESTAMP1` as seconds. The difference is found between this sum and a time stamp retrieved on the database by the function `TSTMP_CURRENT_UTCTIMESTAMP`. A delay, `wait`, can be integrated between the time stamp in the ABAP program and the time stamp created on the database.

-   While the time stamp functions starting with `UTCL` process data that is stored as real time stamp on the database, the functions starting with `TSTMP` process time stamps on the database that are stored [as a packed number](ABENTIME_STAMPS_PACKED.html) in the ABAP-specific format in DDIC database tables. As in ABAP, other types of access to these fields interpret these time stamps as regular numeric values.
-   [Conversion functions](ABENCDS_DATE_TIME_CONVERSIONS_V1.html) make it possible to transform a time stamp to date fields and time fields and to transform date fields and time fields to a time stamp.

-   The argument `utcl` can be any of the operands listed above in section **Effect**, including a literal. A literal can be specified in the following format: `'0001-01-01 00:00:02.0000000'`
-   If the positional parameter `utclong` is empty, it is set to its initial value.
-   The days missing from the Gregorian calendar (from 5.10.1582 to 15.10.1582) are [handled as usual](ABENCONVERSION_TYPE_D.html) in ABAP.

-   The argument `utcl` can be any of the operands listed above in section **Effect**, including a literal. A literal can be specified in the following format: `'0001-01-01 00:00:02.0000000'`
-   If an argument is empty, then this parameter is set to its initial value.
-   The days missing from the Gregorian calendar (from 5.10.1582 to 15.10.1582) are [handled as usual](ABENCONVERSION_TYPE_D.html) in ABAP.

-   The UTC time stamp is created from the clock on the database server. The [system date](ABENSYSTEM_DATE_GLOSRY.html) and the [system time](ABENSYSTEM_TIME_GLOSRY.html) in AS ABAP from which its time stamp is created using [`GET TIME STAMP`](ABAPGET_TIME-STAMP.html) are [synchronized](ABENSYSTEM_USER_TIME_ZONES.html) with the database server clock.
-   If the function `TSTMP_CURRENT_UTCTIMESTAMP` is used more thane once within a view, it cannot be guaranteed that the every call within a database access produces the same result. Hence, later calls can produce later time stamps.

-   *FAIL* (an error raises an exception)
-   *NULL* (an error returns the null value)
-   *INITIAL* (an error returns the initial value)

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_TSFNC'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view demo\_cds\_timestamp\_functions\\n with parameters\\n p\_seconds :abap.int4\\n as select from demo\_expressions\\n\\{\\n key id,\\n utcl\_current() as utcl\_timestamp,\\n utcl\_add\_seconds(utcl2,:p\_seconds) as add\_seconds,\\n utcl\_seconds\_between(utcl1,utcl2) as seconds\_between,\\n timestamp1 as timestamp1,\\n tstmp\_is\_valid(timestamp1) as valid1,\\n tstmp\_seconds\_between(\\n tstmp\_current\_utctimestamp(),\\n tstmp\_add\_seconds(\\n timestamp1,\\n cast( num1 as abap.dec(15,0) ),\\n 'FAIL'),\\n 'FAIL') as difference\\n\\}\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_expressions\_v1.html abencds\_builtin\_functions\_v1.html abencds\_special\_functions\_v1.html abencds\_date\_time\_functions\_v1.html