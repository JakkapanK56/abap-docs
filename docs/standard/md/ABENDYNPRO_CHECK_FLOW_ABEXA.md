---
title: "ABENDYNPRO_CHECK_FLOW_ABEXA"
description: |
  ABENDYNPRO_CHECK_FLOW_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_CHECK_FLOW_ABEXA.htm"
abapFile: "ABENDYNPRO_CHECK_FLOW_ABEXA.html"
keywords: ["select", "if", "data", "ABENDYNPRO", "CHECK", "FLOW", "ABEXA"]
---

The example illustrates how input checks work in PAI processing.

The static next dynpro number of dynpro 100 is 100. The fields `carrier` and `connect`, which were taken from the program, are assigned to the input fields. The function code of the pushbutton is `EXECUTE`.

In the GUI status `STATUS_100`, the symbol *Cancel* (F12) is activated by the function code *CANCEL* with the function type *E*. Additionally, the function key F8 has the function code `EXECUTE` assigned to it. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT. \\n  MODULE init\_screen\_0100. \\nPROCESS AFTER INPUT. \\n  MODULE cancel AT EXIT-COMMAND. \\n  FIELD carrier VALUES (NOT 'AA', 'LH', BETWEEN 'QF' AND 'UA'). \\n  MODULE module\_1. \\n  FIELD connect SELECT  \* \\n                  FROM spfli \\n                  WHERE carrid = carrier AND connid = connect \\n                  WHENEVER NOT FOUND SEND ERRORMESSAGE 107 \\n                                          WITH carrier connect. \\n  MODULE module\_2.

The user must enter a value for `carrier` that is in the list following `VALUES` before `module_1` is called. When `module_1` is called, `connect` has not yet been transported. The user can then only enter a value for `connect`, which exists together with `carrier` as the primary key in the database table `SPFLI`. If the user enters a different value, an error message appears in the status bar. Only when a correct value has been entered is `connect` transported and `module_2` called.

PROGRAM demo\_dynpro\_value\_select.\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n carrier TYPE spfli-carrid,\\n connect TYPE spfli-connid.\\n\\nCALL SCREEN 100.\\n\\nMODULE init\_screen\_0100 OUTPUT.\\n SET PF-STATUS 'STATUS\_100'.\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE module\_1 INPUT.\\n MESSAGE i104(sabapdemos) WITH text-001 carrier\\n text-002 connect.\\nENDMODULE.\\n\\nMODULE module\_2 INPUT.\\n MESSAGE i104(sabapdemos) WITH text-001 carrier\\n text-002 connect.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_obsolete.html abengui\_obsolete.html abendynpro\_obsolet.html dynpfield\_value\_select.html