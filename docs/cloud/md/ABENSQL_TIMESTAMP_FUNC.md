---
title: "ABENSQL_TIMESTAMP_FUNC"
description: |
  ABENSQL_TIMESTAMP_FUNC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_TIMESTAMP_FUNC.htm"
abapFile: "ABENSQL_TIMESTAMP_FUNC.html"
keywords: ["if", "class", "data", "types", "ABENSQL", "TIMESTAMP", "FUNC"]
---

1\. `... IS_VALID( date|time|utclong ) | EXTRACT_YEAR( date|utclong ) | EXTRACT_MONTH( date|utclong ) | EXTRACT_DAY( date|utclong ) | EXTRACT_HOUR( time|utclong ) | EXTRACT_MINUTE( time|utclong ) | EXTRACT_SECOND( time|utclong ) | DAYNAME( date|utclong ) | MONTHNAME( date|utclong ) | WEEKDAY( date|utclong ) | DAYS_BETWEEN( \{date1|utclong1\},\{date2|utclong2\} ) | ADD_DAYS( \{date|utclong\},days ) | ADD_MONTHS( \{date|utclong\},months ) ...`

2\. `... UTCL_CURRENT( ) | UTCL_ADD_SECONDS( utclong,seconds ) | UTCL_SECONDS_BETWEEN( utclong1,utclong2 ) ...`

3\. `... TSTMP_IS_VALID( tstmp ) | TSTMP_CURRENT_UTCTIMESTAMP( ) | TSTMP_SECONDS_BETWEEN( tstmp1 = tstmp1, tstmp2 = tstmp2[, on_error = on_error] ) | TSTMP_ADD_SECONDS( tstmp = tstmp, seconds = seconds[, on_error = on_error] ) ...`

These SQL functions perform operations on time stamps. The values of time stamps are handled as [UTC time stamps](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html).

The first set covers generic functions, the second set covers functions depending on the built-in data type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html), and the third set covers functions depending on the data element [`TIMESTAMP`](ABENTIME_STAMPS_PACKED.html).

The arguments of the functions are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis. Optional parameters can be assigned actual parameters when called. Non-optional parameters must be assigned actual parameters.

[SQL expressions](ABAPSQL_EXPR.html) of matching data types can be specified as actual parameters. Only [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html) of specific classes can be passed to the parameter `on_error` for the `TIMESTAMP` functions `TSTMP_SECONDS_BETWEEN` and `TSTMP_ADD_SECONDS`. If an actual parameter contains the [null value](ABENNULL_VALUE_GLOSRY.html), every function except `IS_VALID` and `TSTMP_IS_VALID` returns a null value.

[Generic Time Stamp Functions](ABENSQL_GEN_TIMESTAMP_FUNC.html)

[Functions for `UTCLONG`](ABENSQL_UTC_TIMESTAMP_FUNC.html)

[Functions for `TIMESTAMP`](ABENSQL_TS_TIMESTAMP_FUNC.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_special\_functions.html abenabap\_sql\_date\_time\_functions.html