---
title: "ABENSHM_OBJECTS_ROOT_OBJECT"
description: |
  ABENSHM_OBJECTS_ROOT_OBJECT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_OBJECTS_ROOT_OBJECT.htm"
abapFile: "ABENSHM_OBJECTS_ROOT_OBJECT.html"
keywords: ["if", "method", "class", "data", "ABENSHM", "OBJECTS", "ROOT", "OBJECT"]
---

Each [area instance version](ABENAREA_INSTANCE_VERSION_GLOSRY.html) contains an instance of the [area root class](ABENROOT_DATA_CLASS_GLOSRY.html) that is marked as the root object.

The figure below shows how shared objects are accessed using the root object. The shared objects of an area instance version are accessed initially from an [internal session](ABENINTERNAL_SESSION_GLOSRY.html), always using the reference variable [`ROOT`](ABENSHM_AREA_CLASS.html) of the area handle that points to the root object.

The root object must be specified using the instance method [`SET_ROOT`](ABENSHM_AREA_CLASS.html) of the area handle before the lock is released with the method [`DETACH_COMMIT`](ABENSHM_CL_SHM_AREA.html) of the area handle after writes.

After binding an [area handle](ABENAREA_HANDLE_GLOSRY.html) to an existing area instance version, a reference to the root object can be obtained by accessing the attribute [`ROOT`](ABENSHM_AREA_CLASS.html) (or the instance method [`GET_ROOT`](ABENSHM_CL_SHM_AREA.html)) of the area handle. The root object can then contain and/or return object and data references to further shared objects of the area instance version.

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html abenshm\_objects.html