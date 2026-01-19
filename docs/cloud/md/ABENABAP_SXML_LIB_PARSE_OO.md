---
title: "ABENABAP_SXML_LIB_PARSE_OO"
description: |
  ABENABAP_SXML_LIB_PARSE_OO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SXML_LIB_PARSE_OO.htm"
abapFile: "ABENABAP_SXML_LIB_PARSE_OO.html"
keywords: ["do", "if", "case", "try", "method", "class", "data", "internal-table", "ABENABAP", "SXML", "LIB", "PARSE"]
---

Just as in [token-based parsing](ABENABAP_SXML_LIB_PARSE_ITERATIVE.html), object-oriented parsing creates an XML reader and uses its methods to iterate across the XML data. Sometimes, however, other methods are used. The methods used for object-oriented parsing wrap methods for token-based parsing and provide object-oriented access to the current node. Instead of having to read the attributes of the reader directly after a parser step, the methods used for object-oriented parsing return references to objects that represent the current node. The methods and attributes of the [classes and interfaces](ABENABAP_SXML_LIB_ENTITIES.html) of these objects can be used to access the properties of the node. Unlike in token-based parsing, only the relevant values are available.

An XML reader is created using the factory method `CREATE` of the required class, as in [token-based parsing](ABENABAP_SXML_LIB_PARSE_ITERATIVE.html), and the source `xml` of the XML data is passed, for example:

DATA(reader) = cl\_sxml\_string\_reader=>create( xml ).

In the simplest parsing case, the method `READ_NEXT_NODE` is applied as many times as it takes to reach the end of the XML data:

DATA(node) = reader->read\_next\_node( ).

The static type of the reference variable `node` is then `IF_SXML_NODE`, which points to a node object. The return value is initial at the end of the XML data. The attribute `TYPE` of the node object represents the type of the node in accordance with the constants `CO_NT_...` of the interface `IF_SXML_NODE`. This means that a downcast can be performed to a more specific reference variable for `node`, which makes it possible to access the properties of the current node. If the parser is located on the node of an element opening, the node object has the class `CL_SXML_OPEN_ELEMENT` with the interface `IF_SXML_OPEN_ELEMENT`. The methods of this interface enable access to the XML attributes of the element. For example, `GET_ATTRIBUTES` can be used to place references to attribute objects for all attributes in an internal table.

Any [exceptions](ABENABAP_SXML_LIB_EXCEPTIONS.html) should be caught and handled in a `TRY` control structure.

[Object-Oriented Parsing](ABENSXML_OO_PARSING_ABEXA.html)

The following methods of the interface `IF_SXML_READER` are designed especially for object-oriented parsing. They return a reference with the static type `IF_SXML_NODE`, which points to a node object and can be cast to its more concrete object type.

If the current node is to be accessed after `PUSH_BACK`, the node object can be obtained using `READ_CURRENT_NODE`.

These methods are sufficient for all simple parsing tasks. For accessing XML attributes, a node object of an element opening contains the appropriate methods. To reset the parser to a preceding node or to parse the current node with its subnodes, the methods [`PUSH_BACK`](ABENABAP_SXML_LIB_PARSE_ITERATIVE.html) and [`SKIP_NODE`](ABENABAP_SXML_LIB_PARSE_ITERATIVE.html) can also be used here. Further token-based parsing methods should not usually be used at the same time.

-   `READ_NEXT_NODE` - Like [`NEXT_NODE`](ABENABAP_SXML_LIB_PARSE_ITERATIVE.html) but with the return value `NODE`.
-   `READ_CURRENT_NODE` - Like [`CURRENT_NODE`](ABENABAP_SXML_LIB_PARSE_ITERATIVE.html) but with the return value `NODE`.

-   [Token-based parsing](ABENABAP_SXML_LIB_PARSE_ITERATIVE.html) and object-oriented parsing are not strictly separated. Methods such as `NEXT_NODE` and `READ_NEXT_NODE` can be called alternately in the same program. The attributes of the reader can always be used to access the properties of a node in object-oriented parsing too. This is not recommended, however, for reasons of readability.
-   If an XML element has multiple identically named attributes, only one of these attributes is used in object-oriented parsing (unlike in [token-based parsing](ABENABAP_SXML_LIB_PARSE_ITERATIVE.html)). This attribute has the value of the last identically named attribute (see example class `CL_DEMO_XML_ATTRIBUTES`).
-   A node object returned in object-oriented parsing can be passed directly to an [object-oriented XML writer](ABENABAP_SXML_LIB_RENDER_OO.html).
-   Object-oriented parsing is more convenient than token-based parsing, but the many extra objects that are created can affect performance negatively.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_sxml\_lib.html abenabap\_sxml\_lib\_parse.html