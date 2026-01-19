---
title: "ABENSEL_SCREEN_DYN_DICT_ABEXA"
description: |
  ABENSEL_SCREEN_DYN_DICT_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSEL_SCREEN_DYN_DICT_ABEXA.htm"
abapFile: "ABENSEL_SCREEN_DYN_DICT_ABEXA.html"
keywords: ["select", "if", "method", "class", "data", "ABENSEL", "SCREEN", "DYN", "DICT", "ABEXA"]
---

This example demonstrates how a dynamic dictionary reference to a selection parameter can be created.

At the event at which selection screen 200 is called, the field `name` must contain the name of a data type from the ABAP Dictionary. Currently, selection parameters can only refer to fields of database tables, views, and structures. The selection parameter dynamically takes the properties, that is, technical properties and help texts, from the dictionary type. If a selection text for the selection parameter is not created in the program, the field label from the dictionary appears as the description on the selection screen. Otherwise, the selection text is displayed.

REPORT demo\_sel\_screen\_parameters\_2 .\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 100.\\n PARAMETERS name(20) TYPE c DEFAULT 'SPFLI-CARRID'.\\n SELECTION-SCREEN END OF SCREEN 100.\\n\\n SELECTION-SCREEN BEGIN OF SCREEN 200.\\n PARAMETERS p\_carr LIKE (name).\\n SELECTION-SCREEN END OF SCREEN 200.\\n\\nCLASS start DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\nENDCLASS.\\n\\nCLASS start IMPLEMENTATION.\\n METHOD main.\\n CALL SELECTION-SCREEN 100 STARTING AT 10 10.\\n IF sy-subrc <> 0.\\n RETURN.\\n ENDIF.\\n CALL SELECTION-SCREEN 200 STARTING AT 10 10.\\n IF sy-subrc <> 0.\\n RETURN.\\n ENDIF.\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n start=>main( ).\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapparameters.html abapparameters\_type.html