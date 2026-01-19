---
title: "ABENNEWS-640-SHARED_OBJECTS"
description: |
  ABENNEWS-640-SHARED_OBJECTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-640-SHARED_OBJECTS.htm"
abapFile: "ABENNEWS-640-SHARED_OBJECTS.html"
keywords: ["class", "data", "ABENNEWS", "640", "SHARED", "OBJECTS"]
---

[Shared objects](ABENSHARED_OBJECTS_GLOSRY.html) are data objects (not yet in ABAP release 6.40) and instances of classes in [area instances](ABENAREA_INSTANCE_GLOSRY.html) in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html), to which all programs in an [AS instance](ABENAS_INSTANCE_GLOSRY.html) have access.

For the following statements, additions can be used when working with shared objects:

[`CLASS`](ABAPCLASS.html) ... [`SHARED MEMORY ENABLED`](ABAPCLASS_OPTIONS.html) ...

[`CREATE OBJECT`](ABAPCREATE_OBJECT.html) ... [`AREA HANDLE`](ABAPCREATE_OBJECT_AREA_HANDLE.html)

Addition `AREA HANDLE` for `CREATE DATA` is not yet available in the first delivery of ABAP release 6.40.

Transaction `SHMA` manages the [areas](ABENAREA_GLOSRY.html) for shared objects.

For more details, see [Shared Objects](ABENABAP_SHARED_OBJECTS.html).

abenabap.html abennews.html abennews-6.html abennews-640.html