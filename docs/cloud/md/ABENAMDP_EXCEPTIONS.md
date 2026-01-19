---
title: "ABENAMDP_EXCEPTIONS"
description: |
  ABENAMDP_EXCEPTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENAMDP_EXCEPTIONS.htm"
abapFile: "ABENAMDP_EXCEPTIONS.html"
keywords: ["do", "catch", "method", "class", "ABENAMDP", "EXCEPTIONS"]
---

The names of the exception classes of the exceptions that can be handled when an [AMDP procedure implementation](ABENAMDP_PROCEDURE_METHODS.html) is called start with the prefix `CX_AMDP`. The exceptions are all in the category `CX_DYNAMIC_CHECK` and must be declared explicitly using [`RAISING`](ABAPMETHODS_GENERAL.html) in the definition of an [AMDP procedure implementation](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html) to be catchable when this method is called. The meaning of the exception classes is documented in their semantic properties in the class library.

`` \ `CX_ROOT`\ | |--`CX_DYNAMIC_CHECK`\ | |--`CX_AMDP_ERROR`\ | |--`CX_AMDP_VERSION_ERROR`\ | | | |--`CX_AMDP_VERSION_MISMATCH`\ | |--`CX_AMDP_CREATION_ERROR`\ | | | |--`CX_AMDP_DBPROC_GENERATE_FAILED`\ | | | |--`CX_AMDP_DBPROC_CREATE_FAILED`\ | | | |--`CX_AMDP_NATIVE_DBCALL_FAILED`\ | | | |--`CX_AMDP_WRONG_DBSYS`\ | |--`CX_AMDP_EXECUTION_ERROR`\ | | | |--`CX_AMDP_EXECUTION_FAILED`\ | | | |--`CX_AMDP_IMPORT_TABLE_ERROR`\ | | | |--`CX_AMDP_RESULT_TABLE_ERROR`\ | |--`CX_AMDP_CONNECTION_ERROR`\ | |--`CX_AMDP_NO_CONNECTION`\ | |--`CX_AMDP_NO_CONNECTION_FOR_CALL`\ | |--`CX_AMDP_WRONG_CONNECTION` ``

No exceptions can be declared for [AMDP function implementations](ABENAMDP_FUNCTION_METHODS.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html