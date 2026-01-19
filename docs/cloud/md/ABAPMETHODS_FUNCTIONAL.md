---
title: "ABAPMETHODS_FUNCTIONAL"
description: |
  ABAPMETHODS_FUNCTIONAL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMETHODS_FUNCTIONAL.htm"
abapFile: "ABAPMETHODS_FUNCTIONAL.html"
keywords: ["if", "method", "class", "ABAPMETHODS", "FUNCTIONAL"]
---

``METHODS meth [[`ABSTRACT|FINAL]`](ABAPMETHODS_ABSTRACT_FINAL.html)\              |[[`DEFAULT IGNORE|FAIL`](ABAPMETHODS_DEFAULT.html)]``\\ 
  ``[IMPORTING [`parameters`](ABAPMETHODS_PARAMETERS.html)\ [PREFERRED PARAMETER p]]``\\ 
  ``[EXPORTING [`parameters`](ABAPMETHODS_PARAMETERS.html)]``\\ 
  ``[CHANGING  [`parameters`](ABAPMETHODS_PARAMETERS.html)]``\\ 
  ``RETURNING VALUE(r) [`typing`](ABENTYPING_COMPLETE.html)``\\ 
  `[\{RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...\}`\\ 
  `|\{EXCEPTIONS exc1 exc2 ...\}].`

[`... RETURNING VALUE(r) typing`](#ABAP_ONE_ADD@1@)

This statement declares a [functional](ABENFUNCTIONAL_METHOD_GLOSRY.html) instance method `meth`. The same applies to the additions `ABSTRACT`, `FINAL`, `DEFAULT`, `IMPORTING`, `EXPORTING`, `CHANGING`, `RAISING`, and `EXCEPTIONS` as to [general instance methods](ABAPMETHODS_GENERAL.html).

A functional method can be [called as a function](ABAPCALL_METHOD_FUNCTIONAL.html) in a suitable read position.

In addition to any other formal parameters, a functional method has exactly one return value `r` declared using the addition `RETURNING`. The return value must be passed by [value](ABENPASS_BY_VALUE_GLOSRY.html) using `VALUE` and be completely typed using [`typing`](ABENTYPING_COMPLETE.html). In the typing check, [special rules](ABENTYPING_RETURN_VALUES.html) apply, depending on whether an explicit actual parameter is bound using [`RECEIVING`](ABAPCALL_METHOD_PARAMETERS.html) or the functional method is used in an operand position.

Declaration of a functional method with input parameter and return value. The method is called functionally as an actual parameter for the input parameter of another method.

-   In the methods of a class, one method of the class [hides](ABENBUILT_IN_FUNCTIONS_SYNTAX.html) a [built-in function](ABENBUILTIN_FUNCTION_GLOSRY.html) with the same name. The same applies in functional method calls. Functional method calls and specified built-in functions have similar syntax, which means it is important that a functional method is not given the same name as a built-in function.
-   Functional methods are allowed as [actual parameters](ABENTYPING_ARITH_EXPR.html) of methods, which enables the option of nesting method calls in an operand position.
-   The return value of a functional method is always passed by value, which means it is passed only if the functional method is completed without errors.
-   In functional methods, the statement [`RETURN`](ABAPRETURN.html) can be used to assign the result of an expression [`expr`](ABAPRETURN.html) to the return value when terminating the method.

CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n METHODS \\n meth \\n IMPORTING \\n name TYPE string \\n RETURNING \\n VALUE(result) TYPE string. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD meth. \\n result = |Hello \\{ name \\}!|. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n out->write( \\n NEW cls( )->meth( CONV #( sy-uname ) ) ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abenmethods.html abapmethods.html