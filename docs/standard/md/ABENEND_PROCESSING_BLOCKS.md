---
title: "ABENEND_PROCESSING_BLOCKS"
description: |
  ABENEND_PROCESSING_BLOCKS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEND_PROCESSING_BLOCKS.htm"
abapFile: "ABENEND_PROCESSING_BLOCKS.html"
keywords: ["method", "class", "ABENEND", "PROCESSING", "BLOCKS"]
---

A processing block is terminated regularly when its end is reached. For processing blocks that are completed using an `END` statement, this is the end. Event blocks that are not completed explicitly with a statement have an implicit completion after their last statement.

Depending on the processing block that is exited, the runtime framework behaves as follows:

Output before, during, and after execution of a procedure.

-   In [procedures](ABENPROCEDURE_GLOSRY.html), the program returns to the position after the procedure call. The output parameters for which [pass by values](ABENPASS_BY_VALUE_GLOSRY.html) are defined are passed to the bound actual parameters.
-   In [dialog modules](ABENDIALOG_MODULE_GLOSRY.html), the program returns to after the calling position in the [dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html).
-   In [event blocks](ABENEVENT_BLOCK_GLOSRY.html), the control is returned back to the runtime framework and the current process of the runtime framework continues with the program execution.

CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD meth. \\n cl\_demo\_output=>write( \`In procedure\` ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n cl\_demo\_output=>write( \`Before procedure\` ). \\n demo=>meth( ). \\n cl\_demo\_output=>display( \`After procedure\` ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abenleave\_program\_units.html abenleave\_processing\_blocks.html