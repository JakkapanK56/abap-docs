---
title: "ABENDYN_CALL_SCRTY"
description: |
  ABENDYN_CALL_SCRTY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYN_CALL_SCRTY.htm"
abapFile: "ABENDYN_CALL_SCRTY.html"
keywords: ["select", "if", "case", "try", "catch", "method", "class", "data", "ABENDYN", "CALL", "SCRTY"]
---

In dynamic calls, the name of the called unit is specified as the content of a character-like data object. If some or all of this content originates outside of the calling program, there is a risk that units are called unintentionally. The only way of tackling this security risk is to perform a comparison with an include list. The class `CL_ABAP_DYN_PRG` provides the methods `CHECK_WHITELIST_STR` and `CHECK_WHITELIST_TAB` for that purpose.

Potential dynamic calls and hence a potential security risk when handling input can occur in the following cases:

As well as checking intentional calls, it is also necessary to perform a sufficient [authorization check](ABENAUTHORITY_SCRTY.html) on the current user in program calls.

In the following program section, a transaction name, when entered, is checked against an include list that contains only transactions from the ABAP example library.

-   When an executable program is specified dynamically after [`SUBMIT`](ABAPSUBMIT.html).
-   When a transaction is specified dynamically after [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html) and [`LEAVE TO TRANSACTION`](ABAPLEAVE_TO_TRANSACTION.html).
-   When classes and methods are specified dynamically in a dynamic method call using [`CALL METHOD`](ABAPCALL_METHOD_DYNAMIC.html).
-   When a class is specified dynamically in [`CREATE OBJECT`](ABAPCREATE_OBJECT.html) (a dynamic call of the instance constructor).
-   When the function module is specified dynamically in a function module call using [`CALL FUNCTION`](ABAPCALL_FUNCTION.html) (particularly if [RFC](ABENRFC_GLOSRY.html) is used).
-   When subroutines and programs are specified dynamically in dynamic subroutine calls using [`PERFORM`](ABAPPERFORM.html).
-   When the system function is specified dynamically in the internal statement [`CALL`](ABAPCALL-.html).

DATA include\_list TYPE HASHED TABLE OF string \\n WITH UNIQUE KEY table\_line. \\nSELECT obj\_name \\n FROM tadir \\n WHERE pgmid = 'R3TR' AND \\n object = 'TRAN' AND \\n devclass = 'SABAPDEMOS' \\n INTO TABLE @include\_list. \\n\\ \\nDATA transaction TYPE sy-tcode. \\ncl\_demo\_input=>request( CHANGING field = transaction ). \\n\\ \\nTRY. \\n transaction = cl\_abap\_dyn\_prg=>check\_whitelist\_tab( \\n val = transaction \\n whitelist = include\_list ). \\n CATCH cx\_abap\_not\_in\_whitelist INTO FINAL(exc). \\n cl\_demo\_output=>display( exc->get\_text( ) ). \\n RETURN. \\nENDTRY. \\n\\ \\nTRY. \\n CALL TRANSACTION transaction WITH AUTHORITY-CHECK. \\n CATCH cx\_sy\_authorization\_error ##NO\_HANDLER. \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_security.html abendynamic\_programming\_scrty.html