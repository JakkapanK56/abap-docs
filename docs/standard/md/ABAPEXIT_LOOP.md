---
title: "ABAPEXIT_LOOP"
description: |
  ABAPEXIT_LOOP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXIT_LOOP.htm"
abapFile: "ABAPEXIT_LOOP.html"
keywords: ["loop", "do", "if", "data", "ABAPEXIT", "LOOP"]
---

[Short Reference](ABAPEXIT_SHORTREF.html)

`EXIT.`

If the `EXIT` statement is listed within a [loop](ABENLOOP_GLOSRY.html), it exits the loop by terminating the current loop pass. The program flow resumes after the closing statement of the loop.

Outside of a loop, the statement `EXIT` exits the current [processing block](ABENPROCESSING_BLOCK_GLOSRY.html) (see [`EXIT` - Processing Block](ABAPEXIT_PROCESSING_BLOCKS.html)). `EXIT`, however, it should only be used within loops.

Exit of a loop using `EXIT` if the loop index `sy-index` is greater than a number `limit`.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA limit TYPE i VALUE 10. \\nDO. \\n IF sy-index > limit. \\n EXIT. \\n ENDIF. \\n out->write( |\\{ sy-index \\} | ). \\nENDDO. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_execution.html abenleave\_program\_units.html abenleave\_loops.html