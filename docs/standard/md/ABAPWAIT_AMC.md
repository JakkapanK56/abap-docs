---
title: "ABAPWAIT_AMC"
description: |
  ABAPWAIT_AMC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWAIT_AMC.htm"
abapFile: "ABAPWAIT_AMC.html"
keywords: ["update", "do", "if", "method", "data", "ABAPWAIT", "AMC"]
---

[Short Reference](ABAPWAIT_SHORTREF.html)

``WAIT FOR MESSAGING CHANNELS           [[`PUSH CHANNELS`](ABAPWAIT_APC.html)]\           [[`ASYNCHRONOUS TASKS`](ABAPWAIT_ARFC.html)]\           UNTIL [`log_exp`](ABENLOGEXP.html)\ [UP TO sec SECONDS].``

[1. `... PUSH CHANNELS`](#ABAP_ADDITION_1@3@)

[2. `... ASYNCHRONOUS TASKS`](#ABAP_ADDITION_2@3@)

[3. `... UP TO sec SECONDS`](#ABAP_ADDITION_3@3@)

This variant of the statement `WAIT` can be used only in receiver programs of [ABAP Messaging Channels](ABENAMC.html). Any [logical expression](ABENLOGICAL_EXPRESSION_GLOSRY.html) can be specified for [`log_exp`](ABENLOGEXP.html) after `UNTIL`.

If the statement `WAIT` interrupts the program, the [work process](ABENWORK_PROCESS_GLOSRY.html) is changed, and a [database commit](ABENDATABASE_COMMIT_GLOSRY.html) is executed, except in [updates](ABENUPDATE_GLOSRY.html). For this reason, `WAIT` must not be used between ABAP SQL statements that open or close a [database cursor](ABENDATABASE_CURSOR_GLOSRY.html).

If the logical expression is false, the running program is stopped in its current state. After a `RECEIVE` method, all data objects that were not changed in the `RECEIVE` method have the same value as when the logical expression was last evaluated. Any methods called by functions within the logical expression are executed again during the next check.

[Receiving AMC Messages](ABENAMC_RECEIVE_ABEXA.html)

If these additions are specified, this variant of the statement `WAIT` is combined with the variants [`WAIT FOR PUSH CHANNELS`](ABAPWAIT_APC.html) or [`WAIT FOR ASYNCHRONOUS TASKS`](ABAPWAIT_ARFC.html). The program flow described in the variants is added to the program flow described above. The `WAIT` statement then also waits for APC messages or for asynchronously called functions to be called and does not just wait for AMC messages.

If `UP TO` is specified, a maximum time `sec` can be specified in seconds and the statement waits for AMC for this time. `sec` expects a data object of the type `f` that must contain a positive number. The unit of the number in `sec` is seconds and the time resolution is one millisecond.

If no AMC message is received within the specified time and its `RECEIVE` method causes the result of the logical expression `log_exp` to be true, `sy-subrc` is set to 8, and the execution of the program is continued with the statement that follows `WAIT`.

-   If the result of `log_exp` is false and a receiver is registered for APC messages, the program waits until an `ON_MESSAGE` method has been executed for a message sent by a sender program and checks the logical expression again:

-   If the new check on the result of the logical expression is true, `sy-subrc` is set to 0 and the execution of the program is continued with the statement that follows `WAIT`.
-   If the new check on the result of the logical expression is false and the `RECEIVE` methods of all previously sent messages have not yet been executed, one of the remaining `RECEIVE` methods must be executed before the program continues.
-   If the new check on the result of the logical expression is false and the `RECEIVE` methods of all previously sent messages were executed, `sy-subrc` is set to 4 and the execution of the program is continued with the statement that follows `WAIT`.

-   If the result of `log_exp` is false and no receiver is registered for AMC messages, the execution of the program is not interrupted, regardless of the result of `log_exp`, and `sy-subrc` is set to the value 4.
-   If the logical expression is true, the execution of the program is not interrupted, regardless of whether a receiver is registered for AMC messages, and `sy-subrc` is set to the value 0.

-   If no receiver is registered for AMC messages, the addition `UP TO sec SECONDS` is ignored.
-   The addition `UP TO sec SECONDS` is ignored with respect to the execution of the `RECEIVE` methods. Their execution duration can be longer than the time span specified.

-   *Cause:* Negative time specified for `sec`.
    *Runtime error:*\\ `WAIT_ILLEGAL_TIME_LIMIT`

`**sy-subrc**` **Meaning** 0 The logical expression `log_exp` is true. 4 The logical expression `log_exp` is false. Also, no receiver is registered for AMC messages in the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html) and no registrations for APC messages or [asynchronous function calls](ABENASYNCHRONOUS_RFC_GLOSRY.html) exist when the additions `PUSH CHANNELS` or `ASYNCHRONOUS TASKS` are used. 8 The logical expression `log_exp` is false and when the addition `UP TO` was specified, the maximum time was exceeded. abenabap.html abenabap\_reference.html abenabap\_channel\_daemon.html abenabap\_channels.html abenamc.html