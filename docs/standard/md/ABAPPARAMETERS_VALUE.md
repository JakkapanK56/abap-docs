---
title: "ABAPPARAMETERS_VALUE"
description: |
  ABAPPARAMETERS_VALUE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPARAMETERS_VALUE.htm"
abapFile: "ABAPPARAMETERS_VALUE.html"
keywords: ["select", "do", "if", "case", "try", "data", "ABAPPARAMETERS", "VALUE"]
---

[Short Reference](ABAPPARAMETERS_SHORTREF.html)

`... [DEFAULT val]`\\ 
    `[LOWER CASE]`\\ 
    `[MATCHCODE OBJECT search_help]`\\ 
    `[MEMORY ID pid]`\\ 
    `[VALUE CHECK] ...`

[1. `... DEFAULT val`](#ABAP_ADDITION_1@3@)

[2. `... LOWER CASE`](#ABAP_ADDITION_2@3@)

[3. `... MATCHCODE OBJECT search_help`](#ABAP_ADDITION_3@3@)

[4. `... MEMORY ID pid`](#ABAP_ADDITION_4@3@)

[5. `... VALUE CHECK`](#ABAP_ADDITION_5@3@)

Using these additions, it is possible define a [start value](ABENSTART_VALUE_GLOSRY.html) that allows lowercase letters, a search help, or [SPA/GPA parameter](ABENSPA_GPA_PARAMETER_GLOSRY.html) to be bound, or a check to be executed against a value list.

This addition defines a start value for the content of the selection parameter `para`. The start value `val` can either be specified as a literal or as a built-in data object.

If the data type of the specified start value does not match the data type of the declaration, it is converted in accordance with the conversion rules. For the time stamp type `utclong`, only a character literal that contains a [valid representation](ABENTS_VALUE.html) of an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html) can be specified as a literal. Without the addition `DEFAULT`, the [initial value](ABENINITIAL_VALUE_GLOSRY.html) linked with the data type is used as a start value.

There are two times when a start value can be passed to the selection parameter:

In both cases, all the selection parameters are supplied with their start values, regardless of the selection screen on which they are defined. If a selection parameter is not initial at the time the data is passed, the start value is not passed.

This addition prevents the content of character-like fields from being converted to uppercase letters when the input field on the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) is transported to the data object `para` in the program and vice versa.

The addition `LOWER CASE` cannot be combined with the additions [`AS CHECKBOX`](ABAPPARAMETERS_SCREEN.html) or [`RADIOBUTTON`](ABAPPARAMETERS_SCREEN.html).

If a parameter is connected to a [DDIC domain](ABENDOMAIN_GLOSRY.html), the conversion to upper case letters can also be prevented by the respective [semantic property of the domain](ABENDDIC_DOMAINS_SEMA.html).

This addition links the input field of the selection parameter with a search help `search_help` from the ABAP Dictionary. The name of the search help must be specified directly. The input help key is displayed for the input field of the selection parameter on the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html). When the input help (F4) is requested, the hit list from the search help is displayed to the user. When an entry is selected, the corresponding value is placed in the input field. If no search help for the specified name exists in the ABAP Dictionary, a message is displayed in the status line when the input help is requested.

The addition `MATCHCODE OBJECT` cannot be combined with the additions [`AS CHECKBOX`](ABAPPARAMETERS_SCREEN.html) or [`RADIOBUTTON`](ABAPPARAMETERS_SCREEN.html).

Linking the selection parameter `p_carrid` with a suitable search help. When the input help is selected on the selection screen, a list with the names of the airline carriers is displayed. If a name is selected, the corresponding abbreviation is placed in the input field.

This addition links the input field of the selection parameter with a [SPA/GPA parameter](ABENSPA_GPA_PARAMETER_GLOSRY.html) in the [user memory](ABENUSER_MEMORY_GLOSRY.html). The ID `pid` of the SPA/GPA parameter must be specified directly and it can contain a maximum of 20 characters.

When the selection screen is called, the input field is filled with the current value of the SPA/GPA parameter in the user memory if the data object `para` is initial after processing of the event [`AT SELECTION-SCREEN OUTPUT`](ABAPSELECTION-SCREEN.html). Otherwise, the value of `para` is displayed. If there is a user action on the selection screen, the content of the input field is assigned to the SPA/GPA parameter in the user memory. If no SPA/GPA parameter exists for the specified ID, it is created.

If the specified ID `pid` is not contained in the database table `TPARA`, the extended program check reports an error.

The addition `DEFAULT` overrides the addition `MEMORY ID`.

The selection parameter `p_prog` is linked with the SPA/GPA parameter `RID`, which in turn is linked with the input field for the program name in the [dynpros](ABENDYNPRO_GLOSRY.html) of the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html). Accordingly, the input field of the selection parameter is filled with the name of the program last processed.

This addition can only be specified if the type of the selection parameter is defined using a reference to a data type from the ABAP Dictionary.

If a user action is performed on the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html), the current content of the input field is checked against any [fixed values](ABENFIXED_VALUE_GLOSRY.html) defined in the domain of the data type. If the data type is a component of a [foreign key table](ABENFOREIGN_KEY_TABLE_GLOSRY.html), a check against the check table is executed. If the check is not successful, an [error message](ABENERROR_MESSAGE_GLOSRY.html) is displayed in the status line of the selection screen. If the program was called using [`SUBMIT`](ABAPSUBMIT.html) without displaying the selection screen, the screen is displayed if an error occurs.

The addition `VALUE CHECK` cannot be combined with the additions [`AS CHECKBOX`](ABAPPARAMETERS_SCREEN.html), [`RADIOBUTTON`](ABAPPARAMETERS_SCREEN.html), [`AS LISTBOX`](ABAPPARAMETERS_SCREEN.html), or [`NO-DISPLAY`](ABAPPARAMETERS_SCREEN.html).

-   When an executable program is started using [`SUBMIT`](ABAPSUBMIT.html), all values `val` specified at program start using `DEFAULT` are passed between the events [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html) and [`INITIALIZATION`](ABAPINITIALIZATION.html) to the associated selection parameters `para`.
-   If a program is not loaded into an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) using a `SUBMIT` call, but using a [dialog](ABENDIALOG_TRANSACTION_GLOSRY.html) or an [object transaction](ABENOO_TRANSACTION_GLOSRY.html), or in an external procedure call instead, all the values `val` specified using `DEFAULT` are passed to the associated selection parameters `para` when any selection screen is called for the first time using [`CALL SELECTION-SCREEN`](ABAPCALL_SELECTION_SCREEN.html) before the event [`AT SELECTION-SCREEN OUTPUT`](ABAPAT_SELECTION-SCREEN.html).

-   The associated input field on the selection screen is only filled with the start value if the value for `para` is no longer changed before the selection screen is sent. The system displays the exact value that the selection parameter has at the end of processing of the event `AT SELECTION-SCREEN OUTPUT`.
-   If start values are specified, these must have the internal format of the ABAP values, and not the output format of the screen display.

-   For search helps with more than one value, the first value of the search help is linked with the input field.
-   The predecessors of the search helps in the ABAP Dictionary were called matchcode objects, which is why this addition has the name `MATCHCODE OBJECT`. Matchcode objects that have not yet been replaced by search helps are still supported by this addition.

-   The check against a check table is executed even if the input field is empty. Therefore, it is advisable to use the addition [`OBLIGATORY`](ABAPPARAMETERS_SCREEN.html) at the same time.
-   [Table buffering](ABENTABLE_BUFFERING_GLOSRY.html) is effective for the database accesses performed for the check.

PARAMETERS p\_carrid TYPE s\_carr\_id \\n MATCHCODE OBJECT demo\_f4\_de. PARAMETERS p\_prog TYPE sy-repid MEMORY ID rid. abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapparameters.html