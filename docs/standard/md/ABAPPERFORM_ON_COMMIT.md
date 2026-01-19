---
title: "ABAPPERFORM_ON_COMMIT"
description: |
  ABAPPERFORM_ON_COMMIT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPERFORM_ON_COMMIT.htm"
abapFile: "ABAPPERFORM_ON_COMMIT.html"
keywords: ["insert", "update", "do", "if", "case", "method", "data", "ABAPPERFORM", "COMMIT"]
---

[Short Reference](ABAPPERFORM_SHORTREF.html)

`PERFORM subr ON \{\ \{COMMIT [LEVEL idx]\}\ | ROLLBACK \}.`

[`... LEVEL idx`](#ABAP_ONE_ADD@1@)

This statement registers the subroutine of the current program for later execution. The name of the subroutine is directly specified as `subr`. The subroutine is not executed immediately and is flagged for execution by one of the statements [`COMMIT WORK`](ABAPCOMMIT.html) or [`ROLLBACK WORK`](ABAPROLLBACK.html) instead.

The statements `COMMIT WORK` or `ROLLBACK WORK` execute the subroutines that are registered with `ON COMMIT` or `ON ROLLBACK` respectively in the current work process and before update function modules that are registered using [`CALL FUNCTION ... IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html) are called. Subroutines that are registered during execution of an update function module with `ON COMMIT` are executed at the end of the [update](ABENUPDATE_GLOSRY.html). In non-local updates, this takes place in the update work process and in local updates in the current work process.

[Do not implement in function modules and subroutines](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html)

In the case of subroutines registered for `COMMIT`, the order of execution can be controlled using the addition `LEVEL`, where `idx` expects a data object of the type `i`. The execution then takes place, sorted according to ascending value of `idx`. `idx` has the value 0, if a value is not explicitly specified. If the value is the same as `idx` or if no value is specified, the order of execution is the same as the order of registration. A subroutine registered multiple times for `COMMIT` or `ROLLBACK` is executed once in each case.

Registering of a subroutine `insert` of the same program for execution in the statement [`COMMIT WORK`](ABAPCOMMIT.html). The data is passed using the [ABAP memory](ABENABAP_MEMORY_GLOSRY.html).

-   Creating subroutines is obsolete. If new subroutines are required for `PERFORM subr ON COMMIT` or `PERFORM subr ON ROLLBACK`, they should only be used as wrappers for a method call and must not contain any other functional code.
-   Registered subroutines cannot have any parameter interface. Therefore, data can only be passed through external interfaces, for example, the ABAP memory. Subroutines that are executed in `COMMIT WORK` or `ROLLBACK WORK` are thus more suitable for management tasks, such as cleanup work at the end of a [SAP LUW](ABENSAP_LUW_GLOSRY.html), than for database changes.
-   During processing of a registered subroutine after `COMMIT WORK` or `ROLLBACK WORK`, the statements `PERFORM ... ON COMMIT`, `PERFORM ... ON ROLLBACK`, `COMMIT WORK`, or `ROLLBACK WORK` must not be executed. Type *A* messages caught using the predefined exception [`error_message`](ABAPCALL_FUNCTION_PARAMETER.html) in function module calls execute the statement `ROLLBACK WORK` implicitly and are therefore also forbidden.
-   Explicit [database commits](ABENDB_COMMIT.html) or [database rollbacks](ABENDB_ROLLBACK.html) are allowed during processing of a registered subroutine with `COMMIT WORK` or `ROLLBACK WORK`.
-   If, during the processing of a registered subroutine after `COMMIT WORK`, update function modules are registered using [`CALL FUNCTION ... IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html), this registration still applies to the current [SAP LUW](ABENSAP_LUW_GLOSRY.html).
-   If the registration of subroutines is combined with the registration of update function modules with [`CALL FUNCTION ... IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html), special care has to be taken regarding the [database LUWs](ABENDB_TRANSACTION.html) involved. Especially for [asynchronous update](ABENASYNCHRONOUS_UPDATE_GLOSRY.html), procedures that are registered outside update processing are executed in different work processes and therefore in different database LUWs. The changes in the database LUW of the subroutine can be committed before the update function modules are executed and a database rollback during an asynchronous update does not rollback these changes.

-   [SAP LUW, `ON COMMIT`](ABENSAP_LUW_ON_COMMIT_ABEXA.html)
-   The example [Demonstrating the SAP LUW](ABENSAP_LUW_BUNDL_TECH_ABEXA.html) demonstrates the SAP LUW using subroutines as bundling technique.

FINAL(values) = VALUE demo\_update\_tab( \\n ( id = 'X' col1 = 100 col2 = 200 col3 = 300 col4 = 400 ) \\n ( id = 'Y' col1 = 110 col2 = 210 col3 = 310 col4 = 410 ) \\n ( id = 'Z' col1 = 120 col2 = 220 col3 = 320 col4 = 420 ) ). \\n\\ \\nEXPORT values = values TO MEMORY ID 'INS'. \\nPERFORM insert ON COMMIT. \\n\\ \\n... \\n\\ \\nFORM insert. \\n DATA values TYPE demo\_update\_tab. \\n IMPORT values = values FROM MEMORY ID 'INS'. \\n IF sy-subrc = 0. \\n ... \\n ENDIF. \\nENDFORM. abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abensap\_luw.html