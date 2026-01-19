---
title: "ABENST_TT_SERIALIZE_DESERIALIZE"
description: |
  ABENST_TT_SERIALIZE_DESERIALIZE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_SERIALIZE_DESERIALIZE.htm"
abapFile: "ABENST_TT_SERIALIZE_DESERIALIZE.html"
keywords: ["if", "data", "internal-table", "ABENST", "SERIALIZE", "DESERIALIZE"]
---

`<tt:serialize>\    ...  </tt:serialize>\  \  <tt:deserialize>\    ...  </tt:deserialize>`

These ST statements can be used to limit parts of templates for execution in serializations or deserializations:

All template elements specified within the `tt:serialize` element are only respected in serializations. All the template elements specified within the `tt:deserialize` element are only respected in deserializations.

The following Simple Transformation `DEMO_ST_SERIALIZE_DESERIALIZE` serializes a structure and deserializes to an internal table:

The following ABAP program can call the transformation:

After deserialization, the internal table contains three lines with the values of the structure components.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n DATA xml\_string TYPE string. \\n\\ \\nDATA: BEGIN OF struc, \\n col1 TYPE i VALUE 1, \\n col2 TYPE i VALUE 2, \\n col3 TYPE i VALUE 3, \\n END OF struc. \\n\\ \\nDATA itab TYPE TABLE OF i. \\n\\ \\nCALL TRANSFORMATION demo\_st\_serialize\_deserialize \\n SOURCE root1 = struc \\n RESULT XML xml\_string. \\n\\ \\nCALL TRANSFORMATION demo\_st\_serialize\_deserialize \\n SOURCE XML xml\_string \\n RESULT root2 = itab. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_flow\_control.html