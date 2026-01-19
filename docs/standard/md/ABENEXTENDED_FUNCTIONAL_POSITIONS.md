---
title: "ABENEXTENDED_FUNCTIONAL_POSITIONS"
description: |
  ABENEXTENDED_FUNCTIONAL_POSITIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEXTENDED_FUNCTIONAL_POSITIONS.htm"
abapFile: "ABENEXTENDED_FUNCTIONAL_POSITIONS.html"
keywords: ["if", "case", "method", "data", "internal-table", "ABENEXTENDED", "FUNCTIONAL", "POSITIONS"]
---

Extended functional operand positions are [functional operand positions](ABENFUNCTIONAL_POSITIONS.html) in which certain built-in functions can be specified alongside data objects, [functional method calls](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html), [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), and [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html), if a single data object is specified as their argument. The following extended functional operand positions exist:

The following built-in functions can be specified for `IS [NOT] INITIAL`, `WHEN`, and `MOVE`:

However, these functions can only be specified at extended functional operand positions if the argument is not an expression, a functional method, or a built-in function.

Extended functional operand positions exist for historical reasons and have been replaced by [operand positions for expressions](ABENEXPRESSION_POSITIONS.html). In all appropriate places, operand positions in which functional methods or built-in functions could previously also be specified have been replaced by a suitable [operand position](ABENEXPRESSION_POSITIONS.html). In the remaining statements, `IS [NOT] INITIAL`, `WHEN`, and `MOVE`, this did not take place for the following reasons:

The extended functional operand position should not be used in the case of `WHEN`. The more general assignment operator `=` should be used instead of `MOVE`.

Specifies the built-in function `lines` as the source of the obsolete statement [`MOVE`](ABAPMOVE_OBS.html).

Use of the general [assignment operator `=`](ABENEQUALS_OPERATOR.html), which enables inline declarations on the left side.

-   Operand `operand` of the predicate expression
-   [`... operand IS [NOT] INITIAL`](ABENLOGEXP_INITIAL.html)
-   Operands `operand` of the statement
-   [`WHEN operand ...`](ABAPWHEN.html)
-   No [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html) can be specified for `operand`, however.
-   Source field `source` of the obsolete statement
-   [`MOVE source TO ...`](ABAPMOVE_OBS.html)
-   No [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) or [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html), however, can be specified for `source`.

-   [General numeric functions](ABENNUMERICAL_FUNCTIONS.html)
-   [Floating point functions](ABENFLOATING_POINT_FUNCTIONS.html)
-   [Length functions for strings](ABENLENGTH_FUNCTIONS.html)
-   [Length functions for byte strings](ABENDESCRIPTIVE_FUNCTIONS_BINARY.html)
-   [Row function for internal tables](ABENDESCRIPTIVE_FUNCTIONS_TABLE.html)

-   The operand position of the predicate expression `IS [NOT] INITIAL` is suitable as a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html), but not as a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html). In particular, [calculation expressions](ABENCALCULATION_EXPRESSION_GLOSRY.html) are not valid here.
-   `WHEN` is used to distinguish cases using [`CASE`](ABAPCASE.html). Generally, no operations should be performed after `WHEN` and constant values should be specified instead. The operand position after `CASE`, on the other hand, was changed to a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html).
-   `MOVE` is obsolete and has been replaced by the [assignment operator `=`](ABENEQUALS_OPERATOR.html). The right side of a statement with assignment operator is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html).

DATA itab TYPE TABLE OF i WITH EMPTY KEY. \\nDATA lines TYPE i. \\n... \\nMOVE lines( itab ) TO lines. DATA itab TYPE TABLE OF i WITH EMPTY KEY. \\n... \\nFINAL(lines) = lines( itab ). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abensyntax\_obsolete.html abenoperand\_positions\_obsolete.html