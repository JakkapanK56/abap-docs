---
title: "ABENDYNPRO_AT_EXIT_COMM_ABEXA"
description: |
  ABENDYNPRO_AT_EXIT_COMM_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_AT_EXIT_COMM_ABEXA.htm"
abapFile: "ABENDYNPRO_AT_EXIT_COMM_ABEXA.html"
keywords: ["select", "do", "if", "case", "data", "ABENDYNPRO", "EXIT", "COMM", "ABEXA"]
---

This example demonstrates how a dynpro can be exited without the automatic input checks.

The static next dynpro number of dynpro 100 is 100. The input fields have the dynpro fields `input1` and `input2` assigned to them. The input fields are marked in their properties as required fields. The function codes of the pushbuttons are *EXECUTE* and *CANCEL*, in which *CANCEL* has the function type *E*. In GUI status `STATUS_100`, the symbols *Back* (F3) and *Cancel* (F12) are activated using the function codes *BACK* and *CANCEL*. Both have the function type *E*. The function key F8 remains assigned to the function code *EXECUTE*. *EXECUTE* does not have the function type *E*. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT. \\n  MODULE init\_screen\_0100. \\nPROCESS AFTER INPUT. \\n  MODULE execute1. \\n  MODULE cancel AT EXIT-COMMAND. \\n  MODULE back AT EXIT-COMMAND. \\n  MODULE execute2.

Using information messages and status messages, the program demonstrates which modules are called after user actions and which data is transported.

The `back` module is never called. Two module calls using `AT EXIT-COMMAND` are pointless in the dynpro flow logic. In the above example, the function code *BACK* is to be handled in module `cancel` as well. In this case, the position of the statement `MODULE` with `AT EXIT-COMMAND` is irrelevant.

-   When *Execute* is selected without input in the mandatory fields, the automatic input check demands that the mandatory fields are filled.
-   When *Execute* is selected with filled mandatory fields, all dynpro fields are transported and the modules `execute1` and `execute2` are called consecutively.
-   When *Cancel* is selected with or without input in the mandatory fields, the OK field is transported and the module `cancel` is called. The program is exited at this point.
-   When *Back* is selected with or without input in the mandatory fields, the OK field is transported and the module `cancel` is called. However, the program is not exited there, because the function code is *BACK*. Instead, the automatic field checks are performed. If the mandatory fields are filled, the modules `execute1` and `execute2` are called.

PROGRAM demo\_dynpro\_at\_exit\_command .\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n save\_ok LIKE ok\_code,\\n input1(20) TYPE c, input2(20) TYPE c.\\n\\nCALL SCREEN 100.\\n\\nMODULE init\_screen\_0100 OUTPUT.\\n SET PF-STATUS 'STATUS\_100'.\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n MESSAGE i103(sabapdemos) WITH text-001 ok\_code input1 input2.\\n IF ok\_code = 'CANCEL'.\\n CLEAR ok\_code.\\n LEAVE PROGRAM.\\n ENDIF.\\nENDMODULE.\\n\\nMODULE back INPUT.\\n MESSAGE i103(sabapdemos) WITH text-002 ok\_code input1 input2.\\n IF ok\_code = 'BACK' OR ok\_code = 'EXIT'.\\n CLEAR: ok\_code, input1, input2.\\n LEAVE TO SCREEN 100.\\n ENDIF.\\nENDMODULE.\\n\\nMODULE execute1 INPUT.\\n MESSAGE i103(sabapdemos) WITH text-003 ok\_code input1 input2.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\nENDMODULE.\\n\\nMODULE execute2 INPUT.\\n MESSAGE i103(sabapdemos) WITH text-004 ok\_code input1 input2.\\n IF save\_ok = 'EXECUTE'.\\n MESSAGE s101(sabapdemos) WITH text-005.\\n ENDIF.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_dynpro\_statements.html dynpmodule.html abenmodule\_abexas.html