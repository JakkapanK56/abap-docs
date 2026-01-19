---
title: "ABENREGEX_POSIX_SYNTAX_SIGNS"
description: |
  ABENREGEX_POSIX_SYNTAX_SIGNS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREGEX_POSIX_SYNTAX_SIGNS.htm"
abapFile: "ABENREGEX_POSIX_SYNTAX_SIGNS.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABENREGEX", "POSIX", "SYNTAX", "SIGNS"]
---

Single characters are represented by literal characters or operators. By prefixing a backslash `\\`, a special character of an operator is interpreted as a literal character. This applies in particular for the backslash `\\` itself, so that the regular expression `\\\\` is the same as the single character `\\`. If the backslash is followed by a literal character, the backslash is ignored as if it does not exist.

A literal character is a character that is not a special character, a [special character](ABENREGEX_POSIX_SYNTAX_SPECIALS.html) preceded by a backslash `\\`, or enclosed between `\\Q ... \\E`. As a search pattern, a literal character matches the same single character exactly.

Case-sensitivity can be controlled using the respective statements or methods.

These operators are made up of the special characters `.`, `[`, `]`, `^`, and `-`. The last two are only effective as special characters in specific positions within `[ ]`. The special characters can be converted into literal characters using the prefix `\\`.

The special character `.` is a placeholder for any single character. The operator `\\C` has the same effect as the special character `.`. A regular expression `.` or `\\C` matches exactly one single character.

The special characters `[ ]` can be placed around any number of literal characters or names for character classes (see below) and thus define a set of literal characters. A regular expression `[`...`]` matches exactly one single character that is listed as a literal character within the brackets or that is contained in a specified character class. At least one literal character or one name for a character class (see below) must be contained within the brackets. One of the characters `[` or `]`, which is positioned directly after the opening bracket, is interpreted as a literal character. Some of the [special characters](ABENREGEX_POSIX_SYNTAX_SPECIALS.html) that start with a backslash, such as `\\A` or `\\Q`, lose their special function within sets and are interpreted as the simple literal character `A` or `Q`.

If the character `^` is listed as the first character in a user-defined set for single characters and is listed directly after `[`, it acts as a special character and negates the remaining set of literal characters or character classes. A regular expression `[^`...`]` matches exactly one single character not listed as a literal character within the brackets, or which is not contained in a specified character class. A character `^` that is not listed directly after `[` acts as a literal character.

If the character `-` is between two literal characters, it acts as a special character and defines a range between the literal characters. The range is the set of characters that is enclosed by literal characters in the code page of the current operating system. A regular expression `[`...`-`...`]` matches exactly one single character that is within the defined range. A character `-`, which is not between two literal characters, acts as a literal character. A literal character cannot be part of two ranges, for example, `'a-z-Z'` is not a regular expression.

Within sets for single characters defined using `[ ]`, predefined character classes can be specified for certain sets for single characters whose behavior can, however, depend on the language and platform.

For frequently used character sets, specific operators are available as abbreviations:

If case is ignored by the ABAP statements `FIND` and `REPLACE` and when creating an object of the class `CL_ABAP_REGEX`, `\\l` and `\\u` are equivalent to `[[:alpha:]]` or `\\L` and `\\U` is equivalent to `[^[:alpha:]]`. The special characters `\\w`, `\\u`, `\\l`, `\\d`, and `\\s` can also be listed within sets `[`...`]`. The special characters `\\W`, `\\U`, `\\L`, `\\D`, and `\\S` cannot be used within sets and raise the exception `CX_SY_INVALID_REGEX`.

The operators `[..]` and `[==]` are reserved for future language enhancements and currently raise the exception `CX_SY_INVALID_REGEX` if used in sets.

-   `[:alnum:]`
-   Set of all alphanumeric characters (union of `[:alpha:]` and `[:digit:]`)
-   `[:alpha:]`
-   Set of all uppercase and lowercase letters including language-specific special characters (umlauts, accents, diphthongs) but without digits.
-   `[:blank:]`
-   Blank characters and horizontal tabs
-   `[:cntrl:]`
-   Set of all control characters
-   `[:digit:]`
-   Set of all digits `0` to `9`
-   `[:graph:]`
-   Set of all displayable characters except for blanks and horizontal tabs
-   `[:lower:]`
-   Set of all lowercase characters including language-dependent special characters (umlauts, accents, diphthongs)
-   `[:print:]`
-   Set of all displayable characters (union of `[:graph:]` and `[:blank:]`)
-   `[:punct:]`
-   Set of all punctuation characters
-   `[:space:]`
-   Set of all blank characters, tabs, carriage returns and line feeds
-   `[:unicode:]`
-   Set of all characters whose character representation is greater than 255
-   `[:upper:]`
-   Set of all uppercase characters including language-dependent special characters (umlauts, accents, diphthongs)
-   `[:word:]`
-   Set of all alphanumeric characters including the underscore \_
-   `[:xdigit:]`
-   Set of all hexadecimal digits (*0*\-*9*, *A*\-*F*, and *a*\-*f*)

-   Character classes only work within `[ ]` as specified. A regular expression `[:digit:]` does not define the set of all digits, but instead defines a character set consisting of *:*, *d*, *g*, *i*, and *t*. To specify the set of all digits, the regular expression `[[:digit:]]` should be used.
-   Due to their dependencies on language and platform, these character classes must be used with caution.

**Character Set** **Abbr.** **Meaning** `[[:digit:]]` `\\d` Placeholder for a digit `[^[:digit:]]` `\\D` Placeholder for a non-digit `[[:lower:]]` `\\l` Placeholder for a lowercase letter `[^[:lower:]]` `\\L` Placeholder for a character that is not a lowercase letter `[[:space:]]` `\\s` Placeholder for a blank character `[^[:space:]]` `\\S` Placeholder for a non-blank character `[[:upper:]]` `\\u` Placeholder for an uppercase letter `[^[:upper:]]` `\\U` Placeholder for a character that is not an uppercase letter `[[:word:]]` `\\w` Placeholder for an alphanumeric character plus underscore \_ `[^[:word:]]` `\\W` Placeholder for an non-alphanumeric character without underscore \_ abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencharacter\_string\_obsolete.html abenregular\_expressions\_obsolete.html abenregex\_posix\_syntax.html