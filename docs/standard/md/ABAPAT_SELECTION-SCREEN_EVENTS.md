---
title: "ABAPAT_SELECTION-SCREEN_EVENTS"
description: |
  ABAPAT_SELECTION-SCREEN_EVENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPAT_SELECTION-SCREEN_EVENTS.htm"
abapFile: "ABAPAT_SELECTION-SCREEN_EVENTS.html"
keywords: ["select", "update", "loop", "do", "if", "data", "ABAPAT", "SELECTION", "SCREEN", "EVENTS"]
---

[Short Reference](ABAPAT_SELECTION-SCREEN_SHORTREF.html)

`... \{ OUTPUT \}`\\ 
  `|\ \{ ON \{para|selcrit\}\ \}`\\ 
  `|\ \{ ON END OF selcrit \}`\\ 
  `|\ \{ ON BLOCK block \}`\\ 
  `|\ \{ ON RADIOBUTTON GROUP group \}`\\ 
  `|\ \{\ \}`\\ 
  `|\ \{ ON \{HELP-REQUEST|VALUE-REQUEST\}`\\ 
      `FOR \{para|selcrit-low|selcrit-high\}\ \}`\\ 
  `|\ \{ ON EXIT-COMMAND \}.`

[1. `... OUTPUT`](#ABAP_ALTERNATIVE_1@2@)

[2. `... ON \{para|selcrit\}`](#ABAP_ALTERNATIVE_2@2@)

[3. `... ON END OF selcrit`](#ABAP_ALTERNATIVE_3@2@)

[4. `... ON BLOCK block`](#ABAP_ALTERNATIVE_4@2@)

[5. `... ON RADIOBUTTON GROUP group`](#ABAP_ALTERNATIVE_5@2@)

[6. `... \{\ \}`](#ABAP_ALTERNATIVE_6@2@)

[7. `... ON \{HELP-REQUEST|VALUE-REQUEST\} FOR \{para|selcrit-low|selcrit-high\}`](#ABAP_ALTERNATIVE_7@2@)

[8. `... ON EXIT-COMMAND`](#ABAP_ALTERNATIVE_8@2@)

These additions allow the individual evaluation of specific elements of the [selection screens](ABENSELECTION_SCREEN_GLOSRY.html) of the program. The information about which selection screen raised the event is in the system field `sy-dynnr`.

This event is raised by the dynpro event [PBO](ABENPBO_GLOSRY.html) of a selection screen. In the event block, the selection screen can be prepared using assignments to the data objects of selection parameters and selection criteria and using dynamic screen modifications.

The following section of an executable program modifies an input field of a selection screen declared using [`PARAMETERS`](ABAPPARAMETERS.html). The field input is made invisible using the characters *\*\*\*...*, which can be used for example, for entering a password.

This event is raised by the dynpro event [PAI](ABENPAI_GLOSRY.html) of a selection screen if the content of the input field of a selection parameter `para` or a line of a [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html)\\ `selcrit` was passed to the ABAP program. The user input can be checked in this event block. Sending a [warning](ABENWARNING_GLOSRY.html) or an [error message](ABENERROR_MESSAGE_GLOSRY.html) in the event block makes the fields `para` and `selcrit` ready for input again.

No selection parameter that is defined as a radio button can be specified. For this purpose, the addition `ON RADIOBUTTON GROUP` is provided.

If a user action takes place in the dialog box for the multiple selection of a selection criterion `selcrit`, the entries of the [selection table](ABENSELECTION_TABLE_GLOSRY.html) are passed to the program, line by line. For each line, the event `AT SELECTION-SCREEN ON selcrit` is raised.

This event is raised after the selection table `selcrit` is passed completely to the program after a user action in the dialog box for the multiple selection has taken place. The entire selection table can be checked in this event block.

This event is raised by the dynpro event PAI of a selection screen if all the input fields of a block `block` of the selection screen were passed to the ABAP program. The user input can be checked in the event block. Sending a warning or an error message in the event block makes all the fields of the block `block` ready for input again.

[Block Processing and Radio Button Processing](ABENSEL_SCREEN_AT_SEL_ON_ABEXA.html)

This event is raised by the dynpro event [PAI](ABENPAI_GLOSRY.html) of a selection screen if all the fields of a radio button group `group` of the selection screen were passed to the ABAP program. The user input can be checked in this event block. Sending a [warning](ABENWARNING_GLOSRY.html) or [error message](ABENERROR_MESSAGE_GLOSRY.html) in the event block makes all the radio buttons of the group `group` ready for input again.

The individual fields of a radio button group are not passed individually and do not raise the event `AT SELECTION-SCREEN ON par`.

[Block Processing and Radio Button Processing](ABENSEL_SCREEN_AT_SEL_ON_ABEXA.html)

The event `AT SELECTION-SCREEN` itself is raised as the last event in selection screen processing if all the input values were passed to the program. All user input can be checked in this event block. Sending a warning or an error message in the event block makes all the screen fields ready for input again.

The two events `ON HELP-REQUEST` and `ON VALUE-REQUEST` are raised by the dynpro events [POH](ABENPOH_GLOSRY.html) and [POV](ABENPOV_GLOSRY.html) of a selection screen if, for the input field of a selection parameter `para` or one of the input fields of a [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html)\\ `selcrit`, the field help F1 or the input help F4 was called. Other [selection events](ABENSELECTION_SCREEN_EVENT_GLOSRY.html) are not raised.

In the event blocks, a user-defined field or input field can be programmed, which overrides any helps defined in ABAP Dictionary. The selection parameters and selection criteria changed in the event blocks for `ON VALUE-REQUEST` are transported to the respective fields of the selection screen.

This event is raised if the user has called one of the functions *Back*, *Exit*, or *Cancel*. Any cleanup actions can be executed in this event block.

The following section of an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) defines a standard selection screen and a further selection screen. In the event blocks `AT SELECTION-SCREEN`, the input in the selection screens can be specially handled using the evaluation of the name `p_carrid` and the [dynpro number](ABENDYNPRO_NUMBER_GLOSRY.html) in `sy-dynnr`.

-   The assignments to input fields in the event block `AT SELECTION-SCREEN OUTPUT` always affect the selection screen and overwrite the user input from previous displays of the same selection screen. Assignments in the event blocks [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html) or [`INITIALIZATION`](ABAPINITIALIZATION.html), on the other hand, only have an effect the first time the program starts.
-   The statement [`MODIFY SCREEN`](ABAPMODIFY_SCREEN.html) can be used during the event `AT SELECTION-SCREEN OUTPUT` to modify properties of screen elements of the selection screen.

-   These event blocks can only be implemented for fields of the selection screen that are defined in the same ABAP program and not in any linked [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html).
-   During the events for the field help and input help no data is transported from the selection screen to the ABAP program. As with general [dynpros](ABENDYNPRO_GLOSRY.html), suitable function modules such as `RS_SELECTIONSCREEN_READ` and `RS_SELECTIONSCREEN_UPDATE` must be used.

-   [Selection Screens - Field Help](ABENSEL_SCREEN_F1_HELP_ABEXA.html)
-   [Selection Screens - Input Help for Selection Parameters](ABENSEL_SCREEN_F1_HELP_ABEXA.html)

PARAMETERS pass(30) TYPE c. \\n\\ \\nAT SELECTION-SCREEN OUTPUT. \\n LOOP AT SCREEN INTO DATA(wa). \\n IF wa-name = 'PASS'. \\n wa-invisible = '1'. \\n MODIFY screen FROM wa. \\n ENDIF. \\n ENDLOOP. \* Global data \\n\\ \\nTABLES sscrfields. \\n\\ \\nDATA: spfli\_tab TYPE TABLE OF spfli, \\n spfli\_wa LIKE LINE OF spfli\_tab. \\n\\ \\n\* Selection screens \\n\\ \\nPARAMETERS p\_carrid TYPE spfli-carrid. \\n\\ \\nSELECTION-SCREEN BEGIN OF SCREEN 500. \\n SELECT-OPTIONS s\_conn FOR spfli\_wa-connid. \\nSELECTION-SCREEN END OF SCREEN 500. \\n\\ \\n\* Handling selection screen events \\n\\ \\nAT SELECTION-SCREEN ON p\_carrid. \\n IF p\_carrid IS INITIAL. \\n MESSAGE 'Please enter a value' TYPE 'E'. \\n ENDIF. \\n AUTHORITY-CHECK OBJECT 'S\_CARRID' \\n ID 'CARRID' FIELD p\_carrid \\n ID 'ACTVT' FIELD '03'. \\n IF sy-subrc = 4. \\n MESSAGE 'No authorization for carrier' TYPE 'E'. \\n ELSEIF sy-subrc <> 0. \\n MESSAGE 'Error in authority check' TYPE 'A'. \\n ELSE. \\n IF sscrfields-ucomm = 'ONLI'. \\n CALL SELECTION-SCREEN '0500'. \\n ENDIF. \\n ENDIF. \\n\\ \\nAT SELECTION-SCREEN. \\n IF sy-dynnr = '0500'. \\n IF s\_conn IS INITIAL. \\n MESSAGE 'Please enter values' TYPE 'W'. \\n ELSE. \\n SELECT \* \\n FROM spfli \\n WHERE carrid = @p\_carrid AND \\n connid IN @s\_conn \\n INTO TABLE @spfli\_tab. \\n IF sy-subrc <> 0. \\n MESSAGE 'No flights found' TYPE 'E'. \\n ENDIF. \\n ENDIF. \\n ENDIF. \\n\\ \\n\* Main program \\n\\ \\nSTART-OF-SELECTION. \\n ... abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_events.html abapat\_selection-screen.html