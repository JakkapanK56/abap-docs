---
title: "ABENIXML_C_RENDER_ABEXA"
description: |
  ABENIXML_C_RENDER_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENIXML_C_RENDER_ABEXA.htm"
abapFile: "ABENIXML_C_RENDER_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENIXML", "RENDER", "ABEXA"]
---

Renders XML documents to DOM representation.

XML data is created in asXML format using the [identity transformation](ABENID_TRAFO_GLOSRY.html) and written directly to an XML document in DOM representation. The method `REMOVE_NODE` is used to remove some nodes and the content of the modified document is rendered in the following way:

-   A renderer is created for the entire document and its method `RENDER` is executed, producing complete XML data.

\* Public class definition \\nCLASS cl\_demo\_ixml\_cld\_render DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ixml\_cld\_render IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA source\_tab TYPE TABLE OF i. \\n source\_tab = VALUE #( FOR j = 1 UNTIL j > 10 \\n ( ipow( base = 2 exp = j ) ) ). \\n FINAL(ixml) = cl\_ixml\_core=>create( ). \\n FINAL(stream\_factory) = ixml->create\_stream\_factory( ). \\n FINAL(document) = ixml->create\_document( ). \\n CALL TRANSFORMATION id SOURCE text = \`Powers of 2\` \\n numbers = source\_tab \\n RESULT XML document. \\n DO 7 TIMES. \\n document->find\_from\_name\_ns( name = 'item' )->remove\_node( ). \\n ENDDO. \\n\\ \\n out->begin\_section( \\n \`Renderer for complete document\` ). \\n DATA xml\_xstring TYPE xstring. \\n ixml->create\_renderer( document = document \\n ostream = \\n stream\_factory->create\_ostream\_xstring( \\n string = xml\_xstring ) \\n )->render( ). \\n out->write\_xml( xml\_xstring ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_ixml\_cld\_render DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ixml\_cld\_render IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA source\_tab TYPE TABLE OF i. \\n source\_tab = VALUE #( FOR j = 1 UNTIL j > 10 \\n ( ipow( base = 2 exp = j ) ) ). \\n FINAL(ixml) = cl\_ixml\_core=>create( ). \\n FINAL(stream\_factory) = ixml->create\_stream\_factory( ). \\n FINAL(document) = ixml->create\_document( ). \\n CALL TRANSFORMATION id SOURCE text = \`Powers of 2\` \\n numbers = source\_tab \\n RESULT XML document. \\n DO 7 TIMES. \\n document->find\_from\_name\_ns( name = 'item' )->remove\_node( ). \\n ENDDO. \\n\\ \\n out->begin\_section( \\n \`Renderer for complete document\` ). \\n DATA xml\_xstring TYPE xstring. \\n ixml->create\_renderer( document = document \\n ostream = \\n stream\_factory->create\_ostream\_xstring( \\n string = xml\_xstring ) \\n )->render( ). \\n out->write\_xml( xml\_xstring ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib\_cloud.html abenabap\_ixml\_lib\_c\_abexas.html