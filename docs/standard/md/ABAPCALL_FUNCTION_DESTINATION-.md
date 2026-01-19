---
title: "Synchronous RFC"
description: |
  Asynchronous RFC(ABAPCALL_FUNCTION_STARTING.html) Background RFC(ABAPCALL_FUNCTION_BACKGROUND_UNIT.html) -   Background RFC (bgRFC)(ABENBG_REMOTE_FUNCTION_GLOSRY.html) is the enhanced successor technology of transactional RFC (tRFC)(ABAPCALL_FUNCTION_BACKGROUND_TASK.html) and makes this tech
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_FUNCTION_DESTINATION-.htm"
abapFile: "ABAPCALL_FUNCTION_DESTINATION-.html"
keywords: ["do", "if", "try", "class", "data", "internal-table", "ABAPCALL", "FUNCTION", "DESTINATION"]
---

[Short Reference](ABAPCALL_FUNCTION_SHORTREF.html)

1\. `CALL FUNCTION func [DESTINATION](ABAPCALL_FUNCTION_DESTINATION.html) dest [parameter_list](ABAPCALL_FUNCTION_DESTINATION_PARA.html). | CALL FUNCTION func [IN REMOTE SESSION](ABAPCALL_FUNCTION_REMOTE_SESSION.html) session [parameter_list.](ABAPCALL_FUNCTION_REMOTE_PARA.html)`

2\. `CALL FUNCTION func STARTING NEW TASK task`\\
`[DESTINATION \{dest|\{IN GROUP \{group|DEFAULT\}\}\}]`\\
`[\{PERFORMING subr\}|\{CALLING meth\} ON END OF TASK]`\\
`[parameter_list](ABAPCALL_FUNCTION_STARTING_PARA.html).`

3\. `CALL FUNCTION func IN BACKGROUND UNIT`\\
`[parameter_list](ABAPCALL_FUNCTION_BACKGROUND_PARA.html).`

A function module or a function is called using the RFC interface. The same applies to the specification `func` as to [general function module calls](ABAPCALL_FUNCTION_GENERAL.html).

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, this a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class `CL_ABAP_DYN_PRG`, for example, can be used to do this.

Synchronous RFC

[Asynchronous RFC](ABAPCALL_FUNCTION_STARTING.html)

[Background RFC](ABAPCALL_FUNCTION_BACKGROUND_UNIT.html)

-   [Background RFC (bgRFC)](ABENBG_REMOTE_FUNCTION_GLOSRY.html) is the enhanced successor technology of [transactional RFC (tRFC)](ABAPCALL_FUNCTION_BACKGROUND_TASK.html) and makes this technology [obsolete](ABENRFC_OBSOLETE.html). It is strongly recommended that bgRFC is used instead of tRFC.
-   For a more detailed description of exceptions that can be raised in RFC, see the documentation [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) in SAP Help Portal.

-   *Cause:* The called function module is not released for RFC.
    *Runtime error:*\\ `CALL_BACK_ENTRY_NOT_FOUND`
-   *Cause:* The destination type is not allowed.
    *Runtime error:*\\ `CALL_FUNCTION_DEST_TYPE`
-   *Cause:* The current function was not called remotely.
    *Runtime error:*\\ `CALL_FUNCTION_NO_SENDER`
-   *Cause:* Missing communication type (I for internal connection, 3 for AS ABAP) when performing an asynchronous RFC
    *Runtime error:*\\ `CALL_FUNCTION_DESTINATION_NO_T`
-   *Cause:* The specified destination does not exist.
    *Runtime error:*\\ `CALL_FUNCTION_NO_DEST`
-   *Cause:* The specified destination (in load balancing mode) does not exist.
    *Runtime error:*\\ `CALL_FUNCTION_NO_LB_DEST`
-   *Cause:* Data received for an unknown CPI-C connection.
    *Runtime error:*\\ `CALL_FUNCTION_NO_RECEIVER`
-   *Cause:* The function module to be called is not flagged as *remotely* callable.
    *Runtime error:*\\ `CALL_FUNCTION_NOT_REMOTE`
-   *Cause:* An error occurred in RFC that has been logged in the calling system.
    *Runtime error:*\\ `CALL_FUNCTION_REMOTE_ERROR`
-   *Cause:* The user logon data is incomplete.
    *Runtime error:*\\ `CALL_FUNCTION_SIGNON_INCOMPL`
-   *Cause:* RFC from external program does not have a valid user name
    *Runtime error:*\\ `CALL_FUNCTION_SIGNON_INVALID`
-   *Cause:* Logon attempt to target system without valid user name.
    *Runtime error:*\\ `CALL_FUNCTION_SIGNON_REJECTED`
-   The error code may have any of the following meanings: \\n1) Wrong password or invalid user name \\n2) User locked \\n3) Too many login attempts \\n4) Error in the authorization buffer (internal error) \\n5) No external user check \\n6) Invalid user type \\n7) Validity period of the user exceeded
-   *Cause:* No authorization to log on as trusted system.
    *Runtime error:*\\ `CALL_FUNCTION_SINGLE_LOGIN_REJ`
-   The error code may have any of the following meanings:
    0) Incorrect logon data for a valid security ID.
    1) Calling system is not a Trusted System or security ID is invalid.
    2) Either user does not have RFC authorization (authorization object `S_RFCACL`), or a logon was performed using one of the protected users `'DDIC'` or `'SAP*'`.
    3) Time stamp of the logon data is invalid.
-   *Cause:* RFC without valid user name only allowed when calling a system function module. The meaning of the error codes is the same as for `CALL_FUNCTION_SINGLE_LOGIN_REJ`.
    *Runtime error:*\\ `CALL_FUNCTION_SYSCALL_ONLY`
-   *Cause:* Data error (information in internal table) in a remote function call.
    *Runtime error:*\\ `CALL_FUNCTION_TABINFO`
-   *Cause:* No memory available for table to be imported.
    *Runtime error:*\\ `CALL_FUNCTION_TABLE_NO_MEMORY`
-   *Cause:* For asynchronous RFC only: The task name is already being used.
    *Runtime error:*\\ `CALL_FUNCTION_TASK_IN_USE`
-   *Cause:* For asynchronous RFC only: The specified task is already open.
    *Runtime error:*\\ `CALL_FUNCTION_TASK_YET_OPEN`
-   *Cause:* No RFC authorization.
    *Runtime error:*\\ `CALL_FUNCTION_NO_AUTH`
-   *Cause:* No RFC authorization for user.
    *Runtime error:*\\ `RFC_NO_AUTHORITY`
-   *Cause:* Destination *BACK* is not allowed in the current system.
    *Runtime error:*\\ `CALL_FUNCTION_BACK_REJECTED`\\
    *Runtime error:*\\ `CALL_XMLRFC_BACK_REJECTED`
-   *Cause:* Type conflict when passing a table.
    *Runtime error:*\\ `CALL_FUNCTION_CONFLICT_TAB_TYP`
-   *Cause:* No memory available for creating a local internal table.
    *Runtime error:*\\ `CALL_FUNCTION_CREATE_TABLE`
-   *Cause:* Type conflict when passing a structure.
    *Runtime error:*\\ `CALL_FUNCTION_UC_STRUCT`
-   *Cause:* Invalid data type when passing parameters.
    *Runtime error:*\\ `CALL_FUNCTION_WRONG_VALUE_LENG`
-   *Cause:* Invalid `LEAVE` statement on RFC server
    *Runtime error:*\\ `CALL_FUNCTION_ILLEGAL_LEAVE`
-   *Cause:* Incorrect length when passing a parameter of type `decfloat16` or `decfloat32`.
    *Runtime error:*\\ `CALL_FUNCTION_ILL_DECFLOAT_LEN`

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html