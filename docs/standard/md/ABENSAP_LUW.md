---
title: "If a program is called using"
description: |
  a new SAP LUW(ABENSAP_LUW_GLOSRY.html) opens, but not a new database LUW(ABENDATABASE_LUW_GLOSRY.html). This means that a database rollback(ABENDATABASE_ROLLBACK_GLOSRY.html) in this SAP LUW can roll back all registration entries made by the statements `CALL FUNCTION IN UPDATE TASK`(ABAPCALL
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSAP_LUW.htm"
abapFile: "ABENSAP_LUW.html"
keywords: ["update", "do", "while", "if", "method", "class", "data", "ABENSAP", "LUW"]
---

An application program can be split into multiple program sections, which are processed in sequence using different [work processes](ABENWORK_PROCESS_GLOSRY.html). Each switch of a work process is linked with an implicit [database commit](ABENDATABASE_COMMIT_GLOSRY.html), which means that an application program is not linked with a single [database LUW](ABENDATABASE_LUW_GLOSRY.html) automatically. More specifically, this applies to dialog-oriented applications with classic [dynpros](ABENDYNPRO_GLOSRY.html) in [SAP GUI](ABENSAP_GUI_GLOSRY.html) in which each [dialog step](ABENDIALOG_STEP_GLOSRY.html) is assigned a database LUW.

To ensure the data consistency of application programs that are executed across multiple work processes, the change statements are not executed directly in an [SAP LUW](ABENSAP_LUW_GLOSRY.html). Instead, they are first registered and then executed by a single work process, that is, in a single database LUW.

The following techniques are available for bundling the change statements in a database LUW:

Each opening of a new [internal session](ABENINTERNAL_SESSION_GLOSRY.html), except for the statement [`CALL DIALOG`](ABAPCALL_DIALOG.html), starts a new SAP LUW which can be controlled by the ABAP SQL statements

Each closing of an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) ends the current SAP LUW. If a program is ended or an internal session closed using

and procedures are still registered in the current SAP LUW, the SAP LUW is ended, and the procedures are not called or rolled back. Registered update function modules remain on the database but can no longer be executed.

If a program is called using

a new [SAP LUW](ABENSAP_LUW_GLOSRY.html) opens, but not a new [database LUW](ABENDATABASE_LUW_GLOSRY.html). This means that a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html) in this SAP LUW can roll back all registration entries made by the statements [`CALL FUNCTION IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html) or [`CALL FUNCTION IN BACKGROUND TASK`](ABAPCALL_FUNCTION_BACKGROUND_TASK.html) in the tables `VB...` or `ARFCSSTATE` and `ARFCSDATA`. Under certain circumstances, the statement [`ROLLBACK WORK`](ABAPROLLBACK.html) in the called program can also affect the interrupted SAP LUW. To prevent this, an explicit [database commit](ABENDATABASE_COMMIT_GLOSRY.html) must be executed before the program is called. This problem does not occur in [local updates](ABENLOCAL_UPDATE_GLOSRY.html).

-   **Update** (bundling using function modules)
-   The statement [`CALL FUNCTION ... IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html) is used to register an [update function module](ABENUPDATE_FUNCTION_MODULE_GLOSRY.html) for later execution in an update work process ([synchronous](ABENSYNCHRONOUS_UPDATE_GLOSRY.html) and [asynchronous update](ABENASYNCHRONOUS_UPDATE_GLOSRY.html)) or in the current work process ([local update](ABENLOCAL_UPDATE_GLOSRY.html)). In updates, no [forbidden statements](ABENDB_COMMIT_DURING_UPDATE.html) can be executed and no [authorization checks](ABENAUTHORITY_DURING_UPDATE.html) are performed. Synchronous and asynchronous updates are executed in their own [update sessions](ABENUPDATE_SESSION_GLOSRY.html). Local updates, on the other hand, only open a new [internal session](ABENINTERNAL_SESSION_GLOSRY.html).
-   **Remote function calls** (bundling using function modules)
-   The statement [`CALL FUNCTION ... IN BACKGROUND UNIT`](ABAPCALL_FUNCTION_BACKGROUND_UNIT.html) is used to register a [remote-enabled function module](ABENREMOTE_ENABLED_FM_GLOSRY.html) for later asynchronous execution in the background and through the RFC interface (background RFC).
-   **Bundling using subroutines**
-   The statement [`PERFORM ... ON COMMIT`](ABAPPERFORM_ON_COMMIT.html) is used to register a subroutine for later execution in a different work process.

-   A function module can be specified as either an update function module or as remote-enabled, but not both at the same time. The update is used to realize SAP LUWs within [AS ABAP](ABENAS_ABAP_GLOSRY.html), while the transactional RFC creates LUWs in distributed systems.
-   Bundling is also possible using [transactional RFC (tRFC)](ABENTRFC_2_GLOSRY.html). However, background RFC (bgRFC) is the enhanced successor technology of tRFC, which makes this technology obsolete.

-   [`COMMIT WORK`](ABAPCOMMIT.html)
-   [`ROLLBACK WORK`](ABAPROLLBACK.html)
-   [`SET UPDATE TASK LOCAL`](ABAPSET_UPDATE_TASK_LOCAL.html)

-   The statements `COMMIT WORK` and `ROLLBACK WORK` determine the limits of an SAP LUW. An ABAP program can be divided into any number of SAP LUWs, whereby the end of an ABAP program always ends the last SAP LUW as well. Calling ABAP programs with [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html) or [`SUBMIT ... AND RETURN`](ABAPSUBMIT.html) provides the option of nesting SAP LUWs.
-   The system class `CL_SYSTEM_TRANSACTION_STATE` contains methods that return the status of the current [SAP LUW](ABENSAP_LUW_GLOSRY.html).

-   [`SUBMIT`](ABAPSUBMIT.html) without `AND RETURN` or
-   [`LEAVE TO TRANSACTION`](ABAPLEAVE_TO_TRANSACTION.html)

-   [`SUBMIT`](ABAPSUBMIT.html) with `AND RETURN` or
-   \\ [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html)

abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html