---
title: "ABENSEL_SCREEN_WITH_TABSTRIP_ABEXA"
description: |
  ABENSEL_SCREEN_WITH_TABSTRIP_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSEL_SCREEN_WITH_TABSTRIP_ABEXA.htm"
abapFile: "ABENSEL_SCREEN_WITH_TABSTRIP_ABEXA.html"
keywords: ["select", "loop", "if", "case", "data", "ABENSEL", "SCREEN", "WITH", "TABSTRIP", "ABEXA"]
---

The example demonstrates how tabstrips can be included in selection screens.

This program defines two selection screens 100 and 200 as subscreens, and places a tabstrip control area with three tab pages on the standard selection screen. A subscreen dynpro 300 (from the same program) is assigned statically to the third tab page.

The input/output fields of dynpro 300, `p1` to `q3`, are created by copying the selection parameters from the ABAP program and are assigned to the modification group *MOD*. The pushbutton has the function code `TOGGLE`. The dynpro flow logic for dynpro 300 is as follows:

PROCESS BEFORE OUTPUT. \\n  MODULE init\_0100. \\nPROCESS AFTER INPUT. \\n  MODULE user\_command\_0100.

Both dialog modules are defined in the ABAP program.

The standard selection screen appears when the program is executed. At the event `INITIALIZATION`, the tab title texts are determined, the subscreen selection screen 100 is assigned initially to the tabstrip area, and the first tab title is activated.

User actions on the selection screen are evaluated in the `AT SELECTION-SCREEN` event block. In particular, when the first two tab titles are selected, the corresponding subscreens are assigned dynamically and tab titles are activated. This is not necessary for the third tab title, since the static assignment of dynpro 300 is automatically placed in the structure `mytab` when the title is selected.

Before the subscreen screen is displayed, the PBO module `init_0100` is executed. User actions on the subscreen screen raise the PAI module. This includes the selection of a tab title. After that, the `AT SELECTION-SCREEN` event is raised.

Messages in the status bar show where an action has been processed.

REPORT demo\_sel\_screen\_with\_tabstrip.\\n\\nDATA flag(1) TYPE c.\\n\\n\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 100 AS SUBSCREEN.\\nSELECTION-SCREEN BEGIN OF BLOCK b1 WITH FRAME.\\nPARAMETERS: p1(10) TYPE c,\\n p2(10) TYPE c,\\n p3(10) TYPE c.\\nSELECTION-SCREEN END OF BLOCK b1.\\nSELECTION-SCREEN END OF SCREEN 100.\\n\\n\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 200 AS SUBSCREEN.\\nSELECTION-SCREEN BEGIN OF BLOCK b2 WITH FRAME.\\nPARAMETERS: q1(10) TYPE c OBLIGATORY,\\n q2(10) TYPE c OBLIGATORY,\\n q3(10) TYPE c OBLIGATORY.\\nSELECTION-SCREEN END OF BLOCK b2.\\nSELECTION-SCREEN END OF SCREEN 200.\\n\\n\\n\\nSELECTION-SCREEN: BEGIN OF TABBED BLOCK mytab FOR 10 LINES,\\n TAB (20) button1 USER-COMMAND push1,\\n TAB (20) button2 USER-COMMAND push2,\\n TAB (20) button3 USER-COMMAND push3\\n DEFAULT SCREEN 300,\\n END OF BLOCK mytab.\\n\\nINITIALIZATION.\\n button1 = text-010.\\n button2 = text-020.\\n button3 = text-030.\\n mytab-prog = sy-repid.\\n mytab-dynnr = 100.\\n mytab-activetab = 'BUTTON1'.\\n\\nAT SELECTION-SCREEN.\\n CASE sy-dynnr.\\n WHEN 1000.\\n CASE sy-ucomm.\\n WHEN 'PUSH1'.\\n mytab-dynnr = 100.\\n mytab-activetab = 'BUTTON1'.\\n WHEN 'PUSH2'.\\n mytab-dynnr = 200.\\n mytab-activetab = 'BUTTON2'.\\n ENDCASE.\\n WHEN 100.\\n MESSAGE s102(sabapdemos) WITH text-040 sy-dynnr.\\n WHEN 200.\\n MESSAGE s102(sabapdemos) WITH text-040 sy-dynnr.\\n ENDCASE.\\n\\nMODULE init\_0100 OUTPUT.\\n LOOP AT SCREEN INTO DATA(screen\_wa).\\n IF screen\_wa-group1 = 'MOD'.\\n CASE flag.\\n WHEN 'X'.\\n screen\_wa-input = '1'.\\n WHEN ' '.\\n screen\_wa-input = '0'.\\n ENDCASE.\\n MODIFY SCREEN FROM screen\_wa.\\n ENDIF.\\n ENDLOOP.\\nENDMODULE.\\n\\nMODULE user\_command\_0100 INPUT.\\n MESSAGE s102(sabapdemos) WITH text-050 sy-dynnr.\\n CASE sy-ucomm.\\n WHEN 'TOGGLE'.\\n IF flag = ' '.\\n flag = 'X'.\\n ELSEIF flag = 'X'.\\n flag = ' '.\\n ENDIF.\\n ENDCASE.\\nENDMODULE.\\n\\nSTART-OF-SELECTION.\\n WRITE: / 'P1:', p1,'Q1:', q1,\\n / 'P2:', p2,'Q2:', q2,\\n / 'P3:', p3,'Q3:', q3.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_layout.html abapselection-screen\_tabbed.html