---
title: "ABAPREPLACE_PATTERN"
description: |
  ABAPREPLACE_PATTERN - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPREPLACE_PATTERN.htm"
abapFile: "ABAPREPLACE_PATTERN.html"
keywords: ["if", "catch", "class", "data", "ABAPREPLACE", "PATTERN"]
---

``... \{[SUBSTRING] substring\}\    |\ \{PCRE [`pcre`](ABENREGEX_PCRE_SYNTAX.html)\}|\{REGEX regex_ref\} ... .``

Defines a search pattern for the statements [`REPLACE`](ABAPREPLACE.html) and [`REPLACE IN TABLE`](ABAPREPLACE_ITAB.html).

`substring` and `pcre` are [character-like expression positions](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). The syntax and semantics are the same as in the definition of a search pattern for the statement [`FIND`](ABAPFIND_PATTERN.html). The statement [`REPLACE`](ABAPREPLACE.html) replaces the found substring in accordance with the specification after [`WITH`](ABAPREPLACE_IN_PATTERN.html).

Replacement of the substring `all` with `er`.

The following replacement with regular expression `\\D` removes all non-digits from a string.

-   If `substring` is specified, the exact substring specified in `substring` is searched for. The optional addition `SUBSTRING` can be specified in front of `substring` for emphasis.
-   If `PCRE` or `REGEX` is specified, the substring that matches a [regular expression](ABENREGULAR_EXPRESSIONS.html) specified in `pcre` or `regex_ref` is searched for.

-   `PCRE` denotes a [PCRE regular expression](ABENREGEX_PCRE_SYNTAX.html) in a character string `pcre`. The PCRE syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind `#`. In order to include whitespace and `#` into a pattern, they must be escaped or the extended mode must be switched of with [`(?-x)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) in the regular expression.
-   `REGEX` denotes a any regular expression supported by ABAP represented by an instance of the [system class](ABENREGEX_SYSTEM_CLASSES.html)\\ `CL_ABAP_REGEX` referenced by a reference variable `regex_ref`.

-   Instances of `CL_ABAP_REGEX` for all kinds of regular expressions, PCRE, POSIX, XPath and XSD can be used with the addition `REGEX`. This circumvents the restriction that regular expressions of XPath and XSD syntax cannot be specified directly as character strings.
-   When using `CL_ABAP_REGEX`, the extended mode option can be switched by a parameter.
-   A regular expression can have correct syntax, but be too complex for the execution of the statement `REPLACE`, which raises a catchable exception of the class `CX_SY_REGEX_TOO_COMPLEX`. See [Exceptions in Regular Expressions](ABENREGEX_EXCEPTIONS.html).
-   Behind `REGEX`, also a character-like operand [`posix`](ABAPFIND_REPLACE_REGEX_OBS.html) can be specified, that contains a valid [POSIX regular expression](ABENREGEX_POSIX_SYNTAX.html). This variant is obsolete.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(str) = \`Hallo\`. \\nREPLACE SUBSTRING \`all\` IN str WITH \`er\`. \\nout->write( str ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(str) = \`4 Apples + 2 Oranges\`. \\nREPLACE ALL OCCURRENCES OF PCRE \`\\\\D\` IN str WITH \`\`. \\nout->write( str ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html abapreplace.html abapreplace\_in\_pattern.html