---
title: "ABENST_TT_CALL-METHOD_WRITERREADER"
description: |
  ABENST_TT_CALL-METHOD_WRITERREADER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_TT_CALL-METHOD_WRITERREADER.htm"
abapFile: "ABENST_TT_CALL-METHOD_WRITERREADER.html"
keywords: ["if", "method", "class", "data", "ABENST", "CALL", "METHOD", "WRITERREADER"]
---

`<tt:call-method class="class"|var="oref"                  [s-|d-]name="meth"                  ...                  writer="p_writer"                  reader="p_reader">\    ...  </tt:call-method>`

In the [static method](ABENST_TT_CALL-METHOD_STATIC.html) or [instance method](ABENST_TT_CALL-METHOD_INSTANCE.html) called from an ST program, the attributes `writer` and `reader` can be used to access the current XML stream where the serialization or deserialization is currently taking place.

The called method `meth` must have an optional parameter with the reference type `IF_SXML_WRITER` or `IF_SXML_READER`, depending on the direction of transformation. The name of this parameter can be specified after the `writer` or `reader` attributes. In serialization, the `p_writer` parameter is passed a reference to the current writer stream. In deserialization, the parameter of type `p_reader` is passed a reference to the current reader stream. In the method `meth`, these parameters can be used to work with the XML stream.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_abap\_objects.html