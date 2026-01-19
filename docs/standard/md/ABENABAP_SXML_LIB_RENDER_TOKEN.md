---
title: "ABENABAP_SXML_LIB_RENDER_TOKEN"
description: |
  ABENABAP_SXML_LIB_RENDER_TOKEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SXML_LIB_RENDER_TOKEN.htm"
abapFile: "ABENABAP_SXML_LIB_RENDER_TOKEN.html"
keywords: ["do", "if", "method", "class", "data", "ABENABAP", "SXML", "LIB", "RENDER", "TOKEN"]
---

In token-based rendering, each node is written to the XML data using a method. Each node type has its own method. If a node can have specific values, the respective method has appropriate input parameters. The methods must be called in such a way that valid XML is created. XML attributes can be added to an element directly after it has been opened.

An XML writer is created using the factory method `CREATE` of the required class. The format and character format can also be defined, for example:

DATA(writer) = cl\_sxml\_string\_writer=>create( type = \\n                                              encoding = ... ).

Here, the static type of the reference variables is the type of the class itself, since more class-specific methods exist than in readers. The interface `IF_SXML_WRITER` can still be used to access a writer using upcasts:

DATA(writer) = CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create( ... ) ).

Once the writer is created, nodes can be written. The order of the nodes is important, for example:

writer->open\_element( ... ). \\nwriter->write\_attribute( ... ). \\nwriter->write\_value( ... ). \\nwriter->close\_element( ).

Once a complete valid record of XML data has been written, the data can be read if the correct writers are being used, for example:

DATA(xml) = CAST cl\_sxml\_string\_writer( writer )->get\_output( ).

Since the method is a class-specific method, a downcast is required if an interface reference variable is used.

[Token-Based Rendering](ABENSXML_RENDERING_ABEXA.html)

The following methods are declared in the interface `IF_SXML_WRITER` for token-based rendering:

If text-like data is written, this data is converted automatically from the current system code page to the representation of the XML data, which is determined by the chosen [format](ABENABAP_SXML_LIB_FORMATS.html). If byte-like raw data is written, this data is also converted in accordance with the chosen [format](ABENABAP_SXML_LIB_FORMATS.html), for example to the format [Base64](ABENBASE64_GLOSRY.html) for XML 1.0 or to the binary part of the XOP package for [XOP](ABENXOP_GLOSRY.html).

[Namespace Declarations in Token-Based Rendering](ABENSXML_RENDERERING_NS_ABEXA.html)

-   `OPEN_ELEMENT` - Writes an element opening. The name, a namespace prefix, and a namespace URI can be passed.
-   `WRITE_NAMESPACE_DECLARATION` - Writes a namespace declaration to an element opening.
-   `WRITE_ATTRIBUTE` - Writes an XML attribute to an element opening. A name, namespace prefix, a namespace URI, and a character-like value can be passed.
-   `WRITE_ATTRIBUTE_RAW` - Writes an XML attribute with raw data to an element opening. A name, namespace prefix, a namespace URI, and a byte-like value can be passed.
-   `WRITE_VALUE` - Writes a character-like value behind an element opening.
-   `WRITE_VALUE_RAW` - Writes a byte-like value behind an element opening.
-   `CLOSE_ELEMENT` - Writes an end of element.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_sxml\_lib.html abenabap\_sxml\_lib\_render.html