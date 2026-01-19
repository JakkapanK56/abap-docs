---
title: "ABENNEWS-753-SHARED_OBJECTS"
description: |
  ABENNEWS-753-SHARED_OBJECTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-753-SHARED_OBJECTS.htm"
abapFile: "ABENNEWS-753-SHARED_OBJECTS.html"
keywords: ["method", "class", "ABENNEWS", "753", "SHARED", "OBJECTS"]
---

Until now, cross-server invalidations and releases of [area instance versions](ABENAREA_INSTANCE_VERSION_GLOSRY.html) were only possible for [transactional areas](ABENSHM_AREA_BASIC_PROPERTIES.html). From ABAP release 7.53, cross-server invalidations and releases can be performed for all areas with the *Application Server*\\ [area binding](ABENSHM_AREA_FIXED_PROPERTIES.html) by using the associated parameter `AFFECT_SERVER` of the methods `INVALIDATE_...` and `FREE_...` of the [area class](ABENAREA_CLASS_GLOSRY.html) in question. The parameter `AFFECT_SERVER` is added to the methods of existing area classes when a new generation is performed in transaction `SHMA`.

abenabap.html abennews.html abennews-75.html abennews-753.html