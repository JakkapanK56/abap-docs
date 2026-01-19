---
title: "ABAPCOMMIT"
description: |
  ABAPCOMMIT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCOMMIT.htm"
abapFile: "ABAPCOMMIT.html"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "case", "catch", "class", "data", "ABAPCOMMIT"]
---

[Short Reference](ABAPCOMMIT_SHORTREF.html)

\\ `COMMIT WORK [AND WAIT].`

The statement `COMMIT WORK` closes the current [SAP LUW](ABENSAP_LUW_GLOSRY.html) and opens a new one. All change requests from the current SAP LUW are committed. To do this, `COMMIT WORK` performs the following actions:

Furthermore, the `COMMIT WORK` raises the event `TRANSACTION_FINISHED` from the system class `CL_SYSTEM_TRANSACTION_STATE`, where the parameter `KIND` has the value of the constant `CL_SYSTEM_TRANSACTION_STATE=>COMMIT_WORK`. The time when this event is raised is described in the documentation for the event in the class:

Resources for preparation work can be cleaned up in the event handlers for this event before the update is performed. However, this is no guarantee that the update has not already been performed.

If the statement `COMMIT WORK` is executed in programs called in a special way, the following special features apply:

The statement `COMMIT WORK` always sets `sy-subrc` to 0 if the addition `AND WAIT` is not specified.

Registering of various [update function modules](ABENUPDATE_FUNCTION_MODULE_GLOSRY.html) using [`CALL FUNCTION IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html) and triggering a [synchronous update](ABENSYNCHRONOUS_UPDATE_GLOSRY.html) using `COMMIT WORK AND WAIT`.

-   In [synchronous updates](ABENSYNCHRONOUS_UPDATE_GLOSRY.html), [local updates](ABENLOCAL_UPDATE_GLOSRY.html), and outside updates, `TRANSACTION_FINISHED` is raised by `COMMIT WORK` once processing is finished.
-   In [asynchronous updates](ABENASYNCHRONOUS_UPDATE_GLOSRY.html), `TRANSACTION_FINISHED` is raised by the statement `COMMIT WORK` when the update is initiated.

-   In a program executed using [batch input](ABENBATCH_INPUT_GLOSRY.html) or if the program was called using the statement [`CALL TRANSACTION USING`](ABAPCALL_TRANSACTION_USING.html), `COMMIT WORK` terminates batch input processing by default. This setting can be overwritten in the statement `CALL TRANSACTION USING` by using the component `RACOMMIT` of the structure `CTU_PARAMS`, passed to the statement `OPTIONS FROM`.
-   In a program called using [`CALL DIALOG`](ABAPCALL_DIALOG.html), `COMMIT WORK` does not trigger the processing of subroutines or function modules registered using [`PERFORM ON COMMIT`](ABAPPERFORM_ON_COMMIT.html) and [`CALL FUNCTION ... IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html) and hence does not close the current SAP LUW. At the earliest, the SAP LUW can be closed by the statement `COMMIT WORK` in the calling program. Only those [background remote function calls](ABENBG_REMOTE_FUNCTION_GLOSRY.html) or obsolete [transactional remote function calls](ABENTRFC_1_GLOSRY.html) registered using [`CALL FUNCTION ... IN BACKGROUND UNIT`](ABAPCALL_FUNCTION_BACKGROUND_UNIT.html) or [`CALL FUNCTION ... IN BACKGROUND TASK`](ABAPCALL_FUNCTION_BACKGROUND_TASK.html) (obsolete) within a [dialog module](ABENDIALOG_MODULE_OBJECT_GLOSRY.html) are actually started here using `COMMIT WORK`. Any [bgRFCs](ABENBGRFC_GLOSRY.html), [tRFCs](ABENTRFC_2_GLOSRY.html), or [qRFCs](ABENQRFC_GLOSRY.html) registered in a dialog module and not started there using `COMMIT WORK` are not executed.
-   The statement `COMMIT WORK` must not be executed in updates or in the execution of subroutines registered using `PERFORM ... ON \{COMMIT|ROLLBACK\}`.
-   The statement `COMMIT WORK` must not be executed in units or LUWs that are managed by background RFC calls ([bgRFC](ABENBGRFC_GLOSRY.html) and the (obsolete) [tRFC](ABENTRFC_2_GLOSRY.html), [qRFC](ABENQRFC_GLOSRY.html)).

-   An SAP LUW not closed by `COMMIT WORK` but by ending the current program or closing the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) is ignored by the registered procedures. Registered update function modules remain on the database but can no longer be executed.
-   `COMMIT WORK` empties [global temporary tables](ABENDDIC_DATABASE_TABLES_GTT.html) of all currently open [database connections](ABENDATABASE_CONNECTION_GLOSRY.html) and prevents the runtime error `COMMIT_GTT_ERROR` in the case of implicit [database commits](ABENDB_COMMIT.html).
-   The statement `COMMIT WORK` closes all [database cursors](ABENDATABASE_CURSOR_GLOSRY.html). ABAP SQL statements that access a database cursor later ([`SELECT`](ABAPSELECT.html) loop) raise a uncatchable exception.
-   The ABAP SQL statement [`FETCH`](ABAPFETCH.html) is also an example for the latter.
-   If the registration of subroutines with [`PERFORM ... ON COMMIT`](ABAPPERFORM_ON_COMMIT.html) is combined with the registration of update function modules with [`CALL FUNCTION ... IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html), special care has to be taken regarding the [database LUWs](ABENDB_TRANSACTION.html) involved. Especially for [asynchronous update](ABENASYNCHRONOUS_UPDATE_GLOSRY.html), procedures that are registered outside update processing are executed in different work processes and therefore in different database LUWs. The changes in the database LUW of the subroutine can be committed before the update function modules are executed and a database rollback during an asynchronous update does not roll back these changes.
-   The statement [`PERFORM ... ON COMMIT`](ABAPPERFORM_ON_COMMIT.html) can be executed in updates. The registered subprogram must be defined in the current function pool and is then executed at the end of the current update.
-   `COMMIT WORK` also triggers a database commit in programs called using [`CALL DIALOG`](ABAPCALL_DIALOG.html).
-   If a runtime error occurs in an [update](ABENUPDATE_GLOSRY.html) triggered by `COMMIT`, the update work process executes a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html), logs this in the corresponding DDIC database tables, and notifies the user whose program created the entries by SAPMail. After the cause of the error has been resolved, the canceled entries can be updated again.

-   [SAP LUW, `UPDATE TASK`](ABENSAP_LUW_UPDATE_TASK_ABEXA.html)
-   [SAP LUW, `ON COMMIT`](ABENSAP_LUW_ON_COMMIT_ABEXA.html)
-   The example [Demonstrating the SAP LUW](ABENSAP_LUW_BUNDL_TECH_ABEXA.html) demonstrates the SAP LUW, covering the `COMMIT WORK` and `COMMIT WORK AND WAIT` statements.

-   *Cause:*\\ `COMMIT WORK` is not allowed within a `FORM` called using [`PERFORM ... ON COMMIT`](ABAPPERFORM.html).
    *Runtime error:*\\ `COMMIT_IN_PERFORM_ON_COMMIT`
-   *Cause:*\\ `COMMIT WORK` is not allowed within the update.
    *Runtime error:*\\ `COMMIT_IN_POSTING`

1.  It executes all subroutines registered using [`PERFORM ON COMMIT`](ABAPPERFORM_ON_COMMIT.html) in the current work process.
2.  The order is based on the order of registration or according to the priority specified using the addition `LEVEL`. The following statements are not allowed to be executed in a subroutine of this type:
3.  [`PERFORM ... ON COMMIT|ROLLBACK`](ABAPPERFORM_ON_COMMIT.html)\\
    `COMMIT WORK`\\
    [`ROLLBACK WORK`](ABAPROLLBACK.html)
4.  The statement [`CALL FUNCTION ... IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html) can be executed.
5.  It raises an internal event for the persistence service of the [Object Services](ABENOBJECT_SERVICES_GLOSRY.html).
6.  If event handlers are registered by the persistence service, they collect the changes to the objects managed by the service and use [`CALL FUNCTION ... IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html) and pass them to a special update function module, registered as the final update module.
7.  It triggers the processing of all update function modules registered using [`CALL FUNCTION ... IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html) in the update work process or, for [local updates](ABENLOCAL_UPDATE_GLOSRY.html), in the current work process as well.
8.  All high-priority (`VB1`) update function modules are executed in the order of their registration and in a common [database LUW](ABENDATABASE_LUW_GLOSRY.html). If the addition `AND WAIT` is not specified, the program does not wait in non-local updates until the update work process has executed it (asynchronous updates), and is resumed immediately after `COMMIT WORK` instead. However, if the addition `AND WAIT` is specified, program processing after `COMMIT WORK` will not continue until the update work process has executed the high-priority update function modules (synchronous updating).
9.  When all high-priority update function modules are completed successfully, the statement executes the low-priority (`VB2`) update function modules in the order of registration in a common database LUW in the update work process.
10.  No [database commits](ABENDATABASE_COMMIT_GLOSRY.html) and no [database rollbacks](ABENDATABASE_ROLLBACK_GLOSRY.html) can occur, and the update control cannot be modified in the processing of an update function module triggered using `COMMIT WORK` is being processed. Any statements that would produce this situation are [forbidden statements in updates](ABENDB_COMMIT_DURING_UPDATE.html) and always produce runtime errors. As before, no [authorization checks](ABENAUTHORITY_DURING_UPDATE.html) can be made.
11.  After the execution of high-priority update function modules, the function modules registered using [`CALL FUNCTION ... IN BACKGROUND UNIT`](ABAPCALL_FUNCTION_BACKGROUND_UNIT.html) and [`CALL FUNCTION ... IN BACKGROUND TASK`](ABAPCALL_FUNCTION_BACKGROUND_TASK.html) (obsolete) are themselves executed in a single database LUW per [RFC destination](ABENRFC_DEST_GLOSRY.html).
12.  It handles all [SAP locks](ABENSAP_LOCK_GLOSRY.html) set in the current program in accordance with the value of the formal parameter `_SCOPE` of the corresponding lock function modules.
13.  It triggers a [database commit](ABENDATABASE_COMMIT_GLOSRY.html) on all currently open [database connections](ABENDATABASE_CONNECTION_GLOSRY.html), which also terminates the current [database LUW](ABENDATABASE_LUW_GLOSRY.html) and closes all [database cursors](ABENDATABASE_CURSOR_GLOSRY.html).

CALL FUNCTION 'DEMO\_UPDATE\_DELETE' IN UPDATE TASK. \\n\\ \\n... \\n\\ \\nFINAL(values) = VALUE demo\_update\_tab( \\n ( id = 'X' col1 = 100 col2 = 200 col3 = 300 col4 = 400 ) \\n ( id = 'Y' col1 = 110 col2 = 210 col3 = 310 col4 = 410 ) \\n ( id = 'Z' col1 = 120 col2 = 220 col3 = 320 col4 = 420 ) ). \\n\\ \\nCALL FUNCTION 'DEMO\_UPDATE\_INSERT' IN UPDATE TASK \\n EXPORTING \\n values = values. \\n\\ \\n... \\n\\ \\nCOMMIT WORK AND WAIT. `**sy-subrc**` **Meaning** 0 The addition `AND WAIT` was specified, and the update of the update function modules was successful. 4 The addition `AND WAIT` was specified, and the update of the update function modules was not successful. abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abensap\_luw.html