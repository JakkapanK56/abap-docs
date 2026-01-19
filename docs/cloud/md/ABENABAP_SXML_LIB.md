---
title: "ABENABAP_SXML_LIB"
description: |
  ABENABAP_SXML_LIB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SXML_LIB.htm"
abapFile: "ABENABAP_SXML_LIB.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENABAP", "SXML", "LIB"]
---

The sXML Library provides an API consisting of [classes and interfaces](ABENABAP_SXML_LIB_OBJECT_TYPES.html) for reading (validating parses) and rendering (validating writes) of XML data in different formats and from different sources or to different targets.

In contrast to the [iXML Library for ABAP Cloud](ABENABAP_IXML_LIB_CLOUD.html), no document is created in [DOM format](ABENDOM_GLOSRY.html) and no DTDs (Document Type Definitions) are supported. Instead, the nodes of the tree structure represented by the XML data are processed serially and only the current node can be accessed. The node can be accessed using token-based or object-oriented methods. The classes and interfaces are described in the class and interface documentation.

-   [Supported Formats](ABENABAP_SXML_LIB_FORMATS.html)
-   [Parsing](ABENABAP_SXML_LIB_PARSE.html)
-   [Rendering](ABENABAP_SXML_LIB_RENDER.html)

-   The sXML Library supports the [UTF](ABENUTF_GLOSRY.html) character representation of the Unicode character set and hence also characters from the [surrogate area](ABENSURROGATE_AREA_GLOSRY.html).
-   The sXML Library methods are also used internally in calls of [Simple Transformations](ABENSIMPLE_TRANSFORMATION_GLOSRY.html) using the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html).
-   Serial processing of XML data in the sXML Library involves the [parsing](ABENABAP_SXML_LIB_PARSE.html) and [rendering](ABENABAP_SXML_LIB_RENDER.html) of each node from front to back without a preview. This is particularly clear in the parser method `SKIP_NODE`, which skips a node, but still has to parse it with all subnodes. This characteristic can be exploited to check whether data is well-formed and to test the copying of XML data to a writer.
-   In contrast to the sXML Library, the iXML Libraries create a DOM document and support DTDs.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html