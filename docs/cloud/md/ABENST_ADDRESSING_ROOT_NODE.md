---
title: "ABENST_ADDRESSING_ROOT_NODE"
description: |
  ABENST_ADDRESSING_ROOT_NODE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_ADDRESSING_ROOT_NODE.htm"
abapFile: "ABENST_ADDRESSING_ROOT_NODE.html"
keywords: ["if", "case", "data", "ABENST", "ADDRESSING", "ROOT", "NODE"]
---

The [data roots](ABENST_TT_ROOT.html) declared at the highest hierarchy level of an ST program are the root nodes of the [tree structures](ABENST_TREES.html) of the data nodes of the [main template](ABENST_TT_TEMPLATE_MAIN.html). Addressing a data root during the execution of an ST program means referring to the bound ABAP data object.

If a data root is not hidden by the definition of a [current node](ABENST_TT_REF.html), it can be addressed directly using

root

where `root` is the symbolic name declared after [`tt:root`](ABENST_TT_ROOT.html).

A data root `root` can be addressed at any position of the main template using

.root

where the period (`.`) bypasses cases where the root is hidden by a current node.

In [subtemplates](ABENST_TT_TEMPLATE_SUB.html), the rules for the root nodes of their tree structures apply.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_addressing.html abenst\_addressing\_nodes.html