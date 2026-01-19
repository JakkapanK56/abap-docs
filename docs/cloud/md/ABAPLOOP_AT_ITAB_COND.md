---
title: "ABAPLOOP_AT_ITAB_COND"
description: |
  ABAPLOOP_AT_ITAB_COND - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPLOOP_AT_ITAB_COND.htm"
abapFile: "ABAPLOOP_AT_ITAB_COND.html"
keywords: ["select", "insert", "delete", "loop", "do", "if", "try", "catch", "data", "internal-table", "ABAPLOOP", "ITAB", "COND"]
---

``... [USING KEY [`keyname`](ABENKEYNAME.html)]\      [FROM idx1]\ [TO idx2]\ [STEP n]\      [WHERE [`log_exp`](ABENLOGEXP.html)|(cond_syntax)] ...``

[1. `... USING KEY keyname`](#ABAP_ADDITION_1@3@)

[2. `... [FROM idx1]\ [TO idx2]`](#ABAP_ADDITION_2@3@)

[3. `... STEP n`](#ABAP_ADDITION_3@3@)

[4. `... WHERE log_exp`](#ABAP_ADDITION_4@3@)

[5. `... WHERE (cond_syntax)`](#ABAP_ADDITION_5@3@)

These optional additions to [`LOOP AT itab`](ABAPLOOP_AT_ITAB.html) specify a subset of lines to be processed and the order in which the loop is executed.

If none of the conditions are specified, all table lines are read in the standard order that is defined by the table category as described under [`LOOP AT itab`](ABAPLOOP_AT_ITAB.html).

The optional addition `USING KEY` specifies a table key [`keyname`](ABENKEYNAME.html) with which the processing is executed. The specified table key affects the order in which the table lines are accessed, and the evaluation of the other conditions.

If the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is specified using its name `primary_key`, the processing behaves in the same way as if no key were explicitly specified. If a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) is specified, the order in which the lines are accessed is as follows.

The order defined by `USING KEY` can be reversed by using the addition `STEP` with a negative step size.

Within the loop, the key used can be addressed using the predefined name `loop_key`. This is possible in all statements where the table key [`keyname`](ABENKEYNAME.html) to be used can be specified explicitly. This type of statement must then be listed in the loop itself. Including the statement in a procedure that is called in the loop is not sufficient.

The example demonstrates the difference between loops across a standard table of random numbers with and without a sorted secondary table key specification. The first loop returns the lines in the order in which they were appended. The second loop returns the lines sorted in ascending order.

[Loop Across Internal Table with Key Specified](ABENLOOP_AT_ITAB_KEY_ABEXA.html)

These optional additions have the effect that only table rows from row number `idx1` or up to and including row number `idx2` are respected in the table index used. The table index used is either the primary index or a secondary sorted index specified by `USING KEY`.

If only `FROM` is specified, all lines of the table from line number `idx1` up to and including the last line are respected. If only `TO` is specified, all lines in the table from the first line up to line number `idx2` are respected.

`idx1` and `idx2` are [numeric expression positions](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) of operand type `i`.

The following restrictions apply:

The value of `idx1` is evaluated once when the loop is entered. Any changes to `idx1` during loop processing are ignored. In contrast, the value of `idx2` is evaluated in each loop pass and any changes made to `idx2` during loop processing are respected.

The additions `FROM` and `TO` can be specified together with `STEP` and then special rules apply.

To determine when loop processing is exited and whether the value specified in `idx2` has been reached, the current line number is evaluated. Note that this number can be changed if lines are inserted or deleted during a loop pass as described in [`LOOP`](ABAPLOOP_AT_ITAB.html). When lines are inserted, the loop may be processed less often and when lines are deleted, it may be processed more often than specified by the difference between `idx2` and `idx1`.

Determination of the primary index of a particular table line using the built-in function [`line_index`](ABENLINE_INDEX_FUNCTION.html) and a loop across the internal table from this line.

The optional addition `STEP n` defines the step size and the direction of the loop. The step size is defined by the absolute value of `n` and the direction is defined by the positive or negative sign of `n`. `n` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) of operand type `i`. If the addition `STEP` is not specified, the step size is 1 and the loop order is defined by the table category or the addition `USING KEY` only.

The addition step size can be combined with the additions `FROM`, `TO` and `WHERE` and then works on the subset of table lines defined by these conditions. For such combinations the following special rules apply:

The detailed effect of the addition `STEP` is as follows:

The value of `n` must not be 0. If the value 0 is known statically for `n`, a syntax error occurs. If the value 0 is known at runtime only, the program is aborted with the runtime error `ITAB_ILLEGAL_STEP_SIZE` which is not catchable. Changing the value of `n` inside the loop has no effect on the step size or loop order.

As usual, `sy-tabix` contains the line number of the current line read in a loop pass when using a table index or 0 when using a hashed key.

The following example shows the use of `STEP n` as reverse loop in combination with `FROM idx1` and `TO idx2`. As result, line 3, line 2, and line 1 as defined by the primary table index are processed in the mentioned order.

[`LOOP` with Step Size](ABENLOOP_AT_ITAB_STEP_ABEXA.html)

-   The subset of lines can be defined with:

-   `FROM` and `TO` that define an interval of line numbers for index tables
-   `WHERE` that selects lines that fulfill a condition specified in a logical expression
-   `STEP` that allows lines to be skipped by defining a step size greater than 1.

-   The processing order can be defined with:

-   `USING KEY [keyname](ABENKEYNAME.html)` that defines the table key that is used for the loop and thus overrides the standard order determined by the table category.
-   `STEP` that can define a reverse order by specifying a negative step size.

-   **[Specification of a sorted key](ABENSORTED_KEY_GLOSRY.html)**
-   The lines are processed by ascending line number in the [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html) In each loop pass, the system field `sy-tabix` contains the line number of the current line in the associated secondary table index.
-   **[Specification of a hash key](ABENHASH_KEY_GLOSRY.html)**
-   The lines are processed in the order in which they were inserted into the table. In each loop pass, the system field `sy-tabix` contains the value 0. A preceding sort using the statement [`SORT`](ABAPSORT_ITAB.html) does not change this processing order.

-   The fact that the processing order defined by a secondary hash key is not affected by a preceding sort using the statement `SORT` is a different behavior than for the processing order defined by the primary key of a hashed table that is affected by a preceding sort.
-   If a secondary table key is specified, a simultaneously specified `WHERE` condition also must be [optimizable](ABENITAB_WHERE_OPTIMIZATION.html), otherwise a syntax error occurs or an exception is raised.

-   If the addition `USING KEY` is not used, or the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is specified in `keyname`, the additions `FROM` and `TO` can only be used for [index tables](ABENINDEX_TABLE_GLOSRY.html) and refer to the line numbers of the [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html).
-   If a [sorted](ABENSORTED_KEY_GLOSRY.html)\\ [secondary key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) is specified in `keyname` after `USING KEY`, the additions `FROM` and `TO` can be used for all table categories and refer to the line numbers of the [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html).

-   If the value of `idx1` is less than or equal to 0, it is set to 1 in the statement `LOOP`. If the value of `idx1` is greater than the total number of table lines, no processing takes place.
-   If the value of `idx2` is less than or equal to 0, the statement `LOOP` is not executed. If the value of `idx2` is greater than the number of table lines, it is set to the number of table lines.
-   If the value of `idx2` is less than the value of `idx1`, no processing takes place.

-   If `FROM idx1` or `TO idx2` are combined with `STEP`:

-   If the value of `n` is greater than 0, `idx1` needs to be less than or equal to `idx2`.
-   If the value of `n` is less than 0, `idx1` needs to be greater than or equal to `idx2`.

-   If none of the above restrictions are met, the loop is interpreted as empty. All other settings for `FROM idx1` and `TO idx2` are described as for [`... [FROM idx1]\ [TO idx2]`](ABAPLOOP_AT_ITAB_COND.html).
-   If a `WHERE` condition is combined with `STEP`, the operand `n` can only have the value 1 or -1. Other values lead to a syntax error or the uncatchable runtime error `ITAB_ILLEGAL_STEP_SIZE`. The `WHERE` condition needs to be placed after `STEP n`.

-   **Step size**
-   The absolute value of `n` specifies the step size of the loop over all table lines or the subset of table lines defined by the conditions `FROM`, `TO` and `WHERE`. Starting from the first line of the table or subset for a forwards order or from the last line of the subset for a backwards order,

-   if the absolute value of `n` is equal to 1, every line is read,
-   if the absolute value of `n` is equal to 2, every second line is read,
-   and so on.

-   If the absolute value of `n` is greater than the lines available in the subset, only the first or last line of the subset are processed.
-   **Loop order**
-   The sign of `n` keeps or reverses the loop order as it is defined by the table category or the addition `USING KEY`:

-   If the value of `n` is greater than 0,the loop order is not changed. A forward loop is executed that starts with the first table line or the first line of the subset.
-   If the value of `n` is less than 0, the loop order is reversed. A backward loop is executed, that starts with the last table line or the last line of the subset.

-   Specifying a reverse loop order changes the standard order as follows:

-   A reverse loop order without specifying a secondary key behind `USING KEY` reverses the loop order defined by the table category. For index tables, the primary table index is processed backwards starting with the highest index entry in descending order and the corresponding table lines are read. For hashed tables, the table lines are read backward in the reverse order in which they were inserted into the table or are sorted after a [`SORT`](ABAPSORT_ITAB.html) statement.
-   A reverse loop order together with a secondary key specified behind `USING KEY` reverses the loop order defined by the secondary key. For a sorted secondary key, the corresponding secondary index is processed backwards starting with the highest index entry in descending order and the corresponding table lines are read. For a secondary hashed key, the table lines are read backward in the reverse order in which they were inserted into the table (a preceding sort using [`SORT`](ABAPSORT_ITAB.html) has no effect here).

-   The addition `STEP` does not change the actual sort order of the table as defined by table category or for a secondary index. It changes the processing order of the current loop with respect to this sort order.
-   The control structures for [group level processing](ABENGROUP_LEVEL_PROCESSING_GLOSRY.html)\\ [`AT FIRST`, `AT LAST`, `AT NEW`, and `AT END OF`](ABAPAT_ITAB.html) are not supported with `STEP`.
-   `STEP n` can, however, be positioned otherwise. Its use after `FROM idx1` and `TO idx2` is recommended.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(t) = cl\_demo\_date\_time=>get\_utc\_time( ). \\nFINAL(rnd) = cl\_abap\_random\_int=>create( seed = CONV i( t ) \\n min = 1 \\n max = 100 ). \\n\\ \\nDATA itab TYPE STANDARD TABLE OF i WITH EMPTY KEY \\n WITH NON-UNIQUE SORTED KEY key COMPONENTS table\_line. \\nitab = VALUE #( FOR i = 1 UNTIL i > 10 ( rnd->get\_next( ) ) ). \\n\\ \\nDATA output1 TYPE TABLE OF i WITH EMPTY KEY. \\nLOOP AT itab INTO FINAL(number1). \\n output1 = VALUE #( BASE output1 ( number1 ) ). \\nENDLOOP. \\nout->write( output1 ). \\n\\ \\nDATA output2 TYPE TABLE OF i WITH EMPTY KEY. \\nLOOP AT itab INTO FINAL(number2) USING KEY key. \\n output2 = VALUE #( BASE output2 ( number2 ) ). \\nENDLOOP. \\nout->write( output2 ). \\n\\ \\nout->display( ). DATA itab TYPE SORTED TABLE OF scarr \\n WITH UNIQUE KEY carrid. \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @itab. \\n\\ \\nFINAL(idx) = line\_index( itab\[ carrid = 'LH' \] ). \\nIF idx = 0. \\n RETURN. \\nENDIF. \\n\\ \\nLOOP AT itab FROM idx ASSIGNING FIELD-SYMBOL(). \\n ... \\nENDLOOP. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM scarr \\n ORDER BY carrid \\n INTO TABLE @FINAL(itab). \\n\\ \\nLOOP AT itab ASSIGNING FIELD-SYMBOL() \\n FROM 3 TO 1 STEP -1. \\n out->write( ). \\nENDLOOP. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab.html