---
title: "ABENABAP_IXML_LIB_C_RENDER"
description: |
  ABENABAP_IXML_LIB_C_RENDER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_IXML_LIB_C_RENDER.htm"
abapFile: "ABENABAP_IXML_LIB_C_RENDER.html"
keywords: ["do", "if", "data", "ABENABAP", "IXML", "LIB", "RENDER"]
---

When data is rendered as character-like XML data, this data is prefixed with the byte order mark (BOM) that is required by the XML standard.

An XML document in DOM representation is rendered using an XML renderer that can be created as follows using the iXML factory:

DATA(ixml)  = cl\_ixml\_core=>create( ). \\n\\ \\n... \\n\\ \\nDATA(renderer) = ixml->create\_renderer( \\n                   ostream        = ... \\n                   document       = ... ).

The static type of the reference variable `renderer` is then the interface `IF_IXML_RENDERER_CORE`. A separate renderer is needed for each XML document. The renderer requires the following input parameters:

A renderer created in this way can be used to render the entire XML document as follows:

renderer->render( ).

The rendered document is added to the data sink of the output stream.

When the entire document is rendered, the data sink of the output stream should usually be initial beforehand. Otherwise, all the XML data is appended to existing content.

-   The output stream [`ostream`](ABENABAP_IXML_LIB_C_INPUT_OUTPUT.html) that is the target of the rendering.
-   The XML document [`document`](ABENABAP_IXML_LIB_C_INPUT_OUTPUT.html) to be rendered.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib\_cloud.html