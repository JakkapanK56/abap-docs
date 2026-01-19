---
title: "ABENCOUNT_FUNCTIONS"
description: |
  ABENCOUNT_FUNCTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCOUNT_FUNCTIONS.htm"
abapFile: "ABENCOUNT_FUNCTIONS.html"
keywords: ["if", "case", "class", "data", "ABENCOUNT", "FUNCTIONS"]
---

1\. ``... count( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)\ \{[`sub = substring`](ABENSTRING_FUNCTIONS_SUB.html)\}|\{[`pcre = regex`](ABENSTRING_FUNCTIONS_REGEX.html)\}\ [[`case = case`](ABENSTRING_FUNCTIONS_CASE.html)]\               [[`off = off`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [[`len = len`](ABENSTRING_FUNCTIONS_OFF_LEN.html)] ) ...``

2\. ``... count_any_of( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)  [`sub = substring`](ABENSTRING_FUNCTIONS_SUB.html)\                      [[`off = off`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [[`len = len`](ABENSTRING_FUNCTIONS_OFF_LEN.html)] ) ...``

3\. ``... count_any_not_of( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)  [`sub = substring`](ABENSTRING_FUNCTIONS_SUB.html)\                          [[`off = off`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [[`len = len`](ABENSTRING_FUNCTIONS_OFF_LEN.html)] ) ...``

The [built-in](ABENBUILT_IN_FUNCTIONS.html) search functions `count` and `count_...` search [`text`](ABENSTRING_FUNCTIONS_VAL.html) in the same way as the corresponding search functions [`find`](ABENSEARCH_FUNCTIONS.html) and [`find_...`](ABENSEARCH_FUNCTIONS.html), either in the entire string [`text`](ABENSTRING_FUNCTIONS_VAL.html) or in a subarea defined using [`off`](ABENSTRING_FUNCTIONS_OFF_LEN.html) and [`len`](ABENSTRING_FUNCTIONS_OFF_LEN.html) for characters specified in [`substring`](ABENSTRING_FUNCTIONS_SUB.html) or for a match with a [regular expression](ABENREGEX_SYNTAX.html) specified in [`regex`](ABENSTRING_FUNCTIONS_REGEX.html). Instead of an offset, they return the number of all occurrences.

If the parameter `pcre` is supplied, `regex` must contain a [PCRE regular expression](ABENREGEX_PCRE_SYNTAX.html). A regular expression in PCRE syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind `#`. In order to include whitespace and `#` in a pattern, they must be escaped or the extended mode must be switched of with [`(?-x)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) in the regular expression.

The return value has the type `i`.

Besides `pcre`, also the obsolete parameter [`regex`](ABENSTRING_FUNCTIONS_REGEX_OBS.html) can be used. Then an obsolete [POSIX regular expression](ABENREGEX_POSIX_SYNTAX.html) must be passed.

The result of the following function calls is 1, 3, and 6.

The result of the first counting is 2 because the [PCRE regular expression](ABENREGEX_PCRE_SYNTAX.html) handles the [surrogate pair](ABENSURROGATE_PAIR_GLOSRY.html) in the character string as two characters by default. When counting with a regular expression that is introduced with `(*UTF)`, the result is 1, because the surrogate pair is interpreted as one [UTF-16](ABENUTF16_GLOSRY.html) character.

[String Functions, `count`, `find` and `match`](ABENSTRING_FUNCTION_FIND_ABEXA.html)

`CX_SY_RANGE_OUT_OF_BOUNDS`

`CX_SY_REGEX_TOO_COMPLEX`

`CX_SY_STRG_PAR_VAL`

-   *Cause:* Illegal offset or length specified in `off` and `len`.
    *Runtime error:*\\ `STRING_OFFSET_TOO_LARGE`

-   *Cause:* More information: [Exceptions in Regular Expressions](ABENREGEX_EXCEPTIONS.html).
    *Runtime error:*\\ `REGEX_TOO_COMPLEX`

-   *Cause:* Substring in `sub` or regular expression in `regex` is empty or occurrence in `occ` is 0.
    *Runtime error:*\\ `STRG_ILLEGAL_PAR`

FINAL(result1) = count( val = \`xxx123yyy\` pcre = \`\\\\d+\` ). \\nFINAL(result2) = count\_any\_of( val = \`xxx123yyy\` sub = \`123\` ). \\nFINAL(result3) = count\_any\_not\_of( val = \`xxx123yyy\` sub = \`x\` ). FINAL(surrogate\_pair) = cl\_abap\_codepage=>convert\_from( \\n codepage = 'UTF-8' \\n source = CONV xstring( 'F09F91BD' ) ). \\n "U+1F47D, EXTRATERRESTRIAL ALIEN \\n\\ \\ncl\_demo\_output=>write\_text( surrogate\_pair ). \\n\\ \\ncl\_demo\_output=>write( |\\{ \\n count( val = surrogate\_pair pcre = \`.\` ) \\} \\{ \\n count( val = surrogate\_pair pcre = \`(\*UTF).\` ) \\}| ). \\n\\ \\ncl\_demo\_output=>display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abendescriptive\_functions.html