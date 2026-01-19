---
title: "ABENNEWS-777-UPDATE"
description: |
  ABENNEWS-777-UPDATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-777-UPDATE.htm"
abapFile: "ABENNEWS-777-UPDATE.html"
keywords: ["select", "update", "if", "ABENNEWS", "777", "UPDATE"]
---

The rule introduced in [ABAP release 7.75](ABENNEWS-775-UPDATE.html) that [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) cannot take place during [updates](ABENAUTHORITY_DURING_UPDATE.html) was changed as follows:

-   There is no longer a [runtime error](ABENRUNTIME_ERROR_GLOSRY.html)\\ `SYSTEM_UPDATE_TASK_ILL_STMT`, when the ABAP SQL statement [`SELECT`](ABAPSELECT.html) is used for a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) for which [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) is active.
-   Instead, [PFCG conditions](ABENPFCG_CONDITION_GLOSRY.html) based on authorizations in transaction `PFCG` are implicitly evaluated in such a way, as if the current user had full authorization for all authorization fields of the respective authorization object.

abenabap.html abennews.html abennews-77.html abennews-777.html