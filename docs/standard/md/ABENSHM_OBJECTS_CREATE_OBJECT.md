---
title: "ABENSHM_OBJECTS_CREATE_OBJECT"
description: |
  ABENSHM_OBJECTS_CREATE_OBJECT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_OBJECTS_CREATE_OBJECT.htm"
abapFile: "ABENSHM_OBJECTS_CREATE_OBJECT.html"
keywords: ["if", "catch", "method", "class", "data", "ABENSHM", "OBJECTS", "CREATE", "OBJECT"]
---

A [shared object](ABENSHARED_OBJECT_GLOSRY.html) in an [area instance version](ABENAREA_INSTANCE_VERSION_GLOSRY.html) of the shared memory is created using one of the following statements:

Here, `handle` is an object reference variable that points to an [area handle](ABENAREA_HANDLE_GLOSRY.html) that is bound using a change lock to an area instance version under construction. The created object is stored in this area instance version and `oref` or `dref` point to the object. When the class instance is created, it must be shared-memory-enabled.

Before the construction of the area instance version is completed using the method [`DETACH_COMMIT`](ABENSHM_CL_SHM_AREA.html), the method [`SET_ROOT`](ABENSHM_AREA_CLASS.html) of the area handle must be used to define the [root object](ABENROOT_OBJECT_GLOSRY.html). If the construction of the area instance version is completed using the method [`DETACH_COMMIT`](ABENSHM_CL_SHM_AREA.html), no references from the area instance version are allowed to point to outside.

The catchable exceptions listed for the above statements can be raised when objects are created.

-   [`CREATE OBJECT oref AREA HANDLE handle ...`](ABAPCREATE_OBJECT_AREA_HANDLE.html)
-   [`CREATE DATA dref AREA HANDLE handle ...`](ABAPCREATE_DATA_AREA_HANDLE.html)

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html abenshm\_objects.html