---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTABLE_EXP_SIDE_EFFECT_ABEXA.htm"
abapFile: "ABENTABLE_EXP_SIDE_EFFECT_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "field-symbol", "ABENTABLE", "EXP", "SIDE", "EFFECT", "ABEXA"]
---

This example demonstrates a possible side effect when field symbols are produced as the result.

A table expression is used to pass a line of an internal table and the internal table itself to a method. The passed line of the internal table is modified in the method by specifying a table expression on the left side of an assignment.

The critical point demonstrated here also produces a syntax check warning in the extended program check for performance reasons, if not hidden using the pragma `##operator`.

-   In the first method call, the table expression is passed by reference without the `VALUE` operator. The result is a temporary field symbol to which the read line is assigned throughout the entire method call. The change made to the line in the table also affects the formal parameter.
-   In the second method call, the table expression is passed by reference with the `VALUE` operator. The result is a temporary work area that exists throughout the entire method call. The change made to the line in the table does not affect the formal parameter.
-   The third and fourth method calls repeat the previous calls, but use pass by value instead of pass by reference. Pass by value does not produce any side effects, regardless of the result.

\* CCDEF \\nTYPES itab TYPE STANDARD TABLE OF i WITH EMPTY KEY. \\n\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_tab\_exp\_side\_effect DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS meth IMPORTING idx TYPE i \\n line1 TYPE i OPTIONAL \\n VALUE(line2) TYPE i OPTIONAL \\n CHANGING ptab TYPE itab. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_tab\_exp\_side\_effect IMPLEMENTATION. \\n METHOD main. \\n DATA(itab) = VALUE itab( ( 1 ) ( 2 ) ( 3 ) ( 4 ) ). \\n\\ \\n meth( EXPORTING idx = 1 \\n line1 = itab\[ 1 \] ##operator \\n CHANGING ptab = itab ). \\n\\ \\n meth( EXPORTING idx = 2 \\n line1 = VALUE #( itab\[ 2 \] ) \\n CHANGING ptab = itab ). \\n\\ \\n meth( EXPORTING idx = 3 \\n line2 = itab\[ 3 \] \\n CHANGING ptab = itab ). \\n\\ \\n meth( EXPORTING idx = 4 \\n line2 = VALUE #( itab\[ 4 \] ) \\n CHANGING ptab = itab ). \\n ENDMETHOD. \\n METHOD meth. \\n ptab\[ idx \] = 111. \\n IF line1 IS SUPPLIED. \\n out->write\_data( line1 ). \\n ELSEIF line2 IS SUPPLIED. \\n out->write\_data( line2 ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \* CCDEF \\nTYPES itab TYPE STANDARD TABLE OF i WITH EMPTY KEY. \\n\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_tab\_exp\_side\_effect DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS meth IMPORTING idx TYPE i \\n line1 TYPE i OPTIONAL \\n VALUE(line2) TYPE i OPTIONAL \\n CHANGING ptab TYPE itab. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_tab\_exp\_side\_effect IMPLEMENTATION. \\n METHOD main. \\n DATA(itab) = VALUE itab( ( 1 ) ( 2 ) ( 3 ) ( 4 ) ). \\n\\ \\n meth( EXPORTING idx = 1 \\n line1 = itab\[ 1 \] ##operator \\n CHANGING ptab = itab ). \\n\\ \\n meth( EXPORTING idx = 2 \\n line1 = VALUE #( itab\[ 2 \] ) \\n CHANGING ptab = itab ). \\n\\ \\n meth( EXPORTING idx = 3 \\n line2 = itab\[ 3 \] \\n CHANGING ptab = itab ). \\n\\ \\n meth( EXPORTING idx = 4 \\n line2 = VALUE #( itab\[ 4 \] ) \\n CHANGING ptab = itab ). \\n ENDMETHOD. \\n METHOD meth. \\n ptab\[ idx \] = 111. \\n IF line1 IS SUPPLIED. \\n out->write\_data( line1 ). \\n ELSEIF line2 IS SUPPLIED. \\n out->write\_data( line2 ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abentable\_expressions.html abentable\_exp\_result.html