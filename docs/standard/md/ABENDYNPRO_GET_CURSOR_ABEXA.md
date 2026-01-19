---
title: "ABENDYNPRO_GET_CURSOR_ABEXA"
description: |
  ABENDYNPRO_GET_CURSOR_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_GET_CURSOR_ABEXA.htm"
abapFile: "ABENDYNPRO_GET_CURSOR_ABEXA.html"
keywords: ["select", "do", "case", "data", "ABENDYNPRO", "GET", "CURSOR", "ABEXA"]
---

This example demonstrates how to determine the cursor position on dynpros.

The static next dynpro number of dynpro 100 is 100. All input/output fields except for the screen field of `input_output` are set as not ready for input in the Screen Painter. The module `init_screen_0100` sets the GUI status to `STATUS_100` in the PBO event. In the GUI status, the 'Cancel' symbol (F12) is activated using the function code *CANCEL*, and the function key F2 is assigned the function code `SELE`. When the program is executed, the user can select all screen elements by double-clicking them or all interface elements linked with `SELE`. The output fields on the screen return the cursor position.

PROGRAM demo\_dynpro\_get\_cursor .\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n save\_ok LIKE ok\_code.\\n\\nDATA: input\_output(20) TYPE c,\\n fld(20) TYPE c,\\n off TYPE i,\\n val(20) TYPE c,\\n len TYPE i.\\n\\nCALL SCREEN 100.\\n\\nMODULE init\_screen\_0100 OUTPUT.\\n SET PF-STATUS 'STATUS\_100'.\\nENDMODULE.\\n\\nMODULE user\_command\_0100 INPUT.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\n CASE save\_ok.\\n WHEN 'CANCEL'.\\n LEAVE PROGRAM.\\n WHEN 'SELE'.\\n GET CURSOR FIELD fld OFFSET off VALUE val LENGTH len.\\n ENDCASE.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html abapget\_cursor\_dynpro.html