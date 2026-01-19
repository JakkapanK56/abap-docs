---
title: "ABENDYNPRO_PUSH_BUTTON_ABEXA"
description: |
  ABENDYNPRO_PUSH_BUTTON_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_PUSH_BUTTON_ABEXA.htm"
abapFile: "ABENDYNPRO_PUSH_BUTTON_ABEXA.html"
keywords: ["do", "if", "case", "data", "ABENDYNPRO", "PUSH", "BUTTON", "ABEXA"]
---

This example demonstrates how pushbuttons on dynpros can be processed.

The static next dynpro number of dynpro 100 is 100. The screen field of `output` is defined as not ready for input in the Screen Painter. When the user chooses a pushbutton, the PAI event is raised. The function code of the pushbutton is assigned to the dynpro field `ok_code`, which is then assigned to the identically named ABAP field. The module `user_command_0100` is then processed. First, the content of the `ok_code` field is copied to the auxiliary variable `save_ok` code, and `ok_code` is initialized. This procedure is always recommended since it makes sure that the dynpro field `ok_code` is also reinitialized in the PBO event and does not contain any unwanted values. Next, in the `CASE` structure, a text symbol is assigned to the `output` field according to the button that the user chose. This is displayed in the output field on the dynpro. If the user chooses *Cancel*, the program is exited.

PROGRAM demo\_dynpro\_push\_button .\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n save\_ok LIKE ok\_code,\\n output(8) TYPE c.\\n\\nCALL SCREEN 100.\\n\\nMODULE user\_command\_0100 INPUT.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\n CASE save\_ok.\\n WHEN 'BUTTON\_EXIT'.\\n LEAVE PROGRAM.\\n WHEN 'BUTTON\_1'.\\n output = 'Button 1'(001).\\n WHEN 'BUTTON\_2'.\\n output = 'Button 2'(002).\\n WHEN 'BUTTON\_3'.\\n output = 'Button 3'(003).\\n WHEN 'BUTTON\_4'.\\n output = 'Button 4'(004).\\n WHEN OTHERS.\\n output = save\_ok.\\n ENDCASE.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html abenabap\_dynpro\_user\_actions.html abendynpro\_field\_abexas.html