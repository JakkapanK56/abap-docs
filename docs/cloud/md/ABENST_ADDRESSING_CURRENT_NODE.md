---
title: "ABENST_ADDRESSING_CURRENT_NODE"
description: |
  ABENST_ADDRESSING_CURRENT_NODE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_ADDRESSING_CURRENT_NODE.htm"
abapFile: "ABENST_ADDRESSING_CURRENT_NODE.html"
keywords: ["loop", "while", "if", "data", "internal-table", "ABENST", "ADDRESSING", "CURRENT", "NODE"]
---

In all ST statements in which the name of a node can be specified, the [current node](ABENST_TT_REF.html) can be addressed explicitly with `$ref`. An alias name can be also be defined for `$ref` in [`tt:loop` loops](ABENST_TT_LOOP.html) where internal tables are transformed. If specifying the node is optional, ST statements use the current node by default.

If the current node is undefined, it cannot be addressed using `$ref` and ST statements that work implicitly with the current node cannot be executed.

The following ST program `DEMO_ST_CURRENT_NODE` can be used to serialize a nested ABAP structure:

In this example, subnodes `COL1` and `COL2` are set as the current node in the surrounding elements of the `tt:value` statements with `ROOT` and `STRUC2`, respectively. In the first two elements, the current node is addressed explicitly using `$ref` for demonstration purposes. The current node is also specified using `$ref` in the first two `tt:value` statements, while specification is implicit in the other two `tt:value` statements.

Also see the example for calling a transformation in the [`tt:value`, Structures](ABENST_TT_VALUE_STRUCTURE.html) section.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_addressing.html abenst\_addressing\_nodes.html