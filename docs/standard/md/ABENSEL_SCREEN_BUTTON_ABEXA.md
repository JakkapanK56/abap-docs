---
title: "ABENSEL_SCREEN_BUTTON_ABEXA"
description: |
  ABENSEL_SCREEN_BUTTON_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSEL_SCREEN_BUTTON_ABEXA.htm"
abapFile: "ABENSEL_SCREEN_BUTTON_ABEXA.html"
keywords: ["select", "do", "if", "case", "data", "ABENSEL", "SCREEN", "BUTTON", "ABEXA"]
---

This example demonstrates how pushbuttons with function codes can be defined on selection screens.

This example defines four pushbuttons on a selection screen that is displayed as a dialog box. The selection screen is defined in a chained statement for the keyword `SELECTION-SCREEN`.

*CLI1*, *CLI2*, *CLI3*, and *CLI4* are used for `fcode`. If the user chooses a pushbutton, the runtime framework raises the `AT SELECTION-SCREEN` event. The program is resumed after `CALL SELECTION-SCREEN` only if the user chooses Execute.

REPORT demo\_sel\_screen\_pushbutton.\\n\\nTABLES sscrfields.\\n\\nDATA flag(1) TYPE c.\\n\\nSELECTION-SCREEN:\\n BEGIN OF SCREEN 500 AS WINDOW TITLE tit,\\n BEGIN OF LINE,\\n PUSHBUTTON 2(10) but1 USER-COMMAND cli1,\\n PUSHBUTTON 12(10) text-020 USER-COMMAND cli2,\\n END OF LINE,\\n BEGIN OF LINE,\\n PUSHBUTTON 2(10) but3 USER-COMMAND cli3,\\n PUSHBUTTON 12(10) text-040 USER-COMMAND cli4,\\n END OF LINE,\\n END OF SCREEN 500.\\n\\nAT SELECTION-SCREEN.\\n\\n MESSAGE i102(sabapdemos) WITH text-001 sscrfields-ucomm.\\n CASE sscrfields-ucomm.\\n WHEN 'CLI1'.\\n flag = '1'.\\n WHEN 'CLI2'.\\n flag = '2'.\\n WHEN 'CLI3'.\\n flag = '3'.\\n WHEN 'CLI4'.\\n flag = '4'.\\n ENDCASE.\\n\\nSTART-OF-SELECTION.\\n\\n tit = 'Four Buttons'.\\n but1 = 'Button 1'.\\n but3 = 'Button 3'.\\n\\n CALL SELECTION-SCREEN 500 STARTING AT 10 10.\\n\\n CASE flag.\\n WHEN '1'.\\n WRITE / 'Button 1 was clicked'.\\n WHEN '2'.\\n WRITE / 'Button 2 was clicked'.\\n WHEN '3'.\\n WRITE / 'Button 3 was clicked'.\\n WHEN '4'.\\n WRITE / 'Button 4 was clicked'.\\n WHEN OTHERS.\\n WRITE / 'No Button was clicked'.\\n ENDCASE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_layout.html abapselection-screen\_pushbutton.html