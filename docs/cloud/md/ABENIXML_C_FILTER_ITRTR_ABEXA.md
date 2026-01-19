---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENIXML_C_FILTER_ITRTR_ABEXA.htm"
abapFile: "ABENIXML_C_FILTER_ITRTR_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "ABENIXML", "FILTER", "ITRTR", "ABEXA"]
---

Filtered access to nodes in DOM using an iterator.

XML data is created in asXML format using the [identity transformation](ABENID_TRAFO_GLOSRY.html) and written directly to an XML document in DOM representation. An iterator is created for the entire document that is linked with a filter. The filter is an *and* join between two filters and selects by node type and name. The iterator only returns the selected nodes.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_ixml\_cld\_filter\_itr DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ixml\_cld\_filter\_itr IMPLEMENTATION. \\n METHOD main. \\n DATA source\_tab TYPE TABLE OF i. \\n source\_tab = VALUE #( FOR j = 1 UNTIL j > 10 \\n ( ipow( base = 2 exp = j ) ) ). \\n FINAL(ixml) = cl\_ixml\_core=>create( ). \\n FINAL(document) = ixml->create\_document( ). \\n CALL TRANSFORMATION id SOURCE text = \`Powers of 2\` \\n numbers = source\_tab \\n RESULT XML document. \\n\\ \\n FINAL(iterator) = document->create\_iterator\_filtered( \\n document->create\_filter\_and( \\n filter1 = document->create\_filter\_node\_type( \\n node\_types = if\_ixml\_node=>co\_node\_element ) \\n filter2 = document->create\_filter\_name\_ns( \\n name = 'item' ) ) ). \\n\\ \\n DATA target\_tab LIKE source\_tab. \\n DO. \\n FINAL(node) = iterator->get\_next( ). \\n IF node IS INITIAL. \\n EXIT. \\n ENDIF. \\n APPEND node->get\_value( ) TO target\_tab. \\n ENDDO. \\n\\ \\n out->write( target\_tab ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_ixml\_cld\_filter\_itr DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ixml\_cld\_filter\_itr IMPLEMENTATION. \\n METHOD main. \\n DATA source\_tab TYPE TABLE OF i. \\n source\_tab = VALUE #( FOR j = 1 UNTIL j > 10 \\n ( ipow( base = 2 exp = j ) ) ). \\n FINAL(ixml) = cl\_ixml\_core=>create( ). \\n FINAL(document) = ixml->create\_document( ). \\n CALL TRANSFORMATION id SOURCE text = \`Powers of 2\` \\n numbers = source\_tab \\n RESULT XML document. \\n\\ \\n FINAL(iterator) = document->create\_iterator\_filtered( \\n document->create\_filter\_and( \\n filter1 = document->create\_filter\_node\_type( \\n node\_types = if\_ixml\_node=>co\_node\_element ) \\n filter2 = document->create\_filter\_name\_ns( \\n name = 'item' ) ) ). \\n\\ \\n DATA target\_tab LIKE source\_tab. \\n DO. \\n FINAL(node) = iterator->get\_next( ). \\n IF node IS INITIAL. \\n EXIT. \\n ENDIF. \\n APPEND node->get\_value( ) TO target\_tab. \\n ENDDO. \\n\\ \\n out->write( target\_tab ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib\_cloud.html abenabap\_ixml\_lib\_c\_abexas.html