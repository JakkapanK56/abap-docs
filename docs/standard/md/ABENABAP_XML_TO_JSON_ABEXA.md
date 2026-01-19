---
title: "ABENABAP_XML_TO_JSON_ABEXA"
description: |
  ABENABAP_XML_TO_JSON_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_XML_TO_JSON_ABEXA.htm"
abapFile: "ABENABAP_XML_TO_JSON_ABEXA.html"
keywords: ["if", "method", "data", "ABENABAP", "XML", "JSON", "ABEXA"]
---

Transforms XML data to JSON.

This example demonstrates the transformation of XML data to JSON. This is achieved in `CL_DEMO_XML_TO_JSON` via token-based parsing of the XML data using methods of the [sXML library](ABENABAP_SXML_LIB.html) and then token-based rendering of this data to [JSON-XML](ABENJSON_XML_GLOSRY.html). A [JSON writer](ABENJSON_WRITER_GLOSRY.html) is filled directly. If an [XML writer](ABENXML_WRITER_GLOSRY.html) had been specified instead (shown as a comment in the source code), the result would be JSON-XML.

REPORT demo\_xml\_to\_json.\\n\\ncl\_demo\_xml\_to\_json=>main( ).\\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_abexas.html