---
title: "ABENLOGEXP_INITIAL"
description: |
  ABENLOGEXP_INITIAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP_INITIAL.htm"
abapFile: "ABENLOGEXP_INITIAL.html"
keywords: ["select", "if", "method", "data", "internal-table", "ABENLOGEXP", "INITIAL"]
---

`... operand IS [NOT] INITIAL ...`

This predicate expression checks whether the operand `operand` is initial. The expression is true, if the operand contains its type-dependent [initial value](ABENINITIAL_VALUE_GLOSRY.html). Any data objects can be specified for `operand`. This is an [extended functional operand position](ABENEXTENDED_FUNCTIONAL_POSITIONS.html) in which, in addition to [functional method calls](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html), [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), or [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html), certain built-in functions can also be specified.

With the addition `NOT`, the expression is true if the operand contains a value other than its type-dependent initial value

The logical expression in the `IF` statement is true if the internal table in the `SELECT` statement was filled with lines.

-   The expression `IS [NOT] INITIAL` is suitable for checking the type-dependent initial value regardless of its actual data type, instead of comparing it with a type-compliant operand that contains the initial value.
-   If a [functional method call](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html) is specified as `operand`, a potential short form of the following:
-   `... operand IS NOT INITIAL ...`
-   is a [predicative method call](ABENPREDICATIVE_METHOD_CALLS.html).
-   The fact that built-in functions or expressions can be specified as operands should not always be exploited, e.g.:

-   It is better to use `str IS INITIAL` or `itab IS INITIAL` instead of `strlen( str ) IS INITIAL` or `lines( itab ) IS INITIAL`.
-   It is better to use the predicate function [`matches`](ABENMATCHES_FUNCTIONS.html) instead of `[match( ... )](ABENMATCH_FUNCTIONS.html) IS INITIAL`.
-   It is better to evaluate the operands of the constructor expression instead of `[VALUE type( ... )](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) IS INITIAL`.

-   An [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) can be specified for `operand`. The initial value is checked in accordance with its [base type](ABENBASE_TYPE_GLOSRY.html).
-   [Calculation expressions](ABENCALCULATION_EXPRESSION_GLOSRY.html) cannot be specified for `operand`.

DATA spfli\_tab TYPE TABLE OF spfli. \\n... \\nCLEAR spfli\_tab. \\nSELECT \* \\n FROM spfli \\n WHERE ... \\n INTO TABLE @spfli\_tab. \\n\\ \\nIF spfli\_tab IS NOT INITIAL. \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenpredicate.html abenpredicate\_expressions.html