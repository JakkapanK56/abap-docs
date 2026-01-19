---
title: "ABENSTRING_FUNCTIONS_VAL"
description: |
  ABENSTRING_FUNCTIONS_VAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_FUNCTIONS_VAL.htm"
abapFile: "ABENSTRING_FUNCTIONS_VAL.html"
keywords: ["if", "method", "data", "types", "ABENSTRING", "FUNCTIONS", "VAL"]
---

`... ( ... val = text ...  ) ...`

The argument `text` passes the text string to be processed by the function to the named parameter `val`. `text` is an extended [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). Functional method calls, table expressions, and constructor expressions whose return value is convertible to the type `string` can also be specified. Only elementary data types can be processed.

If a character-like data object with a fixed length is specified, any trailing blanks are ignored. Non-character-like return values are converted to the data type `string`.

The following two function calls are equivalent, since the specification of `val =` in `to_upper` is optional.

-   The conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) can be applied to process those non-elementary data types that can be converted to an elementary character-like data type, such as structures with character-like-only flat components.
-   Explicit specification of `val =` can also be optional.

FINAL(result1) = to\_upper( val = 'aAbBcC' ). \\nFINAL(result2) = to\_upper( 'aAbBcC' ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenstring\_functions\_common\_paras.html