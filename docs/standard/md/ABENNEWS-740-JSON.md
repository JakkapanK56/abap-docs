---
title: "ABENNEWS-740-JSON"
description: |
  ABENNEWS-740-JSON - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740-JSON.htm"
abapFile: "ABENNEWS-740-JSON.html"
keywords: ["if", "data", "types", "ABENNEWS", "740", "JSON"]
---

From ABAP release 7.40 SP02, ABAP supports the handling of JSON data and the transformation of ABAP data to JSON and back. For more information, see [ABAP and JSON](ABENABAP_JSON.html).

This enhancement has also been ported to releases 7.02 and 7.31.

[1\. JSON-XML](#ABAP_MODIFICATION_1@4@)

[2\. asJSON](#ABAP_MODIFICATION_2@4@)

[3. JSON and `CALL TRANSFORMATION`](#ABAP_MODIFICATION_3@4@)

[4. JSON and `escape`](#ABAP_MODIFICATION_4@4@)

[JSON-XML](ABENABAP_JSON_XML.html) is a special XML format that enables JSON data to be described using an XML representation. A new [format](ABENABAP_SXML_LIB_FORMATS.html), `IF_SXML=>CO_XT_JSON`, has been added to the [sXML](ABENSXML_LIBRARY_GLOSRY.html) Library, which enables JSON data to be processed using JSON-XML.

The canonical JSON representation asJSON defines a mapping between ABAP types and JSON. This is used in serializations and deserializations using the [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID`.

JSON data can be specified in various forms as an XML source in the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html) and a [JSON](ABENJSON_WRITER_GLOSRY.html) writer can be specified as target. The [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID` supports JSON by using [asJSON](ABENASJSON_GLOSRY.html). More information is available in [Transformations for JSON](ABENABAP_JSON_TRAFOS.html).

The escape function [`escape`](ABENESCAPE_FUNCTIONS.html) supports the new format `E_JSON_STRING` for replacing special characters in JSON.

abenabap.html abennews.html abennews-740.html abennews-740\_sp02.html