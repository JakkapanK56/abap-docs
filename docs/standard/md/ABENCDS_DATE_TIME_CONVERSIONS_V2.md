---
title: "ABENCDS_DATE_TIME_CONVERSIONS_V2"
description: |
  ABENCDS_DATE_TIME_CONVERSIONS_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_DATE_TIME_CONVERSIONS_V2.htm"
abapFile: "ABENCDS_DATE_TIME_CONVERSIONS_V2.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "ABENCDS", "DATE", "TIME", "CONVERSIONS"]
---

`... TSTMP_TO_DATS(tstmp,tzone,clnt,on_error)    | TSTMP_TO_TIMS(tstmp,tzone,clnt,on_error)    | TSTMP_TO_DST(tstmp,tzone,clnt,on_error)    | DATS_TIMS_TO_TSTMP(date,time,tzone,clnt,on_error)    | TSTMPL_TO_UTCL(tstmpl,on_error,on_initial)    | TSTMPL_FROM_UTCL(utcl,on_null)    | DATS_TO_DATN(dats,on_error,on_initial)    | DATS_FROM_DATN(datn,on_null)    | TIMS_TO_TIMN(tims,on_error)    | TIMS_FROM_TIMN(timn,on_null) ...`

[1. `... TSTMP_TO_DATS(tstmp,tzone,clnt,on_error)`](#ABAP_VARIANT_1@1@)

[2. `... TSTMP_TO_TIMS(tstmp,tzone,clnt,on_error)`](#ABAP_VARIANT_2@1@)

[3. `... TSTMP_TO_DST(tstmp,tzone,clnt,on_error)`](#ABAP_VARIANT_3@1@)

[4. `... DATS_TIMS_TO_TSTMP(date,time,tzone,clnt,on_error)`](#ABAP_VARIANT_4@1@)

[5. `... TSTMPL_TO_UTCL(tstmpl,on_error,on_initial)`](#ABAP_VARIANT_5@1@)

[6. `... TSTMPL_FROM_UTCL(utcl,on_null)`](#ABAP_VARIANT_6@1@)

[7. `... DATS_TO_DATN(dats,on_error,on_initial)`](#ABAP_VARIANT_7@1@)

[8. `... DATS_FROM_DATN(date,on_null)`](#ABAP_VARIANT_8@1@)

[9. `... TIMS_TO_TIMN(tims,on_error)`](#ABAP_VARIANT_9@1@)

[10. `... TIMS_FROM_TIMN(timn,on_null)`](#ABAP_VARIANT_10@1@)

In a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), these functions perform conversions between date, time, and time stamp formats.

The functions have [positional parameters](ABENPOSITIONAL_PARAMETER_GLOSRY.html) to which arguments need to be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](ABENCDS_DATA_SOURCE_V2.html), [literals](ABENCDS_LITERAL_V2.html), [parameters](ABENCDS_PARAMETER_V2.html), [path expressions](ABENCDS_PATH_EXPRESSION_V2.html), [built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V2.html), [SQL-based scalar functions](ABENCDS_SQL_SCALAR_FUNCTION.html), [expressions](ABENCDS_EXPRESSIONS_V2.html), or [reuse expressions](ABENCDS_REUSABLE_EXPRESSION_V2.html) using `$projection` can all be specified as arguments. Only literals can be passed to the parameters `on_error`, `on_initial`, and `on_null`. If an argument contains the [null value](ABENNULL_VALUE_GLOSRY.html), every function returns a null value.

The values of time stamps are handled as [UTC time stamps](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html). The conversions follow the ABAP-specific [rules for time zones](ABENTIME_ZONE_RULES.html). The associated DDIC database tables must be filled correctly.

The function `TSTMP_TO_DATS` extracts the local date for the time zone specified in `tzone` from a time stamp in the argument `tstmp`. The value of the time stamp is handled as an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html).

The argument `tstmp` must contain a [valid time stamp](ABENTIME_STAMPS_PACKED.html) in a packed number format. There are two options:

`tzone` expects an argument of the type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with length 6, either initial or containing a valid [time zone](ABENTIME_ZONE_GLOSRY.html). If an initial time zone is specified, no time shift is calculated. The argument `clnt` must have the built-in dictionary type [`CLNT`](ABENDDIC_BUILTIN_TYPES.html) and must contain a valid [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html). This client ID is used in the evaluation of the system tables of the [rules for time zones](ABENTIME_ZONE_RULES.html). In [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html), only the session variable [`$session.client`](ABENCDS_SESSION_VARIABLE_V2.html) can be specified for `clnt`. The return value has the built-in data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html).

The argument `on_error` controls error handling. It must have the built-in data type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with the length 10 and must have one of the following values:

The pattern is case-sensitive. Any incorrectly specified values raise an exception.

The function `TSTMP_TO_TIMS` extracts the local time for the time zone specified in `tzone` from a time stamp in the argument `tstmp`. The value of the time stamp is handled as an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html).

The same applies to the arguments `tstmp`, `tzone`, `clnt`, and `on_error` as to the function `TSTMP_TO_DATS`. The return value has the built-in data type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html).

The function `TSTMP_TO_DST` extracts the daylight saving time marker for the time zone specified in `tzone` from a time stamp in the argument `tstmp`. The value of the time stamp is handled as an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html).

The result is *X* if the time stamp for the time zone is in the daylight saving time, otherwise it is initial.

The same applies to the arguments `tstmp`, `tzone`, `clnt`, and `on_error` as to the function `TSTMP_TO_DATS`. The return value has the built-in data type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with length 1.

The function `DATS_TIMS_TO_TSTMP` constructs an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html) from a local date specified in `date` and a local time specified in `time` in the time zone specified in `tzone`. The daylight saving time is respected implicitly.

The argument `date` must have the built-in data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) and should contain a valid date. The argument `time` must have the built-in data type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html) and should contain a valid time. The same applies to the arguments `tzone`, `clnt`, and `on_error` as to the function `TSTMP_TO_DATS`.

The return value has the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and represents an ABAP-specific [time stamp in a packed number](ABENTIME_STAMPS_PACKED.html).

The function `TSTMPL_TO_UTCL` converts a time stamp `tstmpl` from the ABAP Dictionary type `TIMESTAMPL` to the built-in dictionary type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

The argument for the formal parameter `tstmpl` must have the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 21 and 7 decimal places and contain a [valid time stamp](ABENTIME_STAMPS_PACKED.html) in the format `YYYYMMDDHHMMSSMMMUUUN`.

The same applies to the argument `on_error` as to the function `TSTMP_TO_DATS`.

The argument `on_initial` defines the way arguments with initial values are handled. It must have the built-in data type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with the length 10 and must have one of the following values:

The pattern is case-sensitive. Any incorrectly specified values raise an exception.

The function `TSTMPL_TO_UTCL` is a purely technical type conversion and does not involve any time zone calculations.

The function `TSTMPL_FROM_UTCL` converts a time stamp `utcl` from the built-in dictionary type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) to the ABAP Dictionary type `TIMESTAMPL`. It is the counterpart to variant 5.

The argument for the formal parameter `utcl` must have the built-in data type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) and it should contain a valid time stamp.

The argument `on_null` defines the way null values as arguments are handled. It must have the built-in data type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with the length 10 and must have one of the following values:

The pattern is case-sensitive. Any incorrectly specified values raise an exception.

If the parameter `utcl` is initial, 0 is returned.

The function `TSTMPL_FROM_UTCL` is a purely technical type conversion and does not involve any time zone calculations.

The function `DATS_TO_DATN` converts a date `dats` from the built-in ABAP Dictionary data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) to the built-in ABAP Dictionary type [`DATN`](ABENDDIC_BUILTIN_TYPES.html).

The argument for the formal parameter `dats` must have the built-in data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) and should contain a valid date in the format `YYYYMMDD`. The same applies to the arguments `on_error` and `on_initial` as to the function `TSTMPL_TO_UTCL` (variant 5, see above).

[`DATN`](ABENDDIC_BUILTIN_TYPES.html) is a newer dictionary type which represents a real date type in a database. [`DATS`](ABENDDIC_BUILTIN_TYPES.html), by contrast, is an older dictionary type. It is instantiated on a database as a character-like field. [`DATS`](ABENDDIC_BUILTIN_TYPES.html) and [`DATN`](ABENDDIC_BUILTIN_TYPES.html) are not interchangeable and a conversion is necessary to use certain functions.

The function `DATS_FROM_DATN` converts a date `datn` from the built-in ABAP Dictionary data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html) to the built-in ABAP Dictionary type [`DATS`](ABENDDIC_BUILTIN_TYPES.html). It is the counterpart to variant 7.

The argument for the formal parameter `datn` must have the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html) and must contain a valid date in the format `YYYYMMDD`. The same applies to the argument `on_null` as to the function `TSTMPL_FROM_UTCL` (variant 6, see above).

[`DATN`](ABENDDIC_BUILTIN_TYPES.html) is a newer dictionary type which represents a real date type in a database. [`DATS`](ABENDDIC_BUILTIN_TYPES.html), by contrast, is an older dictionary type. It is instantiated on a database as a character-like field. [`DATS`](ABENDDIC_BUILTIN_TYPES.html) and [`DATN`](ABENDDIC_BUILTIN_TYPES.html) are not interchangeable and to use certain functions, a conversion is necessary.

The function `TIMS_TO_TIMN` converts a time `tims` from the ABAP Dictionary type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html) to the ABAP Dictionary type [`TIMN`](ABENDDIC_BUILTIN_TYPES.html).

The argument for the formal parameter `tims` must have the built-in data type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html) and contain a valid time in the format `HHMMSS`. The same applies to the argument `on_error` as to the function `TSTMP_TO_DATS` (variant 1, see above).

[`TIMN`](ABENDDIC_BUILTIN_TYPES.html) is a newer dictionary type which represents a real date type in a database. [`TIMS`](ABENDDIC_BUILTIN_TYPES.html), by contrast, is an older dictionary type. It is instantiated on a database as a character-like field. [`TIMS`](ABENDDIC_BUILTIN_TYPES.html) and [`TIMN`](ABENDDIC_BUILTIN_TYPES.html) are not interchangeable and to use certain functions, a conversion is necessary.

The function `TIMS_FROM_TIMN` converts a time `timn` from the ABAP Dictionary type [`TIMN`](ABENDDIC_BUILTIN_TYPES.html) to the ABAP Dictionary type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html). It is the counterpart to variant 9.

The argument for the formal parameter `timn` must have the built-in data type [`TIMN`](ABENDDIC_BUILTIN_TYPES.html) and contain a valid time in the format `HHMMSS`. The same applies to the argument `on_null` as to the function `TSTMPL_FROM_UTCL` (variant 6, see above).

[`TIMN`](ABENDDIC_BUILTIN_TYPES.html) is a newer dictionary type which represents a real date type in a database. [`TIMS`](ABENDDIC_BUILTIN_TYPES.html), by contrast, is an older dictionary type. It is instantiated on a database as a character-like field. [`TIMS`](ABENDDIC_BUILTIN_TYPES.html) and [`TIMN`](ABENDDIC_BUILTIN_TYPES.html) are not interchangeable and to use certain functions, a conversion is necessary.

In the following CDS view entity, the date, the time, and the daylight saving time marker of the current UTC time stamp are extracted using the conversion functions `TSTMP_TO_DATS`, `TSTMP_TO_TIMS`, and `TSTMP_TO_DST`. The values of the columns `DATS1` and `TIMS1` of the DDIC database table `DEMO_EXPRESSIONS` are combined into a time stamp by the conversion function `DATS_TIMS_TO_TSTMP`. The conversion functions described in variants 5 to 10 convert time stamps, dates, and times between different types. The class `CL_DEMO_CDS_DATE_TIME_VE` accesses the view and displays the result.

-   These functions move the functions of the ABAP statements [`CONVERT TIME STAMP`](ABAPCONVERT_TIME-STAMP.html) and [`CONVERT INTO TIME STAMP`](ABAPCONVERT_DATE_TIME-STAMP.html) to the database.
-   [Typed literals](ABENCDS_TYPED_LITERAL_V2.html) are available for date, time, and time stamp data types. With typed literals, all parameter positions can be filled with literals.
-   To carry out conversions that are not yet supported by built-in CDS conversion functions, an option is to use the respective HANA functions in AMDP or Native SQL.

-   It can have the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and no decimal places in the format `YYYYMMDDHHMMSS`.
-   It can have the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 21 and 7 decimal places in the format `YYYYMMDDHHMMSS.SSSSSSS`.

-   *FAIL* (an error raises an exception)
-   *NULL* (an error returns the null value)
-   *INITIAL* (an error returns the initial value)

-   *FAIL* (an initial value raises an exception)
-   *NULL* (an initial value returns the null value)
-   *INITIAL* (an initial value returns the initial value)

-   *FAIL* (a null value raises an exception)
-   *NULL* (a null value returns the null value)
-   *INITIAL* (a null value returns the initial value)

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_DATE\_TIME\_VE\\n as select from demo\_expressions\\n\\{\\n key id,\\n tstmp\_current\_utctimestamp() as tstmp,\\n tstmp\_to\_dats( tstmp\_current\_utctimestamp(),\\n abap\_system\_timezone( $session.client,'NULL' ),\\n $session.client,\\n 'NULL' ) as dat,\\n tstmp\_to\_tims( abap.dec'202001021203041',\\n abap\_system\_timezone( $session.client,'NULL' ),\\n $session.client,\\n 'NULL' ) as tim,\\n tstmp\_to\_dst( tstmp\_current\_utctimestamp(),\\n abap\_system\_timezone( $session.client,'NULL' ),\\n $session.client,\\n 'NULL' ) as dst,\\n dats\_tims\_to\_tstmp(dats1,\\n tims1,\\n abap\_system\_timezone( $session.client,'NULL' ),\\n $session.client,\\n 'NULL' ) as dat\_tim,\\n tstmpl\_to\_utcl( abap.dec'20200101120302.1234567', \\n 'FAIL', \\n 'INITIAL' ) as to\_utcl,\\n tstmpl\_from\_utcl( abap.utcl'2020-01-02 23:58:59,1234567', \\n 'NULL' ) as from\_utcl,\\n dats\_to\_datn( abap.dats'20200102','INITIAL','INITIAL' ) \\n as to\_datn,\\n dats\_from\_datn( abap.datn'20200102', 'INITIAL' ) as from\_datn,\\n tims\_to\_timn( abap.tims'120304', 'NULL') as to\_timn,\\n tims\_from\_timn( abap.timn'130203', 'INITIAL' ) as from\_timn\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html abencds\_builtin\_functions\_v2.html abencds\_special\_functions\_v2.html abencds\_date\_time\_functions\_v2.html