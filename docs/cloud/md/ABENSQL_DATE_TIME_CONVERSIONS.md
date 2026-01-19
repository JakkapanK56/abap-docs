---
title: "ABENSQL_DATE_TIME_CONVERSIONS"
description: |
  ABENSQL_DATE_TIME_CONVERSIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_DATE_TIME_CONVERSIONS.htm"
abapFile: "ABENSQL_DATE_TIME_CONVERSIONS.html"
keywords: ["select", "insert", "delete", "if", "class", "data", "types", "ABENSQL", "DATE", "TIME", "CONVERSIONS"]
---

`... TSTMP_TO_DATS( tstmp    = tstmp,                     tzone    = tzone[,                     on_error = on_error] )    | TSTMP_TO_TIMS( tstmp    = tstmp,                     tzone    = tzone[,                     on_error = on_error] )    | TSTMP_TO_DST(  tstmp    = tstmp,                     tzone    = tzone[,                     on_error = on_error] )    | DATS_TIMS_TO_TSTMP( date     = date,                          time     = time,                          tzone    = tzone[,                          on_error = on_error] )    | TSTMPL_TO_UTCL( tstmpl = tstmpl[,                      on_error = on_error],[\                      on_initial = on_initial] )    | TSTMPL_FROM_UTCL( utcl = utcl[,                        on_null = on_null] )    | DATS_TO_DATN( dats = dats[,                    on_error = on_error],[\                    on_initial = on_initial] )    | DATS_FROM_DATN( datn = datn[,                      on_null = on_null] )    | TIMS_TO_TIMN( tims = tims[,                    on_error = on_error] )    | TIMS_FROM_TIMN( timn = timn[,                      on_null = on_null] )...`

[1. `... TSTMP_TO_DATS( ... )`](#ABAP_VARIANT_1@1@)

[2. `... TSTMP_TO_TIMS( ... )`](#ABAP_VARIANT_2@1@)

[3. `... TSTMP_TO_DST( ... )`](#ABAP_VARIANT_3@1@)

[4. `... DATS_TIMS_TO_TSTMP( ... )`](#ABAP_VARIANT_4@1@)

[5. `... TSTMPL_TO_UTCL( ... )`](#ABAP_VARIANT_5@1@)

[6. `... TSTMPL_FROM_UTCL( ... )`](#ABAP_VARIANT_6@1@)

[7. `... DATS_TO_DATN( ... )`](#ABAP_VARIANT_7@1@)

[8. `... DATS_FROM_DATN( ... )`](#ABAP_VARIANT_8@1@)

[9. `... TIMS_TO_TIMN( ... )`](#ABAP_VARIANT_9@1@)

[10. `... TIMS_FROM_TIMN( ... )`](#ABAP_VARIANT_10@1@)

The SQL functions described in variants 1 to 4 convert [UTC time stamps](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX](ABENPOSIX_TIMESTAMP_GLOSRY.html) standard into dates or times, and vice versa. The SQL functions described in variants 5 to 10 convert UTC time stamps, dates, and times between different types.

The arguments of the functions are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis. The functions have [keyword parameters](ABENKEYWORD_PARAMETER_GLOSRY.html). Optional parameters can be assigned actual parameters when called. Non-optional parameters must be assigned actual parameters.

[SQL expressions](ABAPSQL_EXPR.html), in particular individual columns, type-compliant literals, SQL functions, host variables or host expressions can be specified as actual parameters.

The conversions follow the ABAP-specific [rules for time zones](ABENTIME_ZONE_RULES.html). The associated DDIC database tables must be filled correctly.

The function `TSTMP_TO_DATS` extracts the local date for the time zone specified in `tzone` from an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX](ABENPOSIX_TIMESTAMP_GLOSRY.html) standard in the argument `tstmp`.

The actual parameter for the formal parameter `tstmp` must have the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and no decimal places and contain a [valid UTC time stamp](ABENTIME_STAMPS_PACKED.html) in the format `YYYYMMDDHHMMSS`. `tzone` expects an actual parameter of the type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with length 6, either initial or containing a valid [time zone](ABENTIME_ZONE_GLOSRY.html). If an initial time zone is specified, no time shift is calculated. Another optional parameter `client` must not be used in ABAP for Cloud Development.

The return value has the built-in data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html).

The optional parameter `on_error` affects how errors are handled. The parameter for `on_error` must be an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) with the [enumerated type](ABENENUMERATED_TYPE_GLOSRY.html)\\ `ON_ERROR` from the class `SQL_TSTMP_TO_DATS` and the following [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html) can be passed:

The function `TSTMP_TO_TIMS` extracts the local time for the time zone specified in `tzone` from an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX](ABENPOSIX_TIMESTAMP_GLOSRY.html) standard in the argument `tstmp`.

The same applies to the parameters `tstmp`, `tzone`, and `on_error` as to the function `TSTMP_TO_DATS`. Here, the class of the enumerated type of `on_error` is `SQL_TSTMP_TO_TIMS`. Another optional parameter `client` must not be used in ABAP for Cloud Development.

The return value has the built-in data type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html).

The function `TSTMP_TO_DST` extracts the daylight saving time marker for the time zone specified in `tzone` from an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX](ABENPOSIX_TIMESTAMP_GLOSRY.html) standard in the argument `tstmp`. This is *X* if the time stamp for the time zone is in the daylight saving time, otherwise it is initial.

The same applies to the parameters `tstmp`, `tzone`, and `on_error` as to the function `TSTMP_TO_DATS`. Here, the class of the enumerated type of `on_error` is `SQL_TSTMP_TO_DST`. Another optional parameter `client` must not be used in ABAP for Cloud Development.

The return value has the built-in data type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with length 1.

The function `DATS_TIMS_TO_TSTMP` constructs an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX](ABENPOSIX_TIMESTAMP_GLOSRY.html) standard from a local date specified in `date` and a local time specified in `time` in the time zone specified in `tzone`. The daylight saving time is respected implicitly.

The actual parameter for the formal parameter `date` must have the built-in data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) and should contain a valid date. The actual parameter for the formal parameter `time` must have the built-in data type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html) and should contain a valid time. The same applies to the parameters `tzone`, and `on_error` as to the function `TSTMP_TO_DATS`. Here, the class of the enumerated type of `on_error` is `SQL_DATS_TIMS_TO_TSTMP`. Another optional parameter `client` must not be used in ABAP for Cloud Development.

The return value has the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and represents an ABAP-specific UTC [time stamp in a packed number](ABENTIME_STAMPS_PACKED.html).

The function `TSTMPL_TO_UTCL` converts an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX](ABENPOSIX_TIMESTAMP_GLOSRY.html) standard `tstmpl` from the ABAP Dictionary type `TIMESTAMPL` to the built-in dictionary type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

The actual parameter for the formal parameter `tstmpl` must have the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 21 and 7 decimal places and contain a [valid UTC time stamp](ABENTIME_STAMPS_PACKED.html) in the format `YYYYMMDDHHMMSSMMMUUUN`.

The optional parameter `on_error` affects how errors are handled:

The parameter for `on_error` must be an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) with the [enumerated type](ABENENUMERATED_TYPE_GLOSRY.html)\\ `ON_ERROR` from the class `SQL_TSTMPL_TO_UTCL` and the following [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html) can be passed:

The optional parameter `on_initial` affects how arguments with initial values are handled:

The parameter for `on_initial` must be an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) with the [enumerated type](ABENENUMERATED_TYPE_GLOSRY.html)\\ `ON_INITIAL` from the class `SQL_TSTMPL_FROM_UTCL` and the following [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html) can be passed:

The function `TSTMPL_FROM_UTCL` converts an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX](ABENPOSIX_TIMESTAMP_GLOSRY.html) standard `utcl` from the built-in dictionary type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) to the ABAP Dictionary type `TIMESTAMPL`. It is the counterpart to variant 5.

The actual parameter for the formal parameter `utcl` must have the built-in data type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) and should contain a valid UTC time stamp.

The optional parameter `on_null` affects how null values as arguments are handled. The parameter for `on_null` must be an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) with the [enumerated type](ABENENUMERATED_TYPE_GLOSRY.html)\\ `ON_NULL` from the class `SQL_TSTMPL_FROM_UTCL` and the following [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html) can be passed:

The function `DATS_TO_DATN` converts a date `dats` from the built-in ABAP Dictionary data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) to the built-in ABAP Dictionary type [`DATN`](ABENDDIC_BUILTIN_TYPES.html).

The actual parameter for the formal parameter `dats` must have the built-in data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) and should contain a valid date in the format `YYYYMMDD`. The same applies to the actual parameters `on_error` and `on_initial` as to the function `TSTMPL_TO_UTCL` (Variant 5, see above). Here, the class of the enumerated type of `on_error` and `on_initial` is `SQL_DATS_TO_DATN`.

The same effect of the function `DATS_TO_DATN` can be achieved by [casting](ABENSQL_CAST.html).

The function `DATS_FROM_DATN` converts a date `date` from the built-in ABAP Dictionary data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html) to the built-in ABAP Dictionary type [`DATS`](ABENDDIC_BUILTIN_TYPES.html). It is the counterpart to Variant 7.

The actual parameter for the formal parameter `date` must have the built-in data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html) and must contain a valid date in the format `YYYYMMDD`. The same applies to the actual parameter `on_null`, as to the function `TSTMPL_FROM_UTCL` (Variant 6, see above). Here, the class of the enumerated type of `on_null` is `SQL_DATS_FROM_DATN`.

The same effect of the function `DATS_FROM_DATN` can be achieved by [casting](ABENSQL_CAST.html).

The function `TIMS_TO_TIMN` converts a time `tims` from the ABAP Dictionary type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html) to the ABAP Dictionary type [`TIMN`](ABENDDIC_BUILTIN_TYPES.html).

The actual parameter for the formal parameter `tims` must have the built-in data type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html) and contain a valid time in the format `HHMMSS`. The same applies to the actual parameter `on_error` as to the function `TSTMP_TO_DATS` (Variant 1, see above). Here, the class of the enumerated type of `on_error` is `SQL_TIMS_TO_TIMN`.

The same effect of the function `TIMS_TO_TIMN` can be achieved by [casting](ABENSQL_CAST.html).

The function `TIMS_FROM_TIMN` converts a time `time` from the ABAP Dictionary type [`TIMN`](ABENDDIC_BUILTIN_TYPES.html) to the ABAP Dictionary type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html). It is the counterpart to variant 9.

The actual parameter for the formal parameter `time` must have the built-in data type [`TIMN`](ABENDDIC_BUILTIN_TYPES.html) and contain a valid time in the format `HHMMSS`. The same applies to the actual parameter `on_null` as to the function `TSTMPL_FROM_UTCL` (Variant 6, see above). Here, the class of the enumerated type of `on_null` is `SQL_TIMS_FROM_TIMN`.

The same effect of the function `TIMS_FROM_TIMN` can be achieved by [casting](ABENSQL_CAST.html).

Extracts date, time, and daylight saving time flag of the current UTC time stamp using the conversion functions `TSTMP_TO_DATS`, `TSTMP_TO_TIMS`, and `TSTMP_TO_DST`. The values of the columns `DATS1` and `TIMS1` of the DDIC database table `DEMO_EXPRESSIONS` are combined into a time stamp by the conversion function `DATS_TIMS_TO_TSTMP`. The conversion functions `TSTMPL_TO_UTCL` and `TSTMPL_FROM_UTCL` convert time stamps between `TIMESTAMPL` and [`utclong`](ABENBUILTIN_TYPES_DATE_TIME.html) format. The conversion functions `DATS_TO_DATN` and `DATS_FROM_DATN` convert dates between [`DATS`](ABENDDIC_BUILTIN_TYPES.html) and [`DATN`](ABENDDIC_BUILTIN_TYPES.html). The conversion functions `TIMS_TO_TIMN` and `TIMS_FROM_TIMN` convert times between [`TIMS`](ABENDDIC_BUILTIN_TYPES.html) and [`TIMN`](ABENDDIC_BUILTIN_TYPES.html). The class `CL_DEMO_SQL_DATE_TIME` executes the statement and displays the result.

-   The functions described in Variants 5 to 10 have [keyword parameters](ABENKEYWORD_PARAMETER_GLOSRY.html) and all of them have exactly one required parameter. When calling only the required parameter, then it can be handled like a [positional parameter](ABENPOSITIONAL_PARAMETER_GLOSRY.html), that means it can be called without the formal parameter name.
-   These functions move the functions of the ABAP statements [`CONVERT TIME STAMP`](ABAPCONVERT_TIME-STAMP.html) and [`CONVERT INTO TIME STAMP`](ABAPCONVERT_DATE_TIME-STAMP.html) to the database.

-   `SQL_TSTMP_TO_DATS=>FAIL`, an error raises an exception (default)
-   `SQL_TSTMP_TO_DATS=>SET_TO_NULL`, an error returns the null value

-   `SQL_TSTMPL_TO_UTCL=>C_ON_ERROR-FAIL`, an error raises an exception (default)
-   `SQL_TSTMPL_TO_UTCL=>C_ON_ERROR-SET_TO_NULL`, an error returns the null value)
-   `SQL_TSTMPL_TO_UTCL=>C_ON_ERROR-SET_TO_INITIAL`, an error returns the initial value

-   `SQL_TSTMPL_FROM_UTCL=>C_ON_INITIAL-FAIL`, an initial value raises an exception
-   `SQL_TSTMPL_FROM_UTCL=>C_ON_INITIAL-SET_TO_NULL`, an initial value returns the null value
-   `SQL_TSTMPL_FROM_UTCL=>C_ON_INITIAL-SET_TO_INITIAL`, an initial value returns the initial value (default)

-   `SQL_TSTMPL_FROM_UTCL=>C_ON_NULL-FAIL`, a null value raises an exception
-   `SQL_TSTMPL_FROM_UTCL=>C_ON_NULL-SET_TO_NULL`, a null value returns the null value
-   `SQL_TSTMPL_FROM_UTCL=>C_ON_NULL-SET_TO_INITIAL`, a null value returns the initial value (default)

DATA ts TYPE timestampl. \\nGET TIME STAMP FIELD ts. \\n\\ \\nFINAL(utc) = utclong\_current( ). \\n\\ \\nDELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( \\n VALUE #( id = 'X' \\n dats1 = cl\_demo\_date\_time=>get\_user\_date( ) \\n tims1 = cl\_demo\_date\_time=>get\_user\_time( ) \\n timestampl1 = ts \\n utcl1 = utclong\_current( ) ) ). \\n\\ \\nDATA tzone TYPE timezone. \\nCALL FUNCTION 'GET\_SYSTEM\_TIMEZONE' \\n IMPORTING \\n timezone = tzone. \\n\\ \\nSELECT SINGLE \\n FROM demo\_expressions \\n FIELDS \\n tstmp\_current\_utctimestamp( ) \\n AS tstmp, \\n tstmp\_to\_dats( \\n tstmp = tstmp\_current\_utctimestamp( ), \\n tzone = @tzone, \\n on\_error = @sql\_tstmp\_to\_dats=>set\_to\_null ) \\n AS dat, \\n tstmp\_to\_tims( \\n tstmp = tstmp\_current\_utctimestamp( ), \\n tzone = @tzone, \\n on\_error = @sql\_tstmp\_to\_tims=>set\_to\_null ) \\n AS tim, \\n tstmp\_to\_dst( \\n tstmp = tstmp\_current\_utctimestamp( ), \\n tzone = @tzone, \\n on\_error = @sql\_tstmp\_to\_dst=>set\_to\_null ) \\n AS dst, \\n dats\_tims\_to\_tstmp( \\n date = dats1, \\n time = tims1, \\n tzone = @tzone, \\n on\_error = @sql\_dats\_tims\_to\_tstmp=>set\_to\_null ) \\n AS dat\_tim, \\n tstmpl\_to\_utcl( \\n tstmpl = timestampl1, \\n on\_error = @sql\_tstmpl\_to\_utcl=>c\_on\_error-set\_to\_null, \\n on\_initial = \\n @sql\_tstmpl\_to\_utcl=>c\_on\_initial-set\_to\_initial ) \\n AS utcl, \\n tstmpl\_from\_utcl( \\n utcl = utcl1, \\n on\_null = @sql\_tstmpl\_from\_utcl=>c\_on\_null-set\_to\_null ) \\n AS from\_utcl \\n INTO @FINAL(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_special\_functions.html abenabap\_sql\_date\_time\_functions.html