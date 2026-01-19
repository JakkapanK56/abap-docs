---
title: "ABENABAP_IXML_LIB_C_DOM_ACCESS"
description: |
  ABENABAP_IXML_LIB_C_DOM_ACCESS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_IXML_LIB_C_DOM_ACCESS.htm"
abapFile: "ABENABAP_IXML_LIB_C_DOM_ACCESS.html"
keywords: ["do", "if", "class", "data", "ABENABAP", "IXML", "LIB", "DOM", "ACCESS"]
---

[DOM](ABENDOM_GLOSRY.html) describes a tree-like representation, implemented using instances of classes, of a complete XML document in the memory. At the same time, each component of the XML file is created by a separate object. The associated [interfaces](ABENABAP_IXML_LIB_C_DOM.html) of the iXML Library can be used to access an XML document in DOM format.

-   [Reads performed on DOM](ABENABAP_IXML_LIB_C_DOM_ACCESS_R.html)
-   [Writes performed on DOM](ABENABAP_IXML_LIB_C_DOM_ACCESS_W.html)

-   When working with DOM, it is important to know the difference between the nodes of the DOM and the elements of the represented XML data. Each part of an XML document is represented by a separate node. A single element in XML data in DOM consists of multiple nodes for tags, content and so on, which can be accessed individually or together.
-   iXML documents can be defined as an XML target, iXML documents and their nodes can be specified as an XML source for XSL transformations called using [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html).

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib\_cloud.html