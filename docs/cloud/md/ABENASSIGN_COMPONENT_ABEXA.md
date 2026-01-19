---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENASSIGN_COMPONENT_ABEXA.htm"
abapFile: "ABENASSIGN_COMPONENT_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "field-symbol", "ABENASSIGN", "COMPONENT", "ABEXA"]
---

This example demonstrates dynamic assignments of structure components using `ASSIGN`.

A structure is assigned to a generically typed field symbol. Using the field symbol the individual components of the structure can be addressed dynamically only. This example shows different ways of doing so and measures their runtime. Using the position is better for performance than using the name.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_assign\_component\_v5 DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_assign\_component\_v5 IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n BEGIN OF struc, \\n comp1 TYPE i, \\n comp2 TYPE i, \\n comp3 TYPE i, \\n END OF struc, \\n name TYPE string, \\n t1 TYPE utclong, \\n t2 TYPE utclong, \\n tr TYPE decfloat34. \\n FIELD-SYMBOLS: TYPE any, \\n TYPE any. \\n\\ \\n ASSIGN struc TO . \\n\\ \\n name = \`COMP1\`. \\n t1 = utclong\_current( ). \\n DO 1000 TIMES. \\n ASSIGN \-(name) TO . \\n ENDDO. \\n t2 = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = tr ). \\n out->write( |ASSIGN \-(name): \\{ tr \\}| ). \\n\\ \\n t1 = utclong\_current( ). \\n DO 1000 TIMES. \\n ASSIGN \-(1) TO . \\n ENDDO. \\n t2 = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = tr ). \\n out->write( |ASSIGN \-(1): \\{ tr \\}| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_assign\_component\_v5 DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_assign\_component\_v5 IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n BEGIN OF struc, \\n comp1 TYPE i, \\n comp2 TYPE i, \\n comp3 TYPE i, \\n END OF struc, \\n name TYPE string, \\n t1 TYPE utclong, \\n t2 TYPE utclong, \\n tr TYPE decfloat34. \\n FIELD-SYMBOLS: TYPE any, \\n TYPE any. \\n\\ \\n ASSIGN struc TO . \\n\\ \\n name = \`COMP1\`. \\n t1 = utclong\_current( ). \\n DO 1000 TIMES. \\n ASSIGN \-(name) TO . \\n ENDDO. \\n t2 = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = tr ). \\n out->write( |ASSIGN \-(name): \\{ tr \\}| ). \\n\\ \\n t1 = utclong\_current( ). \\n DO 1000 TIMES. \\n ASSIGN \-(1) TO . \\n ENDDO. \\n t2 = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = tr ). \\n out->write( |ASSIGN \-(1): \\{ tr \\}| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_field\_symbols.html abapassign.html abapassign\_mem\_area.html abapassign\_dynamic\_components.html