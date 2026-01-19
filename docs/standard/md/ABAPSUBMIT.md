---
title: "ABAPSUBMIT"
description: |
  ABAPSUBMIT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSUBMIT.htm"
abapFile: "ABAPSUBMIT.html"
keywords: ["select", "update", "delete", "do", "while", "if", "case", "catch", "class", "data", "ABAPSUBMIT"]
---

[Short Reference](ABAPSUBMIT_SHORTREF.html)

``SUBMIT \{rep|(name)\}\ [[`selscreen_options`](ABAPSUBMIT_INTERFACE.html)]``\\ 
                    ``[[`list_options`](ABAPSUBMIT_LIST_OPTIONS.html)]``\\ 
                    ``[[`job_options`](ABAPSUBMIT_VIA_JOB.html)]``\\ 
                    `[AND RETURN].`

[`... AND RETURN`](#ABAP_ONE_ADD@1@)

The statement `SUBMIT` calls an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html). The executable program is executed as described under [Flow of an Executable Program](ABENREPORTING_PROCESS.html). Depending on the addition `AND RETURN`, the calling program is either ended or interrupted. If the called program contains a syntax error, an uncatchable exception is raised. The [name](ABENPROGRAM_NAME_GLOSRY.html) of the called program can be specified as follows:

The additions have the following meaning:

When the statement `SUBMIT` is executed, an authorization check for the [authorization group](ABENAUTHORIZATION_GROUP_GLOSRY.html) specified in the [program properties](ABENPROGRAM_PROPERTY_GLOSRY.html) is performed using the [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html)\\ `S_PROGRAM`. The program property *Start Using Variant* is ignored in `SUBMIT`.

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, this a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class `CL_ABAP_DYN_PRG`, for example, can be used to do this.

Call of a program `DEMO_PROGRAM_SUBMIT_REP` without returning to the calling program.

The addition `AND RETURN` determines whether the calling program is ended or interrupted. It defines in which [internal session](ABENINTERNAL_SESSION_GLOSRY.html) the submitted program is executed, how the current [SAP LUW](ABENSAP_LUW_GLOSRY.html) is handled, and where the program execution continues after the program call is completed:

The number of internal sessions in a call sequence is restricted to nine. If this is exceeded by `SUBMIT ... AND RETURN`, the program is terminated and the entire call sequence is deleted.

Call of a program `DEMO_PROGRAM_SUBMIT_REP` and return to the calling program.

-   `rep`
-   Direct static specification as `rep`.
-   `(name)`
-   Specification as the content of a parenthesized flat character-like data object `name`. The data object `name` must contain the name of the program to be called in uppercase letters. The following can be specified for `name`:

-   Literal or constant
-   If the data object `name` is specified as a text field literal or as a constant, it can be evaluated statically and the called program is recognized as the used object.
-   Variable
-   If the data object `name` is specified as a variable, it is specified only dynamically, and the content is not evaluated statically.

-   When the statement is executed, `name` is not evaluated until runtime in both cases. If the program specified in `name` is not found, an uncatchable exception is raised.

-   The additions [`selscreen_options`](ABAPSUBMIT_INTERFACE.html) can be used to determine the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) for the called program and to supply it with values.
-   The additions [`list_options`](ABAPSUBMIT_LIST_OPTIONS.html) can be used to affect the output medium and the page size of the basic list of the called program.
-   The program can be scheduled for [background processing](ABENBACKROUND_PROCESSING_GLOSRY.html) by specifying [`job_options`](ABAPSUBMIT_VIA_JOB.html).
-   The addition `AND RETURN` determines whether the calling program is ended or interrupted. It defines the behavior regarding the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) and the behavior with respect to [SAP LUWs](ABENSAP_LUW_GLOSRY.html).

-   Without the addition `AND RETURN`, the calling program and its [SAP LUW](ABENSAP_LUW_GLOSRY.html) is ended. The content of the system field `sy-calld` is copied from the calling program to the submitted program. The internal session is handled in one of two ways:

-   If the calling program was started with `SUBMIT`, the internal session of the submitted program replaces the internal session of the calling program at the same position of the current [call sequence](ABENCALL_SEQUENCE_GLOSRY.html).
-   If the calling program was started with [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html) or [`LEAVE TO TRANSACTION`](ABAPLEAVE_TO_TRANSACTION.html), the submitted program is started in a new internal session of the current [call sequence](ABENCALL_SEQUENCE_GLOSRY.html) while the internal session of the calling program is kept at its position of the call sequence.

-   When the submitted program is completed, processing continues in both cases behind the position from which the calling program was started. The internal session of the submitted program and the internal session of the calling program, which still exists in the second case, are deleted.
-   The addition `AND RETURN` interrupts the calling program. The submitted program is started in a new internal session of the current [call sequence](ABENCALL_SEQUENCE_GLOSRY.html). The internal session of the calling program and the current [SAP LUW](ABENSAP_LUW_GLOSRY.html) are preserved. The submitted program runs in its own SAP LUW. Once the submitted program is finished, its internal session is deleted and program execution of the calling program is continued after the statement `SUBMIT` in its internal session.

-   Semantically, there is no difference between the options for handling the internal sessions after `SUBMIT` without `AND RETURN`. In both cases, the calling program is ended completely, and its internal session is deleted - either before starting the submitted program or after it is completed. No code behind the `SUBMIT` statement is executed. However, if the internal session of the calling program is preserved during the execution of the submitted program, it becomes one of the number of internal sessions of the call sequence, which cannot exceed the maximum of nine.
-   Hints on [LUWs](ABENLUW_GLOSRY.html):

-   `SUBMIT` does not end the current [database LUW](ABENDATABASE_LUW_GLOSRY.html), regardless of the addition `AND RETURN`.
-   A [database commit](ABENDATABASE_COMMIT_GLOSRY.html) or [database rollback](ABENDATABASE_COMMIT_GLOSRY.html) in the called program has exactly the same effect as in the current program.
-   The statement `SUBMIT` with the addition `AND RETURN` opens a new [SAP LUW](ABENSAP_LUW_GLOSRY.html), but it does not open a new [database LUW](ABENDATABASE_LUW_GLOSRY.html). This means that a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html) in this SAP LUW, in particular, can roll back all registration entries made by the statements [`CALL FUNCTION IN UPDATE TASK`](ABAPCALL_FUNCTION_UPDATE.html) or [`CALL FUNCTION IN BACKGROUND TASK`](ABAPCALL_FUNCTION_BACKGROUND_TASK.html) in the tables `VB...` or `ARFCSSTATE` and `ARFCSDATA`. Under certain circumstances, the statement [`ROLLBACK WORK`](ABAPROLLBACK.html) in the called program can also affect the interrupted SAP LUW. To prevent this, an explicit [database commit](ABENDATABASE_COMMIT_GLOSRY.html) must be executed before the program is called. This problem does not occur during [local updates](ABENLOCAL_UPDATE_GLOSRY.html).
-   If there are still procedures registered in the current [SAP LUW](ABENSAP_LUW_GLOSRY.html) for `SUBMIT` statements without `AND RETURN`, the SAP LUW is terminated without calling or rolling back the procedures. Registered [update function modules](ABENUPDATE_FUNCTION_MODULE_GLOSRY.html) can no longer be executed. In this case, the statement [`COMMIT WORK`](ABAPCOMMIT.html) or [`ROLLBACK WORK`](ABAPROLLBACK.html) should be executed explicitly before the program is called.

-   It can be dangerous to use `SUBMIT` with `AND RETURN` at positions where no database commit can occur, for example between [`FETCH`](ABAPFETCH.html) statements for opened database cursors. A [database commit](ABENDB_COMMIT.html) in the called program, for example because of dynpro or list processing, can lead to an exception in the calling program.

-   *Cause:* The specified program was not found.
    *Runtime error:*\\ `LOAD_PROGRAM_NOT_FOUND`
-   *Cause:* An attempt was made to pass an invalid value to a selection using the addition `SIGN`.
    *Runtime error:*\\ `SUBMIT_WRONG_SIGN`
-   *Cause:* The specified program is not an executable program.
    *Runtime error:*\\ `SUBMIT_WRONG_TYPE`
-   *Cause:* An attempt was made to pass more than one value to a report parameter.
    *Runtime error:*\\ `SUBMIT_IMPORT_ONLY_PARAMETER`
-   *Cause:* An attempt was made to use `WITH sel IN itab` to pass a table without an appropriate layout to a selection.
    *Runtime error:*\\ `SUBMIT_IN_ITAB_ILL_STRUCTURE`
-   *Cause:* An attempt was made to pass a parameter to the selection screen that cannot be converted to the target field.
    *Runtime error:*\\ `SUBMIT_PARAM_NOT_CONVERTIBLE`
-   *Cause:* The called program contains a syntax error.
    *Runtime error:*\\ `SYNTAX_ERROR`

SUBMIT demo\_program\_submit\_rep. SUBMIT demo\_program\_submit\_rep AND RETURN. abenabap.html abenabap\_reference.html abenabap\_execution.html abenabap\_program\_call.html abenabap\_submit\_report.html