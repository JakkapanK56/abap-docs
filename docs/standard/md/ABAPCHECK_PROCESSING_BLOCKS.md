---
title: "ABAPCHECK_PROCESSING_BLOCKS"
description: |
  ABAPCHECK_PROCESSING_BLOCKS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCHECK_PROCESSING_BLOCKS.htm"
abapFile: "ABAPCHECK_PROCESSING_BLOCKS.html"
keywords: ["select", "loop", "if", "case", "method", "class", "data", "ABAPCHECK", "PROCESSING", "BLOCKS"]
---

[Short Reference](ABAPCHECK_SHORTREF.html)

``CHECK [`log_exp`](ABENLOGEXP.html).``

If the statement `CHECK` is listed outside a [loop](ABENLOOP_GLOSRY.html) and `log_exp` is false, it terminates the current [processing block](ABENPROCESSING_BLOCK_GLOSRY.html). Any [logical expression](ABENLOGICAL_EXPRESSION_GLOSRY.html) can be specified for [`log_exp`](ABENLOGEXP.html).

After the processing block is exited, the runtime framework behaves in the same way as when the [processing block is exited in the regular way](ABENEND_PROCESSING_BLOCKS.html), with the exception of the event block [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html) and the [reporting event block](ABENREPORTING_EVENT_GLOSRY.html)\\ `GET`. In particular, the output parameters of procedures are passed on to the bound actual parameters.

[Only use `RETURN` to exit procedures](ABENEXIT_PROCEDURE_GUIDL.html)

This example shows a case where `CHECK` can be used outside a loop. At the start of a procedure, a prerequisite for executing the procedure is checked and the procedure exited if the check is not successful. In this case, the procedure must not be executed in the background.

-   The event block `LOAD-OF-PROGRAM` cannot be exited using `CHECK`.
-   After the reporting event block `GET` is terminated using `CHECK`, any subordinate nodes in the hierarchy structure of the linked [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html) are no longer processed. The logical database reads the next line of the current node or next higher node, if it has reached the end of the hierarchy level.

-   In a procedure (a method, function module, or subroutine), `CHECK log_exp` works outside a loop in the same way as:
-   `IF NOT log_exp. RETURN. ENDIF.`
-   A further variant of the statement `CHECK` for exiting processing blocks is [`CHECK SELECT-OPTIONS`](ABAPCHECK_SELECT-OPTIONS.html), which can only be used in [`GET` event blocks](ABAPGET-.html) for logical databases.

CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD meth. \\n CHECK sy-batch IS INITIAL. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n demo=>meth( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abenleave\_program\_units.html abenleave\_processing\_blocks.html