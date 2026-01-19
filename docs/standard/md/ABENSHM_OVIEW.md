---
title: "ABENSHM_OVIEW"
description: |
  ABENSHM_OVIEW - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_OVIEW.htm"
abapFile: "ABENSHM_OVIEW.html"
keywords: ["select", "update", "if", "case", "method", "class", "data", "ABENSHM", "OVIEW"]
---

Shared objects are instances of classes or anonymous data objects in [shared memory](ABENSHARED_MEMORY_GLOSRY.html). Named data objects can be stored as attributes of classes. The memory area of the shared memory for shared objects is known as the shared object memory whose size is determined by the profile parameter `abap/shared_objects_size_MB`.

Shared objects are managed using [areas](ABENAREA_GLOSRY.html). Areas and their properties are created and maintained using transaction `SHMA`.

The prerequisite for the storage of an instance of a class to be stored in the shared memory is that the class of the object is defined using the addition [`SHARED MEMORY ENABLED`](ABAPCLASS_OPTIONS.html) of the statement `CLASS` or the property *Shared-memory-enabled* is selected in the Class Builder. Each area is linked to a global [area root class](ABENROOT_DATA_CLASS_GLOSRY.html), whose attributes can contain their own data and references to other instances of shared-memory-enabled classes or to anonymous data objects.

An area is the template for area instances in the shared memory. Multiple area instances with different names can be created from one area. In addition, there can also be multiple versions of an area instance (called [area instance versions](ABENAREA_INSTANCE_VERSION_GLOSRY.html)), which are distinguished by a version ID. All area instance versions of the same area instance name form an area instance. In the simplest case (without versioning), an area instance consists of a single area instance version.

When an area is defined using transaction `SHMA`, a global and final [area class](ABENSHM_AREA_CLASS.html) (with the same name) is generated as a subclass of [`CL_SHM_AREA`](ABENSHM_CL_SHM_AREA.html). The class `CL_SHM_AREA` is itself a direct subclass of [`CL_ABAP_MEMORY_AREA`](ABENSHM_CL_ABAP_MEMORY_AREA.html). In an ABAP program, an area is accessed exclusively using the methods of the generated area class. Static methods (known as attach methods) can be used to bind an ABAP program (or its [internal session](ABENINTERNAL_SESSION_GLOSRY.html)) to area instances in the shared memory. Bindings create an instance of the area class as an [area handle](ABENAREA_HANDLE_GLOSRY.html) and simultaneously set an [area lock](ABENAREA_LOCK_GLOSRY.html). The ABAP program can access the bound area instance version using the area handle and thus access the shared objects that are stored there. The area handle also contains the methods (detach methods) used to unbind the connection or the lock.

The shared objects in an area instance version are addressed using [references](ABENSHM_OBJECTS_REFERENCES.html), which are obtained using the area handle. The shared objects within an area instance version can refer to each other without restrictions. An ABAP program can contain references to shared objects as long as it is bound to an area instance version. Area instance versions themselves are self-contained, which means that they cannot contain references to other area instance versions or an [internal session](ABENINTERNAL_SESSION_GLOSRY.html). Exceptions to this rule are possible only when an area instance is bound to an internal session to perform writes or updates. During this time, there can be references in the area instance to objects in the internal session or to other area instances that are also bound.

Area instances or area instance versions must not be confused with [instances](ABENINSTANCE_GLOSRY.html) of classes. In particular, an area instance is not an instance of an area class. Area instances are managed areas (the actual areas) in the shared memory in which shared objects can be stored, and which can be addressed by area handles.

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html