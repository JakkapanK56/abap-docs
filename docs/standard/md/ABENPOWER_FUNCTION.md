---
title: "ABENPOWER_FUNCTION"
description: |
  ABENPOWER_FUNCTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPOWER_FUNCTION.htm"
abapFile: "ABENPOWER_FUNCTION.html"
keywords: ["do", "if", "case", "data", "types", "ABENPOWER", "FUNCTION"]
---

`... ipow( base = arg exp = n ) ...`

This [built-in function](ABENBUILT_IN_FUNCTIONS.html) raises the argument `arg` passed to `base` to the exponent `n` passed to `exp`. The arguments `arg` and `n` are [numeric expression positions](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html). Any [numeric data object](ABENNUMERIC_DATA_OBJECT_GLOSRY.html) can be specified for `arg`. `n` expects the type `i` and exponents of other types are [converted](ABENCONVERSION_ELEMENTARY.html) to `i`. If the argument `arg` has the value 0, the value of the exponent `n` must be greater than or equal to 0.

The function `ipow` is overloaded in such a way that the return value can have different numeric types.

This function can be specified in [general](ABENGENERAL_EXPR_POSITION_GLOSRY.html) and [numeric expression positions](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html). The calculation type is determined from the argument `arg` in the same way as with the other [numeric functions](ABENNUMERICAL_FUNCTIONS.html). The argument `n` does not have any effect on the data type of the return value.

The results are `1.4399999999999999` for `**` and `1.4400` for `ipow`. The result of `ipow` is more precise.

[Power Function `ipow`](ABENIPOW_FUNCTION_ABEXA.html)

-   Outside of an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html), the data type of the argument `arg` determines the data type of the return value.
-   Within an arithmetic expression, the argument `arg` contributes to the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) of the entire expression and the function is calculated using the calculation type.
-   If the argument `arg` is a [numeric expression](ABENNUMERICAL_EXPRESSION_GLOSRY.html), `ipow` works like an arithmetic operator and the function is handled in its operand position like an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html).

-   The power function `ipow` can replace [`arg ** n`](ABENARITH_OPERATORS.html) calculations, if the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html)\\ `f` is to be avoided. This makes sense if the type `f` is not precise enough.
-   In many cases, the power function `ipow` has better performance than using the arithmetic operator [`**`](ABENARITH_OPERATORS.html).

cl\_demo\_output=>display( |\*\*: \\{ '1.2' \*\* 2 \\} \\\\n| && \\n |ipow: \\{ ipow( base = '1.2' exp = 2 ) \\}| ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abenmathematical\_functions.html