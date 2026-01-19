---
title: "ABAPRECEIVE"
description: |
  ABAPRECEIVE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPRECEIVE.htm"
abapFile: "ABAPRECEIVE.html"
keywords: ["update", "do", "if", "data", "ABAPRECEIVE"]
---

[Short Reference](ABAPRECEIVE_SHORTREF.html)

`RECEIVE RESULTS FROM FUNCTION func`\\ 
                `[KEEPING TASK]`\\ 
                ``[`parameter_list`](ABAPRECEIVE_PARA.html).``

[`... KEEPING TASK`](#ABAP_ONE_ADD@1@)

This statement must be used in a callback routine specified in an [asynchronous RFC](ABAPCALL_FUNCTION_STARTING.html) to receive output parameters of an asynchronously called function `func` in the parameter list [`parameter_list`](ABAPRECEIVE_PARA.html) and to handle exceptions.

The addition `KEEPING TASK` retains the asynchronous RFC connection, and therefore also the [`RFC` session](ABENRFC_SESSION_GLOSRY.html) of the called function module. When a new call is made with the same task ID, the same global data of the function pool is addressed. A destination specified directly using `DESTINATION` can be specified again but does not have to be. `DESTINATION IN GROUP` cannot be used to specify a group if a new call is performed. Without the addition `KEEPING TASK`, an asynchronous RFC connection is ended after the remote function is executed or after the results have been transferred.

The addition `KEEPING TASK` should be used only if the RFC session of the called function module is required for further function calls.

-   Callback routines without a `RECEIVE` statement are possible in the syntax but are not desired and are to be viewed as programming errors. Callback routines without a `RECEIVE` statement behave implicitly in the same way as when the addition `KEEPING TASK` is specified for `RECEIVE`.
-   Before the statement `RECEIVE` is executed in a callback routine, the current work process is interrupted in order to receive the data. If this has not already been done by another action, such as by using the statement [`WAIT FOR ASYNCHRONOUS TASKS`](ABAPWAIT_ARFC.html), the callback routine is executed after an implicit switch of the work process. This results in a [database commit](ABENDATABASE_COMMIT_GLOSRY.html) except during the [update](ABENUPDATE_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abapcall\_function\_starting.html