---
title: "ABENABAP_ASXML_REFERENCES"
description: |
  ABENABAP_ASXML_REFERENCES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_ASXML_REFERENCES.htm"
abapFile: "ABENABAP_ASXML_REFERENCES.html"
keywords: ["do", "if", "class", "data", "types", "ABENABAP", "ASXML", "REFERENCES"]
---

As in [asXML](ABENABAP_XSLT_ASXML_REFERENCES.html), a reference mechanism is used for the asJSON representation of anonymous data objects and class instances (objects), which are addressed using references in reference variables. Since [JSON](ABENJSON_OVIEW.html) does not suggest any syntax for references, an SAP-specific reference mechanism based on asXML is used.

In addition to the value, the dynamic type of the reference variables is specified in the object components of `%heap` when serialization takes place to ensure unique deserialization.

For information about the differences between serializing to `%heap` and embedded storage, see the executable example [Serializations to Heap or Embedded](ABENSERIALIZE_REF_HEAP_EMBED_ABEXA.html).

-   Named reference variables are represented as object components, whose content is by default a key for the referenced objects.
-   The referenced objects are stored as object components in the object [`%heap`](ABENABAP_ASJSON_GENERAL.html). This name corresponds to the key.

-   [asJSON - Named Reference Variables](ABENABAP_ASJSON_REFERENCE_VAR.html)
-   [asJSON - Anonymous Data Objects](ABENABAP_ASJSON_ANONYM_DO.html)
-   [asJSON - Instances of Classes](ABENABAP_ASJSON_CLASS_INSTANCES.html)

-   The asJSON representation of reference variables and referenced objects is only relevant for [XSL](ABENID_TRAFO_GLOSRY.html) transformations and the identity transformation `ID`. Simple Transformations cannot currently be used to transform reference variables.
-   For data references, the value *embedded* can be specified for the transformation option [`data_refs`](ABAPCALL_TRANSFORMATION_OPTIONS.html) to define embedded storage in serializations instead of storage in the `%heap` object component.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_trafos.html abenabap\_asjson.html abenabap\_asjson\_abap\_types.html