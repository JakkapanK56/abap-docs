---
title: "ABENSUBSTRING_FUNCTIONS"
description: |
  ABENSUBSTRING_FUNCTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSUBSTRING_FUNCTIONS.htm"
abapFile: "ABENSUBSTRING_FUNCTIONS.html"
keywords: ["do", "if", "case", "class", "data", "ABENSUBSTRING", "FUNCTIONS"]
---

1\. ``... substring( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)\ [[`off = off`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [[`len = len`](ABENSTRING_FUNCTIONS_OFF_LEN.html)] ) ...``

2\. ``... substring_from( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)\ \{[`sub = substring`](ABENSTRING_FUNCTIONS_SUB.html)\}|\{[`pcre = regex`](ABENSTRING_FUNCTIONS_REGEX.html)\}\                       [[`case = case`](ABENSTRING_FUNCTIONS_CASE.html)]\ [[`occ = occ`](ABENSTRING_FUNCTIONS_OCC.html)]\ [[`len = len`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]  ) ...``

3\. ``... substring_after( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)\ \{[`sub = substring`](ABENSTRING_FUNCTIONS_SUB.html)\}|\{[`pcre = regex`](ABENSTRING_FUNCTIONS_REGEX.html)\}\                        [[`case = case`](ABENSTRING_FUNCTIONS_CASE.html)]\ [[`occ = occ`](ABENSTRING_FUNCTIONS_OCC.html)]\ [[`len = len`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]  ) ...``

4\. ``... substring_before( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)\ \{[`sub = substring`](ABENSTRING_FUNCTIONS_SUB.html)\}|\{[`pcre = regex`](ABENSTRING_FUNCTIONS_REGEX.html)\}\                         [[`case = case`](ABENSTRING_FUNCTIONS_CASE.html)]\ [[`occ = occ`](ABENSTRING_FUNCTIONS_OCC.html)]\ [[`len = len`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]  ) ...``

5\. ``... substring_to( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)\ \{[`sub = substring`](ABENSTRING_FUNCTIONS_SUB.html)\}|\{[`pcre = regex`](ABENSTRING_FUNCTIONS_REGEX.html)\}\                     [[`case = case`](ABENSTRING_FUNCTIONS_CASE.html)]\ [[`occ = occ`](ABENSTRING_FUNCTIONS_OCC.html)]\ [[`len = len`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]  ) ...``

The [built-in](ABENBUILT_IN_FUNCTIONS.html) substring functions determine a substring in the argument [`text`](ABENSTRING_FUNCTIONS_VAL.html) and return it.

The substring is determined as follows:

The return value has the type `string` accordingly.

The return values of the following function calls are: *CD*, *CDEFGH*, *EFGH*, *AB*, and *ABCD*.

`CX_SY_RANGE_OUT_OF_BOUNDS`

`CX_SY_REGEX_TOO_COMPLEX`

`CX_SY_STRG_PAR_VAL`

-   The function `substring` uses the offset [`off`](ABENSTRING_FUNCTIONS_OFF_LEN.html) and the length [`len`](ABENSTRING_FUNCTIONS_OFF_LEN.html) to return a certain substring. At least one of the parameters `off` or `len` must be specified.
-   The function `substring_from` searches `text` for the match specified in [`occ`](ABENSTRING_FUNCTIONS_OCC.html) with the character string specified in [`substring`](ABENSTRING_FUNCTIONS_SUB.html) or with the [regular expression](ABENREGEX_SYNTAX.html) specified in [`regex`](ABENSTRING_FUNCTIONS_REGEX.html) and returns the subarea of the length [`len`](ABENSTRING_FUNCTIONS_OFF_LEN.html) from the offset of the occurrence.
-   If the parameter `pcre` is supplied, `regex` must contain a [PCRE regular expression](ABENREGEX_PCRE_SYNTAX.html). A regular expression in PCRE syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind `#`. In order to include whitespace and `#` into a pattern, they must be escaped or the extended mode must be switched of with [`(?-x)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) in the regular expression.
-   If `len` is not specified, the substring is returned to the end of the character string. If `substring` is empty, an exception of the class `CX_SY_STRG_PAR_VAL` is raised. The search is case-sensitive by default, but this can be overridden using the parameter `case`. If no substring is found, the return value is empty.
-   The function `substring_after` works in the same way as `substring_from`, but the subarea plus the length of the substring found is returned, from the offset of the occurrence.
-   The function `substring_before` works in the same way as `substring_from`, but the subarea of the length [`len`](ABENSTRING_FUNCTIONS_OFF_LEN.html) is returned before the offset of the occurrence. If `len` is not specified, the subarea is formed from the start of the character string.
-   The function `substring_to` works in the same way as `substring_before`, but the subarea before the offset of the occurrence plus the length of the substring found is returned.

-   The performance of the substring functions is not as good as a direct [substring access](ABENOFFSET_LENGTH.html). They do, however, make it possible to use [expressions](ABENEXPRESSION_GLOSRY.html) in all operand positions and they allow searches for substrings that match regular expressions.
-   Besides `pcre`, also the obsolete parameter [`regex`](ABENSTRING_FUNCTIONS_REGEX_OBS.html) can be used. Then an obsolete [POSIX regular expression](ABENREGEX_POSIX_SYNTAX.html) must be passed.

-   *Cause:* Illegal offset or length specified in `off` and `len`.
    *Runtime error:*\\ `STRING_OFFSET_TOO_LARGE`

-   *Cause:* More information: [Exceptions in Regular Expressions](ABENREGEX_EXCEPTIONS.html).
    *Runtime error:*\\ `REGEX_TOO_COMPLEX`

-   *Cause:* Substring in `sub` or regular expression in `regex` is empty or occurrence in `occ` is 0.
    *Runtime error:*\\ `STRG_ILLEGAL_PAR`

DATA result TYPE string. \\n... \\nresult = substring( val = 'ABCDEFGH' off = 2 len = 2 ). \\n... \\nresult = substring\_from( val = 'ABCDEFGH' sub = 'CD' ). \\n... \\nresult = substring\_after( val = 'ABCDEFGH' sub = 'CD' ). \\n... \\nresult = substring\_before( val = 'ABCDEFGH' sub = 'CD' ). \\n... \\nresult = substring\_to( val = 'ABCDEFGH' sub = 'CD' ). \\n... abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenprocess\_functions.html