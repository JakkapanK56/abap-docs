---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENIXML_C_NODE_LIST_ITRTR_ABEXA.htm"
abapFile: "ABENIXML_C_NODE_LIST_ITRTR_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENIXML", "NODE", "LIST", "ITRTR", "ABEXA"]
---

Accesses the nodes in a node list in DOM using an iterator.

XML data is first transformed to an input stream object and the object is then imported into a DOM object using a parser object. If parsed successfully, an iterator is created for the subnodes of the root node and used for iterations.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_ixml\_cld\_node\_list\_itr DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS xml\_source. \\n DATA xml\_string TYPE string. \\n DATA xml\_xstring TYPE xstring. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ixml\_cld\_node\_list\_itr IMPLEMENTATION. \\n METHOD main. \\n xml\_source( ). \\n\\ \\n FINAL(ixml) = cl\_ixml\_core=>create( ). \\n FINAL(stream\_factory) = ixml->create\_stream\_factory( ). \\n\\ \\n FINAL(istream) = stream\_factory->create\_istream\_xstring( \\n string = xml\_xstring ). \\n\\ \\n FINAL(document) = ixml->create\_document( ). \\n FINAL(parser) = ixml->create\_parser( \\n stream\_factory = stream\_factory \\n istream = istream \\n document = document ). \\n\\ \\n FINAL(rc) = parser->parse( ). \\n\\ \\n IF rc IS NOT INITIAL. \\n ... "Error handling \\n RETURN. \\n ENDIF. \\n\\ \\n FINAL(nodes) = document->get\_root\_element( )->get\_children( ). \\n FINAL(iterator) = nodes->create\_iterator( ). \\n\\ \\n DO. \\n FINAL(node) = iterator->get\_next( ). \\n IF node IS INITIAL. \\n EXIT. \\n ENDIF. \\n out->write\_text( |\\{ node->get\_name( ) \\} | && \\n |\\{ node->get\_value( ) \\}| ). \\n ENDDO. \\n ENDMETHOD. \\n METHOD xml\_source. \\n xml\_string = \\n \`\` && \\n \` aaa\` && \\n \` bbb\` && \\n \`\`. \\n\\ \\n CALL TRANSFORMATION id \\n SOURCE XML xml\_string \\n RESULT XML xml\_xstring. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_ixml\_cld\_node\_list\_itr DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS xml\_source. \\n DATA xml\_string TYPE string. \\n DATA xml\_xstring TYPE xstring. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ixml\_cld\_node\_list\_itr IMPLEMENTATION. \\n METHOD main. \\n xml\_source( ). \\n\\ \\n FINAL(ixml) = cl\_ixml\_core=>create( ). \\n FINAL(stream\_factory) = ixml->create\_stream\_factory( ). \\n\\ \\n FINAL(istream) = stream\_factory->create\_istream\_xstring( \\n string = xml\_xstring ). \\n\\ \\n FINAL(document) = ixml->create\_document( ). \\n FINAL(parser) = ixml->create\_parser( \\n stream\_factory = stream\_factory \\n istream = istream \\n document = document ). \\n\\ \\n FINAL(rc) = parser->parse( ). \\n\\ \\n IF rc IS NOT INITIAL. \\n ... "Error handling \\n RETURN. \\n ENDIF. \\n\\ \\n FINAL(nodes) = document->get\_root\_element( )->get\_children( ). \\n FINAL(iterator) = nodes->create\_iterator( ). \\n\\ \\n DO. \\n FINAL(node) = iterator->get\_next( ). \\n IF node IS INITIAL. \\n EXIT. \\n ENDIF. \\n out->write\_text( |\\{ node->get\_name( ) \\} | && \\n |\\{ node->get\_value( ) \\}| ). \\n ENDDO. \\n ENDMETHOD. \\n METHOD xml\_source. \\n xml\_string = \\n \`\` && \\n \` aaa\` && \\n \` bbb\` && \\n \`\`. \\n\\ \\n CALL TRANSFORMATION id \\n SOURCE XML xml\_string \\n RESULT XML xml\_xstring. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib\_cloud.html abenabap\_ixml\_lib\_c\_abexas.html