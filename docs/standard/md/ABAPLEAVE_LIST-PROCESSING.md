---
title: "ABAPLEAVE_LIST-PROCESSING"
description: |
  ABAPLEAVE_LIST-PROCESSING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLEAVE_LIST-PROCESSING.htm"
abapFile: "ABAPLEAVE_LIST-PROCESSING.html"
keywords: ["select", "do", "if", "ABAPLEAVE", "LIST", "PROCESSING"]
---

[Short Reference](ABAPLEAVE_LIST-PROCESSING_SHORTREF.html)

`LEAVE LIST-PROCESSING.`

This statement immediately exits the list processor. The runtime framework continues processing with the [PBO](ABENPBO_GLOSRY.html) event of the dynpro from which the list processor was called using [`LEAVE TO LIST-PROCESSING`](ABAPLEAVE_TO_LIST-PROCESSING.html) or the dynpro that was set using the addition [`AND RETURN TO SCREEN`](ABAPLEAVE_TO_LIST-PROCESSING.html) of this statement.

If the statement is not executed when the list is displayed by the list processor, it is ignored, except in the event blocks for [reporting events](ABENREPORTING_EVENT_GLOSRY.html). Here, the processor branches to the end of the program and continues in accordance with the [process flow](ABENREPORTING_PROCESS.html) for executable programs.

When the list processor is exited, the list buffer of the [dynpro sequence](ABENDYNPRO_SEQUENCE_GLOSRY.html) is initialized. New output statements describe a new basic list.

This example shows the recommended procedure for displaying lists during dynpro sequences. A separate dynpro 500 is defined for calling the list processor. The [screen layout](ABENSCREEN_GLOSRY.html) of this dynpro does not contain any screen elements and calls a single PBO module `call_list` but no [PAI](ABENPAI_GLOSRY.html) modules. The entire basic list, including the GUI status, is defined in the PBO module. When the dynpro is exited using `LEAVE SCREEN`, its processing is stopped, and the list processor is started. The list events are handled in the same program. When the list processor is exited, the dynpro sequence of dynpro 500 is ended, because the [next dynpro](ABENNEXT_DYNPRO_GLOSRY.html) 0 is specified when the list processor is called.

PROGRAM demo NO STANDARD PAGE HEADING. \\n\\ \\n... \\n\\ \\nMODULE call\_list OUTPUT. \\n SET PF-STATUS space. \\n WRITE 'Basic List'. \\n LEAVE TO LIST-PROCESSING AND RETURN TO SCREEN 0. \\n LEAVE SCREEN. \\nENDMODULE. \\n\\ \\nTOP-OF-PAGE. \\n WRITE 'Header' COLOR COL\_HEADING. \\n ULINE. \\n\\ \\nTOP-OF-PAGE DURING LINE-SELECTION. \\n WRITE sy-lsind COLOR COL\_HEADING. \\n ULINE. \\n\\ \\nAT LINE-SELECTION. \\n WRITE 'Secondary List'. \\n IF sy-lsind = 20. \\n LEAVE LIST-PROCESSING. \\n ENDIF. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenlists\_displayed.html