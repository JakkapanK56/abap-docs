---
title: "ABENSHM_AREAS"
description: |
  ABENSHM_AREAS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_AREAS.htm"
abapFile: "ABENSHM_AREAS.html"
keywords: ["class", "data", "ABENSHM", "AREAS"]
---

An area is a repository object for storing shared objects. It forms the template for [area instance versions](ABENAREA_INSTANCE_VERSION_GLOSRY.html) in the shared memory. An identically named [area class](ABENAREA_CLASS_GLOSRY.html) and any [area root class](ABENROOT_DATA_CLASS_GLOSRY.html) are assigned to each area. Areas are created and managed in transaction `SHMA`. Various properties can be assigned to an area in transaction `SHMA`. From a technical perspective, the properties are respected when the area class is generated, or are stored automatically in the attributes of the area class when an [area handle](ABENAREA_HANDLE_GLOSRY.html) is created.

-   [Basic properties](ABENSHM_AREA_BASIC_PROPERTIES.html)
-   [Fixed area properties](ABENSHM_AREA_FIXED_PROPERTIES.html)
-   [Dynamic area properties](ABENSHM_AREA_DYNAMIC_PROPERTIES.html)
-   [Runtime-dependent area properties](ABENSHM_AREA_RUNTIME_PROPERTIES.html)

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html