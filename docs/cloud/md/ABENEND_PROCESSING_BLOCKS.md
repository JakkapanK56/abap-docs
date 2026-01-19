---
title: "ABENEND_PROCESSING_BLOCKS"
description: |
  ABENEND_PROCESSING_BLOCKS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENEND_PROCESSING_BLOCKS.htm"
abapFile: "ABENEND_PROCESSING_BLOCKS.html"
keywords: ["method", "class", "ABENEND", "PROCESSING", "BLOCKS"]
---

A processing block is terminated regularly when its end is reached.

Depending on the processing block that is exited, the runtime framework behaves as follows:

Output before, during, and after execution of a procedure.

-   In [procedures](ABENPROCEDURE_GLOSRY.html), the program returns to the position after the procedure call. The output parameters for which [pass by values](ABENPASS_BY_VALUE_GLOSRY.html) are defined are passed to the bound actual parameters.

CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD meth. \\n cl\_demo\_output=>write( \`In procedure\` ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n cl\_demo\_output=>write( \`Before procedure\` ). \\n demo=>meth( ). \\n cl\_demo\_output=>display( \`After procedure\` ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abenleave\_program\_units.html abenleave\_processing\_blocks.html