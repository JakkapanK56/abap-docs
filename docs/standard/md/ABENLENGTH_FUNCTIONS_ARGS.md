---
title: "ABENLENGTH_FUNCTIONS_ARGS"
description: |
  ABENLENGTH_FUNCTIONS_ARGS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLENGTH_FUNCTIONS_ARGS.htm"
abapFile: "ABENLENGTH_FUNCTIONS_ARGS.html"
keywords: ["do", "if", "class", "data", "ABENLENGTH", "FUNCTIONS", "ARGS"]
---

This [built-in](ABENBUILT_IN_FUNCTIONS.html) length function has a named character-like parameter.

`... char_off( val = text add = pos [off = off] ) ...`

The function returns the offset of the character in `text` that is `pos` places away from the character in the offset specified in `off`. The default value for `off` is 0. `text` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). `pos` and `off` are [numeric expression positions](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) with the type `i`.

This function can be specified in [general](ABENGENERAL_EXPR_POSITION_GLOSRY.html) and [numeric expression positions](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html). The return value has the type `i`.

The value of `pos` can be positive and negative and describes the places to the right or on the left accordingly. If `pos` identifies a position outside of `text`, the function returns the value -1. If `off` is greater than the length of `text`, an exception of the class `CX_SY_RANGE_OUT_OF_BOUNDS` is raised.

The function `char_off` was suitable for finding the correct offsets of characters in non-Unicode double-byte systems.

The result of the following function call is 7.

FINAL(result) = char\_off( val = \`12345678\` add = 4 off = 3 ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abendescriptive\_functions.html