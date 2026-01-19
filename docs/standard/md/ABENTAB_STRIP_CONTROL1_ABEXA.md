---
title: "ABENTAB_STRIP_CONTROL1_ABEXA"
description: |
  ABENTAB_STRIP_CONTROL1_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTAB_STRIP_CONTROL1_ABEXA.htm"
abapFile: "ABENTAB_STRIP_CONTROL1_ABEXA.html"
keywords: ["do", "if", "data", "ABENTAB", "STRIP", "CONTROL1", "ABEXA"]
---

This example demonstrates the use of tabstrip controls with local scrolling.

The static next dynpro number of dynpro 100 is 100. It is a tabstrip page called `mytabstrip` created with three tabs, `PUSH1`, `PUSH2`, `PUSH3` and identically named function codes of type `p`. One of the subscreen areas `sub1` to `sub3` is assigned to each tab title. The push button is called `BUTTON` and has the function code `OK`. Three subscreen dynpros 110 to 130 are also defined that fit into the subscreen areas mentioned above. The dynpro flow logic of subscreens 110 to 130 does not contain any module calls.

When the program is executed, the user sees a screen, the second tab page of which is active because before dynpro 100 is called, the component `activetab` of the structure `mytabstrip` is set to `PUSH2`. The user can scroll between the tab pages without raising the event PAI. One of the three subscreen dynpros is included on each tab page.

When the user chooses Continue, the PAI event is raised, and an information message displays the function code of the tab title of the page that is currently active.

REPORT demo\_dynpro\_tabstrip\_local.\\n\\nCONTROLS mytabstrip TYPE TABSTRIP.\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n save\_ok TYPE sy-ucomm.\\n\\nmytabstrip-activetab = 'PUSH2'.\\n\\nCALL SCREEN 100.\\n\\nMODULE status\_0100 OUTPUT.\\n SET PF-STATUS 'SCREEN\_100'.\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE user\_command INPUT.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\n IF save\_ok = 'OK'.\\n MESSAGE i102(sabapdemos) WITH 'MYTABSTRIP-ACTIVETAB ='\\n mytabstrip-activetab.\\n ENDIF.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_screen.html abenscreen\_elements\_abexas.html