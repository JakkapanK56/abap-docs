---
title: "ABENNEWS-756-ITAB"
description: |
  ABENNEWS-756-ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-756-ITAB.htm"
abapFile: "ABENNEWS-756-ITAB.html"
keywords: ["insert", "delete", "loop", "if", "data", "types", "internal-table", "field-symbol", "ABENNEWS", "756", "ITAB"]
---

[1\. Access to Generically Typed Internal Tables](#ABAP_MODIFICATION_1@4@)

[2\. Alias Names for Secondary Keys](#ABAP_MODIFICATION_2@4@)

Earlier, in statements for [accessing internal tables](ABENITAB_ACCESS.html), the internal table had to be known statically. The operand had to be typed at least with `any table`.

Now, this restriction is partly removed. In the statements [`INSERT`](ABAPINSERT_ITAB.html), [`APPEND`](ABAPAPPEND.html), [`COLLECT`](ABAPCOLLECT.html), [`MODIFY`](ABAPMODIFY_ITAB.html), [`DELETE`](ABAPDELETE_ITAB.html), [`READ`](ABAPREAD_TABLE.html), [`LOOP`](ABAPLOOP_AT_ITAB_VARIANTS.html), and [`SORT`](ABAPSORT_ITAB.html), operands can be field symbols and formal parameters that are typed fully generically with `TYPE data` or `TYPE any`. Such operands can be used as if typed with `any table`. If an index access is involved, operands are still required that are typed at least with `TYPE index_table`.

This is not yet possible in expressions as [`FOR expressions`](ABENFOR_ITAB.html) or [table expressions](ABENTABLE_EXPRESSIONS.html).

The following was not possible in older releases.

Alias names can now be declared for [secondary keys](ABENSECONDARY_KEY_GLOSRY.html) of internal tables by using the addition `ALIAS` of [`TYPES`](ABAPTYPES_SECONDARY_KEY.html) and [`DATA`](ABAPDATA_SECONDARY_KEY.html). This can be helpful when changing existing secondary keys without invalidating users.

DATA itab TYPE TABLE OF scarr. \\n\\ \\nFIELD-SYMBOLS TYPE ANY. \\nASSIGN itab TO . \\n\\ \\nLOOP AT ASSIGNING FIELD-SYMBOL(). \\n ... \\nENDLOOP. abenabap.html abennews.html abennews-75.html abennews-756.html