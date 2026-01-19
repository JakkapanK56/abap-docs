---
title: "ABAPSELECTION-SCREEN_NORMAL"
description: |
  ABAPSELECTION-SCREEN_NORMAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_NORMAL.htm"
abapFile: "ABAPSELECTION-SCREEN_NORMAL.html"
keywords: ["select", "do", "if", "ABAPSELECTION", "SCREEN", "NORMAL"]
---

[Short Reference](ABAPSELECTION-SCREEN_BOS_SHORTREF.html)

`SELECTION-SCREEN BEGIN OF SCREEN dynnr [TITLE title]`\\ 
                                       `[AS WINDOW].`\\ 
`...`\\ 
`SELECTION-SCREEN END OF SCREEN dynnr.`

[1. `... TITLE title`](#ABAP_ADDITION_1@3@)

[2. `... AS WINDOW`](#ABAP_ADDITION_2@3@)

These statements can be specified in the global declaration part of executable programs, function pools, and module pools. They create a standalone [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) with the [dynpro number](ABENDYNPRO_NUMBER_GLOSRY.html)\\ `dynnr`. The dynpro number must be specified directly and can have a maximum of four digits.

All [`PARAMETERS`](ABAPPARAMETERS.html), [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html), and [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) statements that are executed within these statements define the screen elements for the standalone selection screen. No further selection screens can be defined within the definition of a selection screen.

The addition `TITLE` can be used to define a title for the title bar of a standalone selection screen. The `title` can either be freely selectable name with a maximum of eight characters or the name of a text symbol from the program in the form `text-idf`, where `idf` is the three-character ID of the text symbol. If a name is chosen freely, the runtime framework generates an identically named type `c` global variant and 70 characters in length. When the selection screen is displayed, the first 70 characters of the text symbol or global variants are placed in the title bar. If the specified text symbol is not found, the name of the text symbol is displayed as the title in the form *TEXT-idf*. If the addition `TITLE` is not specified, the system uses the title of the program defined in the [program properties](ABENPROGRAM_PROPERTY_GLOSRY.html).

When a standalone selection screen is specified with `AS WINDOW`,also [warnings](ABENWARNING_GLOSRY.html) and [error messages](ABENERROR_MESSAGE_GLOSRY.html) that occur during processing of a [selection screen event](ABENSELECTION_SCREEN_EVENT_GLOSRY.html) are displayed as a modal dialog box. The actual shape of the GUI window is not defined until it is accessed using [`CALL SELECTION-SCREEN`](ABAPCALL_SELECTION_SCREEN.html).

The specified dynpro number `dynnr` must not already be assigned to existing dynpros or selection screens. Also note that the number 1000 for the [standard selection screen](ABENSTANDARD_SELSCREEN_GLOSRY.html) cannot be used for a standalone selection screen in an executable program.

Defines and calls a selection screen as a modal dialog box.

SELECTION-SCREEN BEGIN OF SCREEN 500 TITLE title \\n AS WINDOW. \\nPARAMETERS name TYPE sy-uname. \\nSELECTION-SCREEN END OF SCREEN 500. \\n\\ \\ntitle = 'Input name'. \\n\\ \\nCALL SELECTION-SCREEN '0500' STARTING AT 10 10. abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_definition.html