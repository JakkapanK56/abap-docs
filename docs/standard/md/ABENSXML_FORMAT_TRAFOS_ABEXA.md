---
title: "ABENSXML_FORMAT_TRAFOS_ABEXA"
description: |
  ABENSXML_FORMAT_TRAFOS_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSXML_FORMAT_TRAFOS_ABEXA.htm"
abapFile: "ABENSXML_FORMAT_TRAFOS_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENSXML", "FORMAT", "TRAFOS", "ABEXA"]
---

This example demonstrates the transformation of various [XML formats](ABENABAP_SXML_LIB_FORMATS.html).

-   An XML string reader is filled with a byte string that contains XML data in XML 1.0 format and UTF-8 representation. This data is produced by the conversion of a text string from the current code page.
-   The method `SKIP_NODE` is used to pass the XML data of the reader to an XML writer for the Binary XML format. This data is then read to `binary_xml`.
-   The XML data in Binary XML format is passed to a further XML string reader and then transformed to an XOP writer.

\* Public class definition \\nCLASS cl\_demo\_sxml\_xml\_to\_bnr\_to\_xop DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sxml\_xml\_to\_bnr\_to\_xop IMPLEMENTATION. \\n METHOD main. \\n "XML 1.0 \\n FINAL(xml\_reader) = cl\_sxml\_string\_reader=>create( \\n cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n \`blah\` ) ). \\n\\ \\n "XML 1.0 to Binary XML \\n FINAL(binary\_writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_binary ). \\n xml\_reader->next\_node( ). \\n xml\_reader->skip\_node( binary\_writer ). \\n FINAL(binary\_xml) = binary\_writer->get\_output( ). \\n\\ \\n "Binary XML to XOP \\n FINAL(binary\_reader) = cl\_sxml\_string\_reader=>create( binary\_xml ). \\n FINAL(xop\_writer) = cl\_sxml\_xop\_writer=>create( ). \\n binary\_reader->next\_node( ). \\n binary\_reader->skip\_node( xop\_writer ). \\n FINAL(xop\_package) = xop\_writer->get\_output( ). \\n\\ \\n out->write\_xml( xop\_package-xop\_document ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_sxml\_xml\_to\_bnr\_to\_xop DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sxml\_xml\_to\_bnr\_to\_xop IMPLEMENTATION. \\n METHOD main. \\n "XML 1.0 \\n FINAL(xml\_reader) = cl\_sxml\_string\_reader=>create( \\n cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n \`blah\` ) ). \\n\\ \\n "XML 1.0 to Binary XML \\n FINAL(binary\_writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_binary ). \\n xml\_reader->next\_node( ). \\n xml\_reader->skip\_node( binary\_writer ). \\n FINAL(binary\_xml) = binary\_writer->get\_output( ). \\n\\ \\n "Binary XML to XOP \\n FINAL(binary\_reader) = cl\_sxml\_string\_reader=>create( binary\_xml ). \\n FINAL(xop\_writer) = cl\_sxml\_xop\_writer=>create( ). \\n binary\_reader->next\_node( ). \\n binary\_reader->skip\_node( xop\_writer ). \\n FINAL(xop\_package) = xop\_writer->get\_output( ). \\n\\ \\n out->write\_xml( xop\_package-xop\_document ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_sxml\_lib.html abenabap\_sxml\_lib\_abexas.html