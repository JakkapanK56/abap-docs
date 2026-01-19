---
title: "ABENLOSSLESS_CALCULATION"
description: |
  ABENLOSSLESS_CALCULATION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOSSLESS_CALCULATION.htm"
abapFile: "ABENLOSSLESS_CALCULATION.html"
keywords: ["do", "if", "method", "data", "types", "ABENLOSSLESS", "CALCULATION"]
---

A [lossless calculation](ABENLOSSLESS_CALCULATION_GLOSRY.html) is a calculation of an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) in which no roundings occur. Lossless calculations can be performed using the [lossless operator `EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html):

`... EXACT type( arith_exp ) ...`.

If the operand of the operator `EXACT` is an arithmetic expression, the data type specified by `type` must not be of type `f`. `arith_exp` must be an arithmetic expression simplified as follows:

The operator `EXACT` ensures that a simplified expression with the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html)\\ `decfloat34` is calculated and checks whether roundings are performed. If no roundings occur, the result is assigned to the return value. If necessary, the result is converted from `decfloat34` to the data type determined by `type`. If a rounding is required by the calculation, the exception `CX_SY_CONVERSION_ROUNDING` is raised. Rounding can occur when operands are converted to the calculation type, during the calculation, or when the result is converted to the target field.

The exception is raised when the first subexpression that requires a rounding is calculated. If the exception is handled, the exception object in the `VALUE` attribute contains the result of a regular calculation. The attribute `OPERATION` contains the first operation that had to be rounded, whereby conversions are represented by *:=*.

The second arithmetic expression raises an exception, since it requires rounding to two decimal places.

[Lossless Calculations](ABENCOMPUTE_EXACT_ABEXA.html)

`CX_SY_TYPE_NOT_EXACT`

`CX_SY_CONVERSION_ROUNDING`

-   The allowed [arithmetic operators](ABENARITHMETIC_OPERATOR_GLOSRY.html) are `+`, `-`, `*`, and `/`. The operators `DIV`, `MOD`, and `**` cannot be used.
-   The allowed [built-in functions](ABENBUILTIN_FUNCTION_GLOSRY.html) are `abs`, `sign`, `ceil`, `floor`, `trunc`, `frac`, `round`, and `rescale`. These functions do not raise the exception `CX_SY_CONVERSION_ROUNDING`. No other built-in functions can be specified because their results are not lossless in principle.
-   No operands of data type `x` and `xstring` can be specified.
-   No [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) can be specified, since the requirement for losslessness cannot be applied to the method execution.
-   Operands of the type `f` (binary floating point numbers) are not allowed because they cannot represent every decimal number precisely, due to their internal representation.

-   If the operand of the operator `EXACT` is not an arithmetic expression, the operator performs a [lossless assignment](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html).
-   Since the first calculation in lossless calculations that requires rounding raises an exception, the behavior in arithmetic expressions that are mathematically identical but constructed in different ways can be different.

-   *Cause:* Invalid operand type for lossless calculations
    *Runtime error:*\\ `UNCAUGHT_EXCEPTION`

-   *Cause:* Rounding in a lossless calculation
    *Runtime error:*\\ `UNCAUGHT_EXCEPTION`

TYPES pack TYPE p LENGTH 8 DECIMALS 2. \\n\\ \\nFINAL(result1) = EXACT pack( 1 / 4 ). \\n\\ \\nFINAL(result2) = EXACT pack( 1 / 3 ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abapcompute\_arith.html