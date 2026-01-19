---
title: "ABENST_TT_TEMPLATE_MAIN"
description: |
  ABENST_TT_TEMPLATE_MAIN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_TEMPLATE_MAIN.htm"
abapFile: "ABENST_TT_TEMPLATE_MAIN.html"
keywords: ["if", "case", "data", "ABENST", "TEMPLATE", "MAIN"]
---

`<tt:template [name="tmpl"]>\    ...  </tt:template>`

The statement `tt:template` defines a template. An ST program must contain at least one definition of a template: Each template of the transformation must be uniquely addressable. To achieve this, each template can be given a unique name, `tmpl`, using the `name` attribute and exactly one template without a name can be specified. The latter is implicitly the main template of the transformation if no template is specified in the root element, [`tt:transform`](ABENST_TT_TRANSFORM.html). Template names are not case-sensitive.

The content of the main template (which can call subtemplates) represents the structure of the XML data to which the ABAP data is serialized or from which the data is deserialized.

The content of a template can consist of literal XML elements and ST statements.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_programs\_structure.html