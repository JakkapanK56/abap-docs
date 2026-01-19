---
title: "ABENST_MAP"
description: |
  ABENST_MAP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_MAP.htm"
abapFile: "ABENST_MAP.html"
keywords: ["do", "if", "try", "data", "ABENST", "MAP"]
---

`... map="..., val(a1, a2, ...) > xml(x), ..." ...`\\ 
`... map="..., xml(x1, x2, ...) > val(a), ..." ...`\\ 
`... map="..., val(a) = xml(x), ..." ...`\\ 
`... map="..., xml(x) = val(a), ..." ...`

The attribute `map` can be used to specify a list of mapping rules for [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html), [`tt:write`](ABENST_TT_WRITE.html), and [`tt:read`](ABENST_TT_READ.html). This is done to map a list of explicitly specified values to exactly one value when serializing or deserializing. A mapping list consists of a single mapping rule or a comma-separated list of multiple mapping rules. The following mapping rules are possible:

The values `a`, `a1`, `a2`, ... must be specified in accordance with the [representation of ABAP values](ABENST_ABAP_REPRESENTATION.html). The XML values `x`, `x1`, `x2`, ... must be enclosed in quotation marks.

If mapping rules with more than one argument are used, the transformation is usually no longer [symmetrical](ABENST_SYMMETRY.html).

Serialization of ABAP data using a mapping list with the transformation `DEMO_ST_MAPPING_LIST`:

The transformation is not [symmetrical](ABENST_SYMMETRY.html). In the following ABAP program, `field1` and `field2` contain the value *Person* after deserialization.

-   `val(a1, a2, ...) > xml(x)`
-   This mapping rule is evaluated in serializations. If the value of the current data node matches one of the specified values `a1`, `a2`, ... it is transformed to the value `x`.
-   `xml(x1, x2, ...) > val(a)`
-   This mapping rule is evaluated in deserializations. If the value of the current node matches one of the specified values `x1`, `x2`, ... it is transformed to the ABAP value `a`.
-   `val(a) = xml(x)` and `xml(x) = val(a)`
-   These mapping rules both mean the same thing and are evaluated in both serializations and deserializations. If the value of the current node corresponds to the specified value `a`, it is converted into value `x`, and vice versa.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n DATA xml\_string TYPE string. \\n\\ \\nDATA(o) = cl\_demo\_output=>new( ). \\n\\ \\nDATA field1 TYPE string VALUE 'Woman'. \\nDATA field2 TYPE string VALUE 'Man'. \\n\\ \\no->write( field1 \\n)->write( field2 ). \\n\\ \\nCALL TRANSFORMATION demo\_st\_mapping\_list \\n SOURCE root1 = field1 \\n root2 = field2 \\n RESULT XML xml\_string. \\n\\ \\no->write( xml\_string ). \\n\\ \\nCALL TRANSFORMATION demo\_st\_mapping\_list \\n SOURCE XML xml\_string \\n RESULT root1 = field1 \\n root2 = field2. \\n\\ \\no->write( field1 \\n)->write( field2 \\n)->display( ). abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_abap\_values.html abenst\_tt\_value\_elementary.html