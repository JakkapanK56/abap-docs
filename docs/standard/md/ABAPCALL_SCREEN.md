---
title: "ABAPCALL_SCREEN"
description: |
  ABAPCALL_SCREEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_SCREEN.htm"
abapFile: "ABAPCALL_SCREEN.html"
keywords: ["select", "do", "if", "case", "catch", "data", "ABAPCALL", "SCREEN"]
---

[Short Reference](ABAPCALL_SCREEN_SHORTREF.html)

 `CALL SCREEN dynnr              [STARTING AT col1 lin1              [ENDING   AT col2 lin2]].`\\ 

[`... STARTING AT col1 lin1 [ENDING AT col2 lin2]`](#ABAP_ONE_ADD@1@)

This statement calls the [dynpro](ABENDYNPRO_GLOSRY.html) with the [dynpro number](ABENDYNPRO_NUMBER_GLOSRY.html) specified in `dynnr`. `dynnr` expects a data object of the type `n` and the length 4. The call starts a new [dynpro sequence](ABENDYNPRO_SEQUENCE_GLOSRY.html), which is embedded in the current dynpro sequence. The dynpro with dynpro number `dynnr` is the initial dynpro of the dynpro sequence. In a dynpro sequence started by a transaction code, up to 50 other dynpro sequences can be nested.

The called dynpro sequence is ended when one of the dynpros involved branches to the [next dynpro](ABENNEXT_DYNPRO_GLOSRY.html) with the number 0. The program flow is then continued after `CALL SCREEN`.

The statement `CALL SCREEN` accesses the dynpros of the relevant [main program](ABENMAIN_PROGRAM_GLOSRY.html) of the current [program group](ABENPROGRAM_GROUP_GLOSRY.html) and these use the global data and dialog modules of the main program. If the specified dynpro does not exist in the main program of the program group, an uncatchable exception is raised.

By default, the [screens](ABENSCREEN_GLOSRY.html) of all dynpros of the called dynpro sequence are displayed in the current GUI window. The addition `STARTING AT` can be used to open a modal dialog box.

Except when calling a dynpro from an externally called subroutine, the main program, where the dynpro must be available, is usually the current program. In an externally called subroutine, the main program depends on the organization of the [programs in the internal session](ABENINTERNAL_SESSION.html) which depends on the current [call sequence](ABENPROGRAM_GROUPS.html).

The addition `STARTING AT` opens a new [popup level](ABENPOP-UP_LEVEL_GLOSRY.html) and displays all screens of the called dynpro sequence in a modal dialog box. The upper left corner of the dialog box is determined by the values in `col1` and `lin1` for column and line. The values refer to the GUI window with popup level 0. The lower right corner is set automatically or `col2` and `lin2` can be used to specify it after `ENDING AT`. `col1`, `lin1`, `col2`, and `lin2` expect data objects of the type `i`. The values of `col1`, `lin1` should be less than `col2`, `lin2`, otherwise the behavior will be undefined. The maximum popup level is 9.

-   The called dynpro should not be a [selection screen](ABENSELECTION_SCREEN_GLOSRY.html). To call a selection screen, the statement [`CALL SELECTION-SCREEN`](ABAPCALL_SELECTION_SCREEN.html) must be used.
-   When nesting dynpro sequences and creating popup levels, it must be noted that a (nested) dynpro sequence has generally already been entered when the program is being executed and that the system itself can also create other dynpro sequences or popup levels (for example, field or input help or [messages](ABENMESSAGE_GLOSRY.html) in dialog boxes). For this reason, the maximum values of 50 dynpro sequences or nine popup levels within a program should never be used.
-   If during the processing of a modal dialog box a new dynpro sequence is called, it must be started in another popup level. In this case, the statement `CALL SCREEN` cannot be used without the addition `STARTING AT`.
-   When a dynpro is called in a dialog box, the window should be specified as a modal dialog box in its properties and a corresponding `GUI` status set beforehand. It is recommended that a dynpro sequence in a modal dialog box consists of one dynpro only.
-   If there is an open [spool request](ABENSPOOL_REQUEST_GLOSRY.html) during the execution of the statement `CALL SCREEN`, a new [spool list level](ABENSPOOL_LIST_LEVEL_GLOSRY.html) is created. The first list output in the new spool list level creates a new spool request.

-   *Cause:* Dynpro was not found.
    *Runtime error:*\\ `DYNPRO_NOT_FOUND`

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html