---
title: "In serializations, the"
description: |
  are evaluated. The content of the element `tt:s-cond` is serialized only if all three prerequisites are met. Otherwise the comparison is terminated at the first false prerequisite and the content of `tt:s-cond` is skipped. If none of the three possible attributes is specified in `tt:s-cond`, t
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_TT_COND.htm"
abapFile: "ABENST_TT_COND.html"
keywords: ["do", "if", "case", "data", "ABENST", "COND"]
---

`<tt:[s-|d-]cond [using="..."]\                  [data="..."]\                  [[s-|d-]check="..."]>\    ...  </tt:[s-|d-]cond>`

Conditional transformations are realized as the content of an element `tt:[s-|d-]cond`. They represent parts of ST programs that are respected only if certain prerequisites are met. Conditional transformations are normally used as cases in [`tt:switch`](ABENST_TT_SWITCH.html) and [`tt:group`](ABENST_TT_GROUP.html).

The content of `tt:[s-|d-]cond` depends on

If the content of `tt:[s-|d-]cond` is not a [pattern](ABENST_PATTERN.html), at least one attribute `using`, `data`, or `check` must be specified.

The condition [`check`](ABENST_CHECK.html) can also be used directionally:

It makes no sense to specify `s-check` in `tt:d-cond` or `d-check` in `tt:s-cond`.

**Serialization**

In serializations, the

are evaluated. The content of the element `tt:[s-]cond` is serialized only if all three prerequisites are met. Otherwise the comparison is terminated at the first false prerequisite and the content of `tt:[s-]cond` is skipped.

If none of the three possible attributes is specified in `tt:[s-]cond`, the prerequisite is considered fulfilled. If the content of `tt:[s-]cond` is empty in serializations, the element is ignored.

**Deserialization**

In deserializations, before and during the check of the [precondition](ABENST_USING.html), the system distinguishes whether or not the content of `tt:[d-]cond` is a [pattern](ABENST_PATTERN.html). The deserialization proceeds as follows:

If none of the three possible attributes `using`, `data`, or `check` is specified in `tt:[d-]cond`, the content of `tt:[d-]cond` must not be empty and it is evaluated in Step 1, depending on whether or not it is a [pattern](ABENST_PATTERN.html). The other prerequisites (Steps 3 to 4) are considered fulfilled.

The transformation `DEMO_ST_COND` below demonstrates conditions:

If the ABAP data objects bound to `ROOT1` and `ROOT2` are of type `i` and `ROOT1` has the value *111*, then the transformation generates the following XML fragment, regardless of the ABAP data object bound to the data root `ROOT3`:

The same transformation can deserialize this XML fragment, thereby setting `ROOT3` to the value *333*. The deserialization fails if `X1` does not have the value *111* and if `X2` does not lie between 111 and 333. The element `X0` of the transformation is optional. It would also be possible to deserialize the following XML fragment:

However, if the first subelement of the XML fragment has a name other than `X0`, the exception `CX_ST_MATCH_ELEMENT` would be raised.

-   a precondition in the attribute [`using`](ABENST_USING.html),
-   an assertion in the attribute [`data`](ABENST_DATA.html), and
-   a condition in the attribute [`check`](ABENST_CHECK.html)

-   The element `tt:cond` is evaluated in serializations and deserializations.
-   The element `tt:s-cond` is evaluated only in serializations and skipped in deserializations. The content of `tt:s-cond` is never deserialized.
-   The element `tt:d-cond` is evaluated only in deserializations and skipped in serializations. The content of `tt:d-cond` is never serialized.

-   The condition `check` is evaluated in serializations and deserializations.
-   The condition `s-check` is evaluated only in serializations.
-   The condition `d-check` is evaluated only in deserializations.

-   [precondition `using`](ABENST_USING.html),
-   the [assertion `data`](ABENST_DATA.html), and
-   the [condition `check`](ABENST_CHECK.html)

-   If the content of `tt:[d-]cond` is a [pattern](ABENST_PATTERN.html), it is compared to the current element of the XML inbound stream. If the pattern does not fit the current element, the element `tt:[d-]cond` is skipped and the current element of the XML inbound stream is not consumed. Otherwise Step 2 follows.
-   If the content of `tt:[d-]cond` is not a [pattern](ABENST_PATTERN.html), Step 2 follows.

-   If the content of `tt:[d-]cond` is a [pattern](ABENST_PATTERN.html) and the precondition is not met, the element `tt:[d-]cond` is skipped and the current element of the inbound XML stream is consumed without being deserialized. If the precondition is met, Step 3 follows.
-   If the content of `tt:[d-]cond` is not a [pattern](ABENST_PATTERN.html) and the precondition is not met, the deserialization is canceled with the exception `CX_ST_REF_ACCESS`. If the precondition is met, Step 3 follows.

-   An assertion can be used to assign a value to a data node without the node being filled by the inbound stream. Instead of an empty element `tt:[d-]cond`, the statement `tt:assign` should be used in this case.
-   The empty element `tt:[d-]cond` can be used to check the current content of data nodes in deserializations.
-   The element `tt:[d-]cond` without explicit conditions can be used to flag optional content in deserializations. This means, if a pattern does not exist in the XML inbound stream, its evaluation is skipped without raising an exception.

1.  Check whether the content of `tt:[d-]cond` is a [pattern](ABENST_PATTERN.html).

-   If the content of `tt:[d-]cond` is a [pattern](ABENST_PATTERN.html), it is compared to the current element of the XML inbound stream. If the pattern does not fit the current element, the element `tt:[d-]cond` is skipped and the current element of the XML inbound stream is not consumed. Otherwise Step 2 follows.
-   If the content of `tt:[d-]cond` is not a [pattern](ABENST_PATTERN.html), Step 2 follows.

3.  Checking the [precondition `using`](ABENST_USING.html)

-   If the content of `tt:[d-]cond` is a [pattern](ABENST_PATTERN.html) and the precondition is not met, the element `tt:[d-]cond` is skipped and the current element of the inbound XML stream is consumed without being deserialized. If the precondition is met, Step 3 follows.
-   If the content of `tt:[d-]cond` is not a [pattern](ABENST_PATTERN.html) and the precondition is not met, the deserialization is canceled with the exception `CX_ST_REF_ACCESS`. If the precondition is met, Step 3 follows.

5.  Evaluation of the instruction body
6.  The body of the instruction is evaluated. In this process, data nodes are deserialized. Their existence or type can have been ensured in Step 2; the result of the deserialization can be checked for plausibility in Step 5.
7.  Establishment of the [assertion `data`](ABENST_DATA.html)
8.  The value asserted in the assertion is assigned to all data nodes specified in this assertion. If, during deserialization of the current element of the XML inbound stream, a different value is assigned to one of these data nodes, the deserialization is terminated with exception `CX_ST_COND_CHECK_FAIL`.
9.  Checking the [condition `check`](ABENST_CHECK.html)
10.  The condition `[d-]check` is checked. If the condition is not met, the deserialization is canceled with the exception `CX_ST_COND_CHECK_FAIL`.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n ... \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\n 111\\ \\n 222\\ \\n \\n ...\\ \\n 111\\ \\n 222\\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_flow\_control.html