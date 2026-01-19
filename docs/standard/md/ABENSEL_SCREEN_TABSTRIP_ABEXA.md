---
title: "ABENSEL_SCREEN_TABSTRIP_ABEXA"
description: |
  ABENSEL_SCREEN_TABSTRIP_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSEL_SCREEN_TABSTRIP_ABEXA.htm"
abapFile: "ABENSEL_SCREEN_TABSTRIP_ABEXA.html"
keywords: ["select", "if", "case", "data", "ABENSEL", "SCREEN", "TABSTRIP", "ABEXA"]
---

This example demonstrates how selection screens can be included in tabstrips.

The two selection screens 1100 and 1200 are defined as subscreens. The static next dynpro number of dynpro 100 is 100. A tab strip area called `mytabstrip` is created with two tab titles, `BUTTON1` and `BUTTON2`, plus an identically named function code without typing. All tabs are assigned a shared subscreen area `area`. The dynpro flow logic for dynpro 100 is as follows:

PROCESS BEFORE OUTPUT. \\n  MODULE status\_0100. \\n  CALL SUBSCREEN area INCLUDING sy-repid number. \\nPROCESS AFTER INPUT. \\n  MODULE cancel AT EXIT-COMMAND. \\n  CALL SUBSCREEN area. \\n  MODULE user\_command\_0100.

This program is almost identical in programming to the executable example for [Selection Screens as Subscreens](ABENSEL_SCREEN_SUBSCREEN_ABEXA.html) and shows similar behavior. The only difference is that the pushbuttons have been replaced with tab titles, and the control `mytabstrip` has been declared and filled. Scrolling between the tab pages is programmed in the ABAP program. Whenever a tab title is chosen, the function code of the OK field is assigned to the component `activetab` of the structure `mytabstrip`. At the same time, the variable `number` is filled with the dynpro number of the subscreen selection screen which is to be displayed in the subscreen area `area` of the tabstrip.

REPORT demo\_sel\_screen\_in\_tabstrip.\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 1100 AS SUBSCREEN NO INTERVALS.\\nSELECTION-SCREEN BEGIN OF BLOCK b1 WITH FRAME TITLE text-010.\\nPARAMETERS: p1(10) TYPE c,\\n p2(10) TYPE c,\\n p3(10) TYPE c.\\nSELECTION-SCREEN END OF BLOCK b1.\\nSELECTION-SCREEN END OF SCREEN 1100.\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 1200 AS SUBSCREEN NO INTERVALS.\\nSELECTION-SCREEN BEGIN OF BLOCK b2 WITH FRAME TITLE text-020.\\nPARAMETERS: q1(10) TYPE c OBLIGATORY,\\n q2(10) TYPE c OBLIGATORY,\\n q3(10) TYPE c OBLIGATORY.\\nSELECTION-SCREEN END OF BLOCK b2.\\nSELECTION-SCREEN END OF SCREEN 1200.\\n\\nCONTROLS mytabstrip TYPE TABSTRIP.\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n save\_ok TYPE sy-ucomm.\\n\\nDATA: number(4) TYPE n VALUE '1100'.\\n\\nSTART-OF-SELECTION.\\n mytabstrip-activetab = 'BUTTON1'.\\n CALL SCREEN 100.\\n\\nMODULE status\_0100 OUTPUT.\\n SET PF-STATUS 'SCREEN\_100'.\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE user\_command\_0100 INPUT.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\n CASE save\_ok.\\n WHEN 'BUTTON1'.\\n mytabstrip-activetab = save\_ok.\\n number = 1100.\\n WHEN 'BUTTON2'.\\n mytabstrip-activetab = save\_ok.\\n number = 1200.\\n ENDCASE.\\nENDMODULE.\\n\\nAT SELECTION-SCREEN.\\n MESSAGE s102(sabapdemos) WITH text-030 sy-dynnr.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_definition.html abapselection-screen\_subscreen.html