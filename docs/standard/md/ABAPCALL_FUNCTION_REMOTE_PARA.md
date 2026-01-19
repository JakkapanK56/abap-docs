---
title: "ABAPCALL_FUNCTION_REMOTE_PARA"
description: |
  ABAPCALL_FUNCTION_REMOTE_PARA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_FUNCTION_REMOTE_PARA.htm"
abapFile: "ABAPCALL_FUNCTION_REMOTE_PARA.html"
keywords: ["class", "ABAPCALL", "FUNCTION", "REMOTE", "PARA"]
---

[Short Reference](ABAPCALL_FUNCTION_SHORTREF.html)

`... [EXPORTING    p1 = a1 p2 = a2 ... ]`\\ 
    `[IMPORTING    p1 = a1 p2 = a2 ... ]`\\ 
    `[TABLES       t1 = itab1 t2 = itab2 ...] ...`\\ 
    `[CHANGING     p1 = a1 p2 = a2 ...] ...`\\ 
    `[PARAMETER-TABLE ptab] ...`

These additions are used to assign actual parameters to the formal parameters of the function module. The additions have the same meaning as in [synchronous RFC](ABAPCALL_FUNCTION_DESTINATION_PARA.html) with the exception that no return values can be assigned to non-class-based exceptions.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abapcall\_function\_remote\_session.html