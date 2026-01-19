---
title: "ABENABAP_JSON_TRAFO_ID"
description: |
  ABENABAP_JSON_TRAFO_ID - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_JSON_TRAFO_ID.htm"
abapFile: "ABENABAP_JSON_TRAFO_ID.html"
keywords: ["if", "data", "ABENABAP", "JSON", "TRAFO"]
---

The predefined [identity transformation](ABENABAP_XSLT_ID.html)\\ `ID` is executed internally so that all requirements for [JSON transformations](ABENABAP_JSON_TRAFOS.html) are met. The following combinations are possible:

When XML data is specified as an XML source or XML target, this covers all data that can be specified behind `XML` in `CALL TRANSFORMATION`, except for JSON data and JSON readers and writers.

-   [JSON writer](ABENJSON_WRITER_GLOSRY.html) as XML target

-   ABAP data objects as source
-   The ABAP data is serialized directly to its canonical JSON format [asJSON](ABENASJSON_GLOSRY.html). In this concept, the ABAP data is serialized first to its canonical XML format [asXML](ABENASXML_GLOSRY.html). This is then transformed to an [asJSON-XML](ABENASJSON_XML_GLOSRY.html) representation and passed to the writer.
-   XML data as XML source
-   The XML source must be in JSON-XML format and is passed to the writer directly.
-   JSON data or JSON reader as XML source
-   The JSON-XML data is passed to the writer directly.

-   JSON data or [JSON reader](ABENJSON_READER_GLOSRY.html) as XML source

-   ABAP data objects as target
-   The JSON data must be in an [asJSON](ABENASJSON_GLOSRY.html) format that matches the ABAP data objects. The JSON data is deserialized directly to the ABAP data objects. Conceptually, an asJSON-XML representation of the asJSON data is processed that is first transformed to asXML and then deserialized to the ABAP data objects.
-   XML data as XML target
-   The JSON-XML data is passed to the XML target directly.
-   JSON writer as XML target
-   The JSON-XML data is passed to the writer directly.

-   If the identity transformation `ID` is used to serialize ABAP data to JSON and deserialize JSON data to ABAP, [asJSON, the canonical JSON representation](ABENABAP_ASJSON.html) of ABAP data, is applied.
-   Copies of the XSL transformation `ID` made from the repository to other XSLT programs are not handled like `ID` internally and cannot be used like ID for JSON data.

-   See [Identity Transformation with JSON Writer as Target](ABENJSON_TRAFO_ID_ABEXA.html) for the various ways of specifying JSON data as an XML source.
-   See the [asJSON](ABENABAP_ASJSON.html) examples.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_trafos.html