---
title: "ABENNUMERICAL_FUNCTIONS"
description: |
  ABENNUMERICAL_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNUMERICAL_FUNCTIONS.htm"
abapFile: "ABENNUMERICAL_FUNCTIONS.html"
keywords: ["do", "if", "data", "types", "ABENNUMERICAL", "FUNCTIONS"]
---

`... num_func( arg ) ...`

General [built-in](ABENBUILT_IN_FUNCTIONS.html) numeric functions with exactly one unnamed parameter for an argument with any numeric data type. These functions are overloaded with the effect that the return value can have different numeric types. The argument of a general numeric function must be a single data object outside an arithmetic expression, and can itself be a numeric expression within an arithmetic expression.

The following table shows the general numeric functions and how they work.

The following applies to the data type of the return value:

If the argument of a numeric function outside of an arithmetic expression does not have a numeric data type `i`, `int8`, `p`, `decfloat16`, `decfloat34`, or `f`, its data type determines the type of return value as follows:

Before the calculation of the function, the argument is [converted](ABENCONVERSION_RULES.html) to the corresponding type.

The following assertion should always be correct.

[Numeric Functions](ABENMATH_FUNC_ABEXA.html)

-   Outside of an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html), the data type of the argument determines the data type of the return value.
-   Within an arithmetic expression, the argument of the function contributes to the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) of the entire expression and the function is calculated using the calculation type. If the argument itself is an arithmetic expression, its operands contribute to the entire calculation type and the argument is also calculated with this type.
-   If the argument `arg` is a [numeric expression](ABENNUMERICAL_EXPRESSION_GLOSRY.html), the function works like an arithmetic operator and it is handled in its operand position like an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html).

-   `d` and `t` give `i`
-   `c`, `n` and `string` give `p`
-   `x` and `xstring` give`i`
-   `utclong` is not allowed

-   The time stamp type `utclong` cannot be converted implicitly to a numeric type, and therefore cannot be specified directly as an argument.

DATA pack TYPE p LENGTH 8 DECIMALS 4 VALUE '-1234.5678'. \\ncl\_demo\_input=>request( CHANGING field = pack ). \\n\\ \\nASSERT pack = trunc( pack ) + frac( pack ). **Function num\_func** **Return Value** `abs` Absolute value of argument `arg` `sign` Sign of argument `arg`: -1, if the value of `arg` is negative; 0, if the value of `arg` is 0; 1, if the value of `arg` is positive `ceil` Smallest integer that is not less than the value of the argument `arg` `floor` Largest integer that is not greater than the value of the argument `arg` `trunc` Value of the integer part of the argument `arg`; negative if `arg` is negative `frac` Value of the [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) of the argument `arg`; negative if `arg` is negative abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abenmathematical\_functions.html