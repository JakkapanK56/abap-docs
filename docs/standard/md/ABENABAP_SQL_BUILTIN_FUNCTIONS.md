---
title: "ABENABAP_SQL_BUILTIN_FUNCTIONS"
description: |
  ABENABAP_SQL_BUILTIN_FUNCTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_BUILTIN_FUNCTIONS.htm"
abapFile: "ABENABAP_SQL_BUILTIN_FUNCTIONS.html"
keywords: ["select", "if", "data", "internal-table", "ABENABAP", "SQL", "BUILTIN", "FUNCTIONS"]
---

The following [built-in database functions](ABENDDIC_BUILTIN_FUNCTIONS.html) managed by the ABAP Dictionary can be specified in ABAP SQL as [SQL expressions](ABAPSQL_EXPR.html) in all places where these are possible:

[Certain SQL expressions](ABENSQL_ENGINE_EXPR.html) can be calculated by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). If any other SQL expressions are used, [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) is bypassed and internal tables accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

-   [SQL functions](ABENABAP_SQL_FUNCTIONS.html)
-   [Special functions](ABENABAP_SQL_SPECIAL_FUNCTIONS.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html