---
title: "ABENNEWS-816-ITAB"
description: |
  ABENNEWS-816-ITAB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-816-ITAB.htm"
abapFile: "ABENNEWS-816-ITAB.html"
keywords: ["delete", "loop", "do", "if", "internal-table", "ABENNEWS", "816", "ITAB"]
---

[1. `READ TABLE ... WHERE ...`](#ABAP_MODIFICATION_1@4@)

[2. Harmonization of Table Expressions and `READ TABLE` Statement](#ABAP_MODIFICATION_2@4@) 

[3. `IS [NOT] INITIAL` in `WHERE` Condition of `FILTER`](#ABAP_MODIFICATION_3@4@)

The addition [`WHERE`](ABAPREAD_TABLE_WHERE.html) can now be used with the [`READ TABLE`](ABAPREAD_TABLE.html) statement. It reads the first line of an internal table that fulfills the `WHERE` condition. In contrast to the addition [`WITH KEY`](ABAPREAD_TABLE_FREE.html), arbitrary logical expressions can be specified instead of equality conditions only. The syntax offers an easier to use alternative to the following frequently used pattern but does not offer any performance gain.

`[LOOP AT itab](ABAPLOOP_AT_ITAB.html) ... [[USING KEY ...] WHERE log_exp|(cond_syntax)](ABAPLOOP_AT_ITAB_COND.html). [EXIT](ABAPEXIT_LOOP.html). ENDLOOP.`

The same rules are valid as for using a `WHERE` condition in other internal table statements ( [`LOOP AT`](ABAPLOOP_AT_ITAB.html), [`MODIFY`](ABAPMODIFY_ITAB.html), [`DELETE`](ABAPDELETE_ITAB.html)). In particular, it is also possible to specify a dynamic `WHERE` condition.

The [variants](ABENTABLE_EXP_ITAB_LINE.html) for specifying a table line in table expressions are now mapped exactly to the respective variants of the [`READ TABLE`](ABAPREAD_TABLE.html) statement. The same rules apply and the same syntax warnings can occur. For that, the internal behavior of the variants

[`[KEY keyname [COMPONENTS]] ...`](ABENTABLE_EXP_ITAB_LINE.html)

was adjusted to match the behavior of the respective [`READ` variants](ABAPREAD_TABLE_FREE.html) and a new variant

[`TABLE KEY keyname [COMPONENTS] ...`](ABENTABLE_EXP_ITAB_LINE.html)

was introduced for [`READ ... WITH TABLE KEY ...`](ABAPREAD_TABLE_KEY.html).

Before, the syntax of the existing variants was not stringently mapped. Despite this adjustment, the behavior of existing programs is not changed. The adjustment offers new possibilities, such as specifying only a part of a table key or specifying additional search fields with a table key. Some new syntax warnings regarding performance might show up and can be either corrected or hidden by a pragma.

In the [basic form](ABENCONSTRUCTOR_EXPR_FILTER_BASIC.html) of the [`FILTER`](ABENCONSTRUCTOR_EXPRESSION_FILTER.html) operator, the predicate `IS [NOT] INITIAL` is now possible.

abenabap.html abennews.html abennews-81.html abennews-816.html