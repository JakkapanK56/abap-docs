---
title: "ABENST_TT_WRITE"
description: |
  ABENST_TT_WRITE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_WRITE.htm"
abapFile: "ABENST_TT_WRITE.html"
keywords: ["insert", "if", "data", "ABENST", "WRITE"]
---

`<tt:write var="variable" [map="..."]\                           [length|minLength="len"]\                           [xsd-type...] />`

The `tt:write` statement makes it possible to write the value of a [variable](ABENST_TT_VARIABLE.html) or a [parameter](ABENST_TT_PARAMETER.html) to the target XML data.

The attribute value `variable` is used to specify the variable to be written or a parameter. The same applies to the attributes `map`, `length`, `minLength`, and `xsd-type...` as to the statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html). The variable must represent an elementary value.

**Serialization**

The value of the variable or the parameter is inserted into the XML data at the position of the statement, optionally according to the mapping list behind `map`. Depending on the type of the variable or parameter, mapping takes place according to the [asXML format](ABENABAP_XSLT_ASXML.html).

**Deserialization**

The `tt:write` statement is ignored in deserializations.

The following example `DEMO_ST_WRITE` serializes the start value of a variable.

The result of the serialization is:

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n 333 abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_variable\_transformations.html