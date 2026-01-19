---
title: "ABENSTRING_FUNCTIONS_SUB"
description: |
  ABENSTRING_FUNCTIONS_SUB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_FUNCTIONS_SUB.htm"
abapFile: "ABENSTRING_FUNCTIONS_SUB.html"
keywords: ["insert", "if", "data", "types", "ABENSTRING", "FUNCTIONS", "SUB"]
---

`... ( ... sub = substring ...  ) ...`

`substring` is used to pass a character string whose characters are to be searched for or inserted. `substring` is a [character like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). Only arguments with elementary types can be specified.

If a character-like data object with a fixed length is specified, any trailing blanks are ignored.

The behavior of a function when an empty string is specified in `substring` depends on the corresponding function.

The result of the following function call is 2.

FINAL(result) = count( val = 'axaxa' sub = 'x' ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenstring\_functions\_common\_paras.html