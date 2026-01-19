---
title: "ABENDEC_FLOATING_POINT_RESCALE"
description: |
  ABENDEC_FLOATING_POINT_RESCALE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDEC_FLOATING_POINT_RESCALE.htm"
abapFile: "ABENDEC_FLOATING_POINT_RESCALE.html"
keywords: ["if", "catch", "data", "ABENDEC", "FLOATING", "POINT", "RESCALE"]
---

`... rescale( val = arg \{dec = n\}|\{prec = n\}\ [mode = m] ) ...`

The rescaling function `rescale` can be implemented in [operand positions](ABENOPERANDS_EXPRESSIONS.html) using the above syntax. This function changes the [scaling](ABENSCALE_GLOSRY.html) of a decimal floating point number specified as an argument for the parameter `val`. A data object specified for `arg` is converted to the data type `decfloat34` before the function is executed, if necessary.

Either the parameter `dec` or the parameter `prec` must be given a value, where either the [scaling](ABENSCALE_GLOSRY.html) or the [precision](ABENPRECISION_GLOSRY.html) is set:

A rescaling can both reduce and increase [scaling](ABENSCALE_GLOSRY.html) and [precision](ABENPRECISION_GLOSRY.html). An increase adds zeros on the right.

The input value is rounded if required. The optional parameter `mod` can be used to specify the rounding rule, as described under the function `round`. The default is commercial rounding.

-   If the parameter `dec` is given a value, the input value is returned using the [scaling](ABENSCALE_GLOSRY.html) specified in `n`. `n` expects data objects of the type `i`, whose value must not be less than -6144. If the scaling would produce more than 34 places in the mantissa of the return value, a catchable exception is raised.
-   If the parameter `prec` is given a value, the value entered is returned with the [precision](ABENPRECISION_GLOSRY.html) specified in `n` and appropriate [scaling](ABENSCALE_GLOSRY.html). `n` expects data objects of the type `i`, whose value must be greater than 0 and less than 34.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abenmathematical\_functions.html abendec\_floating\_point\_functions.html