---
title: "ABENST_DATA"
description: |
  ABENST_DATA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_DATA.htm"
abapFile: "ABENST_DATA.html"
keywords: ["if", "data", "ABENST", "DATA"]
---

`... data="..." ...`

The following assertions can be specified for the content of the `data` attribute of a [`tt:cond`](ABENST_TT_COND.html) element:

The operands of the assertions can be data nodes, variables, or values.

An assertion can be specified as a comma-separated list of multiple of the above assertions. An assertion of this type is met if all assertions in the list are met. Each data node may appear only once in the list.

The element *X* defined in `DEMO_ST_DATA1` is only considered in serializations if the ABAP data object bound to `ROOT` is 11.

The element *X* defined in `DEMO_ST_DATA2` is only considered in serializations if the value of the ABAP data object bound to `ROOT1` is initial and the value of the ABAP data object bound to `ROOT2` is 22.

-   Data nodes `node` are specified in a [special form](ABENST_ADDRESSING_NODES_IN_COND.html).
-   Variables are specified in the form `var(variable)`, where `variable` is a [variable](ABENST_TT_VARIABLE.html) or a [parameter](ABENST_TT_PARAMETER.html).
-   Values `value` are ABAP values in the associated [representation](ABENST_ABAP_REPRESENTATION.html).

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n ... \\n \\ \\n \\ \\n \\ \\n **Assertion** **Meaning** `initial(node)` Met if the bound ABAP data object is initial. `initial(var(variable))` Met if the variable is initial. `dnode|var(variable) = value`, `value = dnode|var(variable)` Met if the value of the connected ABAP data object or the variables corresponds to the value specified in `value`. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_flow\_control.html abenst\_tt\_cond.html