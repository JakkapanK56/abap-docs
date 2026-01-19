---
title: "ABENNEWS-740-XML"
description: |
  ABENNEWS-740-XML - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740-XML.htm"
abapFile: "ABENNEWS-740-XML.html"
keywords: ["if", "data", "types", "internal-table", "ABENNEWS", "740", "XML"]
---

In ABAP release 7.40, SP02, the interface between ABAP and XML has been enhanced as follows:

[1. New ST Statement `tt:read-write`](#ABAP_MODIFICATION_1@4@)

[2. Mapping Rules for `tt:value`](#ABAP_MODIFICATION_2@4@)

[3\. Support for JSON](#ABAP_MODIFICATION_3@4@)

The new ST statement [`tt:read-write`](ABENST_TT_READ_WRITE.html) is a short form for the statements `tt:read` and `tt:write` specified one after the other.

In the ST statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html) the attribute [`option="...,..."`](ABENST_OPTION.html) can be used to specify options for certain data types that override the default mapping of elementary data objects to the asXML format.

The format `IF_SXML=>CO_XT_JSON` has been added to the [formats](ABENABAP_SXML_LIB_FORMATS.html) supported by [sXML Library](ABENABAP_SXML_LIB.html). [XML readers](ABENXML_READER_GLOSRY.html) and [XML writers](ABENXML_WRITER_GLOSRY.html) created in this format can be used to process [JSON](ABENJSON_GLOSRY.html) data. A special [JSON-XML](ABENJSON_XML_GLOSRY.html) is used as an intermediate format here.

The statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html) can access these JSON readers and JSON writers and use them as XML sources or XML targets. Furthermore, JSON data can also be specified as an XML source in strings and internal tables.

abenabap.html abennews.html abennews-740.html abennews-740\_sp02.html