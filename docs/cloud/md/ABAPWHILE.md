---
title: "ABAPWHILE"
description: |
  ABAPWHILE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPWHILE.htm"
abapFile: "ABAPWHILE.html"
keywords: ["loop", "while", "if", "data", "internal-table", "ABAPWHILE"]
---

``WHILE [`log_exp`](ABENLOGEXP.html)``\\ 
  `[statement_block]`\\ 
`ENDWHILE.`

Conditional loop. The statements `WHILE` and `ENDWHILE` define a control structure that can contain a complete [statement block](ABENSTATEMENT_BLOCK_GLOSRY.html)\\ `statement_block`. After `WHILE`, any [logical expression](ABENLOGICAL_EXPRESSION_GLOSRY.html)\\ [`log_exp`](ABENLOGEXP.html) can follow.

The statement block is repeated as long as the logical expression is true, or until it is exited with one of the statements to exit loops. In particular, the statement [`EXIT`](ABAPEXIT_LOOP.html) is intended for exiting a loop completely. Within the statement block, the system field `sy-index` contains the number of previous loop passes, including the current pass. In nested loops, `sy-index` always refers to the current loop.

Filling of an internal table with 100 lines. A [`FOR`](ABENFOR.html) expression can now also be used for that purpose.

-   If `WHILE` loops are used to construct values or fill internal tables, they can usually be expressed more elegantly using conditional iterations with [`FOR`](ABENFOR_CONDITIONAL.html) in constructor expressions.

DATA itab TYPE TABLE OF i. \\n\\ \\nWHILE lines( itab ) < 100. \\n itab = VALUE #( BASE itab ( sy-index ) ). \\nENDWHILE. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abencontrol\_structures.html abenabap\_loops.html