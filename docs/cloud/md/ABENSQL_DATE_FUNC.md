---
title: "ABENSQL_DATE_FUNC"
description: |
  ABENSQL_DATE_FUNC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_DATE_FUNC.htm"
abapFile: "ABENSQL_DATE_FUNC.html"
keywords: ["if", "data", "types", "ABENSQL", "DATE", "FUNC"]
---

1\. `... IS_VALID( date|time|utclong ) | EXTRACT_YEAR( date|utclong ) | EXTRACT_MONTH( date|utclong ) | EXTRACT_DAY( date|utclong ) | DAYNAME( date|utclong ) | MONTHNAME( date|utclong ) | WEEKDAY( date|utclong ) | DAYS_BETWEEN( \{date1|utclong1\},\{date2|utclong2\} ) | ADD_DAYS( \{date|utclong\},days ) | ADD_MONTHS( \{date|utclong\},months ) ...`

2\. `... DATN_DAYS_BETWEEN( date1,date2 ) | DATN_ADD_DAYS( date,days ) | DATN_ADD_MONTHS( date,months ) ...`

3\. `... DATS_IS_VALID( date ) | DATS_DAYS_BETWEEN( date1,date2 ) | DATS_ADD_DAYS( date,days ) | DATS_ADD_MONTHS( date,months ) ...`

These SQL functions perform operations on dates with arguments of the built-in data types [`DATN`](ABENDDIC_BUILTIN_TYPES.html), [`DATS`](ABENDDIC_BUILTIN_TYPES.html), [`TIMN`](ABENDDIC_BUILTIN_TYPES.html), [`TIMS`](ABENDDIC_BUILTIN_TYPES.html), and [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html). The first set covers generic functions, the second set covers a function depending on the data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html), and the third set covers a function depending on the data type [`DATS`](ABENDDIC_BUILTIN_TYPES.html). The arguments of the functions are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis. [SQL expressions](ABAPSQL_EXPR.html) of matching data types can be passed as actual parameters. If an actual parameter contains the [null value](ABENNULL_VALUE_GLOSRY.html), every function except `IS_VALID` and `DATS_IS_VALID` returns a null value.

[Generic Date Functions](ABENSQL_GEN_DATE_FUNC.html)

[Functions for `DATN`](ABENSQL_DATN_DATE_FUNC.html)

[Functions for `DATS`](ABENSQL_DATS_DATE_FUNC.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_special\_functions.html abenabap\_sql\_date\_time\_functions.html