---
title: "ABAPCHECK_PROCESSING_BLOCKS"
description: |
  ABAPCHECK_PROCESSING_BLOCKS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCHECK_PROCESSING_BLOCKS.htm"
abapFile: "ABAPCHECK_PROCESSING_BLOCKS.html"
keywords: ["loop", "if", "case", "method", "class", "ABAPCHECK", "PROCESSING", "BLOCKS"]
---

``CHECK [`log_exp`](ABENLOGEXP.html).``

If the statement `CHECK` is listed outside a [loop](ABENLOOP_GLOSRY.html) and `log_exp` is false, it terminates the current [processing block](ABENPROCESSING_BLOCK_GLOSRY.html). Any [logical expression](ABENLOGICAL_EXPRESSION_GLOSRY.html) can be specified for [`log_exp`](ABENLOGEXP.html).

After the processing block is exited, the runtime framework behaves in the same way as when the [processing block is exited in the regular way](ABENEND_PROCESSING_BLOCKS.html). In particular, the output parameters of procedures are passed on to the bound actual parameters.

This example shows a case where `CHECK` can be used outside a loop. At the start of a procedure, a prerequisite for executing the procedure is checked and the procedure exited if the check is not successful. In this case, the procedure must not be executed in the background.

-   In a procedure (a method, function module, or subroutine), `CHECK log_exp` works outside a loop in the same way as:
-   `IF NOT log_exp. RETURN. ENDIF.`

CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD meth. \\n CHECK sy-batch IS INITIAL. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n demo=>meth( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abenleave\_program\_units.html abenleave\_processing\_blocks.html