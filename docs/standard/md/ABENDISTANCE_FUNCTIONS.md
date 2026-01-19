---
title: "ABENDISTANCE_FUNCTIONS"
description: |
  ABENDISTANCE_FUNCTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDISTANCE_FUNCTIONS.htm"
abapFile: "ABENDISTANCE_FUNCTIONS.html"
keywords: ["insert", "delete", "if", "class", "data", "ABENDISTANCE", "FUNCTIONS"]
---

``... distance( [`val1 = text1`](ABENSTRING_FUNCTIONS_VAL.html)\ [`val2 = text2`](ABENSTRING_FUNCTIONS_VAL.html)\ [max = max] ) ...``

This [built-in function](ABENBUILT_IN_FUNCTIONS.html) returns the [Levenshtein distance](ABENLEVENSHTEIN_DISTANCE_GLOSRY.html) between two strings [`text1`](ABENSTRING_FUNCTIONS_VAL.html) and [`text2`](ABENSTRING_FUNCTIONS_VAL.html). This distance is the minimum number of insert, delete, and replace operations required to pass one string to another and hence reflects the similarity of the two strings. The return value has the type `i`.

`max` can be used to specify a positive value other than 0, that terminates the calculation of the Levenshtein distance if the distance is greater than `max`. The value `max` is then returned instead. `max` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) with type `i`. If the value of `max` is less than or equal to 0, an exception of the class `CX_SY_STRG_PAR_VAL` is raised. If `max` is not specified, the calculation is not terminated

The result of the following function calls is 0, 1, and 3.

[String Functions, `distance`](ABENSTRING_FUNCTION_DISTANCE_ABEXA.html)

`CX_SY_STRG_PAR_VAL`

-   The complexity of the function increases in line with the product of the lengths of the two strings. The calculation time can be limited by specifying `max`.
-   This function can typically be used to find those words in a word set that are most similar to a word entered in a search using the minimum editing space.

-   *Cause:* Value in `max` is less than or equal to 0.
    *Runtime error:*\\ `STRG_ILLEGAL_PAR`

FINAL(result1) = distance( val1 = \`abcdefg\` val2 = \`abcdefg\` ). \\nFINAL(result2) = distance( val1 = \`abcdefg\` val2 = \`abcXefg\` ). \\nFINAL(result3) = distance( val1 = \`abcdefg\` val2 = \`aXcdXXg\` ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abendescriptive\_functions.html