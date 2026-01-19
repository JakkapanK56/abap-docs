---
title: "The following program line"
description: |
  has the same meaning as and removes the trailing blanks from a string `txt`. String Functions, `shift` and `substring`(ABENSTRING_FUNCTION_SHIFT_ABEXA.html) `CX_SY_RANGE_OUT_OF_BOUNDS` -   If the parameter `places` is supplied with a numeric value, the corresponding number of characters is removed
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSHIFT_FUNCTIONS.htm"
abapFile: "ABENSHIFT_FUNCTIONS.html"
keywords: ["insert", "if", "case", "class", "data", "ABENSHIFT", "FUNCTIONS"]
---

The shift functions shift the content of a character-like argument.

1\. ``... shift_left( [`[val =] text`](ABENSTRING_FUNCTIONS_VAL.html)\                    [places = places]|[circular = places]|[[`sub = substring`](ABENSTRING_FUNCTIONS_SUB.html)] ) ...``

2\. ``... shift_right( [`[val =] text`](ABENSTRING_FUNCTIONS_VAL.html)\                     [places = places]|[circular = places]|[[`sub = substring`](ABENSTRING_FUNCTIONS_SUB.html)] ) ...``

The [built-in functions](ABENBUILT_IN_FUNCTIONS.html)\\ `shift_left` and `shift_right` shift the character string [`text`](ABENSTRING_FUNCTIONS_VAL.html) to the left or to the right and return the result. The shift depends on the parameter pass as follows:

`places` and `circular` are [numeric expression positions](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) of type `i`.

The return value has the type `string`.

When `places` is specified, the function `shift_right` behaves differently than the statement `SHIFT` with the additions `RIGHT` and `PLACES`. The function `shift_right` reduces the length of the string, but the statement `SHIFT` lengthens it or it remains the same.

The following program line

has the same meaning as

and removes the trailing blanks from a string `txt`.

[String Functions, `shift` and `substring`](ABENSTRING_FUNCTION_SHIFT_ABEXA.html)

`CX_SY_RANGE_OUT_OF_BOUNDS`

-   If the parameter `places` is supplied with a numeric value, the corresponding number of characters is removed on the left or right of the character string and the length of the character string is reduced accordingly. If the value of `places` is negative or longer than the character string, an exception of the class `CX_SY_RANGE_OUT_OF_BOUNDS` is raised.
-   If the parameter `circular` is supplied with a numeric value, the functions behave like `places`, but insert the removed substring at the end or start of the character string.
-   If the parameter `sub` is supplied with a character string in [`substring`](ABENSTRING_FUNCTIONS_SUB.html), all substrings in the character string from `text` are removed on the left or right that match the content of `substring`. The character string from `text` remains unchanged and preserves, for example, blanks if no substrings are found or if `substring` is given an empty string. Note that a character string in `substring` of a fixed length containing only blanks is handled like an empty string. This also applies to the predefined constant `space`. For more information, refer to [Trailing Blanks in Character String Processing](ABENSTRING_PROCESSING_TRAIL_BLANKS.html).
-   If none of the parameter `places`, `circular`, or `sub` are supplied, the functions behave as if the `sub` parameter were passed a blank character. All blank characters to the left or right are removed. In this case, an explicit `val` can also be omitted.

-   *Cause:* Invalid value in `places`.
    *Runtime error:*\\ `STRING_LENGTH_TOO_LARGE` or `STRING_LENGTH_NEGATIVE`

txt = shift\_right( txt ). txt = shift\_right( val = txt sub = \` \` ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenprocess\_functions.html