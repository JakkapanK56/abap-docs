---
title: "ABAPRAISE_EXCEPTION"
description: |
  ABAPRAISE_EXCEPTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPRAISE_EXCEPTION.htm"
abapFile: "ABAPRAISE_EXCEPTION.html"
keywords: ["select", "do", "if", "case", "method", "class", "ABAPRAISE", "EXCEPTION"]
---

[Short Reference](ABAPRAISE_SHORTREF.html)

`RAISE exception.`

This statement raises the [non-class-based exception](ABENEXCEPTIONS_NON_CLASS.html)\\ `exception`.

After the exception `exception` is raised, the system behaves as follows:

This form of the statement `RAISE` cannot be used in the same [processing block](ABENPROCESSING_BLOCK_GLOSRY.html) as the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) or the addition [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional expression](ABENCONDITIONAL_EXPRESSIONS.html) to raise class-based exceptions.

Raising of a non-class-based exception in a method.

-   `RAISE` can be specified in a method only if the non-class-based exception is defined in the interface of the method.
-   `RAISE` should be specified in function modules only if the non-class-based exception is defined in the interface of the function module.
-   It is possible to specify `RAISE` in all other positions, but it is not recommended.

-   If the exception is raised in a method or function module whose caller assigns a return code to the exception, the [procedure](ABENPROCEDURE_GLOSRY.html) is terminated immediately, the system returns to the calling position, and the system field `sy-subrc` is set according to the assignment.
-   If the exception is raised in a method or function module whose caller does not assign a return code to the exception, a runtime error is then raised whose [short dump](ABENSHORT_DUMP_GLOSRY.html) contains the name of the exception.
-   If the exception is raised in a subroutine, the system searches for the first function module in the procedures of the preceding call stack. If one is found and the exception is defined in it, the system behaves as if the exception were raised in this function module. Otherwise, a runtime error occurs.
-   In all other processing blocks, raising a non class-based exception produces a runtime error that immediately terminates the execution of the program.

-   The statement `MESSAGE` with the addition [`RAISING`](ABAPMESSAGE_RAISING.html) also raises a non-class-based exception and is to be preferred in cases in which non-class-based exceptions still have to be used, because it offers the option of adding a text to the exception.
-   If a [procedure](ABENPROCEDURE_GLOSRY.html) is exited by raising an exception, the content of the formal parameter for which the [pass by value](ABENPASS_BY_VALUE_GLOSRY.html) is defined is not assigned to the respective actual parameters.

-   *Cause:* The raised exception was not handled by the caller.
    *Runtime error:*\\ `RAISE_EXCEPTION`

CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth EXCEPTIONS exc. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD meth. \\n ... \\n RAISE exc. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nSTART-OF-SELECTION. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n cls=>meth( EXCEPTIONS exc = 4 ). \\n CASE sy-subrc. \\n WHEN 4. \\n out->write( 'Exception' ). \\n WHEN OTHERS. \\n ... \\n ENDCASE. \\n\\ \\n out->display( ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abenexceptions\_pre\_610.html abenexceptions\_non\_class.html