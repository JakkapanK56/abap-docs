---
title: "ABENREVERSE_FUNCTIONS"
description: |
  ABENREVERSE_FUNCTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENREVERSE_FUNCTIONS.htm"
abapFile: "ABENREVERSE_FUNCTIONS.html"
keywords: ["data", "ABENREVERSE", "FUNCTIONS"]
---

``... reverse( [`[val =] text`](ABENSTRING_FUNCTIONS_VAL.html)  ) ...``

This [built-in function](ABENBUILT_IN_FUNCTIONS.html) returns a character string that reverses the content of [`text`](ABENSTRING_FUNCTIONS_VAL.html).

The return value has the type `string`.

Returns the Latin alphabet in reverse.

FINAL(abcde) = \`àbcdefghijklmnopqrstuvwxyz\`. \\nFINAL(result) = reverse( abcde ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenprocess\_functions.html