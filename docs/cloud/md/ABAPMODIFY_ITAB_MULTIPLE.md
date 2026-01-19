---
title: "ABAPMODIFY_ITAB_MULTIPLE"
description: |
  ABAPMODIFY_ITAB_MULTIPLE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMODIFY_ITAB_MULTIPLE.htm"
abapFile: "ABAPMODIFY_ITAB_MULTIPLE.html"
keywords: ["select", "insert", "loop", "do", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "ABAPMODIFY", "ITAB", "MULTIPLE"]
---

``... itab FROM wa [USING KEY [`keyname`](ABENKEYNAME.html)]\           TRANSPORTING [`comp1`](ABENITAB_COMPONENTS.html)\ [`comp2`](ABENITAB_COMPONENTS.html) ... WHERE [`log_exp`](ABENLOGEXP.html)|(cond_syntax).``

[1. `... WHERE log_exp`](#ABAP_ADDITION_1@3@)

[2. `... USING KEY keyname`](#ABAP_ADDITION_2@3@)

[3. `... WHERE (cond_syntax)`](#ABAP_ADDITION_3@3@)

In this variant, the statement `MODIFY` assigns the content of the components `comp1 comp2 ...` of the work area `wa` specified after `TRANSPORTING` to all lines of the table `itab` that meet the condition after `WHERE`. `wa` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html). The work area `wa` must be [compatible](ABENCOMPATIBLE_GLOSRY.html) with the line type of the internal table.

The addition `TRANSPORTING` has the same effect as [changing individual lines](ABAPMODIFY_ITAB_SINGLE.html). The addition `WHERE` can only be specified together with the addition `TRANSPORTING`.

Static `WHERE` condition. All lines are modified for which the condition after `WHERE` is met. If a static `WHERE` condition is specified, the line type of the internal table must be known statically. `WHERE` can be specified for all table categories.

A [logical expression](ABENLOGICAL_EXPRESSION_GLOSRY.html)\\ [`log_exp`](ABENLOGEXP.html) can be specified after `WHERE`, in which the first operand of each [relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html) is a [component](ABENITAB_COMPONENTS.html) of the internal table. The following can be specified as relational expressions:

No other [predicates](ABENPREDICATE.html) can be specified. The components of the internal table must be specified as individual operands and not as part of an expression. Parenthesized character-like data objects cannot be used to specify a component dynamically here. The remaining operands of a relational expression are [general expression positions](ABENGENERAL_EXPRESSION_POSITIONS.html) at which any [suitable](ABENLOGEXP_RULES.html) individual operands or [expressions](ABENEXPRESSION_GLOSRY.html) can be specified, but no components of the internal table. The specified components can have any data type. The corresponding [comparison rules](ABENLOGEXP_RULES.html) apply to the evaluation, whereby a different [rule](ABENLOGEXP_RULES_EXPR_CHAR.html) applies to a string expression on the right side than to general logical expressions.

The evaluation of the `WHERE` condition depends on the [table category](ABENTABLE_CATEGORY_GLOSRY.html) and the [table key](ABENTABLE_KEY_GLOSRY.html) used as follows:

In the column `col2` of the internal table `itab`, the `MODIFY` statement replaces every negative value with the number 0.

The addition `USING KEY` can be used to specify a table key in [`keyname`](ABENKEYNAME.html) with which the processing is executed. The specified table key affects the order in which the table lines are accessed, and the evaluation of the remaining conditions.

If the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is specified, the processing behaves in the same way as if no key were explicitly specified. If a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) is specified, the order in which the lines are accessed is as follows:

In the internal table `itab`, the `MODIFY` statement replaces the value in the column `col1` with *\_* if the column `col2` contains the value 0. The `WHERE` condition is evaluated in an optimized way using the secondary key `mkey`.

Dynamic `WHERE` condition. For `cond_syntax` any character-like data object or [standard table](ABENSTANDARD_TABLE_GLOSRY.html) with character-like line type can be specified that, when the statement is executed and with the following exceptions, contains the syntax of a logical expression in accordance with the rules of the static `WHERE` condition or is initial. The following are not supported in a dynamic `WHERE` condition:

The syntax in `cond_syntax` is not case-sensitive as in the static syntax. When an internal table is specified, the syntax can be distributed across multiple lines. If `cond_syntax` is initial when the statement is executed, the logical expression is true. Invalid logical expressions raise an exception from the class `CX_SY_ITAB_DYN_LOOP`.

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

The dynamic `WHERE` condition is not evaluated for an empty table for optimization reasons. Therefore, if an internal table is empty, and a logical expression has errors, no exception is raised.

Like the example for static `WHERE` conditions, but with a condition for the column `col2` that can be entered dynamically.

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

-   **Specification of a [sorted key](ABENSORTED_KEY_GLOSRY.html)**
-   The lines are processed by ascending line number in the [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html)
-   **Specification of a [hash key](ABENHASH_KEY_GLOSRY.html)**
-   The lines are processed in the order in which they were inserted into the table.

-   Unlike the processing of a hashed table when a primary key is used, a preceding sort using the statement `SORT` has no effect on the processing order when a secondary hash key is specified.
-   If a secondary table key is specified, any `WHERE` condition must be [optimizable](ABENITAB_WHERE_OPTIMIZATION.html). Otherwise a syntax error occurs, or an exception is raised.

-   [String expressions](ABENSTRING_EXPRESSION_GLOSRY.html) and [bit expressions](ABENBIT_EXPRESSION_GLOSRY.html)
-   [String functions](ABENSTRING_FUNCTION_GLOSRY.html)
-   [Time stamp functions](ABENTIMESTAMP_FUNCTION_GLOSRY.html) with the exception of `utclong_current`
-   [Constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html)
-   [Table expressions](ABENTABLE_EXPRESSION_GLOSRY.html)

TYPES: \\n BEGIN OF line, \\n col1 TYPE c LENGTH 1, \\n col2 TYPE i, \\n END OF line. \\n\\ \\nDATA itab TYPE SORTED TABLE OF line \\n WITH UNIQUE KEY col1. \\n\\ \\nFINAL(t) = cl\_demo\_date\_time=>get\_utc\_time( ). \\nFINAL(rnd) = cl\_abap\_random\_int=>create( seed = CONV i( t ) \\n min = 1 \\n max = 20 ). \\n\\ \\nFINAL(abcde) = \`abcdefghijklmnopqrstuvwxyz\`. \\nitab = VALUE #( FOR i = 1 UNTIL i > 26 \\n ( col1 = substring( val = abcde \\n off = i - 1 \\n len = 1 ) \\n col2 = rnd->get\_next( ) - 10 ) ). \\n\\ \\nMODIFY itab FROM VALUE line( col2 = 0 ) TRANSPORTING col2 \\n WHERE col2 < 0. TYPES: \\n BEGIN OF line, \\n col1 TYPE c LENGTH 1, \\n col2 TYPE i, \\n END OF line. \\n\\ \\nDATA itab TYPE TABLE OF line \\n WITH EMPTY KEY \\n WITH NON-UNIQUE SORTED KEY mkey COMPONENTS col2. \\n\\ \\nFINAL(t) = cl\_demo\_date\_time=>get\_utc\_time( ). \\nFINAL(rnd) = cl\_abap\_random\_int=>create( seed = CONV i( t ) \\n min = 1 \\n max = 10 ). \\n\\ \\nFINAL(abcde) = \`abcdefghijklmnopqrstuvwxyz\`. \\nitab = VALUE #( FOR i = 1 UNTIL i > 26 \\n ( col1 = substring( val = abcde \\n off = i - 1 \\n len = 1 ) \\n col2 = rnd->get\_next( ) - 5 ) ). \\n\\ \\nMODIFY itab FROM VALUE line( col1 = '\_' ) USING KEY mkey \\n TRANSPORTING col1 WHERE col2 = 0. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA condition TYPE string VALUE '< 0'. \\ncl\_demo\_input=>request( CHANGING field = condition ). \\ncondition = \`col2 \` && condition. \\n\\ \\nTYPES: \\n BEGIN OF line, \\n col1 TYPE c LENGTH 1, \\n col2 TYPE i, \\n END OF line. \\n\\ \\nDATA itab TYPE SORTED TABLE OF line \\n WITH UNIQUE KEY col1. \\n\\ \\nFINAL(t) = cl\_demo\_date\_time=>get\_utc\_time( ). \\nFINAL(rnd) = cl\_abap\_random\_int=>create( seed = CONV i( t ) \\n min = 1 \\n max = 20 ). \\n\\ \\nFINAL(abcde) = \`abcdefghijklmnopqrstuvwxyz\`. \\nitab = VALUE #( FOR i = 1 UNTIL i > 26 \\n ( col1 = substring( val = abcde \\n off = i - 1 \\n len = 1 ) \\n col2 = rnd->get\_next( ) - 10 ) ). \\nTRY. \\n MODIFY itab FROM VALUE line( col2 = 0 ) TRANSPORTING col2 \\n WHERE (condition). \\n out->write( itab ). \\n CATCH cx\_sy\_itab\_dyn\_loop INTO FINAL(exc). \\n ... \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapmodify\_itab.html