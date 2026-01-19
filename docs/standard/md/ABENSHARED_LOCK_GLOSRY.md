---
title: "ABENSHARED_LOCK_GLOSRY"
description: |
  ABENSHARED_LOCK_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHARED_LOCK_GLOSRY.htm"
abapFile: "ABENSHARED_LOCK_GLOSRY.html"
keywords: ["select", "update", "do", "method", "data", "ABENSHARED", "LOCK", "GLOSRY"]
---

[Lock](ABENLOCK_GLOSRY.html) that allows other users to set further shared locks but no simultaneous [exclusive locks](ABENEXCLUSIVE_LOCK_GLOSRY.html) for the locked data. The [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement [`SELECT`](ABAPSELECT.html) without the addition [`FOR UPDATE`](ABAPSELECT_SINGLE.html) as well as the corresponding [Native SQL](ABENNATIVE_SQL_GLOSRY.html) statement or a `SELECT` statement in an [AMDP](ABENAMDP_METHOD_GLOSRY.html) method do not set such a [database lock](ABENDATABASE_LOCK_GLOSRY.html) for the addressed lines by default. A shared lock is set as an [SAP lock](ABENSAP_LOCK_GLOSRY.html) via a correspondingly parameterized call of a [lock function module](ABENLOCK_FUNCTION_MODULE_GLOSRY.html).

ABENTECHNO\_GLOSSARY.html