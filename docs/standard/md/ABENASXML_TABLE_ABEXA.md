---
title: "ABENASXML_TABLE_ABEXA"
description: |
  ABENASXML_TABLE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENASXML_TABLE_ABEXA.htm"
abapFile: "ABENASXML_TABLE_ABEXA.html"
keywords: ["method", "class", "data", "internal-table", "ABENASXML", "TABLE", "ABEXA"]
---

This example demonstrates the mapping of internal tables.

Every line of the internal table `itab` is mapped to a subelement `item` of the table.

\* Public class definition \\nCLASS cl\_demo\_asxml\_table DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_table IMPLEMENTATION. \\n METHOD main. \\n DATA itab TYPE TABLE OF i. \\n\\ \\n itab = VALUE #( FOR j = 1 UNTIL j > 3 ( j ) ). \\n\\ \\n CALL TRANSFORMATION id \\n SOURCE table = itab \\n RESULT XML FINAL(xmlstr). \\n\\ \\n out->write\_xml( xmlstr ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_asxml\_table DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_table IMPLEMENTATION. \\n METHOD main. \\n DATA itab TYPE TABLE OF i. \\n\\ \\n itab = VALUE #( FOR j = 1 UNTIL j > 3 ( j ) ). \\n\\ \\n CALL TRANSFORMATION id \\n SOURCE table = itab \\n RESULT XML FINAL(xmlstr). \\n\\ \\n out->write\_xml( xmlstr ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html abenasxml\_abexas.html