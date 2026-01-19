---
title: "ABENSQL_TIME_FUNC"
description: |
  ABENSQL_TIME_FUNC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_TIME_FUNC.htm"
abapFile: "ABENSQL_TIME_FUNC.html"
keywords: ["if", "data", "types", "ABENSQL", "TIME", "FUNC"]
---

1\. `... IS_VALID( date|time|utclong ) | EXTRACT_HOUR( time|utclong ) | EXTRACT_MINUTE( time|utclong ) | EXTRACT_SECOND( time|utclong ) ...`

2\. `... TIMS_IS_VALID( time ) ...`

These SQL functions perform operations on times with arguments of the built-in data types [`TIMN`](ABENDDIC_BUILTIN_TYPES.html), [`TIMS`](ABENDDIC_BUILTIN_TYPES.html), and [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html). The first set covers generic functions and the second set covers one function depending on the data type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html). The arguments of the functions are specified in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis. [SQL expressions](ABAPSQL_EXPR.html) of matching data types can be specified as actual parameters. If an actual parameter contains the [null value](ABENNULL_VALUE_GLOSRY.html), every function except `IS_VALID` and `TIMS_IS_VALID` returns a null value. `IS_VALID` and `TIMS_IS_VALID` return the value 0.

[Generic Time Functions](ABENSQL_GEN_TIME_FUNC.html)

[Functions for `TIMS`](ABENSQL_TIMS_TIME_FUNC.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_special\_functions.html abenabap\_sql\_date\_time\_functions.html