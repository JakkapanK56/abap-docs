---
title: "ABENSXML_RENDERERING_NS_ABEXA"
description: |
  ABENSXML_RENDERERING_NS_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSXML_RENDERERING_NS_ABEXA.htm"
abapFile: "ABENSXML_RENDERERING_NS_ABEXA.html"
keywords: ["if", "method", "class", "data", "ABENSXML", "RENDERERING", "ABEXA"]
---

Namespace declarations in [token-based rendering](ABENABAP_SXML_LIB_RENDER_TOKEN.html).

The example shows how the parameters `NSURI` and `PREFIX` of the token-based rendering methods of the interface `IF_SXML_WRITER` can be created.

\* Public class definition \\nCLASS cl\_demo\_sxml\_token\_wrtr\_nsuri DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sxml\_token\_wrtr\_nsuri IMPLEMENTATION. \\n METHOD main. \\n FINAL(writer) = \\n CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create( ) ). \\n\\ \\n FINAL(nsuri1) = \`http://www.sap.com/abapdemos\`. \\n FINAL(nsuri2) = \`http://www.sap.com/abapdemos/sub\`. \\n writer->open\_element( name = 'texts' \\n nsuri = nsuri1 \\n prefix = 'demo' ). \\n writer->write\_namespace\_declaration( nsuri = nsuri2 \\n prefix = 'sub' ). \\n writer->open\_element( name = 'text' \\n nsuri = nsuri2 ). \\n writer->write\_value( 'aaaa' ). \\n writer->close\_element( ). \\n writer->open\_element( name = 'text' \\n nsuri = nsuri2 ). \\n writer->write\_value( 'bbbb' ). \\n writer->close\_element( ). \\n writer->close\_element( ). \\n\\ \\n FINAL(xml) = \\n CAST cl\_sxml\_string\_writer( writer )->get\_output( ). \\n out->write\_xml( xml ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_sxml\_token\_wrtr\_nsuri DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sxml\_token\_wrtr\_nsuri IMPLEMENTATION. \\n METHOD main. \\n FINAL(writer) = \\n CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create( ) ). \\n\\ \\n FINAL(nsuri1) = \`http://www.sap.com/abapdemos\`. \\n FINAL(nsuri2) = \`http://www.sap.com/abapdemos/sub\`. \\n writer->open\_element( name = 'texts' \\n nsuri = nsuri1 \\n prefix = 'demo' ). \\n writer->write\_namespace\_declaration( nsuri = nsuri2 \\n prefix = 'sub' ). \\n writer->open\_element( name = 'text' \\n nsuri = nsuri2 ). \\n writer->write\_value( 'aaaa' ). \\n writer->close\_element( ). \\n writer->open\_element( name = 'text' \\n nsuri = nsuri2 ). \\n writer->write\_value( 'bbbb' ). \\n writer->close\_element( ). \\n writer->close\_element( ). \\n\\ \\n FINAL(xml) = \\n CAST cl\_sxml\_string\_writer( writer )->get\_output( ). \\n out->write\_xml( xml ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_sxml\_lib.html abenabap\_sxml\_lib\_abexas.html