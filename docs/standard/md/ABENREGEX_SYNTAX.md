---
title: "ABENREGEX_SYNTAX"
description: |
  ABENREGEX_SYNTAX - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENREGEX_SYNTAX.htm"
abapFile: "ABENREGEX_SYNTAX.html"
keywords: ["if", "class", "data", "ABENREGEX", "SYNTAX"]
---

A [regular expression](https://en.wikipedia.org/wiki/Regular_expression) is a pattern of literal and special characters that describes a set of character strings. The syntax of regular expressions is widely standardized but there are differences between common standards as [Perl](https://www.perl.org/) or [POSIX](https://en.wikipedia.org/wiki/POSIX) and different syntax flavors as [XPath](https://www.w3.org/TR/xquery-operators/#regex-syntax) or [XSD](https://www.w3.org/XML/2008/03/xsdl-regex/re.xml) regular expressions.

The following topics describe the syntax of regular expressions that can be used in ABAP behind additions `PCRE|REGEX` in statements, for parameters `pcre|regex|xpath` of built-in functions and with the [system classes for regular expressions](ABENREGEX_SYSTEM_CLASSES.html).

ABAP specific restrictions or modifications to the standard syntax might apply.

-   [PCRE syntax](ABENREGEX_PCRE_SYNTAX.html)
-   [XPath syntax](ABENREGEX_XPATH_SYNTAX.html)
-   [XSD syntax](ABENREGEX_XSD_SYNTAX.html)
-   [POSIX syntax](ABENREGEX_POSIX_SYNTAX.html) (obsolete)

-   Regular expressions in [POSIX syntax](ABENREGEX_POSIX_SYNTAX.html) are obsolete. Using regular expressions in POSIX syntax leads to a warning from syntax check that can be hidden by the pragma `##regex_posix`. It is recommended that [regular expressions are migrated from POSIX to PCRE](ABENREGEX_MIGRATING_POSIX.html) or another regular expression syntax supported by ABAP.
-   The PCRE syntax is more powerful than the POSIX syntax. Furthermore, PCRE regular expressions generally perform better than the POSIX regular expressions supported by ABAP.
-   The test and demonstration program `DEMO_REGEX` supports all flavors of regular expression syntax supported by ABAP.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenregular\_expressions.html