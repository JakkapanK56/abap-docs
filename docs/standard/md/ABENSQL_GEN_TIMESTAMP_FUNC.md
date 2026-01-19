---
title: "ABENSQL_GEN_TIMESTAMP_FUNC"
description: |
  ABENSQL_GEN_TIMESTAMP_FUNC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_GEN_TIMESTAMP_FUNC.htm"
abapFile: "ABENSQL_GEN_TIMESTAMP_FUNC.html"
keywords: ["do", "data", "types", "ABENSQL", "GEN", "TIMESTAMP", "FUNC"]
---

`... IS_VALID( date|time|utclong )    | EXTRACT_YEAR( date|utclong )    | EXTRACT_MONTH( date|utclong )    | EXTRACT_DAY( date|utclong )    | EXTRACT_HOUR( time|utclong )    | EXTRACT_MINUTE( time|utclong )    | EXTRACT_SECOND( time|utclong )    | DAYNAME( date|utclong )    | MONTHNAME( date|utclong )    | WEEKDAY( date|utclong )    | DAYS_BETWEEN( \{date1|utclong1\},\{date2|utclong2\} )    | ADD_DAYS( \{date|utclong\},days )    | ADD_MONTHS( \{date|utclong\},months ) ...`

These SQL functions perform operations with arguments of the built-in data types [`DATN`](ABENDDIC_BUILTIN_TYPES.html), [`DATS`](ABENDDIC_BUILTIN_TYPES.html), [`TIMN`](ABENDDIC_BUILTIN_TYPES.html), [`TIMS`](ABENDDIC_BUILTIN_TYPES.html), and [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html). The generic functions are documented in [date functions](ABENSQL_DATE_FUNC.html) and [time functions](ABENSQL_TIME_FUNC.html).

All generic functions enforce [strict mode from ABAP release 7.83](ABENABAP_SQL_STRICTMODE_783.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_special\_functions.html abenabap\_sql\_date\_time\_functions.html abensql\_timestamp\_func.html