---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENPCRE_ABEXA.htm"
abapFile: "ABENPCRE_ABEXA.html"
keywords: ["do", "while", "if", "case", "try", "catch", "method", "class", "data", "ABENPCRE", "ABEXA"]
---

The example demonstrates how to search for a regular expression in PCRE syntax.

In the example, a line of text and a regular expression can be entered. The class searches the text line `text` for the first match of the search pattern defined in the regular expression `regex` and highlights this section in the result display. The search expects a PCRE regular expression and is case-sensitive. The statement [`FIND`](ABAPFIND.html) is used to search the statement, while the statement [`REPLACE`](ABAPREPLACE.html) is used to mark the result. Here, the operator `$0` serves as a placeholder for the match in the replacement text.

The predefined example text is:

*Cathy's cat with the hat sat on Matt's mat.*

and the predefined regular expression is:

(\\\\b.at\\\\b)

The regular expression describes a word consisting of three characters, where the first is any single character and the other two are *at*.

The case-sensitive search for the first occurrence finds the word *cat*.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_find\_pcre DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_find\_pcre IMPLEMENTATION. \\n METHOD main. \\n DATA(regex) = \`\\\\b.at\\\\b\`. \\n DATA(text) = \`Cathy's cat with the hat sat on Matt's mat.\`. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = text \\n )->add\_field( CHANGING field = regex \\n )->request( ). \\n\\ \\n TRY. \\n FIND PCRE regex IN text. \\n\\ \\n IF sy-subrc = 0. \\n out->write\_html( \\n \`\` && \\n replace( \\n val = text \\n pcre = regex \\n with = \`**$0**\` ) && \\n \`\` ). \\n ELSE. \\n out->write( \`Not found\` ). \\n ENDIF. \\n CATCH cx\_sy\_invalid\_regex INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_find\_pcre DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_find\_pcre IMPLEMENTATION. \\n METHOD main. \\n DATA(regex) = \`\\\\b.at\\\\b\`. \\n DATA(text) = \`Cathy's cat with the hat sat on Matt's mat.\`. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = text \\n )->add\_field( CHANGING field = regex \\n )->request( ). \\n\\ \\n TRY. \\n FIND PCRE regex IN text. \\n\\ \\n IF sy-subrc = 0. \\n out->write\_html( \\n \`\` && \\n replace( \\n val = text \\n pcre = regex \\n with = \`**$0**\` ) && \\n \`\` ). \\n ELSE. \\n out->write( \`Not found\` ). \\n ENDIF. \\n CATCH cx\_sy\_invalid\_regex INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html abapfind.html