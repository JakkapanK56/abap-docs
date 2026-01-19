---
title: "ABENLIST_WINDOW_ABEXA"
description: |
  ABENLIST_WINDOW_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLIST_WINDOW_ABEXA.htm"
abapFile: "ABENLIST_WINDOW_ABEXA.html"
keywords: ["select", "insert", "do", "if", "case", "ABENLIST", "WINDOW", "ABEXA"]
---

The example shows how to display a details list in the dialog box.

This program sets status `BASIC` for the basic list. In the status `BASIC`, the default function code `PICK` for the key F2 is replaced by the user-defined function code `SELE` (text *`SELECT`*) and `SELE` is inserted in the application toolbar.

For this reason, *`SELECT`*, F2, and double-clicking with the mouse all raise the event `AT USER-COMMAND`. In the corresponding processing block, list levels 1 and 2 have the status `DIALOG` and are output as a dialog box. Like in the status `BASIC`, the default function code `PICK` is replaced in the status `DIALOG` by the function code `SELE` which is inserted in the application toolbar after *Cancel*.

Titles `WI1` and `WI2` are defined for the dialog boxes. In the second dialog box, the function code `SELE` has been disabled using the addition `EXCLUDING` in the statement `SET PF-STATUS`.

The system displays horizontal scroll bars in the dialog boxes since the list width of the dialog boxes is not adjusted and therefore corresponds to the standard width of the basic list.

REPORT demo\_list\_window NO STANDARD PAGE HEADING.\\n\\nSTART-OF-SELECTION.\\n SET PF-STATUS 'BASIC'.\\n WRITE 'Select line for a demonstration of windows'.\\n\\nAT USER-COMMAND.\\n CASE sy-ucomm.\\n WHEN 'SELE'.\\n IF sy-lsind = 1.\\n SET PF-STATUS 'DIALOG'.\\n SET TITLEBAR 'WI1'.\\n WINDOW STARTING AT 5 3 ENDING AT 40 10.\\n WRITE 'Select line for a second window'.\\n ELSEIF sy-lsind = 2.\\n SET PF-STATUS 'DIALOG' EXCLUDING 'SELE'.\\n SET TITLEBAR 'WI2'.\\n WINDOW STARTING AT 45 10 ENDING AT 60 12.\\n WRITE 'Last window'.\\n ENDIF.\\n ENDCASE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenlists\_displayed.html abapwindow.html