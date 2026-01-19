---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENASXML_OBJECT_ABEXA.htm"
abapFile: "ABENASXML_OBJECT_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENASXML", "OBJECT", "ABEXA"]
---

This example demonstrates the mapping of referenced objects.

The attributes of the object referenced by `oref` are mapped to subelements of the `heap` element. The association between the reference variables in the `values` element and the object in `heap` takes place using an XML reference mechanism.

\* CCDEF \\nCLASS serializable DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES if\_serializable\_object. \\n DATA attr TYPE string VALUE \`Attribute\`. \\nENDCLASS. \\n\\ \\n\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_asxml\_object DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_object IMPLEMENTATION. \\n METHOD main. \\n DATA: oref TYPE REF TO serializable, \\n xmlstr TYPE xstring. \\n\\ \\n CREATE OBJECT oref. \\n\\ \\n CALL TRANSFORMATION id \\n SOURCE object = oref \\n RESULT XML xmlstr. \\n\\ \\n out->write\_xml( xmlstr ). \\n ENDMETHOD. \\nENDCLASS. \* CCDEF \\nCLASS serializable DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES if\_serializable\_object. \\n DATA attr TYPE string VALUE \`Attribute\`. \\nENDCLASS. \\n\\ \\n\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_asxml\_object DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_object IMPLEMENTATION. \\n METHOD main. \\n DATA: oref TYPE REF TO serializable, \\n xmlstr TYPE xstring. \\n\\ \\n CREATE OBJECT oref. \\n\\ \\n CALL TRANSFORMATION id \\n SOURCE object = oref \\n RESULT XML xmlstr. \\n\\ \\n out->write\_xml( xmlstr ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html abenasxml\_abexas.html