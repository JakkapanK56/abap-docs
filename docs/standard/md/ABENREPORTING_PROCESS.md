---
title: "ABENREPORTING_PROCESS"
description: |
  ABENREPORTING_PROCESS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENREPORTING_PROCESS.htm"
abapFile: "ABENREPORTING_PROCESS.html"
keywords: ["select", "if", "data", "ABENREPORTING", "PROCESS"]
---

The statement [`SUBMIT`](ABAPSUBMIT.html) loads the called program into a separate [internal session](ABENINTERNAL_SESSION_GLOSRY.html) and starts a sequence of processes in the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) that raise events and actions in the called program in the following order:

The called program can be exited in any of these steps by using the statement [`LEAVE PROGRAM`](ABAPLEAVE_LIST-PROCESSING.html) and during list processing by using [`LEAVE LIST-PROCESSING`](ABAPLEAVE_PROGRAM.html).

-   If the called program is linked with a logical database, the system calls the relevant subroutines of the [database program](ABENDATABASE_PROGRAM_GLOSRY.html) for the steps listed above. More information can be found under [Logical Databases - Associated with Executable Programs](ABENLDB_USAGE_EXECUTABLE.html).
-   After the events `START-OF-SELECTION` and `END-OF-SELECTION`, the obsolete event [`START-OF-EDITING`](ABAPSTART-OF-EDITING.html) or [`END-OF-EDITING`](ABAPEND-OF-EDITING.html) is raised. It is possible to implement an event block for this event, but this is unnecessary.

1.  [Program constructor event](ABENPROGRAM_CONSTRUCT_EVENT_GLOSRY.html)\\ [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html).
2.  Passing the [start values](ABENSTART_VALUE_GLOSRY.html) defined using the addition `DEFAULT` in the statements [`PARAMETERS`](ABAPPARAMETERS.html) and [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html) to the corresponding data objects. The start values of all other data objects are set before `LOAD-OF-PROGRAM`.
3.  [Reporting event](ABENREPORTING_EVENT_GLOSRY.html)\\ [`INITIALIZATION`](ABAPINITIALIZATION.html).
4.  Calling of the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) specified in [`selscreen_options`](ABAPSUBMIT_INTERFACE.html) if it contains at least one input field or a button. If no explicit selection screen is specified, the standard selection screen is called. Here, the [selection screens are processed](ABENSELSCREEN_PROCESSING_GLOSRY.html) completely. After the selection screen processing, the program flow is either continued or ended, depending on the last user action on the selection screen. Before the first event of the selection screen processing, [`AT SELECTION-SCREEN OUTPUT`](ABAPAT_SELECTION-SCREEN.html), the values specified in `selscreen_options` are passed.
5.  [Reporting event](ABENREPORTING_EVENT_GLOSRY.html)\\ [`START-OF-SELECTION`](ABAPSTART-OF-SELECTION.html)
6.  Different [`GET`](ABAPGET-.html) events, if the called program is linked to a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html).
7.  [Reporting event](ABENREPORTING_EVENT_GLOSRY.html)\\ [`END-OF-SELECTION`](ABAPEND-OF-SELECTION.html).
8.  Calling of the [basic list](ABENBASIC_LIST_GLOSRY.html).

1.  If the basic list is empty, the program is terminated.
2.  If the basic list is a spool list, it is sent to the SAP spool system and the program is terminated.
3.  If [`EXPORTING LIST TO MEMORY`](ABAPSUBMIT_LIST_OPTIONS.html) is specified in `list_options`, the basic list is stored in the [ABAP memory](ABENABAP_MEMORY_GLOSRY.html) and the program terminates.
4.  Otherwise, the basic list is a screen list and is displayed on the screen. User actions on a displayed screen list raise list events. The program is terminated when the user exits the list display.

10.  If no selection screen is displayed in step 4, because processing is either performed in the background or not at all, the program flow is terminated.
11.  If a selection screen is displayed in step 4, the runtime framework calls the called program again after exiting the basic list (or, if the basic list is empty, after ending the program). This loads the program again and the corresponding actions and events are performed again, starting with [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html). In this new call, the runtime framework supplies the parameters, the selection criteria, and the dynamic selections of the selection screen between the events [`INITIALIZATION`](ABAPINITIALIZATION.html) and [`AT SELECTION-SCREEN OUTPUT`](ABAPAT_SELECTION-SCREEN_EVENTS.html) with the previous input values (other settings, such as which tabstrip page was active, are not passed). The program call is not ended until the user exits selection screen processing by choosing *Back*, *Exit*, or *Cancel*.

abenabap.html abenabap\_reference.html abenabap\_execution.html abenabap\_program\_call.html abenabap\_submit\_report.html