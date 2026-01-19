---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENXML_ACCESS_ABEXA.htm"
abapFile: "ABENXML_ACCESS_ABEXA.html"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "ABENXML", "ACCESS", "ABEXA"]
---

This example demonstrates parsing and rendering using an example class.

The example class `CL_DEMO_XML_ACCESS` wraps methods of the [sXML Library](ABENSXML_LIBRARY_GLOSRY.html).

As an example, an XML file is accessed that results from a transformation of an internal table into [asXML](ABENASXML_GLOSRY.html) format by using the predefined identity transformation [`ID`](ABENABAP_XSLT_ID.html).

-   Method `PARSE_XML` allows the parsing of the relevant data of an XML file from a byte string into an internal table whose structure is defined in that class.
-   Method `RENDER_XML` allows the rendering of the data from such a node table into an XML file in a byte string.
-   Method `GET_HIERARCHY_DATA` allows retrieving information about the hierarchical relations between the XML nodes stored in the internal table. For that, the internal table is accessed with [hierarchy functions](ABENHIERARCHY_FUNCTION_GLOSRY.html) of ABAP SQL.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cl\_xml\_access DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cl\_xml\_access IMPLEMENTATION. \\n METHOD main. \\n DATA(index) = 1. \\n cl\_demo\_input=>new( )->request( CHANGING field = index ). \\n\\ \\n SELECT FROM scarr \\n FIELDS \* \\n INTO TABLE @FINAL(itab) UP TO 3 ROWS. \\n CALL TRANSFORMATION id SOURCE itab = itab \\n RESULT XML FINAL(xml). \\n\\ \\n out->next\_section( 'Original XML' \\n )->write\_xml( xml ). \\n\\ \\n TRY. \\n FINAL(nodes) = cl\_demo\_xml\_access=>parse\_xml( xml ). \\n CATCH cx\_demo\_xml\_access. \\n out->write( 'Exception in parsing' ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->next\_section( 'Node Table' \\n )->write\_data( nodes ). \\n\\ \\n TRY. \\n cl\_demo\_xml\_access=>get\_tree\_nodes( \\n EXPORTING nodes = nodes \\n index = index \\n IMPORTING subtree = FINAL(subtree) \\n descendants = FINAL(descendants) \\n ancestors = FINAL(ancestors) \\n siblings = FINAL(siblings) ). \\n\\ \\n out->next\_section( |Subtree starting with node \\{ index \\}| \\n )->write\_data( subtree \\n )->next\_section( |Descendants of node \\{ index \\}| \\n )->write\_data( descendants \\n )->next\_section( |Ancestors of node \\{ index \\}| \\n )->write\_data( ancestors \\n )->next\_section( |Siblings of node \\{ index \\}| \\n )->write\_data( siblings ). \\n CATCH cx\_demo\_xml\_access. \\n out->write( 'Exception in hierarchy data' ). \\n RETURN. \\n ENDTRY. \\n\\ \\n TRY. \\n out->next\_section( 'Rendered XML' )->write\_xml( \\n cl\_demo\_xml\_access=>render\_xml( nodes ) ). \\n CATCH cx\_demo\_xml\_access. \\n out->write( 'Exception in rendering' ). \\n RETURN. \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cl\_xml\_access DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cl\_xml\_access IMPLEMENTATION. \\n METHOD main. \\n DATA(index) = 1. \\n cl\_demo\_input=>new( )->request( CHANGING field = index ). \\n\\ \\n SELECT FROM scarr \\n FIELDS \* \\n INTO TABLE @FINAL(itab) UP TO 3 ROWS. \\n CALL TRANSFORMATION id SOURCE itab = itab \\n RESULT XML FINAL(xml). \\n\\ \\n out->next\_section( 'Original XML' \\n )->write\_xml( xml ). \\n\\ \\n TRY. \\n FINAL(nodes) = cl\_demo\_xml\_access=>parse\_xml( xml ). \\n CATCH cx\_demo\_xml\_access. \\n out->write( 'Exception in parsing' ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->next\_section( 'Node Table' \\n )->write\_data( nodes ). \\n\\ \\n TRY. \\n cl\_demo\_xml\_access=>get\_tree\_nodes( \\n EXPORTING nodes = nodes \\n index = index \\n IMPORTING subtree = FINAL(subtree) \\n descendants = FINAL(descendants) \\n ancestors = FINAL(ancestors) \\n siblings = FINAL(siblings) ). \\n\\ \\n out->next\_section( |Subtree starting with node \\{ index \\}| \\n )->write\_data( subtree \\n )->next\_section( |Descendants of node \\{ index \\}| \\n )->write\_data( descendants \\n )->next\_section( |Ancestors of node \\{ index \\}| \\n )->write\_data( ancestors \\n )->next\_section( |Siblings of node \\{ index \\}| \\n )->write\_data( siblings ). \\n CATCH cx\_demo\_xml\_access. \\n out->write( 'Exception in hierarchy data' ). \\n RETURN. \\n ENDTRY. \\n\\ \\n TRY. \\n out->next\_section( 'Rendered XML' )->write\_xml( \\n cl\_demo\_xml\_access=>render\_xml( nodes ) ). \\n CATCH cx\_demo\_xml\_access. \\n out->write( 'Exception in rendering' ). \\n RETURN. \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html