---
title: "ABAPFIND_PATTERN"
description: |
  ABAPFIND_PATTERN - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPFIND_PATTERN.htm"
abapFile: "ABAPFIND_PATTERN.html"
keywords: ["loop", "while", "if", "catch", "class", "data", "ABAPFIND", "PATTERN"]
---

``...  \{[SUBSTRING] substring\}\ |\ \{PCRE [`pcre`](ABENREGEX_PCRE_SYNTAX.html)\}|\{REGEX regex_ref\} ... .``

[1. `... [SUBSTRING] substring.`](#ABAP_VARIANT_1@1@)

[2. `... \{PCRE pcre\}|\{REGEX regex_ref\}`](#ABAP_VARIANT_2@1@)

Definition of a search pattern for the statements [`FIND`](ABAPFIND.html) and [`FIND IN TABLE`](ABAPFIND_ITAB.html). The system can either search for exactly one substring `substring` or for a substring that matches a regular expression behind `PCRE` or `REGEX`.

The statements [`REPLACE`](ABAPREPLACE.html) and [`REPLACE IN TABLE`](ABAPREPLACE_ITAB.html) use the same search pattern.

In this variant, a search is performed for the exact occurrence of a substring specified in a character-like or byte-like operand `substring`. `substring` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). The optional word `SUBSTRING` can be specified for emphasis.

If `substring` is either an empty string or is of type `c`, `n`, `d`, or `t` and only contains blanks, a search is performed for an empty substring. This is only possible when searching for the first occurrence, and the empty substring is always found before the first character or byte. In character string processing, the trailing blanks are ignored for `substring` data objects of fixed length.

If trailing blanks are not to be ignored in the substring, `substring` must have the data type `string`.

Search for all occurrences of the string *now* in a text string literal. The offsets 11 and 24 of both occurrences are shown in the output.

Search for all occurrences of the string *now* in a text string literal using a `WHILE` loop. After every successful search, the search range is redefined to start after the occurrence. In this way, all occurrences of the search pattern could be found even before the addition `ALL OCCURRENCES` was introduced.

In this variant, a search is performed for a substring that matches a [regular expression](ABENREGULAR_EXPRESSIONS.html) specified in `pcre` or `regex_ref`.

`pcre` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html).

In searches using a regular expression, special search patterns can be specified that allow further conditions including forecast conditions.

An empty string in `pcre` is not a valid regular expression and raises an exception. A character string is empty if `pcre` is either an empty string or is of type `c`, `n`, `d`, or `t` and only contains blanks.

The search uses PCRE regular expression syntax and finds the `'ab'` from offset 3.

-   If the addition `PCRE` is used, a character-like operand can be specified for `pcre` that contains a valid [PCRE regular expression](ABENREGEX_PCRE_SYNTAX.html). The PCRE syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind `#`. In order to include whitespace and `#` into a pattern, they must be escaped or the extended mode must be switched off with [`(?-x)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) in the regular expression.
-   If the addition `REGEX` is used, an object reference variable `regex_ref` can be specified that points to an instance of the [system class](ABENREGEX_SYSTEM_CLASSES.html)\\ `CL_ABAP_REGEX` that in turn represents a regular expression in any allowed [syntax for regular expressions](ABENREGEX_SYNTAX.html) supported by ABAP.

-   Instances of `CL_ABAP_REGEX` for all kinds of regular expressions, PCRE, XPath, XSD and POSIX (obsolete) can be used with the addition `REGEX`. This circumvents the restriction that regular expressions of XPath and XSD syntax cannot be specified directly as character strings.
-   When using `CL_ABAP_REGEX`, the extended mode can be switched by a parameter for PCRE and XPath regular expressions.
-   Some regular expressions that are not empty, such as `a*`, are used to search for empty character strings. This is possible when searching for the first occurrence or all occurrences. The corresponding empty substrings are found before the first character, between all characters, and after the last character of the search range. A search of this type is always successful.
-   A regular expression can have correct syntax but be too complex for the execution of the statement `FIND`, which raises a catchable exception of the class `CX_SY_REGEX_TOO_COMPLEX`. See [Exceptions in Regular Expressions](ABENREGEX_EXCEPTIONS.html).
-   Behind `REGEX`, a character-like operand that contains a valid [POSIX regular expression](ABENREGEX_POSIX_SYNTAX.html)\\ [`posix`](ABAPFIND_REPLACE_REGEX_OBS.html) can also be specified. This variant is obsolete.

-   [Find a PCRE regular expression](ABENPCRE_ABEXA.html)
-   [Search for a regular expression](ABENREGEX_ABEXA.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFIND ALL OCCURRENCES OF \`now\` IN \\n \`Everybody knows this is nowhere\` \\n RESULTS FINAL(result\_tab). \\n\\ \\nLOOP AT result\_tab ASSIGNING FIELD-SYMBOL(). \\n out->write( |\\{ \-offset \\} \\{ \\n \-length \\}| ). \\nENDLOOP. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(off) = 0. \\nWHILE sy-subrc = 0. \\n FIND \`now\` IN SECTION OFFSET off OF \\n \`Everybody knows this is nowhere\` \\n MATCH OFFSET FINAL(moff) \\n MATCH LENGTH FINAL(mlen). \\n IF sy-subrc = 0. \\n out->write\_data( moff ). \\n off = moff + mlen. \\n ENDIF. \\nENDWHILE. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(text) = \`oooababboo\`. \\n\\ \\nFIND PCRE 'a.|\[ab\]+|b.\*' IN text \\n MATCH OFFSET FINAL(moff) \\n MATCH LENGTH FINAL(mlen). \\nIF sy-subrc = 0. \\n out->write( substring( val = text off = moff \\n len = mlen ) ). \\nENDIF. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html abapfind.html