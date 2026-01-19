---
title: "ABENST_LENGTH"
description: |
  ABENST_LENGTH - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_LENGTH.htm"
abapFile: "ABENST_LENGTH.html"
keywords: ["if", "try", "catch", "data", "types", "ABENST", "LENGTH"]
---

`... length="len" ...`\\ 
`... minLength="len" ...`\\ 
`... maxLength="len" ...`

The attributes `length`, `minLength`, and `maxLength` can be used to specify a length `len` for [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html), [`tt:write`](ABENST_TT_WRITE.html), and [`tt:read`](ABENST_TT_READ.html). This restricts the length of the data to be passed in serializations and deserializations.

Positive integers can be specified for `len`. Lengths can be specified for data nodes or variables with the ABAP types `c`, `x`, `string`, and `xstring`. Any other data types ignore any length specifications.

Specifying the `length` attribute always affects `tt:value` and `tt:write` as if `minLength` and `maxLength` were listed at the same time with the value specified for `len`.

**Serialization**

The `minLength` or `length` attribute defines the resulting XML value as representing at least the number of characters or bytes defined in `len`. If a passed value contains fewer characters, or bytes, it is filled on the right with blanks or *0x00* until it is of the specified length and an XML value is created. The `maxLength` or `length` attribute defines the maximum number of characters or bytes that can be passed. If the XML value to be serialized contains more characters or bytes than specified by `len`, the exception `CX_ST_CONSTRAINT_ERROR` is raised, unless only trailing blanks or zero bytes in a serialization of a data object with type `c` or `x` are affected.

**Deserialization**

The `minLength` attribute is ignored by deserialization. The `maxLength` or `length` attribute defines the maximum number of characters or bytes expected in the XML value. If the XML value to be deserialized contains more characters or bytes than specified by `len`, the exception `CX_ST_CONSTRAINT_ERROR` is raised, unless only trailing blanks or zero bytes in a deserialization to a data object with type `c` or `x` are affected.

Exception `CX_ST_CONSTRAINT_ERROR` cannot be caught directly during the call of `CALL TRANSFORMATION`, instead it is wrapped in `CX_ST_SERIALIZATION_ERROR` or `CX_ST_DESERIALIZATION_ERROR`.

The following transformation `DEMO_ST_SPECIFIED_LENGTH` performs serializations and deserializations with differing lengths:

The following ABAP program can call the transformation:

The result of the transformation is:

Since more characters are passed by the deserialization than expected, the exception `CX_ST_CONSTRAINT_ERROR` is raised, which is wrapped in the exception `CX_ST_DESERIALIZATION_ERROR`.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n DATA: text TYPE string VALUE \`1234\`, \\n xml\_xstring TYPE string, \\n exc\_trafo TYPE REF TO cx\_transformation\_error, \\n exc\_prev TYPE REF TO cx\_root. \\n\\ \\nCALL TRANSFORMATION demo\_st\_specified\_length \\n SOURCE root = text \\n RESULT XML xml\_xstring. \\n\\ \\ncl\_abap\_browser=>show\_xml( xml\_string = xml\_xstring ). \\n\\ \\nTRY. \\n CALL TRANSFORMATION demo\_st\_specified\_length \\n SOURCE XML xml\_xstring \\n RESULT root = text. \\n\\ \\n CATCH cx\_st\_deserialization\_error INTO exc\_trafo. \\n ... \\n IF exc\_trafo->previous IS NOT INITIAL. \\n exc\_prev = exc\_trafo->previous. \\n ... \\n ENDIF. \\nENDTRY. 1234 abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_abap\_values.html abenst\_tt\_value\_elementary.html