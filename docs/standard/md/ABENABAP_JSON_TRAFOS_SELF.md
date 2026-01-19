---
title: "ABENABAP_JSON_TRAFOS_SELF"
description: |
  ABENABAP_JSON_TRAFOS_SELF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_JSON_TRAFOS_SELF.htm"
abapFile: "ABENABAP_JSON_TRAFOS_SELF.html"
keywords: ["data", "internal-table", "ABENABAP", "JSON", "TRAFOS", "SELF"]
---

User-defined XSLT programs and Simple Transformations enable the following transformations:

[Simple Transformation for Internal Tables](ABENABAP_ST_JSON_TABLE_ABEXA.html)

-   Serialization of ABAP data objects to JSON

-   An [XSL transformation](ABENABAP_XSLT.html) accesses the [asXML](ABENASXML_GLOSRY.html) representation of the connected ABAP data, created internally. It must transform asXML to JSON-XML.
-   A [Simple Transformation](ABENABAP_ST.html) accesses the connected ABAP data directly. It must create a valid JSON-XML representation.

-   Deserialization from JSON to ABAP data objects:

-   An [XSL transformation](ABENABAP_XSLT.html) must transform JSON-XML to an [asXML](ABENASXML_GLOSRY.html) representation of the bound ABAP data objects.
-   A [Simple Transformation](ABENABAP_ST.html) must process JSON-XML and write the data to the bound ABAP data objects.

-   XSL transformations between JSON and XML or between JSON and JSON.

-   Transformations can be called between JSON-XML and any XML or between JSON-XML and JSON-XML.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_trafos.html