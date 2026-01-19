---
title: "ABENDEC_FLOATING_POINT_FUNCTIONS"
description: |
  ABENDEC_FLOATING_POINT_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDEC_FLOATING_POINT_FUNCTIONS.htm"
abapFile: "ABENDEC_FLOATING_POINT_FUNCTIONS.html"
keywords: ["do", "if", "method", "class", "data", "ABENDEC", "FLOATING", "POINT", "FUNCTIONS"]
---

`... round|rescale( val = arg ...  ) ...`

The [built-in](ABENBUILT_IN_FUNCTIONS.html) rounding functions expect a [decimal floating point number](ABENDECFLOAT_GLOSRY.html) as a main argument `val` and additional arguments that describe how this floating point number is handled. The type of the return value of a rounding function is always `decfloat34`. Within an arithmetic expression, the argument for the decimal floating point number can either be an arithmetic expression or a function. The other arguments must always be specified as numeric data objects.

The class `CL_ABAP_MATH` includes the method `NORMALIZE` for normalizing a decimal floating point object. The mantissa does not have any closing zeros in a normalized floating point number.

-   [Rounding Function](ABENDEC_FLOATING_POINT_ROUND.html)
-   [Rescaling Function](ABENDEC_FLOATING_POINT_RESCALE.html)

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abenmathematical\_functions.html