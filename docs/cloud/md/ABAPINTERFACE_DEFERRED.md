---
title: "ABAPINTERFACE_DEFERRED"
description: |
  ABAPINTERFACE_DEFERRED - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPINTERFACE_DEFERRED.htm"
abapFile: "ABAPINTERFACE_DEFERRED.html"
keywords: ["do", "if", "class", "data", "ABAPINTERFACE", "DEFERRED"]
---

`INTERFACE intf DEFERRED.`

This variant of the statement `INTERFACE` is used to declare the interface `intf` independently of the location of the actual definition in the program. It does not introduce a declaration part and cannot be ended using `ENDINTERFACE`. The meaning is the same as for the corresponding variants of the statement [`CLASS`](ABAPCLASS_DEFERRED.html).

Use of the interface `intf2` in front of the actual declaration in a type reference in the interface `intf1`. For this, it must be made known using `INTERFACE DEFERRED`.

-   This variant of the statement `INTERFACE` can also only be specified in the context described under [`INTERFACE`](ABAPINTERFACE.html).

INTERFACE intf2 DEFERRED. \\n\\ \\nINTERFACE intf1. \\n ... \\n DATA iref TYPE REF TO intf2. \\n ... \\nENDINTERFACE. \\n\\ \\nINTERFACE intf2. \\n ... \\nENDINTERFACE. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abapinterface.html