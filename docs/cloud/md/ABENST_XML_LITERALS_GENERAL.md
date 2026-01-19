---
title: "ABENST_XML_LITERALS_GENERAL"
description: |
  ABENST_XML_LITERALS_GENERAL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_XML_LITERALS_GENERAL.htm"
abapFile: "ABENST_XML_LITERALS_GENERAL.html"
keywords: ["do", "if", "data", "ABENST", "XML", "LITERALS", "GENERAL"]
---

`<element [attr]\ [tt:ref="node">]\                  [tt:lax=...]\                  [tt:extensible=...]>\    ...  </element>`

Here, `element` is the name of the element and `attr` is a set of optional literal attributes with any name. The optional ST-specific attribute [`tt:ref`](ABENST_TT_REF.html) sets the current node `node` for the context of the literal element.

The optional ST-specific attributes [`tt:lax`](ABENST_TT_LAX.html) and [`tt:extensible`](ABENST_TT_EXTENSIBLE.html) only have an effect during deserialization. `tt:lax` determines whether the element name `element` may differ during deserialization. `tt:extensible` specifies whether the content of the element can be extended by unspecified elements.

**Serializing Literal XML Elements**

In serializations, the element beginning `<element [attr]>` and its literal attributes `attr` are passed to the target XML data, the content of the element is serialized, and then the element ending `</element>` is passed. If there are multiple identically named literal attributes, only the last one is passed.

**Deserializing Literal XML Elements**

In deserializations, the beginning of the element is compared with the current position of the outbound XML data. By default, the source XML data must contain an identically named element with all literal attributes `attr` of the same content. The order of the literal attributes is of no importance. Superfluous literal attributes of the element in the source document are always ignored. If there are multiple identically named literal attributes, only the last one is respected.

After a successful comparison of the element beginning, the element content is deserialized and then the element ending is consumed.

For information about handling namespaces, see [`tt.namespace`, Namespaces](ABENST_TT_NAMESPACE.html).

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_literals.html abenst\_xml\_literals.html