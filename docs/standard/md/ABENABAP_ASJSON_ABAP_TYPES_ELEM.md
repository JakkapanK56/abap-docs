---
title: "ABENABAP_ASJSON_ABAP_TYPES_ELEM"
description: |
  ABENABAP_ASJSON_ABAP_TYPES_ELEM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_ASJSON_ABAP_TYPES_ELEM.htm"
abapFile: "ABENABAP_ASJSON_ABAP_TYPES_ELEM.html"
keywords: ["do", "case", "data", "types", "ABENABAP", "ASJSON", "ABAP", "TYPES", "ELEM"]
---

The values of elementary ABAP types are represented in asJSON using the [JSON representations](ABENJSON_OVIEW.html) of character-like values and numeric values. Representations of Boolean values and zero are not used.

The type-dependent format of a value corresponds to the [asXML representation](ABENABAP_XSLT_ASXML_NAMED.html) of elementary types and can be taken from the tables there. The serialization and deserialization behavior listed there applies.

An elementary ABAP data object that does not have an associated JSON object component in deserializations retains its previous value. To initialize the data object in this case, the transformation option [`clear`](ABAPCALL_TRANSFORMATION_OPTIONS.html) with the value *all* can be used.

[asJSON for Elementary ABAP Types](ABENABAP_JSON_ASJSON_ELEM_ABEXA.html)

-   The values of all numeric types (`i`, `p`, `decfloat16`, `decfloat34`, `f`) are represented directly as JSON number values.
-   The values of all other types (`c`, `string`, `n`, `d`, `t`, `x`, `xstring`) are represented as character-like values in quotation marks.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_trafos.html abenabap\_asjson.html abenabap\_asjson\_abap\_types.html