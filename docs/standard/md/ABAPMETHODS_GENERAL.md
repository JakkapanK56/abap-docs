---
title: "ABAPMETHODS_GENERAL"
description: |
  ABAPMETHODS_GENERAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMETHODS_GENERAL.htm"
abapFile: "ABAPMETHODS_GENERAL.html"
keywords: ["select", "insert", "do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "ABAPMETHODS", "GENERAL"]
---

[Short Reference](ABAPMETHODS_SHORTREF.html)

``METHODS meth [[`ABSTRACT|FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html)]\              |[[`DEFAULT IGNORE|FAIL`](ABAPMETHODS_DEFAULT.html)]``\\ 
  ``[IMPORTING [`parameters`](ABAPMETHODS_PARAMETERS.html)\ [PREFERRED PARAMETER p]]``\\ 
  ``[EXPORTING [`parameters`](ABAPMETHODS_PARAMETERS.html)]``\\ 
  ``[CHANGING  [`parameters`](ABAPMETHODS_PARAMETERS.html)]``\\ 
  `[\{RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...\}`\\ 
  `|\{EXCEPTIONS exc1 exc2 ...\}].`

[1. `... IMPORTING parameters [PREFERRED PARAMETER p]`](#ABAP_ADDITION_1@3@)

[2. `... EXPORTING parameters`](#ABAP_ADDITION_2@3@)

[3. `... CHANGING parameters`](#ABAP_ADDITION_3@3@)

[4. `... RAISING exc1|RESUMABLE(exc1) exc2|RESUMABLE(exc2) ...`](#ABAP_ADDITION_4@3@)

[5. `... EXCEPTIONS exc1 exc2 ...`](#ABAP_ADDITION_5@3@)

This statement declares a general instance method `meth`. The additions [`ABSTRACT`](ABAPMETHODS_ABSTRACT_FINAL.html) and [`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html) can be used to make the method of a class abstract or final. The addition [`DEFAULT`](ABAPMETHODS_DEFAULT.html) is used to make an interface method optional.

The additions `IMPORTING`, `EXPORTING`, and `CHANGING` define the [parameter interface](ABENFORMAL_PARAMETERS_OVIEW.html) of the method. After every addition, the corresponding formal parameters are defined by specifying a list [`parameters`](ABAPMETHODS_PARAMETERS.html). The order of the additions is fixed.

The remaining additions determine which exceptions are propagated or raised by the method.

Within a method, the [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html)\\ [`IS SUPPLIED`](ABENLOGEXP_SUPPLIED.html) can be used to check whether an optional formal parameter was assigned an actual parameter when it was called.

`IMPORTING` defines input parameters. When the method is called, an appropriate actual parameter must be specified for each non-optional input parameter. The content of the actual parameter is passed to the input parameter when it is called. The content of an input parameter for which pass-by-reference is defined cannot be changed in the method.

`PREFERRED PARAMETER` can be used to flag an input parameter `p1 p2 ...` from the list [`parameters`](ABAPMETHODS_PARAMETERS.html) after `IMPORTING` as a preferred parameter. This specification is only possible if all input parameters and input/output parameters are optional. The parameter specified after `PREFERRED PARAMETER` is implicitly set to optional. If the method is called using the syntax `meth( a )` (as [standalone](ABAPCALL_METHOD_STATIC_SHORT.html) or [functional](ABAPCALL_METHOD_FUNCTIONAL.html) syntax), the actual parameter `a` is assigned to the preferred input parameter `p`.

Although `PREFERRED PARAMETER` makes the parameter `p` optional implicitly, this parameter should be made optional explicitly using `OPTIONAL` or `DEFAULT`, which is required by a syntax check warning.

Declaration of a method with exclusively optional input parameters, of which one is flagged as a preferred parameter.

`EXPORTING` defines output parameters. When the method is called, an appropriate actual parameter can be specified for each output parameter. The content of an output parameter that is defined for pass-by-value is passed to the actual parameter if the method is completed without errors.

An output parameter that is defined for pass-by-reference behaves like an input/output parameter, which means that it is not initialized when the method is called. For this reason, there should be no read access before the first write access. In addition, be careful when adding content to such parameters as, for example, when inserting lines into internal tables.

The method `read_spfli_into_table` of this example has an input and an output parameter, which are typed completely by reference to the ABAP Dictionary.

`CHANGING` defines input/output parameters. When the method is called, an appropriate actual parameter must be specified for each non-optional input/output parameter. The content of the actual parameter is passed to the input/output parameter when it is called and the content of the input/output parameter is passed to the actual parameter after the method has ended.

Declaration of a method with input and input/output parameters.

The addition `RAISING` is used to declare the [class-based exceptions](ABENCLASS_BASED_EXCEPTION_GLOSRY.html)\\ `exc1 exc2 ...` that can be propagated from the method to the caller.

For `exc1 exc2 ...`, all exception that are classes and that are visible at this point can be specified here. The exception classes must be specified in ascending order with respect to their inheritance hierarchy. Each exception class may only be specified once.

The addition `RESUMABLE` declares an exception that can be propagated as a [resumable exception](ABENRESUMABLE_EXCEPTION_GLOSRY.html). This means:

If a superclass is declared as resumable, all of the simultaneously listed subclasses must also be declared as resumable.

Exceptions of the categories `CX_STATIC_CHECK` and `CX_DYNAMIC_CHECK` must be explicitly declared, otherwise a propagation leads to an interface violation. A violation of the interface raises the catchable exception `CX_SY_NO_HANDLER`. Exceptions of the category `CX_NO_CHECK` are always declared implicitly with the addition `RESUMABLE` but can also be declared explicitly with or without `RESUMABLE`.

In the class `math`, all exceptions that are represented by the class `CX_SY_ARITHMETIC_ERROR` and its subclasses are propagated from within the method `divide_1_by`. If, for example, the input parameter `operand` is filled during the call with the value 0, the exception `CX_SY_ZERODIVIDE` is raised, propagated, and can be handled by the caller in a `TRY` control structure 8, as shown in the example.

The addition `EXCEPTIONS` is used to define a list of [non-class-based exceptions](ABENEXCEPTIONS_NON_CLASS.html)\\ `exc1 exc2...` that can be raised by the statements [`RAISE`](ABAPRAISE_EXCEPTION.html) or [`MESSAGE RAISING`](ABAPMESSAGE_RAISING.html) in the method. The names `exc1 exc2 ...` for the exceptions that are to be defined are freely definable and specified directly. Exceptions defined in this way are bound to the method, similar to formal parameters, and cannot be propagated.

If such an exception is raised in a method and no return code was assigned to it with the addition `EXCEPTIONS` in the [method call](ABENMETHOD_CALLS.html), a runtime error occurs.

The additions `RAISING` and `EXCEPTIONS` cannot be used simultaneously. In addition, in a method in whose interface non-class-based exceptions are defined, the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) or the addition [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional expression](ABENCONDITIONAL_EXPRESSIONS.html) must not be used to raise class-based exceptions.

[Using Class-Based Exceptions](ABENCLASS_EXCEPTION_GUIDL.html)

For new developments, it is recommended that class-based exceptions that are independent of individual methods are used.

In the class `math`, a non-class-based exception `arith_error` is defined for the method `divide_1_by` that is raised in the method by the statement `RAISE` if an arithmetic error occurs. If, for example, the input parameter `operand` is filled with the value 0 during the call, the exception `arith_error` is raised in the internal method handling of exception `CX_SY_ZERODIVIDE` and handled after the call of the method by evaluating `sy-subrc`. The method cannot be called functionally due to the handling of the classic exception.

-   A resumable exception is propagated as such.
-   The addition does not have any effect on a non-resumable exception.
-   If a resumable exception is propagated in `RAISING` without the addition `RESUMABLE`, it becomes non-resumable.

-   The declaration of exceptions of the category `CX_STATIC_CHECK` is checked statically in the syntax check. For exceptions of the category `CX_DYNAMIC_CHECK`, the check is not performed until runtime. For exceptions of the category `CX_NO_CHECK` no check is performed.
-   Exceptions of the category `CX_NO_CHECK` can be declared explicitly with or without the addition `RESUMABLE`. Implicitly the addition `RESUMABLE` is always added. An explicit declaration of an exception of the category `CX_NO_CHECK` has no effect but it documents for the user of a method the probability that this exception can be expected. Furthermore, it allows the category of existing exceptions to be changed into `CX_NO_CHECK` without leading to a syntax error.
-   An exception that is raised as resumable in the method with [`RAISE RESUMABLE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) should also be declared as resumable in the interface, otherwise the exception would lose this property when the method is exited.
-   See also [Class-Based Exceptions in Procedures](ABENEXCEPTIONS_PROCEDURES.html).
-   In a method in which class-based exceptions are declared using the addition `RAISING`, the obsolete statement [`CATCH SYSTEM-EXCEPTIONS`](ABAPCATCH_SYS.html) cannot be used to handle [catchable runtime errors](ABENCATCHABLE_RUNTIME_ERROR_GLOSRY.html). Instead, the catchable exceptions assigned to the runtime errors should be handled in a [`TRY`](ABAPTRY.html) control structure.

CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n METHODS \\n meth \\n IMPORTING \\n p1 TYPE i DEFAULT 111 \\n p2 TYPE i OPTIONAL \\n p3 TYPE i OPTIONAL \\n PREFERRED PARAMETER p1. \\n ... \\nENDCLASS. CLASS flights DEFINITION. \\n PUBLIC SECTION. \\n METHODS read\_spfli\_into\_table \\n IMPORTING VALUE(id) TYPE spfli-carrid \\n EXPORTING flight\_tab TYPE spfli\_tab. \\n ... \\nENDCLASS. CLASS html DEFINITION. \\n PUBLIC SECTION. \\n TYPES html\_table TYPE ... \\n ... \\n METHODS \\n append\_text\_to\_html \\n IMPORTING \\n text TYPE string \\n CHANGING \\n html TYPE html\_table. \\n ... \\nENDCLASS. CLASS math DEFINITION. \\n PUBLIC SECTION. \\n METHODS divide\_1\_by \\n IMPORTING operand TYPE i \\n RETURNING value(result) TYPE decfloat34 \\n RAISING cx\_sy\_arithmetic\_error. \\nENDCLASS. \\n\\ \\nCLASS math IMPLEMENTATION. \\n METHOD divide\_1\_by. \\n result = 1 / operand. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nDATA oref TYPE REF TO math. \\nDATA exc TYPE REF TO cx\_sy\_arithmetic\_error. \\nDATA res TYPE decfloat34. \\nDATA text TYPE string. \\n\\ \\nSTART-OF-SELECTION. \\n\\ \\n CREATE OBJECT oref. \\n TRY. \\n res = oref->divide\_1\_by( 4 ). \\n text = res. \\n CATCH cx\_sy\_arithmetic\_error INTO exc. \\n text = exc->get\_text( ). \\n ENDTRY. \\n MESSAGE text TYPE 'I'. CLASS math DEFINITION. \\n PUBLIC SECTION. \\n METHODS divide\_1\_by \\n IMPORTING operand TYPE i \\n RETURNING VALUE(result) TYPE decfloat34 \\n EXCEPTIONS arith\_error. \\nENDCLASS. \\n\\ \\nCLASS math IMPLEMENTATION. \\n METHOD divide\_1\_by. \\n TRY. \\n result = 1 / operand. \\n CATCH cx\_sy\_arithmetic\_error. \\n RAISE arith\_error. \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\n\\ \\nDATA res TYPE decfloat34. \\nDATA oref TYPE REF TO math. \\n\\ \\nSTART-OF-SELECTION. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n CREATE OBJECT oref. \\n oref->divide\_1\_by( EXPORTING operand = 4 \\n RECEIVING result = res \\n EXCEPTIONS arith\_error = 4 ). \\n\\ \\n IF sy-subrc = 0. \\n out->write\_data( res ). \\n ELSE. \\n out->write\_text( 'Arithmetic error!' ). \\n ENDIF. \\n\\ \\n out->display( ). abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abenmethods.html abapmethods.html