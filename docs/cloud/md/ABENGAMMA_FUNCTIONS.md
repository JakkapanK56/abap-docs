---
title: "ABENGAMMA_FUNCTIONS"
description: |
  ABENGAMMA_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENGAMMA_FUNCTIONS.htm"
abapFile: "ABENGAMMA_FUNCTIONS.html"
keywords: ["do", "if", "case", "try", "catch", "data", "types", "ABENGAMMA", "FUNCTIONS"]
---

`... gamma( arg ) ...  ... log_gamma( arg ) ...`

`gamma` and `log_gamma` are the [built-in](ABENBUILT_IN_FUNCTIONS.html) gamma function and log gamma function. The gamma function is the transcendental analog of the factorial, that is, `gamma(m) = (m-1)!`, but it is defined for all real numbers except 0 and negative integers. The log gamma function is defined as `log_gamma( z ) = log( abs ( gamma( z ) )`. Both functions expect a numeric value as single argument (`arg`), which can be a single data object outside an arithmetic expression or an arithmetic expression itself.

The following applies to the [floating point arithmetic](ABENFLOATING_POINT_ARITH_GLOSRY.html) in which a floating point function is calculated, and to the data type of the return value:

The functions are overloaded, returning values of types `f` or `decfloat34`. `arg` is implicitly converted to either `f` or `decfloat34`.

The following catchable exceptions can be raised during function calculation:

The example below demonstrates a simple use of the gamma function, including a catchable exception at the pole -4. It also shows that for non-integers, the gamma function can return `decfloat` values, unlike the factorial function, which only returns integers.

-   If the argument has the type `decfloat16` or `decfloat34`, a floating point function is calculated in decimal floating point arithmetic and the return value has the type `decfloat34`.
-   If a floating point function is used in an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) whose [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) is `decfloat34`, or that contains a [numeric expression](ABENNUMERICAL_EXPRESSION_GLOSRY.html) of type `decfloat34` as an argument, it also calculates a return value with the type `decfloat34` and the argument is first converted to the data type `decfloat34`, if necessary.
-   In all other cases, floating point functions use binary floating point arithmetic to calculate a return value with type `f` and the argument is first converted to the data type `f`, if necessary.

-   If `arg` cannot be converted to a numeric value, the exception `CX_SY_CONVERSION_NO_NUMBER` is raised.
-   The `gamma` and the `log_gamma` functions have poles at 0 and negative integers. Therefore, if the poles are used as arguments for the functions (for example, `gamma( -1 )`), the exception `CX_SY_ARG_OUT_OF_DOMAIN` is raised (runtime error: `COMPUTE_GAMMA_DOMAIN`).

DATA: \\n d34n TYPE decfloat34 VALUE '1.5', \\n pos\_integer TYPE i VALUE '4', \\n neg\_integer TYPE i VALUE '-4', \\n pi TYPE decfloat34 VALUE '3.14159265358979323846'. \\n\\ \\nDATA(gamma\_result1) = gamma( d34n ). \\nDATA(log\_gamma\_result1) = log\_gamma( d34n ). \\n\\ \\n"Exception caught at pole -4 \\nTRY. \\n DATA(gamma\_result2) = gamma( neg\_integer ). \\n DATA(log\_gamma\_result2) = log\_gamma( neg\_integer ). \\n CATCH cx\_sy\_arg\_out\_of\_domain. \\nENDTRY. \\n\\ \\n"Comparison to factorial (m-1)! for integers and non-integers \\n"Identical for integers > 0 \\nDATA(factorial\_int) = factorial( pos\_integer - 1 ). \\nDATA(gamma\_result3) = gamma( pos\_integer ). \\n\\ \\nDATA(factorial\_pi) = factorial( pi - 1 ). \\nDATA(gamma\_result4) = gamma( pi ). **Function** **Meaning** **Domain** `gamma` Gamma function All real numbers except 0 and negative integers \\{-1, -2, ...\\} `log_gamma` Log gamma function All real numbers except 0 and negative integers \\{-1, -2, ...\\} abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abenmathematical\_functions.html