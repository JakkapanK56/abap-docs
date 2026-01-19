---
title: "ABENPCRE_CALLOUT_ABEXA"
description: |
  ABENPCRE_CALLOUT_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPCRE_CALLOUT_ABEXA.htm"
abapFile: "ABENPCRE_CALLOUT_ABEXA.html"
keywords: ["if", "method", "class", "data", "ABENPCRE", "CALLOUT", "ABEXA"]
---

The example demonstrates how to call an ABAP method from a PCRE regular expression.

An object-oriented representation of a PCRE regular expression is created from class [`CL_ABAP_REGEX`](ABENREGEX_SYSTEM_CLASSES.html). The regular expression contains the [special characters](ABENREGEX_PCRE_SYNTAX_SPECIALS.html)\\ `(?C...)` for callouts. The first three callouts pass numeric data, the other two pass string data.

A local class `handle_regex` implements the interface `IF_ABAP_MATCHER_CALLOUT` and an instance of that class is set as the callout handler. When the regular expression is matched, the interface method `CALLOUT` is called for each callout position and can access the passed parameter.

\* CCDEF \\nCLASS o DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA out TYPE REF TO if\_demo\_output. \\nENDCLASS. \\n\\ \\n\* Public class definition \\nCLASS cl\_demo\_pcre\_callout DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* CCIMP \\nCLASS handle\_regex DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES if\_abap\_matcher\_callout. \\nENDCLASS. \\n\\ \\nCLASS handle\_regex IMPLEMENTATION. \\n METHOD if\_abap\_matcher\_callout~callout. \\n o=>out->write( \\n |\\{ callout\_num \\} \\{ callout\_string \\}| ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_pcre\_callout IMPLEMENTATION. \\n METHOD main. \\n o=>out = out. \\n\\ \\n FINAL(regex) = cl\_abap\_regex=>create\_pcre( \\n pattern = \`a(?C1)b(?C2)c(?C3)d(?C"D")e(?C"E")\` ). \\n\\ \\n FINAL(matcher) = regex->create\_matcher( text = \`abcde\` ). \\n\\ \\n FINAL(handler) = NEW handle\_regex( ). \\n matcher->set\_callout( handler ). \\n matcher->match( ). \\n ENDMETHOD. \\nENDCLASS. \* CCDEF \\nCLASS o DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA out TYPE REF TO if\_demo\_output. \\nENDCLASS. \\n\\ \\n\* Public class definition \\nCLASS cl\_demo\_pcre\_callout DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* CCIMP \\nCLASS handle\_regex DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES if\_abap\_matcher\_callout. \\nENDCLASS. \\n\\ \\nCLASS handle\_regex IMPLEMENTATION. \\n METHOD if\_abap\_matcher\_callout~callout. \\n o=>out->write( \\n |\\{ callout\_num \\} \\{ callout\_string \\}| ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_pcre\_callout IMPLEMENTATION. \\n METHOD main. \\n o=>out = out. \\n\\ \\n FINAL(regex) = cl\_abap\_regex=>create\_pcre( \\n pattern = \`a(?C1)b(?C2)c(?C3)d(?C"D")e(?C"E")\` ). \\n\\ \\n FINAL(matcher) = regex->create\_matcher( text = \`abcde\` ). \\n\\ \\n FINAL(handler) = NEW handle\_regex( ). \\n matcher->set\_callout( handler ). \\n matcher->match( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenregular\_expressions.html abenregex\_system\_classes.html