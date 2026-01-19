---
title: "ABENST_TT_READ"
description: |
  ABENST_TT_READ - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_TT_READ.htm"
abapFile: "ABENST_TT_READ.html"
keywords: ["if", "data", "types", "ABENST", "READ"]
---

`<tt:read var="variable" [type="type" [length="len"]\                                       [decimals="dec"]]\                          [map="..."]\                          [minLength|maxLength="len"]\                          [xsd-type...] />`

The `tt:read` statement makes it possible to read the value of the inbound XML stream into a [variable](ABENST_TT_VARIABLE.html) or a [parameter](ABENST_TT_PARAMETER.html):

The attribute value `variable` is used to specify the variable or a parameter into which the value is read. The same applies to the attributes `map`, `minLength`, `maxLength`, and `xsd-type...` as to the statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html) (however `tt:read` always ignores `minLength`).

The other attributes are used to specify the expected type. In the `tt:read` statement, only elementary ABAP types can be specified, which can be partly generic. The syntax of this is the same as for the [`tt:type`](ABENST_TT_TYPE.html) statement. The value read must match the specified type and the value must be in the corresponding ABAP value range. Otherwise an exception is raised.

**Serialization**

The statement `tt:read` is ignored in serializations.

**Deserialization**

If no type conflict occurs, the variable or parameter is set to the value of the current position in the input stream, optionally according to the mapping list behind `map`. Depending on the type of the variable or parameter, a mapping takes place according to the [asXML format](ABENABAP_XSLT_ASXML.html).

Deserialization of a value into a variable is shown in the following transformation `DEMO_ST_READ`.

If the read XML fragment is `<X>333</X>`, the data object bound to the data root `ROOT` has the value 333 after deserialization due to the assignment using [`tt:assign`](ABENST_TT_ASSIGN.html).

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_variable\_transformations.html