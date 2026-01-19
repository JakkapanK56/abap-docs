---
title: "ABENMATCHES_FUNCTIONS"
description: |
  ABENMATCHES_FUNCTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMATCHES_FUNCTIONS.htm"
abapFile: "ABENMATCHES_FUNCTIONS.html"
keywords: ["if", "case", "class", "ABENMATCHES", "FUNCTIONS"]
---

``... matches( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)\ [`pcre|xpath = regex`](ABENSTRING_FUNCTIONS_REGEX.html)\ [[`case = case`](ABENSTRING_FUNCTIONS_CASE.html)]\               [`[off = off`](ABENSTRING_FUNCTIONS_OFF_LEN.html)]\ [`[len = len`](ABENSTRING_FUNCTIONS_OFF_LEN.html)] ) ...``

The [built-in](ABENBUILT_IN_FUNCTIONS.html)\\ [predicate function](ABENPREDICATE_FUNCTION_GLOSRY.html)\\ `matches` compares a search range of the argument [`text`](ABENSTRING_FUNCTIONS_OFF_LEN.html), defined using [`off`](ABENSTRING_FUNCTIONS_OFF_LEN.html) and [`len`](ABENSTRING_FUNCTIONS_VAL.html), with the [regular expression](ABENREGEX_SYNTAX.html) specified in [`regex`](ABENSTRING_FUNCTIONS_REGEX.html).

A regular expression in PCRE or XPath syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind `#`. In order to specify whitespace and `#` in a pattern, they must be escaped or the extended mode must be switched of with [`(?-x)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) in the regular expression.

The function returns a [truth value](ABENTRUTH_VALUE_GLOSRY.html).

The comparison is case-sensitive by default, but this can be overridden using the parameter [`case`](ABENSTRING_FUNCTIONS_CASE.html).

The first predicate function returns the value *true* because the argument `val` only contains letters. The second predicate function returns the value *false* because the argument `val` also contains numbers.

[Predicate Function, `matches`](ABENPRED_FUNCTION_MATCHES_ABEXA.html)

`CX_SY_RANGE_OUT_OF_BOUNDS`

`CX_SY_REGEX_TOO_COMPLEX`

`CX_SY_STRG_PAR_VAL`

-   If the parameter `pcre` is supplied, `regex` must contain a [PCRE regular expression](ABENREGEX_PCRE_SYNTAX.html).
-   If the parameter `xpath` is supplied, `regex` must contain a [XPath regular expression](ABENREGEX_XPATH_SYNTAX.html).

-   The return value is true when the whole search range matches the regular expression.
-   It is false else.

-   The match function [`match`](ABENMATCH_FUNCTIONS.html) can be used to return a substring that matches a regular expression.
-   Besides `pcre` and `xpath`, the obsolete parameter [`regex`](ABENSTRING_FUNCTIONS_REGEX_OBS.html) can also be used. Then an obsolete [POSIX regular expression](ABENREGEX_POSIX_SYNTAX.html) must be passed.

-   *Cause:* Illegal offset or length specified in `off` and `len`.
    *Runtime error:*\\ `STRING_OFFSET_TOO_LARGE`

-   *Cause:* See [Exceptions in Regular Expressions](ABENREGEX_EXCEPTIONS.html).
    *Runtime error:*\\ `REGEX_TOO_COMPLEX`

-   *Cause:* Regular expression in `regex` is empty.
    *Runtime error:*\\ `STRG_ILLEGAL_PAR`

ASSERT matches( val = 'abcde' pcre = '\[\[:alpha:\]\]\*' ). \\nASSERT NOT matches( val = 'a123e' pcre = '\[\[:alpha:\]\]\*' ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenpredicate.html abenpredicate\_functions.html abenpredicate\_functions\_strgs.html