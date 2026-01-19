---
title: "ABAPCALL_METHOD_FUNCTIONAL"
description: |
  ABAPCALL_METHOD_FUNCTIONAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_METHOD_FUNCTIONAL.htm"
abapFile: "ABAPCALL_METHOD_FUNCTIONAL.html"
keywords: ["select", "do", "if", "try", "method", "class", "data", "ABAPCALL", "METHOD", "FUNCTIONAL"]
---

``... \{\ [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html)( )``\\ 
    ``|\ [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html)( a )``\\ 
    ``|\ [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html)( p1 = a1 p2 = a2 ... )``\\ 
    ``|\ [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html)( [[`EXPORTING p1 = a1 p2 = a2 ...`](ABAPCALL_METHOD_PARAMETERS.html)]``\\ 
            ``[[`IMPORTING p1 =a1 p2 = a2 ...`](ABAPCALL_METHOD_PARAMETERS.html)]``\\ 
            ``[[`CHANGING  p1 =a1 p2 = a2 ...`](ABAPCALL_METHOD_PARAMETERS.html)] ) \} ...``

Functional call of a [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html)\\ [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html) in a suitable [read position for expressions](ABENEXPRESSION_POSITIONS.html). The return value of the method declared using [`RETURNING`](ABAPMETHODS_FUNCTIONAL.html) is used as an operand and its complete typing determines the data type of the operand. The actual parameters bound to [output parameters](ABENOUTPUT_PARAMETER_GLOSRY.html) and [input/output parameters](ABENINPUT_OUTPUT_PARAMETER_GLOSRY.html) are handled in the same way as in [standalone method calls](ABAPCALL_METHOD_STATIC_SHORT.html).

The semantics of the syntax used in parameter passing are the same as in standalone method calls. Functional method calls differ from standalone method calls in the following ways:

If the return value of the method has a structured data type, a functional method call can, like a structure, be listed in front of the [structure component selector](ABENSTRUCTURE_COMPONENT_SEL_GLOSRY.html)\\ `-` and used to access a component of the structure.

If a functional method has the same name as a [built-in function](ABENBUILTIN_FUNCTION_GLOSRY.html), the functional method is always called.

If an exception is raised when the functional method call is used as an operand, it cannot always be handled, but can cause a runtime error, depending on the position of the operand.

Each method call sets the system field `sy-subrc` to 0 in the moment the method is called.

Functional call of a method. Unlike in the example for [standalone method calls](ABAPCALL_METHOD_STATIC_SHORT.html), the return value is assigned to the result. The inline declarations made here, however, are not possible.

The [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html)\\ `factorial` in this example has the return value `fact` of type `int8`, used on the right side of an assignment in an expression.

The [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html)\\ `get` in this example has a structured return value whose component `carrname` is accessed.

-   The return value in functional method calls cannot be assigned to an actual parameter explicitly using [`RECEIVING`](ABAPCALL_METHOD_PARAMETERS.html).
-   [Inline declarations](ABENINLINE_DECLARATION_GLOSRY.html) are not possible for actual parameters.
-   Non-class-based exceptions cannot be handled using [`EXCEPTIONS`](ABAPCALL_METHOD_PARAMETERS.html).

-   In functional method calls, class-based exceptions that are propagated from the method can be handled as usual in a [`TRY`](ABAPTRY.html) control structure or propagated further. The [non-class-based](ABENEXCEPTIONS_NON_CLASS.html) exceptions of a functional method, however, always produce a runtime error.
-   The same applies to [resumable exceptions](ABENRESUMABLE_EXCEPTION_GLOSRY.html) in functional method calls as to all other methods. If processing can be resumed successfully, the execution of the statement called in the method is completed.
-   [Method chaining](ABENMETHOD_CHAINING_GLOSRY.html) is possible in the operand positions where functional methods can be specified.
-   A functional method call whose first method is an instance method can be introduced using the instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) or the casting operator [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html).
-   A single functional method call can be used as a [predicative method call](ABENPREDICATIVE_METHOD_CALL_GLOSRY.html) and as a [relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html).
-   In functional calls of a functional method, an implicit temporary actual parameter is always assigned to the return value and this parameter is used as the operand of the current operand position. This means that the [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html)\\ [`IS SUPPLIED`](ABENLOGEXP_SUPPLIED.html) is always true for the return value within a functionally called method.
-   Since functional method calls can be nested in any way, inline declarations for actual parameters could lead to confusing effects and are therefore not allowed.
-   Since each successful method call sets the system field `sy-subrc` to 0, all statements with functional method calls can change the value of this field.
-   When used as operands of [arithmetic expressions](ABAPCOMPUTE_ARITH.html), the results of functional calls of a functional methods are calculated before evaluating the arithmetic expression and their result is buffered for usage in the respective operand position. This might lead to unexpected results, especially if the method call has side-effects. See the example under [Arithmetic Expressions](ABAPCOMPUTE_ARITH.html).

CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS do\_something IMPORTING p1 TYPE i \\n p2 TYPE i \\n EXPORTING p3 TYPE i \\n p4 TYPE i \\n RETURNING VALUE(r) TYPE i. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD do\_something. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA: a1 TYPE i, \\n a2 TYPE i. \\n FINAL(result) = \\n demo=>do\_something( EXPORTING p1 = 333 \\n p2 = 444 \\n IMPORTING p3 = a1 \\n p4 = a2 ). \\n ENDMETHOD. \\nENDCLASS. CLASS math DEFINITION. \\n PUBLIC SECTION. \\n METHODS factorial \\n IMPORTING n TYPE i \\n RETURNING VALUE(fact) TYPE int8. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS math IMPLEMENTATION. \\n METHOD factorial. \\n fact = COND int8( WHEN n < 0 THEN 0 \\n ELSE REDUCE int8( \\n INIT f = CONV int8( 1 ) \\n FOR i = 1 UNTIL i > n \\n NEXT f \*= i ) ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(result) = 100 + NEW math( )->factorial( 4 ). \\n ENDMETHOD. \\nENDCLASS. CLASS carriers DEFINITION. \\n PUBLIC SECTION. \\n METHODS get \\n IMPORTING carrid TYPE scarr-carrid \\n RETURNING VALUE(r) TYPE scarr. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS carriers IMPLEMENTATION. \\n METHOD get. \\n SELECT SINGLE \* \\n FROM scarr \\n WHERE carrid = @carrid \\n INTO @r. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n out->write( NEW carriers( )->get( 'LH' )-carrname ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abenmethod\_calls.html abenmethod\_calls\_static.html