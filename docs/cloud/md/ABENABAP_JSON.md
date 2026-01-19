---
title: "ABENABAP_JSON"
description: |
  ABENABAP_JSON - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_JSON.htm"
abapFile: "ABENABAP_JSON.html"
keywords: ["data", "ABENABAP", "JSON"]
---

This section describes how [JSON](ABENJSON_GLOSRY.html) data can be created and read in ABAP. The main topics are

The handling of [JSON data](ABENJSON_OVIEW.html) in ABAP is based on the following principles:

-   processing and creating JSON data using parsers and renderers created and used using the APIs of the [sXML Library](ABENSXML_LIBRARY_GLOSRY.html).
-   the direct transformation of ABAP data to JSON format (serialization) and reading of data in JSON format to ABAP data objects (deserialization) using transformations that exist as programs in the repository.

-   A [JSON-XML](ABENABAP_JSON_XML.html) format maps JSON data to XML.
-   XML readers and XML writers in sXML Library support JSON-XML and can be used as [parsers and renderers](ABENABAP_JSON_SXML.html) of JSON data.
-   Direct [transformations](ABENABAP_JSON_TRAFOS.html) can be performed [between ABAP and JSON](ABENABAP_JSON_TRAFOS.html). Here, a canonical JSON representation of ABAP data called [asJSON](ABENABAP_ASJSON.html) can be used for the [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID`.

abenabap.html abenabap\_reference.html abendata\_interchange.html