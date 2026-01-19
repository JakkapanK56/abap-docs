---
title: "ABENINSERT_FUNCTIONS"
description: |
  ABENINSERT_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENINSERT_FUNCTIONS.htm"
abapFile: "ABENINSERT_FUNCTIONS.html"
keywords: ["insert", "if", "data", "ABENINSERT", "FUNCTIONS"]
---

``... insert( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)\ [`sub = substring`](ABENSTRING_FUNCTIONS_SUB.html)\ [[`off = off`](ABENSTRING_FUNCTIONS_OFF_LEN.html)] ) ...``

This [built-in function](ABENBUILT_IN_FUNCTIONS.html) inserts the character string specified in [`substring`](ABENSTRING_FUNCTIONS_SUB.html) into the string specified in [`text`](ABENSTRING_FUNCTIONS_VAL.html), either before the first character or at the optional offset specified [`off`](ABENSTRING_FUNCTIONS_OFF_LEN.html) and returns the corresponding extended result. If `substring` is empty, the unchanged content of `text` is returned. Note that a character string in `substring` of a fixed length containing only blanks is handled like an empty string. This also applies to the predefined constant `space`. For more information, refer to [Trailing Blanks in Character String Processing](ABENSTRING_PROCESSING_TRAIL_BLANKS.html).

The return value has the type `string`.

After the following iteration has been executed, the result is in `result`\\ *X X X X X*.

`CX_SY_RANGE_OUT_OF_BOUNDS`

-   *Cause:* Invalid offset specified in `places`.
    *Runtime error:*\\ `STRING_OFFSET_TOO_LARGE`

DATA(result) = \`XXXXX\`. \\n\\ \\nresult = \\n REDUCE #( INIT r = result \\n FOR j = 1 UNTIL j > strlen( result ) - 1 \\n NEXT r = insert( val = r sub = \` \` off = j \* 2 - 1 ) ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenprocess\_functions.html