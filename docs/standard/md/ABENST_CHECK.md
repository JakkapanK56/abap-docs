---
title: "ABENST_CHECK"
description: |
  ABENST_CHECK - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_CHECK.htm"
abapFile: "ABENST_CHECK.html"
keywords: ["do", "if", "data", "ABENST", "CHECK"]
---

`... [s-|d-]check ="..." ...`

The following conditions can be specified for the content of the `[s-|d-]check` attribute of a [`tt:cond`](ABENST_TT_COND.html) or [`tt:cond-var`](ABENST_TT_COND-VAR.html) element:

**State Queries**

The operands of the conditions can be data nodes, variables, or values.

Data nodes cannot be specified as operands if `check` is specified as an attribute of [`tt:cond-var`](ABENST_TT_COND-VAR.html).

**Comparisons**

Comparisons are specified in the form:

`node|var(variable)|value operator node|var(variable)|value`

The following operators `operator` are possible:

In XML, the character `<` must always be represented by `&lt;`. The character `>`, on the other hand, can be used directly or represented by `&gt;`.

Conditions `cond` can be negated using `not` and can be combined using `and` or `or`, where `and` creates a stronger link than `or`. The result of such an operation is another condition.

Conditions can be enclosed in parentheses ( ) to change the priority.

The element *X* that is defined in `DEMO_ST_CHECK1` is respected in serializations only if the ABAP data object bound to `ROOT` is not initial.

The element *X* that is defined in `DEMO_ST_CHECK2` is respected in serializations only if the ABAP data object bound to `ROOT1` is less than or equal to the value of the ABAP data object bound to `ROOT2`. It should be noted that the data root `.ROOT2` cannot be specified directly in the condition and that `ref('.ROOT2')` must be used instead.

The element *X* defined in `DEMO_ST_CHECK3` is only considered in serializations if the ABAP data object bound to `ROOT1` is between the values of the ABAP data objects bound to `ROOT2` and `ROOT3`. The data roots `ROOT2` and `ROOT3` cannot be specified directly in the condition and `ref('.ROOT2')` and `ref('.ROOT3')` must be used instead.

-   Data nodes `node` are specified in a [special form](ABENST_ADDRESSING_NODES_IN_COND.html).
-   Variables are specified in the form `var(variable)`, where `variable` is a [variable](ABENST_TT_VARIABLE.html) or a [parameter](ABENST_TT_PARAMETER.html).
-   Values `value` are ABAP values in the associated [representation](ABENST_ABAP_REPRESENTATION.html).

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n **Condition** **Meaning** **`operator`** **Meaning** **Operation** **Meaning** `exist(node)` Met if an ABAP data object is bound to the node. `[not-]initial(node)` Met if the bound ABAP data object is (not) initial. `[not-]initial(var(variable))` Met if the variable is (not) initial. `=` Met if both operands have the same value. `!=` Met if both operands do not have the same value. `>`, `&gt;` Met if the value of the left operand is greater than that of the right operand. `>=`, `&gt;=` Met if the value of the left operand is greater than or equal to that of the right operand. `&lt;` Met if the value of the left operand is less than that of the right operand. `&lt;=` Met if the value of the left operand is less than or equal to that of the right operand. `not(cond)` Met if `cond` is not met. `cond1 and cond2` Met if both `cond1` and `cond2` are met. `cond1 or cond2` Met if not both `cond1` and `cond2` are not met. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_flow\_control.html abenst\_tt\_cond.html