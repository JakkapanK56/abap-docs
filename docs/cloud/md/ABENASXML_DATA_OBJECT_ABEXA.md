---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENASXML_DATA_OBJECT_ABEXA.htm"
abapFile: "ABENASXML_DATA_OBJECT_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENASXML", "DATA", "OBJECT", "ABEXA"]
---

The example demonstrates the mapping of anonymous data objects.

The anonymous data object referenced by `dref` is mapped to a subelement of the element `heap`. An XML reference mechanism is used to associate this subelement with the reference variables in the element `values`. The element name is the XML schema type name `precisionDecimal` of the built-in ABAP type `decfloat34` from the namespace `abap="http://www.sap.com/abapxml/types/built-in"`.

\* CCDEF \\nCLASS serializable DEFINITION. \\n PUBLIC SECTION. \\nENDCLASS. \\n\\ \\n\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_asxml\_data\_object DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_data\_object IMPLEMENTATION. \\n METHOD main. \\n DATA dref TYPE REF TO decfloat34. \\n DATA xmlstr TYPE xstring. \\n\\ \\n CREATE DATA dref. \\n dref->\* = '1.23456'. \\n CALL TRANSFORMATION id SOURCE dref = dref \\n RESULT XML xmlstr. \\n\\ \\n out->write\_xml( xmlstr ). \\n ENDMETHOD. \\nENDCLASS. \* CCDEF \\nCLASS serializable DEFINITION. \\n PUBLIC SECTION. \\nENDCLASS. \\n\\ \\n\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_asxml\_data\_object DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_data\_object IMPLEMENTATION. \\n METHOD main. \\n DATA dref TYPE REF TO decfloat34. \\n DATA xmlstr TYPE xstring. \\n\\ \\n CREATE DATA dref. \\n dref->\* = '1.23456'. \\n CALL TRANSFORMATION id SOURCE dref = dref \\n RESULT XML xmlstr. \\n\\ \\n out->write\_xml( xmlstr ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html abenasxml\_abexas.html