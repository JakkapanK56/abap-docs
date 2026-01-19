---
title: "ABENSEL_SCREEN_SUBSCREEN_ABEXA"
description: |
  ABENSEL_SCREEN_SUBSCREEN_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSEL_SCREEN_SUBSCREEN_ABEXA.htm"
abapFile: "ABENSEL_SCREEN_SUBSCREEN_ABEXA.html"
keywords: ["select", "case", "data", "ABENSEL", "SCREEN", "SUBSCREEN", "ABEXA"]
---

The example demonstrates how selection screens can be included in subscreens.

The two selection screens 1100 and 1200 are defined as subscreens. The static next dynpro number of dynpro 100 is 100. A subscreen area `area` and two pushbuttons with the function codes `BUTTON1` and `BUTTON2` are created. The dynpro flow logic for dynpro 100 is as follows:

PROCESS BEFORE OUTPUT. \\n  MODULE status\_0100. \\n  CALL SUBSCREEN area INCLUDING sy-repid number. \\nPROCESS AFTER INPUT. \\n  MODULE cancel AT EXIT-COMMAND. \\n  CALL SUBSCREEN area. \\n  MODULE user\_command\_0100.

When the program is executed, the screen of dynpro 100 is displayed. There, the selection screen 1100 is shown as a subscreen. The pushbuttons of the main dynpro can be used to switch between the two selection screens in the subscreen area. The mandatory input fields must be filled before it is possible to browse from selection screen 1200 to 1100. The input data is available to the program in the selection parameters at PAI.

REPORT demo\_sel\_screen\_as\_subscreen.\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 1100 AS SUBSCREEN NESTING LEVEL 4.\\nSELECTION-SCREEN BEGIN OF BLOCK b1 WITH FRAME TITLE text-010.\\nPARAMETERS: p1(10) TYPE c,\\n p2(10) TYPE c,\\n p3(10) TYPE c.\\nSELECTION-SCREEN END OF BLOCK b1.\\nSELECTION-SCREEN END OF SCREEN 1100.\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 1200 AS SUBSCREEN NESTING LEVEL 4.\\nSELECTION-SCREEN BEGIN OF BLOCK b2 WITH FRAME TITLE text-020.\\nPARAMETERS: q1(10) TYPE c OBLIGATORY,\\n q2(10) TYPE c OBLIGATORY,\\n q3(10) TYPE c OBLIGATORY.\\nSELECTION-SCREEN END OF BLOCK b2.\\nSELECTION-SCREEN END OF SCREEN 1200.\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n save\_ok TYPE sy-ucomm.\\n\\nDATA: number(4) TYPE n VALUE '1100'.\\n\\nSTART-OF-SELECTION.\\n CALL SCREEN 100.\\n\\nMODULE status\_0100 OUTPUT.\\n SET PF-STATUS 'SCREEN\_100'.\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE user\_command\_0100 INPUT.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\n CASE save\_ok.\\n WHEN 'BUTTON1'.\\n number = 1100.\\n WHEN 'BUTTON2'.\\n number = 1200.\\n ENDCASE.\\nENDMODULE.\\n\\nAT SELECTION-SCREEN.\\n MESSAGE s102(sabapdemos) WITH text-030 sy-dynnr.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_definition.html abapselection-screen\_subscreen.html