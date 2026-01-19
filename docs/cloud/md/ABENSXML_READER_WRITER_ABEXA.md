---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSXML_READER_WRITER_ABEXA.htm"
abapFile: "ABENSXML_READER_WRITER_ABEXA.html"
keywords: ["loop", "do", "if", "case", "method", "class", "data", "ABENSXML", "READER", "WRITER", "ABEXA"]
---

Reads, modifies, and writes to XML data.

In a loop, XML data is [parsed using object-oriented methods](ABENABAP_SXML_LIB_PARSE_OO.html). If the node has a character-like value, the value in the associated object is transformed to uppercase letters. All read nodes and any modified nodes are [rendered using object-oriented methods](ABENABAP_SXML_LIB_RENDER_OO.html) in the same loop. The result is XML data in which all literal text elements are in uppercase letters. See also the corresponding executable example for the iXML Library.

Any parts of XML data can be modified in a similar way. For example, the functions [`to_mixed`](ABENCASE_FUNCTIONS.html), [`from_mixed`](ABENCASE_FUNCTIONS.html) can be used to convert the names of XML elements between different naming conventions.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sxml\_reader\_writer DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sxml\_reader\_writer IMPLEMENTATION. \\n METHOD main. \\n FINAL(xml) = \\n cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n \`\` && \\n \`aaaa\` && \\n \`bbbb\` && \\n \`cccc\` && \\n \`\` ). \\n\\ \\n out->begin\_section( 'Original XML-Data' \\n )->write\_xml( xml ). \\n\\ \\n FINAL(reader) = cl\_sxml\_string\_reader=>create( xml ). \\n FINAL(writer) = CAST if\_sxml\_writer( \\n cl\_sxml\_string\_writer=>create( ) ). \\n DO. \\n FINAL(node) = reader->read\_next\_node( ). \\n IF node IS INITIAL. \\n EXIT. \\n ENDIF. \\n IF node IS INSTANCE OF if\_sxml\_value\_node. \\n FINAL(value\_node) = CAST if\_sxml\_value\_node( node ). \\n IF value\_node->value\_type = if\_sxml\_value=>co\_vt\_text. \\n value\_node->set\_value( \\n to\_upper( value\_node->get\_value( ) ) ). \\n ENDIF. \\n ENDIF. \\n writer->write\_node( node ). \\n ENDDO. \\n\\ \\n out->next\_section( 'Modified XML-Data' \\n )->write\_xml( \\n CAST cl\_sxml\_string\_writer( writer )->get\_output( ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sxml\_reader\_writer DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sxml\_reader\_writer IMPLEMENTATION. \\n METHOD main. \\n FINAL(xml) = \\n cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n \`\` && \\n \`aaaa\` && \\n \`bbbb\` && \\n \`cccc\` && \\n \`\` ). \\n\\ \\n out->begin\_section( 'Original XML-Data' \\n )->write\_xml( xml ). \\n\\ \\n FINAL(reader) = cl\_sxml\_string\_reader=>create( xml ). \\n FINAL(writer) = CAST if\_sxml\_writer( \\n cl\_sxml\_string\_writer=>create( ) ). \\n DO. \\n FINAL(node) = reader->read\_next\_node( ). \\n IF node IS INITIAL. \\n EXIT. \\n ENDIF. \\n IF node IS INSTANCE OF if\_sxml\_value\_node. \\n FINAL(value\_node) = CAST if\_sxml\_value\_node( node ). \\n IF value\_node->value\_type = if\_sxml\_value=>co\_vt\_text. \\n value\_node->set\_value( \\n to\_upper( value\_node->get\_value( ) ) ). \\n ENDIF. \\n ENDIF. \\n writer->write\_node( node ). \\n ENDDO. \\n\\ \\n out->next\_section( 'Modified XML-Data' \\n )->write\_xml( \\n CAST cl\_sxml\_string\_writer( writer )->get\_output( ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_sxml\_lib.html abenabap\_sxml\_lib\_abexas.html