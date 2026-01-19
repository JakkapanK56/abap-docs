---
title: "ABENST_TT_EMPTY"
description: |
  ABENST_TT_EMPTY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_TT_EMPTY.htm"
abapFile: "ABENST_TT_EMPTY.html"
keywords: ["data", "ABENST", "EMPTY"]
---

`<tt:empty />`

In [conditioned transformations](ABENST_TT_COND.html), it is possible to express empty template content explicitly using `tt:empty`: The element is allowed only within an element [`tt:[s-|d-]cond`](ABENST_TT_COND.html) and must be the only element there. It is ignored (has no content) in serializations. In deserializations, it is possible to use `<tt:empty />` to express an empty [pattern](ABENST_PATTERN.html).

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_flow\_control.html abenst\_tt\_cond.html