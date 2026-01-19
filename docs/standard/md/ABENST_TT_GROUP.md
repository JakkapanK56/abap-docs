---
title: "ABENST_TT_GROUP"
description: |
  ABENST_TT_GROUP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_GROUP.htm"
abapFile: "ABENST_TT_GROUP.html"
keywords: ["select", "loop", "do", "while", "if", "case", "class", "data", "ABENST", "GROUP"]
---

`<tt:group>\    <tt:[s-|d-]cond [frq="..."] ...    <tt:[s-|d-]cond [frq="..."] ...    ...  </tt:group>`

During deserializations, the statement `tt:group` can be used to react to variable XML input streams containing groups of related elements in free order. Hereby, a list of cases is specified in `tt:group`, where the syntax of each case is formulated by a conditional transformation, namely a subelement [`tt:[s-|d-]cond`](ABENST_TT_COND.html). In this case, `tt:[s-]cond` defines a serialization-relevant case, and `tt:[d-]cond` a deserialization-relevant case. Other direct subelements are not possible in `tt:group`. The statement `tt:group` can be a subelement of `tt:[s-|d-]cond`.

In contrast to conditional transformations outside of `tt:group`, specifying at least one attribute [`using`](ABENST_USING.html), [`data`](ABENST_DATA.html) or [`check`](ABENST_CHECK.html) for a case is not necessary, provided that the content of `tt:[s-|d-]cond` is not a [pattern](ABENST_PATTERN.html).

In the list of cases, the following must be noted:

To control how often a deserialization-relevant case must or can be executed in deserializations, `tt:[d-]cond` within `tt:group` can contain the additional attribute `frq` (frequency) with one of three allowed values:

For `frq="?"` and `frq="*"`, the expected element must not necessarily exist in the inbound XML stream.

Implicit frequency: If the attribute `frq` is not specified explicitly,

**Serialization**

During serialization, the element `tt:group` is executed once as follows: All serialization-relevant cases with fulfilled or no prerequisite `using`, `data`, or `check` are executed in the specified order.

**Deserialization**

During deserialization, the element `tt:group` starts a sequence of evaluation steps for the group that require some cases to be selected and also searches for a superset of these cases to be selected. The group evaluation terminates successfully when all required cases are selected or the current node does not match an unselected case.

During each evaluation step, one of the deserialization-relevant cases whose maximum case frequency has not yet been reached is selected as follows:

The following transformation `DEMO_ST_GROUP` shows how groupings work:

Assume that an inbound XML stream has the following form:

The deserialization proceeds as follows:

The examples can be executed by opening the class `CL_DEMO_ST_GROUP`.

-   Any number of serialization-relevant cases can be specified in which no attribute `using`, `data`, or `check` is specified.
-   Only one deserialization-relevant case that does not contain a [pattern](ABENST_PATTERN.html) can be specified. This case is called standard deserialization.

-   `<tt:[d-]cond ... frq="1"/>`
-   Required case. The case must be executed exactly once while the group is processed.
-   `<tt:[d-]cond ... frq="?"/>`
-   Optional case. The case is executed only once while the group is processed.
-   `<tt:[d-]cond ... frq="*"/>`
-   Multiple case. The case can be executed any number of times while the group is processed.

-   `frq="1"` is used implicitly in `tt:cond` cases that do not contain data conditions (that is, they must be executed in serializations).
-   `frq="?"` is used implicitly in `tt:cond` cases that contain a data condition (that, is they may not be executed in serializations).

-   Frequency `1`: Mandatory case. The case is required and searched for.
-   Frequency `?`: Optional case. The case is not required but searched for.
-   Frequency `*`: Fallback case. The case is neither required nor searched for.

1.  The first case that contains a suitable pattern is executed (deserialization and assertions met).
2.  If no such case exists, the system tries to execute the standard deserialization, if it exists. If the possible prerequisites `using`, `data`, or `check` of the standard deserialization are not met, the exception `CX_ST_REF_ACCESS` is raised.
3.  If no standard deserialization exists, the exception `CX_ST_GROUP_MISSING_CASE` is raised.

1.  In the first evaluation step, element `X1` is used and the first element `X1` deserialized, where `ROOT1` is set to *1*.
2.  In the second evaluation step, element `X1` is used again because of the condition `tt:cond frq="*"` and the second element `X1` deserialized, where `ROOT1` is set to *2*.
3.  In the third loop pass, element `X2` is used and the first element `X2` deserialized, where `ROOT2` is set to *3*.
4.  In the fourth evaluation step, element `X2` cannot be used again because of condition `tt:cond frq="?"`. Instead, the second element `X2` is skipped in the standard deserialization with `tt:skip`. Specifying `count` is necessary because otherwise all subsequent elements would be skipped.
5.  In the fifth evaluation step, element `X3` is used and the first element `X3` deserialized, where `ROOT3` is set to *5*.
6.  All required cases of the group have been selected, so the loop ends. The element `X4` is deserialized outside of `tt:group` and `ROOT4` is set to *6*.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n 1\\ \\n 2\\ \\n 3\\ \\n 4\\ \\n 5\\ \\n 6\\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_flow\_control.html