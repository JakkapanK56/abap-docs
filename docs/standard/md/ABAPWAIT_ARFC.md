---
title: "ABAPWAIT_ARFC"
description: |
  ABAPWAIT_ARFC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWAIT_ARFC.htm"
abapFile: "ABAPWAIT_ARFC.html"
keywords: ["update", "do", "while", "if", "method", "data", "ABAPWAIT", "ARFC"]
---

[Short Reference](ABAPWAIT_SHORTREF.html)

``WAIT FOR ASYNCHRONOUS TASKS           [[`MESSAGING CHANNELS`](ABAPWAIT_AMC.html)]\           [[`PUSH CHANNELS`](ABAPWAIT_APC.html)]\           UNTIL [`log_exp`](ABENLOGEXP.html)\ [UP TO sec SECONDS].``

[1. `... MESSAGING CHANNELS`](#ABAP_ADDITION_1@3@)

[2. `... PUSH CHANNELS`](#ABAP_ADDITION_2@3@)

[3. `... UP TO sec SECONDS`](#ABAP_ADDITION_3@3@)

This variant of the statement `WAIT` is intended only for use after an [asynchronous RFC](ABAPCALL_FUNCTION_STARTING.html) with callback routines. Any [logical expression](ABENLOGICAL_EXPRESSION_GLOSRY.html) can be specified for [`log_exp`](ABENLOGEXP.html) after `UNTIL`.

If the statement `WAIT` interrupts the program, the [work process](ABENWORK_PROCESS_GLOSRY.html) is changed, and a [database commit](ABENDATABASE_COMMIT_GLOSRY.html) is executed, except in [updates](ABENUPDATE_GLOSRY.html). For this reason, `WAIT` must not be used between ABAP SQL statements that open or close a [database cursor](ABENDATABASE_CURSOR_GLOSRY.html).

If these additions are specified, this variant of the statement `WAIT` is combined with the variants [`WAIT FOR MESSAGING CHANNELS`](ABAPWAIT_AMC.html) or [`WAIT FOR PUSH CHANNELS`](ABAPWAIT_APC.html). The program flow described for the variants is added to the program flow described above. The `WAIT` statement then also waits for AMC messages or APC messages to be executed and does not just wait for asynchronously called functions to be executed.

If `UP TO` is specified, a maximum time `sec` can be specified in seconds while the statement waits for asynchronously called functions to be ended. `sec` expects a data object of the type `f` that must contain a positive number. The unit of the number specified in `sec` is seconds and the time resolution is one millisecond.

If none of the asynchronously called functions are ended within the specified time, whose callback routine causes the result of the logical expression `log_exp` to be true, `sy-subrc` is set to 8, and the execution of the program is continued with the statement that follows `WAIT`.

-   If the result of `log_exp` is false and there is an asynchronous function call with a callback routine, the program waits until a [callback routine](ABAPCALL_FUNCTION_STARTING.html) of a function previously called asynchronously has been executed and then checks the logical expression again:

-   If the new check on the result of the logical expression is true, `sy-subrc` is set to 0 and the execution of the program is continued with the statement that follows `WAIT`.
-   If the new check on the result of the logical expression is false and the callback routines of all functions previously called asynchronously have not yet been executed, one of the remaining callback routines must be executed before the program continues.
-   If the new check on the result of the logical expression is false and the callback routines of all functions previously called asynchronously were executed, `sy-subrc` is set to 4 and the execution of the program continues with the statement that follows `WAIT`.

-   If the result of `log_exp` is false and there is no asynchronous function call with a callback routine, the execution of the program is not interrupted, regardless of the result of `log_exp`, and `sy-subrc` is set to the value 4.
-   If the logical expression is true, the execution of the program is not interrupted, regardless of whether there is a function call with a callback routine, and `sy-subrc` is set to the value 0.

-   If the logical expression is false and there is an asynchronous function call with a callback routine, the statement `WAIT FOR` changes the work process and hence executes all callback routines registered up until now.
-   When a program is interrupted, the running program is paused in its current state. After a callback routine, all data objects that were not changed in the callback routine have the same value as when the logical expression was last evaluated. Any functional method calls within the logical expression are executed again during the next check.
-   This statement has an [obsolete short form](ABAPWAIT_OBSOLETE.html) in which `FOR ASYNCHRONOUS TASKS` is not specified.

-   If there are no asynchronous function calls with a callback routine, the addition `UP TO sec SECONDS` is ignored.
-   The addition `UP TO sec SECONDS` is ignored with respect to the execution of the callback routines. The time needed for these routines to execute can be longer than the time specified.
-   If the addition `UP TO sec SECONDS` is used to cancel the wait time, it does not mean that any outstanding callback routines are no longer executed at all. A later change of the work process in the same program can result in the callback routines of the asynchronous functions executed until now being executed. Only the callback routines of those asynchronous functions not ended at the end of the program are not executed.

-   *Cause:* Negative time specified for `sec`.
    *Runtime error:*\\ `WAIT_ILLEGAL_TIME_LIMIT`

`**sy-subrc**` **Meaning** 0 The logical expression `log_exp` is true. 4 The logical expression `log_exp` is false. The current [internal session](ABENINTERNAL_SESSION_GLOSRY.html) also does not contain any asynchronous function calls with callback routines, and no receiver is registered for [AMC](ABENAMC_GLOSRY.html) messages or [APC](ABENAPC_GLOSRY.html) messages for the use of the additions `MESSAGING CHANNELS` or `PUSH CHANNELS`. 8 The logical expression `log_exp` is false and when the addition `UP TO` was specified, the maximum time was exceeded. abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abapcall\_function\_starting.html