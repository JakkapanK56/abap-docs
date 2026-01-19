---
title: "ABAPCALL_SELECTION_SCREEN"
description: |
  ABAPCALL_SELECTION_SCREEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_SELECTION_SCREEN.htm"
abapFile: "ABAPCALL_SELECTION_SCREEN.html"
keywords: ["select", "do", "if", "case", "catch", "data", "ABAPCALL", "SELECTION", "SCREEN"]
---

[Short Reference](ABAPCALL_SELECTION-SCREEN_SHORTREF.html)

`CALL SELECTION-SCREEN dynnr`\\ 
                      `[STARTING AT col1 lin1`\\ 
                      `[ENDING   AT col2 lin2]]`\\ 
                      `[USING SELECTION-SET variant].`

[1. `... STARTING AT col1 lin1 [ENDING AT col2 lin2]`](#ABAP_ADDITION_1@3@)

[2. `... USING SELECTION-SET variant`](#ABAP_ADDITION_2@3@)

This statement calls the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) with the [dynpro number](ABENDYNPRO_NUMBER_GLOSRY.html) specified in `dynnr` and starts its [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html). `dynnr` expects a data object of the type `n` and the length 4.

The statement `CALL SELECTION-SCREEN` accesses the selection screens of the respective [main program](ABENMAIN_PROGRAM_GLOSRY.html) of the current [program group](ABENPROGRAM_GROUP_GLOSRY.html). These selection screens work with the selection parameters and selection criteria of the main program and raise the selection screen processing in the main program. An uncatchable exception is raised if the specified selection screen is not contained in the main program of the program group.

Any selection screen of the main program can be called, in particular the standard selection screen. The default setting is the display of the selection screen in the GUI window of the preceding dynpro.

The addition `STARTING AT` creates a modal dialog box and displays the selection screen. The upper left corner of the dialog box is determined by the values in `col1` and `lin1` for column and line. These values refer to the GUI window with the [popup level](ABENPOP-UP_LEVEL_GLOSRY.html) 0. The bottom right corner is either set automatically or it can be specified in `col2` and `lin2` after `ENDING AT`. `col1`, `lin1`, `col2`, and `lin2` expect data objects of the type `i`. The values of `col1`, `lin1` should be less than `col2`, `lin2`, otherwise the behavior will be undefined.

The addition `USING SELECTION-SET` fills the selection parameters and selection criteria of the selection screen with the values of a [selection screen variant](ABENVARIANT_GLOSRY.html) specified in `variant`. The values are passed to the associated data objects of the program immediately before the event [`AT SELECTION-SCREEN OUTPUT`](ABAPAT_SELECTION-SCREEN.html). `variant` expects a [character-like data object](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html) which, when the statement is executed, contains the name of a [selection screen variant](ABENVARIANT_GLOSRY.html) of the main program stored for the selection screen in uppercase letters. If a nonexistent variant or a variant of another selection screen of the main program is specified, the addition is ignored.

See the example in [`SELECTION-SCREEN BEGIN OF SCREEN`](ABAPSELECTION-SCREEN_NORMAL.html).

-   Except when calling a selection screen from an externally called subroutine, the main program, where the selection screen must be available, is usually the current program. In an externally called subroutine, the main program depends on the organization of the [programs in the internal session](ABENINTERNAL_SESSION.html) which depends on the current [call sequence](ABENPROGRAM_GROUPS.html).
-   The statement [`CALL SCREEN`](ABAPCALL_SCREEN.html) cannot be used to call selection screens, since otherwise the proper execution of the selection screen processing cannot be guaranteed.
-   If the called selection screen is displayed in a dialog box, it is advisable to use the addition `AS WINDOW` when specifying the selection screen.

`sy-subrc` **Meaning** 0 The user selected the function *Execute* or *Execute + Print* on the selection screen. 4 The user selected *Back*, *Exit*, or *Cancel* on the selection screen. abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_call.html