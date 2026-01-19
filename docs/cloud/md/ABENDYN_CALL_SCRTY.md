---
title: "ABENDYN_CALL_SCRTY"
description: |
  ABENDYN_CALL_SCRTY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDYN_CALL_SCRTY.htm"
abapFile: "ABENDYN_CALL_SCRTY.html"
keywords: ["if", "case", "method", "class", "data", "ABENDYN", "CALL", "SCRTY"]
---

In dynamic calls, the name of the called unit is specified as the content of a character-like data object. If some or all of this content originates outside of the calling program, there is a risk that units are called unintentionally. The only way of tackling this security risk is to perform a comparison with an include list. The class `CL_ABAP_DYN_PRG` provides the methods `CHECK_WHITELIST_STR` and `CHECK_WHITELIST_TAB` for that purpose.

Potential dynamic calls and hence a potential security risk when handling input can occur in the following cases:

As well as checking intentional calls, it is also necessary to perform a sufficient [authorization check](ABENAUTHORITY_SCRTY.html) on the current user in program calls.

-   When an executable program is specified dynamically after `SUBMIT`.
-   When a transaction is specified dynamically after `CALL TRANSACTION` and `LEAVE TO TRANSACTION`.
-   When classes and methods are specified dynamically in a dynamic method call using [`CALL METHOD`](ABAPCALL_METHOD_DYNAMIC.html).
-   When a class is specified dynamically in [`CREATE OBJECT`](ABAPCREATE_OBJECT.html) (a dynamic call of the instance constructor).
-   When the function module is specified dynamically in a function module call using [`CALL FUNCTION`](ABAPCALL_FUNCTION.html) (particularly if RFC is used).
-   When subroutines and programs are specified dynamically in dynamic subroutine calls using [`PERFORM`](ABAPPERFORM.html).
-   When the system function is specified dynamically in the internal statement `CALL`.

abenabap.html abenabap\_reference.html abenabap\_security.html abendynamic\_programming\_scrty.html