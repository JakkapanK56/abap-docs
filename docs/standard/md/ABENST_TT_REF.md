---
title: "ABENST_TT_REF"
description: |
  ABENST_TT_REF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_REF.htm"
abapFile: "ABENST_TT_REF.html"
keywords: ["loop", "do", "if", "data", "internal-table", "ABENST", "REF"]
---

`... [tt:]ref ...`

Exactly one node of the tree structures of the current template can be set as the current node at any position within a Simple Transformation (statically and when the program is executed). The current node hides the data roots in the sense that a reference `name` does not refer to a root `name`, but to the component `name` of the current node (see [Addressing Subnodes](ABENST_ADDRESSING_SUBNODES.html)). If the current node is defined, it is the implicit operand of many [ST statements](ABENST_STATEMENTS.html), but it can also be addressed explicitly using `$ref`.

This section shows how to set the current node explicitly using `[tt:]ref`. In addition, the statement [`tt:loop`](ABENST_TT_LOOP.html) for transforming internal tables also sets the current node.

At positions where the current node is not set explicitly, it is undefined and cannot be addressed using `$ref`. In these positions, the data roots are not hidden, and they can be addressed using `name`.

**Set the Current Node Using a Statement**

<tt:ref name="node">\\ \\n  ... \\n</tt:ref>

The statement `tt:ref` sets the current node to the node specified in `node`. Any addressable data node can be specified for `node`. If no valid node is specified, the current node is undefined.

The `tt:ref` statement can be nested. It builds a context in which the currently set node is valid. Outside the associated XML element, the current outermost node is still valid. At the top level, the current node is always undefined.

The statement `tt:ref` itself has no operational effect; it only affects the impact of the statements nested within it.

As a result of the [addressing rules](ABENST_ADDRESSING_NODES.html), only a subnode of the current node can be set as the new current node, unless a data root is being set.

**Set the Current Node Using an Attribute**

<tt:... ref="node">\\ \\n  ... \\n</tt:...>

Many [ST statements](ABENST_STATEMENTS.html) make it possible to specify the current node as the content of the attribute `ref`. The same rules apply to `node` as when setting using the statement `tt:ref`. If no attribute `ref` is specified, the statement applies to the current node of the context. The currently set node is valid only within the context of the ST statement.

**Set the Current Node in Literal XML Elements**

<... tt:ref="node">\\ \\n  ... \\n</...>

In a [literal XML element](ABENST_XML_LITERALS.html), `tt:ref` is a special attribute in the namespace of the ST statement and sets the current node there. The same rules apply to `node` as for setting with the `tt:ref` statement. The currently set node is valid only within the context of the XML element.

The following ST program `DEMO_ST_REF` can be used to serialize a nested ABAP structure:

The current node is changed as follows:

See also the example for calling the transformation in the [`tt:value`, Structures](ABENST_TT_VALUE_STRUCTURE.html) section.

-   At the beginning of the (nameless) main template, the current node is undefined. The data root `ROOT` can be addressed directly using *ROOT*.
-   The current node is set to the data root for the element `X`. Within the `X` element, only *.ROOT* could be used for addressing the data root directly.
-   In the context of the two subsequent `tt:value` statements, the current node is set to the subnodes `COL1` and `COL2` of `ROOT`. The statements serialize or deserialize the ABAP data object that is bound to the current node.
-   The current node for literal element `X3`, which is nested in `X`, is set to another subnode `STRUC2` of `ROOT`.
-   In the context of the two subsequent `tt:value` statements, the current node is set to the subnodes `COL1` and `COL2` of `STRUC2`. Each time an element is exited, the current node is reset to that of the surrounding element.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_addressing.html