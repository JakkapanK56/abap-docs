---
title: "ABENCASE_FUNCTIONS"
description: |
  ABENCASE_FUNCTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCASE_FUNCTIONS.htm"
abapFile: "ABENCASE_FUNCTIONS.html"
keywords: ["insert", "if", "case", "class", "data", "ABENCASE", "FUNCTIONS"]
---

1\. ``... to_upper( [`[val =] text`](ABENSTRING_FUNCTIONS_VAL.html) ) ...``

2\. ``... to_lower( [`[val =] text`](ABENSTRING_FUNCTIONS_VAL.html) ) ...``

3\. ``... to_mixed( [`[val =] text`](ABENSTRING_FUNCTIONS_VAL.html)\ [sep = sep]\ [case = case]\ [min = min] ) ...``

4\. ``... from_mixed( [`[val =] text`](ABENSTRING_FUNCTIONS_VAL.html)\ [sep = sep]\ [case = case]\ [min = min] ) ...``

These [built-in functions](ABENBUILT_IN_FUNCTIONS.html) return the character string from [`text`](ABENSTRING_FUNCTIONS_VAL.html) after it has been converted in accordance with the following case rules:

`sep` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). If they have a fixed length, trailing blanks are ignored. `min` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) of type `i`. `case` expects a character-like data object with fixed length. `val =` can be omitted only if no arguments are specified for the optional parameters. If `sep` is an empty string or if `min` is negative, an exception of class `CX_SY_STRG_PAR_VAL` is raised.

The return value has the type `string`.

The functions `to_mixed` and `from_mixed` are intended for transforming standard ABAP naming conventions for names with underscores to standard Java naming conventions with uppercase and lowercase letters (Mixed Case Style and Camel Case Style) and vice versa.

Outputs the Latin alphabet in lowercase letters.

[String Functions, `to_mixed` and `from_mixed`](ABENSTRING_FUNCTION_MIXED_ABEXA.html)

`CX_SY_STRG_PAR_VAL`

-   The function `to_upper` transforms all letters in the character string to uppercase letters.
-   The function `to_lower` transforms all letters in the character string to lowercase letters.
-   The function `to_mixed` transforms all letters in the character string to lowercase letters from the second position. Then, from left to right from the second position, it removes occurrences of the first character specified in `sep` from the character string and transforms the next letter to an uppercase letter. The default value for separator `sep` is an underscore (`_`). If `case` is not specified, the first character of the string remains unchanged. If `case` is specified and the first character of `case` is an uppercase letter, the first character in the string is also uppercase and otherwise lowercase. A positive number can be passed to `min` to specify a minimum number of characters that must appear before a separator from the start of the string or since the last replacement so that it works as described. The default value for `min` is 1.
-   The function `from_mixed` inserts the first character specified in `sep` before each uppercase letter from left to right and from the second position. The default value for separator `sep` is an underscore (`_`). If `case` is not specified or if the first character in `case` is an uppercase letter, the entire string is transformed to uppercase, otherwise to lowercase. A positive number can be passed to `min` to specify a minimum number of characters that must appear before an uppercase letter from the start of the string or since the last insert so that a separator is inserted. The default value for `min` is 1.

-   *Cause:* The separator in `sep` is empty or the minimum number in `min` is negative.
    *Runtime error:*\\ `STRG_ILLEGAL_PAR`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(abcde) = \`ABCDEFGHIJKLMNOPQRSTUVXYZ\`. \\nout->write( to\_lower( abcde ) ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenprocess\_functions.html