---
title: "ABENST_SYMMETRY"
description: |
  ABENST_SYMMETRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_SYMMETRY.htm"
abapFile: "ABENST_SYMMETRY.html"
keywords: ["while", "if", "try", "data", "ABENST", "SYMMETRY"]
---

The language constructs of Simple Transformations support the formulation of reversible transformations, that is, of programs that provide the original values in the execution order serialization - deserialization (or vice versa). However, it is also possible to write programs that cannot be reversed.

The simple example `DEMO_ST_SYMMETRY` illustrates a non-symmetrical transformation. Since the [`tt.value`](ABENST_TT_VALUE_ELEMENTARY.html) statements are not enclosed in separate elements, the serialized values of `ROOT1` and `ROOT2` are grouped in *X*.

The following ABAP program can call the transformation:

The result of the serialization is:

Accordingly, the result of the deserialization to `result1` is `"Hello World!"`, while `result2` retains its initial value, which is different from the original content of `field1` and `field2`.

For a symmetrical transformation, the `tt:value` statements each have to appear in separate elements, or they must be separated by a unique text (which cannot appear in the first value).

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n DATA xml\_string TYPE string. \\nDATA field1 TYPE string VALUE 'Hello'. \\nDATA field2 TYPE string VALUE ' World!'. \\n\\ \\nDATA result1 LIKE field1. \\nDATA result2 LIKE field2. \\n\\ \\nCALL TRANSFORMATION demo\_st\_symmetry \\n SOURCE root1 = field1 \\n root2 = field2 \\n RESULT XML xml\_string. \\n\\ \\nCALL TRANSFORMATION demo\_st\_symmetry \\n SOURCE XML xml\_string \\n RESULT root1 = result1 \\n root2 = result2. Hello World! abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html