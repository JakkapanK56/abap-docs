---
title: "ABENEXCEPTIONS"
description: |
  ABENEXCEPTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENEXCEPTIONS.htm"
abapFile: "ABENEXCEPTIONS.html"
keywords: ["delete", "do", "if", "case", "try", "catch", "method", "class", "data", "exception-handling", "ABENEXCEPTIONS"]
---

Class-based exceptions are implemented as instances of [exception classes](ABENEXCEPTIONS_CLASSES.html). Exception classes are either predefined globally in the system or can be defined by the user both globally and locally. Class-based exceptions are raised either by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) or by a program.

When an exception is raised, an exception object can be created, whose attributes contain information about the error situation. A class-based exception can be handled in a [`TRY`](ABAPTRY.html) control structure. The `TRY` block defines a protected area whose exceptions can be handled in subsequent `CATCH` blocks. The statement [`RETRY`](ABAPRETRY.html) enables a full `TRY` block to be repeated after an exception. Because all exception classes are subclasses of common superclasses, the associated exceptions can be handled at the same time by handling the respective superclasses. The system [propagates](ABENEXCEPTIONS_SYSTEM_RESPONSE.html) the exception object or the class-based exception until the exception is handled or an interface is violated.

There are two different exception handling cases:

A prerequisite for the second case are [resumable exceptions](ABENRESUMABLE_EXCEPTION_GLOSRY.html). These must be raised using the addition `RESUMABLE` of the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) and declared using the addition `RESUMABLE` in the interface of the procedures from which they were propagated. The statement [`RESUME`](ABAPRESUME.html) is used to resume the program.

-   Exception situations detected by the system and whose causes can be handled properly in the program, raise predefined class-based exceptions.
-   The exceptions of all exception classes visible in a program can be raised by the program as follows:.

-   Using the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html).
-   Using the addition [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in [conditional expressions](ABENCONDITIONAL_EXPRESSIONS.html).

-   Class-based exceptions can be declared in the interface of [procedures](ABENEXCEPTIONS_PROCEDURES.html). This is done using the addition `RAISING` of the statements [`METHODS`](ABAPMETHODS.html) and [`FORM`](ABAPFORM.html). The declared exceptions can occur at the call position of a procedure if the exception is not handled in the procedure.

1.  The context in which the exception was raised is deleted completely before or after handling. This removes all procedures from the memory, including their local data, which was called from the handler context and caused the exception, and handling is resumed depending on how the handler is exited.
2.  The context in which the exception was raised is retained and the program is resumed after the statement that raised the exception.

abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html