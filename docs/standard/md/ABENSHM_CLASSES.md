---
title: "ABENSHM_CLASSES"
description: |
  ABENSHM_CLASSES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_CLASSES.htm"
abapFile: "ABENSHM_CLASSES.html"
keywords: ["if", "class", "ABENSHM", "CLASSES"]
---

The hierarchy of global classes that are involved when working with shared objects is as follows:

``[`CL_ABAP_MEMORY_AREA`](ABENSHM_CL_ABAP_MEMORY_AREA.html)\ | |--[`CL_SHM_AREA`](ABENSHM_CL_SHM_AREA.html)\ | | | |--[Area Classes](ABENSHM_AREA_CLASS.html)\ | |--[`CL_IMODE_AREA`](ABENSHM_CL_IMODE_AREA.html)``

The meaning of the three predefined system classes:

There is also a system interface that must be implemented by the class for the optional area constructor:

``[`IF_SHM_BUILD_INSTANCE`](ABENSHM_IF_SHM_BUILD_INSTANCE.html)\ | |--[Area Constructor Class](ABENSHM_AREA_CONSTRUCTOR_CLASS.html)``

-   [`CL_ABAP_MEMORY_AREA`](ABENSHM_CL_ABAP_MEMORY_AREA.html) is the superclass of all area classes.
-   [`CL_SHM_AREA`](ABENSHM_CL_SHM_AREA.html) is the superclass of all user-defined area classes.
-   [`CL_IMODE_AREA`](ABENSHM_CL_IMODE_AREA.html) is a predefined area class for the [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html