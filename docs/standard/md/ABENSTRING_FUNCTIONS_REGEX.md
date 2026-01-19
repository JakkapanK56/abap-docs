---
title: "ABENSTRING_FUNCTIONS_REGEX"
description: |
  ABENSTRING_FUNCTIONS_REGEX - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_FUNCTIONS_REGEX.htm"
abapFile: "ABENSTRING_FUNCTIONS_REGEX.html"
keywords: ["if", "catch", "class", "data", "types", "ABENSTRING", "FUNCTIONS", "REGEX"]
---

``... ( ... [`pcre`](ABENREGEX_PCRE_SYNTAX.html)|[`xpath`](ABENREGEX_XPATH_SYNTAX.html) = regex ...  ) ...``

`pcre|xpath$` is used to pass a [regular expression](ABENREGEX_SYNTAX.html) to be searched for or compared to. `regex` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html) that must contain a correct regular expression. Only arguments with elementary data types can be specified.

If a character-like data object with a fixed length is specified, any trailing blanks are ignored. If `regex` is empty, an exception from the class `CX_SY_STRG_PAR_VAL` is raised.

The regular expression is compiled an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind `#`. In order to include whitespace and `#` into a pattern, they must be escaped or the extended mode must be switched of with [`(?-x)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) in the regular expression.

The result of the following function call is `<tag>def</tag>`. By placing a question mark (`?`) behind `+`, the greedy behavior of the PCRE regular expression is switched off for that quantifier.

-   If the parameter `pcre` is supplied, `regex` must contain a [PCRE regular expression](ABENREGEX_PCRE_SYNTAX.html).
-   If the parameter `xpath` is supplied, `regex` must contain a [XPath regular expression](ABENREGEX_XPATH_SYNTAX.html).

-   The regular expression in `regex` may have correct syntax but be too complex for the execution of the function, which can raise a catchable exception of the class `CX_SY_REGEX_TOO_COMPLEX`. See [Exceptions in Regular Expressions](ABENREGEX_EXCEPTIONS.html).
-   Besides `pcre` and `xpath`, also the obsolete parameter [`regex`](ABENSTRING_FUNCTIONS_REGEX_OBS.html) can be used. Then an obsolete [POSIX regular expression](ABENREGEX_POSIX_SYNTAX.html) must be passed.

cl\_demo\_output=>display( \\n replace( val = \`abc\` \\n pcre = \`().+?()\` \\n with = \`$1def$2\` ) ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenstring\_functions\_common\_paras.html