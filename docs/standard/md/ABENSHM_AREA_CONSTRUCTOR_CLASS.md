---
title: "ABENSHM_AREA_CONSTRUCTOR_CLASS"
description: |
  ABENSHM_AREA_CONSTRUCTOR_CLASS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_AREA_CONSTRUCTOR_CLASS.htm"
abapFile: "ABENSHM_AREA_CONSTRUCTOR_CLASS.html"
keywords: ["select", "if", "try", "catch", "method", "class", "data", "types", "ABENSHM", "AREA", "CONSTRUCTOR", "CLASS"]
---

An area constructor class is a global class with a freely selectable name that implements the interface [`IF_SHM_BUILD_INSTANCE`](ABENSHM_IF_SHM_BUILD_INSTANCE.html). An area constructor can be implemented in the interface method `BUILD`.

An area constructor class can be [assigned](ABENSHM_AREA_DYNAMIC_PROPERTIES.html) to an [area](ABENSHM_AREAS.html) in transaction `SHMA`. This is always necessary if the area is to be built automatically by calling the area constructor, that is, if the components `BUILD_KIND` and `REFRESH_TIME` of the structure `PROPERTIES` of the class [`CL_SHM_AREA`](ABENSHM_CL_SHM_AREA.html) are filled accordingly. If an area is not built automatically, an area constructor class can be specified for the explicit area constructor call using the method `BUILD` of the [area class](ABENSHM_AREA_CLASS.html).

The following structure is recommended for the area constructor implemented in the interface method `BUILD`:

In an area constructor, no statements can be used that exit the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html) (such as `SUBMIT`, `CALL TRANSACTION`, `CALL SCREEN`, `MESSAGE` for message types *W*, `P`, *E*, and so on).

The following implementation can be used as a template for personal implementations.

1.  First, the area constructor must use the method `ATTACH_FOR_WRITE` to create an area handle with a write lock for the area instance passed in the parameter `INST_NAME`. Since the automatically created area constructor cannot be used to ensure that the write lock can be set, all exceptions must be caught and forwarded to the caller of the constructor by raising the interface exception `CX_SHM_BUILD_FAILED`. The original exception should be passed to the parameter `PREVIOUS` of the constructor of `CX_SHM_BUILD_FAILED`.
2.  As with every creation of a new area instance version, a root object must also be defined in the area constructor using the method `SET_ROOT`.
3.  The area instance version can then be built, which means that objects are stored in the shared memory.
4.  The created area handle has to be released again using the method `DETACH_COMMIT`. If an exception is raised, it is usually a programming error and should not be handled in the area constructor.
5.  If the area constructor was called automatically, a database commit must be triggered when a transactional area is built.

CLASS area\_constructor IMPLEMENTATION. \\n METHOD if\_shm\_build\_instance~build. \\n DATA: \\n my\_handle TYPE REF TO area, \\n my\_data TYPE REF TO area\_root\_class, \\n my\_except TYPE REF TO cx\_root. \\n TRY. \\n my\_handle = cl\_my\_area=>attach\_for\_write( inst\_name ). \\n CATCH cx\_shm\_error INTO my\_except. \\n RAISE EXCEPTION TYPE cx\_shm\_build\_failed \\n EXPORTING previous = my\_except. \\n ENDTRY. \\n CREATE OBJECT my\_data AREA HANDLE my\_handle. \\n my\_handle->set\_root( my\_data ). \\n ... " code to build the area instance \\n my\_handle->detach\_commit( ). \\n IF invocation\_mode = cl\_shm\_area=>invocation\_mode\_auto\_build. \\n COMMIT CONNECTION default. \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html abenshm\_classes.html abenshm\_if\_shm\_build\_instance.html