---
title: "The statements for calling procedures are"
description: |
  These statements supply the parameter interfaces of the procedures. When the call is terminated correctly, control returns to the statement after the call position. -   for methods: -   `meth( ... )`(ABAPCALL_METHOD_STATIC_SHORT.html) -   `CALL METHOD dynamic_meth ...`(ABAPCALL_METHOD_DYNAMIC.ht
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCALL_PROCEDURES.htm"
abapFile: "ABENCALL_PROCEDURES.html"
keywords: ["method", "ABENCALL", "PROCEDURES"]
---

[Procedures](ABENPROCEDURE_GLOSRY.html) can be called both [internally](ABENCALL_PROCEDURES_INTERN.html) and [externally](ABENCALL_PROCEDURES_EXTERN.html). The following figure shows the most important internal and external calls.

The statements for calling procedures are

These statements supply the parameter interfaces of the procedures. When the call is terminated correctly, control returns to the statement after the call position.

-   for methods:
-   [`meth( ... )`](ABAPCALL_METHOD_STATIC_SHORT.html)
-   [`CALL METHOD dynamic_meth ...`](ABAPCALL_METHOD_DYNAMIC.html)
-   for function modules:
-   [`CALL FUNCTION func ...`](ABAPCALL_FUNCTION.html)
-   and (for the time being) for the obsolete subroutines:
-   [`PERFORM subr ...`](ABAPPERFORM.html)

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html