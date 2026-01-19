---
title: "ABAPMETHODS_GENERAL"
description: |
  ABAPMETHODS_GENERAL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMETHODS_GENERAL.htm"
abapFile: "ABAPMETHODS_GENERAL.html"
keywords: ["insert", "do", "if", "catch", "method", "class", "types", "internal-table", "ABAPMETHODS", "GENERAL"]
---

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

**This syntax is only supported temporarily in the current ABAP language version and must be replaced with valid syntax for that version.**.

The addition `EXCEPTIONS` is used to define a list of [non-class-based exceptions](ABENEXCEPTIONS_NON_CLASS.html)\\ `exc1 exc2...` that can be raised by the statements [`RAISE`](ABAPRAISE_EXCEPTION.html) or [`MESSAGE RAISING`](ABAPMESSAGE_RAISING.html) in the method. The names `exc1 exc2 ...` for the exceptions that are to be defined are freely definable and specified directly. Exceptions defined in this way are bound to the method, similar to formal parameters, and cannot be propagated.

If such an exception is raised in a method and no return code was assigned to it with the addition `EXCEPTIONS` in the [method call](ABENMETHOD_CALLS.html), a runtime error occurs.

The additions `RAISING` and `EXCEPTIONS` cannot be used simultaneously. In addition, in a method in whose interface non-class-based exceptions are defined, the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) or the addition [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional expression](ABENCONDITIONAL_EXPRESSIONS.html) must not be used to raise class-based exceptions.

-   A resumable exception is propagated as such.
-   The addition does not have any effect on a non-resumable exception.
-   If a resumable exception is propagated in `RAISING` without the addition `RESUMABLE`, it becomes non-resumable.

-   The declaration of exceptions of the category `CX_STATIC_CHECK` is checked statically in the syntax check. For exceptions of the category `CX_DYNAMIC_CHECK`, the check is not performed until runtime. For exceptions of the category `CX_NO_CHECK` no check is performed.
-   Exceptions of the category `CX_NO_CHECK` can be declared explicitly with or without the addition `RESUMABLE`. Implicitly the addition `RESUMABLE` is always added. An explicit declaration of an exception of the category `CX_NO_CHECK` has no effect but it documents for the user of a method the probability that this exception can be expected. Furthermore, it allows the category of existing exceptions to be changed into `CX_NO_CHECK` without leading to a syntax error.
-   An exception that is raised as resumable in the method with [`RAISE RESUMABLE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) should also be declared as resumable in the interface, otherwise the exception would lose this property when the method is exited.
-   See also [Class-Based Exceptions in Procedures](ABENEXCEPTIONS_PROCEDURES.html).

CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n METHODS \\n meth \\n IMPORTING \\n p1 TYPE i DEFAULT 111 \\n p2 TYPE i OPTIONAL \\n p3 TYPE i OPTIONAL \\n PREFERRED PARAMETER p1. \\n ... \\nENDCLASS. CLASS flights DEFINITION. \\n PUBLIC SECTION. \\n METHODS read\_spfli\_into\_table \\n IMPORTING VALUE(id) TYPE spfli-carrid \\n EXPORTING flight\_tab TYPE spfli\_tab. \\n ... \\nENDCLASS. CLASS html DEFINITION. \\n PUBLIC SECTION. \\n TYPES html\_table TYPE ... \\n ... \\n METHODS \\n append\_text\_to\_html \\n IMPORTING \\n text TYPE string \\n CHANGING \\n html TYPE html\_table. \\n ... \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abenmethods.html abapmethods.html