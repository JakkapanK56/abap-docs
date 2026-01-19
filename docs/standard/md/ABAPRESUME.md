---
title: "ABAPRESUME"
description: |
  ABAPRESUME - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPRESUME.htm"
abapFile: "ABAPRESUME.html"
keywords: ["delete", "do", "if", "try", "catch", "method", "class", "exception-handling", "ABAPRESUME"]
---

[Short Reference](ABAPRESUME_SHORTREF.html)

`RESUME.`

This statement exits the [`CATCH`](ABAPCATCH_TRY.html) handling of a [resumable exception](ABENRESUMABLE_EXCEPTION_GLOSRY.html) and resumes processing after the place where the exception was raised. The statement `RESUME` can only be listed in a [`CATCH`](ABAPCATCH_TRY.html) block of a [`TRY`](ABAPTRY.html) control structure for which the addition `BEFORE UNWIND` is declared. When exception handling is exited using `RESUME`, the context of the exception is not deleted, and any `CLEANUP` blocks are not executed.

Prerequisites for resuming processing are:

Otherwise, an exception of the class `CX_SY_ILLEGAL_HANDLER` is raised. To check whether the prerequisites are met, the instance attribute `IS_RESUMABLE` with type `abap_bool` of the current exception object can be checked. The value of the attribute is set using the addition `INTO` when the statements `CATCH` and `CLEANUP` are executed as long as the addition `BEFORE UNWIND` is specified for `CATCH`.

Use of the statement `RESUME` in the handling of a resumable exception `cx_demo`.

\\ \\n\\n

`CX_SY_ILLEGAL_HANDLER`

-   The exception was raised as a resumable exception by the addition `RESUMABLE` of the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) or by the addition [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional expression](ABENCONDITIONAL_EXPRESSIONS.html).
-   The exception was declared with the addition `RESUMABLE` of `RAISING` in the interface of all procedures from which it was propagated, where exceptions derived from `CX_NO_CHECK` are always implicitly declared with that addition.

-   If the resumable exception was not raised by the variant [`RAISE RESUMABLE EXCEPTION oref`](ABAPRAISE_EXCEPTION_CLASS.html), the handler can send information to the raiser of the event by assigning values to appropriate attributes of the exception object.
-   Resuming processing after an exception is particularly useful if the exception was raised when a special method was called, such as a constructor or a functional method in an operand position.
-   If a `CATCH` block is not exited using `RESUME` when handling a resumable exception, the program flow does not continue in the context of the statement that raised the exception, as described in [System Response After a Class-Based Exception](ABENEXCEPTIONS_SYSTEM_RESPONSE.html). This context is deleted when the `CATCH` block is exited, at the latest.
-   The transformation option [`OPTIONS exception = 'resumable'`](ABAPCALL_TRANSFORMATION_OPTIONS.html) can be used to make exceptions of the class `CX_ST_DESERIALIZATION_ERROR` that are raised in [Simple Transformations](ABENSIMPLE_TRANSFORMATION_GLOSRY.html) resumable. If [`CATCH BEFORE UNWIND`](ABAPCATCH_TRY.html) is used, the canceled transformation can also be resumed after the break using `RESUME`.

-   *Cause:* Exception cannot be resumed. The ID of the exception text is `NOT_RESUMABLE`\\
    *Runtime error:*\\ `UNCAUGHT_EXCEPTION`

CLASS cx\_demo DEFINITION INHERITING FROM cx\_static\_check. \\nENDCLASS. \\n\\ \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth RAISING RESUMABLE(cx\_demo). \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD meth. \\n ... \\n RAISE RESUMABLE EXCEPTION TYPE cx\_demo. \\n cl\_demo\_output=>display( 'Resumed ...' ). \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TRY. \\n cls=>meth( ). \\n CATCH BEFORE UNWIND cx\_demo. \\n RESUME. \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abenexceptions.html abaptry.html