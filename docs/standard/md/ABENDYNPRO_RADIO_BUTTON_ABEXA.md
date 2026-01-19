---
title: "ABENDYNPRO_RADIO_BUTTON_ABEXA"
description: |
  ABENDYNPRO_RADIO_BUTTON_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_RADIO_BUTTON_ABEXA.htm"
abapFile: "ABENDYNPRO_RADIO_BUTTON_ABEXA.html"
keywords: ["select", "if", "case", "data", "ABENDYNPRO", "RADIO", "BUTTON", "ABEXA"]
---

This example demonstrates how checkboxes and radio buttons can be processed on dynpros.

The static next dynpro number of dynpro 100 is 100. The screen fields `field1` to `field3` are defined as not ready for input in the Screen Painter. Selecting one of the three radio buttons raises the event PAI, which passes the function code `RADIO` and the field content of the screen fields to the ABAP program. The dialog module `user_command_0100` fills the fields `field1` to `field3` according to the radio button that was selected. These field content appears the next time the dynpro is sent. The PAI event is also raised if the checkbox is selected. In this case, the function *CANCEL* is passed to the ABAP program, and the dialog module `user_command_0100` immediately ends the program.

PROGRAM demo\_dynpro\_check\_radio .\\n\\nDATA: radio1(1) TYPE c, radio2(1) TYPE c, radio3(1) TYPE c,\\n field1(10) TYPE c, field2(10) TYPE c, field3(10) TYPE c,\\n box TYPE c.\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n save\_ok TYPE sy-ucomm.\\n\\nCALL SCREEN 100.\\n\\nMODULE user\_command\_0100 INPUT.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\n CASE save\_ok.\\n WHEN 'RADIO'.\\n IF radio1 = 'X'.\\n field1 = 'Selected!'.\\n CLEAR: field2, field3.\\n ELSEIF radio2 = 'X'.\\n field2 = 'Selected!'.\\n CLEAR: field1, field3.\\n ELSEIF radio3 = 'X'.\\n field3 = 'Selected!'.\\n CLEAR: field1, field2.\\n ENDIF.\\n WHEN 'CANCEL'.\\n LEAVE PROGRAM.\\n ENDCASE.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html abenabap\_dynpro\_user\_actions.html abendynpro\_field\_abexas.html