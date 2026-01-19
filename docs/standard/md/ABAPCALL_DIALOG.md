---
title: "ABAPCALL_DIALOG"
description: |
  ABAPCALL_DIALOG - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_DIALOG.htm"
abapFile: "ABAPCALL_DIALOG.html"
keywords: ["update", "while", "if", "case", "try", "catch", "method", "class", "data", "types", "ABAPCALL", "DIALOG"]
---

[Short Reference](ABAPCALL_DIALOG_SHORTREF.html)

`CALL DIALOG dialog [\ \{AND SKIP FIRST SCREEN\}`\\ 
                   `|\ \{USING bdc_tab [MODE mode]\}\ ]`\\ 
                   `[EXPORTING p1 FROM a1 p2 FROM a2 ...]`\\ 
                   `[IMPORTING p1 TO a1 p2 TO a2 ...].`

[1. `... AND SKIP FIRST SCREEN`](#ABAP_ADDITION_1@3@)

[2. `... USING bdc_tab [MODE mode]`](#ABAP_ADDITION_2@3@)

[3. `... EXPORTING p1 FROM a1 p2 FROM a2 ...`](#ABAP_ADDITION_3@3@)

[4. `... IMPORTING p1 TO a1 p2 TO a2 ...`](#ABAP_ADDITION_4@3@)

The statement `CALL DIALOG` calls the [dialog module](ABENDIALOG_MODULE_OBJECT_GLOSRY.html) whose name is contained in a flat character-like data object `dialog`. The data object `dialog` must contain the name in uppercase letters. The following can be specified for `dialog`:

When the statement is executed, `dialog` is not evaluated until runtime (in both cases). If the dialog module specified in `dialog` is not found, an uncatchable exception is raised.

When calling the dialog module, the assigned ABAP program is loaded into a new [internal session](ABENINTERNAL_SESSION_GLOSRY.html). The session of the calling program is preserved. In contrast to [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html), the called program runs in the same [SAP LUW](ABENSAP_LUW_GLOSRY.html) as the calling program.

After the ABAP program is loaded, the event [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html) is triggered and the dynpro defined as the initial dynpro of the dialog module is called. The dialog module is terminated when the corresponding [dynpro sequence](ABENDYNPRO_SEQUENCE_GLOSRY.html) terminates upon reaching the next dynpro with dynpro number 0 or the program is exited using the statement [`LEAVE PROGRAM`](ABAPLEAVE_PROGRAM.html).

Under the same conditions as for the statement [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html), this addition suppresses the display of the [screen layout](ABENSCREEN_GLOSRY.html) of the initial dynpro. If the called dialog module has input parameters for the mandatory input fields of the initial dynpro, they can also be filled using parameter passing instead of [SPA/GPA parameters](ABENSPA_GPA_PARAMETER_GLOSRY.html).

This addition controls the called program by specifying a [batch input table](ABENBATCH_INPUT_TABLE_GLOSRY.html)\\ `bdc_tab` of the line type `BDCDATA` like in the statement [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html). Only `MODE` can be used here as an addition to control the processing.
If a [message](ABENMESSAGE_GLOSRY.html) is sent in the called program, this message is available in the system fields `sy-msgid`, `sy-msgty`, `sy-msgno`, `sy-msgv1`, ..., `sy-msgv4` after the call.

These additions can be used to assign the appropriate actual parameters `a1`, `a2`, ... to the formal parameters `p1`, `p2`, ... of the dialog module. The formal parameters of a dialog module are always optional. They can have all data types except for reference types.
When loading the called program, the values of the actual parameters are assigned to the global data objects of the called program that are defined as formal parameters. If this data is linked with identically named [dynpro fields](ABENDYNPRO_FIELD_GLOSRY.html), they are not overwritten by any SPA/GPA parameters.
If `IMPORTING` is specified, the system field `sy-subrc` is inherited implicitly by the called dialog module and unknown formal parameters are ignored by the system.

Outside of classes, the additions `FROM a1`, `FROM a2`, ... and `TO a1`, `TO a2`, ... in the parameter lists can be omitted if the formal parameters and actual parameters have the same names.

-   Literal or constant
-   If the data object `dialog` is specified as a [text field literal](ABENTEXT_FIELD_LITERAL_GLOSRY.html) or as a [constant](ABENCONSTANT_GLOSRY.html), it is evaluated as a statically specified object by tools such as the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) or the where-used list.
-   Variable
-   If the data object `dialog` is specified as a [variable](ABENVARIABLE_GLOSRY.html), it is specified only dynamically, and the content is not evaluated statically.

-   Dialog modules are the only language resource that can be used to open a new internal session without changing the SAP LUW. The following should be noted:

-   The statements [`COMMIT WORK`](ABAPCOMMIT.html) and [`ROLLBACK WORK`](ABAPROLLBACK.html) lead to database commits or database rollbacks in the called program.
-   The statement `COMMIT WORK` starts the [background](ABENBG_REMOTE_FUNCTION_GLOSRY.html) or [transactional remote function calls](ABENTRFC_1_GLOSRY.html) registered in the dialog module using `CALL FUNCTION ... IN BACKGROUND UNIT` and `CALL FUNCTION ... IN BACKGROUND TASK` (obsolete). If [tRFC](ABENTRFC_2_GLOSRY.html) or [qRFC](ABENQRFC_GLOSRY.html) are registered in a dialog module and are not started with `COMMIT WORK`, they are not executed by the `COMMIT WORK` of the caller.
-   [Procedures](ABENPROCEDURE_GLOSRY.html) registered with [`CALL FUNCTION IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html) and [`PERFORM ON \{COMMIT|ROLLBACK\}`](ABAPPERFORM.html) are only executed with the corresponding statements `COMMIT WORK` and `ROLLBACK WORK` in the calling program.
-   Changes to [persistent objects](ABENPERSISTENT_OBJECT_GLOSRY.html) of the [object services](ABENOBJECT_SERVICES_GLOSRY.html) cannot be committed while `CALL DIALOG` is being executed. Changes made in the object services compatibility mode can be committed later using `COMMIT WORK`. On the other hand, calling the method `END` of a top-level transaction of the object-oriented transaction mode started in the called program has no effect either during or after `CALL DIALOG`. In object-oriented transaction mode, a transaction must be started before `CALL DIALOG` and then completed.
-   In the called program, [SAP locks](ABENSAP_LOCK_GLOSRY.html) are inherited by the calling program.

-   Calling dialog modules is replaced by calling methods of global classes or by function modules where function modules that can call the classic dynpros of their function pool. It is usually not necessary to open an internal session without changing the SAP LUW.

-   *Cause:* A parameter name is too long.
    *Runtime error:*\\ `CALL_DIALOG_NAME_TOO_LONG`
-   *Cause:* The called dialog module is unknown.
    *Runtime error:*\\ `CALL_DIALOG_NOT_FOUND`
-   *Cause:* The called dialog module contains errors (error in entry in table `TDCT`).
    *Runtime error:*\\ `CALL_DIALOG_WRONG_TDCT_MODE`
-   *Cause:* No further paging area available for passing parameters.
    *Runtime error:*\\ `CALL_DIALOG_NO_CONTAINER`
-   *Cause:* The statement `CALL DIALOG ... SCREEN ... PROGRAM ...` is not supported.
    *Runtime error:*\\ `CALL_DIALOG_SCREEN/PROGRAM`

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenprogram\_call\_obsolete.html