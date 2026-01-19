---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCLASS_ABEXA.htm"
abapFile: "ABENCLASS_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENCLASS", "ABEXA"]
---

This example demonstrates a class for counters.

The local class `counter` contains three public methods, `set`, `increment`, and `get`, which work with the private integer field `count`. Two of the methods have input and output parameters and therefore define the data interface of the class. The field `count`, on the other hand, is not visible externally.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_class\_counter DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* CCIMP \\nCLASS counter DEFINITION. \\n PUBLIC SECTION. \\n METHODS: set \\n IMPORTING VALUE(set\_value) TYPE i, \\n increment, \\n get \\n EXPORTING VALUE(get\_value) TYPE i. \\n PRIVATE SECTION. \\n DATA count TYPE i. \\nENDCLASS. \\n\\ \\nCLASS counter IMPLEMENTATION. \\n METHOD set. \\n count = set\_value. \\n ENDMETHOD. \\n METHOD increment. \\n count += 1. \\n ENDMETHOD. \\n METHOD get. \\n get\_value = count. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_class\_counter IMPLEMENTATION. \\n METHOD main. \\n DATA number TYPE i VALUE 5. \\n FINAL(cnt) = NEW counter( ). \\n\\ \\n cnt->set( number ). \\n\\ \\n DO 3 TIMES. \\n cnt->increment( ). \\n ENDDO. \\n\\ \\n cnt->get( IMPORTING get\_value = number ). \\n\\ \\n out->write( number ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_class\_counter DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* CCIMP \\nCLASS counter DEFINITION. \\n PUBLIC SECTION. \\n METHODS: set \\n IMPORTING VALUE(set\_value) TYPE i, \\n increment, \\n get \\n EXPORTING VALUE(get\_value) TYPE i. \\n PRIVATE SECTION. \\n DATA count TYPE i. \\nENDCLASS. \\n\\ \\nCLASS counter IMPLEMENTATION. \\n METHOD set. \\n count = set\_value. \\n ENDMETHOD. \\n METHOD increment. \\n count += 1. \\n ENDMETHOD. \\n METHOD get. \\n get\_value = count. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_class\_counter IMPLEMENTATION. \\n METHOD main. \\n DATA number TYPE i VALUE 5. \\n FINAL(cnt) = NEW counter( ). \\n\\ \\n cnt->set( number ). \\n\\ \\n DO 3 TIMES. \\n cnt->increment( ). \\n ENDDO. \\n\\ \\n cnt->get( IMPORTING get\_value = number ). \\n\\ \\n out->write( number ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_objects.html abenabap\_objects\_abexas.html