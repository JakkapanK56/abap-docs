---
title: "ABAPCALL_TRANSACTION_USING"
description: |
  ABAPCALL_TRANSACTION_USING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_TRANSACTION_USING.htm"
abapFile: "ABAPCALL_TRANSACTION_USING.html"
keywords: ["update", "do", "while", "if", "try", "catch", "class", "data", "internal-table", "ABAPCALL", "TRANSACTION", "USING"]
---

[Short Reference](ABAPCALL_TRANSACTION_SHORTREF.html)

``CALL TRANSACTION ta [`WITH|WITHOUT AUTHORITY-CHECK`](ABAPCALL_TRANSACTION_AUTHORITY.html)\                      USING bdc_tab \{\ \{[MODE mode]\ [UPDATE upd]\}\                                    |  [OPTIONS FROM opt]\ \}\                                       [MESSAGES INTO itab].``

[1. `... MODE mode`](#ABAP_ADDITION_1@3@)

[2. `... UPDATE upd`](#ABAP_ADDITION_2@3@)

[3. `... OPTIONS FROM opt`](#ABAP_ADDITION_3@3@)

[4. `... MESSAGES INTO itab`](#ABAP_ADDITION_4@3@)

In the variant with the addition `USING`, the transaction is executed using a [batch input table](ABENBATCH_INPUT_TABLE_GLOSRY.html). The transaction is called as described under [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html). The additions [`WITH|WITHOUT AUTHORITY-CHECK`](ABAPCALL_TRANSACTION_AUTHORITY.html) are used to control the authorization check.

`bdc_tab` expects an internal table with the line type `BDCDATA` from the ABAP Dictionary. The additions control its processing.

When a transaction with the addition `USING` is called, the system field `sy-binpt` is set to the value *X* in the called program, and no other transaction can be called using this addition while this transaction is running.

In a program, a [batch input table](ABENBATCH_INPUT_TABLE_GLOSRY.html)\\ `bdc_tab` is the internal representation of a subset of a [batch input session](ABENBATCH_INPUT_SESSION_GLOSRY.html) and must be filled accordingly. The structure `BDCDATA` has the components shown in the table below.

Using the [content](ABENBATCH_INPUT_TABLE.html) of the internal table `bdc_tab`, any number of screens of the called transaction can be provided with input and user actions.

If a [runtime error](ABENRUNTIME_ERROR_GLOSRY.html) occurs in a transaction called with `USING`, it does not lead to the display of the [short dump](ABENSHORT_DUMP_GLOSRY.html), but control is returned to the calling program where `sy-subrc` is set to *1001* and the name of the runtime error is displayed in a [status message](ABENSTATUS_MESSAGE_GLOSRY.html).

Call of transaction `SE24` in the executable example class `CL_DEMO_CALL_TRANSACTION_BDC`.

The addition `MODE` determines the processing mode for processing. `mode` can be specified as a character-like data object whose content and effect are shown in the following table. If neither of the additions `MODE` or `OPTIONS FROM` are used, the effect is the same as if `mode` had the content *A*.

When using *N*, the called transaction was terminated and `sy-subrc` was set to *1001* when a breakpoint was reached and an old version of the ABAP Debugger was used, that is not supported any more.

The addition `UPDATE` determines the update mode for processing. `upd` can be specified as a character-like data object whose content and effect are shown in the following table. If neither of the additions `UPDATE` or `OPTIONS FROM` are used, the effect is the same as if `upd` had the content *A*.

This option is not available for execution of [batch input sessions](ABENBATCH_INPUT_SESSION_GLOSRY.html) in [batch input](ABENBATCH_INPUT_GLOSRY.html). Updates are always synchronous here.

The addition `OPTIONS` covers the functions of the additions `MODE` and `UPDATE` and provides further options for controlling the processing of the batch input table. The control parameters are specified in an `opt` structure of the type `CTU_PARAMS` from the ABAP Dictionary. The `CTU_PARAMS` structure has the components shown in the following table:

Without the addition `OPTIONS FROM`, the values set by the additions `MODE` or `UPDATE` or the default values specified there (*A*) apply to `DISMODE` and `UPMODE`. The other components are set to the value blank.

Using this addition, all the [messages](ABENMESSAGE_GLOSRY.html) sent during batch input processing are stored in an internal table `itab` of the line type `BDCMSGCOLL` from the ABAP Dictionary.

The [status message](ABENSTATUS_MESSAGE_GLOSRY.html) that is sent when a runtime error occurs in the called transaction is also stored in the internal table.

[Transaction Call, BDC Table](ABENCALL_TRANSACTION_BDC_ABEXA.html)

-   Calling a transaction using a batch input table is actually not the same as executing [batch input sessions](ABENBATCH_INPUT_SESSION_GLOSRY.html) in [batch input](ABENBATCH_INPUT_GLOSRY.html). However, there is no exact dividing line between the two, since batch input-based frameworks, such as [`CATT`](ABENCATT_GLOSRY.html), and batch input management sometimes also execute the statement `CALL TRANSACTION USING` internally. As a result, they can use certain options that are not available in genuine batch input.
-   The control options for a batch input table include the control options for [batch input sessions](ABENBATCH_INPUT_SESSION_GLOSRY.html) in real [batch input](ABENBATCH_INPUT_GLOSRY.html), and sometimes exceed them.

DATA: bdcdata\_tab TYPE TABLE OF bdcdata, \\n opt TYPE ctu\_params. \\n... \\nTRY. \\n CALL TRANSACTION 'SE24' WITH AUTHORITY-CHECK \\n USING bdcdata\_tab OPTIONS FROM opt. \\n CATCH cx\_sy\_authorization\_error. \\n ... \\nENDTRY. **Component** **Meaning** `sy-subrc` **Meaning** `mode` **Effect** `upd` **Effect** **Component** **Meaning** `PROGRAM` Name of the program of the called transaction `DYNPRO` Number of the dynpro to be processed `DYNBEGIN` Flag for the start of a new dynpro (possible values are *X* and blank) `FNAM` Name of a [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html) to be filled or batch input control statement, for example to position the cursor `FVAL` Value to be passed to the dynpro field or to the control statement 0 The called transaction was processed successfully. < 1000 Error in the called transaction. If a [message](ABENMESSAGE_GLOSRY.html) was sent within the transaction, it can be received using the addition `MESSAGES`. 1001 Processing error, including runtime errors *A* Processing with display of the [screens](ABENSCREEN_GLOSRY.html) *E* Display of screens only if an error occurs *N*, *P* Processing without display of the screens. If a breakpoint is reached in one of the called transactions, the system branches to the ABAP Debugger. Others As for *A*. *A* *Asynchronous update*. [Updates](ABENUPDATE_GLOSRY.html) of the called programs are executed in the same way as if the addition `AND WAIT` were not specified in the statement [`COMMIT WORK`](ABAPCOMMIT.html). *S* *Synchronous update*. Updates of the called programs are executed in the same way as if the addition `AND WAIT` were specified in the statement `COMMIT WORK`. *L* *Local updates*. Updates of the called program are executed in the same way as if the statement [`SET UPDATE TASK LOCAL`](ABAPSET_UPDATE_TASK_LOCAL.html) had been executed in it. Others As for *A*. `DISMODE` Processing mode. Values as for the addition `MODE`. `UPMODE` Update mode for processing. Values as for the addition `UPDATE`. `CATTMODE` \\ [`CATT`](ABENCATT_GLOSRY.html) mode for processing. While [batch input](ABENBATCH_INPUT_GLOSRY.html) is used mostly for data transfer, `CATT` processes are designed to be reusable tests of more complex [transactions](ABENTRANSACTION_GLOSRY.html). Values: blank (no `CATT` mode), *N* (`CATT` without single screen control), *A* (`CATT` with single screen control). `DEFSIZE` Flag to indicate whether the [screens](ABENSCREEN_GLOSRY.html) of the called transaction are displayed in the standard screen size. Values: *X* (standard size), blank (current size). `RACOMMIT` Flag to indicate whether the statement [`COMMIT WORK`](ABAPCOMMIT.html) terminates processing or not. Values: blank ( `COMMIT WORK` terminates processing), *X* (`COMMIT WORK` does not terminate processing). `NOBINPT` Flag for the system field `sy-binpt`. Values: blank (`sy-binpt` contains *X* in the called transaction), *X* (`sy-binpt` contains blank in the called transaction). `NOBIEND` Flag for the system field `sy-binpt`. Values: blank (`sy-binpt` contains *X* after the end of the data from the batch input table in the called transaction) *X* (`sy-binpt` contains blank after the end of the data in the called transaction). abenabap.html abenabap\_reference.html abenabap\_execution.html abenabap\_program\_call.html abenabap\_call\_transaction.html abapcall\_transaction.html