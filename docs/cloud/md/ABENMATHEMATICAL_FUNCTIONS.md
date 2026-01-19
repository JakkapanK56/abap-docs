---
title: "ABENMATHEMATICAL_FUNCTIONS"
description: |
  ABENMATHEMATICAL_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMATHEMATICAL_FUNCTIONS.htm"
abapFile: "ABENMATHEMATICAL_FUNCTIONS.html"
keywords: ["catch", "method", "class", "data", "ABENMATHEMATICAL", "FUNCTIONS"]
---

Numeric functions are a type of [built-in function](ABENBUILT_IN_FUNCTIONS.html). The main argument of a numeric function must represent a numeric value. The data type of the return value is determined either by the argument of the function (overloaded functions) or by the function.

Outside of an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html), the main argument of a numeric function must be a single numeric data object. Within an arithmetic expression, the following are possible as main arguments of a numeric function:

The following functions are available:

The catchable exceptions that can be raised during the calculation of a numeric function are subclasses of the classes `CX_SY_ARITHMETIC_ERROR` and `CX_SY_CONVERSION_ERROR`.

-   [Numeric data object](ABENNUMERIC_DATA_OBJECT_GLOSRY.html)
-   [Arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html)
-   [Built-in function](ABENBUILTIN_FUNCTION_GLOSRY.html)
-   [Functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html)

**Function** **Meaning** [`abs`](ABENNUMERICAL_FUNCTIONS.html) Absolute value [`acos`](ABENFLOATING_POINT_FUNCTIONS.html) Arccosine [`asin`](ABENFLOATING_POINT_FUNCTIONS.html) Arcsine [`atan`](ABENFLOATING_POINT_FUNCTIONS.html) Arctangent [`binomial`](ABENBINOMIAL_FUNCTIONS.html) Computes the binomial coefficient [`ceil`](ABENNUMERICAL_FUNCTIONS.html) Smallest integer not less than the argument [`cos`](ABENFLOATING_POINT_FUNCTIONS.html) Cosine [`cosh`](ABENFLOATING_POINT_FUNCTIONS.html) Hyperbolic cosine [`erf`](ABENERROR_FUNCTIONS.html) (Gauss) error function, which is the probability function of the normal distribution [`erfc`](ABENERROR_FUNCTIONS.html) Complementary error function [`erf_inv`](ABENERROR_FUNCTIONS.html) Inverse error function [`erfc_inv`](ABENERROR_FUNCTIONS.html) Inverse complementary error function [`exp`](ABENFLOATING_POINT_FUNCTIONS.html) Exponential function for base e [`factorial`](ABENFACTORIAL_FUNCTIONS.html) Computes the factorial [`floor`](ABENNUMERICAL_FUNCTIONS.html) Largest integer not greater than an argument [`frac`](ABENNUMERICAL_FUNCTIONS.html) Value of decimal places of an argument [`gamma`](ABENGAMMA_FUNCTIONS.html) Gamma function [`gamma_lower`](ABENLOWER_GAMMA_FUNCTIONS.html) Lower incomplete gamma function [`ipow`](ABENPOWER_FUNCTION.html) Power function [`log`](ABENFLOATING_POINT_FUNCTIONS.html) Natural logarithm [`log10`](ABENFLOATING_POINT_FUNCTIONS.html) Logarithm to base 10 [`log_gamma`](ABENGAMMA_FUNCTIONS.html) Log gamma function [`nmax`](ABENNMAX_NMIN_FUNCTIONS.html) Returns the value of the largest of the passed arguments [`nmin`](ABENNMAX_NMIN_FUNCTIONS.html) Returns the value of the smallest of the passed arguments [`rescale`](ABENDEC_FLOATING_POINT_RESCALE.html) Rescaling function [`round`](ABENDEC_FLOATING_POINT_ROUND.html) Rounding function [`sign`](ABENNUMERICAL_FUNCTIONS.html) Sign of an argument [`sin`](ABENFLOATING_POINT_FUNCTIONS.html) Sine [`sinh`](ABENFLOATING_POINT_FUNCTIONS.html) Hyperbolic sine [`sqrt`](ABENFLOATING_POINT_FUNCTIONS.html) Square root [`tan`](ABENFLOATING_POINT_FUNCTIONS.html) Tangent [`tanh`](ABENFLOATING_POINT_FUNCTIONS.html) Hyperbolic tangent [`trunc`](ABENNUMERICAL_FUNCTIONS.html) Value of the integer part of an argument abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html