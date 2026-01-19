---
title: "ABENREPEAT_FUNCTIONS"
description: |
  ABENREPEAT_FUNCTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENREPEAT_FUNCTIONS.htm"
abapFile: "ABENREPEAT_FUNCTIONS.html"
keywords: ["if", "class", "data", "ABENREPEAT", "FUNCTIONS"]
---

``... repeat( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)  occ = occ ) ...``

This [built-in function](ABENBUILT_IN_FUNCTIONS.html) returns a character string that contains the content of [`text`](ABENSTRING_FUNCTIONS_VAL.html) as many times as specified in `occ`. If `text` is an empty string or if `occ` contains the value 0, an empty string is returned.

`occ` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) with type `i`. If the value of `occ` is negative, an exception of the class `CX_SY_STRG_PAR_VAL` is raised.

The return value has the type `string`.

The parameter `occ` has a different meaning here than in functions used for searching.

The function `repeat` is used to create a string with ten blanks.

`CX_SY_STRG_PAR_VAL`

-   *Cause:* Occurrences in `occ` are less than 0.
    *Runtime error:*\\ `STRG_ILLEGAL_PAR`

FINAL(result) = repeat( val = \` \` occ = 10 ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenprocess\_functions.html