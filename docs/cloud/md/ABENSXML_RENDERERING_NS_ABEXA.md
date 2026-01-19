---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSXML_RENDERERING_NS_ABEXA.htm"
abapFile: "ABENSXML_RENDERERING_NS_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENSXML", "RENDERERING", "ABEXA"]
---

Namespace declarations in [token-based rendering](ABENABAP_SXML_LIB_RENDER_TOKEN.html).

The example shows how the parameters `NSURI` and `PREFIX` of the token-based rendering methods of the interface `IF_SXML_WRITER` can be created.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sxml\_token\_wrtr\_nsuri DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sxml\_token\_wrtr\_nsuri IMPLEMENTATION. \\n METHOD main. \\n FINAL(writer) = \\n CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create( ) ). \\n\\ \\n FINAL(nsuri1) = \`http://www.sap.com/abapdemos\`. \\n FINAL(nsuri2) = \`http://www.sap.com/abapdemos/sub\`. \\n writer->open\_element( name = 'texts' \\n nsuri = nsuri1 \\n prefix = 'demo' ). \\n writer->write\_namespace\_declaration( nsuri = nsuri2 \\n prefix = 'sub' ). \\n writer->open\_element( name = 'text' \\n nsuri = nsuri2 ). \\n writer->write\_value( 'aaaa' ). \\n writer->close\_element( ). \\n writer->open\_element( name = 'text' \\n nsuri = nsuri2 ). \\n writer->write\_value( 'bbbb' ). \\n writer->close\_element( ). \\n writer->close\_element( ). \\n\\ \\n FINAL(xml) = \\n CAST cl\_sxml\_string\_writer( writer )->get\_output( ). \\n out->write\_xml( xml ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sxml\_token\_wrtr\_nsuri DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sxml\_token\_wrtr\_nsuri IMPLEMENTATION. \\n METHOD main. \\n FINAL(writer) = \\n CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create( ) ). \\n\\ \\n FINAL(nsuri1) = \`http://www.sap.com/abapdemos\`. \\n FINAL(nsuri2) = \`http://www.sap.com/abapdemos/sub\`. \\n writer->open\_element( name = 'texts' \\n nsuri = nsuri1 \\n prefix = 'demo' ). \\n writer->write\_namespace\_declaration( nsuri = nsuri2 \\n prefix = 'sub' ). \\n writer->open\_element( name = 'text' \\n nsuri = nsuri2 ). \\n writer->write\_value( 'aaaa' ). \\n writer->close\_element( ). \\n writer->open\_element( name = 'text' \\n nsuri = nsuri2 ). \\n writer->write\_value( 'bbbb' ). \\n writer->close\_element( ). \\n writer->close\_element( ). \\n\\ \\n FINAL(xml) = \\n CAST cl\_sxml\_string\_writer( writer )->get\_output( ). \\n out->write\_xml( xml ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_sxml\_lib.html abenabap\_sxml\_lib\_abexas.html