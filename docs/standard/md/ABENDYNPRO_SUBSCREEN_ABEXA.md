---
title: "ABENDYNPRO_SUBSCREEN_ABEXA"
description: |
  ABENDYNPRO_SUBSCREEN_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_SUBSCREEN_ABEXA.htm"
abapFile: "ABENDYNPRO_SUBSCREEN_ABEXA.html"
keywords: ["if", "case", "try", "data", "ABENDYNPRO", "SUBSCREEN", "ABEXA"]
---

This example demonstrates how to include subscreens.

The static next dynpro number of dynpro 100 is 100. Four pushbuttons with function codes *SUB1* to *SUB4* and two identically sized subscreen areas `area1` and `area2` have been created. In the same ABAP program, four subscreen dynpros 110 to 140 are defined. The input/output field of all four subscreen dynpro has the name `field`. The function codes of the pushbuttons on the subscreen dynpros 110 and 130 are `OK1` and `OK2`. The dynpro flow logic for dynpro 100 is as follows:

PROCESS BEFORE OUTPUT. \\n  MODULE status\_100. \\n  CALL SUBSCREEN: area1 INCLUDING sy-repid number1, \\n                  area2 INCLUDING sy-repid number2. \\nPROCESS AFTER INPUT. \\n  MODULE cancel AT EXIT-COMMAND. \\n  MODULE save\_ok. \\n  CALL SUBSCREEN: area1, \\n                  area2. \\n  MODULE user\_command\_100.

The dynpro flow logic of subscreen dynpros 110 and 130 is:

PROCESS BEFORE OUTPUT. \\n  MODULE fill\_0110|0130\. \\nPROCESS AFTER INPUT. \\n  MODULE user\_command\_0110|0130.

The dynpro flow logic of subscreen dynpros 120 and 140 is:

PROCESS BEFORE OUTPUT. \\n  MODULE fill\_0120|0150\. \\nPROCESS AFTER INPUT.

When the program is executed, a screen appears on which subscreens 110 and 130 are displayed. The pushbuttons on the main dynpro allow the user to choose between two subscreen dynpros for each screen area. The pushbuttons on the subscreen dynpros 110 and 130 allow data to be passed to the subscreen dynpros 120 and 140.

Since all subscreen dynpros use the same field name `field`, the identically named ABAP field is transported more than once at each PBO and PAI of the main dynpro. For this reason, the values must be stored in the auxiliary fields `field1` and `field2` in the ABAP program.

The function code of the pushbuttons of the subscreen dynpros is different and regular handling in an ABAP field is enough. If the function codes had the same names, it would be necessary to use multiple helper fields here as well.

REPORT demo\_dynpro\_subscreens.\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n save\_ok TYPE sy-ucomm.\\n\\nDATA: number1(4) TYPE n VALUE '0110',\\n number2(4) TYPE n VALUE '0130',\\n field(10) TYPE c, field1(10) TYPE c, field2(10) TYPE c.\\n\\nCALL SCREEN 100.\\n\\nMODULE status\_100 OUTPUT.\\n SET PF-STATUS 'SCREEN\_100'.\\nENDMODULE.\\n\\nMODULE fill\_0110 OUTPUT.\\n field = 'Entry 1'(001).\\nENDMODULE.\\n\\nMODULE fill\_0120 OUTPUT.\\n field = field1.\\nENDMODULE.\\n\\nMODULE fill\_0130 OUTPUT.\\n field = 'Entry 2'(002).\\nENDMODULE.\\n\\nMODULE fill\_0140 OUTPUT.\\n field = field2.\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE save\_ok INPUT.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\nENDMODULE.\\n\\nMODULE user\_command\_0110 INPUT.\\n IF save\_ok = 'OK1'.\\n number1 = '0120'.\\n field1 = field.\\n CLEAR field.\\n ENDIF.\\nENDMODULE.\\n\\nMODULE user\_command\_0130 INPUT.\\n IF save\_ok = 'OK2'.\\n number2 = '0140'.\\n field2 = field.\\n CLEAR field.\\n ENDIF.\\nENDMODULE.\\n\\nMODULE user\_command\_100 INPUT.\\n CASE save\_ok.\\n WHEN 'SUB1'.\\n number1 = '0110'.\\n WHEN 'SUB2'.\\n number1 = '0120'.\\n CLEAR field1.\\n WHEN 'SUB3'.\\n number2 = '0130'.\\n WHEN 'SUB4'.\\n number2 = '0140'.\\n CLEAR field2.\\n ENDCASE.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_screen.html abenscreen\_elements\_abexas.html