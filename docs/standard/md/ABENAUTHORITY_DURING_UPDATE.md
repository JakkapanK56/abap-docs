---
title: "ABENAUTHORITY_DURING_UPDATE"
description: |
  ABENAUTHORITY_DURING_UPDATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAUTHORITY_DURING_UPDATE.htm"
abapFile: "ABENAUTHORITY_DURING_UPDATE.html"
keywords: ["select", "update", "do", "if", "data", "ABENAUTHORITY", "DURING", "UPDATE"]
---

No authorization checks can be performed during an [update](ABENUPDATE_GLOSRY.html), that is, when processing an [update function module](ABENUPDATE_FUNCTION_MODULE_GLOSRY.html) triggered by [`COMMIT WORK`](ABAPCOMMIT.html)).

This applies to [local updates](ABENLOCAL_UPDATE_GLOSRY.html) and [update sessions](ABENUPDATE_SESSION_GLOSRY.html).

-   During an update, the statement [`AUTHORITY-CHECK`](ABAPAUTHORITY-CHECK.html) always sets the value `sy-subrc` to 0 and does not perform any authorization checks.
-   During an update, [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) is not allowed. If the ABAP SQL statement [`SELECT`](ABAPSELECT.html) is used during an update to access a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) for which access control is not disabled, the [runtime error](ABENRUNTIME_ERROR_GLOSRY.html)\\ `SYSTEM_UPDATE_TASK_ILL_STMT` occurs. Access control can be disabled as follows:

-   **In the CDS entity:** Using the value *#NOT\_ALLOWED* for the annotation [`@AccessControl.authorizationCheck`](ABENCDS_VIEW_ANNO_V1.html).
-   **In ABAP SQL:** Using the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) in the [`FROM`](ABAPFROM_CLAUSE.html) clause.

abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abensap\_luw.html