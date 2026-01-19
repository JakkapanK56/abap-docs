---
title: "ABENSQL_TS_TIMESTAMP_FUNC"
description: |
  ABENSQL_TS_TIMESTAMP_FUNC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_TS_TIMESTAMP_FUNC.htm"
abapFile: "ABENSQL_TS_TIMESTAMP_FUNC.html"
keywords: ["select", "insert", "delete", "if", "case", "try", "catch", "class", "data", "types", "ABENSQL", "TIMESTAMP", "FUNC"]
---

`... TSTMP_IS_VALID( tstmp )    | TSTMP_CURRENT_UTCTIMESTAMP( )    | TSTMP_SECONDS_BETWEEN( tstmp1   = tstmp1,                             tstmp2   = tstmp2[,                             on_error = on_error] )    | TSTMP_ADD_SECONDS( tstmp    = tstmp,                         seconds  = seconds[,                         on_error = on_error] ) ...`

[1. `... TSTMP_IS_VALID( tstmp )`](#ABAP_VARIANT_1@1@)

[2. `... TSTMP_CURRENT_UTCTIMESTAMP( )`](#ABAP_VARIANT_2@1@)

[3. `... TSTMP_SECONDS_BETWEEN( ... )`](#ABAP_VARIANT_3@1@)

[4. `... TSTMP_ADD_SECONDS( ... )`](#ABAP_VARIANT_4@1@)

These SQL functions perform operations with arguments of the data element [`TIMESTAMP`](ABENTIME_STAMPS_PACKED.html).

The function `TSTMP_IS_VALID` determines whether an argument `tstmp` contains a [valid time stamp](ABENTIME_STAMPS_PACKED.html) in the format `YYYYMMDDHHMMSS`. It has one [positional parameter](ABENPOSITIONAL_PARAMETER_GLOSRY.html). The actual parameter must have the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and no decimal places. The result has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). A valid time stamp produces the value 1 and all other input values (including the null value) produce the value 0.

The function `TSTMP_CURRENT_UTCTIMESTAMP` returns a [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) in accordance with the [POSIX](ABENPOSIX_TIMESTAMP_GLOSRY.html) standard. The result has the data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and no decimal places.

The function `TSTMP_SECONDS_BETWEEN` calculates the difference between two specified time stamps, `tstmp1` and `tstmp2` in seconds. All parameters are [keyword parameters](ABENKEYWORD_PARAMETER_GLOSRY.html). The actual parameters for the formal parameters `tstmp1` and `tstmp2` must have the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and no decimal places and contain [valid time stamps](ABENTIME_STAMPS_PACKED.html) in the format `YYYYMMDDHHMMSS`. Any invalid time stamps produce an error. If `tstmp2` is greater than `tstmp1`, the result is positive. In the reverse case, it is negative.

The optional parameter `on_error` affects how errors are handled. The parameter for `on_error` must be an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) with the [enumerated type](ABENENUMERATED_TYPE_GLOSRY.html)\\ `ON_ERROR` from the class `SQL_TSTMP_SECONDS_BETWEEN` and the following [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html) can be passed:

The function `TSTMP_ADD_SECONDS` adds `seconds` seconds to a time stamp `tstmp`. All parameters are [keyword parameters](ABENKEYWORD_PARAMETER_GLOSRY.html). The actual parameter for the formal parameter `tstmp` must have the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and no decimal places and contain a [valid time stamp](ABENTIME_STAMPS_PACKED.html) in the format `YYYYMMDDHHMMSS`. An invalid time stamp produces an error. The actual parameter for the formal parameter `seconds` must also have the built-in data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 15 and no decimal places. Negative values are subtracted. If the result is invalid, an error occurs.

The optional parameter `on_error` affects how errors are handled. The parameter for `on_error` must be an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) with the [enumerated type](ABENENUMERATED_TYPE_GLOSRY.html)\\ `ON_ERROR` from the class `SQL_TSTMP_ADD_SECONDS` and the following [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html) can be passed:

Applies the time stamp functions to columns of the DDIC database table `DEMO_EXPRESSIONS`. The class `CL_DEMO_SQL_TIMESTAMP_FUNC` executes this access to the table and displays the result. The column `NUM1` of the DDIC database table is given a value that is added to a time stamp in the column `TIMESTAMP1` as seconds. The difference is calculated between this sum and a time stamp retrieved on the database by the function `TSTMP_CURRENT_UTCTIMESTAMP`. A delay `wait` can be integrated between the time stamp in the ABAP program and the time stamp created on the database. The number of seconds specified as type-compliant literal in the variable `pack` is added to the time stamp `utcl`, which has the type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html). Finally, the difference in seconds between two time stamps of type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) is calculated. Since `utcl1` is greater than `utcl2`, the result is negative.

-   The UTC time stamp is created from the clock on the database server. The [system date](ABENSYSTEM_DATE_GLOSRY.html) and the [system time](ABENSYSTEM_TIME_GLOSRY.html) in AS ABAP from which its time stamp is created using [`GET TIME STAMP`](ABAPGET_TIME-STAMP.html) are [synchronized](ABENSYSTEM_USER_TIME_ZONES.html) with the database server clock.
-   If the function `TSTMP_CURRENT_UTCTIMESTAMP` is used more than once within an ABAP SQL statement, it cannot be guaranteed that every call within a database access produces the same result. Hence, later calls can produce later time stamps.

-   `SQL_TSTMP_SECONDS_BETWEEN=>FAIL`: An error raises an exception (default).
-   `SQL_TSTMP_SECONDS_BETWEEN=>SET_TO_NULL`: An error returns the null value.

-   `SQL_TSTMP_ADD_SECONDS=>FAIL`: An error raises an exception (default).
-   `SQL_TSTMP_ADD_SECONDS=>SET_TO_NULL`: An error returns the null value.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(seconds) = 3600. \\ncl\_demo\_input=>add\_field( CHANGING field = seconds ). \\nDATA(wait) = 1. \\ncl\_demo\_input=>request( CHANGING field = wait ). \\n\\ \\nGET TIME STAMP FIELD FINAL(timestamp1). \\n\\ \\nDATA pack TYPE p LENGTH 11 DECIMALS 7 VALUE '123.456'. \\n\\ \\nFINAL(utcl) = utclong\_current( ). \\nFINAL(utcl1) = \\n utclong\_add( val = utcl \\n days = 1000 \\n hours = 100 \\n minutes = 10 ). \\n\\ \\nDELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( VALUE #( \\n id = 'X' \\n num1 = seconds \\n timestamp1 = timestamp1 \\n utcl1 = utcl1 \\n utcl2 = utclong\_current( ) ) ). \\nWAIT UP TO COND #( WHEN wait > 10 THEN 10 \\n WHEN wait < 0 THEN 0 \\n ELSE wait ) SECONDS. \\n\\ \\nTRY. \\n SELECT \\n SINGLE \\n FROM demo\_expressions \\n FIELDS \\n timestamp1, \\n tstmp\_is\_valid( \\n timestamp1 ) \\n AS valid1, \\n tstmp\_seconds\_between( \\n tstmp1 = tstmp\_current\_utctimestamp( ), \\n tstmp2 = tstmp\_add\_seconds( \\n tstmp = timestamp1, \\n seconds = CAST( num1 AS DEC( 15,0 ) ), \\n on\_error = @sql\_tstmp\_add\_seconds=>fail ), \\n on\_error = @sql\_tstmp\_seconds\_between=>fail ) \\n AS difference, \\n utcl\_add\_seconds( utcl2, @pack ) AS add\_seconds, \\n utcl\_seconds\_between( utcl1,utcl2 ) AS seconds\_between \\n INTO @FINAL(result). \\n out->display( result ). \\n CATCH cx\_sy\_open\_sql\_db INTO FINAL(exc). \\n out->display( exc->get\_text( ) ). \\n RETURN. \\nENDTRY. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_special\_functions.html abenabap\_sql\_date\_time\_functions.html abensql\_timestamp\_func.html