---
title: "ABENFACTORIAL_FUNCTIONS"
description: |
  ABENFACTORIAL_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENFACTORIAL_FUNCTIONS.htm"
abapFile: "ABENFACTORIAL_FUNCTIONS.html"
keywords: ["do", "if", "data", "types", "ABENFACTORIAL", "FUNCTIONS"]
---

`... factorial( n ) ...`

The `factorial` function calculates the number of permutations of a set with `n` elements. `n` represents a positive integer or a data object convertible to a positive integer. The function is overloaded so that the return value can have the types `f` and `decfloat34`.

In mathematics, the factorial is represented as *n!*. The calculation pattern is: `n! = n * (n - 1) * (n - 2) * (n - 3) * ...`. For example, the factorial of 7 is 5040: `7! = 7 * 6 * 5 * 4 * 3 * 2 * 1.`

The following example computes the factorial of 0 to 20.

[`num_func` - `factorial` and `binomial` Functions](ABENFACTORIAL_BINOMIAL_ABEXA.html)

-   Rounding may occur. If the result fits to the types `i` or `int8`, it is assigned accurately. Otherwise, it is rounded to the last digit following the [rules](ABENARITH_TYPE.html) for the types `f`, `decfloat16`, or `decfloat34`.
-   The factorial of 0 is 1.
-   The maximum integer values for `n` are: 170 for type `f` as resulting type, 2123 for `decfloat34`.
-   In arithmetic operations involving the function and other operands, the resulting type is determined by the operand with the largest value range.

-   The function requires a positive integer or a value convertible to a positive integer. Passing negative integers raises the `CX_SY_ARG_OUT_OF_DOMAIN` exception.
-   If the argument produces a result too large for the types `f`, `decfloat16`, or `decfloat34`, the `CX_SY_ARITHMETIC_OVERFLOW` exception occurs.
-   If the argument cannot be converted to type `i`, the `CX_SY_CONVERSION_NO_NUMBER` exception is raised.

TYPES: BEGIN OF factorial\_struc, \\n n TYPE i, \\n result TYPE string, \\n result\_simple TYPE string, \\n END OF factorial\_struc. \\nDATA factorial\_table TYPE TABLE OF factorial\_struc WITH EMPTY KEY. \\nDATA counter TYPE i. \\nDO 21 TIMES. \\n DATA(factorial\_result) = factorial( counter ). \\n APPEND VALUE #( \\n n = counter \\n result = factorial\_result \\n result\_simple = |\\{ factorial\_result STYLE = SIMPLE \\}| \\n ) TO factorial\_table. \\n counter += 1. \\nENDDO. \\n\\ \\ncl\_demo\_output=>new( )->display( factorial\_table ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abenmathematical\_functions.html abenfactorial\_binomial\_functions.html