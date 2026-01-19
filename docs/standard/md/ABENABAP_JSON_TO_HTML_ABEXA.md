---
title: "ABENABAP_JSON_TO_HTML_ABEXA"
description: |
  ABENABAP_JSON_TO_HTML_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_JSON_TO_HTML_ABEXA.htm"
abapFile: "ABENABAP_JSON_TO_HTML_ABEXA.html"
keywords: ["select", "if", "method", "class", "data", "ABENABAP", "JSON", "HTML", "ABEXA"]
---

Transformation from JSON data to HTML.

This example demonstrates how [JSON data](ABENJSON_OVIEW.html) is transformed to HTML using the XSL transformation `SJSON2HTML`. The nodes for objects and arrays can be opened and closed in the displayed result.

\* Public class definition \\nCLASS cl\_demo\_json\_2\_html DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_json\_2\_html IMPLEMENTATION. \\n METHOD main. \\n SELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(result) \\n UP TO 3 ROWS. \\n FINAL(json\_writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE result = result \\n RESULT XML json\_writer. \\n FINAL(json) = json\_writer->get\_output( ). \\n\\ \\n CALL TRANSFORMATION sjson2html SOURCE XML json \\n RESULT XML FINAL(html). \\n\\ \\n out->write\_html( \\n cl\_abap\_conv\_codepage=>create\_in( )->convert( html ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_json\_2\_html DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_json\_2\_html IMPLEMENTATION. \\n METHOD main. \\n SELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(result) \\n UP TO 3 ROWS. \\n FINAL(json\_writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE result = result \\n RESULT XML json\_writer. \\n FINAL(json) = json\_writer->get\_output( ). \\n\\ \\n CALL TRANSFORMATION sjson2html SOURCE XML json \\n RESULT XML FINAL(html). \\n\\ \\n out->write\_html( \\n cl\_abap\_conv\_codepage=>create\_in( )->convert( html ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_abexas.html