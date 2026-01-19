---
title: "ABAPSELECT-OPTIONS_SCREEN"
description: |
  ABAPSELECT-OPTIONS_SCREEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT-OPTIONS_SCREEN.htm"
abapFile: "ABAPSELECT-OPTIONS_SCREEN.html"
keywords: ["select", "if", "case", "data", "types", "ABAPSELECT", "OPTIONS", "SCREEN"]
---

[Short Reference](ABAPSELECT-OPTIONS_SHORTREF.html)

`... [OBLIGATORY|NO-DISPLAY]`\\ 
    `[VISIBLE LENGTH vlen]`\\ 
    `[NO-EXTENSION]`\\ 
    `[NO INTERVALS]`\\ 
    ``[[`MODIF ID modid`](ABAPSELECTION-SCREEN_MODIF_ID.html)] ...``

[1. `... OBLIGATORY`](#ABAP_ADDITION_1@3@)

[2. `... NO-DISPLAY`](#ABAP_ADDITION_2@3@)

[3. `... VISIBLE LENGTH vlen`](#ABAP_ADDITION_3@3@)

[4. `... NO-EXTENSION`](#ABAP_ADDITION_4@3@)

[5. `... NO INTERVALS`](#ABAP_ADDITION_5@3@)

These additions can be used to declare the first input field as a mandatory field, hide the input field on the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html), and define the visible length of the field. The display of the second input field and the pushbutton for multiple selection can be prevented. The addition [`MODIF ID`](ABAPSELECTION-SCREEN_MODIF_ID.html) assigns all screen elements of the [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html) to the [modification group](ABENMODIFICATION_GROUP_GLOSRY.html)\\ `modid`.

In addition to the additions already available, the function module `SELECT_OPTIONS_RESTRICT` can also be used to restrict the number of selection options offered and prohibit the value *E* for the column `sign` in the [selection table](ABENSELECTION_TABLE_GLOSRY.html) before the selection screen is sent.

This addition defines the first input field for the selection criterion on the selection screen as a mandatory field. If this field is blank, the user cannot exit the selection screen using the **Execute** function (F8) and can only use the **Back**, **Exit**, or **Cancel** functions.

Using this addition, no screen elements are created on the selection screen for the selection criterion. In an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html), a selection criterion of this type is used exclusively as part of the interface defined by the selection screen. It can be supplied with a value by the calling program when it is called with [`SUBMIT`](ABAPSUBMIT.html).

If the addition `NO-DISPLAY` is specified, the `low` and `high` columns in the selection table can have any [flat](ABENFLAT_GLOSRY.html) data types. Such selection tables can only be supplied with data using the addition [`WITH`](ABAPSUBMIT_SELSCREEN_PARAMETERS.html) of the statement `SUBMIT`.

The length of the values passed to the columns `low` and `high` in the selection table, for which there is no input field, is not restricted to 45 characters, as is the case for selection criteria with input fields.

This addition determines the visible length of the input field as `vlen`, where `vlen` must be specified directly as a positive number. If `vlen` is shorter than the length of columns `low` and `high` in the selection table and shorter than the maximum visible length, it is possible to scroll in the input field, which is displayed with the length of `vlen`. Otherwise, the addition is ignored.

If this addition is specified, the pushbutton for multiple selection is not created on the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html).

The user cannot access the dialog box for multiple selection on the selection screen and therefore cannot process [selection tables](ABENSELECTION_TABLE_GLOSRY.html) containing multiple lines.

This addition prevents the second input field from being generated on the selection screen.

The user can only enter a single comparison in the first line of the selection table on the selection screen. Intervals can still be selected in the dialog box for multiple selection.

Declaration of a selection criterion for which a single comparison is possible on the selection screen, but multiple selection is not possible.

DATA spfli\_wa TYPE spfli. \\n\\ \\nSELECT-OPTIONS s\_carrid FOR spfli\_wa-carrid NO-EXTENSION \\n NO INTERVALS. abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselect-options.html