---
title: "ABENST_ADDRESSING"
description: |
  ABENST_ADDRESSING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_ADDRESSING.htm"
abapFile: "ABENST_ADDRESSING.html"
keywords: ["do", "while", "if", "method", "data", "ABENST", "ADDRESSING"]
---

Simple transformations are used to serialize ABAP data or deserialize XML documents to ABAP data objects. Accordingly, it must be possible to address the bound ABAP data in the ST programs. Serializations only allow reads on ABAP data, while deserializations allow only writes.

In an ST program, all data bound to ABAP data objects is considered as data nodes, that is, nodes in tree structures, spread from the data roots. To address the ABAP data, either the data roots are accessed or the current node. At any position of an ST program, exactly one node of the tree structure spreading from the data root can be defined as the current node. The data roots or the current node can be accessed directly and, from that position, the subnodes.

No reference variables can currently be serialized and deserialized in ST programs. ABAP reference variables can, however, be bound to data roots. This means that these data roots cannot be specified in ST serialization and deserialization statements. Object reference variables can, however, be used to call instance methods and all reference variables can be passed to appropriate interface parameters of called ABAP methods.

-   [Tree Structure of the Data Nodes](ABENST_TREES.html)
-   [Current Node](ABENST_TT_REF.html)
-   [Addressing Data Nodes](ABENST_ADDRESSING_NODES.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html