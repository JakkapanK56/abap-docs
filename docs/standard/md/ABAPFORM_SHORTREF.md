---
title: "ABAPFORM_SHORTREF"
description: |
  ABAPFORM_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFORM_SHORTREF.htm"
abapFile: "ABAPFORM_SHORTREF.html"
keywords: ["class", "types", "ABAPFORM", "SHORTREF"]
---

[Reference](ABAPFORM.html)

``FORM subr    [ TABLES   \{ t1 [\{TYPE itab_type\}|\{LIKE itab\}|\{STRUCTURE struc\}]\                 t2 [\{TYPE itab_type\}|\{LIKE itab\}|\{STRUCTURE struc\}]\                  ... \}\ ]\    [ USING    \{\ \{VALUE(u1)\}|u1 [[`typing`](ABENTYPING_SHORTREF.html)|\{STRUCTURE struc\}]\                 \{VALUE(u2)\}|u2 [[`typing`](ABENTYPING_SHORTREF.html)|\{STRUCTURE struc\}]\                 ... \}\ ]\    [ CHANGING \{\ \{VALUE(c1)\}|c1 [[`typing`](ABENTYPING_SHORTREF.html)|\{STRUCTURE struc\}]\                 \{VALUE(c2)\}|c2 [[`typing`](ABENTYPING_SHORTREF.html)|\{STRUCTURE struc\}]\                 ... \}\ ]\    [ RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ... ].    ...  ENDFORM.``

**Obsolete:** Defines a subroutine `subr`. The subroutine is defined with `FORM` and implemented between `FORM` and `ENDFORM`.

-   [`TABLES`](ABAPFORM_TABLES.html)\\
    **Obsolete:** Defines table parameters `t1`, `t2`, ...
-   [`USING`](ABAPFORM_PARAMETERS.html)\\
    Defines input parameters `u1`, `u2`, ...
-   [`CHANGING`](ABAPFORM_PARAMETERS.html)\\
    Defines input/output parameters `c1`, `c2`, ...
-   [`VALUE`](ABAPFORM_PARAMETERS.html)\\
    Defines for a formal parameter how to pass values. Without the addition `VALUE`, the values are passed by reference.
-   [`typing`](ABENTYPING_SHORTREF.html)\\
    Types formal parameters.
-   [`STRUCTURE struc`](ABAPFORM_STRUCTURE.html)\\
    **Obsolete:** Casts a structure `struc` to a formal parameter.
-   [`RAISING exc1 exc2 ...`](ABAPFORM.html)\\
    Declares class-based exceptions `exc1`, `exc2`, ... which can be propagated from within the subroutine, with or without the capacity to be restarted.

abenabap.html abenabap\_reference.html abenabap\_shortref.html