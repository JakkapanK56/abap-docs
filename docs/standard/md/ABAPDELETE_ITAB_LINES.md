---
title: "ABAPDELETE_ITAB_LINES"
description: |
  ABAPDELETE_ITAB_LINES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDELETE_ITAB_LINES.htm"
abapFile: "ABAPDELETE_ITAB_LINES.html"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "ABAPDELETE", "ITAB", "LINES"]
---

[Short Reference](ABAPDELETE_ITAB_SHORTREF.html)

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

Static `WHERE` condition. All lines are deleted for which the condition after `WHERE` is met. If a static `WHERE` condition is specified, the line type of the internal table must be known statically. `WHERE` can be specified for all table categories.

A [logical expression](ABENLOGICAL_EXPRESSION_GLOSRY.html)\\ [`log_exp`](ABENLOGEXP.html) can be specified after `WHERE`, in which the first operand of each [relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html) is a [component](ABENITAB_COMPONENTS.html) of the internal table. The following can be specified as relational expressions:

No other [predicates](ABENPREDICATE.html) can be specified. The components of the internal table must be specified as individual operands and not as part of an expression. Parenthesized character-like data objects cannot be used to specify a component dynamically here. The remaining operands of a relational expression are [general expression positions](ABENGENERAL_EXPRESSION_POSITIONS.html) at which any [suitable](ABENLOGEXP_RULES.html) individual operands or [expressions](ABENEXPRESSION_GLOSRY.html) can be specified, but no components of the internal table. The specified components can have any data type. The corresponding [comparison rules](ABENLOGEXP_RULES.html) apply to the evaluation, whereby a different [rule](ABENLOGEXP_RULES_EXPR_CHAR.html) applies to a string expression on the right side than to general logical expressions.

The evaluation of the `WHERE` condition depends on the [table category](ABENTABLE_CATEGORY_GLOSRY.html) and the [table key](ABENTABLE_KEY_GLOSRY.html) used as follows:

Optimized deletion of a line by specifying the unique primary table key and multiple lines by specifying a non-unique secondary table key in two `DELETE` statements.

[Deleting Lines Using `WHERE`](ABENDELETE_ITAB_USING_KEY_ABEXA.html)

Dynamic `WHERE` condition. For `cond_syntax` any character-like data object or [standard table](ABENSTANDARD_TABLE_GLOSRY.html) with character-like line type can be specified that, when the statement is executed and with the following exceptions, contains the syntax of a logical expression in accordance with the rules of the static `WHERE` condition or is initial. The following are not supported in a dynamic `WHERE` condition:

The syntax in `cond_syntax` is not case-sensitive as in the static syntax. When an internal table is specified, the syntax can be distributed across multiple lines. If `cond_syntax` is initial when the statement is executed, the logical expression is true. Invalid logical expressions raise an exception from the class `CX_SY_ITAB_DYN_LOOP`.

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

The dynamic `WHERE` condition is not evaluated for an empty table for optimization reasons. Therefore, if an internal table is empty, and a logical expression has errors, no exception is raised.

Deletion of the lines of an internal table using a condition that can be entered for the table lines.

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

-   *Cause:* Illegal step size for the statement.
    *Runtime error:*\\ `ITAB_ILLEGAL_STEP_SIZE`
-   *Cause:* The statement only supports integral data objects.
    *Runtime error:*\\ `OBJECTS_NOT_INTEGRAL`

-   All [comparison expressions](ABENLOGEXP_COMP.html)
-   The following [predicate expressions](ABENPREDICATE_EXPRESSION_GLOSRY.html):

-   [`IS [NOT] INITIAL`](ABENLOGEXP_INITIAL.html)
-   [`IS [NOT] BOUND`](ABENLOGEXP_BOUND.html)
-   [`IS [NOT] INSTANCE OF`](ABENLOGEXP_INSTANCE_OF.html)

-   When [standard tables](ABENSTANDARD_TABLE_GLOSRY.html) are accessed without a secondary key specification, the search is not optimized. This means that the logical expression of the `WHERE` addition is applied to each line of the internal table that is relevant for the current statement.
-   When using a [sorted key](ABENSORTED_KEY_GLOSRY.html) or a [hash key](ABENHASH_KEY_GLOSRY.html), that is, when accessing a [sorted table](ABENSORTED_TABLE_GLOSRY.html), a [hashed table](ABENHASHED_TABLE_GLOSRY.html), or a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html), the compiler tries to optimize the search as described under [Optimization of the `WHERE` Condition](ABENITAB_WHERE_OPTIMIZATION.html). The prerequisites are:

-   The entire logical expression or a part of it can be transformed into a key access.
-   The transformable part of the logical expression has the same result as the resulting key access.

-   If an optimization is not possible, the behavior is as follows:

-   If a sorted table or a hashed table is accessed using the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html), the full `WHERE` condition is applied to each line of the table that is relevant for the current statement.
-   If the table is accessed using a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html), a syntax error or an exception is raised.

-   When using a `WHERE` condition, it should be noted that the [comparison rules](ABENLOGEXP_RULES.html) for incompatible data types apply when comparing incompatible data objects. Here, the data types involved determine which operand is converted. If the additions [`WITH TABLE KEY`](ABAPREAD_TABLE_KEY.html) and [`WITH KEY`](ABAPREAD_TABLE_FREE.html) of the statement `READ` are used or if the corresponding [keys are specified](ABENTABLE_EXP_ITAB_LINE.html) in [table expressions](ABENTABLE_EXPRESSIONS.html), however, the content of the specified data objects is always converted to the data type of the columns before the comparison, which can produce varying results.
-   The difference between comparison rules in a `WHERE` condition and conversion rules when reading individual lines is particularly significant for [enumerated types](ABENENUM_TYPE_GLOSRY.html) for which the comparison rules are more restrictive than conversion rules. [Conversions](ABENCONVERSION_ENUMERATED.html) of an enumerated object to a character-like type produce a message from the extended program check.
-   If possible, all operands of the logical expression should be in [compatible](ABENCOMPATIBLE_GLOSRY.html) pairs, so that the [`WHERE` condition can be optimized](ABENITAB_WHERE_OPTIMIZATION.html).
-   If a comparison expression with a [ranges table](ABENRANGES_TABLE_GLOSRY.html) is specified after [`IN`](ABENLOGEXP_SELECT_OPTION.html) as a logical expression, the expression for the initial table is always true and then all lines are found.
-   [Optimizations of the `WHERE` condition](ABENITAB_WHERE_OPTIMIZATION.html) affect searches for the lines to delete but do not affect, for example, updates of the primary index of a standard table.

-   [String expressions](ABENSTRING_EXPRESSION_GLOSRY.html) and [bit expressions](ABENBIT_EXPRESSION_GLOSRY.html)
-   [String functions](ABENSTRING_FUNCTION_GLOSRY.html)
-   [Time stamp functions](ABENTIMESTAMP_FUNCTION_GLOSRY.html) with the exception of `utclong_current`
-   [Constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html)
-   [Table expressions](ABENTABLE_EXPRESSION_GLOSRY.html)

DATA itab TYPE TABLE OF i WITH EMPTY KEY \\n WITH UNIQUE SORTED KEY skey COMPONENTS table\_line. \\n\\ \\nitab = VALUE #( ( 6 ) ( 5 ) ( 4 ) ( 3 ) ( 2 ) ( 1 ) ). \\n\\ \\nDELETE itab USING KEY skey FROM 4. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: carrid TYPE sflight-carrid VALUE 'LH', \\n connid TYPE sflight-connid VALUE '0400'. \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = carrid \\n )->add\_field( CHANGING field = connid )->request( ). \\n\\ \\nDATA: BEGIN OF seats, \\n fldate TYPE sflight-fldate, \\n seatsocc TYPE sflight-seatsocc, \\n seatsmax TYPE sflight-seatsmax, \\n seatsfree TYPE sflight-seatsocc, \\n END OF seats. \\n\\ \\nDATA seats\_tab LIKE STANDARD TABLE OF seats. \\n\\ \\nSELECT fldate, seatsocc, seatsmax, seatsmax - seatsocc AS seatsfree \\n FROM sflight \\n WHERE carrid = @carrid AND \\n connid = @connid \\n INTO TABLE @seats\_tab. \\n\\ \\nSORT seats\_tab BY seatsfree DESCENDING. \\nDELETE seats\_tab FROM 4. \\n\\ \\nout->write( seats\_tab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM spfli \\n ORDER BY carrid \\n INTO TABLE @DATA(itab). \\n\\ \\nDELETE itab FROM 1 TO 8 STEP 2. \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). DATA spfli\_tab TYPE SORTED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid \\n WITH NON-UNIQUE SORTED KEY skey COMPONENTS cityfrom cityto. \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @spfli\_tab. \\n\\ \\nDELETE spfli\_tab WHERE carrid = 'LH' AND \\n connid = '0400'. \\n\\ \\nDELETE spfli\_tab USING KEY skey WHERE cityfrom = 'FRANKFURT' AND \\n cityto = 'NEW YORK'. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA condition TYPE string VALUE '<= 0'. \\ncl\_demo\_input=>request( CHANGING field = condition ). \\ncondition = \`table\_line \` && condition. \\n\\ \\nDATA itab TYPE TABLE OF i WITH EMPTY KEY \\n WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line. \\n\\ \\nFINAL(t) = CONV i( cl\_demo\_date\_time=>get\_utc\_time( ) ). \\nFINAL(rnd) = cl\_abap\_random\_int=>create( seed = t \\n min = 1 \\n max = 20 ). \\n\\ \\nitab = VALUE #( FOR i = 1 UNTIL i > 100 \\n ( rnd->get\_next( ) - 10 ) ). \\nTRY. \\n DELETE itab USING KEY skey WHERE (condition). \\n out->write( itab ). \\n CATCH cx\_sy\_itab\_dyn\_loop INTO FINAL(exc). \\n ... \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapdelete\_itab.html