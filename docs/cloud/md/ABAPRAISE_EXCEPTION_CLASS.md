---
title: "ABAPRAISE_EXCEPTION_CLASS"
description: |
  ABAPRAISE_EXCEPTION_CLASS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPRAISE_EXCEPTION_CLASS.htm"
abapFile: "ABAPRAISE_EXCEPTION_CLASS.html"
keywords: ["select", "delete", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "exception-handling", "ABAPRAISE", "EXCEPTION", "CLASS"]
---

``RAISE [RESUMABLE] EXCEPTION    \{\ \{TYPE cx_class [[`message`](ABAPRAISE_EXCEPTION_MESSAGE.html)]\ [EXPORTING p1 = a1 p2 = a2 ...]\}``\\ 
  `| oref \}.`

[1. `... RESUMABLE`](#ABAP_ADDITION_1@3@)

[2. `... EXPORTING p1 = a1 p2 = a2 ...`](#ABAP_ADDITION_2@3@)

This statement interrupts execution of the current statement block and raises a [class-based exception](ABENCLASS_BASED_EXCEPTION_GLOSRY.html). It can be used at any point in a [processing block](ABENPROCESSING_BLOCK_GLOSRY.html). The statement interrupts the program flow and searches for a [handler](ABAPCATCH_TRY.html) as described in [System Response After a Class-Based Exception](ABENEXCEPTIONS_SYSTEM_RESPONSE.html). Depending on the definition of the handler, the context of the exception is closed before or after the handler is executed, where some [cleanup tasks](ABAPCLEANUP.html) may be performed. During handling, processing can only be resumed again after the statement `RAISE EXCEPTION`, without closing the context, if the addition `RESUMABLE` is specified.

Raising of an exception `cx_demo` in a method.

Raising of a caught exception of the class `cx_demo` again using the exception object.

Raising of an exception using a dynamically created exception object.

[Exceptions, `RAISE`](ABENRAISE_ABEXA.html)

The addition `RESUMABLE` raises an exception as a [resumable exception](ABENRESUMABLE_EXCEPTION_GLOSRY.html). When an exception of this type is handled in a [`CATCH`](ABAPCATCH_TRY.html) block, the statement [`RESUME`](ABAPRESUME.html) can be used to return to the point directly after the raising statement, as long as the context of the exception was not deleted before the exception was handled.

Raising of a resumable exception `cx_demo` using the addition `RESUMABLE` in a method.

\\ \\n\\n

The addition `EXPORTING` can be used to assign suitable actual parameters to the input parameters of the instance constructor of the exception class. The syntax is the same as for the statement [`CREATE OBJECT`](ABAPCREATE_OBJECT.html).

As in regular method calls, `a1`, `a2`, ... are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html). In other words, expressions can be passed as actual parameters, in addition to data objects. [Special rules](ABENTYPING_ARITH_EXPR.html) apply in this case.

An important input parameter of the instance constructor of an exception class is `TEXTID`, which determines the [exception text](ABENEXCEPTION_TEXTS.html) for the current exception.

The addition [`MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html) is used to link any messages with an exception. This addition cannot be specified with the parameter `TEXTID`.

A predefined exception is raised explicitly for which an exception text other than the standard exception text is selected and whose placeholder `&TOKEN&` is filled by passing a value to the attribute with the same name.

-   If the addition `TYPE` is specified, an exception of exception class `cx_class` is raised and, if necessary, an exception object is created. Every exception class `cx_class` visible at this point can be specified after `TYPE`.

-   The addition `EXPORTING` can be used to assign actual parameters to the input parameters of the instance constructor.
-   The addition [`message`](ABAPRAISE_EXCEPTION_MESSAGE.html) can be used to link the exception object to a [message](ABENMESSAGE_GLOSRY.html).

-   If `oref` is specified, no new exception object is created when the exception is raised. For `oref`, an object reference variable must be specified that points to an existing exception object. The static type of `oref` must be an exception class, that is, a subclass of `CX_ROOT` or the class itself. `oref` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html). In the existing exception object, the internal attributes that describe the position of the exception and that can be read using the method `GET_SOURCE_POSITION` are converted to the position of the statement `RAISE`.
    

-   If the addition `TYPE` is used exception objects are only created if they are required for performance reasons, that is:

-   If a suitable `CATCH` block or `CLEANUP` block is specified in a wrapper [`TRY`](ABAPTRY.html) control structure with the addition `INTO`.
-   If the exception is not caught and a [runtime error](ABENRUNTIME_ERROR_GLOSRY.html) occurs.

-   In principle, however, an exception can be regarded as an instance of an exception object being generated. A difference in behavior can occur only if a non-handled exception of the instance constructor replaces the original exception when the object is generated. However, this situation should never occur.
-   If `oref` is specified, either an exception object instantiated using [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) or [`CREATE OBJECT`](ABAPCREATE_OBJECT.html) can be used, or an exception that was previously caught during exception handling can be raised again.
-   If a caught exception is raised again, note that the exception object does not remain unchanged because the information about the position of the exception is changed. If the original information is to be propagated to an external handler, a new exception of the same class can be raised, passing the original exception object to the `PREVIOUS` parameter of its constructor. It may also be enough to propagate the original exception implicitly, and not raise it again using `RAISE`. The associated original exception object can then be evaluated in the [`CLEANUP`](ABAPCLEANUP.html) block, if required
-   The exception class after `TYPE` can be specified only statically. To raise an exception dynamically, the dynamic variant of [`CREATE OBJECT`](ABAPCREATE_OBJECT_EXPLICIT.html) can be used to create an exception object and specify it using `oref`.
-   If a [procedure](ABENPROCEDURE_GLOSRY.html) is exited by raising an exception, the content of the formal parameter for which the [pass by value](ABENPASS_BY_VALUE_GLOSRY.html) is defined is not assigned to the respective actual parameters.
-   The addition [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional expression](ABENCONDITIONAL_EXPRESSIONS.html) makes it possible to raise a class-based exception in an operand position.

-   If the statement `RESUMABLE` is used to raise an exception as a [resumable exception](ABENRESUMABLE_EXCEPTION_GLOSRY.html), the handler has to determine whether processing is resumed after `RAISE EXCEPTION`, or whether processing of the current context is terminated completely. Both alternatives can occur when an exception is raised. It is important to ensure that [`CLEANUP`](ABAPCLEANUP.html) blocks are only executed when the context is deleted.
-   When exceptions of the types `CX_STATIC_CHECK` and `CX_DYNAMIC_CHECK` are propagated, which are raised as resumable, they can become non-resumable if the addition `RESUMABLE` is not specified in each interface involved for the addition `RAISING` to declare the exception.
-   When exceptions of type `CX_NO_CHECK` are propagated, the resumability is always retained. However, exceptions of type `CX_NO_CHECK` should only be raised as resumable with caution, and it must be ensured that a procedure always has the required behavior.

-   Passing the specification of a text as an actual parameter to the parameter `TEXTID` is not contained in the where-used list of that text. For example, the where-used list of a [message](ABENMESSAGE_GLOSRY.html) does not contain this dynamic use of the message.

CLASS cx\_demo DEFINITION INHERITING FROM cx\_static\_check. \\nENDCLASS. \\n\\ \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth RAISING cx\_demo. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD meth. \\n ... \\n RAISE EXCEPTION TYPE cx\_demo. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n TRY. \\n cls=>meth( ). \\n CATCH cx\_demo. \\n out->write( 'Catching exception' ). \\n ENDTRY. \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. CLASS cx\_demo DEFINITION INHERITING FROM cx\_static\_check. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n TRY. \\n TRY. \\n RAISE EXCEPTION TYPE cx\_demo. \\n CATCH cx\_demo INTO FINAL(exc). \\n out->write( 'Inner CATCH' ). \\n RAISE EXCEPTION exc. \\n ENDTRY. \\n CATCH cx\_demo. \\n out->write( 'Outer CATCH' ). \\n ENDTRY. \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA exception TYPE seoclass-clsname VALUE 'CX\_SY\_ZERODIVIDE'. \\ncl\_demo\_input=>request( CHANGING field = exception ). \\n\\ \\nDATA oref TYPE REF TO cx\_root. \\nexception = to\_upper( exception ). \\nTRY. \\n CREATE OBJECT oref TYPE (exception). \\n CATCH cx\_root INTO DATA(exc). \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\nTRY. \\n RAISE EXCEPTION oref. \\n CATCH cx\_root INTO exc. \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->display( ). CLASS cx\_demo DEFINITION INHERITING FROM cx\_static\_check. \\nENDCLASS. \\n\\ \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth RAISING RESUMABLE(cx\_demo). \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD meth. \\n ... \\n RAISE RESUMABLE EXCEPTION TYPE cx\_demo. \\n cl\_demo\_output=>display( 'Resumed ...' ). \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TRY. \\n cls=>meth( ). \\n CATCH BEFORE UNWIND cx\_demo. \\n RESUME. \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTRY. \\n ... \\n RAISE EXCEPTION TYPE cx\_sy\_dynamic\_osql\_semantics \\n EXPORTING \\n textid = cx\_sy\_dynamic\_osql\_semantics=>unknown\_table\_name \\n token = 'Test'. \\n ... \\n CATCH cx\_sy\_dynamic\_osql\_semantics INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abenexceptions.html