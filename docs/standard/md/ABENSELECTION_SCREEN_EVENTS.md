---
title: "ABENSELECTION_SCREEN_EVENTS"
description: |
  ABENSELECTION_SCREEN_EVENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSELECTION_SCREEN_EVENTS.htm"
abapFile: "ABENSELECTION_SCREEN_EVENTS.html"
keywords: ["select", "loop", "if", "ABENSELECTION", "SCREEN", "EVENTS"]
---

Selection screen processing encapsulates the [dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html) together with the sending of the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html). No dialog modules of the program are called. Instead, a series of [selection screen events](ABENSELECTION_SCREEN_EVENT_GLOSRY.html) are raised for which event blocks can be programmed. [PBO](ABENPBO_GLOSRY.html) processing raises the event

[PAI](ABENPAI_GLOSRY.html) processing raises a number of different events, depending on the user action.

Selection screen processing of a displayed selection screen is ended only by selection of the following functions of the [GUI status](ABENSELECTION_SCREEN_OVERVIEW.html):

For all other user actions, the selection screen is called again automatically after selection screen processing is ended.

-   [`AT SELECTION-SCREEN`](ABAPAT_SELECTION-SCREEN.html)\\ [`OUTPUT`](ABAPAT_SELECTION-SCREEN_EVENTS.html)

-   [`AT SELECTION-SCREEN`](ABAPAT_SELECTION-SCREEN.html)\\ [`...`](ABAPAT_SELECTION-SCREEN_EVENTS.html)

-   *Execute* or *Execute + Print*
-   Triggers the selection screen events of PAI processing. After this, the event [`START-OF-SELECTION`](ABAPSTART-OF-SELECTION.html) is raised for standard selection screens called using [`SUBMIT`](ABAPSUBMIT.html). For selection screens called using [dialog transactions](ABENDIALOG_TRANSACTION_GLOSRY.html), the program is ended. A call in the program resumes the program after the statement [`CALL SELECTION-SCREEN`](ABAPCALL_SELECTION_SCREEN.html).
-   *Back*, *Exit*, or *Cancel*
-   Triggers the event `AT SELECTION-SCREEN ON EXIT-COMMAND` only. After this, the program is ended for standard selection screens called using `SUBMIT` and dialog transactions. Otherwise, `sy-subrc` is set to 4 and the program resumes after the statement `CALL SELECTION-SCREEN`.

-   The selection screen processing also encapsulates the processing of the [function codes](ABENFUNCTION_CODE_GLOSRY.html) assigned to the control elements of the selection screen. The function code that raises PAI processing is placed in the component `ucomm` of an [interface work area](ABENINTERFACE_WORK_AREA_GLOSRY.html)\\ `sscrfields` with the type of the structure `SSCRFIELDS`. If an interface work area of this type is declared in a program using the statement [`TABLES`](ABAPTABLES.html), the function code can be accessed. It is not advisable to access the system field `sy-ucomm`, however, since it is not possible to guarantee that it has the same value as `sscrfields-ucomm` in all situations.
-   Whether a program resumes depends on the function code that is contained in the `UCOMM` component of the [interface work area](ABENINTERFACE_WORK_AREA_GLOSRY.html)\\ `SSCRFIELDS` at the end of PAI processing. If this is declared using `TABLES` and if this component is set to the value *ONLI* (for example, during processing of the standard selection screen of a program called using `SUBMIT`) and this value is assigned to the function *Execute*, the event `START-OF-SELECTION` is raised after selection screen processing. Overwrites of the system field `sy-ucomm`, however, are ignored.
-   To avoid ending the program following the processing of a selection screen called using a dialog transaction, either the [next dynpro](ABENNEXT_DYNPRO_GLOSRY.html) must be called using [`LEAVE TO SCREEN`](ABAPLEAVE_SCREEN.html) or a new [dynpro sequence](ABENDYNPRO_SEQUENCE_GLOSRY.html) called using [`CALL SCREEN`](ABAPCALL_SCREEN.html) during selection screen processing. The statement [`SET SCREEN`](ABAPSET_SCREEN.html) is not sufficient here.
-   In selection screen processing, the statement [`LOOP AT SCREEN`](ABAPLOOP_AT_SCREEN.html) can be used to access the properties of screen elements on the selection screen.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html