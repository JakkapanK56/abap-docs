---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTRING_FUNCTION_ESCAPE_ABEXA.htm"
abapFile: "ABENSTRING_FUNCTION_ESCAPE_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENSTRING", "FUNCTION", "ESCAPE", "ABEXA"]
---

This example demonstrates the string function [`escape`](ABENESCAPE_FUNCTIONS.html) for HTML.

The class applies the function `escape` to a string used as the body of an HTML file. The string is displayed as a text and as an HTML file both before and after the function is executed.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_escape\_html DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_escape\_html IMPLEMENTATION. \\n METHOD main. \\n DATA: body TYPE string, \\n esc\_body TYPE string. \\n\\ \\n body = \` \` \\n && \` \` \\n && \` \` \\n && \`

11

12

21

22

\`. \\n\\ \\n esc\_body = escape( val = body \\n format = cl\_abap\_format=>e\_html\_text ). \\n\\ \\n out->begin\_section( 'Original text' \\n )->write\_text( body \\n\\ \\n )->next\_section( 'Original text formatted as HTML' \\n )->write\_html( body \\n\\ \\n )->next\_section( 'Escaped text' \\n )->write\_text( esc\_body \\n\\ \\n )->next\_section( 'Escaped text formatted as HTML' \\n )->write\_html( esc\_body ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_escape\_html DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_escape\_html IMPLEMENTATION. \\n METHOD main. \\n DATA: body TYPE string, \\n esc\_body TYPE string. \\n\\ \\n body = \` \` \\n && \` \` \\n && \` \` \\n && \`

11

12

21

22

\`. \\n\\ \\n esc\_body = escape( val = body \\n format = cl\_abap\_format=>e\_html\_text ). \\n\\ \\n out->begin\_section( 'Original text' \\n )->write\_text( body \\n\\ \\n )->next\_section( 'Original text formatted as HTML' \\n )->write\_html( body \\n\\ \\n )->next\_section( 'Escaped text' \\n )->write\_text( esc\_body \\n\\ \\n )->next\_section( 'Escaped text formatted as HTML' \\n )->write\_html( esc\_body ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenstring\_functions\_abexas.html