---
title: "ABENST_PATTERN"
description: |
  ABENST_PATTERN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_PATTERN.htm"
abapFile: "ABENST_PATTERN.html"
keywords: ["loop", "if", "case", "data", "ABENST", "PATTERN"]
---

When [conditional transformations](ABENST_TT_COND.html) are deserialized, the criterion for the evaluation is whether the template content is also a pattern. A pattern contains one or more constructs that are used as *markers*. The most common form of a marker is a literal XML element: if the content of the condition consists of exactly one XML element, the condition has exactly one positive result if an XML element with this name follows at the current position in the XML input stream.

Marker constructs are:

Each of these constructs can be compared with the input stream in an obvious way.

A pattern can usually contain multiple markers. For example, the sequence

<tt:cond> \\n  <X> ... </X> \\n</tt:cond> \\n<Y> ... </Y>

is also a pattern; it contains the markers `<X>` and `<Y>`. A condition with this pattern is determined positively by element `X` as well as by element `Y` in the input stream (in the second case, the condition is determined negatively with `X`).

The number of marker constructs `M(c)` contained in template content `c` is defined recursively below. Template content `c` is a pattern if `M(c)` is not empty. In summary, `M(c)` consists of the markers that can be used to positively determine pattern `c`, where conditions in an initial part of `c` can also be determined negatively.

Some constructs propagate markers externally:

Conditional transformations also propagate markers. In the case of case distinctions and groupings, the union of all cases is determined:

For all other instructions `c`, `M(c)` is empty.

For `c1 c2 ...` sequences in template content, the following applies:

Template content is a pre-pattern if its deserialization is possible without the use of content from the input stream. In detail:

`tt:deserialize`, `tt:ref`, and `tt:apply` propagate the pre-pattern property.

The content of the following element `tt:cond` is a pattern with marker elements \\{`f1`, `f2`, `f3`\\} (but not `fx`).

-   [Literal XML element](ABENST_XML_LITERALS.html) with or without content
-   [Non-literal attribute](ABENST_TT_ATTRIBUTE.html) with content
-   Non-empty [literal text](ABENST_TT_TEXT.html)
-   Explicit [empty template content](ABENST_TT_EMPTY.html)

-   `M(c) = \{c\}` for marker `c`. This means that each marker is a (primitive) pattern and the marker set for this pattern consists of the marker itself.

-   `M(tt:deserialize) = M(tt:ref) = M(c)` for the content `c` of the construct in question.
-   `M(tt:apply) = M(c)` for the body `c` of the called template.
-   `M(tt:loop) = M(c)` for the loop body `c`.

-   `M(tt:[d-]cond) = M(c)` for the condition body `c`.
-   `M(tt:group) = M(tt:switch) = M(c1) U ... U M(cn)` for all cases `ci = tt:[d-]cond`.

-   `M(c1 c2 ...) = M(c1) U M(c2 ...)`, if `c1` is a prepattern, otherwise `M(c1)`

-   All constructs with an empty deserialization are pre-patterns. These are `tt:s-cond`, `tt:assign`, `tt:clear`, `tt:serialize`, `tt:write`, and compositions of these with `tt:cond-var`, `tt:switch-var`, and `tt:apply`.
-   `tt:[d-]cond` is a pre-pattern if the condition body is a pattern. (If the pattern cannot be compared, the condition is determined negatively and is skipped.)

\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n ... \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_flow\_control.html abenst\_tt\_cond.html