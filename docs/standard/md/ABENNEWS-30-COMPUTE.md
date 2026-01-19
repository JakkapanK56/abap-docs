---
title: "ABENNEWS-30-COMPUTE"
description: |
  ABENNEWS-30-COMPUTE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-30-COMPUTE.htm"
abapFile: "ABENNEWS-30-COMPUTE.html"
keywords: ["if", "try", "types", "ABENNEWS", "COMPUTE"]
---

[1\. Exponentiation](#ABAP_MODIFICATION_1@4@)

[2\. New Arithmetic Functions](#ABAP_MODIFICATION_2@4@)

The [`COMPUTE`](ABAPCOMPUTE_ARITH.html) statement now supports the operator `**`. Previously, the exponential operation `X ** Y` was awkward to express. Either repeated multiplication had to be used (if Y was an integer) or the expression `EXP( Y * LOG( X ) )` for any exponent `Y`.

Most common arithmetic functions are now supported. The functions `ABS`, `SIGN`, `CEIL`, `FLOOR`, `TRUNC`, and `FRAC` are suitable for all numeric types (`I`, `P`, and `F`). The functions `SIN` and `COS`, intended mainly for floating point operands, were already available, as well as `EXP`, `LOG`, and `SQRT`. The following have been added:

-   The trigonometry functions `TAN`, `ACOS`, `ASIN`, and `ATAN`
-   The hyperbola functions `COSH`, `SINH`, and `TANH`
-   The logarithm function `LOG10`

abenabap.html abennews.html abennews-30.html