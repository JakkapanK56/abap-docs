---
title: "ABENST_TT_CALL"
description: |
  ABENST_TT_CALL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_TT_CALL.htm"
abapFile: "ABENST_TT_CALL.html"
keywords: ["loop", "if", "case", "data", "internal-table", "ABENST", "CALL"]
---

`<tt:call transformation="trafo">\    [<tt:with-root name="root1" [ref="node1"] />\     <tt:with-root name="root2" [ref="node2"] />\     ...]\    [<tt:with-parameter name="para1"                        [ref="node1"|val="val1"|var="var1"] />\     <tt:with-parameter name="para2"                        [ref="node2"|val="val2"|var="var2"] />\     ...]\  </tt:call>`

In an ST program, the statement `tt:call` can be used to call a different ST program `trafo`, as follows: The ST program `trafo` must exist in the repository. `trafo` is not case-sensitive.

The ST statement `tt:with-root` binds the [`data roots`](ABENST_TT_ROOT.html)\\ `root1`, `root2`, ... of the main template of the called transformation to the nodes `node1`, `node2`, ... of the current transformation, or passes the ABAP data objects that are currently bound to the specified nodes to these data roots. If `ref` is not specified, the current node of the calling transaction is used.

If formal parameters are declared with [`tt:parameter`](ABENST_TT_PARAMETER.html) in the called ST program, these can be linked to the actual parameters with the ST statement `tt:with-parameter`. As actual parameters, `ref` can be used to specify data roots, `var` can be used to specify variables, and [`val`](ABENST_ABAP_REPRESENTATION.html) can be used to specify values. Depending on the type of formal parameter, the values of the specified actual parameters are either passed in the call or used when the called ST program ends.

In the ST program `DEMO_ST_CALL1` below, another ST program (here: `DEMO_ST_APPLY1`) is called in a [`tt:loop` loop](ABENST_TT_LOOP.html).

If the called ST program is implemented as shown in `DEMO_ST_CALL2` below, the transformation has the same function as the [example](ABENST_TT_LOOP.html) of transforming internal tables.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_reuse.html