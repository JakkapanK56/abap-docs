---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONV_TYPE_INFERENCE_ABEXA.htm"
abapFile: "ABENCONV_TYPE_INFERENCE_ABEXA.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "field-symbol", "ABENCONV", "TYPE", "INFERENCE", "ABEXA"]
---

This example demonstrates the type inference for the conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html).

Constructor expressions with the conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) are passed to differently typed formal parameters of methods. In the case of generic formal parameters, [special rules](ABENCONV_CONSTRUCTOR_INFERENCE.html) apply when determining the operand type.

-   Completely typed formal parameter
-   When the method `meth1` is called with a completely typed formal parameter, the operand type for `#` is determined using this parameter and in all three calls there is a conversion to `c` with length 10, whereby the first conversion is redundant here.
-   Formal parameter typed generically with `c`
-   The operand type for `#` is determined from the operand.

-   In the first call, the type `c` with length 20 of the operand matches the generic type and is used, which is why this conversion is redundant.
-   In the second call, the type `i` does not match the generic type and the type `c` with the predefined output length 11 of `i` is used.
-   Calls with the generically typed field symbol `<fs>` are not possible, since no type can be derived from the operand.

-   Formal parameter typed generically with `csequence`

-   In the first call, the type `c` with length 20 of the operand matches the generic type and is used, which is why this conversion is redundant.
-   In the second call, the type `i` does not match the generic type and the type `string` is used, which is indicated by a syntax check warning.
-   In the third call, no type can be determined from the generically typed field symbol `<fs>` and the type `string` is used, which is indicated by a syntax check warning.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_conv\_type\_inference DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n TYPES c10 TYPE c LENGTH 10. \\n METHODS: \\n meth1 IMPORTING p TYPE c10, \\n meth2 IMPORTING p TYPE c, \\n meth3 IMPORTING p TYPE csequence, \\n descr IMPORTING p TYPE any. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_conv\_type\_inference IMPLEMENTATION. \\n METHOD main. \\n FIELD-SYMBOLS TYPE any. \\n DATA txt TYPE c LENGTH 20. \\n DATA num TYPE i. \\n ASSIGN num TO . \\n\\ \\n me->meth1( \\n p = CONV #( txt ) ) ##operator. \\n me->meth1( \\n p = CONV #( num ) ). \\n me->meth1( \\n p = CONV #( ) ). \\n out->line( ). \\n\\ \\n me->meth2( \\n p = CONV #( txt ) ) ##operator. \\n me->meth2( \\n p = CONV #( num ) ). \\n "me->meth2( \\n " p = CONV #( ) ). "not possible \\n out->line( ). \\n\\ \\n me->meth3( \\n p = CONV #( txt ) ) ##operator. \\n me->meth3( \\n p = CONV #( num ) ) ##type. \\n me->meth3( \\n p = CONV #( ) ) ##type. \\n ENDMETHOD. \\n METHOD descr. \\n DATA type TYPE string. \\n DATA length TYPE i. \\n\\ \\n DATA(datadescr) = CAST cl\_abap\_datadescr( \\n cl\_abap\_typedescr=>describe\_by\_data( p ) ). \\n\\ \\n type = datadescr->type\_kind. \\n IF type = 'g'. \\n type = 'STRING'. \\n length = strlen( p ). \\n ELSE. \\n length = datadescr->length / cl\_abap\_char\_utilities=>charsize. \\n ENDIF. \\n out->write( |\\{ type \\} \\{ length \\}| ). \\n ENDMETHOD. \\n METHOD meth1. \\n descr( p ). \\n ENDMETHOD. \\n METHOD meth2. \\n descr( p ). \\n ENDMETHOD. \\n METHOD meth3. \\n descr( p ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_conv\_type\_inference DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n TYPES c10 TYPE c LENGTH 10. \\n METHODS: \\n meth1 IMPORTING p TYPE c10, \\n meth2 IMPORTING p TYPE c, \\n meth3 IMPORTING p TYPE csequence, \\n descr IMPORTING p TYPE any. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_conv\_type\_inference IMPLEMENTATION. \\n METHOD main. \\n FIELD-SYMBOLS TYPE any. \\n DATA txt TYPE c LENGTH 20. \\n DATA num TYPE i. \\n ASSIGN num TO . \\n\\ \\n me->meth1( \\n p = CONV #( txt ) ) ##operator. \\n me->meth1( \\n p = CONV #( num ) ). \\n me->meth1( \\n p = CONV #( ) ). \\n out->line( ). \\n\\ \\n me->meth2( \\n p = CONV #( txt ) ) ##operator. \\n me->meth2( \\n p = CONV #( num ) ). \\n "me->meth2( \\n " p = CONV #( ) ). "not possible \\n out->line( ). \\n\\ \\n me->meth3( \\n p = CONV #( txt ) ) ##operator. \\n me->meth3( \\n p = CONV #( num ) ) ##type. \\n me->meth3( \\n p = CONV #( ) ) ##type. \\n ENDMETHOD. \\n METHOD descr. \\n DATA type TYPE string. \\n DATA length TYPE i. \\n\\ \\n DATA(datadescr) = CAST cl\_abap\_datadescr( \\n cl\_abap\_typedescr=>describe\_by\_data( p ) ). \\n\\ \\n type = datadescr->type\_kind. \\n IF type = 'g'. \\n type = 'STRING'. \\n length = strlen( p ). \\n ELSE. \\n length = datadescr->length / cl\_abap\_char\_utilities=>charsize. \\n ENDIF. \\n out->write( |\\{ type \\} \\{ length \\}| ). \\n ENDMETHOD. \\n METHOD meth1. \\n descr( p ). \\n ENDMETHOD. \\n METHOD meth2. \\n descr( p ). \\n ENDMETHOD. \\n METHOD meth3. \\n descr( p ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconstructor\_expression\_conv.html abenconv\_constructor\_inference.html