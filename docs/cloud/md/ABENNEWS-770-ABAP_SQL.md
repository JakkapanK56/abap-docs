---
title: "ABENNEWS-770-ABAP_SQL"
description: |
  ABENNEWS-770-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-770-ABAP_SQL.htm"
abapFile: "ABENNEWS-770-ABAP_SQL.html"
keywords: ["do", "if", "case", "ABENNEWS", "770", "ABAP", "SQL"]
---

ABAP SQL read statements no longer bypass [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) in cases where a column is specified on the right side of [comparisons](ABENWHERE_LOGEXP_COMPARE.html) or of [`BETWEEN`](ABENWHERE_LOGEXP_INTERVAL.html) in an [SQL condition](ABENASQL_COND.html) that is not required to identify a single row or a generic range. The prerequisite for this is that both operands are numeric but do not have the type `DF16_DEC` or `DF34_DEC`, that both operands are character-like, or that both operands have the type `RAW` with the same lengths.

abenabap.html abennews.html abennews-77.html abennews-770.html