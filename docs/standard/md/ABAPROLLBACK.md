---
title: "ABAPROLLBACK"
description: |
  ABAPROLLBACK - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPROLLBACK.htm"
abapFile: "ABAPROLLBACK.html"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "case", "class", "data", "ABAPROLLBACK"]
---

[Short Reference](ABAPROLLBACK_SHORTREF.html)

`ROLLBACK WORK.`

The statement `ROLLBACK WORK` closes the current [SAP LUW](ABENSAP_LUW_GLOSRY.html) and opens a new one. This cancels all changes requests made by the current SAP LUW. To do this, `ROLLBACK WORK` performs the following actions:

After the statement `ROLLBACK WORK` is completed, the event `TRANSACTION_FINISHED` from the system class `CL_SYSTEM_TRANSACTION_STATE` is raised. Here, the parameter `KIND` has the value of the constant `CL_SYSTEM_TRANSACTION_STATE=>ROLLBACK_WORK`.

The statement `ROLLBACK WORK` deletes the registration of [update function modules](ABENUPDATE_FUNCTION_MODULE_GLOSRY.html) using the statements [`CALL FUNCTION IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html) and calls the subroutine `cleanup`.

The example [Demonstrating the SAP LUW](ABENSAP_LUW_BUNDL_TECH_ABEXA.html) demonstrates the SAP LUW, covering the `ROLLBACK WORK` statement.

-   After a `ROLLBACK` statement is executed, `sy-subrc` is always zero. It is not necessary to query whether `sy-subrc` is not equal to zero after `ROLLBACK`.
-   The `ROLLBACK WORK` statement is executed implicitly if a [message](ABENMESSAGE_GLOSRY.html) of type A is handled by the addition `error_message` when calling a function module with `CALL FUNCTION`.
-   `ROLLBACK WORK` empties [global temporary tables](ABENDDIC_DATABASE_TABLES_GTT.html) of all currently open [database connections](ABENDATABASE_CONNECTION_GLOSRY.html) and prevents the runtime error `COMMIT_GTT_ERROR` in the case of implicit [database commits](ABENDB_COMMIT.html).
-   All open [database cursors](ABENDATABASE_CURSOR_GLOSRY.html) in the database connections concerned are closed during a `ROLLBACK`, which means that a runtime error occurs when the system attempts to continue a `SELECT` loop after a `ROLLBACK`. It must therefore be ensured that cursors that are still open are no longer used after the `ROLLBACK`.
-   For the same reason, a [`FETCH`](ABAPFETCH.html) after a `ROLLBACK` on the cursor that is now closed also causes a runtime error.
-   `ROLLBACK` must not be used during [updates](ABENUPDATE_GLOSRY.html) (`CALL FUNCTION ... IN UPDATE TASK`) or when subroutines registered using `PERFORM ... ON COMMIT` or `PERFORM ... ON ROLLBACK` are being executed.
-   The statement `ROLLBACK WORK` must not be executed in units or LUWs that are managed by background RFC calls ([bgRFC](ABENBGRFC_GLOSRY.html) and the obsolete [tRFC](ABENTRFC_2_GLOSRY.html) and [qRFC](ABENQRFC_GLOSRY.html)).

-   *Cause:*\\ `ROLLBACK WORK` is not allowed within a `FORM` that is called using [`PERFORM ... ON COMMIT`](ABAPPERFORM.html) or [`PERFORM ... ON ROLLBACK`](ABAPPERFORM.html).
    *Runtime error:*\\ `ROLLBACK_IN_PERFORM_ON_COMMIT`
-   *Cause:*\\ `ROLLBACK WORK` is not allowed within updates.
    *Runtime error:*\\ `ROLLBACK_IN_POSTING`

1.  Executes all subroutines registered using [`PERFORM ON ROLLBACK`](ABAPPERFORM_ON_COMMIT.html).
2.  Deletes the registrations of all subroutines registered using [`PERFORM ON COMMIT`](ABAPPERFORM_ON_COMMIT.html).
3.  Raises an internal event in the [Object Services](ABENOBJECT_SERVICES_GLOSRY.html) that ensures that the attributes of persistent objects are initialized.
4.  Deletes all update function modules registered with [`CALL FUNCTION ... IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html) from the DDIC database tables `VB...` and deletes all Remote Function Calls registered with [`CALL FUNCTION ... IN BACKGROUND UNIT`](ABAPCALL_FUNCTION_BACKGROUND_UNIT.html) or [`CALL FUNCTION ... IN BACKGROUND TASK`](ABAPCALL_FUNCTION_BACKGROUND_TASK.html) (obsolete) from the DDIC database tables `ARFCSSTATE` and `ARFCSDATA`.
5.  Removes all [SAP locks](ABENSAP_LOCK_GLOSRY.html) set in the current program for which the formal parameter `_SCOPE` of the lock function module was set to the value 2.
6.  Triggers a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html) on all currently open [database connections](ABENDATABASE_CONNECTION_GLOSRY.html), which also ends the current [database LUW](ABENDATABASE_LUW_GLOSRY.html).

PERFORM cleanup ON ROLLBACK. \\n\\ \\n... \\n\\ \\nCALL FUNCTION 'DEMO\_UPDATE\_DELETE' IN UPDATE TASK. \\n\\ \\n... \\n\\ \\nFINAL(values) = VALUE demo\_update\_tab( \\n ( id = 'X' col1 = 100 col2 = 200 col3 = 300 col4 = 400 ) \\n ( id = 'Y' col1 = 110 col2 = 210 col3 = 310 col4 = 410 ) \\n ( id = 'Z' col1 = 120 col2 = 220 col3 = 320 col4 = 420 ) ). \\n\\ \\nCALL FUNCTION 'DEMO\_UPDATE\_INSERT' IN UPDATE TASK \\n EXPORTING \\n values = values. \\n\\ \\n... \\n\\ \\nROLLBACK WORK. \\n\\ \\n... \\n\\ \\nFORM cleanup. \\n ... \\nENDFORM. abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abensap\_luw.html