---
title: "ABENTYPING_SYNTAX"
description: |
  ABENTYPING_SYNTAX - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTYPING_SYNTAX.htm"
abapFile: "ABENTYPING_SYNTAX.html"
keywords: ["do", "if", "method", "class", "types", "field-symbol", "ABENTYPING", "SYNTAX"]
---

``... [`generic_type`](ABENTYPING_GENERIC.html)\ |\ [`complete_type`](ABENTYPING_COMPLETE.html)  ...``

The addition `typing` is part of the definition of formal parameters and field symbols in the following statements:

The addition allows generic typing with [`generic_type`](ABENTYPING_GENERIC.html) and complete typing with [`complete_type`](ABENTYPING_COMPLETE.html). In positions where the addition `typing` does not have to be specified, implicit typing with the generic type [`any`](ABENBUILT_IN_TYPES_GENERIC.html) takes place if no typing is specified explicitly.

-   [`[CLASS-]METHODS`](ABAPMETHODS.html)
-   [`[CLASS-]EVENTS`](ABAPEVENTS.html)
-   [`FORM`](ABAPFORM.html)
-   [`FIELD-SYMBOLS`](ABAPFIELD-SYMBOLS.html)

-   For more information about typing parameters of function modules, see [Function Module Interface](ABENFUNCTION_PARAMETERS.html).
-   When formal parameters are typed, the addition `LIKE` can be used to reference formal parameters of the same procedure that have already been declared.

abenabap.html abenabap\_reference.html abendeclarations.html abentyping.html