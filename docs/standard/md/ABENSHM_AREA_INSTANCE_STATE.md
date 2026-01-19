---
title: "ABENSHM_AREA_INSTANCE_STATE"
description: |
  ABENSHM_AREA_INSTANCE_STATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_AREA_INSTANCE_STATE.htm"
abapFile: "ABENSHM_AREA_INSTANCE_STATE.html"
keywords: ["update", "delete", "if", "case", "method", "data", "ABENSHM", "AREA", "INSTANCE", "STATE"]
---

Area instance versions can have the following states.

In an area without area instance versioning, there is always only one area instance version that exists in one of the states listed above. In an area with versioning, there can be multiple versions of different states in an area instance at the same time:

If a large number of obsolete area instance versions in an area still have read locks, but there is an updated version in an active state, this can indicate problematic use of shared objects.

In a simple case with a maximum of two versions, the following maximums apply:

-   *Under Construction*
-   An area instance version that has a [change lock](ABENSHM_AREA_INSTANCE_LOCKS.html) is being built. Change locks automatically create a version under construction.
-   *Active*
-   The area instance version whose construction or update was last released using the method [`DETACH_COMMIT`](ABENSHM_CL_SHM_AREA.html) (and a database commit in the case of transactional areas) is active. All read locks are automatically set to the currently active version.
-   *Obsolete*
-   If the construction of a new version is completed during read access on the currently active version, the new version becomes active and the version that was previously active becomes obsolete. The [read locks](ABENSHM_AREA_INSTANCE_LOCKS.html) on the obsolete version remain until the read is completed, but new read locks for the area instance, however, are always set on the active version.
-   *Expired*
-   Once the last read lock on an obsolete version is removed, the version expires, that is, it is deleted by the Garbage Collector. No locks can be set on expired versions and they are ignored when the version number is determined.

-   Since there can be a maximum of one change lock on an area instance, there is a maximum of one version under construction for each area instance at any given time.
-   There is a maximum of one active version for each area instance.
-   Depending on the maximum number of versions, there can be multiple obsolete versions can exist in parallel.

-   One active version and one version under construction
-   One active version and one obsolete version
-   One version under construction and one obsolete version

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html abenshm\_area\_instance\_access.html