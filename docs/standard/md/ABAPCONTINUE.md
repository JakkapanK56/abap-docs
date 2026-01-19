---
title: "ABAPCONTINUE"
description: |
  ABAPCONTINUE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCONTINUE.htm"
abapFile: "ABAPCONTINUE.html"
keywords: ["loop", "do", "if", "data", "ABAPCONTINUE"]
---

[Short Reference](ABAPCONTINUE_SHORTREF.html)

`CONTINUE.`

The statement `CONTINUE` may only be used in [loops](ABENLOOP_GLOSRY.html). If it is used, the current loop pass is terminated immediately and the program flow is continued with the next loop pass.

Exit of a loop pass using `CONTINUE` if the loop index `sy-index` is an odd number.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA remainder TYPE i. \\nDO 20 TIMES. \\n remainder = sy-index MOD 2. \\n IF remainder <> 0. \\n CONTINUE. \\n ENDIF. \\n out->write\_text( |\\{ sy-index \\}| ). \\nENDDO. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_execution.html abenleave\_program\_units.html abenleave\_loops.html