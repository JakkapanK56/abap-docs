---
title: "ABENMETH_CALL_SHORTREF"
description: |
  ABENMETH_CALL_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMETH_CALL_SHORTREF.htm"
abapFile: "ABENMETH_CALL_SHORTREF.html"
keywords: ["while", "if", "method", "class", "ABENMETH", "CALL", "SHORTREF"]
---

[Reference](ABAPCALL_METHOD_STATIC_SHORT.html)

`\{meth  |oref->meth  |super->meth  |class=>meth\}( \{\ \}\               |\ \{ a \}\               |\ \{ p1 = a1 p2 = a2 ... \}\               |\ \{\ [EXPORTING p1 = a1 p2 = a2 ...]\                   [IMPORTING p1 = a1 p2 = a2 ...]\                   [CHANGING   p1 = a1 p2 = a2 ...]\                   [RECEIVING r  = a ]\                   [EXCEPTIONS [exc1 = n1 exc2 = n2 ...]\                               [OTHERS = n_others]]\ \} ).`

Static method call.

**Specifies the method:**

**Specifies the parameters:**

**Specifies the exceptions:**

-   [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html) - Method `meth` of the same class.
-   [`oref->meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html) - [Instance method](ABENINSTANCE_METHOD_GLOSRY.html)\\ `meth` of the object referenced by `oref`.
-   [`super->meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html) - Method `meth` with the same name in the direct superclass.
-   [`class=>meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html) - [Static method](ABENSTATIC_METHOD_GLOSRY.html)\\ `meth` of the class `class`.

-   [`( )`](ABAPCALL_METHOD_STATIC_SHORT.html)\\
    Calls a method without passing a parameter.
-   [`( a )`](ABAPCALL_METHOD_STATIC_SHORT.html)\\
    Calls a method while passing a single parameter `a`.
-   [`( p1 = a1 p2 = a2 ... )`](ABAPCALL_METHOD_STATIC_SHORT.html)\\
    Calls a method while passing multiple parameters `a1`, `a2`, ...
-   [`EXPORTING p1 = a1 p2 = a2 ...`](ABAPCALL_METHOD_PARAMETERS.html)\\
    Passes actual parameters `a1`, `a2`, ... to input parameters `p1`, `p2`, ...
-   [`IMPORTING p1 = a1 p2 = a2 ...`](ABAPCALL_METHOD_PARAMETERS.html)\\
    Inherits output parameters `p1`, `p2`, ... in actual parameters `a1`, `a2`, ...
-   [`CHANGING p1 = a1 p2 = a2 ...`](ABAPCALL_METHOD_PARAMETERS.html)\\
    Assigns actual parameters `a1`, `a2`, ... to input/output parameters `p1`, `p2`, and so on.
-   [`RECEIVING r = a`](ABAPCALL_METHOD_PARAMETERS.html)\\
    Assigns the return value `r` to the actual parameter `a`.
    

-   [`EXCEPTIONS`](ABAPCALL_METHOD_PARAMETERS.html)\\
    Enables the handling of non-class-based exceptions:
    \\
    `exc1 = n1 exc2 = n2 ...` - Assigns numbers `n1`, `n2`, ... to the classic exceptions `exc1`, `exc2`, ... for the return code `sy-subrc`.
    \\
    `OTHERS = n_others` - Assigns a number `n_others` for the return code `sy-subrc` to all exceptions not named explicitly.
    

abenabap.html abenabap\_reference.html abenabap\_shortref.html