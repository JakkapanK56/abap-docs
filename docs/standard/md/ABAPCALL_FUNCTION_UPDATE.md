---
title: "ABAPCALL_FUNCTION_UPDATE"
description: |
  ABAPCALL_FUNCTION_UPDATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_FUNCTION_UPDATE.htm"
abapFile: "ABAPCALL_FUNCTION_UPDATE.html"
keywords: ["insert", "update", "delete", "do", "while", "if", "case", "data", "types", "internal-table", "ABAPCALL", "FUNCTION", "UPDATE"]
---

[Short Reference](ABAPCALL_FUNCTION_SHORTREF.html)

`CALL FUNCTION update_function IN UPDATE TASK`\\ 
                              `[EXPORTING p1 = a1 p2 = a2 ...]`\\ 
                              `[TABLES t1 = itab1 t2 = itab2 ...].`

[1. `... EXPORTING p1 = a1 p2 = a2 ...`](#ABAP_ADDITION_1@3@)

[2. `... TABLES t1 = itab1 t2 = itab2 ...`](#ABAP_ADDITION_2@3@)

This statement registers the update function module specified in `update_function`. `update_function` must be a character-like field, which contains the name of an [update function module](ABENUPDATE_FUNCTION_MODULE_GLOSRY.html) in uppercase letters during execution of the statement. If specified, the same applies to `update_function` as to [general function module calls](ABAPCALL_FUNCTION_GENERAL.html).

An update function module is a [function module](ABENFUNCTION_MODULE_GLOSRY.html) for which the property *update module* is flagged in the [Function Builder](ABENFUNCTION_BUILDER_GLOSRY.html). The registration of an update function module is an essential part of the [update](ABENUPDATE_GLOSRY.html).

The function module is not executed immediately, but it is scheduled for execution in a special work process (update work process) or, if [local updates](ABENLOCAL_UPDATE_GLOSRY.html) are enabled, in the current work process. To do this, the name of the function module and the actual parameters passed are stored in the DDIC database tables `VBMOD` and `VBDATA`, which are managed by `VBHDR`. If the statement is executed during the update task, the addition `IN UPDATE TASK` is ignored.

If the statement [`SET UPDATE TASK LOCAL`](ABAPSET_UPDATE_TASK_LOCAL.html) is executed before registration of an update function module in the current [SAP LUW](ABENSAP_LUW_GLOSRY.html), registration takes place in the [ABAP memory](ABENABAP_MEMORY_GLOSRY.html) rather than on the database, and for the current work process.

The actual execution is triggered by the statement [`COMMIT WORK`](ABAPCOMMIT.html). The formal parameters of the function module receive the values of the actual parameters from the DDIC database table `VBDATA`. A function module that is registered more than once is also executed more than once with the relevant parameter values. If no `COMMIT WORK` statement is executed when the current program is executed after the registration of a function module, the function module is not executed and the associated entries are deleted from the corresponding DDIC database tables when the program ends. The statement [`ROLLBACK WORK`](ABAPROLLBACK.html) deletes all previous registrations for the current SAP LUW.

The system field `sy-subrc` is undefined after the statement `CALL FUNCTION ... IN UPDATE TASK` is executed.

The additions `EXPORTING` and `TABLES` have the same syntax and meaning as in the [`parameter_list`](ABAPCALL_FUNCTION_PARAMETER.html) of the general function module call, except that for `EXPORTING`, no [reference variables](ABENREFERENCE_VARIABLE_GLOSRY.html) or data objects that contain reference variables can be specified as actual parameters.

When passing internal tables with non-unique [table keys](ABENITAB_KEY.html), the order of the duplicate lines in relation to these keys is not retained.

The additions `IMPORTING`, `CHANGING` and `EXCEPTIONS` of the general function module call may be specified, but they are ignored during the execution. The additions for dynamic parameter passing are not allowed.

Registering of the update function module `DEMO_UPDATE_INSERT` for execution when the statement [`COMMIT WORK`](ABAPCOMMIT.html) is executed and passing an internal table.

-   No [database commits](ABENDATABASE_COMMIT_GLOSRY.html) and no [database rollbacks](ABENDATABASE_ROLLBACK_GLOSRY.html) can occur, and the update control cannot be modified during the processing of an update function module triggered using `COMMIT WORK` is being processed. Any statements that would produce this situation are [forbidden statements in updates](ABENDB_COMMIT_DURING_UPDATE.html) and always directly produce runtime errors.
-   No [authorization checks](ABENAUTHORITY_DURING_UPDATE.html) are possible while an update function module triggered using [`COMMIT WORK`](ABAPCOMMIT.html) is being processed.
-   Subroutines can be registered using [`PERFORM ON COMMIT`](ABAPPERFORM_ON_COMMIT.html) during the processing of an update function module triggered by [`COMMIT WORK`](ABAPCOMMIT.html). They are then executed at the end of the current update.
-   If a runtime error occurs during the [update](ABENUPDATE_GLOSRY.html), the update work process executes a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html), logs this in the corresponding DDIC database tables, and notifies the user whose program created the entries by SAPMail. After the cause of the error has been resolved, the canceled entries can be updated again.
-   When handling the registration entries in the DDIC database tables, it should be noted that they are subject to the regular administration rules for a [database LUW](ABENDATABASE_LUW_GLOSRY.html). For example, the database LUW is ended by a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html), all registration entries of the current database LUW are deleted.
-   When an update function module is registered using `CALL FUNCTION ... IN UPDATE TASK`, the relevant data is exported internally to a data cluster using [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html) and is imported again when executing the function module with [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html). If an error occurs in the export, for example because too much data is exported, the exceptions documented in [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html) are raised. If the data types of the exported actual parameters do not match the typing of the formal parameter of the function module, the exceptions documented in [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html) may be raised.

-   [SAP LUW, `UPDATE TASK`](ABENSAP_LUW_UPDATE_TASK_ABEXA.html)
-   The example [Demonstrating the SAP LUW](ABENSAP_LUW_BUNDL_TECH_ABEXA.html) demonstrates the SAP LUW using update function modules as bundling technique.

FINAL(values) = VALUE demo\_update\_tab( \\n ( id = 'X' col1 = 100 col2 = 200 col3 = 300 col4 = 400 ) \\n ( id = 'Y' col1 = 110 col2 = 210 col3 = 310 col4 = 410 ) \\n ( id = 'Z' col1 = 120 col2 = 220 col3 = 320 col4 = 420 ) ). \\n\\ \\n CALL FUNCTION 'DEMO\_UPDATE\_INSERT' IN UPDATE TASK \\n EXPORTING \\n values = values. abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abensap\_luw.html