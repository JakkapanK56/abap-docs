---
title: "ABENST_TT_ATTRIBUTE"
description: |
  ABENST_TT_ATTRIBUTE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_TT_ATTRIBUTE.htm"
abapFile: "ABENST_TT_ATTRIBUTE.html"
keywords: ["do", "if", "case", "data", "ABENST", "ATTRIBUTE"]
---

`<tt:attribute name="attr" [ref="node"]>\    ...  </tt:attribute>`

Non-literal attributes of ST programs are defined using the `tt:attribute` statement. A non-literal attribute is assigned to an attribute of an XML element of the XML data. In serializations, the content of the non-literal attribute sets the attribute value in the XML data. In deserializations, the attribute value in the XML data is read and processed.

This statement can be specified one or more times within a literal XML element before its subelements. Each statement defines a non-literal attribute of the current XML element with the name `attr` specified in `name`. The optional `ref` attribute sets the [current node](ABENST_TT_REF.html)\\ `node` for the context of the non-literal attribute `attr`.

During serialization, the attribute name `attr` is written together with `="` or `='` into the definition of the current XML element. After that, the content of `tt:attribute` is serialized and the result is written after `attr="` or `attr='`. The result of the serialization must not be structured, which means that it must not contain subelements. Finally, the attribute is completed with `"` or `'`.

In valid XML data, the attribute names of an XML element must be unique. For performance reasons, this is not checked in serializations of non-literal attributes. Instead, it must be done by the application developers themselves.

In deserializations, the name of the attribute is compared to the attributes of the current XML element in the source XML data. The order of the attributes is not relevant. The deserialization fails if the attribute does not exist in the inbound stream. After that, the value of the attribute is deserialized according to the content of `tt:attribute` and the closing character is compared. The deserialization fails if not the entire content of the attribute is deserialized. Surplus attributes of the inbound stream are ignored.

This special form of non-literal attributes combines the `tt:value` statement with the general syntax:

`<tt:attribute name="attr" value-ref="node" [map=...] />`

This special form is a short form of:

`<tt:attribute name="attr">\ <tt:value ref="node" [map=...] />\ </tt:attribute>`

This allows the simple formulation of the frequent use case of expressing an elementary value as the content of an attribute.

In the ST program `DEMO_ST_ATTRIBUTE1` below, the values of the data roots `ROOT1` and `ROOT2` are serialized as values of the attributes `attr1` and `attr2` of element *X* or are deserialized from them.

If the values *Text1* and *Text2* are passed to `ROOT1` and `ROOT2`, the result of a serialization is:

To deserialize the above result again, the ST program `DEMO_ST_ATTRIBUTE2` below is used, even though the sequence of the attributes is different.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n ...\\ \\n \\ \\n \\ \\n \\ \\n ...\\ \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n ...\\ \\n \\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html