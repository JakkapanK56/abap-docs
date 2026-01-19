---
title: "ABAPLEAVE_TO_TRANSACTION"
description: |
  ABAPLEAVE_TO_TRANSACTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLEAVE_TO_TRANSACTION.htm"
abapFile: "ABAPLEAVE_TO_TRANSACTION.html"
keywords: ["update", "delete", "do", "if", "case", "method", "class", "data", "types", "ABAPLEAVE", "TRANSACTION"]
---

[Short Reference](ABAPLEAVE_TO_TRANSACTION_SHORTREF.html)\\ \\n

`LEAVE TO \{\ \{TRANSACTION ta\}\ |\ \{CURRENT TRANSACTION\}\ \}\           [AND SKIP FIRST SCREEN].`

[`... AND SKIP FIRST SCREEN`](#ABAP_ONE_ADD@1@)

The statement `LEAVE TO TRANSACTION` calls either the [transaction](ABENTRANSACTION_GLOSRY.html) whose transaction code is contained in data object `ta` or the current transaction, and in doing so exits the current [call sequence](ABENCALL_SEQUENCE_GLOSRY.html). The data object `ta` must be character-like, flat and contain the transaction code in uppercase letters. The following can be specified for `ta`:

When the statement is executed, `ta` is not evaluated until runtime (in both cases).

If `CURRENT TRANSACTION` is specified, the current transaction is called using the transaction code that was used to call the transaction using `CALL TRANSACTION` or `LEAVE TO TRANSACTION`. This transaction code is contained in the system field `sy-tcode` except for [parameter transactions](ABENPARAMETER_TRANSACTION_GLOSRY.html) or [variant transactions](ABENVARIANT_TRANSACTION_GLOSRY.html). When using parameter transactions or variant transactions, their transaction code is used for the call and `sy-tcode` contains the name of the implicitly called [dialog transaction](ABENDIALOG_TRANSACTION_GLOSRY.html).

When using `LEAVE TO TRANSACTION`, the current [call sequence](ABENCALL_SEQUENCE_GLOSRY.html) is exited completely. When the called transaction is terminated, the runtime framework returns to the position where the first program in the call sequence was called and the current [SAP LUW](ABENSAP_LUW_GLOSRY.html) is terminated.

When the transaction is called, the ABAP program to which the transaction code is linked is loaded in a new [internal session](ABENINTERNAL_SESSION_GLOSRY.html). All previous internal sessions are deleted from the stack. At the same time, the [ABAP memory](ABENABAP_MEMORY_GLOSRY.html) is deleted, which means that [`EXPORT FROM MEMORY`](ABAPEXPORT_DATA_CLUSTER.html) or [`IMPORT TO MEMORY`](ABAPIMPORT_DATA_CLUSTER.html) cannot be used to pass data when using `LEAVE TO TRANSACTION`.

The steps of the called dialog transaction or [`OO` transaction](ABENOO_TRANSACTION_GLOSRY.html) are the same as in [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html). When the called transaction is exited, the runtime framework returns to the position where the first program in the current call sequence was called.

If the transaction specified in `ta` is not found, or if `ta` is initial or contains a blank, the stack of the current call sequence is deleted and the runtime framework returns directly to the position where the first program in the current call sequence was called. If `ta` is not initial, an appropriate message appears in the status bar.

The statement `LEAVE TO TRANSACTION` always terminates the current call sequence, regardless of whether or not a new transaction can be called.

Unlike in the statement [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html), the authorization of the current user for executing the called transaction is always checked automatically as follows when using the statement `LEAVE TO TRANSACTION`:

If the required authorization is missing, a [message](ABENMESSAGE_GLOSRY.html) with [message type](ABENMESSAGE_TYPE_GLOSRY.html) A ([termination message](ABENTERMINATION_MESSAGE_GLOSRY.html)) is sent and the system [responds](ABENABAP_MESSAGES_TYPES.html) appropriately.

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, this a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class `CL_ABAP_DYN_PRG`, for example, can be used to do this.

The addition `AND SKIP FIRST SCREEN` has the same meaning as in[`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html).

Call of transaction `DEMO_TRANSACTION`, suppressing the first screen.

-   Literal or constant
-   If the data object `ta` is specified as a [text field literal](ABENTEXT_FIELD_LITERAL_GLOSRY.html) or as a [constant](ABENCONSTANT_GLOSRY.html), it is evaluated as a static specification by tools such as the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) or the where-used list.
-   Variable
-   If the data object `ta` is specified as a [variable](ABENVARIABLE_GLOSRY.html), it is specified only dynamically, and the content is not evaluated statically.

-   It is checked against the [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html)\\ `S_TCODE`.
-   It is checked against any authorization object entered in the definition of the transaction code (maintenance transaction `SE93`). Fields of the authorization object for which no value is specified here are not checked.

-   The syntax `CURRENT TRANSACTION` can be used to execute a running parameter transaction or variant transaction again with its respective parameters or transaction variant. Alternatively, the static method `GET_CURRENT_TRANSACTION` of the class `CL_DYNPRO` can be used to obtain the transaction code of the current transaction. This method returns the transaction code during a parameter transaction or variant transaction instead of the transaction code of the implicitly called dialog transaction.
-   `LEAVE TO TRANSACTION` does not end the current [database LUW](ABENDATABASE_LUW_GLOSRY.html). A [database commit](ABENDATABASE_COMMIT_GLOSRY.html) or [database rollback](ABENDATABASE_COMMIT_GLOSRY.html) in the called program has the same effect as in the current program.
-   If procedures are still registered for `LEAVE TO TRANSACTION` in the current [SAP LUW](ABENSAP_LUW_GLOSRY.html), the SAP LUW is terminated and the procedures are not called or rolled back. Any registered [update function modules](ABENUPDATE_FUNCTION_MODULE_GLOSRY.html) are preserved in the database, but can no longer be executed. In cases like this, therefore, it is advisable to execute the statement [`COMMIT WORK`](ABAPCOMMIT.html) or [`ROLLBACK WORK`](ABAPROLLBACK.html) explicitly before the program call.

LEAVE TO TRANSACTION 'DEMO\_TRANSACTION' AND SKIP FIRST SCREEN. abenabap.html abenabap\_reference.html abenabap\_execution.html abenabap\_program\_call.html abenabap\_call\_transaction.html