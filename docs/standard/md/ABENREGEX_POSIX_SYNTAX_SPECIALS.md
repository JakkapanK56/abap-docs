---
title: "ABENREGEX_POSIX_SYNTAX_SPECIALS"
description: |
  ABENREGEX_POSIX_SYNTAX_SPECIALS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENREGEX_POSIX_SYNTAX_SPECIALS.htm"
abapFile: "ABENREGEX_POSIX_SYNTAX_SPECIALS.html"
keywords: ["case", "data", "ABENREGEX", "POSIX", "SYNTAX", "SPECIALS"]
---

The following tables summarize the special characters in [POSIX regular expressions](ABENPOSIX_REGEX_GLOSRY.html).

The string function [`escape`](ABENESCAPE_FUNCTIONS.html) can be used to prefix all special characters for regular expressions with their escape character.

[**\-> More about**](ABENREGEX_POSIX_SYNTAX_SIGNS.html)

[**\-> More about**](ABENREGEX_POSIX_SYNTAX_OPERATORS.html)

[**\-> More about**](ABENREGEX_POSIX_SEARCH.html)

[**\-> More about**](ABENREGEX_POSIX_REPLACE.html)

**Special Character** **Meaning** **Special Character** **Meaning** **Special Character** **Meaning** **Special Character** **Meaning** **Special Character** **Meaning** `\\` Escape character for special characters `.` Placeholder for any single character `\\C` Placeholder for any single character `\\d` Placeholder for any digit `\\D` Placeholder for any non-digit character `\\l` Placeholder for any lowercase letter `\\L` Placeholder for any non-lowercase letter `\\s` Placeholder for a blank character `\\S` Placeholder for a non-blank character `\\u` Placeholder for any uppercase letter `\\U` Placeholder for any non-uppercase letter `\\w` Placeholder for any alphanumeric character including \_ `\\W` Placeholder for any non-alphanumeric character except for \_ `[ ]` Definition of a value set for single characters `[^ ]` Negation of a value set for single characters `[ - ]` Definition of a range in a value set for single characters `[[:alnum:]]` Designation for all alphanumeric characters in a value set `[[:alpha:]]` Designation for all letters in a value set `[[:blank:]]` Designation for blank characters and horizontal tabulators in a value set `[[:cntrl:]]` Designation for all control characters in a value set `[[:digit:]]` Designation for all digits in a value set `[[:graph:]]` Designation for all displayable characters apart from blank characters and horizontal tabulators in a value set `[[:lower:]]` Designation for all lowercase letters in a value set `[[:print:]]` Designation for all displayable characters in a value set `[[:punct:]]` Designation for all punctuation marks in a value set `[[:space:]]` Designation for all blank characters, tabulators, carriage returns and line feeds in a value set `[[:unicode:]]` Designation for all Unicode characters in a value set with a code greater than 255 `[[:upper:]]` Designation for all uppercase letters in a value set `[[:word:]]` Designation for all alphanumeric characters and \_ in a value set `[[:xdigit:]]` Designation for all hexadecimal digits in a value set `\\a \\f \\n \\r \\t \\v` Various platform-dependent control characters `[..]` Reserved for future enhancements `[==]` Reserved for future enhancements `\{n\}` Chaining of `n` single characters `\{n,m\}` Chaining of at least `n` and a maximum of `m` single characters `\{n,m\}?` Reserved for future enhancements `?` One single character or no single characters `*` Chaining of any number of single characters including 'no characters' `*?` Reserved for future enhancements `+` Chaining of any number of single characters excluding 'no characters' `+?` Reserved for future enhancements `|` Combination of two alternative expressions `( )` Definition of subgroups with registration `(?: )` Definition of subgroups without registration `\\1`, `\\2`, `\\3` ... Placeholder for the registration of subgroups `\\Q` ... `\\E` Definition of a string of literal characters `(?` ... `)` Reserved for future enhancements `^` Anchor character for the start of a line `\\A` Anchor character for the start of a character string `$` Anchor character for the end of a line `\\z` Anchor character for the end of a character string `\\Z` The same as for `\\z`. Line feeds at the end of the character string, however, are ignored `\\<` Start of a word `\\>` End of a word `\\b` Start or end of a word `\\B` Space between characters within a word `(?= )` Preview condition `(?! )` Negated preview condition `(?> )` Cut operator `$0`, `$&` Placeholder for the entire occurrence `$1`, `$2`, `$3`... Placeholder for the registration of subgroups `` $` `` Placeholder for the text in front of the occurrence `$'` Placeholder for the text after the occurrence abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencharacter\_string\_obsolete.html abenregular\_expressions\_obsolete.html abenregex\_posix\_syntax.html