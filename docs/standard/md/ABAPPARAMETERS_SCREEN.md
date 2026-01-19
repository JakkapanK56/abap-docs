---
title: "ABAPPARAMETERS_SCREEN"
description: |
  ABAPPARAMETERS_SCREEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPARAMETERS_SCREEN.htm"
abapFile: "ABAPPARAMETERS_SCREEN.html"
keywords: ["select", "do", "if", "case", "try", "data", "types", "internal-table", "ABAPPARAMETERS", "SCREEN"]
---

[Short Reference](ABAPPARAMETERS_SHORTREF.html)

\\ `... \{\ \{[OBLIGATORY|NO-DISPLAY]\ [VISIBLE LENGTH vlen]\}`\\ 
    `|\ \{AS CHECKBOX [USER-COMMAND fcode]\}`\\ 
    `|\ \{RADIOBUTTON GROUP group [USER-COMMAND fcode]\}`\\ 
    `|\ \{AS LISTBOX VISIBLE LENGTH vlen [USER-COMMAND fcode]\                                        [OBLIGATORY]\}\ \}`\\ 
    ``[[`MODIF ID modid`](ABAPSELECTION-SCREEN_MODIF_ID.html)] ...``

[1. `... OBLIGATORY`](#ABAP_ADDITION_1@3@)

[2. `... NO-DISPLAY`](#ABAP_ADDITION_2@3@)

[3. `... VISIBLE LENGTH vlen`](#ABAP_ADDITION_3@3@)

[4. `... AS CHECKBOX [USER-COMMAND fcode]`](#ABAP_ADDITION_4@3@)

[5. `... RADIOBUTTON GROUP group [USER-COMMAND fcode]`](#ABAP_ADDITION_5@3@)

[6. `... AS LISTBOX VISIBLE LENGTH vlen [USER-COMMAND fcode]`](#ABAP_ADDITION_6@3@)

These additions can be used to declare the input field as a required field, hide the input field on the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html), and define the visible length of the field. The input field can be displayed as a checkbox, radio button, or [dropdown list box](ABENDROPDOWN_LISTBOX_GLOSRY.html). The [`MODIF ID`](ABAPSELECTION-SCREEN_MODIF_ID.html) addition assigns all the screen elements of the selection parameter to the [modification group](ABENMODIFICATION_GROUP_GLOSRY.html)\\ `modid`.

Not all combinations of additions are valid. The syntax specified above shows the allowed combinations.

This addition defines the input field of the selection parameter on the selection screen as a required field. If no entry is made in this field, the user cannot use the *Execute* function (F8) to exit the selection screen and can only use the functions *Back*, *Exit*, or *Cancel*.

This addition specifies that no screen elements are generated for the selection parameter on the selection screen. In an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html), a selection parameter of this type is used only as part of the interface defined by the selection screen. It can be supplied with a value by the calling program when called with [`SUBMIT`](ABAPSUBMIT.html).

If the addition `NO-DISPLAY` is specified, a selection parameter can have any data types except for reference types. These selection parameters can only be filled using the [`WITH`](ABAPSUBMIT_SELSCREEN_PARAMETERS.html) addition of the `SUBMIT` statement. In this case, unlike the general conversion rule for [deep](ABENDEEP_GLOSRY.html) types, the same rules apply as when importing data from a [data cluster](ABAPIMPORT_PARAMETERLIST.html).

The length of a value passed to a selection parameter without input field is not restricted to 132 characters unlike selection parameters that do have input fields.

This addition defines the visible length of the input field as `vlen`. Here, `vlen` must be specified directly as a positive number. If `vlen` is less than the length of the selection parameter and less than the maximum visible length, the input field is displayed in the length defined in `vlen`, with movable content. Otherwise, the addition is ignored.

This addition specifies that the input field in the first position of the selection screen is displayed as a [checkbox](ABENCHECKBOX_GLOSRY.html) with the associated description next to it on the right. The checkbox is selected if the value of `para` is *X* or *x*. Otherwise, it is not selected.

This selection parameter must be created with type `c` and length 1. Explicitly specified lengths `len` are not allowed. If the addition [`TYPE`](ABAPPARAMETERS_TYPE.html) is used, it can only be followed by the generic type `c` or a non-generic data type of type `c` and length 1.

The addition `USER-COMMAND` can be used to assign a function code `fcode` to the selection parameter. The function code `fcode` must be specified directly and can only contain a maximum of 20 characters. To evaluate the function code, an [interface work area](ABENINTERFACE_WORK_AREA_GLOSRY.html) of the structure `SSCRFIELDS` from the ABAP Dictionary can be declared using the statement [`TABLES`](ABAPTABLES.html). When the user selects the checkbox on the selection screen, the runtime framework raises the event [`AT SELECTION-SCREEN`](ABAPAT_SELECTION-SCREEN.html) and passes the function code `fcode` to the component `ucomm` of the interface work area `sscrfields`. If a function code used in the GUI status of the selection screen is specified for `fcode`, the [selection screen processing](ABENSELECTION_SCREEN_EVENTS.html) is affected accordingly.

This addition specifies that the input field is displayed as a [radio button](ABENRADIO_BUTTON_GLOSRY.html) in the first position on the selection screen, and the output field is displayed next to it on the right. The radio button is selected if the value of `para` is *X* or *x*. Otherwise, it is not selected.

`group` is used to define the [radio button group](ABENRADIO_BUTTON_GROUP_GLOSRY.html) for the selection parameter. The name `group` must be specified directly as a character string with a maximum of four characters. Within a selection screen, there must be a minimum of two selection parameters in the same radio button group. Multiple radio button groups cannot have the same name in a program, even if they are defined in different selection screens. If a radio button group is defined in a [block](ABAPSELECTION-SCREEN_BLOCK.html), all selection parameters of this group must be defined within the block.

This selection parameter must be created with type `c` and length 1. Explicitly specified lengths `len` are not allowed. If the addition [`TYPE`](ABAPPARAMETERS_TYPE.html) is used, it can only be followed by the generic type `c` or a non-generic data type of type `c` and length 1.

In a radio button group, only one selection parameter can be defined with the addition [`DEFAULT`](ABAPPARAMETERS_VALUE.html), and the specified value must be *X*. By default, the first selection parameter in a radio button group is set to the value *X* and the rest are set to blank.

The addition `USER-COMMAND` can be used to assign a function code `fcode` to the first selection parameter in a radio button group. The function code `fcode` must be specified directly and can contain a maximum of 20 characters. To evaluate the function code, an [interface work area](ABENINTERFACE_WORK_AREA_GLOSRY.html) of the structure `SSCRFIELDS` from the ABAP Dictionary can be declared using the statement [`TABLES`](ABAPTABLES.html). When the user selects any radio button from the radio button group on the selection screen, the runtime framework raises the event [`AT SELECTION-SCREEN`](ABAPAT_SELECTION-SCREEN.html) and passes the function code `fcode` to the component `ucomm` of the interface work area `sscrfields`. If a function code used in the GUI status of the selection screen is specified for `fcode`, the [selection screen processing](ABENSELECTION_SCREEN_EVENTS.html) is affected accordingly.

This addition creates a [dropdown list box](ABENDROPDOWN_LISTBOX_GLOSRY.html) for an input field on the selection screen. The dropdown list box can be supplied with a selection list as follows:

The addition `VISIBLE LENGTH` must be used to specify the visible length of the input field. The length must be specified explicitly since the length of the entries in the list box is usually different from the actual length of the selection parameter.

The addition `USER-COMMAND` can be used to assign a function code `fcode` to the dropdown list box. The function code `fcode` must be specified directly and can only contain a maximum of 20 characters. To evaluate the function code, an [interface work area](ABENINTERFACE_WORK_AREA_GLOSRY.html) of the structure `SSCRFIELDS` from the ABAP Dictionary can be declared using the statement [`TABLES`](ABAPTABLES.html). When the user selects a line from the list box on the selection screen, the runtime framework raises the event [`AT SELECTION-SCREEN`](ABAPAT_SELECTION-SCREEN.html) and passes the function code `fcode` to the component `ucomm` of the interface work area `sscrfields`. If a function code used in the GUI status of the selection screen is specified for `fcode`, the [selection screen processing](ABENSELECTION_SCREEN_EVENTS.html) is affected accordingly.

For the selection parameter `p`, the system creates a dropdown list box, whose values are created once for event `AT SELECTION-SCREEN OUTPUT` and then passed to function module `VRM_SET_VALUES`.

For the selection parameter `p_carrid`, the system creates a dropdown list box, whose values originate from the input help for data type `SPFLI-CARRID` from the ABAP Dictionary. The selection parameter `p_carrid` is displayed with a length of 20 and filled with the label *Lufthansa*. The user can select another airline, which assigns the three-character airline ID is assigned to the selection parameter. When the function code `onli`, which is linked with the function *Execute* in the GUI status of the default selection screen, is assigned, the events `AT SELECTION-SCREEN` and `START-OF-SELECTION` are raised.

-   If the `TYPE` addition is used to make a reference to a data type in the ABAP Dictionary of type `CHAR` and length 1 whose valid values in the domain are defined as *X* and blank, the selection parameter is displayed automatically as a checkbox on the selection screen.
-   The addition `USER-COMMAND` can, for example, be used for screen layout modifications with the addition `MODIF ID` (see the associated example).
-   If the addition `USER-COMMAND` is specified without the addition `AS CHECKBOX`, and the selection parameter is of type `c` with length 1, it is also displayed as a checkbox. No explicit lengths can be specified in this case either. The addition `OBLIGATORY` is also possible in the syntax but does not make sense for a checkbox.
-   It is not recommended that the system field `sy-ucomm` instead of `sscrfields-ucomm` is evaluated, since this does not guarantee that `sy-ucomm` always contains the correct value in [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html).

-   It is recommended that the radio buttons of a radio button group are defined directly underneath each other. If the selection screen also contains other elements, it is advisable that each radio button group is defined within a framed block.
-   It is not recommended that the system field `sy-ucomm` instead of `sscrfields-ucomm` is evaluated, since this does not guarantee that `sy-ucomm` is always given the correct value in [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html).

-   At the event [`AT SELECTION-SCREEN OUTPUT`](ABAPAT_SELECTION-SCREEN_EVENTS.html) or [`AT SELECTION-SCREEN ON VALUE-REQUEST FOR para`](ABAPAT_SELECTION-SCREEN_EVENTS.html), the function module `VRM_SET_VALUES` can be called to which the name of the selection parameter and a suitable list are passed in an internal table of type `VRM_VALUES` from the type pool `VRM`. The column `TEXT` of this table is displayed in the list box, and when a line is selected, the value from column `KEY` is added to the selection parameter.
-   If the function module `VRM_SET_VALUES` is not called and the selection parameter is created with a data type from the ABAP Dictionary, and the data type is linked with the input help of the dictionary, the first column of the input help is displayed in the list box.
-   Otherwise, a single-line list box is displayed containing the current value of the selection parameter.

-   Without the addition `USER-COMMAND`, selecting a line in the dropdown list box does not raise the event `AT SELECTION-SCREEN`.
-   It is not recommended that the system field `sy-ucomm` instead of `sscrfields-ucomm` is evaluated, since this does not guarantee that `sy-ucomm` is always given the correct value in [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html).

PARAMETERS p TYPE i AS LISTBOX VISIBLE LENGTH 10. \\n\\ \\nAT SELECTION-SCREEN OUTPUT. \\n CALL FUNCTION 'VRM\_SET\_VALUES' \\n EXPORTING \\n id = CONV vrm\_id( 'P' ) \\n values = VALUE vrm\_values( \\n FOR i = 1 UNTIL i > 10 \\n ( key = i text = |Value \\{ i \\}| ) ). PARAMETERS p\_carrid TYPE spfli-carrid \\n AS LISTBOX VISIBLE LENGTH 20 \\n USER-COMMAND onli \\n DEFAULT 'LH'. \\n\\ \\nAT SELECTION-SCREEN. \\n ... \\n\\ \\nSTART-OF-SELECTION. \\n ... abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapparameters.html