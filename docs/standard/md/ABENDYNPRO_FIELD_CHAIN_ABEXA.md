---
title: "ABENDYNPRO_FIELD_CHAIN_ABEXA"
description: |
  ABENDYNPRO_FIELD_CHAIN_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_FIELD_CHAIN_ABEXA.htm"
abapFile: "ABENDYNPRO_FIELD_CHAIN_ABEXA.html"
keywords: ["do", "if", "data", "ABENDYNPRO", "FIELD", "CHAIN", "ABEXA"]
---

This example demonstrates how to check input fields in dialog modules.

The static next dynpro number of dynpro 100 is 100. The input fields are assigned the dynpro fields `input1` to `input6`. The function code of the pushbutton is `EXECUTE`.

In the GUI status `STATUS_100`, the symbol *Cancel* (F12) is activated by the function code *CANCEL* with the function type *E*. The function key F8 is assigned the function code `EXECUTE` without a special function type. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT. \\n  MODULE init\_screen\_100. \\nPROCESS AFTER INPUT. \\n  MODULE cancel AT EXIT-COMMAND. \\n  FIELD input1 MODULE module\_1. \\n  FIELD input2 MODULE module\_2. \\n  FIELD input3 MODULE module\_3. \\n  CHAIN. \\n    FIELD input4. \\n    MODULE chain\_module\_1. \\n    FIELD input5. \\n    FIELD input6 MODULE chain\_module\_2. \\n  ENDCHAIN. \\n  MODULE execution.

The fields `input1` to `input3` are checked separately in the modules `module_1` to `module_3`. As long as the user does not enter a corresponding value, the screen layout is repeatedly displayed with the appropriate field ready for input.

The fields `input4` to `input6` are checked together in the processing chain. If `input4` does not match the condition in `chain_module_1`, all three fields are made ready for input again. The same applies if the three fields do not fulfill the condition in `chain_module_2`.

The `execution` module, from which an information message is displayed, is not executed until all six fields fulfill the appropriate conditions.

PROGRAM demo\_dynpro\_field\_chain.\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n input1 TYPE i, input2 TYPE i, input3 TYPE i,\\n input4 TYPE i, input5 TYPE i, input6 TYPE i,\\n sum TYPE i.\\n\\nCALL SCREEN 100.\\n\\nMODULE init\_screen\_100 OUTPUT.\\n CLEAR: input1, input2, input3, input4, input5, input6.\\n SET PF-STATUS 'STATUS\_100'.\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE module\_1 INPUT.\\n IF input1 < 50.\\n MESSAGE e103(sabapdemos) WITH text-001 '50' text-002.\\n ENDIF.\\nENDMODULE.\\n\\nMODULE module\_2 INPUT.\\n IF input2 < 100.\\n MESSAGE e103(sabapdemos) WITH text-001 '100' text-002.\\n ENDIF.\\nENDMODULE.\\n\\nMODULE module\_3 INPUT.\\n IF input3 < 150.\\n MESSAGE e103(sabapdemos) WITH text-001 '150' text-002.\\n ENDIF.\\nENDMODULE.\\n\\nMODULE chain\_module\_1 INPUT.\\n IF input4 < 10.\\n MESSAGE e103(sabapdemos) WITH text-003 '10' text-002.\\n ENDIF.\\nENDMODULE.\\n\\nMODULE chain\_module\_2 INPUT.\\n CLEAR sum.\\n sum += input4.\\n sum += input5.\\n sum += input6.\\n IF sum <= 100.\\n MESSAGE e103(sabapdemos) WITH text-004 '100' text-002.\\n ENDIF.\\nENDMODULE.\\n\\nMODULE execution INPUT.\\n MESSAGE i101(sabapdemos) WITH text-005.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html abenabap\_dynpros\_checks.html abeninput\_check\_abexas.html