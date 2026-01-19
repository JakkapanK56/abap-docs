---
title: "ABENDYNPRO_DROP1_ABEXA"
description: |
  ABENDYNPRO_DROP1_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_DROP1_ABEXA.htm"
abapFile: "ABENDYNPRO_DROP1_ABEXA.html"
keywords: ["select", "insert", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABENDYNPRO", "DROP1", "ABEXA"]
---

This example demonstrates the recommended way to enable a dropdown list box.

The static dynpro number of dynpro 100 is 100. The screen layout contains a single input field, namely the component `SDYN_CONN-CARRID`. Its attribute *dropdown* is *Listbox*, the output length is 20, the attribute *value list* is empty, and it is assigned function code `SELECTED`. The functions *BACK*, *EXIT*, and *CANCEL* are defined in the GUI status with the function type *E*. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT. \\n  MODULE status\_0100. \\nPROCESS AFTER INPUT. \\n  MODULE cancel AT EXIT-COMMAND. \\n  MODULE user\_command\_0100. \\nPROCESS ON VALUE-REQUEST. \\n  FIELD sdyn\_conn-carrid MODULE create\_dropdown\_box.

The user is not allowed to enter values in the screen field. When the user selects the input field on dynpro 100, the system displays a list box. The *Value list* attribute is empty, so the system launches the input mechanism. In this case, the event block `PROCESS ON VALUE-REQUEST` is created in the dynpro flow logic which overrides all other mechanisms. The system fills a two-column internal table in the corresponding dialog module and passes it to the input help using the function module `F4IF_INT_TABLE_VALUE_REQUEST`. The system inserts the two columns of the table into the list box.

When the user selects a line in the list box, the PAI event is raised using the function code `SELECTED` and the value in the first column of the internal table is copied to the input field.

\\n\\n\\n\\nREPORT demo\_dropdown\_list\_box.\\n\\n\\n\\nTABLES sdyn\_conn.\\nDATA ok\_code TYPE sy-ucomm.\\n\\n\\n\\nCLASS dynpro\_utilities DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS value\_help.\\nENDCLASS.\\n\\n\\n\\nCLASS dynpro\_utilities IMPLEMENTATION.\\n METHOD value\_help.\\n TYPES: BEGIN OF carrid\_line,\\n carrid TYPE spfli-carrid,\\n carrname TYPE scarr-carrname,\\n END OF carrid\_line.\\n DATA carrid\_list TYPE STANDARD TABLE OF carrid\_line.\\n SELECT carrid, carrname\\n FROM scarr\\n INTO CORRESPONDING FIELDS OF TABLE @carrid\_list.\\n CALL FUNCTION 'F4IF\_INT\_TABLE\_VALUE\_REQUEST'\\n EXPORTING\\n retfield = 'CARRID'\\n value\_org = 'S'\\n TABLES\\n value\_tab = carrid\_list\\n EXCEPTIONS\\n parameter\_error = 1\\n no\_values\_found = 2\\n OTHERS = 3.\\n IF sy-subrc <> 0.\\n ...\\n ENDIF.\\n ENDMETHOD.\\nENDCLASS.\\n\\n\\n\\nSTART-OF-SELECTION.\\n CALL SCREEN 100.\\n\\nMODULE status\_0100 OUTPUT.\\n SET PF-STATUS 'SCREEN\_100'.\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE user\_command\_0100 INPUT.\\n CASE ok\_code.\\n WHEN 'SELECTED'.\\n MESSAGE i101(sabapdemos) WITH sdyn\_conn-carrid.\\n ENDCASE.\\nENDMODULE.\\n\\nMODULE create\_dropdown\_box INPUT.\\n dynpro\_utilities=>value\_help( ).\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html abenabap\_dynpros\_help.html abeninput\_help\_abexas.html