---
title: "ABENNEWS-70-SHARED_OBJECTS"
description: |
  ABENNEWS-70-SHARED_OBJECTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-70-SHARED_OBJECTS.htm"
abapFile: "ABENNEWS-70-SHARED_OBJECTS.html"
keywords: ["update", "if", "case", "method", "class", "data", "types", "ABENNEWS", "SHARED", "OBJECTS"]
---

[1\. Data References in the Shared Objects Memory](#ABAP_MODIFICATION_1@4@)

[2\. Waiting Time for Change Locks](#ABAP_MODIFICATION_2@4@)

From ABAP release 7.0, data references that point to data objects of the same [area instance version](ABENAREA_INSTANCE_VERSION_GLOSRY.html) can be stored permanently in the [shared objects memory](ABENSHARED_OBJECTS_MEMORY_GLOSRY.html). An instance of a shared memory-enabled class can contain data reference variables as attributes that point to data objects within a closed area instance version. An exception is raised only if the used data type is unknown to the method `DETACH_COMMIT` in the shared objects memory when the method is executed. This is the case if the types of the referenced data objects were created dynamically. Due to technical reasons, no direct reference to data elements and table types in ABAP Dictionary is possible either.

The opportunity to store data references in closed area instance versions makes it possible (from ABAP release 7.0) to store not only instances of classes, but also [anonymous data objects](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html) using the addition [`AREA HANDLE`](ABAPCREATE_DATA_AREA_HANDLE.html) of the statement [`CREATE DATA`](ABAPCREATE_DATA.html) as [shared objects](ABENSHARED_OBJECTS_GLOSRY.html).

From ABAP release 7.0, a waiting period can be passed to the parameter `WAIT_TIME` for the methods `ATTACH_FOR_WRITE` and `ATTACH_FOR_UPDATE` of the [area class](ABENAREA_CLASS_GLOSRY.html) and for `MULTI_ATTACH` in `CL_SHM_AREA`.

abenabap.html abennews.html abennews-70\_ehps.html abennews-70.html