---
title: "ABENASXML_STRUCTURE_ABEXA"
description: |
  ABENASXML_STRUCTURE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENASXML_STRUCTURE_ABEXA.htm"
abapFile: "ABENASXML_STRUCTURE_ABEXA.html"
keywords: ["method", "class", "data", "ABENASXML", "STRUCTURE", "ABEXA"]
---

This example demonstrates the mapping of structures.

The structure `struct` is mapped as a superordinate XML element for its components.

\* Public class definition \\nCLASS cl\_demo\_asxml\_structure DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_structure IMPLEMENTATION. \\n METHOD main. \\n DATA: BEGIN OF struct, \\n num TYPE i VALUE 20, \\n dat TYPE d VALUE '20060627', \\n END OF struct, \\n xmlstr TYPE xstring. \\n\\ \\n CALL TRANSFORMATION id \\n SOURCE structure = struct \\n RESULT XML xmlstr. \\n\\ \\n out->write\_xml( xmlstr ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_asxml\_structure DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_structure IMPLEMENTATION. \\n METHOD main. \\n DATA: BEGIN OF struct, \\n num TYPE i VALUE 20, \\n dat TYPE d VALUE '20060627', \\n END OF struct, \\n xmlstr TYPE xstring. \\n\\ \\n CALL TRANSFORMATION id \\n SOURCE structure = struct \\n RESULT XML xmlstr. \\n\\ \\n out->write\_xml( xmlstr ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html abenasxml\_abexas.html