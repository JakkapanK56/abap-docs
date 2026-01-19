---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONVERSION_COSTS_ABEXA.htm"
abapFile: "ABENCONVERSION_COSTS_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENCONVERSION", "COSTS", "ABEXA"]
---

This example demonstrates costs for type conversions in assignments and operand positions.

The class calculates the ratio of the costs of a conversion from type `n` to `i` and the costs of a direct memory copy from type `i` to `i`. The conversion is much slower than the unconverted copy, which is visible directly in the assignment. The difference is less significant in an operand position, here when specifying the index of a `READ` statement. This is because the conversion costs are not as high as for a table access.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_conversion\_costs DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_conversion\_costs IMPLEMENTATION. \\n METHOD main. \\n DATA: num TYPE n LENGTH 10, \\n int TYPE i, \\n itab TYPE STANDARD TABLE OF i, \\n t1 TYPE utclong, \\n t2 TYPE utclong, \\n tn TYPE decfloat34, \\n ti TYPE decfloat34, \\n seconds TYPE decfloat34. \\n CONSTANTS n TYPE i VALUE 100000. \\n\\ \\n t1 = utclong\_current( ). \\n DO n TIMES. \\n ENDDO. \\n t2 = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = DATA(toff1) ). \\n\\ \\n\\ \\n t1 = utclong\_current( ). \\n DO n TIMES. \\n num = sy-index. \\n ENDDO. \\n t2 = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = DATA(toff2) ). \\n\\ \\n tn = toff2 - toff1. \\n\\ \\n t1 = utclong\_current( ). \\n DO n TIMES. \\n int = sy-index. \\n ENDDO. \\n t2 = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = DATA(toff3) ). \\n ti = toff3 - toff1. \\n\\ \\n out->write( \\n |Ratio of conversion to copy during assignment: | && \\n |\\{ tn / ti DECIMALS = 2 \\}| ). \\n\\ \\n itab = VALUE #( ( 1 ) ). \\n CLEAR: tn, ti. \\n\\ \\n num = '1'. \\n t1 = utclong\_current( ). \\n DO n TIMES. \\n READ TABLE itab TRANSPORTING NO FIELDS INDEX num. \\n ENDDO. \\n t2 = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = DATA(toff4) ). \\n tn = toff4 - toff1. \\n\\ \\n int = 1. \\n t1 = utclong\_current( ). \\n DO n TIMES. \\n READ TABLE itab TRANSPORTING NO FIELDS INDEX int. \\n ENDDO. \\n t2 = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = DATA(toff5) ). \\n ti = toff5 - toff1. \\n\\ \\n out->write( \\n |Ratio of conversion to copy during assignment: | && \\n |\\{ tn / ti DECIMALS = 2 \\}| ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_conversion\_costs DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_conversion\_costs IMPLEMENTATION. \\n METHOD main. \\n DATA: num TYPE n LENGTH 10, \\n int TYPE i, \\n itab TYPE STANDARD TABLE OF i, \\n t1 TYPE utclong, \\n t2 TYPE utclong, \\n tn TYPE decfloat34, \\n ti TYPE decfloat34, \\n seconds TYPE decfloat34. \\n CONSTANTS n TYPE i VALUE 100000. \\n\\ \\n t1 = utclong\_current( ). \\n DO n TIMES. \\n ENDDO. \\n t2 = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = DATA(toff1) ). \\n\\ \\n\\ \\n t1 = utclong\_current( ). \\n DO n TIMES. \\n num = sy-index. \\n ENDDO. \\n t2 = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = DATA(toff2) ). \\n\\ \\n tn = toff2 - toff1. \\n\\ \\n t1 = utclong\_current( ). \\n DO n TIMES. \\n int = sy-index. \\n ENDDO. \\n t2 = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = DATA(toff3) ). \\n ti = toff3 - toff1. \\n\\ \\n out->write( \\n |Ratio of conversion to copy during assignment: | && \\n |\\{ tn / ti DECIMALS = 2 \\}| ). \\n\\ \\n itab = VALUE #( ( 1 ) ). \\n CLEAR: tn, ti. \\n\\ \\n num = '1'. \\n t1 = utclong\_current( ). \\n DO n TIMES. \\n READ TABLE itab TRANSPORTING NO FIELDS INDEX num. \\n ENDDO. \\n t2 = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = DATA(toff4) ). \\n tn = toff4 - toff1. \\n\\ \\n int = 1. \\n t1 = utclong\_current( ). \\n DO n TIMES. \\n READ TABLE itab TRANSPORTING NO FIELDS INDEX int. \\n ENDDO. \\n t2 = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = DATA(toff5) ). \\n ti = toff5 - toff1. \\n\\ \\n out->write( \\n |Ratio of conversion to copy during assignment: | && \\n |\\{ tn / ti DECIMALS = 2 \\}| ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html abenconversion\_perfo.html