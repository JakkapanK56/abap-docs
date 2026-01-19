---
title: "ABENST_TREES"
description: |
  ABENST_TREES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_TREES.htm"
abapFile: "ABENST_TREES.html"
keywords: ["data", "ABENST", "TREES"]
---

The starting points of any addressing of ABAP data in an ST program are the data roots of the [main template](ABENST_TT_ROOT.html) declared with `[tt:root](ABENST_TT_ROOT.html)` at transformation level. These data roots are the interfaces from the ST program to the calling ABAP program. When a Simple Transformation is called, any ABAP data object (reference variables or data objects that have reference variables as components are currently excluded) can be bound to any data root.

Each data root has its own tree structure, which can be used to address the components of the bound data object. Addressing subnodes of a data root is equivalent to referring to the components of the data object bound to the data root. The tree structures of the individual data roots are independent of one another.

The addressing of data nodes in the individual tree structures always starts at the data roots.

Each template uses its own tree structures. Only the main template uses the data roots declared at transformation level that are bound directly to the ABAP data objects during transformation. When [subtemplates](ABENST_TT_TEMPLATE_SUB.html) are called, local data roots are bound to current data nodes of the caller.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_addressing.html