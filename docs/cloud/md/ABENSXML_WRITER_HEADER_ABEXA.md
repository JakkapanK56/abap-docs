---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSXML_WRITER_HEADER_ABEXA.htm"
abapFile: "ABENSXML_WRITER_HEADER_ABEXA.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABENSXML", "WRITER", "HEADER", "ABEXA"]
---

Defines an XML header.

This example demonstrates the usage of the header option for the [sXML writer](ABENABAP_SXML_LIB_RENDER.html). Here, the value is set to `co_opt_val_without_encoding`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sxml\_header DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sxml\_header IMPLEMENTATION. \\n METHOD main. \\n FINAL(writer) = CAST if\_sxml\_writer( \\n cl\_sxml\_string\_writer=>create( ) ). \\n\\ \\n writer->set\_option( \\n option = if\_sxml\_writer=>co\_opt\_xml\_header \\n value = if\_sxml\_writer=>co\_opt\_val\_without\_encoding ). \\n\\ \\n writer->open\_element( name = 'document' ). \\n writer->open\_element( name = 'header' ). \\n CASE writer->get\_option( \\n option = if\_sxml\_writer=>co\_opt\_xml\_header ). \\n WHEN if\_sxml\_writer=>co\_opt\_val\_full. \\n writer->write\_attribute( name = 'version' value = '1.0' ). \\n writer->write\_attribute( name = 'encoding' value = 'utf-8' ). \\n WHEN if\_sxml\_writer=>co\_opt\_val\_without\_encoding. \\n writer->write\_attribute( name = 'version' value = '1.0' ). \\n WHEN OTHERS. \\n ENDCASE. \\n writer->close\_element( ). \\n writer->close\_element( ). \\n\\ \\n DATA(result) = cl\_abap\_conv\_codepage=>create\_in( )->convert( \\n CAST cl\_sxml\_string\_writer( \\n writer )->get\_output( ) ). \\n\\ \\n out->write\_xml( result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sxml\_header DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sxml\_header IMPLEMENTATION. \\n METHOD main. \\n FINAL(writer) = CAST if\_sxml\_writer( \\n cl\_sxml\_string\_writer=>create( ) ). \\n\\ \\n writer->set\_option( \\n option = if\_sxml\_writer=>co\_opt\_xml\_header \\n value = if\_sxml\_writer=>co\_opt\_val\_without\_encoding ). \\n\\ \\n writer->open\_element( name = 'document' ). \\n writer->open\_element( name = 'header' ). \\n CASE writer->get\_option( \\n option = if\_sxml\_writer=>co\_opt\_xml\_header ). \\n WHEN if\_sxml\_writer=>co\_opt\_val\_full. \\n writer->write\_attribute( name = 'version' value = '1.0' ). \\n writer->write\_attribute( name = 'encoding' value = 'utf-8' ). \\n WHEN if\_sxml\_writer=>co\_opt\_val\_without\_encoding. \\n writer->write\_attribute( name = 'version' value = '1.0' ). \\n WHEN OTHERS. \\n ENDCASE. \\n writer->close\_element( ). \\n writer->close\_element( ). \\n\\ \\n DATA(result) = cl\_abap\_conv\_codepage=>create\_in( )->convert( \\n CAST cl\_sxml\_string\_writer( \\n writer )->get\_output( ) ). \\n\\ \\n out->write\_xml( result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_sxml\_lib.html abenabap\_sxml\_lib\_abexas.html