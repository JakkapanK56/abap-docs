---
title: "ABAPCALL_BADI_SHORTREF"
description: |
  ABAPCALL_BADI_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_BADI_SHORTREF.htm"
abapFile: "ABAPCALL_BADI_SHORTREF.html"
keywords: ["if", "method", "ABAPCALL", "BADI", "SHORTREF"]
---

[Reference](ABAPCALL_BADI.html)

`CALL BADI badi->meth|badi->(meth_name)`\\ 
          `\{\ [EXPORTING  p1 = a1 p2 = a2 ...]`\\ 
            `[IMPORTING p1 = a1 p2 = a2 ...]`\\ 
            `[CHANGING   p1 = a1 p2 = a2 ...]`\\ 
            `[RECEIVING r  = a ]`\\ 
            `[EXCEPTIONS [exc1 = n1 exc2 = n2 ...]`\\ 
            `[OTHERS = n_others]]\}`\\ 
        `|\ \{[PARAMETER-TABLE ptab]`\\ 
            `[EXCEPTION-TABLE etab]\ \}.`

Calls a [BAdI method](ABENBADI_METHOD_GLOSRY.html) specified directly as `meth` or specified in `meth_name` in the [object plug-ins](ABENOBJECT_PLUGIN_GLOSRY.html) referenced by the [BAdI object](ABENBADI_OBJECT_GLOSRY.html) to which the [BAdI reference variable](ABENBADI_REFERENCE_VARIABLE_GLOSRY.html)\\ `badi` refers.

-   `EXPORTING p1 = a1 p2 = a2 ...`\\
    See [`CALL METHOD`](ABAPCALL_METHOD_SHORTREF.html).
-   `IMPORTING p1 = a1 p2 = a2 ...`\\
    See [`CALL METHOD`](ABAPCALL_METHOD_SHORTREF.html).
-   `CHANGING p1 = a1 p2 = a2 ...`\\
    See [`CALL METHOD`](ABAPCALL_METHOD_SHORTREF.html).
-   `RECEIVING r = a`\\
    See [`CALL METHOD`](ABAPCALL_METHOD_SHORTREF.html).
-   `EXCEPTIONS`\\
    See [`CALL METHOD`](ABAPCALL_METHOD_SHORTREF.html).
-   `PARAMETER-TABLE`\\
    See [`CALL METHOD`](ABAPCALL_METHOD_SHORTREF.html).
-   `EXCEPTION-TABLE`\\
    See [`CALL METHOD`](ABAPCALL_METHOD_SHORTREF.html).

abenabap.html abenabap\_reference.html abenabap\_shortref.html