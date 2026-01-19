---
title: "ABAPCREATE_DATA_AREA_HANDLE"
description: |
  ABAPCREATE_DATA_AREA_HANDLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCREATE_DATA_AREA_HANDLE.htm"
abapFile: "ABAPCREATE_DATA_AREA_HANDLE.html"
keywords: ["update", "do", "if", "try", "catch", "method", "class", "data", "types", "ABAPCREATE", "DATA", "AREA", "HANDLE"]
---

[Short Reference](ABAPCREATE_DATA_SHORTREF.html)

`CREATE DATA dref AREA HANDLE handle ...`

This statement creates an anonymous data object as a [shared object](ABENSHARED_OBJECT_GLOSRY.html) in the [area instance version](ABENAREA_INSTANCE_VERSION_GLOSRY.html) of the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) to which the [area handle](ABENAREA_HANDLE_GLOSRY.html) referenced by `handle` is bound.

`handle` expects an object reference variable whose static type is [`CL_ABAP_MEMORY_AREA`](ABENSHM_CL_ABAP_MEMORY_AREA.html) or one of its subclasses ([area class](ABENAREA_CLASS_GLOSRY.html)). When the statement is executed, `handle` must point to an [area handle](ABENAREA_HANDLE_GLOSRY.html) and the area handle must be bound to an area instance version with a change lock. A reference like this can be created in one of the following ways:

The latter is a reference to an area handle for the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html) and the statement `CREATE DATA` works in the same way as without the addition `AREA HANDLE`.

**Restrictions**

The creation of anonymous data objects as shared objects is subject to the following restrictions for data references in the shared objects memory: the storage of data references in closed [area instance versions](ABENAREA_INSTANCE_VERSION_GLOSRY.html) of the shared objects memory is restricted to those [dynamic types](ABENDYNAMIC_TYPE_GLOSRY.html) that are known when loading a program into an internal session.

Therefore, the following data types cannot be used to create anonymous data objects in the shared object memory if these are to be preserved in a closed area instance version:

Points 3 and 4 particularly include the statement `CREATE DATA` with the addition `AREA HANDLE` itself. Exceptions to the restrictions listed in points 2 to 4 are:

If a data reference variable that is stored in the shared objects memory refers to an anonymous data object of a dynamic type that is subject to the restrictions, the exception of the class `CX_SHM_EXTERNAL_TYPE` is raised when the `DETACH_COMMIT` method is executed.

The following can be used without restrictions:

The additions [`REF TO`](ABAPCREATE_DATA_REFERENCE.html) and [`TABLE OF`](ABAPCREATE_DATA_ITAB.html) can be used as long as the specified types meet the above requirements. This also applies to the addition [`HANDLE`](ABAPCREATE_DATA_HANDLE.html), which means the type description object must have been created with methods of the [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html) from allowed types.

Creation of an anonymous structure in an area instance version of area `CL_DEMO_AREA`.

[Creating a Data Object as a Shared Object](ABENCREATE_SHARED_DATA_OBJCT_ABEXA.html)

`CX_SHM_WRONG_HANDLE`

`CX_SHM_ALREADY_DETACHED`

`CX_SHM_OUT_OF_MEMORY`

-   By inheriting the return value of the methods [`ATTACH_FOR_WRITE`](ABENSHM_AREA_CLASS.html) or [`ATTACH_FOR_UPDATE`](ABENSHM_AREA_CLASS.html) of an area class created using transaction `SHMA`.
-   By inheriting the return value of the method [`GET_HANDLE_BY_...`](ABENSHM_CL_ABAP_MEMORY_AREA.html) of any area class.
-   By inheriting the return value of the method [`GET_IMODE_HANDLE`](ABENSHM_CL_IMODE_AREA.html) of the predefined class `CL_IMODE_AREA`.

-   The restrictions do not apply to the data type `p`.
-   The restrictions do not apply to the data types `c`, `n`, and `x`, as long as the memory requirement does not exceed 100 bytes.

-   All visible data types of global interfaces and classes.
-   Data elements, DDIC structures, and DDIC database tables and DDIC table types of the ABAP Dictionary.
-   Data types from type pools.
-   Bound data types of anonymous data objects created at program runtime to which a static type with a static length was assigned when they were created using `CREATE DATA`.
-   Bound data types of anonymous data objects created at program runtime to which a fully specified dynamic type was assigned when they were created using `CREATE DATA`.
-   All data types that were created statically in the same program using declarative statements. It should be noted, however, that it is no longer possible to access existing area instances after each change to the creating program.

-   The only shared object that can be addressed from an ABAP program directly after an area instance version is bound is the instance of the [area root class](ABENROOT_DATA_CLASS_GLOSRY.html). All other objects must be referenced in this instance. In particular, no direct access to anonymous data objects is possible. Instead, the instance of the area root class must contain references to these anonymous data objects, which can also be indirect.
-   It is recommended that only global data types together with `AREA HANDLE` are used. As an occasional replacement for the direct reference to data elements and table types of the ABAP Dictionary, the respective types can be created in global interfaces, classes, or even type pools.

-   *Cause:* The area handle does not hold any change locks.

-   *Cause:* The area handle is not bound to an area instance version.

-   *Cause:* There is not enough memory.

1.  All data types created in a temporary subroutine pool created using [`GENERATE SUBROUTINE POOL`](ABAPGENERATE_SHORTREF.html).
2.  Data types created dynamically at program runtime using methods of the [RTTC](ABENRUN_TIME_TYPE_CREATION_GLOSRY.html).
3.  Bound data types of anonymous data objects created at program runtime, to which a dynamic length was assigned when they were created with `CREATE DATA`.
4.  Bound data types of anonymous data objects created at program runtime and that were assigned a dynamic type that requires a length specification when they were created using `CREATE DATA`.

DATA: root TYPE REF TO cl\_demo\_root, \\n handle TYPE REF TO cl\_demo\_area. \\n\\ \\n... \\n\\ \\nTRY. \\n handle = cl\_demo\_area=>attach\_for\_write( ). \\n CREATE OBJECT root AREA HANDLE handle. \\n handle->set\_root( root ). \\n CREATE DATA root->dref AREA HANDLE handle TYPE scarr. \\n CATCH cx\_shm\_attach\_error. \\n ... \\nENDTRY. \\n\\ \\n... \\n abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_data.html