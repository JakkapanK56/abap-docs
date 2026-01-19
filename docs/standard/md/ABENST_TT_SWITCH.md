---
title: "ABENST_TT_SWITCH"
description: |
  ABENST_TT_SWITCH - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_SWITCH.htm"
abapFile: "ABENST_TT_SWITCH.html"
keywords: ["do", "while", "if", "case", "data", "ABENST", "SWITCH"]
---

`<tt:switch>\    <tt:[s-|d-]cond ...    <tt:[s-|d-]cond ...    ...  </tt:switch>`

The statement `tt:switch` can be used to execute a maximum of one conditional transformations from a set of conditional transformations. A list of cases is specified in `tt:switch`, where the syntax of each case is formulated by a conditional transformation, namely a subelement [`tt:[s-|d-]cond`](ABENST_TT_COND.html). In this case, `tt:[s-]cond` defines a serialization-relevant case, and `tt:[d-]cond` a deserialization-relevant case. Other direct subelements are not possible in `tt:switch`.

In contrast to conditional transformations positioned outside of `tt:switch`, for a case specifying at least one attribute [`using`](ABENST_USING.html), [`data`](ABENST_DATA.html), or [`check`](ABENST_CHECK.html) is not necessary, provided that the content of `tt:[s-|d-]cond` is not a [pattern](ABENST_PATTERN.html).

In the list of cases, the following must be noted:

**Serialization**

Serializations follow these rules:

In successful serializations, exactly one case is executed.

**Deserialization**

Deserializations follow these rules:

In successful deserializations, exactly one case is executed.

When case distinctions are programmed, serializations and deserializations should be formulated as far as possible in common cases `tt:cond`, while the directional cases `tt:s-cond` and `tt:d-cond` should only be used where no common formulation is possible.

In serializations, the transformation `DEMO_ST_SWITCH1` below sets the attribute `size` of element `Paragraph` depending on the value of the data node `SIZE` to exactly one value of *Small*, *Big*, or *Medium*. *Medium* is created in standard serializations.

If, for example, the input values for `SIZE` are between 10 and 20, the result is as follows:

In deserializations, `data` is used to assign to the data node `SIZE` a value *8*, *16*, or *28* for each of the three valid attribute values *Small*, *Medium*, and *Big*. If a different attribute value is specified, the value *12* is assigned to `SIZE` in standard deserializations and the invalid attribute is skipped with `tt:skip`.

In the above transformation, serializations and deserializations are handled completely separately and are divided within a single `tt:switch element`. Since there is no common case for serializations and deserializations, `tt:serialize` and `tt:deserialize` and two `tt:switch` elements can also be used to achieve the same result. In `DEMO_ST_SWITCH2`, the identifiers `s-` and `d-` can be omitted in front of `cond` and the query about whether `SIZE` is bound to an ABAP data object must be queried only once:

-   Only one serialization-relevant case may be specified in which no attribute `using`, `data`, or `check` is specified. This case is called standard serialization.
-   A maximum of one deserialization-relevant case may be specified that does not contain a pattern. This case is called standard deserialization.

1.  The first serialization-relevant case `tt:[s-]cond` whose explicitly specified prerequisites are met is serialized and the element `tt:switch` is exited.
2.  If the prerequisite is not met for any of the serialization-relevant cases with explicitly specified attributes `using`, `data`, or `check`, the standard serialization is executed (if it exists) and the element `tt:switch` is exited.
3.  If no standard serialization exists, the exception `CX_ST_SWITCH_NO_CASE` is raised.

1.  The first deserialization-relevant case `tt:[d-]cond` that contains a suitable [pattern](ABENST_PATTERN.html) and whose prerequisites are met is executed (the assertions are deserialized and met) and the element `tt:switch` is exited.
2.  If no deserialization-relevant case that contains a pattern can be executed, the system tries to execute a standard deserialization, if it exists. After the execution, the element `tt:switch` is exited. If the possible prerequisites `using`, `data`, or `check` of the standard deserialization are not met, the exception `CX_ST_REF_ACCESS` is raised.
3.  If no standard deserialization exists, the exception `CX_ST_SWITCH_NO_CASE` is raised.

Text \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n Small\\ \\n \\ \\n \\ \\n Big\\ \\n \\ \\n \\ \\n Medium\\ \\n \\ \\n \\ \\n Small\\ \\n \\ \\n \\ \\n Medium\\ \\n \\ \\n \\ \\n Big\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n Text\\ \\n \\ \\n \\ \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n Small\\ \\n \\ \\n \\ \\n Big\\ \\n \\ \\n \\ \\n Medium\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n Small\\ \\n \\ \\n \\ \\n Medium\\ \\n \\ \\n \\ \\n Big\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n Text\\ \\n \\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_flow\_control.html