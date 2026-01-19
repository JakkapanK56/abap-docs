---
title: "ABAPRECEIVE_SHORTREF"
description: |
  ABAPRECEIVE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPRECEIVE_SHORTREF.htm"
abapFile: "ABAPRECEIVE_SHORTREF.html"
keywords: ["class", "internal-table", "ABAPRECEIVE", "SHORTREF"]
---

[Reference](ABAPRECEIVE.html)

`RECEIVE RESULTS FROM FUNCTION func                  [KEEPING TASK]\                  [IMPORTING p1 = a1 p2 = a2 ...]\                  [TABLES t1 = itab1 t2 = itab2 ...]\                  [EXCEPTIONS [exc1 = n1 exc2 = n2 ...]\                              [system_failure = ns [MESSAGE smess]]\                              [communication_failure = nc [MESSAGE cmess]]\                              [OTHERS = n_others]].`

Is sent, in a callback routine, the results of an [asynchronous RFC](ABENASYNCHRONOUS_RFC_GLOSRY.html).

-   [`KEEPING TASK`](ABAPRECEIVE.html)\\
    Prevents the RFC connection from being disconnected after results have been inherited.
-   [`IMPORTING p1 = a1 p2 = a2 ...`](ABAPRECEIVE_PARA.html)\\
    Passes output parameters `p1`, `p2`, ... to actual parameters `a1`, `a2`, ...
-   [`TABLES t1 = itab1 t2 = itab2 ...`](ABAPRECEIVE_PARA.html)\\
    Assigns internal tables `itab1`, `itab2`, ... to table parameters `t1`, `t2` (...and so on).
-   [`EXCEPTIONS`](ABAPRECEIVE_PARA.html)\\
    Enables the handling of non-class-based exceptions:
    \\
    `exc1 = n1 exc2 = n2 ...` - Assigns numbers `n1`, `n2`, ... to the classic exceptions `exc1`, `exc2`, ... for the return code `sy-subrc`.
    \\
    `system_failure`, `communication_failure` (handles special exceptions in RFC including inheritance of the first line of the short dump after `smess` or `cmess`)
    \\
    `OTHERS = n_others` (assigns a number `n_others` for the return code `sy-subrc` to all exceptions not named explicitly)

abenabap.html abenabap\_reference.html abenabap\_shortref.html