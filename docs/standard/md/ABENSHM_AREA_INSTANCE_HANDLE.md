---
title: "ABENSHM_AREA_INSTANCE_HANDLE"
description: |
  ABENSHM_AREA_INSTANCE_HANDLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_AREA_INSTANCE_HANDLE.htm"
abapFile: "ABENSHM_AREA_INSTANCE_HANDLE.html"
keywords: ["select", "update", "do", "while", "if", "method", "class", "internal-table", "ABENSHM", "AREA", "INSTANCE", "HANDLE"]
---

Area handles are instances of the [area class](ABENAREA_CLASS_GLOSRY.html) of an area. An individual area handle is created using one of the following static methods from the area class, whereby an associated [area lock](ABENSHM_AREA_INSTANCE_LOCKS.html) is set:

There is also the method [`MULTI_ATTACH`](ABENSHM_CL_SHM_AREA.html) to create multiple area handles at once. These methods return a reference to a created area handle. Each area handle is bound to exactly one area instance version. This area instance version has a certain [state](ABENSHM_AREA_INSTANCE_STATE.html), depending on the method used.

Binding an area handle to an area instance version is equivalent to setting one of the following [area locks](ABENSHM_AREA_INSTANCE_LOCKS.html) on the area instance:

The method [`ATTACH_FOR_WRITE`](ABENSHM_AREA_CLASS.html) creates a new area instance version if existing locks allow it. By specifying a name, different area instances of an area can be created with their own versioning each. If no name is specified, the content of constant `CL_SHM_AREA=>DEFAULT_INSTANCE` is used as the default value. It is recommended that explicit and unique names are always used. Until the binding is removed, the bound area instance version can be accessed for changes in the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

The method [`ATTACH_FOR_UPDATE`](ABENSHM_AREA_CLASS.html) does one of the following, if existing locks allow it:

When a name is specified, an area instance is selected. If no name is specified, the content of the constant `CL_SHM_AREA=>DEFAULT_INSTANCE` is used as the default value. Until the binding is removed, the bound area instance version can be accessed for changes in the current internal session.

The method [`ATTACH_FOR_READ`](ABENSHM_AREA_CLASS.html) binds the area handle to an existing area instance version if existing locks allow it. When a name is specified, an area instance is selected. If no name is specified, the content of the constant `CL_SHM_AREA=>DEFAULT_INSTANCE` is used as the default value. Until the binding is removed, the bound area instance version can be accessed for reads in the current internal session.

The following instance methods of the area class remove the binding of an individual area handle:

In addition, there are the static methods, [`DETACH_AREA`](ABENSHM_AREA_CLASS.html) and [`DETACH_ALL_AREAS`](ABENSHM_CL_SHM_AREA.html), are used to remove multiple bindings at once. Once the binding between an area handle and the area instance version is removed, the area handle is inactive and can no longer be used. Removing a binding also removes the corresponding area lock and might change the state of the relevant area instance version.

The methods of the area handles mentioned above are normally used when working with shared objects. There are also additional methods also exist for special applications. Transaction `SHMM` provides a program-independent user interface for such methods.

-   [`ATTACH_FOR_WRITE`](ABENSHM_AREA_CLASS.html)
-   [`ATTACH_FOR_UPDATE`](ABENSHM_AREA_CLASS.html)
-   [`ATTACH_FOR_READ`](ABENSHM_AREA_CLASS.html)

-   [`ATTACH_FOR_WRITE`](ABENSHM_AREA_CLASS.html) and [`ATTACH_FOR_UPDATE`](ABENSHM_AREA_CLASS.html) both create a change lock
-   [`ATTACH_FOR_READ`](ABENSHM_AREA_CLASS.html) creates a read lock

-   In areas with [versioning](ABENSHM_AREA_FIXED_PROPERTIES.html), it creates a new version as a copy of the active area instance version.
-   In areas without [versioning](ABENSHM_AREA_FIXED_PROPERTIES.html), it binds the area handle to an existing active area instance version.

-   [`DETACH`](ABENSHM_CL_SHM_AREA.html) removes a read lock.
-   [`DETACH_COMMIT`](ABENSHM_CL_SHM_AREA.html) removes a change lock and confirms the changes that were made.
-   [`DETACH_ROLLBACK`](ABENSHM_CL_SHM_AREA.html) removes a change lock without confirming the changes that were made.

-   Invalidating versions
-   The methods [`INVALIDATE_INSTANCE`](ABENSHM_AREA_CLASS.html) or [`INVALIDATE_AREA`](ABENSHM_AREA_CLASS.html) can be used to set one or more active area instance versions to *obsolete*. This prevents new read locks from being set for this version, while existing read locks are retained.
-   Deleting versions
-   The methods [`FREE_INSTANCE`](ABENSHM_AREA_CLASS.html) or [`FREE_AREA`](ABENSHM_AREA_CLASS.html) can be used to set one or more active or obsolete area instance versions to *expired*. This removes all read locks and no new read locks can be set on these versions.
-   Information about area instances
-   The method [`GET_INSTANCE_INFOS`](ABENSHM_AREA_CLASS.html) returns information about all area instances of an AS instance in an internal table.
-   Information about area handles
-   The methods [`GET_LOCK_KIND`](ABENSHM_CL_SHM_AREA.html), `IS_VALID`, [`IS_ACTIVE_VERSION`](ABENSHM_CL_ABAP_MEMORY_AREA.html), [`IS_SHARED`](ABENSHM_CL_ABAP_MEMORY_AREA.html), [`HAS_ACTIVE_PROPERTIES`](ABENSHM_CL_ABAP_MEMORY_AREA.html), and [`GET_DETACH_INFO`](ABENSHM_CL_ABAP_MEMORY_AREA.html) return information about locks and the state of an area handle.
-   Explicit call of the area constructor
-   The method [`BUILD`](ABENSHM_AREA_CLASS.html) can be used to call the [area constructor](ABENSHM_AREA_CONSTRUCTOR_CLASS.html) of an area explicitly in the current internal session. This method is a standardized mechanism for building area instances.

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html abenshm\_area\_instance\_access.html