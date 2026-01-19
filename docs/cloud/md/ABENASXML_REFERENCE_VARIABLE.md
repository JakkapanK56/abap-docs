---
title: "ABENASXML_REFERENCE_VARIABLE"
description: |
  ABENASXML_REFERENCE_VARIABLE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENASXML_REFERENCE_VARIABLE.htm"
abapFile: "ABENASXML_REFERENCE_VARIABLE.html"
keywords: ["do", "if", "case", "class", "data", "types", "ABENASXML", "REFERENCE", "VARIABLE"]
---

A named reference variable is represented as the only attribute of the associated subelement of `values`, where the subelement has no further content.

<bni href="#key"/>

An attribute for a reference variable has the name `href` and the content *#key*, where `key` is the unique key of an object in the element `heap`. An element of an initial reference does not have an attribute `href` nor any other content. The `key` key is set by the ABAP runtime framework in serializations and in deserializations, any key can be used.

The following special cases when serializing named reference variables should be noted:

In deserializations to a reference variable, the reference variable must be the same as or more general than the dynamic type of the object that is stored in the XML document. The associated ABAP data objects or instances of a class are created in deserializations.

Data types without names or with purely technical names are [bound data types](ABENBOUND_DATA_TYPE_GLOSRY.html) or data types constructed using [RTTS](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html).

[Serializing Data References](ABENSERIALIZE_DREF_ABEXA.html)

-   Data reference variables that point to data objects whose data type only has one technical name raise the exception `CX_REFERENCE_NOT_SERIALIZABLE` (handled using `CX_XSLT_SERIALIZATION_ERROR`). This can be avoided by specifying transformation option [`technical_types`](ABAPCALL_TRANSFORMATION_OPTIONS.html).
-   Data reference variables that point to data objects that were not created using `CREATE DATA` (stack references) are handled like initial reference variables in serializations. This can be overridden by specifying the transformation option [`data_refs`](ABAPCALL_TRANSFORMATION_OPTIONS.html).

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html abenabap\_xslt\_asxml\_named.html abenabap\_xslt\_asxml\_references.html