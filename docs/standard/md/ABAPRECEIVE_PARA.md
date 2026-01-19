---
title: "ABAPRECEIVE_PARA"
description: |
  ABAPRECEIVE_PARA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPRECEIVE_PARA.htm"
abapFile: "ABAPRECEIVE_PARA.html"
keywords: ["if", "class", "exception-handling", "ABAPRECEIVE", "PARA"]
---

[Short Reference](ABAPRECEIVE_SHORTREF.html)

`... [IMPORTING  p1 = a1 p2 = a2 ...]`\\ 
    `[TABLES     t1 = itab1 t2 = itab2 ...]`\\ 
    `[CHANGING   p1 = a1 p2 = a2 ...]`\\ 
    `[EXCEPTIONS [exc1 = n1 exc2 = n2 ...]`\\ 
                `[system_failure = ns [MESSAGE smess]]`\\ 
                `[communication_failure = nc [MESSAGE cmess]]`\\ 
                `[OTHERS = n_others]].`

These additions are used to pass the specified formal parameters of the function module `func` specified after [`RECEIVE`](ABAPRECEIVE.html) to the actual parameter of the callback routine in the calling program. The meaning of the additions is the same as for [synchronous RFC](ABAPCALL_FUNCTION_DESTINATION_PARA.html). However, values are only applied by actual parameters specified using `CHANGING` or `TABLES` and are not passed.

`EXCEPTIONS` is used to perform non-class-based exception handling. Return codes are assigned to the non-class-based exceptions. The same exceptions can be raised as in [synchronous RFC](ABAPCALL_FUNCTION_DESTINATION_PARA.html), that is, exceptions that are defined in the interface of the function module and the predefined exceptions of the RFC interface. If no exceptions are raised, `RECEIVE` sets the content of `sy-subrc` to 0.

`CALL FUNCTION` and `RECEIVE` are currently decoupled with regard to the addition `EXCEPTIONS`. This changes when class-based exceptions are introduced. For this reason, it is advisable to use the addition `EXCEPTIONS` in the same way for `CALL FUNCTION` and `RECEIVE`.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abapcall\_function\_starting.html abapreceive.html