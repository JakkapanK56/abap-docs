---
title: "The three ST programs from the sections"
description: |
  can transform a nested ABAP structure symmetrically(ABENST_SYMMETRY.html). The following program can call these three ST programs: The result of the serialization is the same XML data for all three Simple Transformations: -   Current Node(ABENST_TT_REF.html) -   Addressing the Current Node(ABE
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_VALUE_STRUCTURE.htm"
abapFile: "ABENST_TT_VALUE_STRUCTURE.html"
keywords: ["if", "try", "catch", "data", "ABENST", "VALUE", "STRUCTURE"]
---

`<tt:value [ref="node"]\ [map="..."]\                         [length|minLength|maxLength="len"]\                         [xsd-type...] />`

The serialization and deserialization of structures results directly from the [addressing rules](ABENST_ADDRESSING.html), because the structures can be mapped directly to the [tree structures](ABENST_TREES.html) that start from the data roots. When the current node is bound to an elementary component of an ABAP structure, the structure can be processed with `tt:value` just like an [elementary data object](ABENST_TT_VALUE_ELEMENTARY.html).

The three ST programs from the sections

can transform a nested ABAP structure [symmetrically](ABENST_SYMMETRY.html). The following program can call these three ST programs:

The result of the serialization is the same XML data for all three Simple Transformations:

-   [Current Node](ABENST_TT_REF.html)
-   [Addressing the Current Node](ABENST_ADDRESSING_CURRENT_NODE.html)
-   [Addressing Subnodes](ABENST_ADDRESSING_SUBNODES.html)

DATA: BEGIN OF struc1, \\n col1(10) TYPE c VALUE 'ABCDEFGHIJ', \\n col2 TYPE i VALUE 111, \\n BEGIN OF struc2, \\n col1 TYPE d VALUE '20040126', \\n col2 TYPE t VALUE '084000', \\n END OF struc2, \\n END OF struc1. \\n\\ \\nDATA: xml\_string TYPE string, \\n result LIKE struc1. \\n\\ \\nTRY. \\n CALL TRANSFORMATION ... \\n SOURCE root = struc1 \\n RESULT XML xml\_string. \\n cl\_abap\_browser=>show\_xml( EXPORTING xml\_string = xml\_string ). \\n CALL TRANSFORMATION ... \\n SOURCE XML xml\_string \\n RESULT root = result. \\n IF struc1 <> result. \\n MESSAGE 'Deserialization <> Serialization' TYPE 'I'. \\n ENDIF. \\n CATCH cx\_st\_error. \\n ... \\nENDTRY. \\n ABCDEFGHIJ\\ \\n 111\\ \\n \\ \\n 2004-01-26\\ \\n 08:40:00\\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_abap\_values.html