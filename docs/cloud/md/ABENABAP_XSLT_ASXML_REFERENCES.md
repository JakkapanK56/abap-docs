---
title: "ABENABAP_XSLT_ASXML_REFERENCES"
description: |
  ABENABAP_XSLT_ASXML_REFERENCES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_XSLT_ASXML_REFERENCES.htm"
abapFile: "ABENABAP_XSLT_ASXML_REFERENCES.html"
keywords: ["if", "class", "data", "ABENABAP", "XSLT", "ASXML", "REFERENCES"]
---

Anonymous data objects and instances of classes (objects) are addressed in ABAP using references in reference variables only. The associated asXML format consists of

The reference between the reference elements and the object elements is established using an XML reference mechanism, where a referenced object in the same XML data is identified by a key. The dynamic type of the reference variables for the object elements under `heap` is specified when serialization takes place, so that deserialization is unique.

[asXML, Mapping of Objects](ABENASXML_OBJECT_ABEXA.html)

-   subelements of [`values`](ABENABAP_XSLT_ASXML_GENERAL.html) for named reference variables and
-   by default subelements of [`heap`](ABENABAP_XSLT_ASXML_GENERAL.html) for the referenced objects.

-   [Named Reference Variables](ABENASXML_REFERENCE_VARIABLE.html)
-   [Anonymous Data  Objects](ABENASXML_ANONYMOUS_DATA_OBJECT.html)
-   [Class Instances](ABENASXML_CLASS_INSTANCES.html)

-   The asXML representation of reference variables and referenced objects is only of relevance for [XSL](ABENID_TRAFO_GLOSRY.html) transformations and the identity transformation `ID`. You cannot currently use Simple Transformations to transform reference variables.
-   For data references, the value *embedded* can be specified for the transformation option [`data_refs`](ABAPCALL_TRANSFORMATION_OPTIONS.html) to define an embedded repository in serializations instead of the repository in the element `heap`.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html abenabap\_xslt\_asxml\_named.html