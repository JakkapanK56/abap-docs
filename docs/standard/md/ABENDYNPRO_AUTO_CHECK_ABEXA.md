---
title: "ABENDYNPRO_AUTO_CHECK_ABEXA"
description: |
  ABENDYNPRO_AUTO_CHECK_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_AUTO_CHECK_ABEXA.htm"
abapFile: "ABENDYNPRO_AUTO_CHECK_ABEXA.html"
keywords: ["do", "try", "data", "ABENDYNPRO", "AUTO", "CHECK", "ABEXA"]
---

The example demonstrates what an automatic input check does.

The static next dynpro number of dynpro 100 is 100. The date field `date` taken from the program is assigned to the input field *Date*. The remaining input fields are the components `CARRID`, `CONNID`, and `MARK` of the structure `DEMO_CONN` taken from ABAP Dictionary. All input fields are mandatory. The function code of the pushbutton is `EXECUTE`.

In the GUI status `STATUS_100`, the symbol *Cancel* (F12) is activated by the function code *CANCEL* with the function type *E*. Additionally, the function key F8 is assigned the function code `EXECUTE`. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT. \\n  MODULE init\_screen\_100. \\nPROCESS AFTER INPUT. \\n  MODULE cancel AT EXIT-COMMAND. \\n  MODULE pai.

The user must fill all input fields with valid values before the PAI module can be called:

The user can exit the dynpro using *Cancel* (F12) without correctly entering all values, since the module call was programmed accordingly using `AT EXIT-COMMAND`.

-   All input fields must contain values
-   The date entry must have the correct format
-   The airline must exist in the check table `SCARR`.
-   The flight number must exist in the check table `SPFLI` and match the airline.
-   The marker `MARK` must be one of the fixed values of the domain `S_FLAG`.

PROGRAM demo\_dynpro\_automatic\_checks .\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n date TYPE d.\\n\\nTABLES demo\_conn.\\n\\nCALL SCREEN 100.\\n\\nMODULE init\_screen\_100 OUTPUT.\\n SET PF-STATUS 'STATUS\_100'.\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE pai INPUT.\\n MESSAGE i101(sabapdemos) WITH text-001.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html abenabap\_dynpros\_checks.html abeninput\_check\_abexas.html