---
title: "ABENST_TT_SKIP"
description: |
  ABENST_TT_SKIP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_SKIP.htm"
abapFile: "ABENST_TT_SKIP.html"
keywords: ["if", "data", "ABENST", "SKIP"]
---

`<tt:skip [name="name"]\ [count="cnt"]/>`

The `tt:skip` statement makes it possible to skip XML elements in deserializations. The statement can be located anywhere in a template.

**Serialization**

In serializations, `tt:skip` is ignored.

**Deserialization**

In deserializations, `tt:skip` has the following effect:

In deserializations, when comparing the template, the `tt:skip` statement is compared to the structure of the inbound XML stream as if the skipped elements were specified in its place. This means that a `tt:skip` statement with the `name` attribute is correct only if this position of the inbound XML stream also has the corresponding number of elements of the specified name, and the element of a template executed after a `tt:skip` statement must correspond to the element in the XML data that follows after the skipped elements.

In the Simple Transformation `DEMO_ST_SKIP` below, the template is divided into a part for serialization and a part for deserialization. In deserializations, the first two `X1` elements, all `X2` elements after the first `X2` element, and the `Y` element including all its subelements are skipped.

The following ABAP program can call the transformation:

After the deserialization, the components of `result` are given the values of the third, fourth, and tenth component of `struc`.

-   Without additions, the following XML content of the inbound stream is consumed up to the end of the current element or non-literal attribute, but no ST statements are executed.
-   Using the attributes `name` and `count`, as many consecutive elements of the name `name` are not deserialized as specified by the number in `cnt`.
-   Using the attribute `name` but not `count`, or using the attribute `count="*"`, any number of consecutive elements with the name `name` are not deserialized.
-   Not using the attribute `name` but using the attribute `count` attribute, as many subsequent elements after the current element are not deserialized as specified in `cnt`. For `cnt`, a number or `*` can be specified, where `*` can stand for any number of elements.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n DATA xml\_string TYPE string. \\n\\ \\nDATA: BEGIN OF struc, \\n col0 TYPE i VALUE 0, \\n col1 TYPE i VALUE 1, \\n col2 TYPE i VALUE 2, \\n col3 TYPE i VALUE 3, \\n col4 TYPE i VALUE 4, \\n col5 TYPE i VALUE 5, \\n col6 TYPE i VALUE 6, \\n col7 TYPE i VALUE 7, \\n col8 TYPE i VALUE 8, \\n col9 TYPE i VALUE 9, \\n END OF struc. \\n\\ \\nDATA: BEGIN OF result, \\n compa TYPE i, \\n compb TYPE i, \\n compc TYPE i, \\n END OF result. \\n\\ \\nCALL TRANSFORMATION demo\_st\_skip \\n SOURCE root = struc \\n RESULT XML xml\_string. \\n\\ \\nCALL TRANSFORMATION demo\_st\_skip \\n SOURCE XML xml\_string \\n RESULT root = result. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_flow\_control.html