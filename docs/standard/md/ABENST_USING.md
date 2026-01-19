---
title: "ABENST_USING"
description: |
  ABENST_USING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_USING.htm"
abapFile: "ABENST_USING.html"
keywords: ["if", "case", "data", "ABENST", "USING"]
---

`... using="..." ...`

The following preconditions can be specified for the content of the `using` attribute of a [`tt:cond`](ABENST_TT_COND.html) element:

For each [built-in ABAP type](ABENBUILTIN_ABAP_TYPE_GLOSRY.html) there is a precondition `type-...` in which the data type is specified in uppercase letters (see examples). The operand `node` can be a data node that must be specified in a [special form](ABENST_ADDRESSING_NODES_IN_COND.html).

A precondition can be specified as a comma-separated list of multiple of the above preconditions. A precondition like this is met if all preconditions in the list are met. Each data node may appear only once in the list.

The element *X* that is defined in `DEMO_ST_USING1` is respected in serializations only if the ABAP data object bound to `ROOT` is of type `c`.

Instead of *type-C(ref('ROOT'))*, *type-C(ROOT)* is of course also possible here.

The element *X* that is defined in `DEMO_ST_USING2` is not ignored in serializations only if the ABAP data object bound to `ROOT1` is of type `int8` and the ABAP data object bound to `ROOT2` is of type `d`.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n ... \\n \\ \\n \\ \\n \\ \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n ... \\n \\ \\n \\ \\n \\ \\n **Precondition** **Meaning** `exist(node)` Met if an ABAP data object is bound to the node. `type-...(node)` Met if an ABAP data object of type `...` is bound to the node. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_flow\_control.html abenst\_tt\_cond.html