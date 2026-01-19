---
title: "ABENLEAVE_TO_LIST_PROC_ABEXA"
description: |
  ABENLEAVE_TO_LIST_PROC_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLEAVE_TO_LIST_PROC_ABEXA.htm"
abapFile: "ABENLEAVE_TO_LIST_PROC_ABEXA.html"
keywords: ["select", "do", "while", "if", "case", "data", "ABENLEAVE", "LIST", "PROC", "ABEXA"]
---

This example shows how to switch from dynpro processing to list processing.

This example switches to list processing while processing dynpro 100. The screen layout of dynpro 100 has a single input field, the component `CARRID` of the structure `SDYN_CONN` from the ABAP Dictionary. The flow logic of dynpro 100 is:

PROCESS BEFORE OUTPUT. \\n  MODULE status\_0100. \\nPROCESS AFTER INPUT. \\n  MODULE cancel AT EXIT-COMMAND. \\n  MODULE user\_command\_0100.

In the PAI module `user_command_0100`, `CALL SCREEN` is used to call dynpro 500. Dynpro 500 encapsulates a basic list. It has the following flow logic:

PROCESS BEFORE OUTPUT. \\n  MODULE call\_list\_500. \\nPROCESS AFTER INPUT.

The module `call_list_500` defines the basic list and branches to the list display. After returning from the list display, the system branches to the next dynpro 0, which means that dynpro 500 represents a dynpro sequence with only one dynpro. When list processing is complete, the system returns to a point after the call point in `user_command_0100`.

If the user selects a line on the basic list, a details list appears. This is done using the event block `AT LINE-SELECTION`. The program also contains event blocks for `TOP-OF-PAGE` and `TOP-OF-PAGE DURING LINE-SELECTION`, which define page headers for both the basic list and details list.

Since there is only one list system in this program, there is no need for case distinctions within the list events.

REPORT demo\_leave\_to\_list\_processing .\\n\\nTABLES demo\_conn.\\n\\nDATA: wa\_spfli TYPE spfli,\\n flightdate TYPE sflight-fldate.\\n\\nCALL SCREEN 100.\\n\\nMODULE status\_0100 OUTPUT.\\n SET PF-STATUS 'SCREEN\_100'.\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE user\_command\_0100.\\n CALL SCREEN 500.\\n SET SCREEN 100.\\nENDMODULE.\\n\\nMODULE call\_list\_500 OUTPUT.\\n LEAVE TO LIST-PROCESSING AND RETURN TO SCREEN 0.\\n SET PF-STATUS space.\\n SUPPRESS DIALOG.\\n SELECT carrid, connid, cityfrom, cityto\\n FROM spfli\\n WHERE carrid = @demo\_conn-carrid\\n INTO CORRESPONDING FIELDS OF @wa\_spfli.\\n WRITE: / wa\_spfli-carrid, wa\_spfli-connid,\\n wa\_spfli-cityfrom, wa\_spfli-cityto.\\n HIDE: wa\_spfli-carrid, wa\_spfli-connid.\\n ENDSELECT.\\n CLEAR wa\_spfli-carrid.\\nENDMODULE.\\n\\nTOP-OF-PAGE.\\n WRITE text-001 COLOR COL\_HEADING.\\n ULINE.\\n\\nTOP-OF-PAGE DURING LINE-SELECTION.\\n WRITE sy-lisel COLOR COL\_HEADING.\\n ULINE.\\n\\nAT LINE-SELECTION.\\n CHECK NOT wa\_spfli-carrid IS INITIAL.\\n SELECT fldate\\n FROM sflight\\n WHERE carrid = @wa\_spfli-carrid AND\\n connid = @wa\_spfli-connid\\n INTO @flightdate.\\n WRITE / flightdate.\\n ENDSELECT.\\n CLEAR wa\_spfli-carrid.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenlists\_displayed.html abapleave\_to\_list-processing.html