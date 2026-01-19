---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENIXML_C_CREA_ELEM_ABEXA.htm"
abapFile: "ABENIXML_C_CREA_ELEM_ABEXA.html"
keywords: ["insert", "do", "if", "method", "class", "data", "ABENIXML", "CREA", "ELEM", "ABEXA"]
---

Creates DOM nodes step by step.

Nodes are created as elements, attributes, and content and inserted into XML data. The result represents XML data in asXML format, which can be deserialized to ABAP using `CALL TRANSFORMATION id`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_ixml\_cld\_create\_elemnt DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ixml\_cld\_create\_elemnt IMPLEMENTATION. \\n METHOD main. \\n FINAL(ixml) = cl\_ixml\_core=>create( ). \\n FINAL(document) = ixml->create\_document( ). \\n\\ \\n FINAL(root) = document->create\_element\_ns( name = 'abap' \\n prefix = 'asx' ). \\n root->set\_attribute\_ns( name = 'asx' \\n prefix = 'xmlns' \\n value = 'http://www.sap.com/abapxml' ). \\n root->set\_attribute\_ns( name = 'version' \\n value = '1.0' ). \\n document->append\_child( root ). \\n\\ \\n FINAL(node1) = document->create\_element\_ns( prefix = 'asx' \\n name = 'values' ). \\n root->append\_child( node1 ). \\n\\ \\n FINAL(node2) = document->create\_element\_ns( name = 'TEXT' ). \\n node1->append\_child( node2 ). \\n\\ \\n node2->append\_child( document->create\_text( 'Hello XML' ) ). \\n\\ \\n DATA xml\_xstring TYPE xstring. \\n\\ \\n ixml->create\_renderer( document = document \\n ostream = ixml->create\_stream\_factory( \\n )->create\_ostream\_xstring( \\n string = xml\_xstring ) \\n )->render( ). \\n out->write\_xml( xml\_xstring ). \\n\\ \\n DATA result TYPE string. \\n CALL TRANSFORMATION id SOURCE XML xml\_xstring \\n RESULT text = result. \\n out->write\_data( result ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_ixml\_cld\_create\_elemnt DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ixml\_cld\_create\_elemnt IMPLEMENTATION. \\n METHOD main. \\n FINAL(ixml) = cl\_ixml\_core=>create( ). \\n FINAL(document) = ixml->create\_document( ). \\n\\ \\n FINAL(root) = document->create\_element\_ns( name = 'abap' \\n prefix = 'asx' ). \\n root->set\_attribute\_ns( name = 'asx' \\n prefix = 'xmlns' \\n value = 'http://www.sap.com/abapxml' ). \\n root->set\_attribute\_ns( name = 'version' \\n value = '1.0' ). \\n document->append\_child( root ). \\n\\ \\n FINAL(node1) = document->create\_element\_ns( prefix = 'asx' \\n name = 'values' ). \\n root->append\_child( node1 ). \\n\\ \\n FINAL(node2) = document->create\_element\_ns( name = 'TEXT' ). \\n node1->append\_child( node2 ). \\n\\ \\n node2->append\_child( document->create\_text( 'Hello XML' ) ). \\n\\ \\n DATA xml\_xstring TYPE xstring. \\n\\ \\n ixml->create\_renderer( document = document \\n ostream = ixml->create\_stream\_factory( \\n )->create\_ostream\_xstring( \\n string = xml\_xstring ) \\n )->render( ). \\n out->write\_xml( xml\_xstring ). \\n\\ \\n DATA result TYPE string. \\n CALL TRANSFORMATION id SOURCE XML xml\_xstring \\n RESULT text = result. \\n out->write\_data( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib\_cloud.html abenabap\_ixml\_lib\_c\_abexas.html