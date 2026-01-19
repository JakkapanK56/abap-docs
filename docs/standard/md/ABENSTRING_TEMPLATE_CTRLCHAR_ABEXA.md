---
title: "ABENSTRING_TEMPLATE_CTRLCHAR_ABEXA"
description: |
  ABENSTRING_TEMPLATE_CTRLCHAR_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_TEMPLATE_CTRLCHAR_ABEXA.htm"
abapFile: "ABENSTRING_TEMPLATE_CTRLCHAR_ABEXA.html"
keywords: ["method", "class", "data", "ABENSTRING", "TEMPLATE", "CTRLCHAR", "ABEXA"]
---

The example demonstrates the formatting of a text using [control characters](ABENCONTROL_CHARACTER_GLOSRY.html).

A string template with literal text and control character is output using the class `CL_DEMO_OUTPUT`. The text output is formatted with line feeds and tabulators.

Note that the output shown here is not a direct display of the character string but an HTML representation displayed in a browser. In the HTML representation, the control characters are replaced by normal characters suitable for HTML.

\* Public class definition \\nCLASS cl\_demo\_str\_template\_ctrl\_char DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_template\_ctrl\_char IMPLEMENTATION. \\n METHOD main. \\n\\ \\n out->write( \\n |First line.\\\\r\\\\ttab\\\\ttab\\\\ttab\\\\n\\\\ttab\\\\ttab\\\\ttab\\\\rLast line.| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_str\_template\_ctrl\_char DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_template\_ctrl\_char IMPLEMENTATION. \\n METHOD main. \\n\\ \\n out->write( \\n |First line.\\\\r\\\\ttab\\\\ttab\\\\ttab\\\\n\\\\ttab\\\\ttab\\\\ttab\\\\rLast line.| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abapcompute\_string.html abenstring\_templates.html abenstring\_templates\_abexas.html