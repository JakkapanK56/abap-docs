---
title: "ABAPSELECT-OPTIONS_VALUE"
description: |
  ABAPSELECT-OPTIONS_VALUE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT-OPTIONS_VALUE.htm"
abapFile: "ABAPSELECT-OPTIONS_VALUE.html"
keywords: ["select", "insert", "do", "if", "case", "data", "ABAPSELECT", "OPTIONS", "VALUE"]
---

[Short Reference](ABAPSELECT-OPTIONS_SHORTREF.html)

`... [DEFAULT val1 [TO val2]\ [OPTION opt]\ [SIGN sgn]]`\\ 
    `[LOWER CASE]`\\ 
    `[MATCHCODE OBJECT search_help]`\\ 
    `[MEMORY ID pid] ...`

[1. `... DEFAULT val1 [TO val2]\ [OPTION opt]\ [SIGN sgn]`](#ABAP_ADDITION_1@3@)

[2. `... LOWER CASE`](#ABAP_ADDITION_2@3@)

[3. `... MATCHCODE OBJECT search_help`](#ABAP_ADDITION_3@3@)

[4. `... MEMORY ID pid`](#ABAP_ADDITION_4@3@)

These additions can be used to define a start value that allows lowercase letters or used to bind a search help or a [SPA/GPA parameter](ABENSPA_GPA_PARAMETER_GLOSRY.html).

This addition defines [start values](ABENSTART_VALUE_GLOSRY.html) for the columns in the first line of the [selection table](ABENSELECTION_TABLE_GLOSRY.html). Without the addition `DEFAULT`, type-dependent [initial values](ABENINITIAL_VALUE_GLOSRY.html) are used as start values.

`val1` and `val2` are used to define start values for columns `low` and `high`. These start values can either be specified as literals or as previously defined data objects. If the data type of the specified start values does not match the data type of the columns, these are converted according to the conversion rules.

The addition `OPTION` is used to define the start value for the `option` column. If the addition `TO` is not specified, one of the expressions `eq`, `ne`, `ge`, `gt`, `le`, `lt`, `cp`, or `np` must be specified directly for `opt`. If the addition `TO` is specified, either `bt` or `nb` must be specified. If the addition `OPTION` is not used, the content of the `option` column is set to *EQ* or *BT*. If `cp` or `np` are specified, the start value in `val1` must contain at least one of the wildcard characters *\** or *+* when data is passed to the selection table, otherwise the program terminates.

The addition `SIGN` is used to define the start value for the `sign` column. Either `i` or `e` must be specified directly for `sgn`. If the addition `SIGN` is not used, the content of column `sign` is set to *I*.

The times at which the start values are passed to the first line of the selection table are processed in the same way as with the addition `DEFAULT` to the [`PARAMETERS`](ABAPPARAMETERS_VALUE.html) statement. If the selection table is not initial when the transfer takes place, the start values are not transferred to the first line. Only the [header line](ABENHEADER_LINE_GLOSRY.html) in the selection table is filled with these values, which does not affect the [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html).

This addition prevents the content of character-like fields from being converted to uppercase letters when the data is transported from the input fields on the selection screen to the selection table.

If a selection criterion is connected to a [DDIC domain](ABENDOMAIN_GLOSRY.html), the conversion to upper case letters can also be prevented by the respective [semantic property of the domain](ABENDDIC_DOMAINS_SEMA.html).

This addition associates the input fields for the selection criterion with a search help `search_help` from the ABAP Dictionary. The name of the search help must be specified directly. The addition has the same effect on the input fields as when it is used with a [`PARAMETERS`](ABAPPARAMETERS_VALUE.html) statement for an input field for a selection parameter.

This addition associates the first input field with an [SPA/GPA parameter](ABENSPA_GPA_PARAMETER_GLOSRY.html) in the [user memory](ABENUSER_MEMORY_GLOSRY.html). The ID `pid` of the SPA/GPA parameter must be specified directly and can contain a maximum of 20 characters. The addition has the same effect on the first input field as when it is used with a [`PARAMETERS`](ABAPPARAMETERS_VALUE.html) statement for an input field for a selection parameter.

If the specified ID `pid` is not in the DDIC database table `TPARA`, the extended program check reports an error.

-   The associated input fields on the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) are only filled with the start values if the first line in the selection table is not changed before the selection screen is sent. The system displays the value contained in the selection table when the event [`AT SELECTION-SCREEN OUTPUT`](ABAPAT_SELECTION-SCREEN.html) has been processed. Start values for multiple selection can only be defined by inserting lines in the selection table.
-   When specifying start values, these must have the internal format of the ABAP values, and not the output format of the screen layout display.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselect-options.html