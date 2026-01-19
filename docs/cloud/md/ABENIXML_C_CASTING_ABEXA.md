---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENIXML_C_CASTING_ABEXA.htm"
abapFile: "ABENIXML_C_CASTING_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENIXML", "CASTING", "ABEXA"]
---

Downcast options for the interfaces in iXML Library.

An iterator is created for all nodes of a parsed XML document and these are used to iterate. To identify nodes that are not elements, downcasts are performed from `IF_IXML_NODE` to `IF_IXML_ELEMENT`. Both checks on regular downcasts using the predicate expression [`IS INSTANCE OF`](ABENLOGEXP_INSTANCE_OF.html) and downcasts using the method `QUERY_INTERFACE` of the interface `IF_IXML_UNKNOWN` are demonstrated.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_ixml\_cld\_casting DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS xml\_source. \\n DATA xml\_string TYPE string. \\n DATA xml\_xstring TYPE xstring. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ixml\_cld\_casting IMPLEMENTATION. \\n METHOD main. \\n xml\_source( ). \\n\\ \\n FINAL(ixml) = cl\_ixml\_core=>create( ). \\n FINAL(stream\_factory) = ixml->create\_stream\_factory( ). \\n\\ \\n FINAL(istream) = stream\_factory->create\_istream\_xstring( \\n string = xml\_xstring ). \\n\\ \\n FINAL(document) = ixml->create\_document( ). \\n FINAL(parser) = ixml->create\_parser( \\n stream\_factory = stream\_factory \\n istream = istream \\n document = document ). \\n\\ \\n FINAL(rc) = parser->parse( ). \\n\\ \\n IF rc IS NOT INITIAL. \\n ... "Error handling \\n RETURN. \\n ENDIF. \\n\\ \\n FINAL(iterator) = document->create\_iterator( ). \\n DO. \\n FINAL(node) = iterator->get\_next( ). \\n IF node IS INITIAL. \\n EXIT. \\n ENDIF. \\n DATA element TYPE REF TO if\_ixml\_element. \\n "Normal down cast \\n IF node IS NOT INSTANCE OF if\_ixml\_element. \\n out->write\_text( \\n |\\{ node->get\_name( ) \\} is not an element| ). \\n ENDIF. \\n "Special down cast \\n element ?= node->query\_interface( 130 ). \\n IF element IS INITIAL. \\n out->write\_text( \\n |\\{ node->get\_name( ) \\} is not an element| ). \\n ENDIF. \\n ENDDO. \\n ENDMETHOD. \\n METHOD xml\_source. \\n xml\_string = \\n \`\` && \\n \` aaa\` && \\n \` bbb\` && \\n \`\`. \\n\\ \\n CALL TRANSFORMATION id \\n SOURCE XML xml\_string \\n RESULT XML xml\_xstring. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_ixml\_cld\_casting DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS xml\_source. \\n DATA xml\_string TYPE string. \\n DATA xml\_xstring TYPE xstring. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ixml\_cld\_casting IMPLEMENTATION. \\n METHOD main. \\n xml\_source( ). \\n\\ \\n FINAL(ixml) = cl\_ixml\_core=>create( ). \\n FINAL(stream\_factory) = ixml->create\_stream\_factory( ). \\n\\ \\n FINAL(istream) = stream\_factory->create\_istream\_xstring( \\n string = xml\_xstring ). \\n\\ \\n FINAL(document) = ixml->create\_document( ). \\n FINAL(parser) = ixml->create\_parser( \\n stream\_factory = stream\_factory \\n istream = istream \\n document = document ). \\n\\ \\n FINAL(rc) = parser->parse( ). \\n\\ \\n IF rc IS NOT INITIAL. \\n ... "Error handling \\n RETURN. \\n ENDIF. \\n\\ \\n FINAL(iterator) = document->create\_iterator( ). \\n DO. \\n FINAL(node) = iterator->get\_next( ). \\n IF node IS INITIAL. \\n EXIT. \\n ENDIF. \\n DATA element TYPE REF TO if\_ixml\_element. \\n "Normal down cast \\n IF node IS NOT INSTANCE OF if\_ixml\_element. \\n out->write\_text( \\n |\\{ node->get\_name( ) \\} is not an element| ). \\n ENDIF. \\n "Special down cast \\n element ?= node->query\_interface( 130 ). \\n IF element IS INITIAL. \\n out->write\_text( \\n |\\{ node->get\_name( ) \\} is not an element| ). \\n ENDIF. \\n ENDDO. \\n ENDMETHOD. \\n METHOD xml\_source. \\n xml\_string = \\n \`\` && \\n \` aaa\` && \\n \` bbb\` && \\n \`\`. \\n\\ \\n CALL TRANSFORMATION id \\n SOURCE XML xml\_string \\n RESULT XML xml\_xstring. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib\_cloud.html abenabap\_ixml\_lib\_c\_abexas.html