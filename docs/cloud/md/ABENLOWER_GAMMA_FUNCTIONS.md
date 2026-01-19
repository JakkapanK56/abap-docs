---
title: "ABENLOWER_GAMMA_FUNCTIONS"
description: |
  ABENLOWER_GAMMA_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOWER_GAMMA_FUNCTIONS.htm"
abapFile: "ABENLOWER_GAMMA_FUNCTIONS.html"
keywords: ["do", "if", "case", "try", "catch", "class", "data", "ABENLOWER", "GAMMA", "FUNCTIONS"]
---

`... gamma_lower( arg = expr limit = expr [ inverse = const_abap_bool   normalized = const_abap_bool ] )`

`gamma_lower` is the [Built-in](ABENBUILT_IN_FUNCTIONS.html) lower incomplete gamma function. The incomplete gamma functions are important in statistics. For example, they serve as the cumulative distribution function of the gamma or chi-squared distribution. For statistical applications, the normalized version of the lower incomplete gamma function is used.

The lower incomplete gamma function is defined as an integral from zero to a variable upper limit. Therefore, it expects a [floating point number](ABENFLOATING_POINT_NUMBER_GLOSRY.html) as an argument (`arg`) and a floating point number as an integration limit (`lim`). The argument of a lower incomplete gamma function must be a single data object outside an arithmetic expression. It can also be an arithmetic expression itself within an arithmetic expression. The values for `arg` must be positive real numbers; the values for `limit` must be real numbers equal or higher than zero.

The following parameters are optional:

The function is overloaded, so that the return value can have the type `decfloat34` or `f`.

The following applies to the [floating point arithmetic](ABENFLOATING_POINT_ARITH_GLOSRY.html) in which a floating point function is calculated, and to the data type of the return value:

The following catchable exceptions can be raised during function calculation:

The following example illustrates the use of the `gamma_lower` function and its inverse.

-   `normalized`: If set to `abap_true,` the regularized lower incomplete gamma function is calculated as follows:
-   `gamma_lower( normalized = abap_true ) = gamma_lower( normalized = abap_false ) / gamma(arg).`
-   `inverse`: If set to `abap_true`, the inverse of the lower incomplete gamma function is calculated using the limit as argument.
-   If `inverse` is set to `abap_true`, `normalized` must also be set to `abap_true`. If parameter `inverse` is set to `abap_true`, the value of `limit` must be in the half-open range between 0 and 1 (excluding 1).

-   If the argument has the type `decfloat16` or `decfloat34`, a floating point function is calculated in decimal floating point arithmetic and the return value has the type `decfloat34`.
-   If a floating point function is used in an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) whose [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) is `decfloat34`, or that contains a [numeric expression](ABENNUMERICAL_EXPRESSION_GLOSRY.html) of type `decfloat34` as an argument, it also calculates a return value with the type `decfloat34` and the argument is first converted to the data type `decfloat34`, if necessary.
-   In all other cases, floating point functions use binary floating point arithmetic to calculate a return value with type `f` and the argument is first converted to the data type `f`, if necessary.

-   If `arg` cannot be converted to a numeric value, the exception `CX_SY_CONVERSION_NO_NUMBER` can be raised.
-   If the values of `arg` or `limit` are outside the domain of the function, a catchable exception of the class `CX_SY_ARG_OUT_OF_DOMAIN` is raised (runtime error `COMPUTE_GAMMA_LOWER_DOMAIN`).

DATA: \\n arg1 TYPE decfloat34 VALUE '10.1', \\n lim1 TYPE decfloat34 VALUE '15.11', \\n arg2 TYPE decfloat34 VALUE '-10.1', \\n lim2 TYPE decfloat34 VALUE '0.5'. \\n\\ \\n"Lower incomplete gamma function \\nDATA(gamma\_low1) = gamma\_lower( arg = arg1 limit = lim1 ). \\n\\ \\n"Exception caught at negative value \\nTRY. \\n DATA(gamma\_low2) = gamma\_lower( arg = arg2 limit = lim1 ). \\n CATCH cx\_sy\_arg\_out\_of\_domain. \\nENDTRY. \\n\\ \\n"Inverse lower incomplete gamma function \\nDATA(gamma\_low3) = \\ngamma\_lower( arg = arg1 limit = lim2 \\n normalized = abap\_true inverse = abap\_true ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abenmathematical\_functions.html