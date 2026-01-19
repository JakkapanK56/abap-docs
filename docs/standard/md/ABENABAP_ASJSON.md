---
title: "ABENABAP_ASJSON"
description: |
  ABENABAP_ASJSON - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_ASJSON.htm"
abapFile: "ABENABAP_ASJSON.html"
keywords: ["while", "data", "types", "ABENABAP", "ASJSON"]
---

The canonical JSON representation asJSON is the format of [JSON](ABENJSON_GLOSRY.html) data that is produced by a serialization of ABAP data using the [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID`, or that is required for a deserialization using the identity transformation.

asJSON is based closely on [asXML](ABENABAP_XSLT_ASXML.html). Conceptually, an asJSON representation is produced by a restructuring of the asXML representation of this ABAP data to a [JSON-XML](ABENJSON_XML_GLOSRY.html) representation, while keeping all value content. This means the same basic rules apply as for asXML. In particular, XML schema data types for the mapping of ABAP data types are also used in asJSON.

Description of the asJSON format:

-   [General asJSON Format](ABENABAP_ASJSON_GENERAL.html)
-   [Mapping of ABAP Data Types](ABENABAP_ASJSON_ABAP_TYPES.html)

-   asJSON only occurs in the [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID`. In particular, asJSON is not generally needed for user-defined transformations for JSON data. [JSON-XML](ABENJSON_XML_GLOSRY.html) is used directly instead.
-   A JSON-XML representation of asJSON is known as [asJSON-XML](ABENASJSON_XML_GLOSRY.html). asJSON-XML is not used as an intermediate format in transformations, but the asJSON-XML linked with an asJSON representation can be created to analyze it and compare it with asXML.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_trafos.html