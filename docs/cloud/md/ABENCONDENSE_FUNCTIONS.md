---
title: "ABENCONDENSE_FUNCTIONS"
description: |
  ABENCONDENSE_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONDENSE_FUNCTIONS.htm"
abapFile: "ABENCONDENSE_FUNCTIONS.html"
keywords: ["do", "if", "data", "ABENCONDENSE", "FUNCTIONS"]
---

``... condense( [`[val =] text`](ABENSTRING_FUNCTIONS_VAL.html)\ [del = del]\ [from = from]\ [to = to] ) ...``

This [built-in function](ABENBUILT_IN_FUNCTIONS.html) returns a condensed content of [`text`](ABENSTRING_FUNCTIONS_VAL.html). The function works as follows:

The default values for `del`, `from`, and `to` are one blank each. If neither `del`, `from`, nor `to` are specified, `val =` can also be omitted. Then, the `condense` function first removes any leading and trailing blanks and then all substrings of the remaining character string that contain nothing but blanks are replaced by exactly one blank.

`del`, `from`, and `to` are [character-like expression positions](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). If these have a fixed length, trailing blanks are ignored.

The return value has the type `string`.

The return values of the following functions are *abc\_def*, *abc\_\_\_def*, *abcdef* and *abcXdef*, where *\_* stands for a blank.

The return value of the following function call is *Rock'n'Roll*.

-   Comparison with the [`CONDENSE`](ABAPCONDENSE.html) statement:

-   When `del`, `from`, and `to` are not specified or their default values (one blank) are passed, the `condense` function works in the same way as the [`CONDENSE`](ABAPCONDENSE.html) statement without the `NO-GAPS` addition.
-   When for `del` and `from` their default values (one blank) are passed and for `to` an empty string is passed, the `condense` function works in the same way as the [`CONDENSE`](ABAPCONDENSE.html) statement with the `NO-GAPS` addition.

-   When using default values, the effect of condensing substrings containing nothing than blanks to one blank, comes from applying the default values for `from` and `to` and has nothing to do with the value of `del`.
-   For removing the leading and trailing blanks without affecting the remaining character string, you can use the default value for `del` and an empty string for `from`. The latter must be specified explicitly, because the default value (blank) causes substrings consisting of blanks to be replaced by the first character from `to`, which also is a blank.
-   Specifying a text field literal `' '` containing one blank for `del`, `from`, and `to` is the same as specifying ` `` ` but not the same as\` `` ` ` ``. Only the latter represents the default value.

1.  First, all leading and trailing characters are removed, that are specified in `del`. If `del` is an empty string, no leading and trailing characters are removed.
2.  Second, in the remaining string all substrings composed of characters specified in `from` are replaced with the first character of the string specified in `to`. If `from` is an empty string, no characters are replaced. If `to` is an empty string, the characters specified in `from` are removed.

DATA result TYPE string. \\n\\ \\nresult = condense( val = \` abc def \` ). \\n\\ \\nresult = condense( val = \` abc def \` from = \`\` ). \\n\\ \\nresult = condense( val = \` abc def \` to = \`\` ). \\n\\ \\nresult = condense( val = \`XXabcXXXdefXX\` \\n del = 'X' from = 'X' to = 'X' ). FINAL(result) = condense( val = \` Rock'xxx'Roller\` \\n del = \`re \` \\n from = \`x\` to = \`n\` ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenprocess\_functions.html