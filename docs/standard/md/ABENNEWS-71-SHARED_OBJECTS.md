---
title: "ABENNEWS-71-SHARED_OBJECTS"
description: |
  ABENNEWS-71-SHARED_OBJECTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-71-SHARED_OBJECTS.htm"
abapFile: "ABENNEWS-71-SHARED_OBJECTS.html"
keywords: ["if", "catch", "method", "class", "data", "types", "ABENNEWS", "SHARED", "OBJECTS"]
---

[1\. Handling of Memory Bottlenecks](#ABAP_MODIFICATION_1@4@)

[2\. Data References in the Shared Objects Memory](#ABAP_MODIFICATION_2@4@)

[3\. Area Binding](#ABAP_MODIFICATION_3@4@)

[4. Methods `PROPAGATE_AREA` and `PROPAGATE_INSTANCE` Replaced](#ABAP_MODIFICATION_4@4@) 

[5. Service Class `CL_SHM_UTILITIES`](#ABAP_MODIFICATION_5@4@)

From ABAP release 7.0, EhP2, memory bottlenecks in the shared objects memory raise catchable exceptions of the class `CX_SHM_OUT_OF_MEMORY`. Previously, uncatchable runtime errors were raised.

From ABAP release 7.0, EhP2, [anonymous data objects](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html) in the [shared objects memory](ABENSHARED_OBJECTS_MEMORY_GLOSRY.html) can also be created with direct reference to data elements and table types of ABAP Dictionary using the addition [`AREA HANDLE`](ABAPCREATE_DATA_AREA_HANDLE.html) of the statement [`CREATE DATA`](ABAPCREATE_DATA.html).

From ABAP release 7.0, EhP2, the lifetime and visibility of area instances can be bound not only to the current [AS instance](ABENAS_INSTANCE_GLOSRY.html) but also to the following:

The methods `PROPAGATE_AREA` and `PROPAGATE_INSTANCE` of an [area class](ABENAREA_CLASS_GLOSRY.html) for transactional areas may no longer be used. Instead, the parameter `AFFECT_SERVER` of the methods `FREE_AREA`, `FREE_INSTANCE`, `INVALIDATE_AREA`, and `INVALIDATE_INSTANCE` can be used for areas of this type with the *Application Server* area binding.

The class `CL_SHM_UTILITIES` is used to query the attributes of area instances in programs.

-   [User sessions](ABENUSER_SESSION_GLOSRY.html)
-   [Top level transactions](ABENTOP_LEVEL_TRANSACTION_GLOSRY.html)

abenabap.html abennews.html abennews-70\_ehps.html abennews-71.html