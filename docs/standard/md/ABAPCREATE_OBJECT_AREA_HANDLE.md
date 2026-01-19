---
title: "ABAPCREATE_OBJECT_AREA_HANDLE"
description: |
  ABAPCREATE_OBJECT_AREA_HANDLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCREATE_OBJECT_AREA_HANDLE.htm"
abapFile: "ABAPCREATE_OBJECT_AREA_HANDLE.html"
keywords: ["update", "do", "if", "try", "catch", "method", "class", "data", "ABAPCREATE", "OBJECT", "AREA", "HANDLE"]
---

[Short Reference](ABAPCREATE_OBJECT_SHORTREF.html)

`CREATE OBJECT oref AREA HANDLE handle ...`

This statement creates an object as a [shared object](ABENSHARED_OBJECT_GLOSRY.html) in the [area instance version](ABENAREA_INSTANCE_VERSION_GLOSRY.html) of the [shared memory](ABENSHARED_MEMORY_GLOSRY.html), to which the [area handle](ABENAREA_HANDLE_GLOSRY.html) referenced by `handle` is bound. The implicitly or explicitly specified class must be defined as a [shared-memory-enabled class](ABENSHM_CLASS_GLOSRY.html) using the addition [`SHARED MEMORY ENABLED`](ABAPCLASS_OPTIONS.html) of the statement [`CLASS`](ABAPCLASS_DEFINITION.html).

For `handle`, an object reference variable whose static type is [`CL_ABAP_MEMORY_AREA`](ABENSHM_CL_ABAP_MEMORY_AREA.html) or one of its subclasses ([area class](ABENAREA_CLASS_GLOSRY.html)) must be specified. When the statement is executed, `handle` must point to an [area handle](ABENAREA_HANDLE_GLOSRY.html) and the area handle must be bound to an area instance version with a change lock. A reference like this can be created in one of the following ways:

The latter is a reference to an area handle for the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html) and the statement `CREATE OBJECT` works in the same way as without the addition `AREA HANDLE`.

Creation of a shared object in an area instance version of the area `CL_DEMO_AREA`.

[Creating an Instance of a Class as a Shared Object](ABENCREATE_SHARED_OBJECT_ABEXA.html)

`CX_SHM_WRONG_HANDLE`

`CX_SHM_ALREADY_DETACHED`

`CX_SHM_OUT_OF_MEMORY`

`CX_SHM_OBJECT_NOT_SERIALIZABLE`

-   By inheriting the return value of the methods [`ATTACH_FOR_WRITE`](ABENSHM_AREA_CLASS.html) or [`ATTACH_FOR_UPDATE`](ABENSHM_AREA_CLASS.html) of an area class created using transaction `SHMA`.
-   By inheriting the return value of the method [`GET_HANDLE_BY_...`](ABENSHM_CL_ABAP_MEMORY_AREA.html) of any area class.
-   By inheriting the return value of the method [`GET_IMODE_HANDLE`](ABENSHM_CL_IMODE_AREA.html) of the predefined class `CL_IMODE_AREA`.

-   The only shared object that can be addressed from an ABAP program directly after a binding is made to an area instance version is the instance of the [area root class](ABENROOT_DATA_CLASS_GLOSRY.html). All other objects must be referenced in this instance.
-   The static attributes of a shared object are not created in the shared memory, but when the shared-memory-enabled class is loaded into the internal session of a program, as for every class. This means that they can exist multiple times and independently of one another in different programs.

-   *Cause:* The area handle does not hold any change locks.

-   *Cause:* The area handle is not bound to an area instance version.

-   *Cause:* There is not enough memory.

-   *Cause:* In an area instance displaceable using backup and recovery, an attempt was made to create an object that cannot be serialized.

CLASS cls DEFINITION \\n SHARED MEMORY ENABLED. \\n ... \\nENDCLASS. \\n\\ \\nDATA: root TYPE REF TO cl\_demo\_root, \\n handle TYPE REF TO cl\_demo\_area. \\n\\ \\n... \\n\\ \\nTRY. \\n handle = cl\_demo\_area=>attach\_for\_write( ). \\n CREATE OBJECT root AREA HANDLE handle. \\n handle->set\_root( root ). \\n CREATE OBJECT root->oref AREA HANDLE handle TYPE cls. \\n CATCH cx\_shm\_attach\_error. \\n ... \\nENDTRY. \\n\\ \\n... \\n abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_object.html