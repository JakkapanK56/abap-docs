---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENXPATH_REGEX_ABEXA.htm"
abapFile: "ABENXPATH_REGEX_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENXPATH", "REGEX", "ABEXA"]
---

The example demonstrates an XPath regular expression.

The example uses the special characters `\\i` and `\\c` in an XPath regular expression that match any character that can be the first character of an XML name or any character that can occur after the first character of an XML name. The regular expression extracts the name of tags and the attributes from an XML file.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_xpath\_regex DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_xpath\_regex IMPLEMENTATION. \\n METHOD main. \\n FINAL(xml) = \\n \`\` && \\n \`\`. \\n\\ \\n FINAL(matcher) = cl\_abap\_regex=>create\_xpath2( \\n pattern = \\n \`<(\\\\i\\\\c\*)((?:\\\\s+\\\\i\\\\c\*\\\\s\*=\\\\s\*(?:'\[^'\]\*'|"\[^"\]\*"))\*)\\\\s\*/?>\` \\n )->create\_matcher( text = xml ). \\n\\ \\n TYPES matches TYPE TABLE OF string WITH EMPTY KEY. \\n DATA o TYPE REF TO if\_demo\_output. \\n o = REDUCE #( \\n INIT o1 = out \\n FOR IN matcher->find\_all( ) \\n NEXT o1 = o1->write( \\n name = \`Matches\` \\n data = VALUE matches( \\n ( |Full Match: '\\{ \\n substring( val = xml \\n off = \-offset \\n len = \-length ) \\}'| ) \\n ( |Tag Name: '\\{ \\n substring( val = xml \\n off = \-submatches\[ 1 \]-offset \\n len = \-submatches\[ 1 \]-length ) \\}'| ) \\n ( |Attributes: '\\{ condense( \\n substring( val = xml \\n off = \-submatches\[ 2 \]-offset \\n len = \-submatches\[ 2 \]-length ) ) \\}'| ) ) ) \\n ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_xpath\_regex DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_xpath\_regex IMPLEMENTATION. \\n METHOD main. \\n FINAL(xml) = \\n \`\` && \\n \`\`. \\n\\ \\n FINAL(matcher) = cl\_abap\_regex=>create\_xpath2( \\n pattern = \\n \`<(\\\\i\\\\c\*)((?:\\\\s+\\\\i\\\\c\*\\\\s\*=\\\\s\*(?:'\[^'\]\*'|"\[^"\]\*"))\*)\\\\s\*/?>\` \\n )->create\_matcher( text = xml ). \\n\\ \\n TYPES matches TYPE TABLE OF string WITH EMPTY KEY. \\n DATA o TYPE REF TO if\_demo\_output. \\n o = REDUCE #( \\n INIT o1 = out \\n FOR IN matcher->find\_all( ) \\n NEXT o1 = o1->write( \\n name = \`Matches\` \\n data = VALUE matches( \\n ( |Full Match: '\\{ \\n substring( val = xml \\n off = \-offset \\n len = \-length ) \\}'| ) \\n ( |Tag Name: '\\{ \\n substring( val = xml \\n off = \-submatches\[ 1 \]-offset \\n len = \-submatches\[ 1 \]-length ) \\}'| ) \\n ( |Attributes: '\\{ condense( \\n substring( val = xml \\n off = \-submatches\[ 2 \]-offset \\n len = \-submatches\[ 2 \]-length ) ) \\}'| ) ) ) \\n ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenregular\_expressions.html abenregex\_syntax.html abenregex\_xpath\_syntax.html