---
title: "ABENDYNPRO_MOD_SIMPLE_ABEXA"
description: |
  ABENDYNPRO_MOD_SIMPLE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_MOD_SIMPLE_ABEXA.htm"
abapFile: "ABENDYNPRO_MOD_SIMPLE_ABEXA.html"
keywords: ["loop", "if", "case", "data", "ABENDYNPRO", "MOD", "SIMPLE", "ABEXA"]
---

This example demonstrates how to modify dynpro fields at runtime.

The static next dynpro number of dynpro 100 is 100. The input and output fields are from the structure `DEMO_CONN` in the ABAP Dictionary. The bottom four input and output fields are assigned to the modification group `MOD`. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT. \\n  MODULE status\_0100. \\nPROCESS AFTER INPUT. \\n  MODULE cancel AT EXIT-COMMAND. \\n  MODULE user\_command\_0100.

In the GUI status `SCREEN_100`, the function code `TOGGLE` is linked with a pushbutton. When the program is called, the four input/output fields at the bottom are not displayed as ready for input, because the variable `flag` initially contains a blank. The user can make the fields ready for input or not by using *Display/Change*.

The program `DEMO_DYNPRO_MODIFY_SCREEN` demonstrates further dynamic screen modifications.

REPORT demo\_dynpro\_modify\_simple .\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n save\_ok TYPE sy-ucomm.\\n\\nDATA flag(1) TYPE c.\\n\\nCALL SCREEN 100.\\n\\nMODULE status\_0100 OUTPUT.\\n SET PF-STATUS 'SCREEN\_100'.\\n LOOP AT SCREEN INTO DATA(screen\_wa).\\n IF screen\_wa-group1 = 'MOD'.\\n IF flag = ' '.\\n screen\_wa-input = '0'.\\n ELSEIF flag = 'X'.\\n screen\_wa-input = '1'.\\n ENDIF.\\n MODIFY SCREEN FROM screen\_wa.\\n ENDIF.\\n ENDLOOP.\\nENDMODULE.\\n\\nMODULE cancel.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE user\_command\_0100 INPUT.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\n CASE save\_ok.\\n WHEN 'TOGGLE'.\\n IF flag = ' '.\\n flag = 'X'.\\n ELSEIF flag = 'X'.\\n flag = ' '.\\n ENDIF.\\n ENDCASE.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html abaploop\_at\_screen.html