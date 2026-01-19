---
title: "ABENSEL_SCREEN_F1_HELP_ABEXA"
description: |
  ABENSEL_SCREEN_F1_HELP_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSEL_SCREEN_F1_HELP_ABEXA.htm"
abapFile: "ABENSEL_SCREEN_F1_HELP_ABEXA.html"
keywords: ["select", "do", "while", "data", "ABENSEL", "SCREEN", "HELP", "ABEXA"]
---

The example shows a user-defined F1 help on selection screens.

This program declares a selection screen with two selection parameters that both refer to the data element `S_CARR_ID` from the ABAP Dictionary. While the dictionary documentation is used as online help for `p_carr_1`, a separate dynpro with the number 100 is called for `p_carr_2`. Using the Screen Painter, this dynpro is defined as a modal dialog box with the next dynpro 0, which displays the required help text as text fields. The screen does not require any flow logic.

REPORT demo\_selection\_screen\_f1.\\n\\nPARAMETERS: p\_carr\_1 TYPE s\_carr\_id,\\n p\_carr\_2 TYPE spfli-carrid.\\n\\nAT SELECTION-SCREEN ON HELP-REQUEST FOR p\_carr\_2.\\n CALL SCREEN 100 STARTING AT 10 5\\n ENDING AT 60 10.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_events.html abapat\_selection-screen.html abapat\_selection-screen\_events.html