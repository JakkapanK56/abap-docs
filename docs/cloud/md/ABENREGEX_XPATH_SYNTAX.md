---
title: "ABENREGEX_XPATH_SYNTAX"
description: |
  ABENREGEX_XPATH_SYNTAX - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREGEX_XPATH_SYNTAX.htm"
abapFile: "ABENREGEX_XPATH_SYNTAX.html"
keywords: ["do", "while", "if", "method", "class", "data", "ABENREGEX", "XPATH", "SYNTAX"]
---

Regular expressions with XPath syntax can be specified behind the parameter [`xpath`](ABENSTRING_FUNCTIONS_REGEX.html) of built-in functions for strings. Objects for XPath regular expressions can be created with the factory method `CREATE_XPATH2` of the system class [`CL_ABAP_REGEX`](ABENREGEX_SYSTEM_CLASSES.html) to be used in statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE.html) or with the system class [`CL_ABAP_MATCHER`](ABENREGEX_SYSTEM_CLASSES.html).

Currently, there is no detailed description of the XPath syntax for regular expressions in the ABAP keyword documentation.

A regular expression in XPath syntax can be compiled in a normal and extended mode. In the extended mode, most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind `#`. In ABAP built-in functions, the extended mode is switched on by default and can be switched off with [`(?-x)`](ABENREGEX_PCRE_SYNTAX_SPECIALS.html) in the regular expression. When using `CL_ABAP_REGEX`, it can be switched by the parameter `EXTENDED` of method `CREATE_XPATH2`.

A special feature of XPath regular expressions is the subtraction of character sets. In the following example, the letters `a` to `c` are subtracted from character set `BasicLatin` and the first match is `d` at offset 3.

Compared to PCRE, XPath regular expressions allow the escape character `\\` not only in front of special characters. The `match` function with parameter `xpath` finds `x` while the `match` function with parameter `pcre` does not. Accordingly the first `FIND` statement returns in `sy-subrc` the value 0 while the second `FIND` statement returns 4.

[XPath regular expression](ABENXPATH_REGEX_ABEXA.html)

-   For a short syntax overview, see
-   [Special Characters in XPath Regular Expressions](ABENREGEX_XPATH_SYNTAX_SPECIALS.html)
-   For the complete documentation, refer to
-   [XQuery 1.0 and XPath 2.0 Functions and Operators](https://www.w3.org/TR/xquery-operators/#regex-syntax).

-   A regular expression with XPath syntax cannot be specified directly as a character string in the statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE.html), but you can use objects of `CL_ABAP_REGEX` that are created with method `CREATE_XPATH2` with the addition [`REGEX`](ABAPFIND_PATTERN.html) instead.

FIND REGEX \\n cl\_abap\_regex=>create\_xpath2( pattern = '\[\\\\p\\{IsBasicLatin\\}-\[a-c\]\]' ) \\n IN 'abcd' MATCH OFFSET FINAL(moff). FINAL(x) = match( val = \`abxcd\` xpath = \`\\\\x\` occ = 1 ). \\nFINAL(y) = match( val = \`abxcd\` pcre = \`\\\\x\` occ = 1 ). \\n\\ \\nFIND REGEX cl\_abap\_regex=>create\_xpath2( pattern = '\\\\x' ) IN 'abxcd'. \\nFIND REGEX cl\_abap\_regex=>create\_pcre( pattern = '\\\\x' ) IN 'abxcd'. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenregular\_expressions.html abenregex\_syntax.html