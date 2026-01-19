---
title: "ABENNEWS-775-UPDATE"
description: |
  ABENNEWS-775-UPDATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-775-UPDATE.htm"
abapFile: "ABENNEWS-775-UPDATE.html"
keywords: ["select", "update", "do", "if", "data", "ABENNEWS", "775", "UPDATE"]
---

[No authorization checks](ABENAUTHORITY_DURING_UPDATE.html) must be made in [updates](ABENUPDATE_GLOSRY.html).

-   This rule was not always applied before ABAP release 7.75:

-   The statement [`AUTHORITY-CHECK`](ABAPAUTHORITY-CHECK.html) only omitted authorization checks in [update sessions](ABENUPDATE_SESSION_GLOSRY.html) and always set `sy-subrc` to 0 here.
-   In [local updates](ABENLOCAL_UPDATE_GLOSRY.html), on the other hand, `AUTHORITY-CHECK` made an authorization check.
-   When using ABAP SQL to access a CDS entity for which a CDS role is defined, implicit [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) was applied in local updates and in update sessions by default.

-   The following applies to [local updates](ABENLOCAL_UPDATE_GLOSRY.html) and to [update sessions](ABENUPDATE_SESSION_GLOSRY.html) from ABAP release 7.75:

-   In updates, the statement [`AUTHORITY-CHECK`](ABAPAUTHORITY-CHECK.html) always sets the value `sy-subrc` to 0 and does not make any authorization checks.
-   [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) cannot take place. If the ABAP SQL statement [`SELECT`](ABAPSELECT.html) is used in an update to access a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) for which access control is not disabled using the value `#NOT_ALLOWED` for the annotation [`@AccessControl.authorizationCheck`](ABENCDS_VIEW_ANNO_V1.html) or using the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) in the [`FROM`](ABAPFROM_CLAUSE.html) clause, the [runtime error](ABENRUNTIME_ERROR_GLOSRY.html)\\ `SYSTEM_UPDATE_TASK_ILL_STMT` occurs.

abenabap.html abennews.html abennews-77.html abennews-775.html