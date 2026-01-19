---
title: "ABAPAT_LIST_EVENT"
description: |
  ABAPAT_LIST_EVENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPAT_LIST_EVENT.htm"
abapFile: "ABAPAT_LIST_EVENT.html"
keywords: ["select", "do", "if", "data", "ABAPAT", "LIST", "EVENT"]
---

``AT [`LINE-SELECTION`](ABAPAT_LINE-SELECTION.html)``\\ 
  ``|\ [`USER-COMMAND`](ABAPAT_USER-COMMAND.html)``\\ 
  ``|\ [`PFnn`](ABAPAT_PFNN.html).``

Defines event blocks for interactive list processing. The associated events occur if the screen cursor is positioned on a line in a displayed list and the user chooses an appropriate function. Each interactive list event increases the system field `sy-lsind` by one.

If the cursor is positioned on a line in a list displayed on the screen in an interactive list event, all the values stored using [`HIDE`](ABAPHIDE.html) and belonging to the relevant line are assigned the respective variables and the following system fields are filled with data:

After each list event `AT LINE-SELECTION`, `AT PFnn`, and `AT USER-COMMAND`, the statement [`NEW-PAGE PRINT OFF`](ABAPNEW-PAGE_PRINT.html) is executed implicitly.

The list event [`AT PFnn`](ABAPAT_PFNN.html) is obsolete and the other two list events, preferably [`AT USER-COMMAND`](ABAPAT_USER-COMMAND.html), should be used instead.

**System Field** **Meaning** `sy-cpage` Page number of the first displayed page of the list from which the event was raised `sy-cucol` Position of the column in the GUI window from which the event was raised (counting starts with 2) `sy-curow` Position of the line in the GUI window from which the event was raised (counting starts with 1) `sy-lilli` Number of the line from which the event was raised `sy-lisel` Content of the line that raised the event (is limited to the first 255 characters) `sy-listi` Index of the list from which the event was raised `sy-lsind` Index of the list level that was created in the event block `sy-staco` Number of the first column displayed in the list from which the event was raised (counting starts with 1) `sy-staro` Number of the first line of the first page displayed of the list from which the event was raised (counting starts with 1) `sy-ucomm` Function code to which the user action that raised the event is assigned abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists\_interactive.html