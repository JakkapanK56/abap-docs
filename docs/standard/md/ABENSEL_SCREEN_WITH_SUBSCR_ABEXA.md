---
title: "ABENSEL_SCREEN_WITH_SUBSCR_ABEXA"
description: |
  ABENSEL_SCREEN_WITH_SUBSCR_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSEL_SCREEN_WITH_SUBSCR_ABEXA.htm"
abapFile: "ABENSEL_SCREEN_WITH_SUBSCR_ABEXA.html"
keywords: ["select", "do", "if", "case", "ABENSEL", "SCREEN", "WITH", "SUBSCR", "ABEXA"]
---

This example demonstrates how to include subscreens in selection screens.

Displaying subscreens in subscreen areas on selection screens is a special case of tabstrips on selection screens. Defining a subscreen area is similar to defining a tabstrip area without a tab title. Before the selection screen is sent, a subscreen must be assigned to the subscreen area `sub`. This is done using the components `prog` and `dynnr` of the identically named structure `sub`, which itself is created automatically by the statement above. The component `prog` must be assigned to the program name of the subscreen, and the component `dynnr` must be assigned to the dynpro number of the subscreen.

This program defines three subscreen selection screens: 100, 200, and 300. It also defines a subscreen area `sub` on the standard selection screen. There are two pushbuttons in the application toolbar.

In the `INITIALIZATION` event, the subscreen selection screen 100 is assigned to the subscreen area. In the `AT SELECTION-SCREEN` event, the function keys are evaluated and assigned to one of the other subscreens accordingly.

REPORT demo\_sel\_screen\_with\_subscreen.\\n\\nTABLES sscrfields.\\n\\n\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 100 AS SUBSCREEN.\\n SELECTION-SCREEN BEGIN OF BLOCK b1 WITH FRAME TITLE TEXT-010.\\n PARAMETERS: p1(10) TYPE c,\\n p2(10) TYPE c,\\n p3(10) TYPE c.\\n SELECTION-SCREEN END OF BLOCK b1.\\nSELECTION-SCREEN END OF SCREEN 100.\\n\\n\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 200 AS SUBSCREEN.\\n SELECTION-SCREEN BEGIN OF BLOCK b2 WITH FRAME TITLE TEXT-020.\\n PARAMETERS: q1(10) TYPE c,\\n q2(10) TYPE c,\\n q3(10) TYPE c.\\n SELECTION-SCREEN END OF BLOCK b2.\\nSELECTION-SCREEN END OF SCREEN 200.\\n\\n\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 300 AS SUBSCREEN.\\n SELECTION-SCREEN BEGIN OF BLOCK b3 WITH FRAME TITLE TEXT-030.\\n PARAMETERS: r1(10) TYPE c,\\n r2(10) TYPE c,\\n r3(10) TYPE c.\\n SELECTION-SCREEN END OF BLOCK b3.\\nSELECTION-SCREEN END OF SCREEN 300.\\n\\n\\n\\nSELECTION-SCREEN: FUNCTION KEY 1,\\nFUNCTION KEY 2.\\n\\nSELECTION-SCREEN: BEGIN OF TABBED BLOCK sub FOR 10 LINES,\\nEND OF BLOCK sub.\\n\\nINITIALIZATION.\\n sscrfields-functxt\_01 = VALUE smp\_dyntxt(\\n icon\_id = icon\_column\_left\\n quickinfo = 'Go to subscreen left'\\n icon\_text = ' ' ).\\n sscrfields-functxt\_02 = VALUE smp\_dyntxt(\\n icon\_id = icon\_column\_right\\n quickinfo = 'Go to subscreen right'\\n icon\_text = ' ' ).\\n sub-prog = sy-repid.\\n sub-dynnr = 100.\\n\\nAT SELECTION-SCREEN.\\n CASE sy-dynnr.\\n WHEN 100.\\n IF sscrfields-ucomm = 'FC01'.\\n sub-dynnr = 300.\\n ELSEIF sscrfields-ucomm = 'FC02'.\\n sub-dynnr = 200.\\n ENDIF.\\n WHEN 200.\\n IF sscrfields-ucomm = 'FC01'.\\n sub-dynnr = 100.\\n ELSEIF sscrfields-ucomm = 'FC02'.\\n sub-dynnr = 300.\\n ENDIF.\\n WHEN 300.\\n IF sscrfields-ucomm = 'FC01'.\\n sub-dynnr = 200.\\n ELSEIF sscrfields-ucomm = 'FC02'.\\n sub-dynnr = 100.\\n ENDIF.\\n ENDCASE.\\n\\nSTART-OF-SELECTION.\\n WRITE: / 'P1:', p1,'Q1:', q1, 'R1:', r1,\\n / 'P2:', p2,'Q2:', q2, 'R2:', r2,\\n / 'P3:', p3,'Q3:', q3, 'R3:', r3.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_layout.html abapselection-screen\_tabbed.html