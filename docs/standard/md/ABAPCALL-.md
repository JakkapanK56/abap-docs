---
title: "ABAPCALL-"
description: |
  ABAPCALL- - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL-.htm"
abapFile: "ABAPCALL-.html"
keywords: ["select", "do", "if", "catch", "method", "data", "internal-table", "ABAPCALL"]
---

**This statement is for internal use only. \\nIt must not be used in application programs.**

`CALL cfunc.`

[`... ID id1 FIELD f1 ... ID idn FIELD fn`](#ABAP_ONE_ADD@1@)

Calls the system function `cfunc`. A flat character-like data object containing the name of the function can be specified for `cfunc`. The function must be entered in the file `sapactab.h`. Modifying a function or creating a new function requires the ABAP kernel to be compiled and linked again. This requires the C source code files.

The `CALL` statement itself does not set any system fields. Whether system fields such as `sy-subrc` are set depends on the system function called.

Calls of system functions whose names or parameters are passed to the program from outside present a serious security risk. The values from outside must be checked thoroughly before being used. See [System Command Injections](ABENSYS_COMM_INJECTIONS_SCRTY.html).

Passing fields to the called program by reference. `ID id1` is used to specify the name of a formal parameter and `FIELD f1` is used to specify the associated field from the ABAP program. If a formal parameter expects an internal table, the latter is passed in the form `FIELD tab[]`.

Query of the current database server.

-   If possible, [kernel methods](ABENKERNEL_METHODS.html) should be used instead of system functions.
-   External programs should be called using the RFC mechanism: [`CALL FUNCTION ... DESTINATION`](ABAPCALL_FUNCTION_DESTINATION.html).
-   For some critical C functions, the system performs an authorization check automatically. If the user does not have the appropriate authorization, a runtime error occurs. The authorization can be checked using the function module `AUTHORITY_CHECK_C_FUNCTION`.
-   The use of the system function `SYSTEM`, which can be used to execute operating system statements of the current [host computer](ABENHOST_COMPUTER_GLOSRY.html), is not recommended and can be deactivated using the [profile parameter](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `rdisp/call_system`. If called, it then raises an uncatchable exception. If absolutely necessary, operating system statements can be called using the function modules in the [SXPG framework](ABENABAP_SYSTEM_COMMANDS_APPL_SXPG.html). Selected statements are addressed using logical command names created by the system administrator in the transaction `SM69`. See also [Unwanted Calls of Operating System Statements](ABENABAP_SYSTEM_COMMANDS_APPL_DEPR.html).

-   *Cause:* No authorization to call this C function.
    *Runtime error:*\\ `CALL_C_FUNCTION_NO_AUTHORITY`
-   *Cause:* The system function specified is unknown.
    *Runtime error:*\\ `CALL_C_FUNCTION_NOT_FOUND`
-   *Cause:* The system function `SYSTEM` is disabled.
    *Runtime error:*\\ `CALL_SYSTEM_DISABLED`

DATA dbserver TYPE c LENGTH 255. \\nCALL 'C\_SAPGPARAM' ID 'NAME' FIELD 'SAPDBHOST' \\n ID 'VALUE' FIELD dbserver. abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_system\_commands\_appl.html abenabap\_system\_commands\_appl\_depr.html