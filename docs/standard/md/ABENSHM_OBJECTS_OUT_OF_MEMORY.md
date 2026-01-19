---
title: "ABENSHM_OBJECTS_OUT_OF_MEMORY"
description: |
  ABENSHM_OBJECTS_OUT_OF_MEMORY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_OBJECTS_OUT_OF_MEMORY.htm"
abapFile: "ABENSHM_OBJECTS_OUT_OF_MEMORY.html"
keywords: ["update", "if", "try", "catch", "method", "class", "data", "ABENSHM", "OBJECTS", "OUT", "MEMORY"]
---

The [shared memory](ABENSHARED_MEMORY_GLOSRY.html) of an AS instance is a limited resource. The ABAP runtime framework uses it to store programs, program data, buffers and so on. With explicit ABAP programming, either [data clusters](ABENDATA_CLUSTER_GLOSRY.html) in [cross-transaction application buffers](ABENCROSSTRANS_APP_BUFFER_GLOSRY.html) or shared objects in the shared objects memory can be accessed.

The maximum amount of shared memory that can be occupied by the different users is defined statically using [profile parameters](ABENPROFILE_PARAMETER_GLOSRY.html). Transaction `ST02` shows the current utilization of the shared memory and the associated profile parameters.

If the memory allocated for the shared objects memory using the profile parameter `abap/shared_objects_size_MB` is exceeded when shared objects are used, a catchable exception of class `CX_SHM_OUT_OF_MEMORY` is raised. This exception can be raised in the following situations:

For this reason, it is recommended that the exception `CX_SHM_OUT_OF_MEMORY` is handled each time the shared objects memory is accessed. This is easiest when all accesses to shared objects, which in [ideal](ABENUSE_SHARED_OBJECTS_GUIDL.html) situations only occur within a single wrapper class, also take place in a single [`TRY` control structure](ABAPTRY.html) in which the exception is handled. If there is still a change lock on the area when the exception is handled, which can be determined using the method [`GET_LOCK_KIND`](ABENSHM_CL_SHM_AREA.html) of the area handle), it should be removed using [`DETACH_ROLLBACK`](ABENSHM_CL_SHM_AREA.html).

A suitable fallback strategy should be implemented to handle the exception `CX_SHM_OUT_OF_MEMORY` that for example creates the required objects in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) and copies the previous content from the shared memory to these objects.

-   When shared objects are created or changed in the shared memory
-   When locks are removed using [`DETACH_COMMIT`](ABENSHM_CL_SHM_AREA.html)
-   When locks are created using [`ATTACH_FOR_WRITE`](ABENSHM_AREA_CLASS.html) or [`ATTACH_FOR_UPDATE`](ABENSHM_AREA_CLASS.html), and even using [`ATTACH_FOR_READ`](ABENSHM_AREA_CLASS.html) if there is no longer sufficient space for the administration information.

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html abenshm\_objects.html