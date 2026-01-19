---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENIXML_C_NODE_NAMES_ABEXA.htm"
abapFile: "ABENIXML_C_NODE_NAMES_ABEXA.html"
keywords: ["loop", "do", "if", "method", "class", "data", "internal-table", "ABENIXML", "NODE", "NAMES", "ABEXA"]
---

Accesses elements of a DOM using the name.

XML data is created in asXML format using the [identity transformation](ABENID_TRAFO_GLOSRY.html) and written directly to an XML document in DOM representation.

In the XML document, first the element `TEXT` is searched for and then its value displayed. All elements `item` are then collected and their values appended to an internal table in a loop and then output.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_ixml\_cld\_acc\_names DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ixml\_cld\_acc\_names IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA source\_tab TYPE TABLE OF i. \\n source\_tab = VALUE #( FOR j = 1 UNTIL j > 10 \\n ( ipow( base = 2 exp = j ) ) ). \\n FINAL(ixml) = cl\_ixml\_core=>create( ). \\n FINAL(document) = ixml->create\_document( ). \\n CALL TRANSFORMATION id SOURCE text = \`Powers of 2\` \\n numbers = source\_tab \\n RESULT XML document. \\n\\ \\n FINAL(element) = document->find\_from\_name\_ns( name = 'TEXT' ). \\n IF element IS NOT INITIAL. \\n out->write\_data( element->get\_value( ) ). \\n ENDIF. \\n\\ \\n FINAL(elements) = \\n document->get\_elements\_by\_tag\_name( name = 'item' ). \\n DATA target\_tab LIKE source\_tab. \\n DO elements->get\_length( ) TIMES. \\n FINAL(node) = elements->get\_item( sy-index - 1 ). \\n APPEND node->get\_value( ) TO target\_tab. \\n ENDDO. \\n\\ \\n out->write( target\_tab ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_ixml\_cld\_acc\_names DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ixml\_cld\_acc\_names IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA source\_tab TYPE TABLE OF i. \\n source\_tab = VALUE #( FOR j = 1 UNTIL j > 10 \\n ( ipow( base = 2 exp = j ) ) ). \\n FINAL(ixml) = cl\_ixml\_core=>create( ). \\n FINAL(document) = ixml->create\_document( ). \\n CALL TRANSFORMATION id SOURCE text = \`Powers of 2\` \\n numbers = source\_tab \\n RESULT XML document. \\n\\ \\n FINAL(element) = document->find\_from\_name\_ns( name = 'TEXT' ). \\n IF element IS NOT INITIAL. \\n out->write\_data( element->get\_value( ) ). \\n ENDIF. \\n\\ \\n FINAL(elements) = \\n document->get\_elements\_by\_tag\_name( name = 'item' ). \\n DATA target\_tab LIKE source\_tab. \\n DO elements->get\_length( ) TIMES. \\n FINAL(node) = elements->get\_item( sy-index - 1 ). \\n APPEND node->get\_value( ) TO target\_tab. \\n ENDDO. \\n\\ \\n out->write( target\_tab ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib\_cloud.html abenabap\_ixml\_lib\_c\_abexas.html