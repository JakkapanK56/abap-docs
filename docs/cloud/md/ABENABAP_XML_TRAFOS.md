---
title: "ABENABAP_XML_TRAFOS"
description: |
  ABENABAP_XML_TRAFOS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_XML_TRAFOS.htm"
abapFile: "ABENABAP_XML_TRAFOS.html"
keywords: ["class", "data", "internal-table", "ABENABAP", "XML", "TRAFOS"]
---

The AS ABAP kernel contains processors for the following transformations:

Appropriate transformation programs can be created in the ABAP repository and called using the following statement:

The possible transformations fulfill the following purposes:

To also access ABAP data using XSL transformations, the asXML format can be used as an intermediate format, which defines a mapping between ABAP data and XML:

The source and target of these transformations can be ABAP data objects, XML data in strings, or internal tables or objects from [class libraries for XML](ABENABAP_XML_LIBS.html).

-   [XSL Transformations](ABENABAP_XSLT.html)
-   [Simple Transformations](ABENABAP_ST.html)

-   [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html)

-   XSL transformations transform XML to unicode character streams that can be calculated, for example XML or HTML.
-   Simple transformations serialize ABAP data to XML and deserialize XML data to ABAP.

-   [asXML - Canonical XML Representation](ABENABAP_XSLT_ASXML.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html