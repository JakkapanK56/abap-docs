---
title: "ABENDYNPRO_IN_OUT_FIELD_ABEXA"
description: |
  ABENDYNPRO_IN_OUT_FIELD_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_IN_OUT_FIELD_ABEXA.htm"
abapFile: "ABENDYNPRO_IN_OUT_FIELD_ABEXA.html"
keywords: ["do", "if", "data", "ABENDYNPRO", "OUT", "FIELD", "ABEXA"]
---

The example shows how to process dynpro fields locally in the program.

The static next dynpro number of dynpro 100 is 100. The screen fields of `output`, `box1`, `box2`, and `box3` were defined as not ready for input in the Screen Painter. The length of `input` is specified so that the user can enter a nine-digit integer without thousands separators. However, the display in the `output` field contains up to two thousands separators. If the length of `input` had remained 11 digits, a runtime error could occur if users do not set thousands separators. The user entries in the input fields are passed to the ABAP program at the PAI event raised by `ENTER` and then assigned to the output fields in the dialog module `user_command_100`. The next time the dynpro appears, the output fields contain the appropriate values. The input fields are set in the dialog module `init_screen_100` in the event PBO.

PROGRAM demo\_dynpro\_input\_output.\\n\\nDATA: input TYPE i,\\n output TYPE i,\\n radio1(1) TYPE c, radio2(1) TYPE c, radio3(1) TYPE c,\\n box1(1) TYPE c, box2(1) TYPE c, box3(1) TYPE c.\\n\\nCALL SCREEN 100.\\n\\nMODULE init\_screen\_100 OUTPUT.\\n SET PF-STATUS 'SCREEN\_100'.\\n CLEAR input.\\n radio1 = 'X'.\\n CLEAR: radio2, radio3.\\nENDMODULE.\\n\\nMODULE user\_command\_0100 INPUT.\\n IF sy-ucomm = 'CANCEL'.\\n LEAVE PROGRAM.\\n ENDIF.\\n output = input.\\n box1 = radio1.\\n box2 = radio2.\\n box3 = radio3.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html abenabap\_dynpro\_user\_actions.html abendynpro\_field\_abexas.html