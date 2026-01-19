---
title: "ABENABAP_IXML_LIB_DOM_FILTER_READ"
description: |
  ABENABAP_IXML_LIB_DOM_FILTER_READ - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_IXML_LIB_DOM_FILTER_READ.htm"
abapFile: "ABENABAP_IXML_LIB_DOM_FILTER_READ.html"
keywords: ["do", "if", "method", "data", "ABENABAP", "IXML", "LIB", "DOM", "FILTER", "READ"]
---

When a DOM is read using [iterators](ABENABAP_IXML_LIB_DOM_ITERAT_READ.html), all nodes of a document or subtree or all elements of a list are read by default. A filter can be linked with an iterator to restrict it to specific nodes or elements only. Filters can be created using factory methods from the interface `IF_IXML_NODE`. For example, a condition can be set for the name of an element as follows if `document` has the type `IF_IXML_DOCUMENT` and points to an XML:

DATA(filter) = document->create\_filter\_name\_ns( name = ... ).

The static type of the reference variable `filter` is then `IF_IXML_NODE_FILTER` and the variable points to a filter object that can be passed to an iterator as follows:

DATA(iterator) = document->create\_iterator( ). \\n... \\niterator->set\_filter( filter ).

or in short

DATA(iterator) = document->create\_iterator\_filtered( filter ).

The [iterator](ABENABAP_IXML_LIB_DOM_ITERAT_READ.html) then only reads elements of the name passed to the filter. The factory methods of the interface for nodes can be used to create the following filters (among others):

Other factory methods are available for associating multiple filters and creating special filters that implement Boolean operators:

References to existing filter objects can be passed to the input parameters of these factory methods. A new filter is created that implements the Boolean operator on the passed filters.

For more information (further filters and possible parameters), see the interface `IF_IXML_NODE`.

[Iterator Filters](ABENIXML_FILTER_ITERATOR_ABEXA.html)

-   `CREATE_FILTER_NODE_TYPE`: Condition for the type of a node
-   `CREATE_FILTER_NAME_NS`: Condition for the name of a node
-   `CREATE_FILTER_ATTRIBUTE_NS`: Condition for the name and value of an attribute

-   `CREATE_FILTER_AND`: "and" join
-   `CREATE_FILTER_OR`: "or" join
-   `CREATE_FILTER_NOT`: Negation

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib.html abenabap\_ixml\_lib\_dom\_access.html abenabap\_ixml\_lib\_dom\_access\_read.html