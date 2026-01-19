---
title: "ABAPCALL_METHOD_STATIC_SHORT"
description: |
  ABAPCALL_METHOD_STATIC_SHORT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCALL_METHOD_STATIC_SHORT.htm"
abapFile: "ABAPCALL_METHOD_STATIC_SHORT.html"
keywords: ["do", "if", "method", "class", "data", "ABAPCALL", "METHOD", "STATIC", "SHORT"]
---

``\{\ [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html)( )``\\ 
``|\ [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html)( a )``\\ 
``|\ [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html)( p1 = a1 p2 = a2 ... )``\\ 
``|\ [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html)( [[`EXPORTING  p1 = a1 p2 = a2 ...`](ABAPCALL_METHOD_PARAMETERS.html)]``\\ 
        ``[[`IMPORTING  p1 = a1 p2 = a2 ...`](ABAPCALL_METHOD_PARAMETERS.html)]``\\ 
        ``[[`CHANGING   p1 = a1 p2 = a2 ...`](ABAPCALL_METHOD_PARAMETERS.html)]``\\ 
        ``[[`RECEIVING  r  = a`](ABAPCALL_METHOD_PARAMETERS.html)]``\\ 
        ``[[`EXCEPTIONS [exc1 =n1 exc2 = n2 ...]`](ABAPCALL_METHOD_PARAMETERS.html)``\\ 
                    ``[[`OTHERS = n_others]]`](ABAPCALL_METHOD_PARAMETERS.html) ) \}.``

[1. `meth( ).`](#ABAP_ALTERNATIVE_1@2@)

[2. `meth( a ).`](#ABAP_ALTERNATIVE_2@2@)

[3. `meth( p1 = a1 p2 = a2 ... ).`](#ABAP_ALTERNATIVE_3@2@)

[4. `meth( EXPORTING ... IMPORTING ... CHANGING ... RECEIVING ... ).`](#ABAP_ALTERNATIVE_4@2@)

Static call of a method specified as a standalone statement using the name [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html). The [parameter interface](ABENPARAMETER_INTERFACE_GLOSRY.html) of the method is filled with the actual parameters in the parentheses. In the first alternative, no formal parameters are supplied with actual parameters. The second and third alternatives are short forms for methods where only the input parameters are supplied with actual parameters. The fourth alternative allows all possible formal parameters to be supplied with actual parameters and non-class-based exceptions to be handled.

Each method call sets the system field `sy-subrc` to 0 in the moment the method is called. Handling [non-class-based exceptions](ABENEXCEPTIONS_NON_CLASS.html) can change this value.

The static method call described here must not be confused with the call of [static methods](ABENSTATIC_METHOD_GLOSRY.html). A static method call is the static specification of an [instance method](ABENINSTANCE_METHOD_GLOSRY.html) or a static method. In addition, there is the [dynamic method call](ABENMETHOD_CALLS_DYNAMIC.html), for which the methods are specified dynamically.

Call of the method [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html) without passing parameters. The method cannot have any or can have only optional input parameters or input/output parameters. No actual parameters are assigned to any output parameters or to a return value.

Call of a method without parameters.

This is the short form of:

`meth( [EXPORTING](ABAPCALL_METHOD_PARAMETERS.html) p = a ).`

The method [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html) can have the following parameters:

The value of `a` is passed to the non-optional input parameter or to the preferred parameter. The actual parameter `a` can be specified as a data object, a function, or an expression.

The method can only have optional input/output parameters. No actual parameter is assigned to these input/output parameters, any output parameters, or return values.

Call of a method with an input parameter.

This is the short form of:

`meth( [EXPORTING](ABAPCALL_METHOD_PARAMETERS.html) p1 = a1 p2 = a2 ... ).`

The method [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html) can have any number of input parameters `p1`, `p2`, ... that are supplied with the actual parameters `a1`, `a2`, .... The actual parameters can be specified as a data object, a function, or an expression.

The method can only have optional input/output parameters. No actual parameter is assigned to these input/output parameters, any output parameters, or return values.

Call of a method with two input parameters.

Call of the method [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html) with explicit [parameter passing](ABAPCALL_METHOD_PARAMETERS.html) and the option of handling non-class-based exceptions. This format can be used to call methods with any number of parameter interfaces.

Call of a method with explicit parameter passing.

-   Either exactly one non-optional input parameter `p` and any number of optional input parameters
-   Or only optional input parameters from which `p` is defined as a preferred parameter using `PREFERRED PARAMETER`

CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS do\_something. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD do\_something. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n c1=>do\_something( ). \\n ENDMETHOD. \\nENDCLASS. CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS do\_something IMPORTING p TYPE i. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD do\_something. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n c1=>do\_something( 333 ). \\n ENDMETHOD. \\nENDCLASS. CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS do\_something IMPORTING p1 TYPE i \\n p2 TYPE i. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD do\_something. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\n CLASS exa IMPLEMENTATION. \\n METHOD main. \\n c1=>do\_something( p1 = 333 p2 = 444 ). \\n ENDMETHOD. \\nENDCLASS. CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS do\_something IMPORTING p1 TYPE i \\n p2 TYPE i \\n EXPORTING p3 TYPE i \\n p4 TYPE i \\n RETURNING VALUE(r) TYPE i. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD do\_something. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n c1=>do\_something( EXPORTING p1 = 333 \\n p2 = 444 \\n IMPORTING p3 = FINAL(a1) \\n p4 = FINAL(a2) \\n RECEIVING r = FINAL(a3) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abenmethod\_calls.html abenmethod\_calls\_static.html