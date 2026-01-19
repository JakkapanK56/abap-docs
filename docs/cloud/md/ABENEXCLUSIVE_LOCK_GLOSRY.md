---
title: "ABENEXCLUSIVE_LOCK_GLOSRY"
description: |
  ABENEXCLUSIVE_LOCK_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENEXCLUSIVE_LOCK_GLOSRY.htm"
abapFile: "ABENEXCLUSIVE_LOCK_GLOSRY.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "method", "data", "ABENEXCLUSIVE", "LOCK", "GLOSRY"]
---

[Lock](ABENLOCK_GLOSRY.html) that does not allow other users to set simultaneous locks for the exclusively locked data. The [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements [`INSERT`](ABAPINSERT_DBTAB.html), [`DELETE`](ABAPDELETE_DBTAB.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), and [`UPDATE`](ABAPUPDATE.html), [`SELECT`](ABAPSELECT.html) with the addition [`FOR UPDATE`](ABAPSELECT_SINGLE.html), and all corresponding statements in [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) set corresponding [database locks](ABENDATABASE_LOCK_GLOSRY.html) on the rows they address.

ABENTECHNO\_GLOSSARY.html