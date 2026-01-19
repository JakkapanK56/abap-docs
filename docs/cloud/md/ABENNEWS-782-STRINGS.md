---
title: "ABENNEWS-782-STRINGS"
description: |
  ABENNEWS-782-STRINGS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-782-STRINGS.htm"
abapFile: "ABENNEWS-782-STRINGS.html"
keywords: ["if", "method", "class", "ABENNEWS", "782", "STRINGS"]
---

[1\. XPath and XSD Regular Expressions](#ABAP_MODIFICATION_1@4@)

[2\. Callouts in PCRE Regular Expressions](#ABAP_MODIFICATION_2@4@)

Besides the existing support of [PCRE regular expressions](ABENPCRE_REGEX_GLOSRY.html) and [POSIX regular expressions](ABENPOSIX_REGEX_GLOSRY.html) (obsolete) ABAP supports now also [XPath regular expressions](ABENXPATH_REGEX_GLOSRY.html) and [XSD regular expressions](ABENXSD_REGEX_GLOSRY.html). Internally, those are transformed to PCRE regular expressions and processed by the PCRE2 Library.

The class [`CL_ABAP_MATCHER`](ABENREGEX_SYSTEM_CLASSES.html) supports callouts in [PCRE syntax](ABENREGEX_PCRE_SYNTAX.html) now. The method `SET_CALLOUT` can be used to register a handler class that implements the interface `IF_ABAP_MATCHER_CALLOUT`. The [special characters](ABENREGEX_PCRE_SYNTAX_SPECIALS.html)\\ `(?C...)` of a PCRE regular expression then call the interface method `CALLOUT` when the method `MATCH` is executed.

-   Both kinds of regular expressions can be used by the new (factory) methods `CREATE_XPATH2` and `CREATE_XSD` of the [system classes](ABENREGEX_SYSTEM_CLASSES.html)\\ `CL_ABAP_REGEX` and `CL_ABAP_MATCHER`.
-   XPath regular expressions can be used by the new parameter [`xpath`](ABENSTRING_FUNCTIONS_REGEX.html) in some built-in functions.

abenabap.html abennews.html abennews-78.html abennews-782.html