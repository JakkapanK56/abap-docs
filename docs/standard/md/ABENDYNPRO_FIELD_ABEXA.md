---
title: "ABENDYNPRO_FIELD_ABEXA"
description: |
  ABENDYNPRO_FIELD_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_FIELD_ABEXA.htm"
abapFile: "ABENDYNPRO_FIELD_ABEXA.html"
keywords: ["select", "do", "if", "data", "ABENDYNPRO", "FIELD", "ABEXA"]
---

This example demonstrates how to transport data using the statement `FIELD`.

The static next dynpro number of dynpro 100 is 100. The checkboxes which are ready for input are assigned the dynpro fields `box1`, `box2`, `box3`, and `box4`. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT. \\n  MODULE init\_screen\_100. \\nPROCESS AFTER INPUT. \\n  MODULE user\_command\_0100. \\n  MODULE module\_1. \\n  FIELD box2. \\n  MODULE module\_2. \\n  FIELD: box1, box3. \\n  MODULE module\_3.

In the GUI status `STATUS_100`, the Cancel icon (F12) is activated using the function code *CANCEL*. If the user selects the checkboxes ready for input and raises the PAI event by pressing Enter, the output fields indicate which dynpro field is available in which dialog module.

-   The dynpro field `box4` is transported in the PAI event, since it does not occur in any `FIELD` statements.
-   Dynpro field `box2` is not transported until before the dialog module `module_2` is called and is therefore not available in `user_command_0100` or `module_1`.
-   Dynpro fields `box1` and `box3` are transported before the dialog module `module_3` and are therefore only available in that module.

PROGRAM demo\_dynpro\_field.\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n save\_ok LIKE ok\_code,\\n box1(1) TYPE c, box2(1) TYPE c, box3(1) TYPE c, box4(1) TYPE c,\\n mod1\_result1(1) TYPE c, mod1\_result2(1) TYPE c,\\n mod1\_result3(1) TYPE c, mod1\_result4(1) TYPE c,\\n mod2\_result1(1) TYPE c, mod2\_result2(1) TYPE c,\\n mod2\_result3(1) TYPE c, mod2\_result4(1) TYPE c,\\n mod3\_result1(1) TYPE c, mod3\_result2(1) TYPE c,\\n mod3\_result3(1) TYPE c, mod3\_result4(1) TYPE c.\\n\\nCALL SCREEN 100.\\n\\nMODULE init\_screen\_100 OUTPUT.\\n SET PF-STATUS 'STATUS\_100'.\\n CLEAR: box1, box2, box3, box4.\\nENDMODULE.\\n\\nMODULE user\_command\_0100 INPUT.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\n IF save\_ok = 'CANCEL'.\\n LEAVE PROGRAM.\\n ENDIF.\\nENDMODULE.\\n\\nMODULE module\_1 INPUT.\\n mod1\_result1 = box1.\\n mod1\_result2 = box2.\\n mod1\_result3 = box3.\\n mod1\_result4 = box4.\\nENDMODULE.\\n\\nMODULE module\_2 INPUT.\\n mod2\_result1 = box1.\\n mod2\_result2 = box2.\\n mod2\_result3 = box3.\\n mod2\_result4 = box4.\\nENDMODULE.\\n\\nMODULE module\_3 INPUT.\\n mod3\_result1 = box1.\\n mod3\_result2 = box2.\\n mod3\_result3 = box3.\\n mod3\_result4 = box4.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_dynpro\_statements.html dynpfield.html abendynp\_field\_data\_transport.html