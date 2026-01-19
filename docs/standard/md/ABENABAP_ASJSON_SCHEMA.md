---
title: "ABENABAP_ASJSON_SCHEMA"
description: |
  ABENABAP_ASJSON_SCHEMA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_ASJSON_SCHEMA.htm"
abapFile: "ABENABAP_ASJSON_SCHEMA.html"
keywords: ["do", "if", "data", "types", "ABENABAP", "ASJSON", "SCHEMA"]
---

In [asXML](ABENASXML_GLOSRY.html), apart from the XML schema data types needed to map elementary ABAP types, additional XML schema data types are supported by special [domains](ABENABAP_XSLT_ASXML_SCHEMA.html) called `XSD...`.

asJSON, which is based on asXML, also supports these domains, apart from `XSDQNAME`. In serializations and deserializations from or to ABAP data objects typed with these domains, the same applies as to [asXML](ABENABAP_XSLT_ASXML_SCHEMA.html). Here, values from the domain `XSDBOOLEAN` are represented as real [Boolean JSON values](ABENJSON_OVIEW.html) in asJSON.

By specifying [`format`](ABENST_OPTION_FORMAT.html) in the attribute [`option`](ABENST_OPTION.html) of the ST statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html), formats of this type can also be applied to ABAP data objects that are not typed with a domain of this type. In JSON, furthermore, the `option` attribute also makes it possible to convert ABAP data fields and [UTC time stamps](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html) to UNIX time stamps (ticks) in the JSON format for OData.

[asJSON for Additional XML Schema Data Types](ABENABAP_JSON_ASJSON_XSD_ABEXA.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_trafos.html abenabap\_asjson.html