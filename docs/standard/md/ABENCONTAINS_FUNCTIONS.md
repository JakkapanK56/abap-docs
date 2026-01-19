---
title: "ABENCONTAINS_FUNCTIONS"
description: |
  ABENCONTAINS_FUNCTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONTAINS_FUNCTIONS.htm"
abapFile: "ABENCONTAINS_FUNCTIONS.html"
keywords: ["do", "if", "case", "class", "data", "ABENCONTAINS", "FUNCTIONS"]
---

1\. ``... contains( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)\ [`sub|start|end = substring`](ABENSTRING_FUNCTIONS_SUB.html)\ [[`case = case`](ABENSTRING_FUNCTIONS_CASE.html)]\                  [[`off = off`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [[`len = len`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [occ = occ] ) ...``

2\. ``... contains( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)\ [`pcre|xpath = regex`](ABENSTRING_FUNCTIONS_REGEX.html)\ [[`case = case`](ABENSTRING_FUNCTIONS_CASE.html)]\                  [[`off = off`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [[`len = len`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [occ = occ] ) ...``

3\. ``... contains_any_of( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)\ [`sub|start|end = substring`](ABENSTRING_FUNCTIONS_SUB.html)\                         [[`off = off`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [[`len = len`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [occ = occ] ) ...``

4\. ``... contains_any_not_of( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)\ [`sub|start|end = substring`](ABENSTRING_FUNCTIONS_SUB.html)\                             [[`off = off`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [[`len = len`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [occ = occ] ) ...``

These [built-in](ABENBUILT_IN_FUNCTIONS.html)\\ [predicate functions](ABENPREDICATE_FUNCTION_GLOSRY.html) return a [truth value](ABENTRUTH_VALUE_GLOSRY.html) resulting from a condition for the argument [`text`](ABENSTRING_FUNCTIONS_VAL.html).

`occ` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) of type `i` and its default value is 1. Specifying a value less than or equal to 0 raises an exception of the class `CX_SY_STRG_PAR_VAL`.

The `IF` block is reached in the following code section, since neither the first nor the last character in `html` occur in the system field `sy-abcde`.

The following function call checks whether a type `c` field contains any non-digit character.

`CX_SY_RANGE_OUT_OF_BOUNDS`

`CX_SY_REGEX_TOO_COMPLEX`

`CX_SY_STRG_PAR_VAL`

-   The variants of the function `contains` with the parameters `sub`, `start`, or `end` scan a search range defined by [`off`](ABENSTRING_FUNCTIONS_OFF_LEN.html) and [`len`](ABENSTRING_FUNCTIONS_OFF_LEN.html) in `text` for matches with the string specified in [`substring`](ABENSTRING_FUNCTIONS_SUB.html). The return value is true if at least the number of matches specified in `occ` is found. The search is case-sensitive by default, but this can be overridden using the parameter [`case`](ABENSTRING_FUNCTIONS_CASE.html). If `substring` is passed to `start` or `end`, the matches must occur directly one after another either at the start or at the end of the search range. `sub`, on the other hand, allows the matches to occur anywhere in the search range. If `substring` is empty, an exception of the class `CX_SY_STRG_PAR_VAL` is raised.
-   The variants of the function `contains` with the parameter [`pcre`](ABENSTRING_FUNCTIONS_REGEX.html) or [`xpath`](ABENSTRING_FUNCTIONS_REGEX.html) scan a search range defined by [`off`](ABENSTRING_FUNCTIONS_OFF_LEN.html) and [`len`](ABENSTRING_FUNCTIONS_OFF_LEN.html) in `text` for matches with the [regular expression](ABENREGEX_SYNTAX.html) specified in [`regex`](ABENSTRING_FUNCTIONS_REGEX.html).

-   If the parameter `pcre` is supplied, `regex` must contain a [PCRE regular expression](ABENREGEX_PCRE_SYNTAX.html).
-   If the parameter `xpath` is supplied, `regex` must contain a [XPath regular expression](ABENREGEX_XPATH_SYNTAX.html).

-   A regular expression in PCRE or XPath syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind `#`. In order to include whitespace and `#` in a pattern, they must be escaped or the extended mode must be switched of with [`(?-x)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) in the regular expression.
-   The return value is true if at least the number of matches specified in `occ` is found. The search is case-sensitive by default, but this can be overridden using the parameter [`case`](ABENSTRING_FUNCTIONS_CASE.html).
-   The function `contains_any_of` has the same effect as `contains`, but does not check for the occurrences of the entire string in [`substring`](ABENSTRING_FUNCTIONS_SUB.html). Instead, it checks for the individual characters in `substring`, which is always case-sensitive. The return value is true if `text` contains at least the set of characters specified in `occ`. If `start` or `end` are specified, the characters must be at the start or at the end of the search range in any order, whereas in `sub` they can be anywhere.
-   The function `contains_any_not_of` has the same effect as `contains_any_of` but does not require the characters from [`substring`](ABENSTRING_FUNCTIONS_SUB.html). Instead, it requires any characters that are not in `substring`.

-   The parameter `occ` has a different meaning here than in other functions used for searches.
-   Besides `pcre` and `xpath`, also the obsolete parameter [`regex`](ABENSTRING_FUNCTIONS_REGEX_OBS.html) can be used. Then an obsolete [POSIX regular expression](ABENREGEX_POSIX_SYNTAX.html) must be passed.

-   *Cause:* Illegal offset or length specified in `off` and `len`.
    *Runtime error:*\\ `STRING_OFFSET_TOO_LARGE`

-   *Cause:* See [Exceptions in Regular Expressions](ABENREGEX_EXCEPTIONS.html).
    *Runtime error:*\\ `REGEX_TOO_COMPLEX`

-   *Cause:* A substring in `substring` or regular expression in `regex` is empty or the number of occurrences in `occ` is less than or equal to 0.
    *Runtime error:*\\ `STRG_ILLEGAL_PAR`

DATA html TYPE string. \\n\\ \\nhtml = 'Text'. \\nFINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'. \\nIF contains\_any\_not\_of( val = to\_upper( html ) start = abcde ) AND \\n contains\_any\_not\_of( val = to\_upper( html ) end = abcde ). \\n ... \\nENDIF. DATA postal\_code TYPE c LENGTH 5. \\ncl\_demo\_input=>request( CHANGING field = postal\_code ). \\n\\ \\nIF contains( val = postal\_code \\n pcre = \`\\\\D\` ). \\n cl\_demo\_output=>display( \`Invalid postal code.\` ). \\n RETURN. \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenpredicate.html abenpredicate\_functions.html abenpredicate\_functions\_strgs.html