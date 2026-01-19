---
title: "ABENCOND_TYPE_INFERENCE_ABEXA"
description: |
  ABENCOND_TYPE_INFERENCE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCOND_TYPE_INFERENCE_ABEXA.htm"
abapFile: "ABENCOND_TYPE_INFERENCE_ABEXA.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "field-symbol", "ABENCOND", "TYPE", "INFERENCE", "ABEXA"]
---

This example demonstrates a type inference for the conversion operator [`COND`](ABENCONDITIONAL_EXPRESSION_COND.html).

Constructor expressions with the conditional operator [`COND`](ABENCONDITIONAL_EXPRESSION_COND.html) are passed to differently typed formal parameters of methods. In the case of generic formal parameters, [special rules](ABENCOND_CONSTRUCTOR_INFERENCE.html) apply when determining the operand type. Replacing the conditional operator `COND` with [`SWITCH`](ABENCONDITIONAL_EXPRESSION_SWITCH.html) produces the same results.

-   Completely typed formal parameter
-   When the method `meth1` is called with a completely typed formal parameter, the operand type for `#` is determined using this parameter and the result of the conditional expression is converted to `c` with length 10 in all three calls.
-   Formal parameter typed generically with `c`
-   The operand type for `#` is determined from the data type of the operand after `THEN`.

-   In the first call, the type `c` with length 20 of the operand after `THEN` matches the generic type and is used.
-   In the second call, the type `i` of the operand after `THEN` does not match the generic type and the call is not possible.
-   In the third call, no type can be derived from the generically typed field symbol `<fs>` after `THEN`. No call is possible here, since there is no inference rule for the generic type `c`.

-   Formal parameter typed generically with `csequence`

-   In the first call, the type `c` with length 20 of the operand after `THEN` matches the generic type and is used.
-   In the second call, the type `i` of the operand after `THEN` does not match the generic type and the type `string` is used, which is indicated by a syntax check warning.
-   In the third call, no type is derived from the generically typed field symbol `<fs>` after `THEN` and the type `string` is used, which is indicated by a syntax check warning.

\* Public class definition \\nCLASS cl\_demo\_cond\_type\_inference DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n TYPES: \\n c10 TYPE c LENGTH 10 . \\n METHODS meth1 \\n IMPORTING \\n !p TYPE c10 . \\n METHODS meth2 \\n IMPORTING \\n !p TYPE c . \\n METHODS meth3 \\n IMPORTING \\n !p TYPE csequence . \\n METHODS descr \\n IMPORTING \\n !p TYPE any . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cond\_type\_inference IMPLEMENTATION. \\n METHOD main. \\n FIELD-SYMBOLS TYPE any. \\n DATA txt TYPE c LENGTH 20. \\n DATA num TYPE i. \\n ASSIGN num TO . \\n\\ \\n me->meth1( \\n p = COND #( WHEN 1 = 1 THEN txt ) ). \\n me->meth1( \\n p = COND #( WHEN 1 = 1 THEN txt ) ). \\n me->meth1( \\n p = COND #( WHEN 1 = 1 THEN ) ). \\n out->line( ). \\n\\ \\n me->meth2( \\n p = COND #( WHEN 1 = 1 THEN txt ) ). \\n "me->meth2( \\n " p = COND #( WHEN 1 = 1 THEN num ) ). "not possible \\n "me->meth2( \\n " p = COND #( WHEN 1 = 1 THEN ) ). "not possible \\n out->line( ). \\n\\ \\n me->meth3( \\n p = COND #( WHEN 1 = 1 THEN txt ) ). \\n me->meth3( \\n p = COND #( WHEN 1 = 1 THEN num ) ) ##type. \\n me->meth3( \\n p = COND #( WHEN 1 = 1 THEN ) ) ##type. \\n ENDMETHOD. \\n METHOD descr. \\n DATA type TYPE string. \\n DATA length TYPE i. \\n\\ \\n DATA(datadescr) = CAST cl\_abap\_datadescr( \\n cl\_abap\_typedescr=>describe\_by\_data( p ) ). \\n\\ \\n type = datadescr->type\_kind. \\n IF type = 'g'. \\n type = 'STRING'. \\n length = strlen( p ). \\n ELSE. \\n length = datadescr->length / cl\_abap\_char\_utilities=>charsize. \\n ENDIF. \\n out->write( |\\{ type \\} \\{ length \\}| ). \\n ENDMETHOD. \\n METHOD meth1. \\n descr( p ). \\n ENDMETHOD. \\n METHOD meth2. \\n descr( p ). \\n ENDMETHOD. \\n METHOD meth3. \\n descr( p ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_cond\_type\_inference DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n TYPES: \\n c10 TYPE c LENGTH 10 . \\n METHODS meth1 \\n IMPORTING \\n !p TYPE c10 . \\n METHODS meth2 \\n IMPORTING \\n !p TYPE c . \\n METHODS meth3 \\n IMPORTING \\n !p TYPE csequence . \\n METHODS descr \\n IMPORTING \\n !p TYPE any . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cond\_type\_inference IMPLEMENTATION. \\n METHOD main. \\n FIELD-SYMBOLS TYPE any. \\n DATA txt TYPE c LENGTH 20. \\n DATA num TYPE i. \\n ASSIGN num TO . \\n\\ \\n me->meth1( \\n p = COND #( WHEN 1 = 1 THEN txt ) ). \\n me->meth1( \\n p = COND #( WHEN 1 = 1 THEN txt ) ). \\n me->meth1( \\n p = COND #( WHEN 1 = 1 THEN ) ). \\n out->line( ). \\n\\ \\n me->meth2( \\n p = COND #( WHEN 1 = 1 THEN txt ) ). \\n "me->meth2( \\n " p = COND #( WHEN 1 = 1 THEN num ) ). "not possible \\n "me->meth2( \\n " p = COND #( WHEN 1 = 1 THEN ) ). "not possible \\n out->line( ). \\n\\ \\n me->meth3( \\n p = COND #( WHEN 1 = 1 THEN txt ) ). \\n me->meth3( \\n p = COND #( WHEN 1 = 1 THEN num ) ) ##type. \\n me->meth3( \\n p = COND #( WHEN 1 = 1 THEN ) ) ##type. \\n ENDMETHOD. \\n METHOD descr. \\n DATA type TYPE string. \\n DATA length TYPE i. \\n\\ \\n DATA(datadescr) = CAST cl\_abap\_datadescr( \\n cl\_abap\_typedescr=>describe\_by\_data( p ) ). \\n\\ \\n type = datadescr->type\_kind. \\n IF type = 'g'. \\n type = 'STRING'. \\n length = strlen( p ). \\n ELSE. \\n length = datadescr->length / cl\_abap\_char\_utilities=>charsize. \\n ENDIF. \\n out->write( |\\{ type \\} \\{ length \\}| ). \\n ENDMETHOD. \\n METHOD meth1. \\n descr( p ). \\n ENDMETHOD. \\n METHOD meth2. \\n descr( p ). \\n ENDMETHOD. \\n METHOD meth3. \\n descr( p ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenconditional\_expressions.html