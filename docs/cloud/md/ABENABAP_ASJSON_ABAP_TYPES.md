---
title: "ABENABAP_ASJSON_ABAP_TYPES"
description: |
  ABENABAP_ASJSON_ABAP_TYPES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_ASJSON_ABAP_TYPES.htm"
abapFile: "ABENABAP_ASJSON_ABAP_TYPES.html"
keywords: ["data", "types", "internal-table", "ABENABAP", "ASJSON", "ABAP", "TYPES"]
---

Named data objects other than reference variables are represented in asJSON as the content of the following object components:

[`"bn1":...`](ABENABAP_ASJSON_GENERAL.html)\\ \\n[`"bn1":...`](ABENABAP_ASJSON_GENERAL.html)\\ \\n[`...`](ABENABAP_ASJSON_GENERAL.html)

An additional object is implemented for the objects referenced by reference variables:

[`"%heap":...`](ABENABAP_ASJSON_GENERAL.html)

Depending on the ABAP data type, serializations map the value of named data objects to a particular JSON representation and vice versa in deserializations:

-   [Mapping of Elementary ABAP Types](ABENABAP_ASJSON_ABAP_TYPES_ELEM.html)
-   [Mapping of Structures](ABENABAP_ASJSON_ABAP_TYPES_STRUC.html)
-   [Mapping of Internal Tables](ABENABAP_ASJSON_ABAP_TYPES_TABLE.html)
-   [Mapping of Enumerated Types](ABENABAP_ASJSON_ABAP_TYPES_ENUM.html)
-   [Mapping of Reference Variables and Referenced Objects](ABENABAP_ASXML_REFERENCES.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_trafos.html abenabap\_asjson.html