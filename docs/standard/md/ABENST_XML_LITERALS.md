---
title: "ABENST_XML_LITERALS"
description: |
  ABENST_XML_LITERALS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_XML_LITERALS.htm"
abapFile: "ABENST_XML_LITERALS.html"
keywords: ["do", "if", "data", "ABENST", "XML", "LITERALS"]
---

Literal XML elements are XML elements that are not ST statements or that are not in the namespace `http://www.sap.com/transformation-templates` (namespace prefix `tt`). Attributes of literal XML elements that are not in this namespace are called literal attributes.

During serialization, literal XML elements and their literal attributes are passed to the target XML document unchanged. In deserializations they are compared with the XML source document word by word. In addition to the literal attributes, literal XML elements can also contain certain attributes with the namespace prefix `tt`, that is, ST-specific attributes, to set the current node and to control behavior during deserialization.

-   [ST - General Literal XML Elements](ABENST_XML_LITERALS_GENERAL.html)
-   [ST - Special Form of Literal XML Elements](ABENST_XML_LITERALS_SPECIAL.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_literals.html