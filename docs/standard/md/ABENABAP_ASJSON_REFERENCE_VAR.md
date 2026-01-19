---
title: "ABENABAP_ASJSON_REFERENCE_VAR"
description: |
  ABENABAP_ASJSON_REFERENCE_VAR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_ASJSON_REFERENCE_VAR.htm"
abapFile: "ABENABAP_ASJSON_REFERENCE_VAR.html"
keywords: ["case", "data", "types", "ABENABAP", "ASJSON", "REFERENCE", "VAR"]
---

Like a regular data object, a named reference variable is represented as an object component that has special content:

"bni":\\{ "%ref":"#key" \\}

The content of the object component of a named reference variable is an object with exactly one object component called `%ref`. The content of the object component `%ref` is a character-like value `"#key"`, where `key` is the unique key of an object component in the object `%heap`. The object of an initial reference is empty. The `key` key of the ABAP runtime framework is set in serializations and in deserializations, any key can be used.

Otherwise the same rules apply to serializations and deserializations of named reference variables as to [asXML](ABENASXML_REFERENCE_VARIABLE.html) and the same special cases must be respected.

[Serializing Data References](ABENSERIALIZE_DREF_ABEXA.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_trafos.html abenabap\_asjson.html abenabap\_asjson\_abap\_types.html abenabap\_asxml\_references.html