---
title: "ABENSEL_SCREEN_AT_SEL_ON_ABEXA"
description: |
  ABENSEL_SCREEN_AT_SEL_ON_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSEL_SCREEN_AT_SEL_ON_ABEXA.htm"
abapFile: "ABENSEL_SCREEN_AT_SEL_ON_ABEXA.html"
keywords: ["select", "do", "if", "ABENSEL", "SCREEN", "SEL", "ABEXA"]
---

This example demonstrates how blocks and radio buttons are processed in selection screens.

In the event blocks `AT SELECTION-SCREEN ON BLOCK` and `AT SELECTION-SCREEN ON RADIOBUTTON GROUP` the user input is checked and error messages are displayed if necessary.

If the user does not enter any ascending numbers in a block `part1`, the entire block is made ready for input again.

If the user does not change the radio buttons of group `rad`, a warning appears.

REPORT demo\_at\_selection\_on\_block .\\n\\nSELECTION-SCREEN BEGIN OF BLOCK part1 WITH FRAME.\\nPARAMETERS: number1 TYPE i,\\n number2 TYPE i,\\n number3 TYPE i.\\nSELECTION-SCREEN END OF BLOCK part1.\\n\\nSELECTION-SCREEN BEGIN OF BLOCK part2 WITH FRAME.\\nPARAMETERS: r1 RADIOBUTTON GROUP rad DEFAULT 'X',\\n r2 RADIOBUTTON GROUP rad,\\n r3 RADIOBUTTON GROUP rad.\\nSELECTION-SCREEN END OF BLOCK part2.\\n\\n\\nAT SELECTION-SCREEN ON BLOCK part1.\\n IF number3 <= number2 OR\\n number2 <= number1.\\n MESSAGE e101(sabapdemos) WITH text-001.\\n ENDIF.\\n\\nAT SELECTION-SCREEN ON RADIOBUTTON GROUP rad.\\n IF r1 = 'X'.\\n MESSAGE w101(sabapdemos) WITH text-002.\\n ENDIF.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_events.html abapat\_selection-screen.html abapat\_selection-screen\_events.html