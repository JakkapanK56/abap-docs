---
title: "ABENSHM_AREA_INSTANCE_ACCESS"
description: |
  ABENSHM_AREA_INSTANCE_ACCESS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_AREA_INSTANCE_ACCESS.htm"
abapFile: "ABENSHM_AREA_INSTANCE_ACCESS.html"
keywords: ["if", "class", "ABENSHM", "AREA", "INSTANCE", "ACCESS"]
---

Shared objects are stored and managed in area instance versions. In an ABAP program, area instance versions and thus shared objects are accessed exclusively using area handles. Here, area locks are set and area instance versions can acquire different states.

The transaction `SHMM` provides an overview of the area instances in the shared objects memory of the current AS instance, the associated locks, and the states of the area instance versions. The class `CL_SHM_UTILITIES` is used to query the properties of area instances in programs.

-   [Area handles](ABENSHM_AREA_INSTANCE_HANDLE.html)
-   [Area locks](ABENSHM_AREA_INSTANCE_LOCKS.html)
-   [States of area instance versions](ABENSHM_AREA_INSTANCE_STATE.html)

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html