---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTRING_TEMPLATE_CTRLCHAR_ABEXA.htm"
abapFile: "ABENSTRING_TEMPLATE_CTRLCHAR_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENSTRING", "TEMPLATE", "CTRLCHAR", "ABEXA"]
---

The example demonstrates the formatting of a text using [control characters](ABENCONTROL_CHARACTER_GLOSRY.html).

A string template with literal text and control character is output using the class `CL_DEMO_OUTPUT`. The text output is formatted with line feeds and tabulators.

Note that the output shown here is not a direct display of the character string but an HTML representation displayed in a browser. In the HTML representation, the control characters are replaced by normal characters suitable for HTML.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_str\_template\_ctrl\_char DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_template\_ctrl\_char IMPLEMENTATION. \\n METHOD main. \\n\\ \\n out->write( \\n |First line.\\\\r\\\\ttab\\\\ttab\\\\ttab\\\\n\\\\ttab\\\\ttab\\\\ttab\\\\rLast line.| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_str\_template\_ctrl\_char DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_template\_ctrl\_char IMPLEMENTATION. \\n METHOD main. \\n\\ \\n out->write( \\n |First line.\\\\r\\\\ttab\\\\ttab\\\\ttab\\\\n\\\\ttab\\\\ttab\\\\ttab\\\\rLast line.| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abapcompute\_string.html abenstring\_templates.html abenstring\_templates\_abexas.html