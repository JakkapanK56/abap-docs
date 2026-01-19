---
title: "ABENREGULAR_EXPRESSIONS"
description: |
  ABENREGULAR_EXPRESSIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENREGULAR_EXPRESSIONS.htm"
abapFile: "ABENREGULAR_EXPRESSIONS.html"
keywords: ["do", "if", "catch", "class", "data", "ABENREGULAR", "EXPRESSIONS"]
---

A regular expression `r` is made up of literal characters and special characters in accordance with the [syntax of regular expressions](ABENREGEX_SYNTAX.html) and represents a set of character strings. If `text` is one of the character strings represented by `r`, it means that `r` matches `text` or that `r` fits `text`. Two different regular expressions are the same if they match the same set of character strings.

ABAP supports the following kinds of extended [regular expressions](ABENREGULAR_EXPRESSION_GLOSRY.html):

For Perl and POSIX regular expressions, respective libraries are implemented in [ABAP Kernel](ABENKERNEL_GLOSRY.html):

XPath and XSD regular expressions are internally converted into Perl syntax by the ABAP runtime framework.

Regular expressions can be used for [searching, replacing and matching](ABENREGEX_MTCH.html) character strings. To do so, regular expressions can be specified in statements and built-in functions for character string processing:

Regular expressions in [POSIX syntax](ABENREGEX_POSIX_SYNTAX.html) are obsolete. Using regular expressions in POSIX syntax leads to a warning from syntax check that can be hidden by the pragma `##regex_posix`. It is recommended that [regular expressions are migrated from POSIX to PCRE](ABENREGEX_MIGRATING_POSIX.html) or another regular expression syntax supported by ABAP.

-   [Perl Compatible Regular Expressions (PCRE)](ABENPCRE_GLOSRY.html) in [PCRE syntax](ABENREGEX_PCRE_SYNTAX.html)
-   [XPath regular expressions](ABENXPATH_REGEX_GLOSRY.html) in [XPath syntax](ABENREGEX_XPATH_SYNTAX.html)
-   [XSD regular expressions](ABENXSD_REGEX_GLOSRY.html) in [XSD syntax](ABENREGEX_XSD_SYNTAX.html)
-   [POSIX regular expressions](ABENPOSIX_REGEX_GLOSRY.html) in [POSIX syntax](ABENREGEX_POSIX_SYNTAX.html) (obsolete)

-   The [PCRE2 library](https://www.pcre.org/) is implemented for PCRE regular expressions.
-   [Version 1.31 of the Boost.Regex Library](http://www.boost.org/doc/libs/1_31_0/libs/regex/doc/index.html) is implemented for POSIX regular expressions (obsolete).

-   For all kinds of regular expressions, objects of system class [`CL_ABAP_REGEX`](ABENREGEX_SYSTEM_CLASSES.html) can be created. Those objects can be used with the addition [`REGEX`](ABAPFIND_PATTERN.html) of the statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE.html) and with the system class [`CL_ABAP_MATCHER`](ABENREGEX_SYSTEM_CLASSES.html).
-   The following language elements address specific regular expressions:

-   For PCRE regular expressions, the addition [`PCRE`](ABAPFIND_PATTERN.html) can be used in the statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE.html). The parameter [`pcre`](ABENSTRING_FUNCTIONS_REGEX.html) can be used in built-in functions for strings.
-   For XPath regular expressions, the parameter [`xpath`](ABENSTRING_FUNCTIONS_REGEX.html) can be used in some built-in functions for strings.
-   For POSIX regular expressions, the addition `REGEX` can be used in obsolete variants of the statements [`FIND` and `REPLACE`](ABAPFIND_REPLACE_REGEX_OBS.html) and the obsolete parameter [`regex`](ABENSTRING_FUNCTIONS_REGEX_OBS.html) can be used in built-in functions for strings.

-   A regular expression can have correct syntax but be too complex for to be executed, which raises a catchable exception of the class `CX_SY_REGEX_TOO_COMPLEX`. See [Exceptions in Regular Expressions](ABENREGEX_EXCEPTIONS.html).
-   [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html) also support regular expressions with the built-in functions [`REPLACE_REGEXPR`](ABENSQL_FUNCTIONS_STRING.html), [`LIKE_REGEXPR`](ABENSQL_FUNCTIONS_STRING.html), and [`OCCURRENCES_REGEXPR`](ABENSQL_FUNCTIONS_STRING.html). These functions access the PCRE1 library implemented in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html).
-   The test and demonstration program `DEMO_REGEX` makes it possible to test the search and replace functionality by applying regular expressions to texts.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html