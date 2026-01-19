---
title: "ABENST_ADDRESSING_SUBNODES"
description: |
  ABENST_ADDRESSING_SUBNODES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_ADDRESSING_SUBNODES.htm"
abapFile: "ABENST_ADDRESSING_SUBNODES.html"
keywords: ["do", "if", "data", "ABENST", "ADDRESSING", "SUBNODES"]
---

When addressing subnodes, it is important to distinguish between a defined and undefined [current node](ABENST_TT_REF.html).

If the current node is undefined, the subnodes of the data root of the template can be addressed as follows:

name.node1.node2. ...

Here, `name` is the symbolic name of a [data root](ABENST_TT_ROOT.html) and `node1`, `node2`, ... are the actual names of components of the hierarchy levels 1, 2, ... When the transformation is executed, the ABAP data object bound to the data root must have a structured type with the corresponding components.

If the current node is undefined, the first name of a chain is always interpreted as the name of a data root. In particular, `name` is used for the data root itself.

When the transformation is executed, the ABAP data object bound to the current node or to the data root must have a structured type with the corresponding components.

If the current node is defined, the first name of a chain is always interpreted as the name of a subcomponent of the current node. In particular, `node` does not stand for a data root, but for a direct subcomponent of the current node.

The following ST program `DEMO_ST_ADDRESSING_SUBNODES` can be used to serialize a nested ABAP structure:

For each `tt:value statement`, the current node is set individually to a subnode of the data root. Otherwise the current node is undefined, and the data root `ROOT` can be addressed using its name. Also see the example for calling a transformation in the [`tt:value`, Structures](ABENST_TT_VALUE_STRUCTURE.html) section.

-   The subnodes of the current node can be addressed as follows:
-   `node1.node2. ...`
-   Here, `node1`, `node2`, ... are the actual names of components of the hierarchy levels 1, 2, ... below the current node. If the current node is defined, the first name of a chain is always interpreted as the name of a component of the current node. The chain above therefore has the same meaning as
-   `$ref.node1.node2. ...`
-   where `$ref` is the current node.
-   The subnodes of the data root of the template can be addressed as follows:
-   `.name.node1.node2. ...`
-   Here, `name` is the symbolic name of a data root and `node1`, `node2`, ... are the actual names of components of the hierarchy levels 1, 3.... The period (`.`) bypasses the hiding of the root by the current node.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_addressing.html abenst\_addressing\_nodes.html