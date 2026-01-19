---
title: "ABENST_XSD_TYPE"
description: |
  ABENST_XSD_TYPE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_XSD_TYPE.htm"
abapFile: "ABENST_XSD_TYPE.html"
keywords: ["if", "case", "try", "catch", "class", "data", "types", "ABENST", "XSD", "TYPE"]
---

`... xsd-type="type"     [xsd-maxInclusive="max"]\     [xsd-maxExclusive ="max"]\     [xsd-minInclusive="min"]\     [xsd-minExclusive ="min"]\     [xsd-totalDigits="dgts"]\     [xsd-fractionDigits="dgts"] ...`

These attributes can be used with [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html), [`tt:write`](ABENST_TT_WRITE.html), and [`tt:read`](ABENST_TT_READ.html) to validate the value.

The attribute `xsd-type` can be used to specify an XML schema data type `type`. The serialized or deserialized value must be in the value range of this type. If not, an exception of the class `CX_ST_VALIDATION_ERROR` is raised, which is not caught directly but by using `CX_ST_SERIALIZATION_ERROR`, `CX_ST_DESERIALIZATION_ERROR`, and its superclasses. The following subtypes of `xsd:decimal` can be specified for `type`: `xsd:byte, xsd:decimal, xsd:int, xsd:integer, xsd:long, xsd:negativeInteger, xsd:nonNegativeInteger, xsd:nonPosistiveInteger, xsd:positiveInteger, xsd:short, xsd:unsignedByte, xsd:unsignedInt, xsd:unsignedLong`, and `xsd:unsignedShort`.

Together with the `xsd-type` attribute, the following restrictions (constraining facets) allowed by the XML schema can be specified as additional attributes:

After the transformation from ABAP, serializations perform the validation to XML. Before the transformation from XML, deserializations perform the validation to ABAP. In both cases, the data type of the bound ABAP data object is ignored.

Serialization of ABAP data with validation in the simple transformation `DEMO_ST_XSD_TYPE`.

The transformation only accepts numbers between 30000 and 32767. The following ABAP program calls the transformation and catches the validation exceptions.

-   `xsd-maxInclusive` and `xsd-maxExclusive`: The value must be less than or equal to or less than `max`. `max` must be in the value range of the XML schema data type and cannot be less than a simultaneous lower limit `min`.
-   `xsd-minInclusive` and `xsd-minExclusive`: The value must be greater than or equal to or greater than `min`. `min` must be in the value range of the XML schema data type and cannot be greater than a simultaneous upper limit `max`.
-   `xsd-totalDigits` and `fractionDigits`: The value can have a maximum of `dgts` digits or decimal places. `dgts` must fit the other restrictions.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n DATA int TYPE i. \\nDATA xml\_string TYPE string. \\nTRY. \\n CALL TRANSFORMATION demo\_st\_xsd\_type \\n SOURCE num = int \\n RESULT XML xml\_string. \\n cl\_demo\_output=>display( 'OK' ). \\n CATCH cx\_st\_error. \\n cl\_demo\_output=>display( 'Not OK' ). \\nENDTRY. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_abap\_values.html abenst\_tt\_value\_elementary.html