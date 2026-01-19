---
title: "ABENREGEX_SYSTEM_CLASSES"
description: |
  ABENREGEX_SYSTEM_CLASSES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREGEX_SYSTEM_CLASSES.htm"
abapFile: "ABENREGEX_SYSTEM_CLASSES.html"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "ABENREGEX", "SYSTEM", "CLASSES"]
---

The system classes for regular expressions are `CL_ABAP_REGEX` and `CL_ABAP_MATCHER`. Both are documented in the class library.

Factory methods of class `CL_ABAP_REGEX` create an object-oriented representation of a regular expression passed in a character-like field:

Optional parameters allow further specifications for handling the regular expression:

Instances of `CL_ABAP_REGEX` can be used with the class `CL_ABAP_MATCHER` and with the addition `REGEX` of the statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE.html).

[Search for a regular expression](ABENREGEX_ABEXA.html)

The class `CL_ABAP_MATCHER` applies regular expressions to either a character string or an internal table. Its methods allow finding, replacing or matching regular expressions. Instances of `CL_ABAP_MATCHER` can be created either with factory methods of the class itself or with the method `CREATE_MATCHER` of the class `CL_ABAP_REGEX`. The latter allows the use of the same regular expression multiple times for different texts.

The class `CL_ABAP_MATCHER` stores the current state of text processing. The current processing state can be queried using different `GET_...` methods.

For [PCRE syntax](ABENREGEX_PCRE_SYNTAX.html), the class `CL_ABAP_MATCHER` supports callouts. With the method `SET_CALLOUT` a handler class can be registered that implements the interface `IF_ABAP_MATCHER_CALLOUT`. The [special characters](ABENREGEX_PCRE_SYNTAX_SPECIALS.html)\\ `(?C...)` of a PCRE regular expression then call the interface method `CALLOUT` when the method `MATCH` is executed.

If a regular expression has to be used several times, it is preferable to work with objects of `CL_ABAP_MATCHER` created with `CL_ABAP_REGEX`.

An object of `CL_ABAP_MATCHER` is created with the method `CREATE_MATCHER` of an instance of the class `CL_ABAP_REGEX` that represents a regular expression with PCRE syntax. Depending on a successful match, the registered subgroups of submatches are received and displayed.

-   `CREATE_PCRE` creates instances for regular expressions with [PCRE syntax](ABENREGEX_PCRE_SYNTAX.html).
-   `CREATE_XPATH2` creates instances for regular expressions with [XPath syntax](ABENREGEX_XPATH_SYNTAX.html).
-   `CREATE_XSD` creates instances for regular expressions with [XSD syntax](ABENREGEX_XSD_SYNTAX.html).
-   `CREATE_POSIX` creates instances for regular expressions with [POSIX syntax](ABENREGEX_POSIX_SYNTAX.html) (obsolete).

-   The Parameter `EXTENDED` for `CREATE_PCRE` and `CREATE_XPATH2` switches the extended mode for compiling PCRE and XPath expressions. The default value is `ABAP_TRUE`. In the extended mode, most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind `#`. In order to include whitespace and `#` into a pattern, they must be escaped The extended mode can also be switched of with [`(?-x)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) in the regular expression.
-   The Parameter `UNICODE_HANDLING` for `CREATE_PCRE` and `CREATE_XPATH2` defines how characters from the [surrogate area](ABENSURROGATE_AREA_GLOSRY.html) are handled.

-   The class `CL_ABAP_REGEX` can also be instantiated with the operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) or the statement [`CREATE OBJECT`](ABAPCREATE_OBJECT.html), but this is deprecated. Such a direct instantiation of `CL_ABAP_REGEX` creates instances for regular expressions with [POSIX syntax](ABENREGEX_POSIX_SYNTAX.html). Instead of direct instantiation, the above factory methods `CREATE_PCRE`, `CREATE_POSIX`, `CREATE_XPATH2` or `CREATE_XSD` should be used.
-   Instances of `CL_ABAP_REGEX` for all kinds of regular expressions, PCRE, XPath, XSD and POSIX (obsolete) can be used with the addition `REGEX` of the statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE.html). This circumvents the restriction that regular expressions of XPath and XSD syntax cannot be specified directly as character strings.
-   Instances of `CL_ABAP_REGEX` cannot be used with the addition `PCRE` of the statements `FIND` and `REPLACE`.
-   Regular expressions in [POSIX syntax](ABENREGEX_POSIX_SYNTAX.html) are obsolete. Using regular expressions in POSIX syntax leads to a warning from syntax check that can be hidden by the pragma `##regex_posix`. It is recommended that [regular expressions are migrated from POSIX to PCRE](ABENREGEX_MIGRATING_POSIX.html) or another regular expression syntax supported by ABAP.

-   [PCRE Regular Expression with Callouts](ABENPCRE_CALLOUT_ABEXA.html)
-   [Parsing with PCRE Regular Expression](ABENPCRE_PARSING_ABEXA.html)
-   [XPath Regular Expression](ABENXPATH_REGEX_ABEXA.html)

FINAL(matcher) = \\n cl\_abap\_regex=>create\_pcre( pattern = '(\\\\d\\\\d\\\\d)(\\\\D\\\\D\\\\D)(\\\\d\\\\d\\\\d)' \\n ignore\_case = 'X' \\n )->create\_matcher( text = '123abc456' ). \\n\\ \\nIF matcher->match( ). \\n DO. \\n TRY. \\n cl\_demo\_output=>write( matcher->get\_submatch( sy-index ) ). \\n CATCH cx\_sy\_invalid\_submatch. \\n EXIT. \\n ENDTRY. \\n ENDDO. \\nENDIF. \\n\\ \\ncl\_demo\_output=>display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenregular\_expressions.html