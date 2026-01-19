---
title: "ABENNEWS-789-ABAP_SQL"
description: |
  ABENNEWS-789-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-789-ABAP_SQL.htm"
abapFile: "ABENNEWS-789-ABAP_SQL.html"
keywords: ["select", "loop", "do", "if", "case", "data", "internal-table", "ABENNEWS", "789", "ABAP", "SQL"]
---

[1. Support for `ORDER BY` in the ABAP SQL In-Memory Engine](#ABAP_MODIFICATION_1@4@) 

[2. `ORDER BY n`](#ABAP_MODIFICATION_2@4@)

The [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) fully supports the [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause now:

In the [column list](ABAPORDERBY_CLAUSE.html) of the [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause, a literal or a host constant of an integer type is handled as the column position in the result set of the query. This feature is undocumented and behaves partly undefined. With release 7.96 the behavior is defined and documented.

-   `ORDER BY` no longer bypasses [table buffering](ABENTABLE_BUFFERING_GLOSRY.html). Before, it bypassed table buffering in cases where single columns were specified as sort keys and these columns were not a left-aligned subset of the primary key in the correct order or if the addition `DESCENDING` was specified for a column.
-   `ORDER BY` can now be used with [`SELECT FROM @itab`](ABAPSELECT_ITAB.html) without transporting the internal table to the database. This allows looping over an internal table in a sequence defined by `ORDER BY` and the sorting of internal tables by expressions.

abenabap.html abennews.html abennews-78.html abennews-789.html