---
title: "ABAPCALL_FUNCTION_STARTING"
description: |
  ABAPCALL_FUNCTION_STARTING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_FUNCTION_STARTING.htm"
abapFile: "ABAPCALL_FUNCTION_STARTING.html"
keywords: ["update", "do", "if", "case", "method", "class", "data", "ABAPCALL", "FUNCTION", "STARTING"]
---

[Short Reference](ABAPCALL_FUNCTION_SHORTREF.html)

`CALL FUNCTION func STARTING NEW TASK task`\\ 
              `[DESTINATION \{dest|\{IN GROUP \{group|DEFAULT\}\}\}]`\\ 
              `[\{CALLING meth\}|\{PERFORMING subr\} ON END OF TASK]`\\ 
              ``[`parameter_list`](ABAPCALL_FUNCTION_STARTING_PARA.html).``

[1. `... DESTINATION IN GROUP \{group|DEFAULT\}`](#ABAP_ADDITION_1@3@)

[2. `... \{CALLING meth\}|\{PERFORMING subr\} ON END OF TASK`](#ABAP_ADDITION_2@3@)

Asynchronous call (aRFC) of a [remote-enabled function module](ABENREMOTE_ENABLED_FM_GLOSRY.html) specified in `func` using the [RFC interface](ABENRFC_INTERFACE_GLOSRY.html). The addition `DESTINATION` is used to specify either a single [destination](ABENRFC_DESTINATION.html) in `dest` or a group of AS instances using `IN GROUP`. The latter supports parallel processing of multiple function modules. The calling program is continued using the statement `CALL FUNCTION`, as soon as the remotely called function has been started in the target system, without waiting for its processing to be finished. `CALLING` and `PERFORMING` can be used to specify callback routines for passing results when the remotely called function is terminated. `func` and `dest` expect character-like data objects.

If the destination is not specified and also not defined in a callback routine using the addition `KEEPING TASK` of the statement [`RECEIVE`](ABAPRECEIVE.html), the destination *NONE* is used implicitly. The asynchronous RFC does not support communication with external systems or programs written in other programming languages.

A character-like data object must be specified for `task`. This object must contain a freely definable task ID with a maximum of 32 digits for the remotely called function module. This task ID is passed to the callback routines to identify the function. Each task ID defines a separate RFC connection with a separate [RFC session](ABENRFC_SESSION_GLOSRY.html).

If a callback routine is specified, it must be ended before another function module is called again with the same task ID and destination. If not, an exception is raised during the call.

**More Information**

For more information about aRFC, see the documentation [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) in SAP Help Portal.

If `IN GROUP` is specified as the [RFC destination](ABENRFC_DEST_GLOSRY.html), this supports parallel execution of multiple function modules on a predefined group of AS instances of the current [AS ABAP](ABENAS_ABAP_GLOSRY.html). This variant of aRFC is also known as parallel remote function call (pRFC).

`group` expects a data object of the type `RZLLI_APCL` from the ABAP Dictionary that is either initial or contains the name of an RFC server group created in transaction `RZ12`. If `DEFAULT` is specified or if `group` is initial, all currently available AS instances of the current AS ABAP are used as the group. Only one RFC server group may be used within a program. The first asynchronous RFC using the addition `IN GROUP` initializes the specified RFC server group. For each asynchronous RFC where the group is specified, the most suitable AS instance is determined automatically, and the called function module is executed on this.

If the function module cannot be executed on any of the AS instances, because not enough resources are available currently, the predefined exception `RESOURCE_FAILURE` is raised, to which, in addition to the other [RFC exceptions](ABENRFC_EXCEPTION.html), a return code can be assigned. If this exception is raised, the addition `MESSAGE` is not allowed.

This addition can be used to specify either a method `meth` or a subroutine `subr` as the callback routine that is registered to be executed after terminating the asynchronously called function module. For `meth` the same specifications are possible as for the general [method call](ABENMETHOD_CALLS.html), in particular dynamic specifications. `subr` expects a statically specified subroutine of the same program.

The method `meth` must be [public](ABENPUBLIC_GLOSRY.html) and can have only one non-optional input parameter `p_task` of type `clike`. The specified [subroutine](ABAPFORM.html)\\ `subr` can have exactly one `USING` parameter of the type `clike`. In the call, the RFC interface fills this parameter with the task identifier of the remotely called function specified in the call in `task`.

In the method `meth` or in the subroutine `subr`, the statement [`RECEIVE`](ABAPRECEIVE.html) must be used to receive the results of the remote function. In the callback routine, no statements can be executed that interrupt the routine or that trigger an implicit [database commit](ABENDATABASE_COMMIT_GLOSRY.html). Any statements used for [list output](ABENCLASSIC_LIST_GLOSRY.html) are not executed. Class-based exceptions can only be handled within the callback routine. There is no location where a class-based exception can be handled outside the callback routine. Therefore, it is not a good idea to propagate a class-based exception from a callback routine using `RAISING` and produces a syntax check warning.

A prerequisite for the execution of a registered callback routine is that the calling program still exists in its [internal session](ABENINTERNAL_SESSION_GLOSRY.html) when the remote function is terminated. It is then executed here at the next change of the [work process](ABENWORK_PROCESS_GLOSRY.html) in a roll-in. If the program was terminated or is located on the stack as part of a [call sequence](ABENCALL_SEQUENCE_GLOSRY.html), the callback routine is not executed.

If multiple callback routines are registered during a program section, they are executed in an undefined order when the work process changes in a roll-in. The statement [`WAIT FOR ASYNCHRONOUS TASKS`](ABAPWAIT_ARFC.html) can be used to stop the program execution until certain or all callback routines have been executed.

-   If a callback routine is specified, it must be ended before another function module is called with the same task ID and destination.
-   A repeatedly called function module with the same task ID and destination uses the same RFC session in which the global data of the associated function pool can be accessed if the connection still exists. This only applies in the following case:

-   If the `PERFORMING` addition or the `CALLING` addition are used and
-   The addition `KEEPING TASK` of the statement [`RECEIVE`](ABAPRECEIVE.html) is specified in the callback routine.

-   In all other cases, a new RFC session is usually opened for function modules called repeatedly. This applies in the following cases:

-   If the task ID or destination is different, even if the connection still exists, and
-   If no callback routine is specified using the `PERFORMING` addition or the `CALLING` addition or if the statement [`RECEIVE`](ABAPRECEIVE.html) is used without the addition `KEEPING TASK` in a callback routine. In these cases, the RFC connection is closed again immediately after the call.

-   As with every RFC, an asynchronous RFC opens a [user session](ABENUSER_SESSION_GLOSRY.html). If a calling program raises multiple consecutive asynchronous RFCs with different destinations or task identifiers or if a connection no longer exists, the called function modules are processed in parallel in different user sessions automatically. This property can be used for the parallel processing of applications. Since the associated management tool can cause resource bottlenecks on both the client and the server, this kind of parallel processing is only recommended using the addition `DESTINATION IN GROUP`.
-   If an asynchronous RFC is executed without a specified destination, the logon data user name, client, and logon language from the calling session are copied to the RFC session implicitly. The [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html) of the calling session is used for the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) instead of the logon language of the session. The text environment language can be set using the statement [`SET LOCALE LANGUAGE`](ABAPSET_LOCALE.html).
-   If a function module is started consecutively multiple times using asynchronous RFC, the order of execution is not fixed;. Instead, it depends in the system availability.
-   When dynpros are called in aRFC processing, additional [ABAP sessions](ABENABAP_SESSION_GLOSRY.html) are opened in the RFC client (see also [`RFC` Dialog Interactions](ABENRFC_DIALOG.html). The maximum number of ABAP sessions cannot be exceeded, otherwise an error message is displayed. The maximum number of sessions is defined in the profile parameter `rdisp/max_alt_modes` and cannot be greater than 16.
-   Asynchronous RFC triggers a [database commit](ABENDATABASE_COMMIT_GLOSRY.html) in the calling program with the following exception: No database commit is triggered by an aRFC during [update](ABENUPDATE_GLOSRY.html) processing. aRFC is not [forbidden during updates](ABENDB_COMMIT_DURING_UPDATE.html).
-   Calls using `STARTING NEW TASK` are always executed using the `RFC` interface and a destination specified as `dest` is always interpreted as such. This is why, unlike in [synchronous RFC](ABAPCALL_FUNCTION_DESTINATION.html), neither an initial string nor a text field containing only blanks can be specified for `dest`.
-   The task ID passed as `task` does not need to be unique for each call. Unique tasks IDs can, however, help to identify calls within a callback routine.
-   If by mistake the statement [`RECEIVE`](ABAPRECEIVE.html) is not used in a callback routine specified using the `PERFORMING` addition or the `CALLING` addition, the connection is persisted as when `RECEIVE` is specified using the addition `KEEPING TASK`.

-   The parallel processing of function modules with the addition `IN GROUP` makes optimal use of the available resources and is preferable to self-programmed parallel processing with explicitly specified destinations.
-   An AS instance that is used as part of an RFC server group for parallel processing, must have at least three dialog work processes, of which one is currently free. Other resources, such as requests in the queue, the number of system messages and so on, are also respected and must not exceed certain [threshold values](ABENAPP_SERVER_RESOURCES.html).
-   To ensure that only those AS instances that have enough resources are accessed, it is preferable work with explicitly defined RFC server groups instead of working with the addition `DEFAULT`.
-   The function modules of the function pool `SPBT` provide service functions for parallel processing, for example, initialization of RFC server groups, determination of the used destination or temporary removal of an AS instance from an RFC group.

-   If no `RECEIVE` statement is executed in the callback routine to receive the result of the remote function, the connection is preserved and implicitly behaves like the statement [`RECEIVE`](ABAPRECEIVE.html) with the addition `KEEPING TASK`. This implicit behavior is usually unwanted and a callback routine without a `RECEIVE` statement must be viewed as a programming error.
-   The event for executing the callback routines can be programmed explicitly or occur implicitly:

-   The statement [`WAIT FOR ASYNCHRONOUS TASKS`](ABAPWAIT_ARFC.html) is used for explicit programming. Depending on a condition, this statement changes the work process and hence executes the callback routines registered up to this time. It waits for as many registered routines to end until the condition is met, whereby the maximum wait time can be restricted. Explicit programming is always recommended whenever the results of the remote function are required in the current program.
-   If the results of the remote function are not required in the current program, the time at which the callback routines are executed can also be determined by an implicit change of the work process, for example, at the end of a [dialog step](ABENDIALOG_STEP_GLOSRY.html). This can be useful, for example, in `GUI` scenarios in which the use of `WAIT` is not wanted. In this case, it must be ensured that the work process is changed before the program is ended. There is also a risk that, if the work process is changed implicitly, not all callback routines are registered in time.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html