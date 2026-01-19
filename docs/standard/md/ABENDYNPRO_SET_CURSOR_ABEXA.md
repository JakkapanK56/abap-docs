---
title: "ABENDYNPRO_SET_CURSOR_ABEXA"
description: |
  ABENDYNPRO_SET_CURSOR_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_SET_CURSOR_ABEXA.htm"
abapFile: "ABENDYNPRO_SET_CURSOR_ABEXA.html"
keywords: ["select", "if", "data", "ABENDYNPRO", "SET", "CURSOR", "ABEXA"]
---

This example demonstrates how to define the cursor position on dynpros.

At the start of the program, a selection screen appears on a cursor position can be selected. Afterwards, dynpro 100 is called whose static next dynpro number is dynpro 100.

The input and output fields are assigned to the fields `field1` to `field3` of the ABAP program. The header is the text field `TEXT` and the pushbutton is the screen element `PUSH`. The static cursor position is predefined in the dynpro properties as `PUSH`. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT. \\n  MODULE cursor. \\nPROCESS AFTER INPUT. \\n  MODULE back AT EXIT-COMMAND.

Before the screen of dynpro 100 is sent, the cursor position is set at PBO according to the user input on the selection screen. If the user chooses the static default, the cursor is placed on the pushbutton, otherwise on the header or one of the input fields. The specified position `pos` is only respected in the input fields.

REPORT demo\_dynpro\_set\_cursor.\\n\\nDATA: field1(14) TYPE c, field2(14) TYPE c, field3(14) TYPE c,\\n name(10) TYPE c.\\n\\nSELECTION-SCREEN BEGIN OF BLOCK bloc WITH FRAME.\\nPARAMETERS: def RADIOBUTTON GROUP rad,\\n txt RADIOBUTTON GROUP rad,\\n f1 RADIOBUTTON GROUP rad,\\n f2 RADIOBUTTON GROUP rad,\\n f3 RADIOBUTTON GROUP rad.\\nSELECTION-SCREEN END OF BLOCK bloc.\\n\\nPARAMETERS pos TYPE i.\\n\\nIF txt = 'X'.\\n name = 'TEXT'.\\nELSEIF f1 = 'X'.\\n name = 'FIELD1'.\\nELSEIF f2 = 'X'.\\n name = 'FIELD2'.\\nELSEIF f3 = 'X'.\\n name = 'FIELD3'.\\nENDIF.\\n\\nCALL SCREEN 100.\\n\\nMODULE cursor OUTPUT.\\n IF def NE 'X'.\\n SET CURSOR FIELD name OFFSET pos.\\n ENDIF.\\n SET PF-STATUS 'SCREEN\_100'.\\nENDMODULE.\\n\\nMODULE back INPUT.\\n LEAVE SCREEN.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html abapset\_cursor\_dynpro.html