---
title: "ABENST_TT_ASSIGN"
description: |
  ABENST_TT_ASSIGN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_ASSIGN.htm"
abapFile: "ABENST_TT_ASSIGN.html"
keywords: ["insert", "do", "if", "case", "data", "internal-table", "ABENST", "ASSIGN"]
---

`<tt:assign [to-ref="node"|to-var="variable"]\             [ref="node"|val="value"|var="variable"] />`

The statement `tt:assign` is used to assign a value to a [data root](ABENST_TT_ROOT.html), a [variable](ABENST_TT_VARIABLE.html), or a [parameter](ABENST_TT_PARAMETER.html).

`to-ref` or `to-var` is used to specify the target field, and `ref`, `val`, or `var` to specify the source field. If no target field or no source field is specified, the [current node](ABENST_TT_REF.html) is used implicitly. Target and source fields can be:

An assignment between reference variables using `tt:assign` is only possible if the static type of the source variable is more specific than or the same as the static type of the target variable (upcast). In all other cases, the [`tt:cast`](ABENST_TT_CAST.html) statement can be used to perform a downcast.

**Serialization**

In serializations, only variables (or parameters) are given the current value of the source field. If a data node is specified as the target field using `to-ref` or if the current node is specified implicitly, `tt:assign` is ignored in serializations.

**Deserialization**

In deserializations, only variables (or parameters) or directly specified values are evaluated as source fields. If a node is specified as the source field (using `ref`) or if the current node is specified implicitly, `tt:assign` is ignored in deserializations.

The following syntax can be used if the current node, or the node specified after `to-ref`, is an internal table:

`<tt:assign [to-ref="itab"]>\ <tt:assign [to-ref="comp"]\ [val="value"|var="variable"] />\ ... </tt:assign>`

This will insert a line into the specified internal table. The values of the components are set using the inner statements `tt:assign`. This statement is ignored in serializations.

The transformation `DEMO_ST_ASSIGN` below shows value assignments:

During a deserialization, the value *22* is assigned to the ABAP data object bound to the data root `ROOT`.

-   a node `node` specified in accordance with the [addressing rules](ABENST_ADDRESSING_NODES.html),
-   a [variable](ABENST_TT_VARIABLE.html) or a [parameter](ABENST_TT_PARAMETER.html)\\ `variable`,
-   a value `value` specified in accordance with the [rules for ABAP values](ABENST_DATA.html) (source field only)

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_assignments.html