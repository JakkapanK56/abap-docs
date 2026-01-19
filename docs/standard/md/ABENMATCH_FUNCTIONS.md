---
title: "ABENMATCH_FUNCTIONS"
description: |
  ABENMATCH_FUNCTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMATCH_FUNCTIONS.htm"
abapFile: "ABENMATCH_FUNCTIONS.html"
keywords: ["if", "case", "class", "data", "ABENMATCH", "FUNCTIONS"]
---

The match function returns a substring of a character-like argument that matches a regular expression.

``... match( [`val = text`](ABENSTRING_FUNCTIONS_VAL.html)\ [`pcre|xpath = regex`](ABENSTRING_FUNCTIONS_REGEX.html)\ [[`case = case`](ABENSTRING_FUNCTIONS_CASE.html)]\ [[`occ = occ`](ABENSTRING_FUNCTIONS_OCC.html)] ) ...``

The [built-in function](ABENBUILT_IN_FUNCTIONS.html)\\ `match` searches [`text`](ABENSTRING_FUNCTIONS_VAL.html) for the match specified in [`occ`](ABENSTRING_FUNCTIONS_OCC.html) with the [regular expression](ABENREGEX_SYNTAX.html) specified in [`regex`](ABENSTRING_FUNCTIONS_REGEX.html) and returns the substring found. The search is case-sensitive by default, but this can be overridden using the parameter [`case`](ABENSTRING_FUNCTIONS_CASE.html).

A regular expression in PCRE or XPath syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind `#`. In order to specify whitespace and `#` characters in a pattern, they must be escaped or the extended mode must be switched of with [`(?-x)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) in the regular expression.

The return value has the type `string`.

Besides `pcre` and `xpath`, the obsolete parameter [`regex`](ABENSTRING_FUNCTIONS_REGEX_OBS.html) can also be used. Then an obsolete [POSIX regular expression](ABENREGEX_POSIX_SYNTAX.html) must be passed.

The following match function returns `x2`.

[String Functions, `count`, `find` and `match`](ABENSTRING_FUNCTION_FIND_ABEXA.html)

`CX_SY_REGEX_TOO_COMPLEX`

`CX_SY_STRG_PAR_VAL`

-   If the parameter `pcre` is supplied, `regex` must contain a [PCRE regular expression](ABENREGEX_PCRE_SYNTAX.html).
-   If the parameter `xpath` is supplied, `regex` must contain a [XPath regular expression](ABENREGEX_XPATH_SYNTAX.html).

-   *Cause:* See [Exceptions in Regular Expressions](ABENREGEX_EXCEPTIONS.html).
    *Runtime error:*\\ `REGEX_TOO_COMPLEX`

-   *Cause:* Regular expression in `regex` is empty or there are 0 occurrences in `occ`.
    *Runtime error:*\\ `STRG_ILLEGAL_PAR`

cl\_demo\_output=>display( \\n match( val = 'x1 x2 x3' pcre = 'x.' occ = 2 ) ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenprocess\_functions.html