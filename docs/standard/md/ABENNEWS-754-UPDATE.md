---
title: "ABENNEWS-754-UPDATE"
description: |
  ABENNEWS-754-UPDATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-754-UPDATE.htm"
abapFile: "ABENNEWS-754-UPDATE.html"
keywords: ["select", "update", "do", "if", "data", "ABENNEWS", "754", "UPDATE"]
---

[No authorization checks](ABENAUTHORITY_DURING_UPDATE.html) must be made in [updates](ABENUPDATE_GLOSRY.html).

-   This rule was not always applied before ABAP release 7.54:

-   The statement [`AUTHORITY-CHECK`](ABAPAUTHORITY-CHECK.html) made no authorization checks in [update sessions](ABENUPDATE_SESSION_GLOSRY.html) but always set `sy-subrc` to 0 here.
-   The statement `AUTHORITY-CHECK` made an authorization check In [local updates](ABENLOCAL_UPDATE_GLOSRY.html),
-   When using ABAP SQL to access a CDS entity for which a CDS role is defined, implicit [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) was applied by default in update sessions and in local updates.

-   From ABAP release 7.54, the following applies to [update sessions](ABENUPDATE_SESSION_GLOSRY.html) and to [local updates](ABENLOCAL_UPDATE_GLOSRY.html):

-   In updates, the statement [`AUTHORITY-CHECK`](ABAPAUTHORITY-CHECK.html) does not make any authorization checks but sets the value `sy-subrc` always to 0.
-   In updates, [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) is not allowed. If the ABAP SQL statement [`SELECT`](ABAPSELECT.html) is used during an update to access a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) for which access control is not disabled, the [runtime error](ABENRUNTIME_ERROR_GLOSRY.html)\\ `SYSTEM_UPDATE_TASK_ILL_STMT` occurs. Access control can be disabled as follows:
-   **In the CDS entity:** Using the value *#NOT\_ALLOWED* for the annotation [`@AccessControl.authorizationCheck`](ABENCDS_VIEW_ANNO_V1.html).
-   **In ABAP SQL:** Using the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) in the [`FROM`](ABAPFROM_CLAUSE.html) clause.

abenabap.html abennews.html abennews-75.html abennews-754.html