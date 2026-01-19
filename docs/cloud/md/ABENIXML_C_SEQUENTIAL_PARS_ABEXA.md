---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENIXML_C_SEQUENTIAL_PARS_ABEXA.htm"
abapFile: "ABENIXML_C_SEQUENTIAL_PARS_ABEXA.html"
keywords: ["loop", "do", "if", "method", "class", "data", "ABENIXML", "SEQUENTIAL", "PARS", "ABEXA"]
---

Parses simple XML data sequentially.

XML data is first transformed to an input stream object and this object is then processed in a loop using a parser object until the method `PARSE_EVENT` returns an initial value. To define the sequences, the events `CO_EVENT_ELEMENT_PRE` and `CO_EVENT_ELEMENT_POST` of the interface are registered before the loop. These events are raised before and after the parsing of an element. The loop produces the name and value of the current element. The current DOM representation of the XML document is rendered in each loop pass and is also displayed.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_ixml\_cloud\_pars\_sqntl DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS xml\_source. \\n METHODS handle\_errors \\n IMPORTING parser TYPE REF TO if\_ixml\_parser\_core. \\n DATA xml\_string TYPE string. \\n DATA xml\_xstring TYPE xstring. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ixml\_cloud\_pars\_sqntl IMPLEMENTATION. \\n METHOD main. \\n xml\_source( ). \\n\\ \\n FINAL(ixml) = cl\_ixml\_core=>create( ). \\n FINAL(stream\_factory) = ixml->create\_stream\_factory( ). \\n\\ \\n FINAL(istream) = stream\_factory->create\_istream\_xstring( \\n string = xml\_xstring ). \\n\\ \\n FINAL(document) = ixml->create\_document( ). \\n FINAL(parser) = ixml->create\_parser( \\n stream\_factory = stream\_factory \\n istream = istream \\n document = document ). \\n\\ \\n parser->set\_event\_subscription( \\n events = if\_ixml\_event=>co\_event\_element\_pre + \\n if\_ixml\_event=>co\_event\_element\_post ). \\n\\ \\n DO. \\n FINAL(event) = parser->parse\_event( ). \\n IF event IS INITIAL. \\n EXIT. \\n ENDIF. \\n FINAL(name) = event->get\_name( ). \\n FINAL(value) = event->get\_value( ). \\n out->write( |\\{ name \\} \\{ value \\}| ). \\n FINAL(xml\_string) = \`\`. \\n ixml->create\_renderer( \\n document = document \\n ostream = stream\_factory->create\_ostream\_xstring( \\n string = xml\_xstring ) \\n )->render( ). \\n out->write\_xml( xml\_string )->line( ). \\n ENDDO. \\n\\ \\n IF parser->num\_errors( ) > 0. \\n handle\_errors( parser ). \\n RETURN. \\n ENDIF. \\n ENDMETHOD. \\n METHOD handle\_errors. \\n DO parser->num\_errors( ) TIMES. \\n FINAL(error) = parser->get\_error( index = sy-index - 1 ). \\n FINAL(reason) = error->get\_reason( ). \\n ... \\n ENDDO. \\n ENDMETHOD. \\n METHOD xml\_source. \\n xml\_string = \\n \`\` && \\n \` aaa\` && \\n \` bbb\` && \\n \`\`. \\n\\ \\n CALL TRANSFORMATION id \\n SOURCE XML xml\_string \\n RESULT XML xml\_xstring. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_ixml\_cloud\_pars\_sqntl DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS xml\_source. \\n METHODS handle\_errors \\n IMPORTING parser TYPE REF TO if\_ixml\_parser\_core. \\n DATA xml\_string TYPE string. \\n DATA xml\_xstring TYPE xstring. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ixml\_cloud\_pars\_sqntl IMPLEMENTATION. \\n METHOD main. \\n xml\_source( ). \\n\\ \\n FINAL(ixml) = cl\_ixml\_core=>create( ). \\n FINAL(stream\_factory) = ixml->create\_stream\_factory( ). \\n\\ \\n FINAL(istream) = stream\_factory->create\_istream\_xstring( \\n string = xml\_xstring ). \\n\\ \\n FINAL(document) = ixml->create\_document( ). \\n FINAL(parser) = ixml->create\_parser( \\n stream\_factory = stream\_factory \\n istream = istream \\n document = document ). \\n\\ \\n parser->set\_event\_subscription( \\n events = if\_ixml\_event=>co\_event\_element\_pre + \\n if\_ixml\_event=>co\_event\_element\_post ). \\n\\ \\n DO. \\n FINAL(event) = parser->parse\_event( ). \\n IF event IS INITIAL. \\n EXIT. \\n ENDIF. \\n FINAL(name) = event->get\_name( ). \\n FINAL(value) = event->get\_value( ). \\n out->write( |\\{ name \\} \\{ value \\}| ). \\n FINAL(xml\_string) = \`\`. \\n ixml->create\_renderer( \\n document = document \\n ostream = stream\_factory->create\_ostream\_xstring( \\n string = xml\_xstring ) \\n )->render( ). \\n out->write\_xml( xml\_string )->line( ). \\n ENDDO. \\n\\ \\n IF parser->num\_errors( ) > 0. \\n handle\_errors( parser ). \\n RETURN. \\n ENDIF. \\n ENDMETHOD. \\n METHOD handle\_errors. \\n DO parser->num\_errors( ) TIMES. \\n FINAL(error) = parser->get\_error( index = sy-index - 1 ). \\n FINAL(reason) = error->get\_reason( ). \\n ... \\n ENDDO. \\n ENDMETHOD. \\n METHOD xml\_source. \\n xml\_string = \\n \`\` && \\n \` aaa\` && \\n \` bbb\` && \\n \`\`. \\n\\ \\n CALL TRANSFORMATION id \\n SOURCE XML xml\_string \\n RESULT XML xml\_xstring. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib\_cloud.html abenabap\_ixml\_lib\_c\_abexas.html