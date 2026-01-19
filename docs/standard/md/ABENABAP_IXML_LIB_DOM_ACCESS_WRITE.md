---
title: "The steps above used to add content to an element"
description: |
  can also be performed using a single method call as follows: element = document->create_simple_element_ns( n            name   = ... n            value  = ... n            parent = ... ). This creates the element, with the content passed to `value`, and appends it to the node passed to `par
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_IXML_LIB_DOM_ACCESS_WRITE.htm"
abapFile: "ABENABAP_IXML_LIB_DOM_ACCESS_WRITE.html"
keywords: ["insert", "do", "if", "method", "data", "ABENABAP", "IXML", "LIB", "DOM", "ACCESS", "WRITE"]
---

Writes enable an XML document to be constructed from scratch in the memory or an existing document to be modified. The most important methods used for constructing a DOM create elements and add attributes to elements. These methods are declared in the interface `IF_IXML_DOCUMENT` and are briefly introduced here. Other methods are used to remove elements from a DOM, which is described in the interface documentation (see also the executable [rendering example](ABENIXML_RENDER_ABEXA.html)).

Nodes are usually added to existing nodes as subnodes. To create an element, a reference variable `document` with type `IF_IXML_DOCUMENT` that points to an XML document can be used to call the following method:

element = document->create\_element\_ns( name = ... ).

The static type of the reference variable `element` is then `IF_IXML_ELEMENT` and it points to an element called `name` that is not yet part of the tree structure. The following call can be used to insert the element in the tree structure:

parent->append\_child( element ).

Here, `parent` is a reference variable that points to an existing node object of the XML document. A reference variable, `document`, can be specified for `parent` for the document itself as an access point to an empty document.

The elements created using `CREATE_ELEMENT_NS` are empty. The following method can be used to create content:

DATA(text) = document->create\_text( ... ).

The static type of the reference variable `text` is then `IF_IXML_TEXT` and it points to literal content that is not yet part of the tree structure. This can be inserted in an element using the method `APPEND_CHILD`.

The steps above used to add content to an element

can also be performed using a single method call as follows:

element = document->create\_simple\_element\_ns( \\n            name   = ... \\n            value  = ... \\n            parent = ... ).

This creates the element, with the content passed to `value`, and appends it to the node passed to `parent` as a subnode. For this reason, the individual steps described above are generally only used for more specific tasks.

The following method can be used to add an attribute to an element of an XML document to which a reference variable `element` points:

element->set\_attribute\_ns( name = ... value = ... ).

This creates an attribute called `name` with the value passed to `value`.

-   Writes to the DOM must be avoided during [sequential parsing](ABENABAP_IXML_LIB_PARSE_EVENT.html), since this can produce undefined behavior.
-   iXML documents can also be specified as an XML target for XSL transformations called using [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html).
-   If writes produce content of elements or attributes, the characters *<*, *\>*, *&*, *"*, and *'* are transformed automatically to the associated [XML](ABENXML_OVIEW.html) notation.

-   create element
-   add element
-   create content
-   add content

-   [Creating Nodes](ABENIXML_CREA_ELEM_ABEXA.html)
-   [Creating Elements](ABENIXML_CREA_SIMPLE_ELEM_ABEXA.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib.html abenabap\_ixml\_lib\_dom\_access.html