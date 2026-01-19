---
title: "ABENSQL_FUNCTIONS"
description: |
  ABENSQL_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_FUNCTIONS.htm"
abapFile: "ABENSQL_FUNCTIONS.html"
keywords: ["select", "do", "if", "data", "types", "internal-table", "ABENSQL", "FUNCTIONS"]
---

The following sections describe the built-in SQL functions that can be used by [ABAP CDS](ABENABAP_CDS_GLOSRY.html) and [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

The possible operands and data types are described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](ABENCDS_SQL_FUNCTIONS_V1.html), [ABAP CDS, View Entities](ABENCDS_SQL_FUNCTIONS_V2.html), and [ABAP SQL](ABENABAP_SQL_FUNCTIONS.html).

[Certain SQL expressions](ABENSQL_ENGINE_EXPR.html) can be calculated by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). If any other SQL expressions are used, [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) is bypassed and internal tables accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

-   [SQL functions for numeric values](ABENSQL_FUNCTIONS_NUMERIC.html)
-   [SQL functions for strings](ABENSQL_FUNCTIONS_STRING.html)
-   [SQL functions for null values](ABENSQL_FUNCTIONS_NULL.html)
-   [SQL functions for UUIDs](ABENSQL_FUNCTIONS_UUID.html)

abenabap.html abenabap\_dictionary.html abenddic\_builtin\_functions.html