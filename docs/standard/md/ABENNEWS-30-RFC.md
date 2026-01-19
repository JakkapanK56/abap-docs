---
title: "ABENNEWS-30-RFC"
description: |
  ABENNEWS-30-RFC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-30-RFC.htm"
abapFile: "ABENNEWS-30-RFC.html"
keywords: ["do", "if", "ABENNEWS", "RFC"]
---

[1\. Transactional RFC](#ABAP_MODIFICATION_1@4@)

[2\. Asynchronous RFC](#ABAP_MODIFICATION_2@4@)

[3\. Authorization Checks when Accessing Function Pools Using RFC](#ABAP_MODIFICATION_3@4@)

`CALL FUNCTION... DESTINATION ...` can now also be called using the addition `IN BACKGROUND TASK`. The calls are collected and executed as a logical unit of work ([LUW](ABENLUW_GLOSRY.html)) on the target host ([destination](ABENRFC_DEST_GLOSRY.html)) at the next `COMMIT WORK`. The current program does not wait for the function modules to finish processing.

Regular [remote function calls](ABENREMOTE_FUNCTION_CALL_GLOSRY.html) (calls using `CALL FUNCTION .... DESTINATION ...`) only enable an ABAP program to communicate with ABAP programs running in the background. This means that a program called in this way cannot interact with the user.

The calling program can be a dialog program and display a [screen](ABENDYNPRO_GLOSRY.html) to the user, however this screen is always inactive.

The following call starts an ABAP function module in a new session for parallel processing:

[`CALL FUNCTION ... STARTING NEW TASK ...`](ABAPCALL_FUNCTION_STARTING.html)

The addition `DESTINATION IN GROUP ...` allows automatic load balancing within a group of application servers.

The addition `DESTINATION dest` enables parallel processing in a remote system.

Unlike in a regular function module call, the caller carries on processing immediately as soon as the function module (either local or remote) has been started (asynchronous call).

The called function module can now, for example, use `CALL SCREEN ...` to display a dynpro and interact with the user.

The statement [`WAIT UNTIL condition [UP TO n SECONDS]`](ABAPWAIT_ARFC.html) makes it possible to wait for the confirmation of an asynchronously called function module (this also requires the addition `PERFORMING form ON END OF TASK`. `WAIT` must be executed in the same [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

If the [profile parameter](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `auth/rfc_authority_check` is set, the system checks authorization against [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html)\\ `S_RFC` for the function pool before calling the function.

abenabap.html abennews.html abennews-30.html