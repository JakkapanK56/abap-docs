---
title: "ABAPSET_UPDATE_TASK_LOCAL"
description: |
  ABAPSET_UPDATE_TASK_LOCAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_UPDATE_TASK_LOCAL.htm"
abapFile: "ABAPSET_UPDATE_TASK_LOCAL.html"
keywords: ["update", "do", "while", "if", "data", "ABAPSET", "UPDATE", "TASK", "LOCAL"]
---

[Short Reference](ABAPSET_UPDATE_TASK_SHORTREF.html)\\ \\n

`SET UPDATE TASK LOCAL.`\\ 

This statement switches the [local update](ABENLOCAL_UPDATE_GLOSRY.html) on. In the local update, high priority update function modules that are registered in the current [SAP LUW](ABENSAP_LUW_GLOSRY.html) using [`CALL FUNCTION ... IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html) are stored in the [ABAP memory](ABENABAP_MEMORY_GLOSRY.html) instead of the `VB...` DDIC database tables. They are executed immediately in the current process and not in the update work process within the current [database LUW](ABENDATABASE_LUW_GLOSRY.html), when the statement [`COMMIT WORK`](ABAPCOMMIT.html) is executed. This statement has no effect on low-priority update function modules.

At the beginning of every SAP LUW, the local update function is deactivated. If required, it must be activated again before the first update function module is registered.

The local update is executed in a separate [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of the current [ABAP session](ABENABAP_SESSION_GLOSRY.html) and not in a dedicated [update session](ABENUPDATE_SESSION_GLOSRY.html). The internal session of the local update is not the same as the internal session of the calling program.

Activation of the [local update](ABENLOCAL_UPDATE_GLOSRY.html) for the subsequent registrations of [update function modules](ABENUPDATE_FUNCTION_MODULE_GLOSRY.html) using the statement [`CALL FUNCTION IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html).

-   The local update function performs a synchronous update after the statement `COMMIT WORK`, independently of the addition `AND WAIT`.
-   If a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html) occurs during the local update, all previous change requests are affected.
-   The [profile parameter](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `abap/force_local_update_task` can be used to set the local update centrally for an AS ABAP. This should be done with great care, however, and while respecting all updates that can take place in the system. If not, the behavior of programs not intended for local updates may change. The performance of database locks may also be affected negatively.
-   A update function module that is called in local update mode from within its own function group does not have access to the global data of the calling program because the function group is loaded anew into another internal session.

-   [SAP LUW, `UPDATE TASK`](ABENSAP_LUW_UPDATE_TASK_ABEXA.html)
-   The example [Demonstrating the SAP LUW](ABENSAP_LUW_BUNDL_TECH_ABEXA.html) demonstrates the SAP LUW, covering the `SET UPDATE TASK LOCAL` statement.

SET UPDATE TASK LOCAL. \\n\\ \\n... \\n\\ \\nFINAL(values) = VALUE demo\_update\_tab( \\n ( id = 'Y' col1 = 1111 col2 = 2111 col3 = 3111 col4 = 4111 ) ). \\n\\ \\nCALL FUNCTION 'DEMO\_UPDATE\_UPDATE' IN UPDATE TASK \\n EXPORTING \\n values = values. \\n\\ \\n... \\n\\ \\nCOMMIT WORK. `**sy-subrc**` **Meaning** 0 The local update function is activated. 1 The local update function has not been activated, because the program has already registered at least one update function module for the regular updating procedure in the current SAP LUW. abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abensap\_luw.html