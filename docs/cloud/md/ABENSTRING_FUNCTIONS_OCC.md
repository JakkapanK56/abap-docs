---
title: "ABENSTRING_FUNCTIONS_OCC"
description: |
  ABENSTRING_FUNCTIONS_OCC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTRING_FUNCTIONS_OCC.htm"
abapFile: "ABENSTRING_FUNCTIONS_OCC.html"
keywords: ["if", "case", "class", "data", "ABENSTRING", "FUNCTIONS", "OCC"]
---

`... ( ... occ = occ ...  ) ...`

In string functions where searches are performed, the parameter `occ` specifies the occurrence of a match. `occ` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) of type `i`.

If `occ` is positive, the occurrences are counted from the left; if `occ` is negative, they are counted from the right. The values 1, 2, .... indicate the first, second, ... occurrences. The values -1, -2, .... indicate the last, last but one, ... occurrences.

The default value of `occ` is 1. Except in the case of the replacement function [`replace`](ABENREPLACE_FUNCTIONS.html), the value 0 raises an exception from the class `CX_SY_STRG_PAR_VAL`. If `replace` is used, the value 0 replaces all occurrences.

The sign of `occ` also affects the default values of [`off`](ABENSTRING_FUNCTIONS_OFF_LEN.html) and [`len`](ABENSTRING_FUNCTIONS_OFF_LEN.html).

The result of the following function calls is `UX` and `XU`.

FINAL(result1) = replace( val = \`XX\` sub = \`X\` with = \`U\` occ = 1 ). \\nFINAL(result2) = replace( val = \`XX\` sub = \`X\` with = \`U\` occ = -1 ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenstring\_functions\_common\_paras.html