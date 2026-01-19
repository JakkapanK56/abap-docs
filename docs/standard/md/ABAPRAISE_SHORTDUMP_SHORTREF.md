---
title: "ABAPRAISE_SHORTDUMP_SHORTREF"
description: |
  ABAPRAISE_SHORTDUMP_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPRAISE_SHORTDUMP_SHORTREF.htm"
abapFile: "ABAPRAISE_SHORTDUMP_SHORTREF.html"
keywords: ["do", "if", "class", "ABAPRAISE", "SHORTDUMP", "SHORTREF"]
---

[Reference](ABAPRAISE_SHORTDUMP.html)

`RAISE SHORTDUMP    \{\ \{ TYPE cx_class [MESSAGE tn(id)                             |\ \{ ID mid TYPE mtype NUMBER num \}\                               [WITH dobj1 ... dobj4]]\                      [EXPORTING p1 = a1 p2 = a2 ...]\ \}\    | oref \}.`

Raises a runtime error with an exception object.

-   `TYPE cx_class [EXPORTING p1 = a1 p2 = a2 ...]`\\
    Specifies the exception class of the exception object.
-   [`MESSAGE`](ABAPRAISE_SHORTDUMP_MESSAGE.html)\\
    Passes the specification of a message to the exception object.
-   `EXPORTING p1 = a1 p2 = a2 ...`\\
    Passes actual parameters `a1`, `a2`, ... to the input parameters `p1`, `p2`, ... of the instance constructor of the exception object.
-   `oref`\\
    Uses an existing exception object, pointed to by `oref`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html