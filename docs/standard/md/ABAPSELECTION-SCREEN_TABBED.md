---
title: "ABAPSELECTION-SCREEN_TABBED"
description: |
  ABAPSELECTION-SCREEN_TABBED - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_TABBED.htm"
abapFile: "ABAPSELECTION-SCREEN_TABBED.html"
keywords: ["select", "do", "if", "case", "catch", "data", "ABAPSELECTION", "SCREEN", "TABBED"]
---

[Short Reference](ABAPSELECTION-SCREEN_BOTB_SHORTREF.html)

`SELECTION-SCREEN BEGIN OF TABBED BLOCK tblock FOR n LINES [NO INTERVALS].`\\ 
`...`\\ 
`[SELECTION-SCREEN TAB (len) tab USER-COMMAND fcode`\\ 
                  `[DEFAULT [PROGRAM prog] SCREEN dynnr]`\\ 
                  ``[[`MODIF ID modid`](ABAPSELECTION-SCREEN_MODIF_ID.html)]``\\ 
                  ``[[`ldb_additions`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html)].]``\\ 
`...`\\ 
`SELECTION-SCREEN END OF BLOCK tblock.`

[1. `... NO INTERVALS`](#ABAP_ADDITION_1@3@)

[2. `... USER-COMMAND fcode`](#ABAP_ADDITION_2@3@)

[3. `... DEFAULT [PROGRAM prog] SCREEN dynnr`](#ABAP_ADDITION_3@3@)

The first and last statements define a [tabstrip](ABENTABSTRIP_CONTROL_GLOSRY.html) area with the name `tblock` on the current [selection screen](ABENSELECTION_SCREEN_GLOSRY.html). The name `tblock` must be specified directly and can contain a maximum of 16 characters. The number of lines in the tabstrip area is determined by a number `n`, which must be specified directly and can contain a maximum of three characters but must not exceed 197. The current selection screen cannot be defined as a [subscreen dynpro](ABENSUBSCREEN_DYNPRO_GLOSRY.html) using [`AS SUBSCREEN`](ABAPSELECTION-SCREEN_SUBSCREEN.html).

Within the statements defining a tabstrip area, there can only be `SELECTION-SCREEN` statements with a `TAB` addition, and these can only be used here. These statements define [tab titles](ABENTAB_TITLE_GLOSRY.html) with the name `tab` and a length of `len`. The names `tab` must be specified directly and can contain a maximum of 8 characters. The lengths `len` must be specified directly as positive numbers with a maximum of two digits and a value of no more than 79. If the width of all tab titles is greater than the width of this area, a scroll bar is configured automatically so that all pages can be accessed.

The system automatically creates an identically named global variable with type `c` and with a length of 83 for each tab title. The content of the variables is displayed as the label for the tab title on the selection screen. The addition [`MODIF ID`](ABAPSELECTION-SCREEN_MODIF_ID.html) assigns the tab title to the [modification group](ABENMODIFICATION_GROUP_GLOSRY.html)\\ `modid`. The [`ldb_additions`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html) can only be used in the selection include of a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html).

If no `SELECTION-SCREEN` statement with the addition `TAB` is included within the statements for the definition of a tab area, a tab area is defined without a tab title. This special case acts as the definition of a [subscreen area](ABENSUBSCREEN_ARREA_GLOSRY.html) for the integration of a single [subscreen dynpro](ABENSUBSCREEN_DYNPRO_GLOSRY.html) on the selection screen. The subscreen dynpro is assigned dynamically (see below).

The tabstrip area is created narrow enough that a [subscreen dynpro](ABENSUBSCREEN_DYNPRO_GLOSRY.html) created using the addition `NO INTERVALS` of [`AS SUBSCREEN`](ABAPSELECTION-SCREEN_SUBSCREEN.html) can fit in it.

The addition `NO INTERVALS` of `TABBED BLOCK` has no effect on the [selection criteria](ABENSELECTION_CRITERION_GLOSRY.html) of selection screens, which are integrated as subscreen dynpros in the tab area.

Each tab title must be assigned a function code `fcode` using the addition `USER-COMMAND`. The function codes `fcode` must be specified directly and can contain a maximum of 20 characters. When the user selects a tab, the associated function code can be taken from the component `ucomm` of the structure `sscrfields` after the event [`AT SELECTION-SCREEN`](ABAPAT_SELECTION-SCREEN.html). For this purpose, this component must be declared as an [interface work area](ABENINTERFACE_WORK_AREA_GLOSRY.html) with reference to the structure `SSCRFIELDS` using the statement [`TABLES`](ABAPTABLES.html).

Each tab title must be assigned a [subscreen dynpro](ABENSUBSCREEN_DYNPRO_GLOSRY.html) whose [screen layout](ABENSCREEN_GLOSRY.html) is displayed as a tab page when the tab title is selected. If this assignment is missing or incorrect when the selection screen is sent, an uncatchable exception is raised.

**Dynamic Assignment**

For each tabstrip area, an identically named global structure is created in the current program. This structure has the following three components: `prog` of type `c` with length 40, `dynnr` of type `c` and length 4, and `activetab` of type `c` with length 132. If the addition `DEFAULT` is not specified, the name of the ABAP program in which the required subscreen dynpro is defined, the number of the subscreen dynpro, and the function code of the tab title must be assigned to these components before the selection screen is sent. An assignment to the component `activetab` at the event [`AT SELECTION-SCREEN`](ABAPAT_SELECTION-SCREEN.html) is ignored. Instead, this is automatically overwritten with the function code of the selected tab title before the event [`AT SELECTION-SCREEN OUTPUT`](ABAPAT_SELECTION-SCREEN_EVENTS.html) of the current selection screen.

For a pure subscreen area, that is, a tabstrip area without a tab title, dynamic assignment must be used. Before the selection screen is sent, the program name must be assigned to the component `prog` and the dynpro number of the subscreen dynpro must be assigned to the component `dynnr` (for an example, see the program `DEMO_SEL_SCREEN_WITH_SUBSCREEN`).

**Static Assignment**

If the addition `DEFAULT` is specified, the tab title is assigned the subscreen dynpro for the [number](ABENDYNPRO_NUMBER_GLOSRY.html)\\ `dynnr` of the program `prog`. The dynpro number and program must be specified directly. If the addition `PROGRAM` is not specified, the subscreen dynpro is searched for in the current program. A subscreen dynpro that is assigned statically with `DEFAULT` can also be overwritten dynamically.

If the `DEFAULT` addition is specified, it is possible to define that the screen element for a tab page is displayed when the selection screen is sent by assigning the name of the tab title to the component `activetab`. The other components are filled with the values specified for `DEFAULT` when the selection screen is sent. The first page is displayed as standard.

If an assigned subscreen screen is not a selection screen, the dialog modules that are accessed during its flow logic must be defined in the current program. If an assigned subscreen dynpro is a selection screen, user actions on the [subscreen](ABENSUBSCREEN_GLOSRY.html) produce the event [`AT SELECTION-SCREEN`](ABAPAT_SELECTION-SCREEN.html). This includes the selection of a tab title. The event `AT SELECTION-SCREEN` is executed first for the included subscreen in the selection screen and then for the including selection screen.

Defines a tabstrip control `mytab` on the [standard selection screen](ABENSTANDARD_SELSCREEN_GLOSRY.html) and includes the selection screens `100` and `200`, which are defined as subscreen dynpros, in an executable program. The assignment of the subscreen screens to the tab titles takes place dynamically. For an example of a static assignment with the addition `DEFAULT`, refer to [`SELECTION-SCREEN - AS SUBSCREEN`](ABAPSELECTION-SCREEN_SUBSCREEN.html).

-   If a function code used in the GUI status of the selection screen is specified for `fcode`, the [selection screen processing](ABENSELECTION_SCREEN_EVENTS.html) is affected accordingly.
-   It is not recommended that the system field `sy-ucomm` instead of `sscrfields-ucomm` is evaluated, since this does not guarantee that `sy-ucomm` is always given the correct value in [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html).

TABLES sscrfields. \\n\\ \\nSELECTION-SCREEN BEGIN OF SCREEN 100 AS SUBSCREEN. \\nPARAMETERS: p1 TYPE c LENGTH 10, \\n p2 TYPE c LENGTH 10, \\n p3 TYPE c LENGTH 10. \\nSELECTION-SCREEN END OF SCREEN 100. \\n\\ \\nSELECTION-SCREEN BEGIN OF SCREEN 200 AS SUBSCREEN. \\nPARAMETERS: q1 TYPE c LENGTH 10, \\n q2 TYPE c LENGTH 10, \\n q3 TYPE c LENGTH 10. \\nSELECTION-SCREEN END OF SCREEN 200. \\n\\ \\nSELECTION-SCREEN: BEGIN OF TABBED BLOCK mytab FOR 10 LINES, \\n TAB (20) button1 USER-COMMAND push1, \\n TAB (20) button2 USER-COMMAND push2, \\n END OF BLOCK mytab. \\n\\ \\nINITIALIZATION. \\n button1 = 'Selection Screen 1'. \\n button2 = 'Selection Screen 2'. \\n mytab-prog = sy-repid. \\n mytab-dynnr = 100. \\n mytab-activetab = 'PUSH1'. \\n\\ \\nAT SELECTION-SCREEN. \\n CASE sy-dynnr. \\n WHEN 1000. \\n CASE sscrfields-ucomm. \\n WHEN 'PUSH1'. \\n mytab-dynnr = 100. \\n WHEN 'PUSH2'. \\n mytab-dynnr = 200. \\n WHEN OTHERS. \\n ... \\n ENDCASE. \\n ... \\n ENDCASE. abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_layout.html