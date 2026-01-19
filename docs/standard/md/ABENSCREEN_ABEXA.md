---
title: "ABENSCREEN_ABEXA"
description: |
  ABENSCREEN_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSCREEN_ABEXA.htm"
abapFile: "ABENSCREEN_ABEXA.html"
keywords: ["select", "if", "method", "class", "ABENSCREEN", "ABEXA"]
---

This example demonstrates the classic user dialogs selection screen, dynpro, message, and list.

First, an input field is created on the standard selection screen using `PARAMETERS`. Then, `CALL SCREEN` is used to call a dynpro that displays the value of the field. The statement `MESSAGE` sends the text as a message. Finally, it is written to the basic list of the program using `WRITE`.

REPORT demo\_hello\_world.\\n\\nCLASS demo DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\nENDCLASS.\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 1100.\\nPARAMETERS input(12) TYPE c DEFAULT 'Hello World!'.\\nSELECTION-SCREEN END OF SCREEN 1100.\\n\\nCLASS demo IMPLEMENTATION.\\n METHOD main.\\n\\n\\n CALL SELECTION-SCREEN 1100 STARTING AT 10 10.\\n IF sy-subrc <> 0.\\n LEAVE PROGRAM.\\n ENDIF.\\n\\n\\n CALL SCREEN 100.\\n\\n\\n MESSAGE input TYPE 'I'.\\n\\n\\n WRITE input.\\n\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n demo=>main( ).\\n abenabap.html abenabap\_reference.html abenabap\_screens.html