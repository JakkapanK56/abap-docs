---
title: "ABENABAP_SXML_LIB_PARSE_ITERATIVE"
description: |
  ABENABAP_SXML_LIB_PARSE_ITERATIVE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SXML_LIB_PARSE_ITERATIVE.htm"
abapFile: "ABENABAP_SXML_LIB_PARSE_ITERATIVE.html"
keywords: ["do", "if", "case", "try", "method", "class", "data", "ABENABAP", "SXML", "LIB", "PARSE", "ITERATIVE"]
---

In token-based parsing, the parser iterates across all nodes (tokens) in the tree structure of the XML data, one after the other. By default, the iterator passes across all subnode branches until the final node. The parser pauses after every iteration step on a node whose properties are available in the attributes of the XML reader. If the parser pauses on the node for an element opening, the list of the XML attributes there can be accessed.

An XML reader is created using the factory method `CREATE` of the required class and by passing the source `xml` to the XML data, for example:

DATA(reader) = cl\_sxml\_string\_reader=>create( xml ).

The static type of the reference variables is then the interface `IF_SXML_READER` and its methods and attributes can be addressed directly.

In the simplest parsing case, the method `NEXT_NODE` is applied as many times as it takes to reach the end of the XML:

reader->next\_node( ).

Once the method is called, the attributes of the reader with the required properties of the node can be accessed directly. If the parser is on the node of an element opening, the method `NEXT_ATTRIBUTE` can be used to iterate across the list of attributes of an XML element:

reader->next\_attribute( ).

After this method, the attributes of the reader object contain the name and the value of the current XML attribute. The end of the data is represented by the value of the constants `IF_SXML_NODE=>CO_NT_FINAL` in the attribute `NODE_TYPE`. Any [exceptions](ABENABAP_SXML_LIB_EXCEPTIONS.html) should be caught and handled in a `TRY` control structure.

The program `DEMO_SXML_PARSE_XML` executes a simple token-based parsing for any XML data that can be entered.

[Token-based parsing](ABENSXML_PARSING_ABEXA.html)

In addition to the simple iteration across nodes and attributes, the interfaces `IF_SXML_READER` offers several other methods for token-based parsing, summarized below:

The attributes of the reader with the properties of the current node are:

The value of the constants `IF_SXML_NODE=>CO_NT_FINAL` in the attribute `NODE_TYPE` indicate that the end of the XML data was reached.

-   Methods for parsing using nodes

-   `NEXT_NODE` - Moves the parser to the next node
-   `CURRENT_NODE` - Resets the parser to the node for the element opening of the current node, if available. This method is ignored by value nodes or closed elements.
-   `PUSH_BACK` - Resets the parser to the node for the element opening of the direct parent node.
-   `SKIP_NODE` - Parses all nodes from a node for an element opening to the associated end of element. The parser is then at the end of the element. If required, the current node and all subnodes are passed to an XML writer. This method has no effect for value nodes or closed elements.

-   Methods for reading the attribute list

-   `NEXT_ATTRIBUTE` - Reads the next attribute in the list
-   `NEXT_ATTRIBUTE_VALUE` - Sets the attribute `VALUE` or `VALUE_RAW` of the read explicitly to the value of the current attribute
-   `GET_ATTRIBUTE_VALUE` - Sets the attribute `VALUE` of the reader to the value of a specific attribute

-   The method `CURRENT_NODE` is most useful when reading an attribute list, to return to the start.
-   If an XML element has multiple identically named attributes, all of these attributes are respected in the order in which they appear (see example class `CL_DEMO_XML_ATTRIBUTES`)
-   Apart from simply skipping nodes, the method `SKIP_NODE` can also be used to check the subtrees or the entire tree for errors or to copy trees. In particular, the format of the copied tree or subtree can be transformed into a different format.
-   For the latter see the [executable example](ABENSXML_FORMAT_TRAFOS_ABEXA.html).
-   Token-based parsing is designed mainly for forward iteration through the XML data. Free navigation, as possible in [iXML Library](ABENABAP_IXML_LIB.html) in DOM, is not recommended here. The method `PUSH_BACK` makes it possible to move back a step but does not restore the reader to the state it had when it reached the node using `NEXT_NODE`. After a `PUSH_BACK`, the parsed node does not always produce the same result as the last time. In particular, subnodes already parsed could be skipped.

-   [Steps in Token-Based Parsing](ABENSXML_PARSING_STEPS_ABEXA.html)
-   [Methods for token-based parsing](ABENSXML_PARSING_METHODS_ABEXA.html)

-   `NODE_TYPE` - Node type in accordance with the constants of the interface `IF_SXML_NODE`
-   `PREFIX` - Namespace prefix
-   `NAME` - Element name
-   `NSURI` - Namespace
-   `VALUE_TYPE` - Type of the value in accordance with the constants of the interface `IF_SXML_VALUE`:

-   `CO_VT_TEXT` - Text data in the attribute `VALUE`
-   `CO_VT_TEXT` - Raw data in the attribute `VALUE_RAW`

-   `VALUE` - Character-like value (if text data)
-   `VALUE_RAW` - Byte-like value (if raw data)

-   When parsing, the attributes of a reader are only overwritten by non-initial content. If the parser is set to a literal element without a name, for example, the preceding content of the attribute `NAME` is kept. This applies particularly to the attribute `VALUE`, which is not initialized if a node has no value.
-   The attributes are declared in the interface `IF_SXML_READER`. In a reader class, they can also be addressed using alias names.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_sxml\_lib.html abenabap\_sxml\_lib\_parse.html