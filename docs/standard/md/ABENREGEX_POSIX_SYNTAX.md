---
title: "ABENREGEX_POSIX_SYNTAX"
description: |
  ABENREGEX_POSIX_SYNTAX - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENREGEX_POSIX_SYNTAX.htm"
abapFile: "ABENREGEX_POSIX_SYNTAX.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "ABENREGEX", "POSIX", "SYNTAX"]
---

Regular expressions with POSIX syntax can be specified after the addition `REGEX` in obsolete variants of the statements [`FIND` and `REPLACE`](ABAPFIND_REPLACE_REGEX_OBS.html) and the obsolete parameter [`regex`](ABENSTRING_FUNCTIONS_REGEX_OBS.html) of built-in functions for strings. Objects for POSIX regular expressions can be created with the obsolete factory method `CREATE_POSIX` of the system class [`CL_ABAP_REGEX`](ABENREGEX_SYSTEM_CLASSES.html) to be used in statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE.html) or with the system class [`CL_ABAP_MATCHER`](ABENREGEX_SYSTEM_CLASSES.html).

The POSIX syntax of regular expressions distinguishes the following cases:

Using the POSIX syntax for single characters and character strings, regular expressions can be created that match entire character strings or substrings of character strings. The POSIX syntax for find and replace offers some additional elements that support the finding and replacement of substrings in character strings.

The special characters that are valid in regular expressions according to POSIX are summarized in:

Regular expressions in POSIX syntax are obsolete. Using regular expressions in POSIX syntax leads to a warning from the syntax check that can be hidden by the pragma `##regex_posix`. It is recommended that regular expressions are [migrated](ABENREGEX_MIGRATING_POSIX.html) from POSIX to [PCRE](ABENREGEX_PCRE_SYNTAX.html) or another regular expression syntax supported by ABAP.

This software uses [Version 1.31](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/index.html) of the Boost.Regex Library. Copyright (c) 1998-2003 Dr. John Maddock. Attributes of the standard not yet support in this version are [listed here](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/standards.html).

The syntax and semantics described here may differ from other regular expression implementations based on the POSIX standard, or even the Boost 1.31 regular expression library in a different configuration.

-   [Single character patterns](ABENREGEX_POSIX_SYNTAX_SIGNS.html)
-   [Character string patterns](ABENREGEX_POSIX_SYNTAX_OPERATORS.html)
-   [Search patterns](ABENREGEX_POSIX_SEARCH.html)
-   [Replace patterns](ABENREGEX_POSIX_REPLACE.html)
-   [Simplified regular expressions](ABENREGEX_POSIX_SIMPLE.html)

-   [Special Characters in Regular Expressions](ABENREGEX_POSIX_SYNTAX_SPECIALS.html)

-   The PCRE syntax is more powerful than the POSIX syntax. Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP.
-   Creating objects of class `CL_ABAP_REGEX` with the operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) or the statement [`CREATE OBJECT`](ABAPCREATE_OBJECT.html) also creates instances for POSIX regular expressions.
-   The test and demonstration program `DEMO_REGEX` allows POSIX syntax to be tested by selecting POSIX.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencharacter\_string\_obsolete.html abenregular\_expressions\_obsolete.html