---
title: "ABAPLEAVE_TO_LIST-PROCESSING"
description: |
  ABAPLEAVE_TO_LIST-PROCESSING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLEAVE_TO_LIST-PROCESSING.htm"
abapFile: "ABAPLEAVE_TO_LIST-PROCESSING.html"
keywords: ["select", "do", "while", "if", "case", "data", "ABAPLEAVE", "LIST", "PROCESSING"]
---

[Short Reference](ABAPLEAVE_TO_LIST-PROCESS_SHORTREF.html)

`LEAVE TO LIST-PROCESSING [AND RETURN TO SCREEN dynnr].`

[`... AND RETURN TO SCREEN dynnr`](#ABAP_ONE_ADD@1@)

This statement can be executed during [PBO](ABENPBO_GLOSRY.html) and [PAI](ABENPAI_GLOSRY.html) processing. After the current dynpro is processed, this statement interrupts the current [dynpro sequence](ABENDYNPRO_SEQUENCE_GLOSRY.html), starts the list processor, and displays the basic list. The basic list consists of any list output of all PBO and PAI modules of the dynpro sequence executed to this point. The statement is ignored in the event blocks for [reporting events](ABENREPORTING_EVENT_GLOSRY.html) and [list events](ABENLIST_EVENT_GLOSRY.html).

The [screen layout](ABENSCREEN_GLOSRY.html) of the [list dynpro](ABENLIST_DYNPRO_GLOSRY.html) of the list processor replaces the screen layout displayed in the [popup level](ABENPOP-UP_LEVEL_GLOSRY.html) 0. Any modal dialog boxes stacked above this are hidden while the list is being displayed. The GUI status set in the dynpro sequence is used. Any list events raised by user actions in the GUI window of the list dynpro call the event blocks of the current [main program](ABENMAIN_PROGRAM_GLOSRY.html). Any details lists created there are displayed by the list processor in the GUI window of the basic list, unless the statement [`WINDOW`](ABAPWINDOW.html) is used.

The user can exit the list processor or list display by selecting the functions *Back*, *Exit*, or *Cancel* in the display for list level 0, or by means of a program that uses the [`LEAVE LIST-PROCESSING`](ABAPLEAVE_LIST-PROCESSING.html) statement. By default, the interrupted dynpro sequence resumes by default in both cases with the PBO processing of the dynpro in which the list processor was called.

Using the addition `AND RETURN TO SCREEN`, another dynpro can be specified in `dynnr` for continuing PBO processing. `dynnr` expects a character-like data object that contains the number of a dynpro in the current main program.

[Calling Lists from Dynpro Processing](ABENLEAVE_TO_LIST_PROC_ABEXA.html)

-   If the current dynpro is displayed in a dialog box, the list processor also displays the lists in this window.
-   If the value 0 is specified in `dynnr`, the current dynpro sequence is closed after the list processor is exited.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenlists\_displayed.html