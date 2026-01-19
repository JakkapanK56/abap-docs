---
title: "ABAPCALL_FUNCTION_SHORTREF"
description: |
  ABAPCALL_FUNCTION_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_FUNCTION_SHORTREF.htm"
abapFile: "ABAPCALL_FUNCTION_SHORTREF.html"
keywords: ["update", "if", "method", "class", "internal-table", "ABAPCALL", "FUNCTION", "SHORTREF"]
---

[Reference](ABAPCALL_FUNCTION.html)

`CALL FUNCTION func [\ \{IN UPDATE TASK\}\                     |\ \{\ [\ \{STARTING NEW TASK task\}\                         |\ \{IN BACKGROUND TASK [AS SEPARATE UNIT]\}\ ]\                         [DESTINATION dest]\ \}\                     |\ \{IN BACKGROUND UNIT\}\ ]\                     [\{CALLING meth\}|\{PERFORMING subr\} ON END OF TASK]\                     \{\ [EXPORTING  p1 = a1 p2 = a2 ...]\                       [IMPORTING p1 = a1 p2 = a2 ...]\                       [TABLES t1 = itab1 t2 = itab2 ...]\                       [CHANGING   p1 = a1 p2 = a2 ...]\                       [EXCEPTIONS [exc1 = n1 exc2 = n2 ...]\                                   [error_message = n_error]\                                   [system_failure = ns                                     [MESSAGE smess]]\                                   [communication_failure = nc                                     [MESSAGE cmess]]\                                   [resource_failure = nc]\                                   [OTHERS = n_others]]\}\                     |\ \{[PARAMETER-TABLE ptab]\                         [EXCEPTION-TABLE etab]\ \}.`

Calls the function module specified in `func`.

-   [`IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html)\\
    Registers an update function module.
-   `[DESTINATION](ABAPCALL_FUNCTION_DESTINATION.html)`, `[STARTING NEW TASK](ABAPCALL_FUNCTION_STARTING.html)`, `[IN BACKGROUND UNIT](ABAPCALL_FUNCTION_BACKGROUND_UNIT.html)`, `[IN BACKGROUND TASK](ABAPCALL_FUNCTION_BACKGROUND_TASK.html)`\\
    [Synchronous](ABENSYNCHRONOUS_RFC_GLOSRY.html), [asynchronous](ABENASYNCHRONOUS_RFC_GLOSRY.html), [background](ABENBG_REMOTE_FUNCTION_GLOSRY.html), or [transactional RFC](ABENTRFC_1_GLOSRY.html) (obsolete).
-   [`\{CALLING meth\}|\{PERFORMING subr\} ON END OF TASK`](ABAPCALL_FUNCTION_STARTING.html)\\
    At the end of an asynchronous RFC, calls method `meth` or subroutine `subr`.
-   [`EXPORTING p1 = a1 p2 = a2 ...`](ABAPCALL_FUNCTION_PARAMETER.html)\\
    Passes actual parameters `a1`, `a2`, ... to input parameters `p1`\\ `p2`, ...
-   [`IMPORTING p1 = a1 p2 = a2 ...`](ABAPCALL_FUNCTION_PARAMETER.html)\\
    Inherits output parameters `p1`, `p2`, ... in actual parameters `a1`, `a2`, ...
-   [`TABLES t1 = itab1 t2 = itab2 ...`](ABAPCALL_FUNCTION_PARAMETER.html)\\
    Assigns internal tables `itab1`, `itab2`, ... to table parameters `t1`, `t2`, and so on.
-   [`CHANGING p1 = a1 p2 = a2 ...`](ABAPCALL_FUNCTION_PARAMETER.html)\\
    Assigns actual parameters `a1`, `a2`, ... to input/output parameters `p1`, `p2`, and so on.
-   [`EXCEPTIONS`](ABAPCALL_FUNCTION_PARAMETER.html)\\
    Enables the handling of non-class-based exceptions:
    \\
    `exc1 = n1 exc2 = n2 ...` - Assigns numbers `n1`, `n2`, ... to the classic exceptions `exc1`, `exc2`, ... for the return code `sy-subrc`.
    \\
    `error_message = n_error` - Handles messages using the special exception `error_message`.
    \\
    `system_failure`, `communication_failure`, `resource_failure` - Handles special classic exceptions by passing the first line of the short dump to `smess` or `cmess`.
    \\
    `OTHERS = n_others` - Assigns a number `n_others` for the return code `sy-subrc` to all exceptions not named explicitly.
-   [`PARAMETER-TABLE ptab`](ABAPCALL_FUNCTION_DYNAMIC.html)\\
    Assigns dynamic actual parameters to formal parameters using an internal table `ptab` of the type `abap_func_parmbind_tab`.
-   [`EXCEPTION-TABLE etab`](ABAPCALL_FUNCTION_DYNAMIC.html)\\
    Assigns dynamic return codes to non-class-based exceptions using an internal table `etab` of the type `abap_func_excpbind_tab`.
    

abenabap.html abenabap\_reference.html abenabap\_shortref.html