---
title: "ABENSHM_OBJECTS_REFERENCES"
description: |
  ABENSHM_OBJECTS_REFERENCES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_OBJECTS_REFERENCES.htm"
abapFile: "ABENSHM_OBJECTS_REFERENCES.html"
keywords: ["if", "method", "class", "data", "types", "ABENSHM", "OBJECTS", "REFERENCES"]
---

Objects in area instance versions are instances of classes or anonymous data objects and therefore can only be addressed using [heap references](ABENHEAP_REFERENCE_GLOSRY.html).

To use a reference of this type to perform reads or writes on objects in area instances of the shared memory from an [internal session](ABENINTERNAL_SESSION_GLOSRY.html), a suitable [area lock](ABENAREA_LOCK_GLOSRY.html) must be set by binding an [area handle](ABENAREA_HANDLE_GLOSRY.html) to an area instance version. The [root object](ABENROOT_OBJECT_GLOSRY.html), that can refer to additional objects, is used for the initial access to the objects of an area instance version.

Only if an area handle exists in an internal session for an area instance version can objects of the area instance version be used in the internal session and references can be made from the area instance version to objects in the session. The references can be used as usual during the lifetime of an area lock, with the restriction that the type of lock determines whether or not the referenced objects of the area instance version can be changed. If a read or write is performed on the content of an object in the area instance version despite there being no associated lock, a runtime error occurs.

The static methods [`GET_HANDLE_BY_OREF`](ABENSHM_CL_ABAP_MEMORY_AREA.html), [`GET_HANDLE_BY_DREF`](ABENSHM_CL_ABAP_MEMORY_AREA.html), and [`GET_HANDLE_BY_DATA`](ABENSHM_CL_ABAP_MEMORY_AREA.html) can be used to get a reference to the area handle of an object. The corresponding return value is of general type [`CL_ABAP_MEMORY_AREA`](ABENSHM_CL_ABAP_MEMORY_AREA.html), which is why such a reference is generally only suitable for [creating objects](ABENSHM_OBJECTS_CREATE_OBJECT.html).

Area instances versions to which no area handles are bound are self-contained. If the lock is released using the method [`DETACH_COMMIT`](ABENSHM_CL_SHM_AREA.html) of the area handle after writes, no references from an area instance version are allowed to point outside. After the method [`DETACH_COMMIT`](ABENSHM_CL_SHM_AREA.html), any external references that reference objects of the area instance version can no longer be used to access these objects. The shared objects within a completed area instance version can be linked using object references and data references.

A special restriction applies to data references in completed area instance versions: their [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html) must be a known type when a program is loaded in an internal session. The data types that cannot be used to create anonymous data objects as shared objects are specified in the addition [`AREA HANDLE`](ABAPCREATE_DATA_AREA_HANDLE.html) of the statement `CREATE DATA`.

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html abenshm\_objects.html