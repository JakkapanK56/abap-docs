---
title: "ABENABAP_IXML_LIB_C_INPUT_OUTPUT"
description: |
  ABENABAP_IXML_LIB_C_INPUT_OUTPUT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_IXML_LIB_C_INPUT_OUTPUT.htm"
abapFile: "ABENABAP_IXML_LIB_C_INPUT_OUTPUT.html"
keywords: ["do", "if", "method", "data", "types", "internal-table", "ABENABAP", "IXML", "LIB", "INPUT", "OUTPUT"]
---

Input streams are used for the input of XML data into the [parser](ABENABAP_IXML_LIB_PARSE.html) and output streams are used to pass XML data from the [renderer](ABENABAP_IXML_LIB_RENDER.html). A factory is needed to create a stream, which can be created using the iXML factory as follows:

DATA(ixml) = cl\_ixml\_core=>create( ). \\n... \\nDATA(stream\_factory) = ixml->create\_stream\_factory( ).

The static type of the reference variable `stream_factory` is then the interface `IF_IXML_STREAM_FACTORY_CORE`, which contains factory methods `CREATE_ISTREAM_...` for input streams and `CREATE_OSTREAM_...` for output streams.

Different streams can be created for different data sources and data sinks, such as strings, internal tables, or files specified by URIs.

Each XML document stored in DOM format in the memory is managed using a separate object. An object of this type can be created as follows:

DATA(ixml) = cl\_ixml\_core=>create( ). \\n... \\nDATA(document) = ixml->create\_document( ).

The static type of the reference variable `document` is `IF_IXML_DOCUMENT`. A document created in this way

iXML documents can be defined as an XML target, iXML documents and their nodes can be specified as an XML source for XSL transformations called using [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html).

-   iXML input streams can be specified as an XML source and iXML output streams can be used as an XML target for XSL transformations called using [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html).
-   If output streams are bound to internal tables with byte-like line types, the last line is not usually filled completely with content from the stream. The length of the actual data in the line can be determined using the return value of the method `GET_NUM_WRITTEN_RAW` of the output stream modulo of the number of table lines.

-   is used to address an XML document stored as [DOM](ABENABAP_IXML_LIB_DOM_ACCESS.html),
-   can be bound to the [parser](ABENABAP_IXML_LIB_PARSE.html) to fill it,
-   can be used to construct new XML data or modify existing data,
-   can be passed to the [renderer](ABENABAP_IXML_LIB_RENDER.html) to be output.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib\_cloud.html