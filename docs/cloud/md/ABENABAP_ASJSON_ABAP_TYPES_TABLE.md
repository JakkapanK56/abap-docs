---
title: "ABENABAP_ASJSON_ABAP_TYPES_TABLE"
description: |
  ABENABAP_ASJSON_ABAP_TYPES_TABLE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_ASJSON_ABAP_TYPES_TABLE.htm"
abapFile: "ABENABAP_ASJSON_ABAP_TYPES_TABLE.html"
keywords: ["do", "if", "case", "data", "types", "internal-table", "ABENABAP", "ASJSON", "ABAP", "TYPES", "TABLE"]
---

Internal tables are represented in asJSON as [JSON arrays](ABENJSON_OVIEW.html). The lines of the internal table are represented in their canonical representation as the components of the array. All table categories are allowed. Serializations do not pass any information about the table category to the JSON data. If the target field of a deserialization is a [sorted table](ABENSORTED_TABLE_GLOSRY.html), the lines are sorted accordingly.

[asJSON for Internal Tables](ABENABAP_JSON_ASJSON_TABLE_ABEXA.html)

-   An internal table that does not have an associated JSON object component in deserializations retains its previous value. If an empty array is assigned to an internal table, it is set to its type-dependent initial value, that is, it is emptied. To initialize the internal table in either case, the transformation option [`clear`](ABAPCALL_TRANSFORMATION_OPTIONS.html) with the value *all* can be used.
-   Unlike in the [asXML representation](ABENABAP_XSLT_ASXML_TABLE.html) of internal tables, asJSON does not require a name like `item` for the table lines.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_trafos.html abenabap\_asjson.html abenabap\_asjson\_abap\_types.html