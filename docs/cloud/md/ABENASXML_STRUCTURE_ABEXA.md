---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENASXML_STRUCTURE_ABEXA.htm"
abapFile: "ABENASXML_STRUCTURE_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENASXML", "STRUCTURE", "ABEXA"]
---

This example demonstrates the mapping of structures.

The structure `struct` is mapped as a superordinate XML element for its components.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_asxml\_structure DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_structure IMPLEMENTATION. \\n METHOD main. \\n DATA: BEGIN OF struct, \\n num TYPE i VALUE 20, \\n dat TYPE d VALUE '20060627', \\n END OF struct, \\n xmlstr TYPE xstring. \\n\\ \\n CALL TRANSFORMATION id \\n SOURCE structure = struct \\n RESULT XML xmlstr. \\n\\ \\n out->write\_xml( xmlstr ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_asxml\_structure DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_structure IMPLEMENTATION. \\n METHOD main. \\n DATA: BEGIN OF struct, \\n num TYPE i VALUE 20, \\n dat TYPE d VALUE '20060627', \\n END OF struct, \\n xmlstr TYPE xstring. \\n\\ \\n CALL TRANSFORMATION id \\n SOURCE structure = struct \\n RESULT XML xmlstr. \\n\\ \\n out->write\_xml( xmlstr ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html abenasxml\_abexas.html