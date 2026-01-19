---
title: "ABENSHM_IF_SHM_BUILD_INSTANCE"
description: |
  ABENSHM_IF_SHM_BUILD_INSTANCE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSHM_IF_SHM_BUILD_INSTANCE.htm"
abapFile: "ABENSHM_IF_SHM_BUILD_INSTANCE.html"
keywords: ["do", "if", "method", "class", "ABENSHM", "SHM", "BUILD", "INSTANCE"]
---

The interface `IF_SHM_BUILD_INSTANCE` must be included by an [area constructor class](ABENSHM_AREA_CONSTRUCTOR_CLASS.html) that implements the optional area constructor of an area.

Interface method for implementing the area constructor of an area.

The method *BUILD* does not have an input parameter for the client ID. The area is built in the [current client](ABENCURRENT_CLIENT_GLOSRY.html) when the method is called.

-   `INST_NAME` of type `SHM_INST_NAME`
-   Name of the area instance version. Specifying the name is optional. The default value is the value of the constant `CL_SHM_AREA=>DEFAULT_INSTANCE`.
-   `INVOCATION_MODE` of type `i`
-   This parameter can be used to determine the type of call in the area constructor. The default value `CL_SHM_AREA=>INVOCATION_MODE_EXPLICIT` is used for the explicit call. `CL_SHM_AREA=>INVOCATION_MODE_AUTO_BUILD` is passed with the automatic call.

-   `CX_SHM_BUILD_FAILED`
-   An error occurred when the area constructor was executed.

abenabap.html abenabap\_reference.html abencreate\_objects.html abenabap\_shared\_objects.html abenshm\_classes.html