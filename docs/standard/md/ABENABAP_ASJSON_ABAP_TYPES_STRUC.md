---
title: "ABENABAP_ASJSON_ABAP_TYPES_STRUC"
description: |
  ABENABAP_ASJSON_ABAP_TYPES_STRUC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_ASJSON_ABAP_TYPES_STRUC.htm"
abapFile: "ABENABAP_ASJSON_ABAP_TYPES_STRUC.html"
keywords: ["do", "case", "data", "types", "ABENABAP", "ASJSON", "ABAP", "TYPES", "STRUC"]
---

In asJSON, an ABAP structure is represented as a [JSON object](ABENJSON_OVIEW.html) whose object components represent the structure components. The content of each object component corresponds to the canonical representation of the component value. The name of each object component is the name of the corresponding structure component. In serializations, the object components are represented in the order of the components in the structure. In deserializations of the asJSON representation of a structure, the order of the object components is not important and superfluous object components are ignored. Components of the structure for which there are no object components remain unchanged.

A structure that does not have an associated JSON object component in deserializations retains its previous value. A structure to which an empty object is assigned also remains unchanged, since this has the same effect on the structure components as a missing object component. To initialize the structure in these cases, the transformation option [`clear`](ABAPCALL_TRANSFORMATION_OPTIONS.html) can be used with the value *all*.

[asJSON for Structures](ABENABAP_JSON_ASJSON_STRUC_ABEXA.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_trafos.html abenabap\_asjson.html abenabap\_asjson\_abap\_types.html