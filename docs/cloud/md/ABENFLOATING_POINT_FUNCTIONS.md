---
title: "ABENFLOATING_POINT_FUNCTIONS"
description: |
  ABENFLOATING_POINT_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENFLOATING_POINT_FUNCTIONS.htm"
abapFile: "ABENFLOATING_POINT_FUNCTIONS.html"
keywords: ["do", "if", "case", "catch", "class", "data", "internal-table", "ABENFLOATING", "POINT", "FUNCTIONS"]
---

`... num_func( arg ) ...`

[Built-in](ABENBUILT_IN_FUNCTIONS.html) floating point function for which a [floating point number](ABENFLOATING_POINT_NUMBER_GLOSRY.html) is expected as a single argument. Floating point functions are overloaded so that the return value can have the type `decfloat34` or `f`. [Decimal floating point numbers](ABENDECFLOAT_GLOSRY.html) can only be used as arguments of `exp`, `log`, `log10`, and `sqrt`. The argument of a floating point function must be a single data object outside an arithmetic expression and can be an arithmetic expression itself within an arithmetic expression.

The following table shows the floating point function and how it works.

Functions for which no `decfloat34` is specified cannot currently have the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html)\\ `decfloat34`. If one of these functions is specified in an expression with this calculation type, a syntax error occurs or the exception `CX_SY_UNSUPPORTED_FUNCTION` is raised.

The following applies to the [floating point arithmetic](ABENFLOATING_POINT_ARITH_GLOSRY.html) in which a floating point function is calculated, and to the data type of the return value:

Functions with a definition range require the value of `arg` to be within the specified limits. Arguments within the definition ranges are guaranteed to be error-free for the exponential function `exp`, since the results are then within the [value ranges](ABENVALUE_RANGE_GLOSRY.html) for [binary](ABENBINFLOAT_GLOSRY.html) or [decimal](ABENDECFLOAT_GLOSRY.html)\\ [floating point numbers](ABENFLOATING_POINT_NUMBER_GLOSRY.html) in accordance with IEEE-754. For arguments less than -709, the result for binary floating point numbers is a subnormal number, 0, depending on the platform, or a catchable exception of the class `CX_SY_ARITHMETIC_OVERFLOW` is raised from a specific value.

The trigonometric functions `sin`, `cos`, and `tan` are defined for any arguments, but the results become imprecise if the argument is greater than approximately 100,000,000.

The results in the internal table should all have the value 1 or be very close to this value.

`CX_SY_ARG_OUT_OF_DOMAIN`

-   If the argument has the type `decfloat16` or `decfloat34`, a floating point function is calculated in decimal floating point arithmetic and the return value has the type `decfloat34`.
-   If a floating point function is used in an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) whose [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) is `decfloat34`, or that contains a [numeric expression](ABENNUMERICAL_EXPRESSION_GLOSRY.html) of type `decfloat34` as an argument, it also calculates a return value with the type `decfloat34` and the argument is first converted to the data type `decfloat34`, if necessary.
-   In all other cases, floating point functions use binary floating point arithmetic to calculate a return value with type `f` and the argument is first converted to the data type `f`, if necessary.

-   The `atan` function is undefined for odd multiples of `pi/2`, but the definition range of `atan` is not restricted since an argument of this function can never contain the precise value of `pi/2`.

-   *Cause:* Invalid call of `acos`\\
    *Runtime error:*\\ `COMPUTE_ACOS_DOMAIN`
-   *Cause:* Invalid call of `asin`\\
    *Runtime error:*\\ `COMPUTE_ASIN_DOMAIN`
-   *Cause:* Invalid call of `cos`\\
    *Runtime error:*\\ `COMPUTE_COS_DOMAIN`
-   *Cause:* Invalid call of `log10`\\
    *Runtime error:*\\ `COMPUTE_LOG10_ERROR`
-   *Cause:* Invalid call of `log`\\
    *Runtime error:*\\ `COMPUTE_LOG_ERROR`
-   *Cause:* Invalid call of `sin`\\
    *Runtime error:*\\ `COMPUTE_SIN_DOMAIN`
-   *Cause:* Invalid call of `sqrt`\\
    *Runtime error:*\\ `COMPUTE_SQRT_DOMAIN`
-   *Cause:* Invalid call of `tan`\\
    *Runtime error:*\\ `COMPUTE_TAN_DOMAIN`

DATA itab TYPE TABLE OF f WITH EMPTY KEY. \\n\\ \\nitab = VALUE #( FOR i = 0 UNTIL i > 64 \\n LET n = CONV f( i / 10 ) IN \\n ( sin( n ) \*\* 2 + cos( n ) \*\* 2 ) ). \\n\\ \\ncl\_demo\_output=>display( itab ). **Function num\_func** **Meaning** **Definition Range** `acos` arccosine \[-1,1\], no `decfloat34` `asin` arcsine \[-1,1\], no `decfloat34` `atan` arctangent -, no `decfloat34` `cos` cosine -, no `decfloat34` `sin` sine -, no `decfloat34` `tan` tangent -, no `decfloat34` `cosh` hyperbolic cosine -, no `decfloat34` `sinh` hyperbolic sine -, no `decfloat34` `tanh` hyperbolic tangent -, no `decfloat34` `exp` Exponential function for base e \[-709, 709\] for type `f` and \[-14144, 14149\] for type `decfloat34` `log` Natural logarithm > 0 `log10` Logarithm to base 10 > 0 `sqrt` Square root >= 0 abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abenmathematical\_functions.html