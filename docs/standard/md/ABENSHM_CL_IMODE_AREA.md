---
title: "ABENSHM_CL_IMODE_AREA"
description: |
  ABENSHM_CL_IMODE_AREA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_CL_IMODE_AREA.htm"
abapFile: "ABENSHM_CL_IMODE_AREA.html"
keywords: ["class", "ABENSHM", "IMODE", "AREA"]
---

The class `CL_IMODE_AREA` is a subclass of [`CL_ABAP_MEMORY_AREA`](ABENSHM_CL_ABAP_MEMORY_AREA.html) and a predefined [area class](ABENAREA_CLASS_GLOSRY.html) that enables the current internal session to be handled as an [area instance version](ABENAREA_INSTANCE_VERSION_GLOSRY.html). There can be exactly one instance of the class `CL_IMODE_AREA` (singleton) in an internal session. This instance is an [area handle](ABENAREA_HANDLE_GLOSRY.html) for the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

Returns a reference to the area handle for the current internal session.

-   `HANDLE` of type `REF TO cl_imode_area`

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html abenshm\_classes.html abenshm\_cl\_abap\_memory\_area.html