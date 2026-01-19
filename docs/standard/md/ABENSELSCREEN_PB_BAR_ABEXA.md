---
title: "ABENSELSCREEN_PB_BAR_ABEXA"
description: |
  ABENSELSCREEN_PB_BAR_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSELSCREEN_PB_BAR_ABEXA.htm"
abapFile: "ABENSELSCREEN_PB_BAR_ABEXA.html"
keywords: ["select", "case", "method", "class", "ABENSELSCREEN", "BAR", "ABEXA"]
---

This example demonstrates the activation of pushbuttons in the application toolbar of the GUI status.

A standalone selection screen with the dynpro number 1100 is defined with two selection parameters. In the application toolbar, two pushbuttons are activated using `FUNCTION KEY` and supplied with the texts *LH* and *UA*.

When the user clicks a button, the event `AT SELECTION-SCREEN` is raised. The input fields are filled with default values accordingly.

REPORT demo\_sel\_screen\_function\_key.\\n\\nTABLES sscrfields.\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 1100.\\nPARAMETERS: p\_carrid TYPE s\_carr\_id,\\n p\_cityfr TYPE s\_from\_cit.\\nSELECTION-SCREEN: FUNCTION KEY 1,\\n FUNCTION KEY 2.\\nSELECTION-SCREEN END OF SCREEN 1100.\\n\\nAT SELECTION-SCREEN.\\n CASE sscrfields-ucomm.\\n WHEN 'FC01'.\\n p\_carrid = 'LH'.\\n p\_cityfr = 'Frankfurt'.\\n WHEN 'FC02'.\\n p\_carrid = 'UA'.\\n p\_cityfr = 'Chicago'.\\n ENDCASE.\\n\\nCLASS start DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\nENDCLASS.\\n\\nCLASS start IMPLEMENTATION.\\n METHOD main.\\n\\n sscrfields-functxt\_01 = 'LH'.\\n sscrfields-functxt\_02 = 'UA'.\\n\\n CALL SELECTION-SCREEN 1100 STARTING AT 10 10.\\n\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n start=>main( ).\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_layout.html abapselection-screen\_functionkey.html