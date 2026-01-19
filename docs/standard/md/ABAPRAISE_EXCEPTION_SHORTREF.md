---
title: "ABAPRAISE_EXCEPTION_SHORTREF"
description: |
  ABAPRAISE_EXCEPTION_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPRAISE_EXCEPTION_SHORTREF.htm"
abapFile: "ABAPRAISE_EXCEPTION_SHORTREF.html"
keywords: ["do", "if", "class", "ABAPRAISE", "EXCEPTION", "SHORTREF"]
---

[Reference](ABAPRAISE_EXCEPTION_CLASS.html)

`RAISE [RESUMABLE] EXCEPTION    \{\ \{ TYPE cx_class [MESSAGE tn(id)                             |\ \{ ID mid TYPE mtype NUMBER num \}\                               [WITH dobj1 ... dobj4]]\                      [EXPORTING p1 = a1 p2 = a2 ...]\ \}\    | oref \}.`

Raises a class-based exception.

-   `RESUMABLE`\\
    Raises a [resumable exception](ABENRESUMABLE_EXCEPTION_GLOSRY.html).
-   `TYPE cx_class [EXPORTING p1 = a1 p2 = a2 ...]`\\
    Specifies the exception class of the exception object.
-   [`MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html)\\
    Passes the specification of a message to the exception object.
-   `EXPORTING p1 = a1 p2 = a2 ...`\\
    Passes actual parameters `a1`, `a2`, ... to the input parameters `p1`, `p2`, ... of the instance constructor of the exception object.
-   `oref`\\
    Uses an existing exception object, pointed to by `oref`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html