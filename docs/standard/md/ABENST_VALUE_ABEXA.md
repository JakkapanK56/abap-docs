---
title: "Serializes and deserializes elementary data objects"
description: |
  The called transformation `DEMO_ST_VALUE` shows the mapping of elementary ABAP data types for date, time, and UTC time stamp to XML and back. <?sap.transform simple?> n<tt:transform n  xmlns:tt='http://www.sap.com/transformation-templates'> n  <tt:root name='DATE'/> n  <tt:root name='T
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_VALUE_ABEXA.htm"
abapFile: "ABENST_VALUE_ABEXA.html"
keywords: ["try", "method", "class", "data", "types", "ABENST", "VALUE", "ABEXA"]
---

Serializes and deserializes elementary data objects

The called transformation `DEMO_ST_VALUE` shows the mapping of elementary ABAP data types for date, time, and UTC time stamp to XML and back.

<?sap.transform simple?>\\ \\n<tt:transform \\n  xmlns:tt="http://www.sap.com/transformation-templates">\\ \\n  <tt:root name="DATE"/>\\ \\n  <tt:root name="TIME"/>\\ \\n  <tt:root name="DATETIME1"/>\\ \\n  <tt:root name="DATETIME2"/>\\ \\n  <tt:template>\\ \\n    <Date\_and\_Time>\\ \\n      <Date>\\ \\n        <tt:value ref="DATE"/>\\ \\n      </Date>\\ \\n      <Time>\\ \\n        <tt:value ref="TIME"/>\\ \\n      </Time>\\ \\n      <DateTime1>\\ \\n        <tt:value ref="DATETIME1"/>\\ \\n      </DateTime1>\\ \\n      <DateTime2>\\ \\n        <tt:value ref="DATETIME2"/>\\ \\n      </DateTime2>\\ \\n    </Date\_and\_Time>\\ \\n  </tt:template>\\ \\n</tt:transform>

It should be noted that `tsp` is defined with the special type `XSDDATETIME_Z` from the ABAP Dictionary. This type ensures that a special mapping is used for UTC time stamps in packed numbers. This happens by default for the built-in time stamp type `utclong`.

The transformation is [symmetrical](ABENST_SYMMETRY.html).

\* Public class definition \\nCLASS cl\_demo\_st\_value DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_st\_value IMPLEMENTATION. \\n METHOD main. \\n DATA: dat TYPE d, \\n tim TYPE t, \\n ts TYPE utclong, \\n tsp TYPE xsddatetime\_z. \\n\\ \\n dat = cl\_demo\_date\_time=>get\_user\_date( ). \\n tim = cl\_demo\_date\_time=>get\_user\_time( ). \\n CONVERT DATE dat \\n TIME tim \\n TIME ZONE \`\` \\n INTO UTCLONG ts. \\n tsp = cl\_abap\_tstmp=>utclong2tstmp\_short( ts ). \\n\\ \\n CALL TRANSFORMATION demo\_st\_value \\n SOURCE date = dat \\n time = tim \\n datetime1 = ts \\n datetime2 = tsp \\n RESULT XML FINAL(xml). \\n\\ \\n out->write\_xml( xml ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_st\_value DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_st\_value IMPLEMENTATION. \\n METHOD main. \\n DATA: dat TYPE d, \\n tim TYPE t, \\n ts TYPE utclong, \\n tsp TYPE xsddatetime\_z. \\n\\ \\n dat = cl\_demo\_date\_time=>get\_user\_date( ). \\n tim = cl\_demo\_date\_time=>get\_user\_time( ). \\n CONVERT DATE dat \\n TIME tim \\n TIME ZONE \`\` \\n INTO UTCLONG ts. \\n tsp = cl\_abap\_tstmp=>utclong2tstmp\_short( ts ). \\n\\ \\n CALL TRANSFORMATION demo\_st\_value \\n SOURCE date = dat \\n time = tim \\n datetime1 = ts \\n datetime2 = tsp \\n RESULT XML FINAL(xml). \\n\\ \\n out->write\_xml( xml ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_abap\_values.html abenst\_tt\_value\_elementary.html