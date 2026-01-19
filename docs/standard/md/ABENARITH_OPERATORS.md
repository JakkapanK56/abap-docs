---
title: "ABENARITH_OPERATORS"
description: |
  ABENARITH_OPERATORS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENARITH_OPERATORS.htm"
abapFile: "ABENARITH_OPERATORS.html"
keywords: ["do", "if", "case", "catch", "data", "types", "exception-handling", "ABENARITH", "OPERATORS"]
---

The table shows the possible arithmetic operators for [arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html), their priority, and the order in which the calculation is performed. Within a [parenthesis level](ABENARITH_BRACKETS.html), calculations with operators of higher priority are performed before calculations with operators of lower priority. For adjacent operators of the same priority, the calculation is performed in the order specified. In the third column of the table below, 3 indicates the highest priority and 1 the lowest.

The calculation is performed according to the [calculation rule](ABENARITH_TYPE.html) for the current [calculation type](ABENARITH_TYPE.html). With the exception of `**`, the operators have no effect on the calculation type. If the operator `**` does not occur in an arithmetic expression, the calculation type is determined only by the data types involved. If `**` is used, the calculation type is either `decfloat34` or `f`. It is `decfloat34` if one of the operands involved is a [decimal floating point number](ABENDECFLOAT_GLOSRY.html) and `f` in all other cases.

Division by the value 0 is undefined and raises a catchable exception. The only situation where division by 0 does not raise an exception is if the dividend is also 0. Here, the result is set to 0.

[Prevent division by zero](ABENDIVISION_ZERO_GUIDL.html)

This example demonstrates the functions of the three division operators, `DIV`, `MOD`, and `/`. The results are `4.7273`, `4.0000`, and `0.8000`.

The following table shows the results of integer divisions and their remainders. See also the example for the SQL operators [`DIV`](ABENSQL_FUNCTIONS_NUMERIC.html) and [`MOD`](ABENSQL_FUNCTIONS_NUMERIC.html).

[Arithmetic Calculations](ABENDIVISIONS_ABEXA.html)

[Floating Point Numbers, Arithmetic Calculations](ABENFLOATING_POINT_NUMBERS_ABEXA.html)

-   Setting the result to 0 in a division by the value 0, where the dividend is 0 can be seen as an internal exception handling that sets the result to a predefined value in that case.
-   In ABAP, the result of a division for the [calculation types](ABENARITH_TYPE.html)\\ `i`, `int8`, `p`, and `decfloat34` is rounded commercially, whereas in most other programming languages any surplus decimal places are cut off.
-   The result of `DIV` multiplied by `operand2` plus the result of `MOD` always produces `operand1`. Therefore, the rule that the result of `MOD` is always positive also affects the result of `DIV`. The result of an integer division of two positive numbers with a remainder that is not equal to zero differs from the result of an integer division of two negative numbers with the same amounts. Likewise, for operands with different plus/minus signs, it is important which operand is positive and which is negative.
-   If, when raising to a power, the left operand is 0, the right operand must be greater than or equal to 0. If the left operand is negative, the right operand must be an integer. Otherwise, both cases raise a catchable exception.
-   To prevent the operator `**` from producing the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html)\\ `f`, the built-in function [`ipow`](ABENPOWER_FUNCTION.html) can be used for integer exponents for which the calculation type is determined by the argument.
-   The ABAP operators `DIV` and `MOD` behave differently with respect to the signs than the SQL operators `[DIV](ABENSQL_FUNCTIONS_NUMERIC.html)` and [`MOD`](ABENSQL_FUNCTIONS_NUMERIC.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: pack TYPE p DECIMALS 4, \\n n TYPE decfloat34 VALUE '+5.2', \\n m TYPE decfloat34 VALUE '+1.1'. \\n\\ \\npack = n / m. \\nout->write( |\\{ n \\} / \\{ m \\} = \\{ pack \\}| ). \\n\\ \\npack = n DIV m. \\nout->write( |\\{ n \\} DIV \\{ m \\} = \\{ pack \\}| ). \\n\\ \\npack = n MOD m. \\nout->write( |\\{ n \\} MOD \\{ m \\} = \\{ pack \\}| ). \\n\\ \\nout->display( ). **Operator** **Calculation** **Priority** **Order** `+` Addition of the operands 1 From left to right `-` Subtraction of the right operand from the left 1 From left to right `*` Multiplication of the operands 2 From left to right `/` Division of the left operand by the right 2 From left to right `DIV` Integer part of the division of the left operand by the right, with positive remainder 2 From left to right `MOD` Positive remainder of the division of the left operand by the right; a remainder other than zero is always between zero and the size of the right operand 2 From left to right `**` Left operand raised to the power of the right 3 From right to left `operand1` `operand2` `DIV` `MOD` 7 3 2 1 -7 3 -3 2 7 -3 -2 1 -7 -3 3 2 abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abapcompute\_arith.html