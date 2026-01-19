---
title: "ABENABAP_IXML_LIB_OBJECT_TYPES"
description: |
  ABENABAP_IXML_LIB_OBJECT_TYPES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_IXML_LIB_OBJECT_TYPES.htm"
abapFile: "ABENABAP_IXML_LIB_OBJECT_TYPES.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENABAP", "IXML", "LIB", "OBJECT", "TYPES"]
---

The following sections list the classes and interfaces of iXML Library according to subareas.

All object types in iXML Library include the interface `IF_IXML_UNKNOWN`. Reference variables of this type can point to all objects in iXML Library. The interface `IF_IXML_UNKNOWN` contains the method `QUERY_INTERFACE`, which can be used for special [downcasts](ABENIXML_DOWN_CASTS.html) within iXML Library.

-   [Access class](ABENABAP_IXML_LIB_CL_IXML.html)
-   \\ [Streams](ABENABAP_IXML_LIB_STREAM.html)
-   [Parser](ABENABAP_IXML_LIB_PARSER.html)
-   [DOM](ABENABAP_IXML_LIB_DOM.html)
-   [Renderer](ABENABAP_IXML_LIB_RENDERER.html)
-   [Encoding](ABENABAP_IXML_LIB_ENCODING.html)

-   The required classes and interfaces are documented in the Class Builder.
-   Apart from the access class [`CL_IXML`](ABENABAP_IXML_LIB_CL_IXML.html), no classes generally must be specified directly in a program. All reads and writes are performed using interfaces. Even `CL_IXML` is required only once to execute the method `CREATE`.
-   Each component interface of a composite interface has an alias name, which means that the components of the general interface can always be used directly in the special interface.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib.html