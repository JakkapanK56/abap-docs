---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREDUCE_TYPE_INFERENCE_ABEXA.htm"
abapFile: "ABENREDUCE_TYPE_INFERENCE_ABEXA.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "ABENREDUCE", "TYPE", "INFERENCE", "ABEXA"]
---

This example demonstrates a type inference for the conversion operator [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html).

Constructor expressions with the conversion operator [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html) are passed to differently typed formal parameters of methods. In the case of generic formal parameters, [special rules](ABENREDUCE_CONSTRUCTOR_INFERENCE.html) apply when determining the operand type.

-   Completely typed formal parameter
-   When the method `meth1` is called with a completely typed formal parameter, the operand type for `#` is determined by this parameter and the result of the reduction is converted to `c` with length 10 in both calls.
-   Formal parameter typed generically with `c`
-   The operand type for `#` is determined by the first declaration after `INIT`.

-   In the first call, the type `c` with length 20 of the declaration after `INIT` matches the generic type and is used.
-   It is not possible to perform a call with the type `i` of the declaration after `INIT`, since it does not match the typing and there are no inference rules for the generic type `c`.

-   Formal parameter typed generically with `csequence`

-   In the first call, the type `c` with length 20 of the declaration after `INIT` matches the generic type and is used.
-   In the second call, the type `i` of the declaration after `INIT` does not match the generic type and the type `string` is used, which is indicated by a syntax check warning.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_reduce\_type\_inference DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n TYPES c10 TYPE c LENGTH 10. \\n METHODS: \\n meth1 IMPORTING p TYPE c10, \\n meth2 IMPORTING p TYPE c, \\n meth3 IMPORTING p TYPE csequence, \\n descr IMPORTING p TYPE any. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_reduce\_type\_inference IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA txt TYPE c LENGTH 20. \\n DATA num TYPE i. \\n\\ \\n me->meth1( \\n p = REDUCE #( INIT r1 = txt \\n FOR i = 1 \\n UNTIL i > 9 \\n NEXT r1 &&= 'x' ) ). \\n me->meth1( \\n p = REDUCE #( INIT r2 = num \\n FOR i = 1 \\n UNTIL i > 9 \\n NEXT r2 += 1 ) ). \\n out->line( ). \\n\\ \\n me->meth2( \\n p = REDUCE #( INIT r1 = txt \\n FOR i = 1 \\n UNTIL i > 9 \\n NEXT r1 &&= 'x' ) ). \\n "me->meth2( \\n " p = REDUCE #( INIT r2 = num \\n " FOR i = 1 \\n " UNTIL i > 9 \\n " NEXT r2 +=+ 1 ) ). "not possible \\n out->line( ). \\n\\ \\n me->meth3( \\n p = REDUCE #( INIT r1 = txt \\n FOR i = 1 \\n UNTIL i > 9 \\n NEXT r1 &&= 'x' ) ). \\n me->meth3( \\n p = REDUCE #( INIT r2 = num \\n FOR i = 1 \\n UNTIL i > 9 \\n NEXT r2 += 1 ) ) ##type. \\n ENDMETHOD. \\n METHOD descr. \\n DATA type TYPE string. \\n DATA length TYPE i. \\n\\ \\n DATA(datadescr) = CAST cl\_abap\_datadescr( \\n cl\_abap\_typedescr=>describe\_by\_data( p ) ). \\n\\ \\n type = datadescr->type\_kind. \\n IF type = 'g'. \\n type = 'STRING'. \\n length = strlen( p ). \\n ELSE. \\n length = datadescr->length / cl\_abap\_char\_utilities=>charsize. \\n ENDIF. \\n out->write( |\\{ type \\} \\{ length \\}| ). \\n ENDMETHOD. \\n METHOD meth1. \\n descr( p ). \\n ENDMETHOD. \\n METHOD meth2. \\n descr( p ). \\n ENDMETHOD. \\n METHOD meth3. \\n descr( p ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_reduce\_type\_inference DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n TYPES c10 TYPE c LENGTH 10. \\n METHODS: \\n meth1 IMPORTING p TYPE c10, \\n meth2 IMPORTING p TYPE c, \\n meth3 IMPORTING p TYPE csequence, \\n descr IMPORTING p TYPE any. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_reduce\_type\_inference IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA txt TYPE c LENGTH 20. \\n DATA num TYPE i. \\n\\ \\n me->meth1( \\n p = REDUCE #( INIT r1 = txt \\n FOR i = 1 \\n UNTIL i > 9 \\n NEXT r1 &&= 'x' ) ). \\n me->meth1( \\n p = REDUCE #( INIT r2 = num \\n FOR i = 1 \\n UNTIL i > 9 \\n NEXT r2 += 1 ) ). \\n out->line( ). \\n\\ \\n me->meth2( \\n p = REDUCE #( INIT r1 = txt \\n FOR i = 1 \\n UNTIL i > 9 \\n NEXT r1 &&= 'x' ) ). \\n "me->meth2( \\n " p = REDUCE #( INIT r2 = num \\n " FOR i = 1 \\n " UNTIL i > 9 \\n " NEXT r2 +=+ 1 ) ). "not possible \\n out->line( ). \\n\\ \\n me->meth3( \\n p = REDUCE #( INIT r1 = txt \\n FOR i = 1 \\n UNTIL i > 9 \\n NEXT r1 &&= 'x' ) ). \\n me->meth3( \\n p = REDUCE #( INIT r2 = num \\n FOR i = 1 \\n UNTIL i > 9 \\n NEXT r2 += 1 ) ) ##type. \\n ENDMETHOD. \\n METHOD descr. \\n DATA type TYPE string. \\n DATA length TYPE i. \\n\\ \\n DATA(datadescr) = CAST cl\_abap\_datadescr( \\n cl\_abap\_typedescr=>describe\_by\_data( p ) ). \\n\\ \\n type = datadescr->type\_kind. \\n IF type = 'g'. \\n type = 'STRING'. \\n length = strlen( p ). \\n ELSE. \\n length = datadescr->length / cl\_abap\_char\_utilities=>charsize. \\n ENDIF. \\n out->write( |\\{ type \\} \\{ length \\}| ). \\n ENDMETHOD. \\n METHOD meth1. \\n descr( p ). \\n ENDMETHOD. \\n METHOD meth2. \\n descr( p ). \\n ENDMETHOD. \\n METHOD meth3. \\n descr( p ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abeniteration\_expressions.html abenconstructor\_expression\_reduce.html