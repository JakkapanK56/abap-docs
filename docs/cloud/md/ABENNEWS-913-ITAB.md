---
title: "ABENNEWS-913-ITAB"
description: |
  ABENNEWS-913-ITAB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-913-ITAB.htm"
abapFile: "ABENNEWS-913-ITAB.html"
keywords: ["delete", "loop", "do", "if", "internal-table", "ABENNEWS", "913", "ITAB"]
---

[1. `READ TABLE ... WHERE ...`](#ABAP_MODIFICATION_1@4@)

[2. `IS [NOT] INITIAL` in `WHERE` Condition of `FILTER`](#ABAP_MODIFICATION_2@4@)

The addition [`WHERE`](ABAPREAD_TABLE_WHERE.html) can now be used with the [`READ TABLE`](ABAPREAD_TABLE.html) statement. It reads the first line of an internal table that fulfills the `WHERE` condition. In contrast to the addition [`WITH KEY`](ABAPREAD_TABLE_FREE.html), arbitrary logical expressions can be specified instead of equality conditions only. The syntax offers an easier to use alternative to the following frequently used pattern but does not offer any performance gain.

`[LOOP AT itab](ABAPLOOP_AT_ITAB.html) ... [[USING KEY ...] WHERE log_exp|(cond_syntax)](ABAPLOOP_AT_ITAB_COND.html). [EXIT](ABAPEXIT_LOOP.html). ENDLOOP.`

The same rules are valid as for using a `WHERE` condition in other internal table statements ( [`LOOP AT`](ABAPLOOP_AT_ITAB.html), [`MODIFY`](ABAPMODIFY_ITAB.html), [`DELETE`](ABAPDELETE_ITAB.html)) and must be taken into account. In particular, it is also possible to specify a dynamic `WHERE` condition.

In the [basic form](ABENCONSTRUCTOR_EXPR_FILTER_BASIC.html) of the [`FILTER`](ABENCONSTRUCTOR_EXPRESSION_FILTER.html) operator, the predicate `IS [NOT] INITIAL` is now possible.

abenabap.html abennews.html abennews-91.html abennews-913.html