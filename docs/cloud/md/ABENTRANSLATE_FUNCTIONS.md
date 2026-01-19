---
title: "ABENTRANSLATE_FUNCTIONS"
description: |
  ABENTRANSLATE_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTRANSLATE_FUNCTIONS.htm"
abapFile: "ABENTRANSLATE_FUNCTIONS.html"
keywords: ["if", "data", "ABENTRANSLATE", "FUNCTIONS"]
---

``... translate( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html) from = from to = to ) ...``

This [built-in function](ABENBUILT_IN_FUNCTIONS.html) returns the character string from [`text`](ABENSTRING_FUNCTIONS_VAL.html) where each character that occurs in `from` is replaced by the character that occurs in the same place in `to` as in `from`. If `to` is shorter than `from`, the surplus characters from `from` are removed from the character string. If `from` is an empty string, the content of `text` is returned unchanged.

`from` and `to` are [character-like expression positions](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). If they have a fixed length, trailing blanks are ignored.

The return value has the type `string`.

The return value of the following function call is *Horray!*.

FINAL(result) = translate( \\n val = \`---Hur-rah!---\` from = \`uh-\` to = \`oy\` ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenprocess\_functions.html