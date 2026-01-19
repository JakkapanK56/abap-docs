---
title: "ABENST_TABLE_ABEXA"
description: |
  ABENST_TABLE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TABLE_ABEXA.htm"
abapFile: "ABENST_TABLE_ABEXA.html"
keywords: ["select", "insert", "loop", "method", "class", "data", "internal-table", "ABENST", "TABLE", "ABEXA"]
---

The example demonstrates the serializing of an internal table.

An internal table `carrier_tab` is filled with data from the database table `SCARR` and is transformed to XML using the Simple Transformation `DEMO_ST_TABLE`. The ST program is as follows:

<?sap.transform simple?>\\ \\n<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">\\ \\n  <tt:root name="CARRIERS"/>\\ \\n  <tt:template>\\ \\n    <html>\\ \\n      <body>\\ \\n        <h2>Carriers:</h2>\\ \\n        <table border="2">\\ \\n          <tr>\\ \\n            <td><b>Id</b></td>\\ \\n            <td><b>Name</b></td>\\ \\n            <td><b>Homepage</b></td>\\ \\n          </tr>\\ \\n          <tt:loop ref=".CARRIERS">\\ \\n            <tr><td>\\ \\n                <tt:value ref="$ref.carrid"/>\\ \\n              </td>\\ \\n              <td>\\ \\n                <tt:value ref="$ref.carrname"/>\\ \\n              </td>\\ \\n              <td>\\ \\n               <a><tt:attribute name="href" value-ref="$ref.url" />\\ \\n                 <tt:value ref="$ref.url"/></a>\\ \\n              </td>\\ \\n            </tr>\\ \\n          </tt:loop>\\ \\n        </table>\\ \\n      </body>\\ \\n    </html>\\ \\n  </tt:template>\\ \\n</tt:transform>

The transformation uses the ST statement `[tt:loop](ABENST_TT_LOOP.html)` to serialize the other internal tables line by line. HTML tags are inserted into the XML data as literal elements.

The result of the transformation is first shown as an XML file and then as formatted HTML data below.

\* Public class definition \\nCLASS cl\_demo\_st\_table DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_st\_table IMPLEMENTATION. \\n METHOD main. \\n DATA: BEGIN OF carrier\_wa, \\n carrid TYPE scarr-carrid, \\n carrname TYPE scarr-carrname, \\n url TYPE scarr-url, \\n END OF carrier\_wa, \\n carrier\_tab LIKE TABLE OF carrier\_wa, \\n xml TYPE xstring, \\n html TYPE string. \\n\\ \\n SELECT \* \\n FROM scarr \\n INTO CORRESPONDING FIELDS OF TABLE @carrier\_tab. \\n\\ \\n CALL TRANSFORMATION demo\_st\_table \\n SOURCE carriers = carrier\_tab \\n RESULT XML xml. \\n out->write\_xml( xml ). \\n\\ \\n CALL TRANSFORMATION demo\_st\_table \\n SOURCE carriers = carrier\_tab \\n RESULT XML html \\n OPTIONS xml\_header = 'NO'. \\n out->write\_html( html ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_st\_table DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_st\_table IMPLEMENTATION. \\n METHOD main. \\n DATA: BEGIN OF carrier\_wa, \\n carrid TYPE scarr-carrid, \\n carrname TYPE scarr-carrname, \\n url TYPE scarr-url, \\n END OF carrier\_wa, \\n carrier\_tab LIKE TABLE OF carrier\_wa, \\n xml TYPE xstring, \\n html TYPE string. \\n\\ \\n SELECT \* \\n FROM scarr \\n INTO CORRESPONDING FIELDS OF TABLE @carrier\_tab. \\n\\ \\n CALL TRANSFORMATION demo\_st\_table \\n SOURCE carriers = carrier\_tab \\n RESULT XML xml. \\n out->write\_xml( xml ). \\n\\ \\n CALL TRANSFORMATION demo\_st\_table \\n SOURCE carriers = carrier\_tab \\n RESULT XML html \\n OPTIONS xml\_header = 'NO'. \\n out->write\_html( html ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_abexas.html