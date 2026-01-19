---
title: "ABAPPARAMETERS_SHORTREF"
description: |
  ABAPPARAMETERS_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPARAMETERS_SHORTREF.htm"
abapFile: "ABAPPARAMETERS_SHORTREF.html"
keywords: ["select", "do", "if", "case", "data", "ABAPPARAMETERS", "SHORTREF"]
---

[Reference](ABAPPARAMETERS.html)

`PARAMETERS \{\ \{para[(len)]\}\ |\ \{para [LENGTH len]\}\ \}\             [\ \{TYPE type [DECIMALS dec]\}\             |\ \{LIKE dobj\}\             |\ \{LIKE (name)\}\ ]\             [\ \{[OBLIGATORY|NO-DISPLAY]\ [VISIBLE LENGTH vlen]\}\             |\ \{AS CHECKBOX [USER-COMMAND fcode]\}\             |\ \{RADIOBUTTON GROUP group [USER-COMMAND fcode]\}\             |\ \{AS LISTBOX VISIBLE LENGTH vlen                  [USER-COMMAND fcode]\ [OBLIGATORY]\}\ ]\             [MODIF ID modid]\             [DEFAULT val]\             [LOWER CASE]\             [MATCHCODE OBJECT search_help]\             [MEMORY ID pid]\             [VALUE CHECK]\             [FOR \{TABLE|NODE\} node                [HELP-REQUEST]\                [VALUE-REQUEST]\                [AS SEARCH PATTERN]].`

Declares a parameter `para` of length `len` and creates an associated input field on the current [selection screen](ABENSELECTION_SCREEN_GLOSRY.html).

-   [`TYPE type [DECIMALS dec]`](ABAPPARAMETERS_TYPE.html)\\
    Specifies the data type `type` directly and defines the number of [decimal places](ABENDECIMAL_PLACE_GLOSRY.html).
-   [`LIKE dobj`](ABAPPARAMETERS_TYPE.html)\\
    Specifies the data type with reference to a data object `dobj`.
-   [`LIKE (name)`](ABAPPARAMETERS_TYPE.html)\\
    Defines the data type for `c` with length 132, and displays the input field in accordance with the type specified dynamically in `name`.
-   [`OBLIGATORY`](ABAPPARAMETERS_SCREEN.html)\\
    Defines the input field as a mandatory field.
-   [`NO-DISPLAY`](ABAPPARAMETERS_SCREEN.html)\\
    No input field is created on the selection screen.
-   [`VISIBLE LENGTH vlen`](ABAPPARAMETERS_SCREEN.html)\\
    Sets the visible length of the input field to the value of `vlen`.
-   [`AS CHECKBOX`](ABAPPARAMETERS_SCREEN.html)\\
    Creates the input field as a checkbox.
-   [`RADIOBUTTON GROUP group`](ABAPPARAMETERS_SCREEN.html)\\
    Creates the input field as a radio button of the radio button group `group`.
-   [`AS LISTBOX`](ABAPPARAMETERS_SCREEN.html)\\
    Creates a [dropdown list box](ABENDROPDOWN_LISTBOX_GLOSRY.html) for the input field.
-   [`USER-COMMAND fcode`](ABAPPARAMETERS_SCREEN.html)\\
    Links the input field with a [function code](ABENFUNCTION_CODE_GLOSRY.html).
-   [`MODIF ID modid`](ABAPSELECTION-SCREEN_MODIF_ID.html)\\
    Assigns the input field to the [modification group](ABENMODIFICATION_GROUP_GLOSRY.html)\\ `modid`.
-   [`DEFAULT val`](ABAPPARAMETERS_VALUE.html)\\
    Defines a [start value](ABENSTART_VALUE_GLOSRY.html)\\ `val` for the content of the parameter.
-   [`LOWER CASE`](ABAPPARAMETERS_VALUE.html)\\
    Prevents the conversion of the content of character-like fields to uppercase when transferring data between the input field and the data object.
-   [`MATCHCODE OBJECT search_help`](ABAPPARAMETERS_VALUE.html)\\
    Links the input field with a search help `search_help` from [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html).
-   [`MEMORY ID pid`](ABAPPARAMETERS_VALUE.html)\\
    Links the input field with the [SPA/GPA parameter](ABENSPA_GPA_PARAMETER_GLOSRY.html)\\ `pid` in the [user memory](ABENUSER_MEMORY_GLOSRY.html).
-   [`VALUE CHECK`](ABAPPARAMETERS_VALUE.html)\\
    Checks the input value against type-specific requirements in ABAP Dictionary.
-   [`FOR \{TABLE|NODE\} node`](ABAPPARAMETERS_LDB.html)\\
    **Obsolete:** Assigns parameters in a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html) to a node `node` of the associated structure.
-   [`[HELP-REQUEST]\ [VALUE-REQUEST]`](ABAPPARAMETERS_LDB.html)\\
    **Obsolete:** Enables user-defined field helps and input helps in logical databases for the input field.
-   [`AS SEARCH PATTERN`](ABAPPARAMETERS_LDB.html)\\
    **Obsolete:** Enables evaluation of a search help in logical databases.

abenabap.html abenabap\_reference.html abenabap\_shortref.html