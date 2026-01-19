---
title: "ABENSTRING_FUNCTIONS_OFF_LEN"
description: |
  ABENSTRING_FUNCTIONS_OFF_LEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_FUNCTIONS_OFF_LEN.htm"
abapFile: "ABENSTRING_FUNCTIONS_OFF_LEN.html"
keywords: ["if", "class", "data", "ABENSTRING", "FUNCTIONS", "OFF", "LEN"]
---

`... ( ... off = off len = len ...  ) ...`

`off` is used to pass an [offset](ABENOFFSET_GLOSRY.html) and `len` is used to pass a length. In functions where both `off` and `len` can be passed, they determine the subarea in which a string is to be processed.

`off` and `len` are [numeric expression positions](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) with the type `i`.

The default value of `off` is generally 0 and the default value of `len` is generally the length of the string minus a predefined offset or an offset passed using `off`. Only if a negative argument is passed for the occurrence [`occ`](ABENSTRING_FUNCTIONS_OCC.html) simultaneously for functions where this is possible, is the default value of `off` the length of the string and the default value of `len` the value of the associated offset.

If the value of `off` or `len` is negative, an offset defined using `off` is outside the string, or a subarea defined using `off` and `len` is not completely contained in the string, an exception of the class `CX_SY_RANGE_OUT_OF_BOUNDS` is raised.

The result of the following function calls is 17 and 12.

FINAL(result1) = count( val = \`Intro: blahblahblah\` \\n pcre = \`\\\\w\` ). \\nFINAL(result2) = count( val = \`Intro: blahblahblah\` \\n pcre = \`\\\\w\` off = 6 ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenstring\_functions\_common\_paras.html