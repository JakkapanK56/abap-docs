---
title: "ABENST_TT_LAX"
description: |
  ABENST_TT_LAX - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_LAX.htm"
abapFile: "ABENST_TT_LAX.html"
keywords: ["if", "data", "ABENST", "LAX"]
---

`... tt:lax="on"|"off"|"deep-on"|"deep-off" ...`

When deserializing literal XML elements, the optional attribute `tt:lax` can be used to control whether the name of an element is respected.

If `tt:lax` is not specified, the setting depends on the surrounding context. By default, a template has the setting `deep-off`.

The following XML fragment is to be assumed:

Due to `tt:lax="on"`, the ST program `DEMO_ST_LAX` below can still deserialize this fragment despite different element names:

-   If `tt:lax` is specified with the value `off`, the inbound XML stream must contain an identically named element with all literal attributes `attr` of the same content.
-   If `tt:lax` is specified with the value `on`, the element in the inbound XML stream can have any name, but the expected attributes must still match.
-   The values `deep-on` and `deep-off` for `tt:lax` are used to set the setting `on` and `off` for all subelements of the current element; however, they can be overwritten locally there.

abc \\ \\n\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_literals.html abenst\_xml\_literals.html