---
title: "ABENABAP_IXML_LIB_DOM_DIRECT_READ"
description: |
  ABENABAP_IXML_LIB_DOM_DIRECT_READ - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_IXML_LIB_DOM_DIRECT_READ.htm"
abapFile: "ABENABAP_IXML_LIB_DOM_DIRECT_READ.html"
keywords: ["do", "if", "method", "data", "ABENABAP", "IXML", "LIB", "DOM", "DIRECT", "READ"]
---

Direct reads can be used to create references to the node objects in DOM. These references can then be used to access methods and to get the properties of the nodes. Here, any node can be used as the starting point for access to its subnodes.

The root element of the DOM, which represents the root element of the represented XML data, can be used as the initial node. The root element of an existing XML document that points to a reference variable `document` can be accessed as follows:

DATA(element) = document->get\_root\_element( ).

The static type of the reference variable `element` is then `IF_IXML_ELEMENT` and points to the node object of the root element. The subnodes are now accessed from this node object.

There are two basic methods of accessing subnodes:

The method `GET_FIRST_CHILD` of the interface `IF_IXML_ELEMENT` returns the first subnode for an element:

DATA(child) = element->get\_first\_child( ).

The static type of the reference variable `child` is then `IF_IXML_NODE` and it points to the node object of the first subnode. If there are no subnodes, `child` is initial.

The method `GET_NEXT` of the interface `IF_IXML_NODE` returns the next adjacent node and can be used to read all subnodes in sequence:

DATA(next\_child) = child->get\_next( ).

The static type of the reference variable `next_child` is also `IF_IXML_NODE`. If no adjacent node is found, `child_next` is initial.

[Iteration Using Subnodes](ABENIXML_CHILD_NODES_ABEXA.html)

The method `GET_CHILDREN` of the interface `IF_IXML_ELEMENT` returns a list of all subnodes for any element:

DATA(children) = element->get\_children( ).

The static type of the reference variable `children` is then `IF_IXML_NODE_LIST` and points to an object containing an indexed list of subnodes. These subnodes can be accessed as follows:

DATA(child) = nodes->get\_item( index ).

The static type of the reference variable `child` is then `IF_IXML_NODE` and it points to the subnode specified by the number `index`, where the count begins at zero.

In sequential access to adjacent nodes, access to the node list is also optimized.

[Access using node lists](ABENIXML_NODE_LIST_ABEXA.html)

If the name is known of an element of an existing XML document pointed to by a reference variable `document`, it can be searched for as follows:

DATA(element) = document->find\_from\_name\_ns( name = ... ).

The static type of the reference variable `element` is then `IF_IXML_ELEMENT` and it points to the node object that represents the first element being searched for. If the element is not found, `element` is initial. The optional parameter `DEPTH` of the method `FIND_FROM_NAME_NS` enables the search depth to be restricted.

A further method of the document interface can be used to collect all elements of a name. This method also enables the search depth to be restricted:

DATA(elements) = document->get\_elements\_by\_tag\_name\_ns( name = ... ).

The static type of the reference variable `elements` is then `IF_IXML_NODE_COLLECTION` and points to an object containing an indexed list of the found elements. These subnodes can be accessed as follows:

DATA(node) = item->get\_item( index ).

The static type of the reference variable `node` is then `IF_IXML_NODE` and it points to the node specified by the number `index`, where the count begins at zero.

[Access Using Names](ABENIXML_NODE_NAMES_ABEXA.html)

There are various methods for accessing the attributes of elements in DOM.

A reference variable `node` with the type `IF_IXML_NODE`, which points to a node object, can be used to create a list of the attributes of the node as follows:

DATA(attributes) = node->get\_attributes( ).

The static type of the reference variable `attributes` is then `IF_IXML_NAMED_NODE_MAP` and points to an object containing an indexed list of the attributes. These attributes can be accessed as follows:

DATA(attribute) = attributes->get\_item( index ).

The static type of the reference variable `attribute` is then `IF_IXML_ATTRIBUTE` and it points to the object specified by the number `index`, where the count begins at zero.

Instead of the index, the lists of attributes can also be read using the attribute name:

DATA(attribute) = attributes->get\_named\_item\_ns( name = ... ).

`attribute` then points to the object of attribute specified by the name or is initial.

Instead of first creating a list of the attributes, they can also be read directly from an element, using their names. A reference variable `element` with the type `IF_IXML_ELEMENT`, which points to an element, can be used to read an attribute as follows:

DATA(attribute) = element->get\_attribute\_node\_ns( name = ... ).

The static type of the reference variable `attribute` is then `IF_IXML_ATTRIBUTE` and it points to the object of the attribute specified by the name or is initial.

It is also possible to write only the value of the attribute to a text string directly:

DATA(value) = element->get\_attribute\_ns( name = ... ).

The type of `value` is then `string` and contains the value of the attribute or is initial.

Before the short forms with reference variables with the type `IF_IXML_NODE` can be executed, a downcast must be performed to the type `IF_IXML_ELEMENT`, because these methods are only contained in this interface.

[Access to Attributes](ABENIXML_ATTRIBUTES_ABEXA.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib.html abenabap\_ixml\_lib\_dom\_access.html abenabap\_ixml\_lib\_dom\_access\_read.html