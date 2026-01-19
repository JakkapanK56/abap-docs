---
title: "ABENSCALE_GLOSRY"
description: |
  ABENSCALE_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSCALE_GLOSRY.htm"
abapFile: "ABENSCALE_GLOSRY.html"
keywords: ["if", "ABENSCALE", "GLOSRY"]
---

Property of a [decimal floating point number](ABENDECFLOAT_GLOSRY.html). A decimal floating point number can be viewed as an integer number of a given length that is scaled by dividing through a power of 10. This defines the number of [decimal places](ABENDECIMAL_PLACE_GLOSRY.html). In this sense, the negative exponent of a decimal floating point number is called scaling, which is applied to the mantissa. If the scaling is positive, it is equivalent to the number of decimal places. Decimal floating point numbers with the same value can have different scaling. Operations on decimal floating point numbers usually retain the scaling and therefore the number of decimal places. A [built-in function](ABENBUILTIN_FUNCTION_GLOSRY.html) for changing the scaling is [`rescale`](ABENDEC_FLOATING_POINT_FUNCTIONS.html). See also [precision](ABENPRECISION_GLOSRY.html).

ABENABALA\_GLOSSARY.html ABENABAP\_GLOSSARY.html