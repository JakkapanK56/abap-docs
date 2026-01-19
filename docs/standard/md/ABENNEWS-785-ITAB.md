---
title: "ABENNEWS-785-ITAB"
description: |
  ABENNEWS-785-ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-785-ITAB.htm"
abapFile: "ABENNEWS-785-ITAB.html"
keywords: ["insert", "delete", "loop", "if", "data", "internal-table", "field-symbol", "ABENNEWS", "785", "ITAB"]
---

Earlier, in statements for [accessing internal tables](ABENITAB_ACCESS.html), the internal table had to be known statically. The operand had to be typed at least with `any table`.

Now, this restriction is partly removed. In the statements [`INSERT`](ABAPINSERT_ITAB.html), [`APPEND`](ABAPAPPEND.html), [`COLLECT`](ABAPCOLLECT.html), [`MODIFY`](ABAPMODIFY_ITAB.html), [`DELETE`](ABAPDELETE_ITAB.html), [`READ`](ABAPREAD_TABLE.html), [`LOOP`](ABAPLOOP_AT_ITAB_VARIANTS.html), and [`SORT`](ABAPSORT_ITAB.html), operands can be field symbols and formal parameters that are typed fully generically with `TYPE data` or `TYPE any`. Such operands can be used as if typed with `any table`. If an index access is involved, operands are still required that are typed at least with `TYPE index_table`.

This is not yet possible in expressions as [`FOR expressions`](ABENFOR_ITAB.html) or [table expressions](ABENTABLE_EXPRESSIONS.html).

The following was not possible in older releases.

DATA itab TYPE TABLE OF scarr. \\n\\ \\nFIELD-SYMBOLS TYPE ANY. \\nASSIGN itab TO . \\n\\ \\nLOOP AT ASSIGNING FIELD-SYMBOL(). \\n ... \\nENDLOOP. abenabap.html abennews.html abennews-78.html abennews-785.html