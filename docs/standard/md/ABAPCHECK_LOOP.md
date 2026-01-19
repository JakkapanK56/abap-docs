---
title: "ABAPCHECK_LOOP"
description: |
  ABAPCHECK_LOOP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCHECK_LOOP.htm"
abapFile: "ABAPCHECK_LOOP.html"
keywords: ["loop", "do", "if", "data", "ABAPCHECK", "LOOP"]
---

[Short Reference](ABAPCHECK_SHORTREF.html)

``CHECK [`log_exp`](ABENLOGEXP.html).``

If the statement `CHECK` is listed in a [loop](ABENLOOP_GLOSRY.html) and `log_exp` is false, the statement `CHECK` immediately terminates the current loop pass and the program continues with the next loop pass. Any [logical expression](ABENLOGICAL_EXPRESSION_GLOSRY.html) can be specified for [`log_exp`](ABENLOGEXP.html).

Termination of a loop pass using `CHECK` if the loop index `sy-index` is an odd number.

-   Within a loop, `CHECK log_exp` has the same effect as:
-   `IF NOT log_exp. CONTINUE. ENDIF.`
-   Outside a loop, the statement `CHECK` exits the current [processing block](ABENPROCESSING_BLOCK_GLOSRY.html) (see [`CHECK`](ABAPCHECK_PROCESSING_BLOCKS.html)), however it is recommended that `CHECK` is used inside loops only.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA remainder TYPE i. \\nDO 20 TIMES. \\n remainder = sy-index MOD 2. \\n CHECK remainder = 0. \\n out->write\_text( |\\{ sy-index \\}| ). \\nENDDO. \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_execution.html abenleave\_program\_units.html abenleave\_loops.html