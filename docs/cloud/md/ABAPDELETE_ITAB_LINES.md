---
title: "ABAPDELETE_ITAB_LINES"
description: |
  ABAPDELETE_ITAB_LINES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDELETE_ITAB_LINES.htm"
abapFile: "ABAPDELETE_ITAB_LINES.html"
keywords: ["select", "insert", "delete", "loop", "if", "data", "internal-table", "ABAPDELETE", "ITAB", "LINES"]
---

``... itab [USING KEY [`keyname`](ABENKEYNAME.html)]\ [FROM idx1]\ [TO idx2]\                               [STEP n]|[WHERE [`log_exp`](ABENLOGEXP.html)|(cond_syntax)] ...``

[1. `... USING KEY keyname`](#ABAP_ADDITION_1@3@)

[2. `... [FROM idx1]\ [TO idx2]`](#ABAP_ADDITION_2@3@)

[3. `... STEP n`](#ABAP_ADDITION_3@3@)

[4. `... WHERE log_exp`](#ABAP_ADDITION_4@3@)

[5. `... WHERE (cond_syntax)`](#ABAP_ADDITION_5@3@)

To delete multiple lines, at least one of the additions `FROM`, `TO`, `STEP`, or `WHERE` must be specified. `USING KEY [keyname](ABENKEYNAME.html)` is used to determine the table key to which the additions refer.

If multiple additions are specified, the lines that result from the intersection of the individual additions are deleted.

The addition `USING KEY` can be used to specify a table key in [`keyname`](ABENKEYNAME.html) with which the processing is executed. The specified table key affects the order in which the table lines are accessed, and the evaluation of the remaining conditions.

If the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is specified, the processing behaves in the same way as if no key were explicitly specified. If a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) is specified, the order in which the lines are accessed is as follows:

The statement `DELETE` deletes the first three lines of the internal table `itab` because they occur from line 4 in the secondary table index of the secondary key `skey`.

These optional additions have the effect that only table rows from row number `idx1` or up to and including row number `idx2` are respected in the table index used. The table index used is either the primary index or a secondary sorted index specified by `USING KEY`.

If only `FROM` is specified, all lines of the table from line number `idx1` up to and including the last line are respected. If only `TO` is specified, all lines in the table from the first line up to line number `idx2` are respected.

`idx1` and `idx2` are [numeric expression positions](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) of operand type `i`.

The following restrictions apply:

The additions `FROM` and `TO` can be specified together with `STEP` and then special rules apply.

The statement `DELETE FROM itab` has the statement [`DELETE FROM dbtab`](ABAPDELETE_DBTAB.html) with identical syntax. If an internal table has the same name as a database table, a statement like this accesses the internal table.

Deletion of all lines in an internal table from line 4. The result is the same as in the example for [`APPEND ...`](ABAPAPPEND.html), [`SORTED BY`](ABAPAPPEND.html).

The optional addition `STEP n` defines the step size for processing an internal table. The step size is defined by the value of `n` which must be positive. `n` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) of operand type `i`. If the addition `STEP` is not specified, the step size is 1.

The step size can be combined with the additions `FROM` and `TO` and then works on the subset of table lines defined by these conditions. If `FROM idx1` and `TO idx2` are combined with `STEP`, `idx1` needs to be less than or equal to `idx2`.

Depending on the value of `n`, every nth line is processed. The value of `n` must not be 0. For more details, see [`LOOP AT itab, cond`](ABAPLOOP_AT_ITAB_COND.html).

The following example shows that every second table line between line 1 and 8 is deleted from the internal table.

-   **Specification of a [sorted key](ABENSORTED_KEY_GLOSRY.html)**
-   The lines are processed by ascending line number in the [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html)
-   **Specification of a [hash key](ABENHASH_KEY_GLOSRY.html)**
-   The lines are processed in the order in which they were inserted into the table.

-   Unlike the processing of a hashed table when a primary key is used, a preceding sort using the statement `SORT` has no affect on the processing order when a secondary hash key is specified.
-   If a secondary table key is specified, any `WHERE` condition also specified must be [optimizable](ABENITAB_WHERE_OPTIMIZATION.html). Otherwise a syntax error occurs, or an exception is raised.

-   If the addition `USING KEY` is not used, or the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is specified in `keyname`, the additions `FROM` and `TO` can only be used for [index tables](ABENINDEX_TABLE_GLOSRY.html) and refer to the line numbers of the [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html).
-   If a [sorted](ABENSORTED_KEY_GLOSRY.html)\\ [secondary key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) is specified in `keyname` after `USING KEY`, the additions `FROM` and `TO` can be used for all table categories and refer to the line numbers of the [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html).

-   If the value of `idx1` is less than or equal to 0, a runtime error occurs. If the value of `idx1` is greater than the total number of table lines, no processing takes place.
-   If the value of `idx2` is less than or equal to 0, a runtime error occurs. If the value of `idx2` is greater than the number of table lines, it is set to the number of table lines.
-   If the value of `idx2` is less than the value of `idx1`, no processing takes place.

-   `STEP n` cannot be used in combination with `WHERE`.
-   In contrast to the [`STEP`](ABAPLOOP_AT_ITAB_COND.html) addition for `LOOP AT`, the processing order cannot be changed by negative values of `n` here. The processing order is only defined by the table category or the addition `USING KEY`.
-   `STEP n` can, however, be positioned otherwise. Its use after `FROM idx1` and `TO idx2` is recommended.

DATA itab TYPE TABLE OF i WITH EMPTY KEY \\n WITH UNIQUE SORTED KEY skey COMPONENTS table\_line. \\n\\ \\nitab = VALUE #( ( 6 ) ( 5 ) ( 4 ) ( 3 ) ( 2 ) ( 1 ) ). \\n\\ \\nDELETE itab USING KEY skey FROM 4. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: carrid TYPE sflight-carrid VALUE 'LH', \\n connid TYPE sflight-connid VALUE '0400'. \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = carrid \\n )->add\_field( CHANGING field = connid )->request( ). \\n\\ \\nDATA: BEGIN OF seats, \\n fldate TYPE sflight-fldate, \\n seatsocc TYPE sflight-seatsocc, \\n seatsmax TYPE sflight-seatsmax, \\n seatsfree TYPE sflight-seatsocc, \\n END OF seats. \\n\\ \\nDATA seats\_tab LIKE STANDARD TABLE OF seats. \\n\\ \\nSELECT fldate, seatsocc, seatsmax, seatsmax - seatsocc AS seatsfree \\n FROM sflight \\n WHERE carrid = @carrid AND \\n connid = @connid \\n INTO TABLE @seats\_tab. \\n\\ \\nSORT seats\_tab BY seatsfree DESCENDING. \\nDELETE seats\_tab FROM 4. \\n\\ \\nout->write( seats\_tab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM spfli \\n ORDER BY carrid \\n INTO TABLE @DATA(itab). \\n\\ \\nDELETE itab FROM 1 TO 8 STEP 2. \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapdelete\_itab.html