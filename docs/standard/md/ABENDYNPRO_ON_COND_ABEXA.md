---
title: "ABENDYNPRO_ON_COND_ABEXA"
description: |
  ABENDYNPRO_ON_COND_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_ON_COND_ABEXA.htm"
abapFile: "ABENDYNPRO_ON_COND_ABEXA.html"
keywords: ["select", "do", "if", "try", "data", "ABENDYNPRO", "COND", "ABEXA"]
---

This example demonstrates how to call modules on the basis of conditions.

The static next dynpro number of dynpro 100 is 100. The input fields are assigned the dynpro fields `input1`, `input2`, and `input3`. The function code of the pushbutton is *EXECUTE*. In the GUI status `STATUS_100`, the symbol *Cancel* (F12) is activated by the function code *CANCEL* with the function type *E*. Also, the F2 function key is assigned the `CS` function code with the function type S, and the F8 function key is assigned the *EXECUTE* function code without a special function type. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT. \\n  MODULE init\_screen\_100. \\nPROCESS AFTER INPUT. \\n  MODULE cancel AT EXIT-COMMAND. \\n  CHAIN. \\n    FIELD: input1, input2. \\n    MODULE module\_1 ON CHAIN-INPUT. \\n    FIELD  input3 MODULE module\_\* ON \*-INPUT. \\n    MODULE module\_2 ON CHAIN-REQUEST. \\n  ENDCHAIN. \\n  FIELD input1 MODULE c1 AT CURSOR-SELECTION. \\n  CHAIN. \\n    FIELD: input2, input3. \\n    MODULE c2 AT CURSOR-SELECTION. \\n  ENDCHAIN. \\n  MODULE cursor AT CURSOR-SELECTION.

The program uses information messages to show which modules are called following user interaction and which data is transported.

-   Whenever one of the input fields 1 or 2 is not initial, the system calls the module `module_1` for any user interaction.
-   Whenever one of the three input fields is changed, the system calls the module `module_2` for any user interaction.
-   If the \* entry was made in input field 3, each user action calls the module `module_*`.
-   If the F2 function is chosen or if a text field of the dynpro is double-clicked, the module `cursor` is called.
-   If the F2 function is chosen or if the input field 1 is double-clicked, the module `c1` is called.
-   If the F2 function is chosen or if input field 2 or 3 is double-clicked, the module `cursor` is called. The module `c2` is never called, since the statement `MODULE ... AT CURSOR SELECTION` occurs twice, and only the latter instance is processed.

PROGRAM demo\_dynpro\_on\_condition .\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n input1(20) TYPE c, input2(20) TYPE c, input3(20) TYPE c,\\n fld(20) TYPE c.\\n\\nCALL SCREEN 100.\\n\\nMODULE init\_screen\_100 OUTPUT.\\n SET PF-STATUS 'STATUS\_100'.\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE cursor INPUT.\\n GET CURSOR FIELD fld.\\n MESSAGE i102(sabapdemos) WITH text-001 fld.\\nENDMODULE.\\n\\nMODULE module\_1 INPUT.\\n MESSAGE i101(sabapdemos) WITH text-002.\\nENDMODULE.\\n\\nMODULE module\_2 INPUT.\\n MESSAGE i101(sabapdemos) WITH text-003.\\nENDMODULE.\\n\\nMODULE module\_\* INPUT.\\n MESSAGE i102(sabapdemos) WITH text-004 input3.\\nENDMODULE.\\n\\nMODULE c1 INPUT.\\n MESSAGE i102(sabapdemos) WITH text-005 '1'.\\nENDMODULE.\\n\\nMODULE c2 INPUT.\\n MESSAGE i104(sabapdemos) WITH text-005 '2' text-006 '3'.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_dynpro\_statements.html dynpmodule.html abenmodule\_abexas.html