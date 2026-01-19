---
title: "ABENABAP_DYNPRO_CALL_DIALOG_MOD"
description: |
  ABENABAP_DYNPRO_CALL_DIALOG_MOD - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_DYNPRO_CALL_DIALOG_MOD.htm"
abapFile: "ABENABAP_DYNPRO_CALL_DIALOG_MOD.html"
keywords: ["select", "do", "if", "case", "try", "method", "data", "ABENABAP", "DYNPRO", "CALL", "DIALOG", "MOD"]
---

The main task of the dynpro flow logic is to call dialog modules in an ABAP program. You can do this using the `MODULE` statement, which can be programmed in the four possible event blocks of dynpro flow logic. In the PBO event, you can use this statement to call any dialog module in the ABAP program that has been defined using the following:

MODULE mod OUTPUT. \\n  ... \\nENDMODULE.

In the PAI, POH, and POV events, you can use the statement to call any dialog module in the ABAP program that has been defined using the following:

MODULE mod \[INPUT\]. \\n  ... \\nENDMODULE.

It is technically possible to have two dialog modules with the same name in the same program, one defined using `OUTPUT`, the other with `INPUT`. However, this is not recommended.

A dialog module of the ABAP program can therefore be called from different dynpros. In this way, functions required in multiple dynpros need only be programmed once. For example, it is usual to copy the content of the `ok_code` field into an auxiliary variable and then reset the field in all PAI events. You could program this task in a single module that you would then call from the PAI event of all dynpros.

If you need to distinguish between dynpro numbers in a dialog module, you can use the system field `sy-dynnr`, which always contains the number of the current dynpro. This would allow you, for example, to analyze the function code in a single PAI module and then control the further program flow according to the dynpro number and function code.

The actual dynpro sequence is as follows:

The dynpro display is prepared in the PBO event. The flow logic calls the corresponding ABAP dialog modules. Then, the dynpro is displayed. When this happens, control passes from the application server to the SAP GUI. The dynpro accepts user input until the user triggers the PAI event. The control then returns to the application server. The program processes user input by calling the corresponding ABAP dialog modules. After the PAI processing is complete, the PBO processing of the next dynpro starts. The PAI processing and the PBO processing of the next dynpro form a single dialog step on the application server. The current dynpro remains visible until the PBO of the next dynpro is complete, but is not ready for input.

There are various ways of calling the dialog modules in the flow logic. The syntax of the flow logic allows you to call dialog modules conditionally, and to control the transfer of data between the dynpro and the ABAP program.

**Simple Module Calls**

To call a module, use the flow logic statement: `MODULE mod.`

The system starts the module `mod` of the ABAP program. A module must have been defined for the same event block in which the call occurs.

If you only use simple modules in the dynpro flow logic, the data transport between the ABAP program and the dynpro is as follows:

Data is transported between the dynpro and the ABAP program at the beginning and end of each dialog step on the application server. Do not confuse this with the data transport between a dynpro on the application server and the SAP GUI on the presentation server.

**Controlling the Data Transfer**

Data is passed from dynpro fields to ABAP fields with the same names once in each dialog step. If you only use simple module calls, all of the data is transferred in the PAI event before PAI processing starts.

The `FIELD` statement in the screen flow logic allows you to control the moment at which data is passed from dynpro fields to their corresponding ABAP fields.

To specify this point, use the following statement in the PAI flow logic: `FIELD f.`

Data is not transported from the dynpro field f to the ABAP field `f` until the `FIELD` statement is processed. If a field occurs in more than one `FIELD` statement, its value is passed to the program when the first of the statements is reached.

Only dynpro fields that do not appear in a `FIELD` statement are transferred at the beginning of the PAI event. Do not use fields in PAI modules until they have been passed to the program from the dynpro. Otherwise the ABAP field will contain the same value as at the end of the previous dialog step.

**Exception:** The exception to this are fields that were initial in the PBO event and are not changed by the user. These are not transported by the `FIELD` statement. If a field of this type is filled with a value in a PAI module before its corresponding `FIELD` statement is executed, any value that you assign to it is not overwritten.

The `FIELD` statement together with the `MODULE` statement has further functions in connection with conditional module calls and validity checks.

**Calling Modules Unconditionally**

In the PAI event, the PAI modules are called in the sequence in which they occur in the dynpro flow logic, after the automatic field checks. This means that the input on the dynpro must satisfy the automatic checks before the first module can be called. In particular, all required fields must be filled, and any checks against value lists or check tables defined for the field in ABAP Dictionary must be successful.

In some cases, the user may have to enter a considerable amount of data merely in order to be able to leave the dynpro. To prevent this, special function codes can be combined with a special module call. The corresponding module is called independently of the user inputs.

*Type E function codes*

*Calling a module for type `E` function codes*

*Modules for type `E` function codes*

**Conditional Module Calls**

Simple module calls are processed in the sequence in which they appear in the screen flow logic. However, the syntax of the dynpro language also allows you to make PAI module calls dependent on certain conditions. This is done by using the `MODULE` statement together with the `FIELD` statement. You can apply conditions to both single fields and groups of fields. Conditional module calls can help you to reduce the runtime of your program. Conditional module calls can also increase the performance, particularly with modules that communicate with database tables.

*Conditions for single dynpro fields*

You can ensure that a PAI module is only called when a certain condition applies by using the following statement:

FIELD f MODULE mod ON INPUT|REQUEST|\*-INPUT.

The additions have the following effects:

The functions of the `FIELD` statement for controlling data transport also apply when you use `MODULE`.

*Conditions for multiple dynpro fields*

To ensure that one or more PAI modules are only called when multiple dynpro fields meet a particular condition, you must combine the calls in the flow logic to form a processing chain. You define processing chains as follows:

CHAIN \\n  ... \\nENDCHAIN.

All flow logic statements between `CHAIN` and `ENDCHAIN` belong to a processing chain. The fields in the various `FIELD` statements are combined, and can be used in shared conditions.

CHAIN. \\n\\ \\nFIELD: f1, f2,... \\n\\ \\nMODULE mod1 ON CHAIN-INPUT|CHAIN-REQUEST. \\n\\ \\nFIELD: g1, g2,... \\n\\ \\nMODULE mod2 ON CHAIN-INPUT|CHAIN-REQUEST. \\n\\ \\n... \\n\\ \\nENDCHAIN.

The additions `ON` and `ON CHAIN-REQUEST` work like the additions `ON INPUT` and `ON REQUEST` that you use for individual fields. The exception is that the module is called whenever at least one of the fields listed in a preceding `FIELD` statement within the processing chain meets the condition. So `mod1` is called when one of the fields `f1`, `f2`, ... meets the condition. `mod2` is called when one of the fields `f1`, `f2`, ... or `g1`, `g2`,... meets the condition.

Within a processing chain, you can combine individual `FIELD` statements with a `MODULE` statement to set a condition for a single field within the chain:

CHAIN. \\n\\ \\nFIELD: f1, f2,... \\n\\ \\nFIELD f MODULE mod1 ON INPUT|REQUEST|\*-INPUT|CHAIN-INPUT|CHAIN-REQUEST. \\n\\ \\nMODULE mod2 ON CHAIN-INPUT|CHAIN-REQUEST. \\n\\ \\nENDCHAIN.

The module `mod1` is called when dynpro field `f` meets the specified condition for individual fields. `mod2` is called when one of the fields `f1`, `f2`, ... or `f` meets the condition. If you use the addition `ON CHAIN-INPUT` or `ON CHAIN-REQUEST` with `FIELD f`, the condition also applies to the entire chain and module `mod1` and `mod2` are both called.

In cases where you apply conditions to various combinations of dynpro fields, it is worth setting up a separate processing chain for each combination and calling different modules from within it.

The functions of the `FIELD` statement for controlling data transport also apply when you use processing chains. Within a processing chain, dynpro fields are not transported until the `FIELD` statement. Processing chains defined with `CHAIN- ENDCHAIN` also have another function for the `FIELDS` statements that they contain.

*Calling modules after cursor selection*

You can specify that a module should only be called if the cursor is positioned on a particular dynpro element. To do this, use the statement `MODULE mod AT CURSOR-SELECTION.`

The module `mod` is called whenever the function code of the user action is `CS` with function type `S`. If you use this statement, it is best to assign the function code `CS` to function key F2. This also assigns it to the double-click.

The module is called in the sequence in which it occurs in the flow logic. It does not bypass the automatic input checks. Data is transported from dynpro fields in the order in which it is defined by the `FIELD` statements. The function code is empty, and neither `sy-ucomm` nor the `ok_code` field is affected. You can also combine this `MODULE` statement with the `FIELD` statement: `FIELD f MODULE mod AT CURSOR-SELECTION.`

For more than one field:

CHAIN. \\n\\ \\nFIELD: f1, f2,... \\n\\ \\nMODULE mod AT CURSOR-SELECTION. \\n\\ \\nENDCHAIN.

The module `mod` is only called if the cursor is positioned on an input/output field `f` or an input/output field `f1`, `f2`, ... in the processing chain. You can only apply this statement to input/output fields.

The call hierarchy of the different combinations is as follows:

It is irrelevant whether the statements occur within a `CHAIN ... ENDCHAIN` block or not.

-   In the PAI event, all of the data from the dynpro is transported to the ABAP program (as long as there are program fields with the same names as the dynpro fields) after the automatic input checks and before the first PAI module is called. This includes the content of the system fields (for example, `sy-ucomm`, which contains the current function code).
-   At the end of the last PBO module, and before the dynpro is displayed, all of the data is transported from the ABAP program to any identically named fields in the dynpro.

-   The function codes for dynpros and the GUI status can be given type `E`. For this purpose, the function type property in Screen Painter is set to for the dynpro elements of the dynpro concerned. For GUI status functions, choose *Go to -> Object Lists -> Function List* in Menu Painter, select the required function codes, and enter `E` for the function type.
-   If the user chooses a dynpro element or a user interface element with a function code of type `E`, the system bypasses the automatic field checks and calls a special module in the dynpro flow logic. If the special module call does not exist, the system resumes normal PAI processing, that is, the automatic field checks take place after all.
-   As a rule, type `E` functions should allow the user to leave the dynpro. Consequently, the function codes for the icons F3, Shift+F3, and F12 in the toolbar for the GUI status usually have type `E`.

-   When the user chooses a function with type E, the dynpro flow logic jumps directly to the following statement:
-   `MODULE mod AT EXIT-COMMAND.`
-   Regardless of where it occurs in the dynpro flow logic, this statement is executed immediately, and before the automatic checks for the field content on the dynpro. Before the module `mod` is executed, only the content of the `ok_code` field is transported to the ABAP field with the same name. However, no other dynpro fields are transported. If there is more than one `MODULE` statement with the `AT EXIT-COMMAND` addition, only the first is executed. If there are no `MODULE` statements with the `AT EXIT-COMMAND` statement, normal PAI processing resumes.
-   If the user chooses a function whose function code does not have type `E`, the `MODULE mod AT EXIT-COMMAND` statement is not executed.

-   The `MODULE... AT EXIT-COMMAND` statement is normally used to leave the current dynpro without the automatic input checks taking place. It should therefore be programmed to contain an appropriate variant of the `LEAVE` statement, to exit the current dynpro, the call chain, or the entire program, as appropriate. If the module does not exit the dynpro, normal PAI processing resumes after it has finished, that is, the automatic field checks take place, and the normal PAI modules are called, with data being transported from the dynpro back to the program in the order defined in the `FIELDS` statements.

-   `ON INPUT`
-   The module `mod` is only called only if the field is not blank. All fields are empty if they only contain spaces, except for the fields of the type `STRG` and `SSTR`.
-   `ON REQUEST`
-   The module `mod` is only called if the user has entered something in the field. This includes cases when the user overwrites an existing value with the same value, or explicitly enters the initial value. In general, the `ON REQUEST` condition is triggered through any form of manual input. As well as user input, the following additional methods of entering values also call the module:

-   The element attribute `PARAMETER-ID` (`SPA`/`GPA` parameters).
-   The element attribute `HOLD DATA`
-   `CALL TRANSACTION ... USING`
-   Automatic settings of particular global fields

-   `ON *-INPUT`
-   The module `mod` is called if the user has entered a `*` in the first character of the field, and the field has the attribute `*-` entry in the Screen Painter. When the input field is passed to the program, the `*` is removed. `*` behaves like an initial field in the `ON INPUT` condition.

-   If a `MODULE... AT CURSOR-SELECTION` statement is executed that was combined with `FIELD`, a statement without `FIELD` is not executed.
-   If a statement using `FIELD` appears more than once for the same dynpro field `f`, only the first statement is executed.
-   If a statement without `FIELD` occurs more than once, only the last statement is executed.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html