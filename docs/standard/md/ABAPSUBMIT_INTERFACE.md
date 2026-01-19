---
title: "ABAPSUBMIT_INTERFACE"
description: |
  ABAPSUBMIT_INTERFACE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSUBMIT_INTERFACE.htm"
abapFile: "ABAPSUBMIT_INTERFACE.html"
keywords: ["select", "if", "catch", "data", "ABAPSUBMIT", "INTERFACE"]
---

`... [USING SELECTION-SCREEN dynnr]`\\ 
    `[VIA SELECTION-SCREEN]`\\ 
    ``[[`selscreen_parameters`](ABAPSUBMIT_SELSCREEN_PARAMETERS.html)]...``

[1. `... USING SELECTION-SCREEN dynnr`](#ABAP_ADDITION_1@3@)

[2. `... VIA SELECTION-SCREEN`](#ABAP_ADDITION_2@3@)

The addition `USING SELECTION-SCREEN` specifies the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) and `VIA SELECTION-SCREEN` determines whether it is displayed. The additions [`selscreen_parameters`](ABAPSUBMIT_SELSCREEN_PARAMETERS.html) supply values to the parameters and selection criteria, as well as the dynamic selection of the called selection screen.

The values are passed to the selection screen between the events [`INITIALIZATION`](ABAPINITIALIZATION.html) and [`AT SELECTION SCREEN OUTPUT`](ABAPAT_SELECTION-SCREEN.html). The following hierarchy applies to the passing of the values:

[Dynamic selections](ABENDYNAMIC_SELECTION_GLOSRY.html) are supplied independently of this hierarchy.

This addition defines which [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) is called. Here, `dynnr` is a data object that must contain the [dynpro number](ABENDYNPRO_NUMBER_GLOSRY.html) of a selection screen defined in the called program when the statement `SUBMIT` is executed.

If this addition is specified, the selection screen is displayed on the screen, otherwise background selection screen processing takes place. In background selection screen processing, the [selection screen events](ABENSELECTION_SCREEN_EVENT_GLOSRY.html) are raised without the selection screen being displayed on the screen.

[Program Calls, Filling the Selection Screen](ABENSUBMIT_SELSCREEN_ABEXA.html)

-   The options for parameter passing can be used to view a selection screen as a parameter interface of an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html). This applies in particular to background [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html) and to parameters and selection criteria defined without screen elements using the addition [`NO-DISPLAY`](ABAPPARAMETERS_SCREEN.html)
-   When data is passed, any adjustments made to the screen format, such as reductions and the execution of [conversion exits](ABENCONVERSION_EXIT_GLOSRY.html), should not be executed for fields for which there are no screen elements on the selection screen. This applies to all parameters and selection criteria defined with `NO DISPLAY`. It also applies to all lines in a ranges table with the exception of the first line.
-   The additions `selscreen_parameters` only take effect the first time the called program is executed. If a selection screen is displayed in the called program, the runtime framework calls the program again after it has ended, replacing the values specified in `selscreen_parameters` with the previous input values.

-   If the addition `USING SELECTION-SCREEN` is omitted or the dynpro number 1000 is specified, the standard selection screen is called. If no standard selection screen is defined in the called program, no selection screen is called.
-   If a dynpro number not equal to 1000 is specified in the addition `USING SELECTION-SCREEN`, the corresponding standalone selection screen is called. If no selection screen with this dynpro number is defined in the called program, an uncatchable exception is raised.

1.  First, the [selection screen variant](ABENVARIANT_GLOSRY.html) of the addition `USING SELECTION-SET` is passed, which sets all parameters and selection criteria to the values of the variant. The values previously set in the called program are overwritten.
2.  The values of the table of the addition `WITH SELECTION-TABLE` are then passed. All parameters and selection criteria specified here are overwritten accordingly.
3.  Finally, the values of the additions `WITH sel value` are passed. All parameters and selection criteria specified here are overwritten accordingly. If the addition `WITH sel value` is used more than once for the same parameter, the parameter is overwritten with the last specified value. If the addition `WITH sel value` is used more than once for the same [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html), a [ranges table](ABENRANGES_TABLE_GLOSRY.html) with the corresponding number of lines is passed.

abenabap.html abenabap\_reference.html abenabap\_execution.html abenabap\_program\_call.html abenabap\_submit\_report.html abapsubmit.html