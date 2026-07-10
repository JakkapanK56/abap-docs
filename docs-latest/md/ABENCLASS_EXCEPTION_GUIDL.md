---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCLASS_EXCEPTION_GUIDL.html"
abapFile: "ABENCLASS_EXCEPTION_GUIDL.html"
type: "abap-reference"
---

## Background

For reasons of downward compatibility, there are two options for defining standalone catchable exceptions in ABAP:

-   [**Classic Exceptions**](ABENEXCEPTIONS_NON_CLASS.md)
-   These exceptions can only be declared in the interfaces of methods or function modules using `EXCEPTIONS` and can be raised within such a procedure using the statements [`RAISE`](ABAPRAISE_EXCEPTION.md) or [`MESSAGE RAISING`](ABAPMESSAGE_RAISING.md). The procedure caller can use the addition `EXCEPTIONS` of the statements [`meth( ... )`](ABAPCALL_METHOD_STATIC_SHORT.md) or [`CALL FUNCTION`](ABAPCALL_FUNCTION.md) to assign return codes for the system field `sy-subrc` to the exceptions the caller wants to handle and evaluate them after the call.
-   [**Class-Based Exceptions**](ABENEXCEPTIONS.md)
-   These exceptions are defined by exception classes, from which an exception object can be created when an exception is raised (if a handler uses the addition `INTO` in `CATCH`). A class-based exception can either cancel the current context or allow for a resume. Exceptions are raised using the statement `RAISE EXCEPTION` and handled using `CATCH` in a `TRY` control structure. Class-based exceptions can be raised in any procedures and can be further propagated by any procedures.

The coexistence of the two exception concepts is regulated as follows:

-   Classic and class-based exceptions cannot be declared together in the interface of a procedure. Within a processing block, either only classic or only class-based exceptions can be raised.
-   For reasons of interoperability, within a processing block class-based exceptions can be handled and evaluate the return codes of function modules and methods using classic exceptions.

## Rule

**Using Class-Based Exceptions**

Only raise class-based exceptions in new procedures if it is possible to dispense with classic exceptions from the technical point of view.

## Details

User-defined classic exceptions are little more than return codes. If a classic exception is raised in a procedure using the statement `RAISE`, the `sy-subrc` system field is set according to the raised exception after the return to the calling program. The calling program itself must always check, by querying `sy-subrc`, whether an exception was raised and react to it if required, for example, by appropriate handling or explicit forwarding to its own calling program (by raising a separate equivalent exception). This does not improve the clarity of the program.

The raising of class-based exceptions, however, results in a change of the program flow. They can either be handled directly or propagated upwards along the call hierarchy. In this way, not every procedure ([method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md)) has to consider every possible exception situation itself. This supports the [separation of concerns](ABENSEPARATION_CONCERNS_GUIDL.md) within an application. Because the exception can be represented by an object of an exception class, this exception object can gather additional information about the exception situation and transport it to the handler. In contrast to classic exceptions, this can also include specific [exception texts](ABENEXCEPTION_TEXTS_GUIDL.md).

By default, raising an exception stops the entire current context even if the exception is handled. However, there may be situations (mass data processing, for instance) in which a single error does not justify canceling an entire service. For these cases, class-based exceptions can be raised and propagated as resumable exceptions (`RESUMABLE`). A handler can decide whether a service is canceled completely or is resumed using the statement `RESUME`, for example after a corresponding log entry has been written.

Class-based exceptions completely replace the classic exceptions for new code (of course, there are exceptions to this rule) and add resumability. Although classic exceptions on the raiser side are completely obsolete from a technical point of view, the following must be considered for older code: Even if the raiser side is under control, it is not simply a case of switching older procedures over to class-based exceptions, because then all usage occurrences would have to be modified.

When existing procedures that use classic exceptions are called, they must continue to be handled in the new code. In this case, we recommend mapping the classic exceptions to equivalent class-based exceptions by using `RAISE EXCEPTION`. In this way, class-based error handling is provided that is uniform to the outside. The exception situation can then be forwarded to higher call layers without each layer having to react to this situation explicitly.

## Use

Since class-based exceptions are currently not supported in remote-enabled function modules (RFM), classic exceptions still need to be implemented and handled for remote function calls (RFCs).

## Bad Example

The following source code shows the declaration and the raising of a classic exception in a method as well as their handling by evaluating `sy-subrc` after a call of the method. This procedure infringes the above rule.

```
CLASS application DEFINITION. 
  PUBLIC SECTION. 
    METHODS do_something 
    EXCEPTIONS application_error. 
ENDCLASS.CLASS application IMPLEMENTATION. 
  METHOD do_something. 
    ... 
    RAISE application_error. 
    ... 
  ENDMETHOD. 
ENDCLASS....... oref TYPE REF TO application. 
 
... 
 
oref->do_something( 
  EXCEPTIONS application_error = 4 ). 
IF sy-subrc <> 0. 
  ... 
ENDIF.
```

## Good Example

The following source code shows the definition of an exception class, its declaration, and the raising in a method as well as its handling using `CATCH` after the call of the method in a `TRY` block.

```
CLASS cx_application_error DEFINITION 
  INHERITING FROM cx_static_check. 
ENDCLASS.CLASS application DEFINITION. 
  PUBLIC SECTION. 
    METHODS do_something 
      RAISING cx_application_error. 
ENDCLASS.CLASS application IMPLEMENTATION. 
  METHOD do_something. 
    ... 
    RAISE EXCEPTION TYPE cx_application_error. 
    ... 
  ENDMETHOD. 
ENDCLASS....... oref TYPE REF TO application. 
 
... 
 
TRY. 
    oref->do_something( ). 
    CATCH cx_application_error. 
      ... 
ENDTRY.
```

This simple example is perhaps not the most obvious demonstration of the great advantage of class-based exceptions over classic exceptions. However, the advantage is clearly seen in nested procedure calls and the handling of exceptions that were raised in more distant call levels.
