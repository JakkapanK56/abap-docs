---
title: "ABENVALUE_TYPE_INFERENCE_ABEXA"
description: |
  ABENVALUE_TYPE_INFERENCE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENVALUE_TYPE_INFERENCE_ABEXA.htm"
abapFile: "ABENVALUE_TYPE_INFERENCE_ABEXA.html"
keywords: ["if", "method", "class", "data", "types", "ABENVALUE", "TYPE", "INFERENCE", "ABEXA"]
---

This example demonstrates a type inference for the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html).

Constructor expressions with the value operator [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_INIT.html) for initial values are passed to differently typed formal parameters of methods.

-   Completely typed formal parameter
-   When the method `meth1` is called with a completely typed formal parameter, the operand type for `#` is determined using this parameter and the result of the value operator is an initial field of type `c` with length 10.
-   Formal parameter typed generically with `c`
-   No call is possible here, since there is no inference rule for the generic type `c`.
-   Formal parameter typed generically with `csequence`
-   In accordance with the inference rule for `csequence`, the result of the value operator is an initial field of type `string`, which is indicated by a syntax check warning.

\* Public class definition \\nCLASS cl\_demo\_value\_type\_inference DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n TYPES c10 TYPE c LENGTH 10. \\n METHODS: \\n meth1 IMPORTING p TYPE c10, \\n meth2 IMPORTING p TYPE c, \\n meth3 IMPORTING p TYPE csequence, \\n descr IMPORTING p TYPE any. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_value\_type\_inference IMPLEMENTATION. \\n METHOD main. \\n\\ \\n me->meth1( p = VALUE #( ) ). \\n out->line( ). \\n\\ \\n "me->meth2( p = value #( ) ). \\n "not possible \\n\\ \\n out->line( ). \\n\\ \\n me->meth3( p = VALUE #( ) ) ##type. \\n ENDMETHOD. \\n METHOD descr. \\n DATA type TYPE string. \\n DATA length TYPE i. \\n\\ \\n DATA(datadescr) = CAST cl\_abap\_datadescr( \\n cl\_abap\_typedescr=>describe\_by\_data( p ) ). \\n\\ \\n type = datadescr->type\_kind. \\n IF type = 'g'. \\n type = 'STRING'. \\n length = strlen( p ). \\n ELSE. \\n length = datadescr->length / cl\_abap\_char\_utilities=>charsize. \\n ENDIF. \\n out->write( |\\{ type \\} \\{ length \\}| ). \\n ENDMETHOD. \\n METHOD meth1. \\n descr( p ). \\n ENDMETHOD. \\n METHOD meth2. \\n descr( p ). \\n ENDMETHOD. \\n METHOD meth3. \\n descr( p ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_value\_type\_inference DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n TYPES c10 TYPE c LENGTH 10. \\n METHODS: \\n meth1 IMPORTING p TYPE c10, \\n meth2 IMPORTING p TYPE c, \\n meth3 IMPORTING p TYPE csequence, \\n descr IMPORTING p TYPE any. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_value\_type\_inference IMPLEMENTATION. \\n METHOD main. \\n\\ \\n me->meth1( p = VALUE #( ) ). \\n out->line( ). \\n\\ \\n "me->meth2( p = value #( ) ). \\n "not possible \\n\\ \\n out->line( ). \\n\\ \\n me->meth3( p = VALUE #( ) ) ##type. \\n ENDMETHOD. \\n METHOD descr. \\n DATA type TYPE string. \\n DATA length TYPE i. \\n\\ \\n DATA(datadescr) = CAST cl\_abap\_datadescr( \\n cl\_abap\_typedescr=>describe\_by\_data( p ) ). \\n\\ \\n type = datadescr->type\_kind. \\n IF type = 'g'. \\n type = 'STRING'. \\n length = strlen( p ). \\n ELSE. \\n length = datadescr->length / cl\_abap\_char\_utilities=>charsize. \\n ENDIF. \\n out->write( |\\{ type \\} \\{ length \\}| ). \\n ENDMETHOD. \\n METHOD meth1. \\n descr( p ). \\n ENDMETHOD. \\n METHOD meth2. \\n descr( p ). \\n ENDMETHOD. \\n METHOD meth3. \\n descr( p ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html abenconstructor\_expression\_value.html abenvalue\_constructor\_params\_init.html