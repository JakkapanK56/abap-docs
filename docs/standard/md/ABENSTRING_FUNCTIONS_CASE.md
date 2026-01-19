---
title: "ABENSTRING_FUNCTIONS_CASE"
description: |
  ABENSTRING_FUNCTIONS_CASE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_FUNCTIONS_CASE.htm"
abapFile: "ABENSTRING_FUNCTIONS_CASE.html"
keywords: ["if", "case", "data", "ABENSTRING", "FUNCTIONS", "CASE"]
---

`... ( ... case = case ...  ) ...`

Searches and comparisons in string functions are case-sensitive by default, but this can be overridden, if necessary, using the parameter `case`. The parameter `case` requires a constant or a literal of the type `abap_bool` from the type pool `ABAP` with the value of the constants `abap_true` or `abap_false`. If `case` contains the value of `abap_true`, the search is case-sensitive; if it contains the value of `abap_false`, it is not.

The result of the following function calls is 2 and 3.

FINAL(result1) = find( val = \`aAbBcC\` sub = \`B\` case = abap\_false ). \\nFINAL(result2) = find( val = \`aAbBcC\` sub = \`B\` case = abap\_true ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenstring\_functions\_common\_paras.html