---
title: "ABENSQL_UTC_TIMESTAMP_FUNC"
description: |
  ABENSQL_UTC_TIMESTAMP_FUNC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_UTC_TIMESTAMP_FUNC.htm"
abapFile: "ABENSQL_UTC_TIMESTAMP_FUNC.html"
keywords: ["select", "if", "case", "catch", "class", "data", "types", "ABENSQL", "UTC", "TIMESTAMP", "FUNC"]
---

`... UTCL_CURRENT( )    | UTCL_ADD_SECONDS( utclong,seconds )    | UTCL_SECONDS_BETWEEN( utclong1,utclong2 ) ...`

[1. `... UTCL_CURRENT( )`](#ABAP_VARIANT_1@1@)

[2. `... UTCL_ADD_SECONDS( utclong,seconds )`](#ABAP_VARIANT_2@1@)

[3. `... UTCL_SECONDS_BETWEEN( utclong1,utclong2 )`](#ABAP_VARIANT_3@1@)

These SQL functions perform operations with arguments of the built-in data type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

This function generates an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html) from the [system time](ABENSYSTEM_TIME_GLOSRY.html) and the [system date](ABENSYSTEM_DATE_GLOSRY.html) of AS ABAP. The return value has the built-in dictionary type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

All columns of a query have the same time stamp.

Selects column `CARRID` from table `SCARR` and returns a time stamp for each row. The time stamp is generated only once for the query and, therefore, all rows have the same time stamp.

The function `UTCL_ADD_SECONDS` adds `seconds` seconds to a time stamp `utclong`. It has two [positional parameters](ABENPOSITIONAL_PARAMETER_GLOSRY.html). The actual parameter for the formal parameter `utclong` must have the built-in dictionary type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) and contain a [valid time stamp](ABENTIME_STAMPS_PACKED.html) in the format `YYYYMMDDHHMMSSMMMUUUN`. An invalid time stamp produces the initial value. The actual parameter for the formal parameter `seconds` must have either the built-in data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html) or the data type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 21 and 7 decimal places. Any negative values are subtracted. If the result is invalid, a catchable exception of class `CX_SY_OPEN_SQL_DB` is raised.

The result is of type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

The function `UTCL_SECONDS_BETWEEN` calculates the difference between two specified time stamps `utcl1` and `utcl2` in seconds. It has two [positional parameters](ABENPOSITIONAL_PARAMETER_GLOSRY.html). The actual parameters for the formal parameters `utcl1` and `utcl2` must have the built-in dictionary type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html) and contain a [valid time stamp](ABENTIME_STAMPS_PACKED.html) in the format `YYYYMMDDHHMMSSMMMUUUN`. Any invalid time stamps produce an error. If `utcl2` is greater than `utcl1`, the result is positive. If the values are identical, the result is 0. In all other cases, the result is negative.

The result is of type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length 21 and 7 decimal places.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT carrid, utcl\_current( ) AS time\_stamp \\n FROM scarr \\n INTO TABLE @FINAL(result). \\n\\ \\nout->display( result ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_special\_functions.html abenabap\_sql\_date\_time\_functions.html abensql\_timestamp\_func.html