---
title: "ABENSHM_AREA_FIXED_PROPERTIES"
description: |
  ABENSHM_AREA_FIXED_PROPERTIES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_AREA_FIXED_PROPERTIES.htm"
abapFile: "ABENSHM_AREA_FIXED_PROPERTIES.html"
keywords: ["do", "if", "case", "method", "class", "ABENSHM", "AREA", "FIXED", "PROPERTIES"]
---

Like [basic properties](ABENSHM_AREA_BASIC_PROPERTIES.html), fixed properties of an area can be only be changed by developers. When the fixed properties of an area are changed at runtime, all area instances of the area are set to the [state](ABENSHM_AREA_INSTANCE_STATE.html)\\ *expired* and the [area class](ABENAREA_CLASS_GLOSRY.html) must be regenerated in most cases.

-   *Area binding*
-   This property determines the visibility and lifetime of the [area instance version](ABENAREA_INSTANCE_VERSION_GLOSRY.html) of the area by specifying a context. The possible contexts are as follows:

-   *Application server*
-   Area instance versions exist until the AS instance is shut down. In areas with the area binding *Application Server*, the methods `FREE_AREA`, `FREE_INSTANCE`, `INVALIDATE_AREA`, and `INVALIDATE_INSTANCE` of the [area class](ABENSHM_AREA_CLASS.html) have a parameter called `AFFECT_SERVER` that can be used to control cross-server invalidations.
-   *User session*
-   Area instances exist until the last [ABAP session](ABENABAP_SESSION_GLOSRY.html) of the current [user session](ABENUSER_SESSION_GLOSRY.html) ends. In area bindings, every user logon to an AS ABAP counts individually. This also applies in particular when users log on via external interfaces such as RFC or ICF.
-   *Top level transaction*
-   The [top level transaction](ABENTOP_LEVEL_TRANSACTION_GLOSRY.html) is the first program in a call sequence. These area instances exist for as long as the [ABAP memory](ABENABAP_MEMORY_GLOSRY.html) assigned to a call sequence is loaded, in other words for as long as the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of the top level transaction is loaded. In area instances, the [SAP Easy Access](ABENSAP_EASY_ACCESS_GLOSRY.html) program also functions as a top level transaction.

-   *Area instance versioning*
-   This property determines whether there can be only one or more [area instance versions](ABENAREA_INSTANCE_VERSION_GLOSRY.html) of an [area instance](ABENAREA_INSTANCE_GLOSRY.html). Without versioning, there is only one version and the area instance is equivalent to this area instance version. If versioning is used, there can be multiple versions in different [states](ABENSHM_AREA_INSTANCE_STATE.html) and an area instance is the set of all area instance versions with the same area instance name.
-   Without versioning, multiple readers from different internal sessions can access an area instance after its construction but writes are only possible if no read locks are in place. If versioning is used, a change lock can be set on an area instance that still has read locks.
-   The maximum number of versions of an area instance can be specified in the [runtime-dependent area properties](ABENSHM_AREA_RUNTIME_PROPERTIES.html).

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html abenshm\_areas.html