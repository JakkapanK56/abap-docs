---
title: "ABENSEARCH_FUNCTIONS"
description: |
  ABENSEARCH_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSEARCH_FUNCTIONS.htm"
abapFile: "ABENSEARCH_FUNCTIONS.html"
keywords: ["if", "case", "class", "data", "ABENSEARCH", "FUNCTIONS"]
---

1\. ``... find( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)\ \{[`sub = substring`](ABENSTRING_FUNCTIONS_SUB.html)\}|\{[`pcre = regex`](ABENSTRING_FUNCTIONS_REGEX.html)\}\ [[`case = case`](ABENSTRING_FUNCTIONS_CASE.html)]\             [[`off = off`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [[`len = len`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [[`occ = occ`](ABENSTRING_FUNCTIONS_OCC.html)] ) ...``

2\. ``... find_end( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)\ \{[`sub = substring`](ABENSTRING_FUNCTIONS_SUB.html)\}|\{[`pcre = regex`](ABENSTRING_FUNCTIONS_REGEX.html)\}\ [[`case = case`](ABENSTRING_FUNCTIONS_CASE.html)]\                 [[`off = off`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [[`len = len`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [[`occ = occ`](ABENSTRING_FUNCTIONS_OCC.html)] ) ...``

3\. ``... find_any_of( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)\ [`sub = substring`](ABENSTRING_FUNCTIONS_SUB.html)\                    [[`off = off`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [[`len = len`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [[`occ = occ`](ABENSTRING_FUNCTIONS_OCC.html)] ) ...``

4\. ``... find_any_not_of( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)  [`sub = substring`](ABENSTRING_FUNCTIONS_SUB.html)\                        [[`off = off`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [[`len = len`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [[`occ = occ`](ABENSTRING_FUNCTIONS_OCC.html)] ) ...``

The [built-in](ABENBUILT_IN_FUNCTIONS.html) search functions `find` and `find_...` search [`text`](ABENSTRING_FUNCTIONS_VAL.html) for the characters specified in [`substring`](ABENSTRING_FUNCTIONS_SUB.html) or for a match with a [regular expression](ABENREGEX_SYNTAX.html) specified in [`regex`](ABENSTRING_FUNCTIONS_REGEX.html), where the optional parameters [`off`](ABENSTRING_FUNCTIONS_OFF_LEN.html) and [`len`](ABENSTRING_FUNCTIONS_OFF_LEN.html) determine the subarea to be searched and the occurrence of the match can be specified in the optional parameter [`occ`](ABENSTRING_FUNCTIONS_OCC.html).

If the parameter `pcre` is used, `regex` must contain a [PCRE regular expression](ABENREGEX_PCRE_SYNTAX.html). A regular expression in PCRE syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind `#`. In order to include whitespace and `#` into a pattern, they must be escaped or the extended mode must be switched of with [`(?-x)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) in the regular expression.

The return value has the type `i` and is filled as follows:

If a search is not successful, all functions return the value -1.

The optional parameters [`off`](ABENSTRING_FUNCTIONS_OFF_LEN.html), [`len`](ABENSTRING_FUNCTIONS_OFF_LEN.html), and [`occ`](ABENSTRING_FUNCTIONS_OCC.html) have the following meaning when combined:

The occurrence of the match specified by `occ` refers to the search range defined by `off` and `len`.

The result of the following function calls is 3, 6, 3, and 3.

[String Functions, `find` and `substring`](ABENSTRING_FUNCTION_FIND_ABEXA.html)

`CX_SY_RANGE_OUT_OF_BOUNDS`

`CX_SY_REGEX_TOO_COMPLEX`

`CX_SY_STRG_PAR_VAL`

-   The function `find` searches for the exact substring specified in [`substring`](ABENSTRING_FUNCTIONS_SUB.html) or for a match with the regular expression [`regex`](ABENSTRING_FUNCTIONS_REGEX.html) and returns the offset of the occurrence with respect to the entire length of `text`. The search is case-sensitive by default, but this can be overridden using the parameter [`case`](ABENSTRING_FUNCTIONS_CASE.html). If `substring` is empty, an exception from the class `CX_SY_STRG_PAR_VAL` is raised.
-   The function `find_end` searches like `find`, but it returns the sum of the offset of the occurrence and the length of the found match with the regular expression.
-   The function `find_any_of` returns the offset of the occurrence of any character contained in [`substring`](ABENSTRING_FUNCTIONS_SUB.html), and is always case-sensitive. If `substring` is empty, the value -1 is returned.
-   The function `find_any_not_of` returns the offset of the found occurrence of any character not in [`substring`](ABENSTRING_FUNCTIONS_SUB.html), and is always case-sensitive. If `substring` is empty, the value -1 is returned.

-   If `occ` is positive, the subarea defined by `off` and `len` is searched from left to right.
-   If `occ` is negative, the subarea defined by `off` and `len` is searched from right to left.

-   Using the related search functions [`count`](ABENCOUNT_FUNCTIONS.html) and [`count_...`](ABENCOUNT_FUNCTIONS.html), it is possible to determine the total number of occurrences instead of an offset.
-   Like the statement [`FIND`](ABAPFIND.html), the search functions can be faster than the comparison operator [`CS`](ABENLOGEXP_STRINGS.html) by some magnitude.
-   Besides `pcre`, also the obsolete parameter [`regex`](ABENSTRING_FUNCTIONS_REGEX_OBS.html) can be used. Then an obsolete [POSIX regular expression](ABENREGEX_POSIX_SYNTAX.html) must be passed.

-   *Cause:* Illegal offset or length specified in `off` and `len`.
    *Runtime error:*\\ `STRING_OFFSET_TOO_LARGE`

-   *Cause:* More information: [Exceptions in Regular Expressions](ABENREGEX_EXCEPTIONS.html).
    *Runtime error:*\\ `REGEX_TOO_COMPLEX`

-   *Cause:* Substring in `sub` or regular expression in `regex` is empty or occurrence in `occ` is 0.
    *Runtime error:*\\ `STRG_ILLEGAL_PAR`

FINAL(result1) = find( val = \`xxx123yyy\` pcre = \`\\\\d+\` ). \\nFINAL(result2) = find\_end( val = \`xxx123yyy\` pcre = \`\\\\d+\` ). \\nFINAL(result3) = find\_any\_of( val = \`xxx123yyy\` sub = \`123\` ). \\nFINAL(result4) = find\_any\_not\_of( val = \`xxx123yyy\` sub = \`x\` ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abendescriptive\_functions.html