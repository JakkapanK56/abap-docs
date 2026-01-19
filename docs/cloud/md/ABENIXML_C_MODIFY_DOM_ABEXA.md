---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENIXML_C_MODIFY_DOM_ABEXA.htm"
abapFile: "ABENIXML_C_MODIFY_DOM_ABEXA.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABENIXML", "MODIFY", "DOM", "ABEXA"]
---

Modifies XML documents in DOM representation.

XML data is parsed to a DOM object. An iterator is used to iterate across all nodes of the document. If the element is a text element, its content is transformed to uppercase. The modified document is rendered and displayed. See also the corresponding executable example for [sXML Library](ABENSXML_READER_WRITER_ABEXA.html).

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_ixml\_cld\_modify\_elmnts DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS xml\_source. \\n DATA xml\_string TYPE string. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ixml\_cld\_modify\_elmnts IMPLEMENTATION. \\n METHOD main. \\n xml\_source( ). \\n\\ \\n DATA(xml) = \\n cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n source = xml\_string ). \\n\\ \\n FINAL(o) = out->begin\_section( 'Original XML Data' \\n )->write\_xml( xml ). \\n\\ \\n FINAL(ixml) = cl\_ixml\_core=>create( ). \\n FINAL(stream\_factory) = ixml->create\_stream\_factory( ). \\n FINAL(document) = ixml->create\_document( ). \\n IF ixml->create\_parser( \\n document = document \\n stream\_factory = stream\_factory \\n istream = stream\_factory->create\_istream\_xstring( string = xml ) \\n )->parse( ) <> 0. \\n RETURN. \\n ENDIF. \\n\\ \\n DATA(renderer) = ixml->create\_renderer( document = document \\n ostream = \\n stream\_factory->create\_ostream\_xstring( \\n string = xml ) \\n ). \\n\\ \\n FINAL(iterator) = document->create\_iterator( ). \\n DO. \\n FINAL(node) = iterator->get\_next( ). \\n IF node IS INITIAL. \\n EXIT. \\n ENDIF. \\n IF node->get\_type( ) = if\_ixml\_node=>co\_node\_text. \\n node->set\_value( to\_upper( node->get\_value( ) ) ). \\n ENDIF. \\n ENDDO. \\n\\ \\n CLEAR xml. \\n renderer->render( ). \\n\\ \\n out->next\_section( 'Modified XML Data' \\n )->write\_xml( xml ). \\n ENDMETHOD. \\n METHOD xml\_source. \\n xml\_string = \\n \`\` && \\n \`aaaa\` && \\n \`bbbb\` && \\n \`cccc\` && \\n \`\`. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_ixml\_cld\_modify\_elmnts DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS xml\_source. \\n DATA xml\_string TYPE string. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ixml\_cld\_modify\_elmnts IMPLEMENTATION. \\n METHOD main. \\n xml\_source( ). \\n\\ \\n DATA(xml) = \\n cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n source = xml\_string ). \\n\\ \\n FINAL(o) = out->begin\_section( 'Original XML Data' \\n )->write\_xml( xml ). \\n\\ \\n FINAL(ixml) = cl\_ixml\_core=>create( ). \\n FINAL(stream\_factory) = ixml->create\_stream\_factory( ). \\n FINAL(document) = ixml->create\_document( ). \\n IF ixml->create\_parser( \\n document = document \\n stream\_factory = stream\_factory \\n istream = stream\_factory->create\_istream\_xstring( string = xml ) \\n )->parse( ) <> 0. \\n RETURN. \\n ENDIF. \\n\\ \\n DATA(renderer) = ixml->create\_renderer( document = document \\n ostream = \\n stream\_factory->create\_ostream\_xstring( \\n string = xml ) \\n ). \\n\\ \\n FINAL(iterator) = document->create\_iterator( ). \\n DO. \\n FINAL(node) = iterator->get\_next( ). \\n IF node IS INITIAL. \\n EXIT. \\n ENDIF. \\n IF node->get\_type( ) = if\_ixml\_node=>co\_node\_text. \\n node->set\_value( to\_upper( node->get\_value( ) ) ). \\n ENDIF. \\n ENDDO. \\n\\ \\n CLEAR xml. \\n renderer->render( ). \\n\\ \\n out->next\_section( 'Modified XML Data' \\n )->write\_xml( xml ). \\n ENDMETHOD. \\n METHOD xml\_source. \\n xml\_string = \\n \`\` && \\n \`aaaa\` && \\n \`bbbb\` && \\n \`cccc\` && \\n \`\`. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib\_cloud.html abenabap\_ixml\_lib\_c\_abexas.html