---
title: "ABAPEXIT_PROCESSING_BLOCKS"
description: |
  ABAPEXIT_PROCESSING_BLOCKS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXIT_PROCESSING_BLOCKS.htm"
abapFile: "ABAPEXIT_PROCESSING_BLOCKS.html"
keywords: ["select", "loop", "do", "if", "case", "method", "class", "types", "ABAPEXIT", "PROCESSING", "BLOCKS"]
---

[Short Reference](ABAPEXIT_SHORTREF.html)

`EXIT.`

If the statement `EXIT` is outside a [loop](ABENLOOP_GLOSRY.html), it immediately terminates the current [processing block](ABENPROCESSING_BLOCK_GLOSRY.html).

After the processing block is exited, the runtime framework behaves in the same way as when the [processing block is exited in a regular way](ABENEND_PROCESSING_BLOCKS.html), with the exception of the event block [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html) and the [reporting event blocks](ABENREPORTING_EVENT_GLOSRY.html)\\ `START-OF-SELECTION` and `GET`. In particular, the output parameters of procedures are passed on to the bound actual parameters.

[Only use `RETURN` to exit procedures](ABENEXIT_PROCEDURE_GUIDL.html)

The method `meth` contains two `EXIT` statements. Whereas the first statement exits the `LOOP` loop, the second statement exits the entire method. Therefore, the `RETURN` statement should be used instead of the second `EXIT` statement.

-   The event block `LOAD-OF-PROGRAM` cannot be exited using `EXIT`.
-   After the reporting event blocks `START-OF-SELECTION` and `GET` have been terminated using `EXIT`, the runtime framework does not raise any more reporting events and instead calls the list processor directly to display the basic list.

TYPES: \\n BEGIN OF line, \\n col1 TYPE string, \\n col2 TYPE string, \\n END OF line, \\n itab TYPE STANDARD TABLE OF line WITH EMPTY KEY. \\n\\ \\nCLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth IMPORTING char TYPE string \\n itab TYPE itab. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD meth. \\n LOOP AT itab INTO FINAL(wa). \\n FIND char IN wa-col1 RESPECTING CASE. \\n IF sy-subrc = 0. \\n EXIT. \\n ENDIF. \\n ENDLOOP. \\n FIND to\_upper( char ) IN wa-col2 RESPECTING CASE. \\n IF sy-subrc <> 0. \\n EXIT. "works as RETURN here! \\n ENDIF. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(itab) = VALUE itab( \\n ( col1 = \`aaaa\` col2 = \`AAAA\` ) \\n ( col1 = \`bbbb\` col2 = \`XXXX\` ) \\n ( col1 = \`cccc\` col2 = \`CCCC\` ) ). \\n demo=>meth( char = \`b\` \\n itab = itab ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abenleave\_program\_units.html abenleave\_processing\_blocks.html