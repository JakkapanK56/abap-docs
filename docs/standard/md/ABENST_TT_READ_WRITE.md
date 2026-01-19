---
title: "ABENST_TT_READ_WRITE"
description: |
  ABENST_TT_READ_WRITE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_READ_WRITE.htm"
abapFile: "ABENST_TT_READ_WRITE.html"
keywords: ["if", "try", "data", "ABENST", "READ", "WRITE"]
---

`<tt:read-write var="variable" [type="type" [length="len"]\                                             [decimals="dec"]]\                                [map="..."]\                                [minLength|maxLength="len"]\                                [xsd-type...] />`

The `tt:read-write` statement is a short form of the following two statements:

<tt:read var="variable" \[type="type" \[length="len"\]\\ \\n                                     \[decimals="dec"\]\]\\ \\n                        \[map="..."\]\\ \\n                        \[minLength|maxLength="len"\]\\ \\n                        \[xsd-type...\] />

<tt:write var="variable" \[map="..."\]\\ \\n                         \[minLength|maxLength="len"\]\\ \\n                         \[xsd-type...\] />

Specifying `tt:read-write` has the same effect as the statements [`tt:read`](ABENST_TT_READ.html) and [`tt:write`](ABENST_TT_WRITE.html) listed one directly after the other.

The attribute `type` and the attributes `length` and `decimals` specified using this attribute are respected by `tt:read` only. As with `tt:read`, the attribute `length` can only be specified together with `type`.

Serialization and deserialization using a variable. In serializations, the variable `VARI` is assigned the value of the data object bound to `ROOT` and is written to XML using `read-write`. In deserializations, the value of the variable is read from XML and assigned to the data object bound to `ROOT`. The following example can be found as `DEMO_ST_READ_WRITE`.

The following ABAP program can call the transformation:

The result of the serialization is:

The transformation is not [symmetrical](ABENST_SYMMETRY.html) due to [`minLength`](ABENST_LENGTH.html). After deserialization, the string `str` has at least 10 places.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n DATA str TYPE string. \\nDATA xstr TYPE xstring. \\n\\ \\nCALL TRANSFORMATION demo\_st\_read\_write \\n SOURCE root = \`abcde\` \\n RESULT XML xstr. \\n\\ \\ncl\_abap\_browser=>show\_xml( xml\_xstring = xstr ). \\n\\ \\nCALL TRANSFORMATION demo\_st\_read\_write \\n SOURCE XML xstr \\n RESULT root = str. abcde abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_variable\_transformations.html