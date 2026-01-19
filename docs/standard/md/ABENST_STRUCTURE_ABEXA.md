---
title: "ABENST_STRUCTURE_ABEXA"
description: |
  ABENST_STRUCTURE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_STRUCTURE_ABEXA.htm"
abapFile: "ABENST_STRUCTURE_ABEXA.html"
keywords: ["if", "try", "catch", "method", "class", "data", "ABENST", "STRUCTURE", "ABEXA"]
---

This example demonstrates the symmetrical serialization and deserialization of a nested structure.

In the ABAP class, a nested structure `struc1` is serialized to `xml_string` using the Simple Transformation `DEMO_ST_STRUCTURE` and deserialized using the same transformation.

The Simple Transformation `DEMO_ST_STRUCTURE` has the following form:

<?sap.transform simple?>\\ \\n<tt:transform xmlns:tt="http://www.sap.com/transformation-templates" \\n              template="temp" version="0.1">\\ \\n  <tt:root name="PARA"/>\\ \\n  <tt:template name="temp">\\ \\n    <X>\\ \\n      <X1>\\ \\n        <tt:value ref="PARA.COL1"/>\\ \\n      </X1>\\ \\n      <X2>\\ \\n        <tt:value ref="PARA.COL2"/>\\ \\n      </X2>\\ \\n      <X2>\\ \\n        <tt:copy ref="PARA.STRUC2"/>\\ \\n      </X2>\\ \\n    </X>\\ \\n  </tt:template>\\ \\n</tt:transform>

The transformation consists of a template `temp` that defines the structure of the XML data and establishes relationships between value nodes and components of the structure. The ST statements `[tt:value](ABENST_TT_VALUE_ELEMENTARY.html)` and [`tt:copy`](ABENST_TT_COPY.html) are used to serialize and deserialize the structure components. The reverse transformation creates the same content in the structure `result` as in `struc1`.

\* Public class definition \\nCLASS cl\_demo\_st\_structure DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_st\_structure IMPLEMENTATION. \\n METHOD main. \\n DATA: BEGIN OF struc1, \\n col1 TYPE c LENGTH 10 VALUE 'ABCDEFGHIJ', \\n col2 TYPE i VALUE 111, \\n BEGIN OF struc2, \\n col1 TYPE d VALUE '20040126', \\n col2 TYPE t VALUE '084000', \\n END OF struc2, \\n END OF struc1, \\n result LIKE struc1. \\n TRY. \\n "Serialization \\n CALL TRANSFORMATION demo\_st\_structure \\n SOURCE para = struc1 \\n RESULT XML DATA(xml). \\n out->write\_xml( xml ). \\n "Deserialization \\n CALL TRANSFORMATION demo\_st\_structure \\n SOURCE XML xml \\n RESULT para = result. \\n IF result = struc1. \\n out->write\_text( 'Symmetric transformation!' ). \\n ENDIF. \\n CATCH cx\_st\_error. \\n out->write\_text( 'Error in Simple Transformation' ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_st\_structure DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_st\_structure IMPLEMENTATION. \\n METHOD main. \\n DATA: BEGIN OF struc1, \\n col1 TYPE c LENGTH 10 VALUE 'ABCDEFGHIJ', \\n col2 TYPE i VALUE 111, \\n BEGIN OF struc2, \\n col1 TYPE d VALUE '20040126', \\n col2 TYPE t VALUE '084000', \\n END OF struc2, \\n END OF struc1, \\n result LIKE struc1. \\n TRY. \\n "Serialization \\n CALL TRANSFORMATION demo\_st\_structure \\n SOURCE para = struc1 \\n RESULT XML DATA(xml). \\n out->write\_xml( xml ). \\n "Deserialization \\n CALL TRANSFORMATION demo\_st\_structure \\n SOURCE XML xml \\n RESULT para = result. \\n IF result = struc1. \\n out->write\_text( 'Symmetric transformation!' ). \\n ENDIF. \\n CATCH cx\_st\_error. \\n out->write\_text( 'Error in Simple Transformation' ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_abexas.html