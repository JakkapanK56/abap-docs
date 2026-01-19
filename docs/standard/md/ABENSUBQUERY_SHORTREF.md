---
title: "ABENSUBQUERY_SHORTREF"
description: |
  ABENSUBQUERY_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSUBQUERY_SHORTREF.htm"
abapFile: "ABENSUBQUERY_SHORTREF.html"
keywords: ["select", "insert", "data", "ABENSUBQUERY", "SHORTREF"]
---

``... ( SELECT \{ ...                 FROM ... \}\             |\ \{ FROM ...                 FIELDS ... \}\               [WHERE [`sql_cond`](ABENSQL_COND_SHORTREF.html)]\               [GROUP BY ...]\ [HAVING [`sql_cond`](ABENSQL_COND_SHORTREF.html)] ) ...``

Parenthesized `SELECT` statement that can be used in conditions [`sql_cond`](ABENSQL_COND_SHORTREF.html) of [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements, in common table expressions of the statement [`WITH`](ABAPWITH_SHORTREF.html), or as a data source of an [`INSERT` statement](ABAPINSERT_DBTAB_SHORTREF.html) for a subquery.

-   As in the statement [`SELECT`](ABAPSELECT_SHORTREF.html).
-   The additions `SINGLE`, `ORDER BY`, and `INTO` cannot be used.
-   Further additions may also be excluded, depending on how they are used.

abenabap.html abenabap\_reference.html abenabap\_shortref.html