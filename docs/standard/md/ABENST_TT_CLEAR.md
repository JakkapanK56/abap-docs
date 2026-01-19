---
title: "ABENST_TT_CLEAR"
description: |
  ABENST_TT_CLEAR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_CLEAR.htm"
abapFile: "ABENST_TT_CLEAR.html"
keywords: ["if", "data", "ABENST", "CLEAR"]
---

`<tt:clear [ref="node"|var="variable"] />`

The statement `tt:clear` can be used to initialize a [data root](ABENST_TT_ROOT.html), a [variable](ABENST_TT_VARIABLE.html), or a [parameter](ABENST_TT_PARAMETER.html).

`ref` or `var` are used to specify the field that is to be initialized. If no field is specified, the current node is used implicitly. The following fields are possible:

**Serialization**

In serializations, only variables (or parameters) are initialized. If a node is specified with `ref` or if the current node is specified implicitly, `tt:clear` is ignored in serializations.

**Deserialization**

In deserializations, the specified nodes or variables (or parameters) are initialized.

The transformation `DEMO_ST_CLEAR` below demonstrates an initialization:

In deserializations, the initial value is assigned to the ABAP data object bound to the data root `ROOT`.

-   A node `node` specified in accordance with the [addressing rules](ABENST_ADDRESSING.html).
-   A [variable](ABENST_TT_VARIABLE.html) or a [parameter](ABENST_TT_PARAMETER.html)\\ `variable`.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_assignments.html