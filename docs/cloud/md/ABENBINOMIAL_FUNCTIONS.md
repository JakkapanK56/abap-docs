---
title: "ABENBINOMIAL_FUNCTIONS"
description: |
  ABENBINOMIAL_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBINOMIAL_FUNCTIONS.htm"
abapFile: "ABENBINOMIAL_FUNCTIONS.html"
keywords: ["do", "if", "case", "data", "types", "ABENBINOMIAL", "FUNCTIONS"]
---

`... binomial( n = i k = j ) ...`

The `binomial` function represents the number of possible `k` element subsets of a set with `n` elements, thus calculating the binomial coefficient. `i` and `j` represent 4-byte integer values or data objects convertible to type `i`, passed as arguments. They can be positive or negative.

The function is overloaded so that the return value can have the types `f` and `decfloat34`.

The calculation pattern may be expressed as `i! / ( j! * ( i - j )! )`. For example, the binomial coefficient of 10 (argument for `n`) and 2 (argument for `k`) is 45.

The following special cases apply:

The following example computes the binomial coefficient of various integer values passed as arguments.

[`num_func` - `factorial` and `binomial` Functions](ABENFACTORIAL_BINOMIAL_ABEXA.html)

-   Positive argument for `n`:

-   `binomial( n = 0 k = any_value )` yields 0
-   `binomial( n = i k = j )` yields 0 if j < 0 or j > i

-   Negative argument for `n`:

-   `binomial( n = i k = j )` computes `-1 ^ j * binomial( n = -i + j - 1 k = j )` if i < 0 and j >= 0
-   `binomial( n = i k = j )` computes `-1 ^ ( i - j ) * binomial( n = -j - 1 k = i - j )` if i < 0 and j <= i
-   `binomial( n = i k = j )` yields 0 if i < 0 and j > i and j < 0

-   The order of the argument specification is not fixed.
-   Rounding may occur. If the result fits to the types `i` or `int8`, it is assigned accurately. Otherwise, it is rounded to the last digit following the [rules](ABENARITH_TYPE.html) for the types `f`, `decfloat16`, or `decfloat34`.
-   Besides precision and potential overflows, using the function has a performance advantage over manual calculation.
-   In arithmetic operations involving the function and other operands, the resulting type is determined by the operand with the largest value range.
-   The function performs the calculation internally without computing the factorial individually, but rather uses the mathematical beta function. This allows for the function to determine the binomial coefficient even if the result is very large. The example `DATA(calc_bin_coeff) = CONV decfloat34( binomial( n = 20000000 k = 1298 ) ).` yields `2.796321303970816355690410266166715E+5997`.

-   If the argument produces a result too large for the types `f`, `decfloat16`, or `decfloat34`, the `CX_SY_ARITHMETIC_OVERFLOW` exception occurs.
-   If the argument cannot be converted to type `i`, the `CX_SY_CONVERSION_NO_NUMBER` exception is raised.

TYPES: BEGIN OF bin\_coeff\_struc, \\n n TYPE i, \\n k TYPE i, \\n result TYPE string, \\n result\_simple TYPE string, \\n END OF bin\_coeff\_struc. \\nDATA bin\_coeff\_table TYPE TABLE OF bin\_coeff\_struc WITH EMPTY KEY. \\nDATA n\_value TYPE i VALUE 21. \\nDATA k\_value TYPE i VALUE 11. \\nDO 10 TIMES. \\n n\_value -= 1. \\n k\_value -= 1. \\n DATA(binomial\_coefficient) = binomial( n = n\_value k = k\_value ). \\n APPEND VALUE #( \\n n = n\_value \\n k = k\_value \\n result = binomial\_coefficient \\n result\_simple = |\\{ binomial\_coefficient STYLE = SIMPLE \\}| \\n ) TO bin\_coeff\_table. \\nENDDO. \\n\\ \\ncl\_demo\_output=>new( )->display( bin\_coeff\_table ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abenmathematical\_functions.html abenfactorial\_binomial\_functions.html