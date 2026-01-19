---
title: "ABENREGEX_XSD_SYNTAX"
description: |
  ABENREGEX_XSD_SYNTAX - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREGEX_XSD_SYNTAX.htm"
abapFile: "ABENREGEX_XSD_SYNTAX.html"
keywords: ["do", "if", "method", "class", "data", "ABENREGEX", "XSD", "SYNTAX"]
---

Objects for XSD regular expressions can be created with the factory method `CREATE_XSD` of the system class [`CL_ABAP_REGEX`](ABENREGEX_SYSTEM_CLASSES.html) to be used in statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE.html) or with the system class [`CL_ABAP_MATCHER`](ABENREGEX_SYSTEM_CLASSES.html).

Currently, there is no detailed description of the XSD syntax for regular expressions in the ABAP keyword documentation.

The following example uses XSD syntax that is invalid for [PCRE](ABENREGEX_PCRE_SYNTAX.html) and does not find any matches for [POSIX](ABENREGEX_POSIX_SYNTAX.html). It would work also for [XPath](ABENREGEX_XPATH_SYNTAX.html). The regular expression contains special characters `\\i` and `\\c` that match any character that can be the first character of an XML name or any character that can occur after the first character of an XML name. The result of the replacement is `<ns:tag1><ns:tag2>...</ns:tag2></ns:tag1>`.

-   For a short syntax overview, see
-   [Special Characters in XSD Regular Expressions](ABENREGEX_XSD_SYNTAX_SPECIALS.html)
-   For the complete documentation, refer to
-   [Regular expressions in XSD 1.0 and 1.1](https://www.w3.org/XML/2008/03/xsdl-regex/re.xml).

-   A regular expression with XSD syntax cannot be specified directly as a character string in the statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE.html), but you can use objects of `CL_ABAP_REGEX` that are created with method `CREATE_XSD` with the addition [`REGEX`](ABAPFIND_PATTERN.html) instead.
-   XSD Syntax is a subset of [XPath syntax](ABENREGEX_XPATH_SYNTAX.html). There are mainly the following differences:

-   In a XSD regular expression, `^` and `$` are not special characters for start and end of a line.
-   There is no XSD syntax for non-greedy behavior.
-   There is no XSD syntax for subgroups without registration
-   There is no XSD syntax for back references

DATA(xml) = \`...\`. \\n\\ \\nREPLACE ALL OCCURRENCES OF \\n REGEX cl\_abap\_regex=>create\_xsd( pattern = \`\\\\i\\\\c\*\` ) \\n IN xml WITH \`ns:$0\`. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenregular\_expressions.html abenregex\_syntax.html