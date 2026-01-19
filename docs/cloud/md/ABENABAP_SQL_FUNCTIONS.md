---
title: "ABENABAP_SQL_FUNCTIONS"
description: |
  ABENABAP_SQL_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SQL_FUNCTIONS.htm"
abapFile: "ABENABAP_SQL_FUNCTIONS.html"
keywords: ["select", "if", "data", "internal-table", "ABENABAP", "SQL", "FUNCTIONS"]
---

The following built-in [SQL functions](ABENSQL_FUNCTIONS.html) can either be specified as standalone functions in ABAP SQL or as operands of [SQL expressions](ABAPSQL_EXPR.html), in all places where SQL expressions are possible.

[Certain SQL expressions](ABENSQL_ENGINE_EXPR.html) can be calculated by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). If any other SQL expressions are used, [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) is bypassed and internal tables accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

-   [Numeric functions](ABENSQL_ARITH_FUNC.html)
-   [String functions](ABENSQL_STRING_FUNC.html)
-   [Coalesce function](ABENSQL_COALESCE.html)
-   [UUID function](ABENSQL_UUID.html)
-   [Spatial functions](ABENSQL_SPATIAL_FUNC.html)
-   [Hierarchy composite ID function](ABENSQL_HIERARCHY_COMP_ID.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html