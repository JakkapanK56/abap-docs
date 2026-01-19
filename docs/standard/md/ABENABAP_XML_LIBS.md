---
title: "ABENABAP_XML_LIBS"
description: |
  ABENABAP_XML_LIBS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_XML_LIBS.htm"
abapFile: "ABENABAP_XML_LIBS.html"
keywords: ["do", "method", "class", "data", "ABENABAP", "XML", "LIBS"]
---

The following libraries that are delivered as part of AS ABAP enable processing of XML data based on classes and interfaces:

Objects of these libraries can be used as the source or target of the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html).

[Access to XML using Class Libraries](ABENXML_ACCESS_ABEXA.html)

-   iXML Library
-   The *integrated* XML Library provides methods for parsing XML data in XML 1.0 format to a [DOM](ABENDOM_GLOSRY.html) representation, for processing a DOM representation, and for rendering a DOM representation in XML data. iXML Library supports DTDs (Document Type Definitions).
-   There is an [iXML Library for ABAP Cloud](ABENABAP_IXML_LIB_CLOUD.html) and an [iXML Library Classic](ABENABAP_IXML_LIB.html). In classic ABAP, the iXML Library for ABAP Cloud can also be used.
-   [sXML Library](ABENABAP_SXML_LIB.html)
-   The *serial* XML Library provides methods for iterative processing of XML data in various formats. An XML reader reads XML data node by node. An XML writer writes individual nodes in XML data. sXML Library supports [JSON](ABENJSON_GLOSRY.html).

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html