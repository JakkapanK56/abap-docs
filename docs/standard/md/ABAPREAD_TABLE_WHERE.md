---
title: "For a better understanding, the following tables show the relations between the index an line values in different sort orders"
description: |
  -   `COMPARING`(ABAPREAD_TABLE_TRANSPORT_OPTIONS.html) -   `TRANSPORTING comp1 comp2 ...ALL FIELDS`(ABAPREAD_TABLE_TRANSPORT_OPTIONS.html) -   When a `WHERE` condition is used, `sy-subrc` can have the values 0 and 4 only. -   The statement -   `READ TABLE itab ... USING KEY ... WHERE
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_TABLE_WHERE.htm"
abapFile: "ABAPREAD_TABLE_WHERE.html"
keywords: ["select", "loop", "do", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "ABAPREAD", "TABLE", "WHERE"]
---

[Short Reference](ABAPREAD_TABLE_ITAB_SHORTREF.html)

``... [USING KEY [`keyname`](ABENKEYNAME.html)] WHERE [`log_exp`](ABENLOGEXP.html)|(cond_syntax) ...``

[1. `... WHERE log_exp`](#ABAP_VARIANT_1@1@)

[2. `... WHERE (cond_syntax)`](#ABAP_VARIANT_2@1@)

[`... USING KEY keyname`](#ABAP_ONE_ADD@1@)

Static or dynamic `WHERE` condition. The internal table is searched for the first line whose values match the `WHERE` condition.

A `WHERE` condition cannot be used together with the following transport options:

**Note** The transport option [*TRANSPORTING NO FIELDS*](ABAPREAD_TABLE_TRANSPORT_OPTIONS.html) can be used together with a *WHERE* condition.

The following `READ` statement determines the first line of an internal table where the flight time exceeds a given value.

Static `WHERE` condition. The first line is searched for which the condition after `WHERE` is met. If a static `WHERE` condition is specified, the line type of the internal table must be known statically. `WHERE` can be specified for all table categories.

A [logical expression](ABENLOGICAL_EXPRESSION_GLOSRY.html)\\ [`log_exp`](ABENLOGEXP.html) can be specified after `WHERE`, in which the first operand of each [relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html) is a [component](ABENITAB_COMPONENTS.html) of the internal table. The following can be specified as relational expressions:

No other [predicates](ABENPREDICATE.html) can be specified. The components of the internal table must be specified as individual operands and not as part of an expression. Parenthesized character-like data objects cannot be used to specify a component dynamically here. The remaining operands of a relational expression are [general expression positions](ABENGENERAL_EXPRESSION_POSITIONS.html) at which any [suitable](ABENLOGEXP_RULES.html) individual operands or [expressions](ABENEXPRESSION_GLOSRY.html) can be specified, but no components of the internal table. The specified components can have any data type. The corresponding [comparison rules](ABENLOGEXP_RULES.html) apply to the evaluation, whereby a different [rule](ABENLOGEXP_RULES_EXPR_CHAR.html) applies to a string expression on the right side than to general logical expressions.

The evaluation of the `WHERE` condition depends on the [table category](ABENTABLE_CATEGORY_GLOSRY.html) and the [table key](ABENTABLE_KEY_GLOSRY.html) used as follows:

The following example demonstrates the differences in behavior of a `WHERE` condition and a key access with `WITH TABLE KEY`. In `READ WHERE`, the rule for the [comparison of character-like data types](ABENLOGEXP_CHARACTER.html) applies. The short column content *AA* is first padded with blanks to increase the length to 4 and then compared with *AAXX*. No matching line is found. Using `READ TABLE itab WITH TABLE KEY`, the content of `text_long` is [converted](ABENCONVERSION_TYPE_C.html) to the value *AA* before the comparison, by cutting off two characters, and then compared with the column content. The read is therefore successful.

For a comparison between `WHERE` and `WITH KEY`, refer to [itab - `READ WHERE` Versus `WITH KEY`](ABENREAD_ITAB_WHERE_KEY_ABEXA.html).

Dynamic `WHERE` condition. For `cond_syntax` any character-like data object or [standard table](ABENSTANDARD_TABLE_GLOSRY.html) with character-like line type can be specified that, when the statement is executed and with the following exceptions, contains the syntax of a logical expression in accordance with the rules of the static `WHERE` condition or is initial. The following are not supported in a dynamic `WHERE` condition:

The syntax in `cond_syntax` is not case-sensitive as in the static syntax. When an internal table is specified, the syntax can be distributed across multiple lines. If `cond_syntax` is initial when the statement is executed, the logical expression is true. Invalid logical expressions raise an exception from the class `CX_SY_ITAB_DYN_LOOP`.

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

The dynamic `WHERE` condition is not evaluated for an empty table for optimization reasons. Therefore, if an internal table is empty, and a logical expression has errors, no exception is raised.

The following example allows entering freely a `WHERE` condition. The first line of an internal table that matches the condition is displayed.

The addition `USING KEY` can be used to specify a table key in [`keyname`](ABENKEYNAME.html) with which the search is executed. The specified table key affects the evaluation of the `WHERE` condition as described above and the table index to which the system field `sy-tabix` is related.

Furthermore, the table key affects the order in which the table lines are accessed in the same way as for [`LOOP AT itab`](ABAPLOOP_AT_ITAB_COND.html) and thus can affect which line is found first.

The first two `READ` statements return different values for `sy-tabix` for the same `WHERE` condition. The first statement uses the primary table key and thus the primary table index. It finds the second line with the value *9* of the internal table. The second statement uses a sorted secondary table key and its secondary table index. It finds the fourth line according to that index with the value *8* which is the fifth line according to the primary index, as shown in the third `READ` statement.

For a better understanding, the following tables show the relations between the index an line values in different sort orders

-   [`COMPARING`](ABAPREAD_TABLE_TRANSPORT_OPTIONS.html)
-   [`TRANSPORTING \{comp1 comp2 ...\}|\{ALL FIELDS\}`](ABAPREAD_TABLE_TRANSPORT_OPTIONS.html)

-   When a `WHERE` condition is used, `sy-subrc` can have the values 0 and 4 only.
-   The statement
-   `READ TABLE itab ... [USING KEY ...] WHERE log_exp|(cond_syntax).`
-   works almost exactly in the same way as
-   `[LOOP AT itab](ABAPLOOP_AT_ITAB.html) ... [[USING KEY ...] WHERE log_exp|(cond_syntax)](ABAPLOOP_AT_ITAB_COND.html). [EXIT](ABAPEXIT_LOOP.html). [ENDLOOP](ABAPENDLOOP.html).`
-   There is a difference between the above `LOOP` pattern and the `READ` statement regarding `sy-tabix`:

-   If a table key connected to a table index is used, `sy-tabix` is set to the current line in that index and to *0* for a hash key behind the `LOOP` statement but not behind the `ENDLOOP` statement. If the line number is needed after the loop, a helper variable must be used.
-   After `READ`, `sy-tabix` is set to the line number in an table index or *0* for a hash key if a line is found.

-   **Note** There is no performance gain in using `READ WHERE` versus `LOOP WHERE`. `READ WHERE` simply provides an easier to use syntax.

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
-   For a `WHERE` condition that could also be expressed by [`WITH KEY`](ABAPREAD_TABLE_FREE.html), the latter has a better performance. If such a `WHERE` condition is used, a syntax warning occurs that can be suppressed by the [pragma](ABENPRAGMA_GLOSRY.html)\\ `##read_where_ok`.

-   [String expressions](ABENSTRING_EXPRESSION_GLOSRY.html) and [bit expressions](ABENBIT_EXPRESSION_GLOSRY.html)
-   [String functions](ABENSTRING_FUNCTION_GLOSRY.html)
-   [Time stamp functions](ABENTIMESTAMP_FUNCTION_GLOSRY.html) with the exception of `utclong_current`
-   [Constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html)
-   [Table expressions](ABENTABLE_EXPRESSION_GLOSRY.html)

DATA itab TYPE SORTED TABLE OF spfli \\n WITH UNIQUE KEY fltime carrid connid. \\n\\ \\nSELECT \* \\n FROM spfli \\n ORDER BY fltime, carrid, connid \\n INTO TABLE @itab. \\n\\ \\nREAD TABLE itab \\n TRANSPORTING NO FIELDS \\n WHERE fltime > 600. \\n\\ \\nIF sy-subrc = 0. \\n FINAL(idx) = sy-tabix. \\nENDIF. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA text\_short TYPE c LENGTH 2. \\nDATA text\_long TYPE c LENGTH 4. \\n\\ \\nDATA itab LIKE TABLE OF text\_short WITH NON-UNIQUE KEY table\_line. \\n\\ \\ntext\_short = 'AA'. \\ntext\_long = 'AAXX'. \\n\\ \\nitab = VALUE #( ( text\_short ) ). \\n\\ \\nREAD TABLE itab INTO text\_short \\n WHERE table\_line = text\_long ##READ\_WHERE\_OK. \\nout->write( |READ WHERE: \\{ sy-subrc \\}| ). \\n\\ \\nREAD TABLE itab INTO text\_short \\n WITH TABLE KEY table\_line = text\_long. \\nout->write( |READ WITH TABLE KEY: \\{ sy-subrc \\}| \\n )->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(where\_cond) = \`url NS '.com'\`. \\ncl\_demo\_input=>request( CHANGING field = where\_cond ). \\n\\ \\nSELECT \* \\n FROM scarr \\n ORDER BY PRIMARY KEY \\n INTO TABLE @FINAL(itab). \\n\\ \\nTRY. \\n READ TABLE itab INTO DATA(wa) \\n WHERE (where\_cond). \\n FINAL(idx) = sy-tabix. \\n CATCH cx\_sy\_itab\_dyn\_loop INTO FINAL(exc). \\n out->display( exc->get\_text( ) ). \\n RETURN. \\nENDTRY. \\n\\ \\nout->write( itab ). \\n\\ \\nIF sy-subrc = 0. \\n out->write( idx )->display( wa ). \\nELSE. \\n out->display( 'Not found' ). \\nENDIF. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA itab TYPE TABLE OF i \\n WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line. \\n\\ \\nitab = VALUE #( ( 3 ) ( 9 ) ( 1 ) ( 6 ) ( 8 ) ). \\n\\ \\nREAD TABLE itab \\n ASSIGNING FIELD-SYMBOL() \\n WHERE table\_line > 6 ##PRIMKEY\[SKEY\]. \\nFINAL(idx1) = sy-tabix. \\nout->write( |\\{ idx1 \\}: \\{ \\}| ). \\n\\ \\nREAD TABLE itab \\n ASSIGNING FIELD-SYMBOL() \\n USING KEY skey \\n WHERE table\_line > 6. \\nFINAL(idx2) = sy-tabix. \\nout->write( |\\{ idx2 \\}: \\{ \\}| ). \\n\\ \\nREAD TABLE itab \\n ASSIGNING FIELD-SYMBOL() \\n WHERE table\_line = 8 ##PRIMKEY\[SKEY\] ##READ\_WHERE\_OK. \\nFINAL(idx3) = sy-tabix. \\nout->write( |\\{ idx3 \\}: \\{ \\}| )->display( ). **Primary Index** **Secondary Index** **Table Line**\\ *1* *2* *3*\\ *2* *5* *9*\\ *3* *1* *1*\\ *4* *3* *6*\\ *5* *4* *8* **Primary Index** **Secondary Index** **Table Line**\\ *3* *1* *1*\\ *1* *2* *3*\\ *4* *3* *6*\\ *5* *4* *8*\\ *2* *5* *9* abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapread\_table.html