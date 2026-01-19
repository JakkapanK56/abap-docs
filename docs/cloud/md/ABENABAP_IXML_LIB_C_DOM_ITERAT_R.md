---
title: "ABENABAP_IXML_LIB_C_DOM_ITERAT_R"
description: |
  ABENABAP_IXML_LIB_C_DOM_ITERAT_R - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_IXML_LIB_C_DOM_ITERAT_R.htm"
abapFile: "ABENABAP_IXML_LIB_C_DOM_ITERAT_R.html"
keywords: ["select", "do", "if", "case", "method", "data", "ABENABAP", "IXML", "LIB", "DOM", "ITERAT"]
---

The section [Direct Read](ABENABAP_IXML_LIB_C_DOM_DIRECT_R.html) demonstrates how to access the DOM nodes directly using the following objects:

An iterator can be created for each of these objects. This iterator makes it possible to iterate using the DOM elements represented by the objects. The interface of every iterator provides the same options for accessing the objects iterated by the iterator.

The iterators shown here are forward iterators that iterate from left to right or from top to bottom. The interfaces of the objects also make it possible to create backward iterators, which iterate from right to left or from bottom to top.

A reference variable `document` with the type `IF_IXML_NODE`, which points to an XML document, can be used to create an iterator for all the nodes of the document as follows:

DATA(iterator) = document->create\_iterator( \[depth\] ).

The static type of the reference variable `iterator` is then `IF_IXML_NODE_ITERATOR` and it points to the iterator whose methods can iterate using the nodes. The optional input parameter `depth` can be used to specify the depth of the nodes in the tree structure that are to be used for the iteration. To create an iterator for iterating the subnodes of a specific node, it is possible to use a reference variable `node` of type `IF_IXML_NODE`, instead of `document`. This reference variable points to a node object.

Iterator nodes can be iterated using the following method:

DATA(node) = iterator->get\_next( ).

The static type of the reference variable `node` is then `IF_IXML_NODE` and it points to the object of the current iterator node. If no more nodes exist, `node` is initial.

An iterator can be created for all of the lists under [Direct Read](ABENABAP_IXML_LIB_C_DOM_DIRECT_R.html):

In all three cases, the reference variable has the static type `IF_IXML_NODE_ITERATOR` and points to an iterator for the elements of the relevant list. This iterator can be used as shown above.

Since the lists only contain the required elements, it is usually not necessary to query the type, as is the case when iterating the entire document or subtrees.

-   Objects with the `IF_IXML_NODE` interface for individual nodes
-   Objects with the `IF_IXML_NODE_LIST` interface for lists of subnodes
-   Objects with the `IF_IXML_NODE_COLLECTION` interface for lists of element names
-   Objects with the `IF_IXML_NAMED_NODE_MAP` interface for lists of attributes

-   Unlike a node [direct read](ABENABAP_IXML_LIB_C_DOM_DIRECT_R.html), which can be restricted to the elements of the represented XML data, an iterator captures all nodes in an XML document, including nodes that only contain structural information. The method `GET_TYPE` of interface `IF_IXML_NODE` should be used to read the node type and compare it to constants of this interface. [Filter](ABENABAP_IXML_LIB_C_DOM_FILTER_R.html) or Downcasts provide further options for only selecting specified nodes.
-   In addition to the iterator for subnodes shown here, an inline iterator is also available with the interface `IF_IXML_INLINE_ITERATOR` for iterating neighboring nodes.

-   Node list (`IF_IXML_NODE_LIST`)
-   Element list (`IF_IXML_NODE_COLLECTION`)
-   Attribute list (`IF_IXML_NAMED_NODE_MAP`)
-   `DATA(iterator) = \{nodes|elements|attributes\}->create_iterator( ).`

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib\_cloud.html abenabap\_ixml\_lib\_c\_dom\_access.html abenabap\_ixml\_lib\_c\_dom\_access\_r.html