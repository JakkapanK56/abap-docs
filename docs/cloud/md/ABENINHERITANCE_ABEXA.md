---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENINHERITANCE_ABEXA.htm"
abapFile: "ABENINHERITANCE_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENINHERITANCE", "ABEXA"]
---

This example demonstrates how a counter is specialized using inheritance.

The local class `counter_ten` is derived from `counter` and redefines the method `increment`. In `counter`, the visibility of the attribute `count` must be set from `PRIVATE` to `PROTECTED`. In the redefined method, the hidden method with the pseudo reference `super->` is called. The redefined method specializes the inherited method.

An object of the subclass is created to which a reference variable of the superclass type points. When the method `increment` is executed using the superclass reference, the redefined method of the subclass is executed.

\* CCDEF \\nCLASS o DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA out TYPE REF TO if\_demo\_output. \\nENDCLASS. \\n\\ \\n\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_inheritance DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* CCIMP \\nCLASS counter DEFINITION. \\n PUBLIC SECTION. \\n METHODS: \\n set \\n IMPORTING VALUE(set\_value) TYPE i, \\n increment, \\n get \\n EXPORTING VALUE(get\_value) TYPE i. \\n PROTECTED SECTION. \\n DATA count TYPE i. \\nENDCLASS. \\n\\ \\nCLASS counter IMPLEMENTATION. \\n METHOD set. \\n count = set\_value. \\n ENDMETHOD. \\n METHOD increment. \\n count += 1. \\n ENDMETHOD. \\n METHOD get. \\n get\_value = count. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS counter\_ten DEFINITION INHERITING FROM counter. \\n PUBLIC SECTION. \\n METHODS increment REDEFINITION. \\n DATA count\_ten TYPE c LENGTH 1. \\nENDCLASS. \\n\\ \\nCLASS counter\_ten IMPLEMENTATION. \\n METHOD increment. \\n DATA modulo TYPE i. \\n super->increment( ). \\n modulo = count MOD 10. \\n IF modulo = 0. \\n count\_ten += 1. \\n o=>out->write\_text( \\n |\\{ count \\} - \\{ count\_ten \\}| ). \\n ELSE. \\n o=>out->write\_text( |\\{ count \\}| ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_inheritance IMPLEMENTATION. \\n METHOD main. \\n o=>out = out. \\n\\ \\n DATA: count TYPE REF TO counter, \\n number TYPE i VALUE 5. \\n\\ \\n count = NEW counter\_ten( ). \\n\\ \\n count->set( number ). \\n\\ \\n DO 20 TIMES. \\n count->increment( ). \\n ENDDO. \\n ENDMETHOD. \\nENDCLASS. \* CCDEF \\nCLASS o DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA out TYPE REF TO if\_demo\_output. \\nENDCLASS. \\n\\ \\n\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_inheritance DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* CCIMP \\nCLASS counter DEFINITION. \\n PUBLIC SECTION. \\n METHODS: \\n set \\n IMPORTING VALUE(set\_value) TYPE i, \\n increment, \\n get \\n EXPORTING VALUE(get\_value) TYPE i. \\n PROTECTED SECTION. \\n DATA count TYPE i. \\nENDCLASS. \\n\\ \\nCLASS counter IMPLEMENTATION. \\n METHOD set. \\n count = set\_value. \\n ENDMETHOD. \\n METHOD increment. \\n count += 1. \\n ENDMETHOD. \\n METHOD get. \\n get\_value = count. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS counter\_ten DEFINITION INHERITING FROM counter. \\n PUBLIC SECTION. \\n METHODS increment REDEFINITION. \\n DATA count\_ten TYPE c LENGTH 1. \\nENDCLASS. \\n\\ \\nCLASS counter\_ten IMPLEMENTATION. \\n METHOD increment. \\n DATA modulo TYPE i. \\n super->increment( ). \\n modulo = count MOD 10. \\n IF modulo = 0. \\n count\_ten += 1. \\n o=>out->write\_text( \\n |\\{ count \\} - \\{ count\_ten \\}| ). \\n ELSE. \\n o=>out->write\_text( |\\{ count \\}| ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_inheritance IMPLEMENTATION. \\n METHOD main. \\n o=>out = out. \\n\\ \\n DATA: count TYPE REF TO counter, \\n number TYPE i VALUE 5. \\n\\ \\n count = NEW counter\_ten( ). \\n\\ \\n count->set( number ). \\n\\ \\n DO 20 TIMES. \\n count->increment( ). \\n ENDDO. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_objects.html abenabap\_objects\_abexas.html