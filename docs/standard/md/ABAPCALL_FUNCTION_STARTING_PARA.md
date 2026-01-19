---
title: "ABAPCALL_FUNCTION_STARTING_PARA"
description: |
  ABAPCALL_FUNCTION_STARTING_PARA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_FUNCTION_STARTING_PARA.htm"
abapFile: "ABAPCALL_FUNCTION_STARTING_PARA.html"
keywords: ["if", "class", "ABAPCALL", "FUNCTION", "STARTING", "PARA"]
---

[Short Reference](ABAPCALL_FUNCTION_SHORTREF.html)

`... [EXPORTING  p1 = a1  p2 = a2 ...]`\\ 
    `[TABLES     t1 = itab1 t2 = itab2 ...]`\\ 
    `[CHANGING   p1 = a1  p2 = a2 ...]`\\ 
    `[EXCEPTIONS [exc1 = n1  exc2 = n2 ...]`\\ 
                `[system_failure        = ns [MESSAGE smess]]`\\ 
                `[communication_failure = nc [MESSAGE cmess]]`\\ 
                `[resource_failure      = nr]`\\ 
                `[OTHERS = n_others]].`

Parameter passing for [aRFC](ABENARFC_GLOSRY.html). These additions are used to assign actual parameters to the formal parameters of the asynchronously called function module, and to assign return codes to exceptions that are not class-based. The additions have the same meaning as in the [synchronous RFC](ABAPCALL_FUNCTION_DESTINATION_PARA.html) with the exception that values with `IMPORTING` cannot be accepted and that values are passed but not accepted for actual parameters specified by `CHANGING` or `TABLES`. The additional predefined non-class-based exception `resource_failure` can also be handled for [pRFC](ABENPRFC_GLOSRY.html). If this exception is raised, the addition `MESSAGE` is not allowed.

The additions [`IMPORTING`](ABAPRECEIVE_PARA.html), [`CHANGING`](ABAPRECEIVE_PARA.html), and [`TABLES`](ABAPRECEIVE_PARA.html) of the statement [`RECEIVE`](ABAPRECEIVE.html) must be used in callback routines to receive values from an asynchronously called function module.

[Parameter Passing in sRFC and aRFC](ABENRFC_PARAMETERS_ABEXA.html)

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abapcall\_function\_starting.html