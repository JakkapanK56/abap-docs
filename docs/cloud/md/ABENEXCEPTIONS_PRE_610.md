---
title: "ABENEXCEPTIONS_PRE_610"
description: |
  ABENEXCEPTIONS_PRE_610 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENEXCEPTIONS_PRE_610.htm"
abapFile: "ABENEXCEPTIONS_PRE_610.html"
keywords: ["do", "if", "try", "catch", "method", "class", "types", "exception-handling", "ABENEXCEPTIONS", "PRE", "610"]
---

***This concept is only supported temporarily in the current ABAP language version and must be replaced with a valid concept for that version.***\\ \\n\\n

Exceptions are [class-based](ABENEXCEPTIONS.html). Before the introduction of exception classes, there were the following types of exceptions:

The class-based exceptions replace and enhance the previous concepts completely. Class-based exceptions can be raised and handled in all ABAP contexts (programs, processing blocks). In particular, all previously catchable runtime errors can be handled as class-based exceptions, whereby the previous exception groups are mapped by shared superclasses. For reasons of downward-compatibility, the catchable runtime errors and the non-class-based exceptions defined in the interfaces of methods and function modules have not been abolished, but their use has been restricted as follows:

For reasons of interoperability, class-based exceptions and return values of function modules should be handled or evaluated within a processing block using non-class-based exceptions.

-   Exception situations detected by the system (and whose causes could be handled effectively by the program) raised catchable runtime errors that could be handled by the statement `CATCH SYSTEM-EXCEPTIONS`. Catchable runtime errors are now obsolete. Each catchable runtime error is assigned an exception class instead, which is handled in a [`TRY` block](ABAPTRY.html). Conversely, not all predefined class-based exceptions are assigned to a catchable runtime error. No new catchable runtime errors are created and existing runtime errors that are to be made catchable are no longer transformed to catchable runtime errors. Instead, exception classes are assigned to them.
-   [User-defined catchable exceptions](ABENEXCEPTIONS_NON_CLASS.html) were only possible in the interfaces of function modules and methods. These types of exceptions can be raised within the [procedure](ABENPROCEDURE_GLOSRY.html) when an exception situation is recognized by the statement [`RAISE`](ABAPRAISE_EXCEPTION.html) or [`MESSAGE RAISING`](ABAPMESSAGE_RAISING.html). The caller of the procedure can use the addition `EXCEPTIONS` of the statement [`CALL FUNCTION`](ABAPCALL_FUNCTION.html) or [`meth( ... )`](ABAPCALL_METHOD_STATIC_SHORT.html) to assign return codes for the system field `sy-subrc` to the exceptions the caller wants to handle and evaluate them after the call. However, this does not represent true exception handling in the sense of reacting to an event.

-   Within a [processing block](ABENPROCESSING_BLOCK_GLOSRY.html), only one kind of exception can be raised.
-   Within a procedure interface, the declaration of class-based exceptions and the definition of non-class-based exceptions are mutually exclusive.
-   Within a processing block, catchable runtime errors cannot be caught using `CATCH SYSTEM-EXCEPTIONS` if class-based exceptions are handled there in [`TRY`](ABAPTRY.html) blocks or are raised using [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION.html) or the addition [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional expression](ABENCONDITIONAL_EXPRESSIONS.html). Instead, catchable runtime errors must be caught when handling the associated class-based exception.

abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html