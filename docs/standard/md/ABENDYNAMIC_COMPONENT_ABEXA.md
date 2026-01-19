---
title: "ABENDYNAMIC_COMPONENT_ABEXA"
description: |
  ABENDYNAMIC_COMPONENT_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNAMIC_COMPONENT_ABEXA.htm"
abapFile: "ABENDYNAMIC_COMPONENT_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "field-symbol", "ABENDYNAMIC", "COMPONENT", "ABEXA"]
---

This example demonstrates dynamic access to structure components.

A structure is assigned to a generically typed field symbol. Using the field symbol the individual components of the structure can be addressed dynamically only. This example shows different ways of doing so and measures their runtime. Using the position is better for performance than using the name.

\* Public class definition \\nCLASS cl\_demo\_dynamic\_components DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_dynamic\_components IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n BEGIN OF struc, \\n comp1 TYPE i, \\n comp2 TYPE i, \\n comp3 TYPE i, \\n END OF struc, \\n name TYPE string, \\n t1 TYPE utclong, \\n t2 TYPE utclong, \\n tr TYPE decfloat34, \\n comp TYPE i. \\n\\ \\n name = \`COMP3\`. \\n t1 = utclong\_current( ). \\n DO 1000 TIMES. \\n comp = struc-(name). \\n ENDDO. \\n t2 = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = tr ). \\n out->write( |\-(name): \\{ tr \\}| ). \\n\\ \\n t1 = utclong\_current( ). \\n DO 1000 TIMES. \\n comp = struc-(3). \\n ENDDO. \\n t2 = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = tr ). \\n out->write( |\-(1): \\{ tr \\}| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_dynamic\_components DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_dynamic\_components IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n BEGIN OF struc, \\n comp1 TYPE i, \\n comp2 TYPE i, \\n comp3 TYPE i, \\n END OF struc, \\n name TYPE string, \\n t1 TYPE utclong, \\n t2 TYPE utclong, \\n tr TYPE decfloat34, \\n comp TYPE i. \\n\\ \\n name = \`COMP3\`. \\n t1 = utclong\_current( ). \\n DO 1000 TIMES. \\n comp = struc-(name). \\n ENDDO. \\n t2 = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = tr ). \\n out->write( |\-(name): \\{ tr \\}| ). \\n\\ \\n t1 = utclong\_current( ). \\n DO 1000 TIMES. \\n comp = struc-(3). \\n ENDDO. \\n t2 = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = tr ). \\n out->write( |\-(1): \\{ tr \\}| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenoperands.html abenoperands\_data\_objects.html abenoperands\_names.html abenstructure\_component\_selector.html