---
title: "ABENSEL_SCREEN_CALL_SEL_SCR_ABEXA"
description: |
  ABENSEL_SCREEN_CALL_SEL_SCR_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSEL_SCREEN_CALL_SEL_SCR_ABEXA.htm"
abapFile: "ABENSEL_SCREEN_CALL_SEL_SCR_ABEXA.html"
keywords: ["select", "do", "method", "class", "ABENSEL", "SCREEN", "CALL", "SEL", "SCR", "ABEXA"]
---

The example demonstrates how to call standalone selection screens.

In this executable program, two standalone selection screens 100 and 500, are defined. ‏Selection screen 500 contains the block `sel1` of selection screen 100. It should be noted at which events the titles of the individual selection screens are defined. First, selection screen 100 is called, then 500, and then 100 again.

REPORT demo\_call\_selection\_screen.\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 100.\\nSELECTION-SCREEN BEGIN OF BLOCK sel1 WITH FRAME TITLE tit1.\\nPARAMETERS: cityfr TYPE spfli-cityfrom,\\n cityto TYPE spfli-cityto.\\nSELECTION-SCREEN END OF BLOCK sel1.\\nSELECTION-SCREEN END OF SCREEN 100.\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 500 AS WINDOW.\\nSELECTION-SCREEN INCLUDE BLOCKS sel1.\\nSELECTION-SCREEN BEGIN OF BLOCK sel2\\n WITH FRAME TITLE tit2.\\nPARAMETERS: airpfr TYPE spfli-airpfrom,\\n airpto TYPE spfli-airpto.\\nSELECTION-SCREEN END OF BLOCK sel2.\\nSELECTION-SCREEN END OF SCREEN 500.\\n\\n\\nCLASS start DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\nENDCLASS.\\n\\nCLASS start IMPLEMENTATION.\\n METHOD main.\\n tit1 = 'Cities'.\\n CALL SELECTION-SCREEN 100 STARTING AT 10 10.\\n tit1 = 'Cities for Airports'.\\n tit2 = 'Airports'.\\n CALL SELECTION-SCREEN 500 STARTING AT 10 10.\\n tit1 = 'Cities again'.\\n CALL SELECTION-SCREEN 100 STARTING AT 10 10.\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n start=>main( ).\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_call.html abapcall\_selection\_screen.html