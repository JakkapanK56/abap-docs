---
title: "ABENSXML_TRAFO_INTO_WRITER_ABEXA"
description: |
  ABENSXML_TRAFO_INTO_WRITER_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSXML_TRAFO_INTO_WRITER_ABEXA.htm"
abapFile: "ABENSXML_TRAFO_INTO_WRITER_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "internal-table", "ABENSXML", "TRAFO", "INTO", "WRITER", "ABEXA"]
---

Transformation of ABAP data to an XML writer.

An XML writer is filled with XML data that is split into the parts `head` and `body`. The data content of the element `body` is taken directly from an internal table using the [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID`.

\* Public class definition \\nCLASS cl\_demo\_sxml\_trafo\_into\_writer DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sxml\_trafo\_into\_writer IMPLEMENTATION. \\n METHOD main. \\n FINAL(user\_date) = cl\_demo\_date\_time=>get\_user\_date( ). \\n FINAL(writer) = \\n CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create( ) ). \\n writer->open\_element( name = 'document' ). \\n writer->open\_element( name = 'head' ). \\n writer->open\_element( name = 'author' ). \\n writer->write\_value( CONV string( sy-uname ) ). \\n writer->close\_element( ). \\n writer->open\_element( name = 'date' ). \\n writer->write\_value( CONV string( user\_date ) ). \\n writer->close\_element( ). \\n writer->close\_element( ). \\n writer->open\_element( name = 'body' ). \\n DO 10 TIMES. \\n CALL TRANSFORMATION id SOURCE number = sy-index \\n RESULT XML writer. \\n ENDDO. \\n writer->close\_element( ). \\n writer->close\_element( ). \\n FINAL(xml) = \\n CAST cl\_sxml\_string\_writer( writer )->get\_output( ). \\n out->write\_xml( xml ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_sxml\_trafo\_into\_writer DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sxml\_trafo\_into\_writer IMPLEMENTATION. \\n METHOD main. \\n FINAL(user\_date) = cl\_demo\_date\_time=>get\_user\_date( ). \\n FINAL(writer) = \\n CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create( ) ). \\n writer->open\_element( name = 'document' ). \\n writer->open\_element( name = 'head' ). \\n writer->open\_element( name = 'author' ). \\n writer->write\_value( CONV string( sy-uname ) ). \\n writer->close\_element( ). \\n writer->open\_element( name = 'date' ). \\n writer->write\_value( CONV string( user\_date ) ). \\n writer->close\_element( ). \\n writer->close\_element( ). \\n writer->open\_element( name = 'body' ). \\n DO 10 TIMES. \\n CALL TRANSFORMATION id SOURCE number = sy-index \\n RESULT XML writer. \\n ENDDO. \\n writer->close\_element( ). \\n writer->close\_element( ). \\n FINAL(xml) = \\n CAST cl\_sxml\_string\_writer( writer )->get\_output( ). \\n out->write\_xml( xml ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_sxml\_lib.html abenabap\_sxml\_lib\_abexas.html