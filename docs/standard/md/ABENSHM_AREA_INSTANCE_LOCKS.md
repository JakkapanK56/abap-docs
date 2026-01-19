---
title: "ABENSHM_AREA_INSTANCE_LOCKS"
description: |
  ABENSHM_AREA_INSTANCE_LOCKS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_AREA_INSTANCE_LOCKS.htm"
abapFile: "ABENSHM_AREA_INSTANCE_LOCKS.html"
keywords: ["update", "delete", "do", "while", "if", "case", "method", "class", "data", "ABENSHM", "AREA", "INSTANCE", "LOCKS"]
---

An area lock is set on the area instance version each time an area instance version is accessed, that is, each time an [area handle](ABENSHM_AREA_INSTANCE_HANDLE.html) is bound. The lock exists as long as an area handle is bound to an area instance version and it rejects any attempts to bind other area handles to the area instance. As long as no lock is set, a program cannot access area instances.

A read lock is set when an area handle is bound to an area instance version using the method [`ATTACH_FOR_READ`](ABENSHM_AREA_CLASS.html). There can be a maximum of one read lock on an area instance within an [internal session](ABENINTERNAL_SESSION_GLOSRY.html). Across multiple sessions, there can be multiple read locks on an area instance version.

Once a read lock has been set in an internal session, reads can be performed on the corresponding area instance version and its objects until the method [`DETACH`](ABENSHM_CL_SHM_AREA.html) is executed.

If a read lock is always set immediately before an access, and then deleted afterwards, note that the same version may not necessarily be accessed the next time. A read lock is always set on the active area instance version.

A change lock is either a write lock or an update lock. A write lock is set if an area handle is bound to an area instance version using the method [`ATTACH_FOR_WRITE`](ABENSHM_AREA_CLASS.html) and an update lock is set if an area handle is bound using the method [`ATTACH_FOR_UPDATE`](ABENSHM_AREA_CLASS.html).

On an AS instance, there can be a maximum of one change lock on an area instance. A change lock locks an area instance exclusively, which means that no parallel read locks are possible on this version. Parallel reads are only possible on the same area instance if area instance versioning is activated.

Once a change lock has been set in an internal session, reads and writes can be performed on the area instance version and its objects until the methods [`DETACH_COMMIT`](ABENSHM_CL_SHM_AREA.html) or [`DETACH_ROLLBACK`](ABENSHM_CL_SHM_AREA.html) are executed.

Within an internal session, a maximum of one change lock can be set for an area instance using [`ATTACH_FOR_WRITE`](ABENSHM_AREA_CLASS.html) and [`ATTACH_FOR_UPDATE`](ABENSHM_AREA_CLASS.html). These methods cannot be used to set a change lock if one already exists within the same internal session on any area instance version, otherwise the exception `CX_SHM_CHANGE_LOCK_ACTIVE` would be raised. The method [`MULTI_ATTACH`](ABENSHM_CL_SHM_AREA.html), on the other hand, can be used to set multiple parallel change locks on multiple area instance versions.

In addition to using the method [`DETACH`](ABENSHM_CL_SHM_AREA.html), read locks are also released automatically when an internal session is ended. Change locks must always be released explicitly using [`DETACH_COMMIT`](ABENSHM_CL_SHM_AREA.html) or [`DETACH_ROLLBACK`](ABENSHM_CL_SHM_AREA.html). In the following situations, there can be no change locks for an area instance version, otherwise the runtime error `SYSTEM_SHM_CHANGE_LOCK_ACTIVE` would occur:

If all reference variables are initialized to an area handle and the area handle is then deleted by the Garbage Collector while it holds a lock, the lock remains and is not deleted. The area instance version can still be accessed, but change locks can no longer be released and the above runtime error occurs.

In transactional areas, note that a change lock released using the method [`DETACH_COMMIT`](ABENSHM_CL_SHM_AREA.html) still has to be released with a database commit before an internal session or program call (`SUBMIT`, `CALL TRANSACTION`, or `LEAVE TO TRANSACTION`) is closed.

-   A new, empty area instance version is created during write access.
-   The update does the following:

-   Binds the existing active version for writes in areas without versioning
-   Creates a copy of the active area instance version and binds it for writes in areas with versioning

-   Closing an internal session except with the statement `LEAVE TRANSACTION` (or the function "/n")). The statement `LEAVE TRANSACTION` releases all change locks using the method [`DETACH_ROLLBACK`](ABENSHM_CL_SHM_AREA.html).
-   Database commit in the case of transactional areas.
-   Program calls using `SUBMIT AND RETURN` and `CALL TRANSACTION` in the case of transactional areas.

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html abenshm\_area\_instance\_access.html