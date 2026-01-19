---
title: "ABENABAP_JSON_TRAFOS"
description: |
  ABENABAP_JSON_TRAFOS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_JSON_TRAFOS.htm"
abapFile: "ABENABAP_JSON_TRAFOS.html"
keywords: ["if", "data", "internal-table", "ABENABAP", "JSON", "TRAFOS"]
---

The [transformations for XML](ABENABAP_XML_TRAFOS.html) that can be called from ABAP, namely [XSL transformations](ABENXSL_TRANSFORMATION_GLOSRY.html) and [simple transformations](ABENSIMPLE_TRANSFORMATION_GLOSRY.html), can also be used for [JSON](ABENJSON_GLOSRY.html).

Any XSLT programs and ST programs can be called that can handle JSON-XML:

User-defined transformations must be programmed accordingly. The [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID` is handled appropriately internally.

-   To call a transformation for JSON data as a source, the following XML sources can be specified in the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html):

-   A string or internal table with [JSON data](ABENJSON_OVIEW.html) in character-like or byte-like representation.
-   A [JSON Reader](ABENJSON_READER_GLOSRY.html).

-   A JSON reader returns data in the [JSON XML](ABENJSON_XML_GLOSRY.html) format. The JSON data specified as a string or in an internal table is also handled like XML representing JSON data [JSON-XML](ABENJSON_XML_GLOSRY.html) format.
-   To call a transformation for JSON data as a target, a [JSON writer](ABENJSON_WRITER_GLOSRY.html) can be specified as an XML target in the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html): A JSON writer expects data in [JSON-XML](ABENJSON_XML_GLOSRY.html) format.

-   If the source is JSON data, the transformation must process JSON-XML as its input.
-   If the target is JSON data, the transformation must create JSON-XML.

-   [Self-Written Transformations](ABENABAP_JSON_TRAFOS_SELF.html)
-   [Identity Transformation](ABENABAP_JSON_TRAFO_ID.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html