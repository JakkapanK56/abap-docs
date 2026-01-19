---
title: "ABENTAB_STRIP_CONTROL2_ABEXA"
description: |
  ABENTAB_STRIP_CONTROL2_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTAB_STRIP_CONTROL2_ABEXA.htm"
abapFile: "ABENTAB_STRIP_CONTROL2_ABEXA.html"
keywords: ["do", "if", "case", "data", "ABENTAB", "STRIP", "CONTROL2", "ABEXA"]
---

This example demonstrates the use of tabstrip controls with centralized scrolling.

The static next dynpro number of dynpro 100 is 100. The layout of dynpro 100 and the subscreen dynpros 110 to 130 is the same as in the [executable example](ABENTAB_STRIP_CONTROL1_ABEXA.html) with local scrolling. The function codes of the three tab titles are not typed and a common subscreen area `sub` is assigned to all tab titles.

The dynpro flow logic of dynpro 100 makes a dynamic binding to `PBO`, a subscreen dynpro in the subscreen area `sub`. The dynpro flow logic of subscreen dynpros 110 to 130 does not contain any module calls.

This example works in exactly the same way as the [example with local scrolling](ABENTAB_STRIP_CONTROL1_ABEXA.html) except that scrolling between the tabstrip pages is programmed in the ABAP program. Each time the user chooses a tab title, the function code from the OK field is assigned to the `activetab` component of structure `mytabstrip`. At the same time, the variable `number` is given the dynpro number of the subscreen dynpro to be displayed in the subscreen area `SUB` of the tabstrip.

REPORT demo\_dynpro\_tabstrip\_server.\\n\\nCONTROLS mytabstrip TYPE TABSTRIP.\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n save\_ok TYPE sy-ucomm.\\n\\nDATA number TYPE sy-dynnr.\\n\\nmytabstrip-activetab = 'PUSH2'.\\nnumber = '0120'.\\n\\nCALL SCREEN 100.\\n\\nMODULE status\_0100 OUTPUT.\\n SET PF-STATUS 'SCREEN\_100'.\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE user\_command INPUT.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\n IF save\_ok = 'OK'.\\n MESSAGE i102(sabapdemos) WITH 'MYTABSTRIP-ACTIVETAB ='\\n mytabstrip-activetab.\\n ELSE.\\n mytabstrip-activetab = save\_ok.\\n CASE save\_ok.\\n WHEN 'PUSH1'.\\n number = '0110'.\\n WHEN 'PUSH2'.\\n number = '0120'.\\n WHEN 'PUSH3'.\\n number = '0130'.\\n ENDCASE.\\n ENDIF.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_screen.html abenscreen\_elements\_abexas.html