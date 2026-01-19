---
title: "ABAPEXIT_PROCESSING_BLOCKS"
description: |
  ABAPEXIT_PROCESSING_BLOCKS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPEXIT_PROCESSING_BLOCKS.htm"
abapFile: "ABAPEXIT_PROCESSING_BLOCKS.html"
keywords: ["loop", "if", "case", "method", "class", "types", "ABAPEXIT", "PROCESSING", "BLOCKS"]
---

`EXIT.`

If the statement `EXIT` is outside a [loop](ABENLOOP_GLOSRY.html), it immediately terminates the current [processing block](ABENPROCESSING_BLOCK_GLOSRY.html).

After the processing block is exited, the runtime framework behaves in the same way as when the [processing block is exited in a regular way](ABENEND_PROCESSING_BLOCKS.html). In particular, the output parameters of procedures are passed on to the bound actual parameters.

The method `meth` contains two `EXIT` statements. Whereas the first statement exits the `LOOP` loop, the second statement exits the entire method. Therefore, the `RETURN` statement should be used instead of the second `EXIT` statement.

TYPES: \\n BEGIN OF line, \\n col1 TYPE string, \\n col2 TYPE string, \\n END OF line, \\n itab TYPE STANDARD TABLE OF line WITH EMPTY KEY. \\n\\ \\nCLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth IMPORTING char TYPE string \\n itab TYPE itab. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD meth. \\n LOOP AT itab INTO FINAL(wa). \\n FIND char IN wa-col1 RESPECTING CASE. \\n IF sy-subrc = 0. \\n EXIT. \\n ENDIF. \\n ENDLOOP. \\n FIND to\_upper( char ) IN wa-col2 RESPECTING CASE. \\n IF sy-subrc <> 0. \\n EXIT. "works as RETURN here! \\n ENDIF. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(itab) = VALUE itab( \\n ( col1 = \`aaaa\` col2 = \`AAAA\` ) \\n ( col1 = \`bbbb\` col2 = \`XXXX\` ) \\n ( col1 = \`cccc\` col2 = \`CCCC\` ) ). \\n demo=>meth( char = \`b\` \\n itab = itab ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abenleave\_program\_units.html abenleave\_processing\_blocks.html