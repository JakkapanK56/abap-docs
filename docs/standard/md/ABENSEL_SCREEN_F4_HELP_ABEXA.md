---
title: "ABENSEL_SCREEN_F4_HELP_ABEXA"
description: |
  ABENSEL_SCREEN_F4_HELP_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSEL_SCREEN_F4_HELP_ABEXA.htm"
abapFile: "ABENSEL_SCREEN_F4_HELP_ABEXA.html"
keywords: ["select", "do", "while", "if", "data", "ABENSEL", "SCREEN", "HELP", "ABEXA"]
---

The example demonstrates a user-defined `F4` help for a selection parameter on a selection screen.

This program declares a selection screen with two selection parameters that both refer to the column `CARRID` of the database table `SPFLI`. While the dictionary input help is used for `p_carr_1`, a separate input help is programmed for `p_carr_2`. Dynpro 100 is called for this. In the flow logic, the dialog module `value_list` is called at the PBO event. The screen of dynpro 100 is not required and the system does not call any dialog modules at PAI time.

PROCESS BEFORE OUTPUT. \\n  MODULE value\_list. \\nPROCESS AFTER INPUT.

The dialog module `value_list` suppresses the display of the screen layout of dynpro 100 and switches to a list display. The list contains values for the selection parameter `p_carr_2`. These values are also placed in the `HIDE` area. When a line is selected from the value list, the event `AT LINE-SELECTION` is raised, and the selected value is passed from the area `HIDE` to the field `p_carr_2`. If a valid line is selected, the system switches directly from the event block `AT LINE-SELECTION` back to the selection screen and fills the corresponding input field.

REPORT demo\_selection\_screen\_f4.\\n\\nPARAMETERS: p\_carr\_1 TYPE spfli-carrid,\\n p\_carr\_2 TYPE spfli-carrid.\\n\\nAT SELECTION-SCREEN ON VALUE-REQUEST FOR p\_carr\_2.\\n CALL SCREEN 100 STARTING AT 10 5\\n ENDING AT 50 10.\\n\\nMODULE value\_list OUTPUT.\\n SUPPRESS DIALOG.\\n LEAVE TO LIST-PROCESSING AND RETURN TO SCREEN 0.\\n SET PF-STATUS space.\\n NEW-PAGE NO-TITLE.\\n WRITE 'Star Alliance' COLOR COL\_HEADING.\\n ULINE.\\n p\_carr\_2 = 'AC '.\\n WRITE: / p\_carr\_2 COLOR COL\_KEY, 'Air Canada'.\\n HIDE p\_carr\_2.\\n p\_carr\_2 = 'LH '.\\n WRITE: / p\_carr\_2 COLOR COL\_KEY, 'Lufthansa'.\\n HIDE p\_carr\_2.\\n p\_carr\_2 = 'SAS'.\\n WRITE: / p\_carr\_2 COLOR COL\_KEY, 'SAS'.\\n HIDE p\_carr\_2.\\n p\_carr\_2 = 'THA'.\\n WRITE: / p\_carr\_2 COLOR COL\_KEY, 'Thai International'.\\n HIDE p\_carr\_2.\\n p\_carr\_2 = 'UA '.\\n WRITE: / p\_carr\_2 COLOR COL\_KEY, 'United Airlines'.\\n HIDE p\_carr\_2.\\n CLEAR p\_carr\_2.\\nENDMODULE.\\n\\nAT LINE-SELECTION.\\n CHECK NOT p\_carr\_2 IS INITIAL.\\n LEAVE TO SCREEN 0.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_events.html abapat\_selection-screen.html abapat\_selection-screen\_events.html