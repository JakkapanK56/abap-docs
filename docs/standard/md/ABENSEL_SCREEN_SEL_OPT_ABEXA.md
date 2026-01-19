---
title: "ABENSEL_SCREEN_SEL_OPT_ABEXA"
description: |
  ABENSEL_SCREEN_SEL_OPT_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSEL_SCREEN_SEL_OPT_ABEXA.htm"
abapFile: "ABENSEL_SCREEN_SEL_OPT_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENSEL", "SCREEN", "SEL", "OPT", "ABEXA"]
---

The example shows how the selection tables are filled in a multiple selection.

On the selection screen 100, the name of the table `dbtab` and its column `column` can be specified. These are then used for the dynamic layout of the selection criterion on the selection screen 500.

Two input fields and a pushbutton to enter additional values for the selection criterion are displayed. The value that the user enters in the first input field is written to the component `selcrit-low` of the selection table; the value for the second field is written to the component `selcrit-high`.

For more complex selections, the user can use the pushbutton on the right side of the selection screen to display the GUI window for multiple selections.

The content of the selection table are then output in a list. The first column determines whether the subsequent values are included or not, the second contains the Boolean operator and the last two columns contain the limits `low` and `high`.

REPORT demo\_sel\_screen\_select\_options.\\n\\nCLASS start DEFINITION.\\n PUBLIC SECTION.\\n CLASS-DATA name(80) TYPE c.\\n CLASS-METHODS main.\\nENDCLASS.\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 100.\\n PARAMETERS: dbtab TYPE c LENGTH 30 DEFAULT 'SFLIGHT',\\n column TYPE c LENGTH 30 DEFAULT 'CARRID'.\\nSELECTION-SCREEN END OF SCREEN 100.\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 500 AS WINDOW.\\n SELECT-OPTIONS selcrit FOR (start=>name).\\nSELECTION-SCREEN END OF SCREEN 500.\\n\\nSTART-OF-SELECTION.\\n start=>main( ).\\n\\nCLASS start IMPLEMENTATION.\\n METHOD main.\\n CALL SELECTION-SCREEN 100 STARTING AT 10 10.\\n IF sy-subrc <> 0.\\n RETURN.\\n ENDIF.\\n name = dbtab && '-' && column.\\n CALL SELECTION-SCREEN 500 STARTING AT 10 10.\\n IF sy-subrc <> 0.\\n RETURN.\\n ENDIF.\\n cl\_abap\_demo\_services=>list\_table( selcrit\[\] ).\\n ENDMETHOD.\\nENDCLASS.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselect-options.html abapselect-options\_for.html