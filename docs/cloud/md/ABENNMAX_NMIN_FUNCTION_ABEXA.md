---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNMAX_NMIN_FUNCTION_ABEXA.htm"
abapFile: "ABENNMAX_NMIN_FUNCTION_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENNMAX", "NMIN", "FUNCTION", "ABEXA"]
---

This example demonstrates the extremum functions [`nmax`](ABENNMAX_NMIN_FUNCTIONS.html) and [`nmin`](ABENNMAX_NMIN_FUNCTIONS.html).

This class determines the minimum or maximum value of a parabola opened up or down and whose parameters can be entered on the selection screen.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_nmax\_nmin DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_nmax\_nmin IMPLEMENTATION. \\n METHOD main. \\n DATA: a TYPE i VALUE 1, \\n b TYPE i VALUE 0, \\n c TYPE i VALUE 0. \\n cl\_demo\_input=>new( \\n )->add\_text( \`Parabola:\` \\n )->add\_field( CHANGING field = a \\n )->add\_field( CHANGING field = b \\n )->add\_field( CHANGING field = c )->request( ). \\n IF a = 0. \\n out->write( \\n 'You must enter a non-zero value for a' ). \\n RETURN. \\n ENDIF. \\n\\ \\n CONSTANTS: xmin TYPE i VALUE -100, \\n xmax TYPE i VALUE 100, \\n n TYPE i VALUE 20000. \\n DATA: x TYPE decfloat34, \\n y TYPE decfloat34, \\n y0 TYPE decfloat34. \\n DATA txt TYPE string. \\n\\ \\n DO n + 1 TIMES. \\n x = ( xmax - xmin ) / n \* ( sy-index - 1 ) + xmin. \\n y = a \* x \*\* 2 + b \* x + c. \\n IF sy-index = 1. \\n y0 = y. \\n ELSE. \\n IF a > 0. \\n txt = 'Minimum'. \\n y0 = nmin( val1 = y0 val2 = y ). \\n ELSE. \\n txt = 'Maximum'. \\n y0 = nmax( val1 = y0 val2 = y ). \\n ENDIF. \\n ENDIF. \\n ENDDO. \\n out->write( |\\{ txt \\} value of parabola is: \\{ y0 \\}| ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_nmax\_nmin DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_nmax\_nmin IMPLEMENTATION. \\n METHOD main. \\n DATA: a TYPE i VALUE 1, \\n b TYPE i VALUE 0, \\n c TYPE i VALUE 0. \\n cl\_demo\_input=>new( \\n )->add\_text( \`Parabola:\` \\n )->add\_field( CHANGING field = a \\n )->add\_field( CHANGING field = b \\n )->add\_field( CHANGING field = c )->request( ). \\n IF a = 0. \\n out->write( \\n 'You must enter a non-zero value for a' ). \\n RETURN. \\n ENDIF. \\n\\ \\n CONSTANTS: xmin TYPE i VALUE -100, \\n xmax TYPE i VALUE 100, \\n n TYPE i VALUE 20000. \\n DATA: x TYPE decfloat34, \\n y TYPE decfloat34, \\n y0 TYPE decfloat34. \\n DATA txt TYPE string. \\n\\ \\n DO n + 1 TIMES. \\n x = ( xmax - xmin ) / n \* ( sy-index - 1 ) + xmin. \\n y = a \* x \*\* 2 + b \* x + c. \\n IF sy-index = 1. \\n y0 = y. \\n ELSE. \\n IF a > 0. \\n txt = 'Minimum'. \\n y0 = nmin( val1 = y0 val2 = y ). \\n ELSE. \\n txt = 'Maximum'. \\n y0 = nmax( val1 = y0 val2 = y ). \\n ENDIF. \\n ENDIF. \\n ENDDO. \\n out->write( |\\{ txt \\} value of parabola is: \\{ y0 \\}| ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abenmathematical\_functions.html abennumerical\_functions\_abexas.html