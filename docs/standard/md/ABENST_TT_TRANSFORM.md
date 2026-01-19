---
title: "ABENST_TT_TRANSFORM"
description: |
  ABENST_TT_TRANSFORM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_TRANSFORM.htm"
abapFile: "ABENST_TT_TRANSFORM.html"
keywords: ["if", "data", "ABENST", "TRANSFORM"]
---

`<tt:transform [template="tmpl"]>\    ...  </tt:transform>`

The keyword for the root element of an ST program is `tt:transform`. The name of a template `tmpl` can optionally be specified for the `template` attribute. The specified template forms the [main template](ABENST_TT_TEMPLATE_MAIN.html) of the transformation. When the program is executed, this template is evaluated. If no explicit main template is specified, the template for which no name is specified is set as the main template by default.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_programs\_structure.html