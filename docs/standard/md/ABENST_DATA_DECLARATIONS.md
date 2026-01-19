---
title: "ABENST_DATA_DECLARATIONS"
description: |
  ABENST_DATA_DECLARATIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_DATA_DECLARATIONS.htm"
abapFile: "ABENST_DATA_DECLARATIONS.html"
keywords: ["if", "data", "ABENST", "DATA", "DECLARATIONS"]
---

In ST programs, data can be declared using the following statements:

If these statements are specified outside of a template in the context of the transformation, the data declarations apply to the [main template](ABENST_TT_TEMPLATE_MAIN.html).

Within a [subtemplate](ABENST_TT_TEMPLATE_SUB.html), the statements can be used in the element `tt:context` to declare local data of the subtemplate.

-   [`tt:root`](ABENST_TT_ROOT.html) defines data roots for binding ABAP data interfaces.
-   [`tt:parameter`](ABENST_TT_PARAMETER.html) defines parameters as formal parameters.
-   [`tt:variable`](ABENST_TT_VARIABLE.html) defines variables as local data.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_programs\_structure.html