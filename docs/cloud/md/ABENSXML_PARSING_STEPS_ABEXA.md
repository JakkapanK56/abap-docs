---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSXML_PARSING_STEPS_ABEXA.htm"
abapFile: "ABENSXML_PARSING_STEPS_ABEXA.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABENSXML", "PARSING", "STEPS", "ABEXA"]
---

This example demonstrates various steps in [token-based parsing](ABENABAP_SXML_LIB_PARSE_ITERATIVE.html).

Using simple XML data, this example demonstrates how possible steps work, alongside `NEXT_NODE` and `NEXT_ATTRIBUTE`, in [token-based parsing](ABENABAP_SXML_LIB_PARSE_ITERATIVE.html) with an XML reader from [sXML Library](ABENABAP_SXML_LIB.html).

In this example, the demonstration methods process a known XML data structure. A further [executable example](ABENSXML_PARSING_METHODS_ABEXA.html) demonstrates the methods without the entire structure of XML data being known in advance.

-   The method `CURRENT_NODE` resets an iteration across an attribute list back to its start.
-   The method `PUSH_BACK` first branches an iteration from a value node to the associated element opening and from there to the element opening of the superelement.
-   The method `SKIP_NODE` then parses all subnodes up to the end of element of the XML data.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sxml\_token\_rdr\_steps DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n DATA parser TYPE REF TO if\_sxml\_reader. \\n DATA: BEGIN OF wa, \\n method TYPE string, \\n node\_type TYPE string, \\n name TYPE string, \\n value TYPE string, \\n END OF wa, \\n output LIKE TABLE OF wa. \\n METHODS parse \\n IMPORTING method TYPE string. \\n METHODS get\_node\_type \\n IMPORTING node\_type\_int TYPE if\_sxml\_node=>node\_type \\n RETURNING VALUE(node\_type\_string) TYPE string. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sxml\_token\_rdr\_steps IMPLEMENTATION. \\n METHOD main. \\n out->begin\_section( \`XML-Data\` ). \\n FINAL(xml) = \`yval\`. \\n out->write\_xml( xml ). \\n\\ \\n out->next\_section( \`Parser Methods\` ). \\n\\ \\n parser = cl\_sxml\_string\_reader=>create( \\n cl\_abap\_conv\_codepage=>create\_out( )->convert( xml ) ). \\n\\ \\n parse( 'NEXT\_NODE' ). \\n parse( 'NEXT\_ATTRIBUTE' ). \\n parse( 'NEXT\_ATTRIBUTE' ). \\n parse( 'CURRENT\_NODE' ). \\n parse( 'NEXT\_ATTRIBUTE' ). \\n parse( 'NEXT\_NODE' ). \\n parse( 'NEXT\_ATTRIBUTE' ). \\n parse( 'NEXT\_NODE' ). \\n parse( 'PUSH\_BACK' ). \\n parse( 'NEXT\_ATTRIBUTE' ). \\n parse( 'PUSH\_BACK' ). \\n parse( 'SKIP\_NODE' ). \\n parse( 'NEXT\_NODE' ). \\n\\ \\n out->write( output ). \\n ENDMETHOD. \\n METHOD get\_node\_type. \\n CASE node\_type\_int. \\n WHEN if\_sxml\_node=>co\_nt\_initial. \\n node\_type\_string = \`CO\_NT\_INITIAL\`. \\n\* WHEN if\_sxml\_node=>co\_nt\_comment. \\n\* node\_type\_string = \`CO\_NT\_COMMENT\`. \\n WHEN if\_sxml\_node=>co\_nt\_element\_open. \\n node\_type\_string = \`CO\_NT\_ELEMENT\_OPEN\`. \\n WHEN if\_sxml\_node=>co\_nt\_element\_close. \\n node\_type\_string = \`CO\_NT\_ELEMENT\_CLOSE\`. \\n WHEN if\_sxml\_node=>co\_nt\_value. \\n node\_type\_string = \`CO\_NT\_VALUE\`. \\n WHEN if\_sxml\_node=>co\_nt\_attribute. \\n node\_type\_string = \`CO\_NT\_ATTRIBUTE\`. \\n\* WHEN if\_sxml\_node=>co\_nt\_pi. \\n\* node\_type\_string = \`CO\_NT\_FINAL\`. \\n WHEN OTHERS. \\n node\_type\_string = \`Error\`. \\n ENDCASE. \\n ENDMETHOD. \\n METHOD parse. \\n CALL METHOD parser->(method). \\n APPEND VALUE #( \\n method = method \\n node\_type = get\_node\_type( parser->node\_type ) \\n name = parser->name \\n value = parser->value ) TO output. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sxml\_token\_rdr\_steps DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n DATA parser TYPE REF TO if\_sxml\_reader. \\n DATA: BEGIN OF wa, \\n method TYPE string, \\n node\_type TYPE string, \\n name TYPE string, \\n value TYPE string, \\n END OF wa, \\n output LIKE TABLE OF wa. \\n METHODS parse \\n IMPORTING method TYPE string. \\n METHODS get\_node\_type \\n IMPORTING node\_type\_int TYPE if\_sxml\_node=>node\_type \\n RETURNING VALUE(node\_type\_string) TYPE string. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sxml\_token\_rdr\_steps IMPLEMENTATION. \\n METHOD main. \\n out->begin\_section( \`XML-Data\` ). \\n FINAL(xml) = \`yval\`. \\n out->write\_xml( xml ). \\n\\ \\n out->next\_section( \`Parser Methods\` ). \\n\\ \\n parser = cl\_sxml\_string\_reader=>create( \\n cl\_abap\_conv\_codepage=>create\_out( )->convert( xml ) ). \\n\\ \\n parse( 'NEXT\_NODE' ). \\n parse( 'NEXT\_ATTRIBUTE' ). \\n parse( 'NEXT\_ATTRIBUTE' ). \\n parse( 'CURRENT\_NODE' ). \\n parse( 'NEXT\_ATTRIBUTE' ). \\n parse( 'NEXT\_NODE' ). \\n parse( 'NEXT\_ATTRIBUTE' ). \\n parse( 'NEXT\_NODE' ). \\n parse( 'PUSH\_BACK' ). \\n parse( 'NEXT\_ATTRIBUTE' ). \\n parse( 'PUSH\_BACK' ). \\n parse( 'SKIP\_NODE' ). \\n parse( 'NEXT\_NODE' ). \\n\\ \\n out->write( output ). \\n ENDMETHOD. \\n METHOD get\_node\_type. \\n CASE node\_type\_int. \\n WHEN if\_sxml\_node=>co\_nt\_initial. \\n node\_type\_string = \`CO\_NT\_INITIAL\`. \\n\* WHEN if\_sxml\_node=>co\_nt\_comment. \\n\* node\_type\_string = \`CO\_NT\_COMMENT\`. \\n WHEN if\_sxml\_node=>co\_nt\_element\_open. \\n node\_type\_string = \`CO\_NT\_ELEMENT\_OPEN\`. \\n WHEN if\_sxml\_node=>co\_nt\_element\_close. \\n node\_type\_string = \`CO\_NT\_ELEMENT\_CLOSE\`. \\n WHEN if\_sxml\_node=>co\_nt\_value. \\n node\_type\_string = \`CO\_NT\_VALUE\`. \\n WHEN if\_sxml\_node=>co\_nt\_attribute. \\n node\_type\_string = \`CO\_NT\_ATTRIBUTE\`. \\n\* WHEN if\_sxml\_node=>co\_nt\_pi. \\n\* node\_type\_string = \`CO\_NT\_FINAL\`. \\n WHEN OTHERS. \\n node\_type\_string = \`Error\`. \\n ENDCASE. \\n ENDMETHOD. \\n METHOD parse. \\n CALL METHOD parser->(method). \\n APPEND VALUE #( \\n method = method \\n node\_type = get\_node\_type( parser->node\_type ) \\n name = parser->name \\n value = parser->value ) TO output. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_sxml\_lib.html abenabap\_sxml\_lib\_abexas.html