---
title: "ABENST_TT_VALUE_STRUCTURE"
description: |
  ABENST_TT_VALUE_STRUCTURE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_TT_VALUE_STRUCTURE.htm"
abapFile: "ABENST_TT_VALUE_STRUCTURE.html"
keywords: ["data", "ABENST", "VALUE", "STRUCTURE"]
---

`<tt:value [ref="node"]\ [map="..."]\                         [length|minLength|maxLength="len"]\                         [xsd-type...] />`

The serialization and deserialization of structures results directly from the [addressing rules](ABENST_ADDRESSING.html), because the structures can be mapped directly to the [tree structures](ABENST_TREES.html) that start from the data roots. When the current node is bound to an elementary component of an ABAP structure, the structure can be processed with `tt:value` just like an [elementary data object](ABENST_TT_VALUE_ELEMENTARY.html).

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_abap\_values.html