---
title: "ABENABAP_SXML_LIB_RENDER_OO"
description: |
  ABENABAP_SXML_LIB_RENDER_OO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SXML_LIB_RENDER_OO.htm"
abapFile: "ABENABAP_SXML_LIB_RENDER_OO.html"
keywords: ["insert", "if", "method", "class", "data", "ABENABAP", "SXML", "LIB", "RENDER"]
---

Just as in [token-based rendering](ABENABAP_SXML_LIB_RENDER_TOKEN.html), object-oriented rendering creates an XML writer. The nodes are not written, however, using a separate method for each node type, but using a single method, `WRITE_NODE`. This method is linked with a node object with the required [node type](ABENABAP_SXML_LIB_ENTITIES.html) using its input parameters and a corresponding node is appended to the current write position.

As in [token-based rendering](ABENABAP_SXML_LIB_RENDER_TOKEN.html), the XML writer is created using the factory method `CREATE` of the required class, for example:

DATA(writer) = CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create( ... ) ).

Before the node object is written, it can be created using one of the dedicated methods of the interface `IF_SXML_READER`, such as `NEW_OPEN_ELEMENT`, `NEW_CLOSE_ELEMENT`, and `NEW_VALUE` or it can be taken from another source, such as an object-oriented read, for example:

DATA(open\_element) = writer->new\_open\_element( ... ). \\nwriter->write\_node( open\_element ). \\nDATA(value) = writer->new\_value( ). \\nvalue->set\_value( ... ). \\nwriter->write\_node( value ). \\nDATA(close\_element) = writer->new\_close\_element( ... ). \\nwriter->write\_node( close\_element ).

The node object of an element opening has methods that can be used to insert XML attributes.

[Object-Oriented Rendering](ABENSXML_OO_RENDERING_ABEXA.html)

The following methods of the interface `IF_SXML_WRITER` are designed specifically for object-oriented rendering:

The values are written as in [token-based rendering](ABENABAP_SXML_LIB_RENDER_TOKEN.html).

-   `NEW_OPEN_ELEMENT` - Creates a node object for an element opening.
-   `NEW_VALUE` - Creates a node object for a character-like value.
-   `NEW_VALUE_RAW` - Creates a node object for byte-like raw data.
-   `NEW_CLOSE_ELEMENT` - Creates a node object for an end of element.
-   `WRITE_NODE` - Creates a node in accordance with the passed node object.

-   [Token-based rendering](ABENABAP_SXML_LIB_RENDER_TOKEN.html) and object-oriented rendering are not strictly separated. The corresponding methods for writing nodes can be called alternately in the same program. This is not recommended, however, for reasons of readability.
-   In object-oriented rendering, node objects can be written directly that were returned by an [object-oriented parser](ABENABAP_SXML_LIB_PARSE_OO.html) and possibly modified.
-   Object-oriented rendering can demonstrate poorer performance than token-based rendering due to the extra objects that are created.

-   [Modifying XML Data](ABENSXML_READER_WRITER_ABEXA.html)
-   [Transforming JSON Names](ABENABAP_JSON_NAMES_TO_UPPER_ABEXA.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_sxml\_lib.html abenabap\_sxml\_lib\_render.html