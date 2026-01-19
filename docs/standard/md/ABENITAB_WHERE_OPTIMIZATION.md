---
title: "ABENITAB_WHERE_OPTIMIZATION"
description: |
  ABENITAB_WHERE_OPTIMIZATION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENITAB_WHERE_OPTIMIZATION.htm"
abapFile: "ABENITAB_WHERE_OPTIMIZATION.html"
keywords: ["select", "update", "delete", "loop", "do", "while", "if", "case", "try", "catch", "data", "types", "internal-table", "ABENITAB", "WHERE", "OPTIMIZATION"]
---

Using the statements [`LOOP AT`](ABAPLOOP_AT_ITAB.html), [`READ TABLE`](ABAPREAD_TABLE.html), [`DELETE`](ABAPDELETE_ITAB.html), and [`MODIFY`](ABAPMODIFY_ITAB.html) a `WHERE` condition can be specified to select specific lines of the internal table. While the search across a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) is always linear and cannot be optimized when using the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html), the compiler tries to optimize the search when the statement is processed by using a [sorted key](ABENSORTED_KEY_GLOSRY.html) or a [hash key](ABENHASH_KEY_GLOSRY.html). This is the case, when

For the optimization, the compiler tries to transform the [relational expressions](ABENRELATIONAL_EXPRESSION_GLOSRY.html) of the given `WHERE` condition into an equivalent `WHERE` condition that starts with comparisons between key fields and values combined by `AND`. These key/value pairs are then used as a key specification for an optimized key access (binary search or hash algorithm as in the statement [`READ TABLE`](ABAPREAD_TABLE.html) or a [table expression](ABENTABLE_EXPRESSIONS.html)), to find one or more lines. The found line or lines are then further checked using the remaining relational expressions from the `WHERE` condition that could not be extracted as key/value pairs.

Prerequisites for the optimization are therefore:

If there are no or insufficient relational expressions to meet both of these prerequisites, no optimization is possible and the behavior is as follows:

The following sections describe when an access can be optimized.

In the case of a [hash key](ABENHASH_KEY_GLOSRY.html) access, it must be possible to transform the `WHERE` condition fully or partly to a set of comparisons on equality combined by `AND` that cover all components of the key. The operands must meet the prerequisites described below.

The operands of these relational expressions are then used as the key/value pairs for the key access. The remainder of the logical expression can contain any number of relational expressions combined using `AND`. Key components may be used in the relational expressions not used for the key access but not for comparisons on equality.

Comparisons specified by the tabular comparison operator [`IN range_tab`](ABENLOGEXP_SELECT_OPTION.html) are ignored by the optimization. They are never part of the key access but are always applied to the lines found by the key access.

In the following example:

In the case of a [sorted key](ABENSORTED_KEY_GLOSRY.html) access, it must be possible to transform the `WHERE` condition fully or a partly to a set of comparisons with any [binary comparison operators](ABENLOGEXP_ANY_OPERAND.html) or with [`BETWEEN`](ABENLOGEXP_BETWEEN.html) combined by `AND` that cover an initial section of the key consisting of at least one component. The operands must meet the prerequisites described below.

The operands of these relational expressions are then used as the key/value pairs for the key access. The remainder of the logical expression can contain any number of relational expressions combined using `AND`. Key components may be used in the relational expressions not used for the key access but not for comparisons on equality. Nevertheless, the duplicate use of key fields in comparisons leads to a syntax warning.

The access to the internal table is partially sequential. For a forward loop, the starting point for processing is determined by a binary search with the extracted key/value pairs for relations `=`, `>=`, `>`, and `BETWEEN` (first operand) that cover the table key completely or partially. From the starting point on, the table is only processed as long as subconditions for pairs with relations `=`, `<=`, `<`, and `BETWEEN` (second operand) remain fulfilled. For a backward loop (see [`STEP`](ABAPLOOP_AT_ITAB_COND.html)), the starting point is determined by pairs with relations `=`, `<=`, `<`, and `BETWEEN` (second operand) and the processing is stopped when subconditions for pairs with `=`, `>=`, `>`, and `BETWEEN` (first operand) are not fulfilled any more.

Comparisons specified by a tabular comparison operator [`IN range_tab`](ABENLOGEXP_SELECT_OPTION.html) appended with `AND` are ignored by the optimization. They are never part of the key access but always applied to the lines found by the key access.

In the following example:

In this example, the partially sequential access to the internal table is as follows:

The part of the logical expression that can be mapped to a key access must select the same lines as a statement [`READ TABLE`](ABAPREAD_TABLE.html) or a corresponding [table expression](ABENTABLE_EXPRESSIONS.html) that specifies the corresponding components as keys.

If this leads to different results, an optimization is not possible. Because of the complexity of the comparison rules, especially for [elementary data types](ABENLOGEXP_RULES_OPERANDS.html), it is not useful to set up a detailed set of rules when the comparison type exactly matches the data type of the left operand. Generally speaking,

For this reason, it is advisable to use only pairs of [compatible](ABENCOMPATIBLE_GLOSRY.html) operands in the `WHERE` condition. This guarantees that the differences in behavior of the `WHERE` condition and the specified key do not affect the result.

The following example is similar to the example in the section `WHERE log_exp` in [`LOOP AT itab`](ABAPLOOP_AT_ITAB_COND.html).

-   accessing a [sorted table](ABENSORTED_TABLE_GLOSRY.html) using its primary key,
-   accessing a [hashed table](ABENHASHED_TABLE_GLOSRY.html) using its primary key,
-   accessing a table of any table type using a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) specified by `USING KEY`.

-   The relational expressions of the `WHERE` condition can be transformed to sufficient key/value pairs.
-   The corresponding key access returns the same results as the evaluation of respective part of the logical expression would. This is guaranteed only for compatible data types, since in the case of incompatible data types:

-   The content of the specified data objects is converted to the data type of the columns before the evaluation in the case of key accesses.
-   The [comparison rules](ABENLOGEXP_RULES.html) for incompatible data types apply when evaluating a [comparison expression](ABENCOMPARISON_EXPRESSION_GLOSRY.html). Here, all the data types involved play a part in determining which operand is converted into which comparison type.

-   If a sorted table or a hashed table is accessed using the primary table key, all lines of the internal table are checked as in a standard table.
-   If the table is read using a secondary table key, that is, if said key is specified after `USING KEY`, a syntax error or syntax check warning, or an exception is raised. Access using a secondary table key must always be executed in an optimized way.

-   By specifying a key with `USING KEY`, it can be checked, whether an optimization is possible for a `WHERE` condition. The long texts of the syntax errors and warnings provide detailed information for dedicated situations.
-   If the lines selected using `WHERE` are modified or deleted using [`MODIFY`](ABAPMODIFY_ITAB.html) or [`DELETE`](ABAPDELETE_ITAB.html) and not just read using [`LOOP AT`](ABAPLOOP_AT_ITAB.html), further update costs are incurred in addition to the search for the lines. When deleting lines from standard tables, it should be noted that searches using a secondary key optimize the selection of lines to be deleted, but not the update required for the primary key, which is usually performed using a linear search.

-   The first `WHERE` condition can be optimized. It is already written in an optimized form, where the three key fields are compared for equality and combined by `AND`. A comparison for a further column is also appended by `AND`.
-   The second `WHERE` condition can be optimized. The compiler can transform it to the first `WHERE` condition by removing the double negation with `NOT` and by replacing `IS INITIAL` with a comparison for equality.
-   The third `WHERE` condition can be optimized. The compiler can transform the comparisons combined by `OR` into comparisons combined by `AND` using De Morgan's Laws. Also the double negation with `NOT` for `IS INITIAL` is identified and removed.
-   The fourth `WHERE` condition cannot be optimized because a comparison for a further column is appended by `OR`.
-   The fifth `WHERE` condition cannot be optimized because there is a duplicate comparison for equality for a key field.

-   The first `WHERE` condition can be optimized. It is already written in an optimized form, where the three key fields are compared with different operators combined by `AND`. A comparison for a further column is also appended by `AND`.
-   The second `WHERE` condition can be optimized. It is already written in an optimized form, where the first two key fields are compared.
-   The third `WHERE` condition can be optimized. The first two key fields are extracted for the key access and the condition for the third key field is evaluated together with the additional condition on the resulting lines.
-   The fourth `WHERE` condition can be optimized. The compiler can use De Morgan's Laws to transform the condition to comparisons combined by `AND`.
-   The fifth `WHERE` condition can be optimized because it uses `BETWEEN` for the first key field.
-   The sixth `WHERE` condition cannot be optimized because the additional condition is combined by `OR`.
-   The seventh `WHERE` condition cannot be optimized because a key field is used two times in comparisons on equality.
-   The eighth `WHERE` condition can be optimized but produces a syntax warning, suppressed by a pragma here, because a field is used twice.

-   The first loop is a forward loop.

-   The starting point is determined by key/value pairs of relations `a =0`, `b >= 0`, `c > 2`.
-   The table is processed as long as subconditions for the pairs `a = 0`, `b < 5` are fulfilled.

-   The second loop is a backward loop.

-   The starting point is determined by the pairs `a <= 1`, `b < 5`.
-   The table is processed as long as subconditions for the pairs `a >= -1`, `b >= 0`, `c > 2` are fulfilled.

-   The third loop is a forward loop and the fourth loop is a backward loop. Since for both loops there is no relation for key field `a`:

-   No starting point can be determined.
-   No subconditions can be determined.

-   An optimization is not possible

-   In the `WHERE` condition, the [comparison rules](ABENLOGEXP_RULES.html) for incompatible data types apply when comparing incompatible data objects, where it depends on the data types involved which operand is converted to which comparison type.
-   If the additions [`WITH TABLE KEY`](ABAPREAD_TABLE_KEY.html) and [`WITH KEY`](ABAPREAD_TABLE_FREE.html) of the statement `READ` or [`KEY`](ABENTABLE_EXP_ITAB_LINE.html) in a table expression are used, however, the content of the specified data objects is always converted to the data type of the columns before the comparison.

-   only fully compatible operands are optimizable,
-   in some cases, operands with different elementary data types can be optimized, if the value ranges or lengths are suitable. For example, a comparison of a column with the type of a floating point number with an operand of type integer or of a column of `c` with a similar operand, if its length is less than the length of the column.

-   There, the access is done via the primary table key. No optimization takes place, but there is no warning from the syntax check.
-   Here, the access is done via a secondary table key, resulting in a warning from the syntax check and a possible exception during program execution. Whether the exception is raised depends on the number of lines in the internal table.

TYPES: \\n BEGIN OF line, \\n a TYPE i, \\n b TYPE i, \\n c TYPE i, \\n d TYPE i, \\n END OF line. \\n\\ \\nDATA itab TYPE STANDARD TABLE OF line \\n WITH UNIQUE HASHED KEY key COMPONENTS a b c. \\n\\ \\nLOOP AT itab USING KEY key \\n ASSIGNING FIELD-SYMBOL() \\n WHERE a = 3 AND b = 3 AND c = 0 AND d > 1. \\n ... \\nENDLOOP. \\n\\ \\nLOOP AT itab USING KEY key \\n ASSIGNING FIELD-SYMBOL() \\n WHERE d > 1 AND \\n NOT ( NOT ( a = 3 AND b = 3 ) ) AND \\n c IS INITIAL. \\n ... \\nENDLOOP. \\n\\ \\nLOOP AT itab USING KEY key \\n ASSIGNING FIELD-SYMBOL() \\n WHERE NOT ( NOT a = 3 OR NOT b = 3 ) AND \\n d > 1 AND \\n NOT c IS NOT INITIAL. \\n ... \\nENDLOOP. \\n\\ \\n\*LOOP AT itab USING KEY key "Syntax error \\n\* ASSIGNING FIELD-SYMBOL() \\n\* WHERE a = 3 AND b = 3 AND c = 0 OR d > 1. \\n\* ... \\n\*ENDLOOP. \\n\\ \\n\*LOOP AT itab USING KEY key "Syntax error \\n\* ASSIGNING FIELD-SYMBOL() \\n\* WHERE a = 3 AND b = 3 AND c = 0 AND a = 1. \\n\* ... \\n\*ENDLOOP. TYPES: \\n BEGIN OF line, \\n a TYPE i, \\n b TYPE i, \\n c TYPE i, \\n d TYPE i, \\n END OF line. \\n\\ \\nDATA itab TYPE STANDARD TABLE OF line \\n WITH UNIQUE SORTED KEY key COMPONENTS a b c. \\n\\ \\nLOOP AT itab USING KEY key \\n ASSIGNING FIELD-SYMBOL() \\n WHERE a = 3 AND b >= 3 AND c < 0 AND d > 1. \\n ... \\nENDLOOP. \\n\\ \\nLOOP AT itab USING KEY key \\n ASSIGNING FIELD-SYMBOL() \\n WHERE a = 3 AND b < 3 AND d > 1. \\n ... \\nENDLOOP. \\n\\ \\nLOOP AT itab USING KEY key \\n ASSIGNING FIELD-SYMBOL() \\n WHERE a = 3 AND b = 3 AND NOT c = 1 AND d > 1. \\n ... \\nENDLOOP. \\n\\ \\nLOOP AT itab USING KEY key \\n ASSIGNING FIELD-SYMBOL() \\n WHERE NOT ( NOT a = 3 OR NOT b = 3 ). \\n ... \\nENDLOOP. \\n\\ \\nLOOP AT itab USING KEY key \\n ASSIGNING FIELD-SYMBOL() \\n WHERE a BETWEEN 1 AND 3. \\n ... \\nENDLOOP. \\n\\ \\n\*LOOP AT itab USING KEY key "Syntax error \\n\* ASSIGNING FIELD-SYMBOL() \\n\* WHERE a = 3 AND b = 3 OR d > 1. \\n\* ... \\n\*ENDLOOP. \\n\\ \\n\*LOOP AT itab USING KEY key "Syntax error \\n\* ASSIGNING FIELD-SYMBOL() \\n\* WHERE a = 3 AND b = 3 AND a = 1. \\n\* ... \\n\*ENDLOOP. \\n\\ \\nLOOP AT itab USING KEY key \\n ASSIGNING FIELD-SYMBOL() \\n WHERE a = 3 AND b = 3 AND a > 1 ##ITAB\_DUP\_IN\_WHERE\[A\]. \\n ... \\nENDLOOP. TYPES: \\n BEGIN OF line, \\n a TYPE i, \\n b TYPE i, \\n c TYPE i, \\n d TYPE i, \\n END OF line. \\n\\ \\nDATA itab TYPE STANDARD TABLE OF line \\n WITH UNIQUE SORTED KEY key COMPONENTS a b c. \\n\\ \\nLOOP AT itab USING KEY key \\n ASSIGNING FIELD-SYMBOL() \\n WHERE a = 0 AND b >= 0 AND b < 5 AND c > 2. \\n ... \\nENDLOOP. \\n\\ \\nLOOP AT itab USING KEY key \\n ASSIGNING FIELD-SYMBOL() \\n STEP -1 \\n WHERE a BETWEEN -1 AND 1 AND b >= 0 AND b < 5 AND c > 2. \\n ... \\nENDLOOP. \\n\\ \\n\*LOOP AT itab USING KEY key "Syntax error \\n\* ASSIGNING FIELD-SYMBOL() \\n\* WHERE b >= 0 AND b < 5 AND c > 2. \\n\* ... \\n\*ENDLOOP. \\n\\ \\n\*LOOP AT itab USING KEY key "Syntax error \\n\* ASSIGNING FIELD-SYMBOL() \\n\* STEP -1 \\n\* WHERE b >= 0 AND b < 5 AND c > 2. \\n\* ... \\n\*ENDLOOP. DATA text\_short TYPE c LENGTH 2. \\nDATA text\_long TYPE c LENGTH 4. \\n\\ \\nDATA itab LIKE TABLE OF text\_short \\n WITH UNIQUE HASHED KEY key COMPONENTS table\_line. \\n\\ \\nitab = VALUE #( ( 'AA' ) \\n ( 'BB' ) \\n ( 'CC' ) \\n ( 'DD' ) \\n ( 'EE' ) \\n ( 'FF' ) \\n ( 'GG' ) \\n ( 'HH' ) \\n ( 'II' ) \\n ( 'JJ' ) \\n ( 'KK' ) \\n ( 'LL' ) \\n ( 'MM' ) ). \\n\\ \\ntext\_short = 'AA'. \\ntext\_long = 'AAXX'. \\n\\ \\nLOOP AT itab INTO text\_short USING KEY key \\n WHERE table\_line = text\_long. \\nENDLOOP. \\ncl\_demo\_output=>write( |LOOP: \\{ sy-subrc \\}| ). \\n\\ \\n"Statement \\nREAD TABLE itab INTO text\_short WITH TABLE KEY key \\n COMPONENTS table\_line = text\_long. \\ncl\_demo\_output=>write( |READ: \\{ sy-subrc \\}| ). \\n\\ \\n"Expression \\nTRY. \\n text\_short = itab\[ KEY key COMPONENTS table\_line = text\_long \]. \\n CATCH cx\_sy\_itab\_line\_not\_found. \\n ... \\nENDTRY. \\ncl\_demo\_output=>display( |Expression: \\{ text\_short \\}| ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abenitab\_perfo.html