---
title: "ABENST_TT_VALUE_ELEMENTARY"
description: |
  ABENST_TT_VALUE_ELEMENTARY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_TT_VALUE_ELEMENTARY.htm"
abapFile: "ABENST_TT_VALUE_ELEMENTARY.html"
keywords: ["insert", "do", "if", "data", "types", "ABENST", "VALUE", "ELEMENTARY"]
---

`<tt:value [ref="node"]\ [map="..."]\                         [length|minLength|maxLength="len"]\                         [xsd-type...]\                         [option="...,..."] />`

This form of the ST statement `tt:value` serializes and deserializes elementary data objects.

The optional attribute `ref` can be used to define the [current node](ABENST_TT_REF.html) for the statement. If `ref` is not specified, the current node of the surrounding element is used.

Elementary ABAP values are mapped to XML values and vice versa in accordance with the [asXML rules for elementary types](ABENABAP_XSLT_ASXML_ELEMENTARY.html). A special [mapping](ABENABAP_XSLT_ASXML_SCHEMA.html) is defined for data objects whose elementary data type refers to special domains in the ABAP Dictionary.

**Serialization**

If [`map`](ABENST_MAP.html) is not specified, the value of the elementary ABAP data object that is bound to the current node is inserted into the XML data in place of the statement in asXML format or in the format specified in [`option`](ABENST_OPTION.html) in serializations.

**Deserialization**

During deserialization, the current value of the XML inbound stream is passed to the ABAP data object. The end of the XML value is determined either by the end of the text node (for example, at the element end) or by the beginning of a literal text following directly in the ST program. The XML value must match the asXML representation of the ABAP data type or a format specified in [`option`](ABENST_OPTION.html) and be in its value range.

[Simple Transformation, `tt:value`](ABENST_VALUE_ABEXA.html)

-   [`map`](ABENST_MAP.html) can be used to specify a mapping list that maps multiple values to a single value.
-   [`length`](ABENST_LENGTH.html), [`minLength`](ABENST_LENGTH.html), or [`maxLength`](ABENST_LENGTH.html) can be used to specify a length.
-   The value can be validated by specifying [`xsd-type...`](ABENST_XSD_TYPE.html).
-   [`option="...,..."`](ABENST_OPTION.html) can be specified to define special formats for certain data types, so that the formats override the associated mapping rule.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_abap\_values.html