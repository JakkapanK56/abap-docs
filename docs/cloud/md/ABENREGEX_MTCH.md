---
title: "ABENREGEX_MTCH"
description: |
  ABENREGEX_MTCH - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREGEX_MTCH.htm"
abapFile: "ABENREGEX_MTCH.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABENREGEX", "MTCH"]
---

Regular expressions can be used to find and replace substrings of character strings or to check if a complete character string matches its pattern. If a regular expression is applied to a character string as a search pattern, a search for matches of the regular expression with substrings of the character string is intended. In this case, special characters in the regular expression do not match characters, but match positions, thus affecting the type and number of occurrences. If a regular expression is applied to a character string as a match pattern, it is checked whether the character string matches a pattern.

A regular expression in PCRE or XPath syntax can be compiled in a normal or extended mode. In the extended mode, most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind `#`. In ABAP statements and built-in functions, the extended mode is switched on by default. It can be switched of with the special character [`(?-x)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) in the regular expression. When using `CL_ABAP_REGEX`, it can be switched by the parameter `EXTENDED` of method `CREATE_PCRE`.

In order to search for substrings that match a pattern described by a regular expression you can use the following:

Demonstration of different possibilities for searching substrings that match a regular expression.

In order to replace substrings that match a pattern described by a regular expression, the following can be used:

Demonstration of different possibilities for replacing substrings that match a regular expression.

In order to check if a complete character string matches a regular expression, the following can be used:

Demonstration of different possibilities for matching strings with a regular expression.

-   Statement [`FIND`](ABAPFIND.html) with the addition [`PCRE|REGEX`](ABAPFIND_PATTERN.html).
-   Built-in functions with the parameter [`pcre|xpath`](ABENSTRING_FUNCTIONS_REGEX.html) and with [`regex`](ABENSTRING_FUNCTIONS_REGEX_OBS.html) (obsolete):

-   [`find`, `find_...`](ABENSEARCH_FUNCTIONS.html)
-   [`count`, `count_...`](ABENCOUNT_FUNCTIONS.html)
-   [`match`](ABENMATCH_FUNCTIONS.html)
-   [`substring`, `substring_...`](ABENSUBSTRING_FUNCTIONS.html)
-   [`contains...`](ABENCONTAINS_FUNCTIONS.html)

-   Methods of [system class](ABENREGEX_SYSTEM_CLASSES.html)\\ `CL_ABAP_MATCHER`.

-   Statement [`REPLACE`](ABAPREPLACE.html) with the addition [`PCRE|REGEX`](ABAPREPLACE_PATTERN.html).
-   Built-in function [`replace`](ABENREPLACE_FUNCTIONS.html) with the parameter [`pcre`](ABENSTRING_FUNCTIONS_REGEX.html) or [`regex`](ABENSTRING_FUNCTIONS_REGEX_OBS.html) (obsolete).
-   Methods of the [system class](ABENREGEX_SYSTEM_CLASSES.html)\\ `CL_ABAP_MATCHER`.

-   Built-in function [`matches`](ABENMATCHES_FUNCTIONS.html) with the parameter [`pcre|xpath`](ABENSTRING_FUNCTIONS_REGEX.html) or [`regex`](ABENSTRING_FUNCTIONS_REGEX_OBS.html) (obsolete).
-   Methods of [system class](ABENREGEX_SYSTEM_CLASSES.html)\\ `CL_ABAP_MATCHER`.

FINAL(text) = \`aaa-bbb-ccc\`. \\nFINAL(regex) = \`\\\\W\`. \\n\\ \\nIF contains( val = text pcre = regex ). \\n\\ \\n FIND ALL OCCURRENCES OF PCRE regex IN text MATCH COUNT FINAL(cnt) \\n MATCH LENGTH FINAL(len). \\n\\ \\n FINAL(off) = find( val = text pcre = regex occ = cnt ). \\n\\ \\n ASSERT count( val = text pcre = regex ) = cnt. \\n\\ \\n FINAL(sub) = substring\_from( val = text pcre = regex len = len ). \\n\\ \\n cl\_demo\_output=>display( \\n |\\{ cnt \\} occurrences found.\\\\n| && \\n |The offset of the last occurrence is \\{ off \\}.\\\\n| && \\n |The first substring that matches is \\{ sub \\}.| ). \\n\\ \\nENDIF. DATA(text) = \`aaa-bbb-ccc\`. \\nFINAL(regex) = \`\\\\W\`. \\n\\ \\nREPLACE FIRST OCCURRENCE OF PCRE regex IN text WITH '\_'. \\n\\ \\ncl\_demo\_output=>display( \\n replace( val = text pcre = regex with = \`~\` ) ). FINAL(text) = \`aaa-bbb-ccc\`. \\nFINAL(regex) = \`\\\\w+\\\\W\\\\w+\\\\W\\\\w+\`. \\n\\ \\nIF cl\_abap\_regex=>create\_pcre( pattern = regex \\n )->create\_matcher( text = text )->match( ). \\n ASSERT matches( val = text pcre = regex ). \\n cl\_demo\_output=>display( 'match' ). \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenregular\_expressions.html