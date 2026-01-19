---
title: "ABENSHM_AREA_DYNAMIC_PROPERTIES"
description: |
  ABENSHM_AREA_DYNAMIC_PROPERTIES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_AREA_DYNAMIC_PROPERTIES.htm"
abapFile: "ABENSHM_AREA_DYNAMIC_PROPERTIES.html"
keywords: ["if", "method", "class", "types", "ABENSHM", "AREA", "DYNAMIC", "PROPERTIES"]
---

The dynamic properties of an area are ignored when the [area class](ABENAREA_CLASS_GLOSRY.html) is generated. These properties can be changed by developers only. When the dynamic properties of an area are changed at runtime, the current [area instance versions](ABENAREA_INSTANCE_VERSION_GLOSRY.html) (versions that are being built, active, or obsolete) are not affected. The new dynamic properties are not used until the next change lock is set in the associated version that is being built.

-   *Area constructor class*
-   Any global class that implements the interface [`SHM_IF_SHM_BUILD_INSTANCE`](ABENSHM_IF_SHM_BUILD_INSTANCE.html) can be specified as an area constructor class. The implementation of the interface method `IF_SHM_BUILD_INSTANCE~BUILD` is used as the area constructor.
-   An *area constructor class* must be specified if automatic area building is activated in the [basic properties](ABENSHM_AREA_BASIC_PROPERTIES.html). The interface method `IF_SHM_BUILD_INSTANCE~BUILD` of the specified class is called implicitly in a separate [ABAP session](ABENABAP_SESSION_GLOSRY.html) when an area is built automatically.
-   An area constructor class can be specified if automatic area building is not activated in the basic properties. The interface method `IF_SHM_BUILD_INSTANCE~BUILD` of the current area constructor class can be called explicitly in the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html) with the method `BUILD` generated in every area class.
-   An example for implementing the interface method `IF_SHM_BUILD_INSTANCE~BUILD` in an area constructor class can be found under [Area Constructor Class](ABENSHM_AREA_CONSTRUCTOR_CLASS.html).
-   *Displacement type*
-   This property determines whether and how instances of the area can be displaced. Displacement may be necessary if the available addressing area of the shared memory is no longer sufficient for all area instance versions. The possible displacement types are as follows:

-   *Displacement not possible*
-   Area instance versions cannot be displaced. If the addressing area is no longer sufficient for all area instance versions, a runtime error occurs.
-   *Displacement possible*
-   Area instance versions can be displaced. The content is lost during displacement (complete displacement). Displacement only takes place if no [area handle](ABENAREA_HANDLE_GLOSRY.html) is bound to the area instance at the same time or if there are no locks on the area instance. This means that only those area instances can be displaced that have exactly one version (the active version) with no read lock at the time of displacement.

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html abenshm\_areas.html