---
title: "ABAPCALL_METHOD_OF_OLE_SHORTREF"
description: |
  ABAPCALL_METHOD_OF_OLE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_METHOD_OF_OLE_SHORTREF.htm"
abapFile: "ABAPCALL_METHOD_OF_OLE_SHORTREF.html"
keywords: ["case", "method", "data", "ABAPCALL", "METHOD", "OLE", "SHORTREF"]
---

[Reference](ABAPCALL_METHOD_OLE2.html)

`CALL METHOD OF ole meth [= rc]\                 [EXPORTING p1 = f1 p2 = f2 ...]\                 [NO FLUSH]\ [QUEUE-ONLY].`

Calls a method `meth` of an [automation object](ABENOLE_AUTOMATION_GLOSRY.html)\\ `ole` created using `CREATE OBJECT ole`. The return code can be saved in a variable `rc`.

-   `EXPORTING p1 = f1 p2 = f2 ...`\\
    Passes actual parameters `f1`, `f2`, ... to input parameters `p1`\\ `p2`, ...
-   `NO FLUSH`\\
    Dictates that the method call is passed to the presentation layer only when the function module `FLUSH` is called or the [screen layout](ABENSCREEN_GLOSRY.html) changes.
-   `QUEUE-ONLY`\\
    Defines that, in the case of flushes, the return values of the called methods of the automation queue are not written to the data objects `rc`.
    

abenabap.html abenabap\_reference.html abenabap\_shortref.html