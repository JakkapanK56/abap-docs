---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREGEX_ABEXA.htm"
abapFile: "ABENREGEX_ABEXA.html"
keywords: ["do", "while", "if", "case", "method", "class", "data", "ABENREGEX", "ABEXA"]
---

The example demonstrates how to search for a regular expression.

The example allows a text, a regular expression, and the syntax of the regular expression to be entered. The class searches the text line `text` for the first match of the search pattern defined in the regular expression and highlights this section in the result display. The search is case-sensitive. For searching the statement [`FIND`](ABAPFIND.html) is used, while for marking the result, the statement [`REPLACE`](ABAPREPLACE.html) is used where the operator `$0` serves as a placeholder for the match in the replacement text.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_find\_regex DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_find\_regex IMPLEMENTATION. \\n METHOD main. \\n DATA regobj TYPE REF TO cl\_abap\_regex. \\n\\ \\n DATA(regex) = \`\\\\b.at\\\\b\`. \\n DATA(text) = \`Cathy's cat with the hat sat on Matt's mat.\`. \\n DATA standard TYPE cl\_abap\_regex=>regex\_standard. \\n standard = cl\_abap\_regex=>c\_regex\_standard-pcre. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = text \\n )->add\_field( CHANGING field = regex \\n )->add\_field( CHANGING field = standard \\n )->request( ). \\n\\ \\n CASE standard. \\n WHEN cl\_abap\_regex=>c\_regex\_standard-pcre. \\n regobj = cl\_abap\_regex=>create\_pcre( regex ). \\n WHEN cl\_abap\_regex=>c\_regex\_standard-xpath2. \\n regobj = cl\_abap\_regex=>create\_xpath2( regex ). \\n WHEN cl\_abap\_regex=>c\_regex\_standard-xsd. \\n regobj = cl\_abap\_regex=>create\_xsd( regex ). \\n WHEN cl\_abap\_regex=>c\_regex\_standard-posix. \\n regobj = cl\_abap\_regex=>create\_posix( regex ) ##regex\_posix. \\n ENDCASE. \\n\\ \\n FIND REGEX regobj IN text. \\n\\ \\n IF sy-subrc = 0. \\n REPLACE REGEX regobj IN text \\n WITH \`**$0**\`. \\n out->write\_html( \\n \`\` && text && \`\` ). \\n ELSE. \\n out->write( \`Not found\` ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_find\_regex DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_find\_regex IMPLEMENTATION. \\n METHOD main. \\n DATA regobj TYPE REF TO cl\_abap\_regex. \\n\\ \\n DATA(regex) = \`\\\\b.at\\\\b\`. \\n DATA(text) = \`Cathy's cat with the hat sat on Matt's mat.\`. \\n DATA standard TYPE cl\_abap\_regex=>regex\_standard. \\n standard = cl\_abap\_regex=>c\_regex\_standard-pcre. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = text \\n )->add\_field( CHANGING field = regex \\n )->add\_field( CHANGING field = standard \\n )->request( ). \\n\\ \\n CASE standard. \\n WHEN cl\_abap\_regex=>c\_regex\_standard-pcre. \\n regobj = cl\_abap\_regex=>create\_pcre( regex ). \\n WHEN cl\_abap\_regex=>c\_regex\_standard-xpath2. \\n regobj = cl\_abap\_regex=>create\_xpath2( regex ). \\n WHEN cl\_abap\_regex=>c\_regex\_standard-xsd. \\n regobj = cl\_abap\_regex=>create\_xsd( regex ). \\n WHEN cl\_abap\_regex=>c\_regex\_standard-posix. \\n regobj = cl\_abap\_regex=>create\_posix( regex ) ##regex\_posix. \\n ENDCASE. \\n\\ \\n FIND REGEX regobj IN text. \\n\\ \\n IF sy-subrc = 0. \\n REPLACE REGEX regobj IN text \\n WITH \`**$0**\`. \\n out->write\_html( \\n \`\` && text && \`\` ). \\n ELSE. \\n out->write( \`Not found\` ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenregular\_expressions.html abenregex\_system\_classes.html