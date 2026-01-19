---
title: "ABENDYNPRO_GUI_STATUS_ABEXA"
description: |
  ABENDYNPRO_GUI_STATUS_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_GUI_STATUS_ABEXA.htm"
abapFile: "ABENDYNPRO_GUI_STATUS_ABEXA.html"
keywords: ["do", "case", "data", "ABENDYNPRO", "GUI", "STATUS", "ABEXA"]
---

This example demonstrates how to set the GUI status and evaluate function codes.

The static next dynpro number of dynpro 100 is 100. The screen field of `output` is defined as not ready for input in Screen Painter. The module `init_screen_0100` sets the GUI status `status_0100` and the title 100 in the PBO event. All function codes exist as menu entries, but not all of them are assigned to function keys. The function codes in the standard toolbar activate the icons and are automatically assigned to their function keys. Some of the additional function keys are assigned to the application toolbar. The module `user_command_0100` first assigns the content of the field `ok_code` to the helper variable `save_ok` and initializes `ok_code`. This procedure is always recommended since it also initializes the dynpro field `ok_code` again in the PBO event and does not contain any unwanted values. Then the function code chosen is assigned to the field `output` and displayed in the corresponding screen field, except for *BACK*, *EXIT*, and *CANCEL*. The latter terminates the program. The function code `SELE` can be passed to the ABAP program in the following ways:

The other function codes are passed in accordance with their definition, but without a double-click.

-   Choosing *Choose* in the Edit menu
-   Choosing the *Choose* pushbutton in the application toolbar
-   Choosing F2 on the keyboard
-   Pressing the right mouse button and choosing *Choose*
-   Double-clicking the screen field of `output`
-   Entering `SELE` in the command field and choosing `ENTER`

PROGRAM demo\_dynpro\_gui\_status.\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n save\_ok LIKE ok\_code,\\n output LIKE ok\_code.\\n\\nCALL SCREEN 100.\\n\\nMODULE init\_screen\_0100 OUTPUT.\\n SET PF-STATUS 'STATUS\_100'.\\n SET TITLEBAR '100'.\\nENDMODULE.\\n\\nMODULE user\_command\_0100 INPUT.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\n CASE save\_ok.\\n WHEN 'BACK' OR 'EXIT' OR 'CANCEL'.\\n LEAVE PROGRAM.\\n WHEN OTHERS.\\n output = save\_ok.\\n ENDCASE.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_gui.html