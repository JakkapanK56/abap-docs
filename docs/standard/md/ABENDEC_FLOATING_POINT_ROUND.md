---
title: "ABENDEC_FLOATING_POINT_ROUND"
description: |
  ABENDEC_FLOATING_POINT_ROUND - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDEC_FLOATING_POINT_ROUND.htm"
abapFile: "ABENDEC_FLOATING_POINT_ROUND.html"
keywords: ["do", "if", "class", "data", "ABENDEC", "FLOATING", "POINT", "ROUND"]
---

`... round( val = arg \{dec = n\}|\{prec = n\}\ [mode = m] ) ...`

The rounding function `round` can be implemented in [operand positions](ABENOPERANDS_EXPRESSIONS.html) using the syntax above. This function rounds a decimal floating point number specified as an argument for the parameter `val`. A data object specified for `arg` is converted to the data type `decfloat34` before the function is executed, if necessary.

Either the parameter `dec` or the parameter `prec` must be given a value, and rounding must be to either a particular number of decimal places or to a [precision](ABENPRECISION_GLOSRY.html):

A rounding can reduce [scaling](ABENSCALE_GLOSRY.html) and [precision](ABENPRECISION_GLOSRY.html) but cannot increase them. If `dec` is specified, the mantissa of the return value does not contain any zeros after the place where the rounding applies. If `prec` is specified, the input value is returned unchanged if the specified precision is greater than or equal to the input value.

The optional parameter `mode` determines the rounding type. For `m` it is only possible to specify values that exist as `ROUND_...` constants in class `CL_ABAP_MATH`. The following table shows the possible rounding rules. If `mode` is not given a value, commercial rounding is used.

The following tables show the results of commercial rounding of the decimal floating point number `1234.56789` (scaling 5, precision 9) with different values for `dec` and `prec`. The shown results shown are created by executing the class `CL_DEMO_ROUND_AND_RESCALE`.

[Rounding Function `round`](ABENROUND_FUNCTION_ABEXA.html)

-   If the parameter `dec` is given a value, the input value is rounded to the number of decimal places specified in `n` and returned. `n` expects data objects of the type `i` whose value must not be less than -6144. If a negative value is specified, the corresponding pre-decimal place is rounded.
-   If the parameter `prec` is given a value, the value entered is rounded to the [precision](ABENPRECISION_GLOSRY.html) specified in `n` and returned. `n` expects data objects of the type `i` whose value must be greater than 0.

**Constant** **Rounding rule** `dec` **Result** **Scaling** **Precision** `ROUND_HALF_UP` The value is rounded to the nearest rounded value. If the value falls exactly halfway between two rounded values, it is rounded away from zero (commercial rounding). `ROUND_HALF_DOWN` The value is rounded to the nearest rounded value. If the value falls exactly halfway between two round values, it is rounded towards zero. `ROUND_HALF_EVEN` The value is rounded to the nearest rounded value. If the value falls exactly halfway between two rounded values, it is rounded to the value whose rightmost digit is an even number. `ROUND_UP` The value is rounded away from zero or towards the greater absolute value. `ROUND_DOWN` The value is rounded towards zero or towards the lesser absolute value. `ROUND_CEILING` The value is rounded towards positive infinity or towards the greater value. `ROUND_FLOOR` The value is rounded towards negative infinity or towards the lower value. `-5` `0E+5` `-5` `1` `-4` `0E+4` `-4` `1` `-3` `1E+3` `-3` `1` `-2` `1.2E+3` `-2` `2` `-1` `1.23E+3` `-1` `3` `0` `1235` `0` `4` `1` `1234.6` `1` `5` `2` `1234.57` `2` `6` `3` `1234.568` `3` `7` `4` `1234.5679` `4` `8` `5` `1234.56789` `5` `9` `6` `1234.56789` `5` `9` `prec` **Result** **Scaling** **Precision** `1` `1E+3` `-3` `1` `2` `1.2E+3` `-2` `2` `3` `1.23E+3` `-1` `3` `4` `1235` `0` `4` `5` `1234.6` `1` `5` `6` `1234.57` `2` `6` `7` `1234.568` `3` `7` `8` `1234.5679` `4` `8` `9` `1234.56789` `5` `9` `10` `1234.56789` `5` `9` abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abenmathematical\_functions.html abendec\_floating\_point\_functions.html