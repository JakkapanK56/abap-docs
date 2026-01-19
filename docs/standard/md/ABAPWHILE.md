---
title: "ABAPWHILE"
description: |
  ABAPWHILE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWHILE.htm"
abapFile: "ABAPWHILE.html"
keywords: ["loop", "while", "if", "data", "internal-table", "ABAPWHILE"]
---

[Short Reference](ABAPWHILE_SHORTREF.html)

``WHILE [`log_exp`](ABENLOGEXP.html)``\\ 
  `[statement_block]`\\ 
`ENDWHILE.`

Conditional loop. The statements `WHILE` and `ENDWHILE` define a control structure that can contain a complete [statement block](ABENSTATEMENT_BLOCK_GLOSRY.html)\\ `statement_block`. After `WHILE`, any [logical expression](ABENLOGICAL_EXPRESSION_GLOSRY.html)\\ [`log_exp`](ABENLOGEXP.html) can follow.

The statement block is repeated as long as the logical expression is true, or until it is exited with one of the statements to exit loops. In particular, the statement [`EXIT`](ABAPEXIT_LOOP.html) is intended for exiting a loop completely. Within the statement block, the system field `sy-index` contains the number of previous loop passes, including the current pass. In nested loops, `sy-index` always refers to the current loop.

Filling of an internal table with 100 lines. A [`FOR`](ABENFOR.html) expression can now also be used for that purpose.

-   If `WHILE` loops are used to construct values or fill internal tables, they can usually be expressed more elegantly using conditional iterations with [`FOR`](ABENFOR_CONDITIONAL.html) in constructor expressions.
-   A maximum runtime can be configured using the [profile parameters](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `rdisp/scheduler/prio_low/max_runtime`, `rdisp/scheduler/prio_normal/max_runtime`, and `rdisp/scheduler/prio_high/max_runtime`. If this runtime is exceeded because the logical expression is never false and the loop is not exited in any other way, the program is terminated by the runtime framework.
-   The obsolete addition [`VARY`](ABAPWHILE_VARY.html) can be used to process a sequence of data objects in the memory.

DATA itab TYPE TABLE OF i. \\n\\ \\nWHILE lines( itab ) < 100. \\n itab = VALUE #( BASE itab ( sy-index ) ). \\nENDWHILE. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abencontrol\_structures.html abenabap\_loops.html