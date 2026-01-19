---
title: "For reasons of backward compatibility, catchable exceptions raised by many ABAP statements can be caught by using"
description: |
  Within processing blocks, the two mechanisms prevent each other from handling exceptions. It is advisable to catch an exception between `TRY ... ENDTRY` using `CATCH` or to use the `RAISING` addition in the definition of the interface to propagate it to the caller. Catching exceptions using `CATCH S
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_LANGUAGE_EXCEPTIONS.htm"
abapFile: "ABENABAP_LANGUAGE_EXCEPTIONS.html"
keywords: ["do", "if", "try", "catch", "class", "data", "types", "ABENABAP", "LANGUAGE", "EXCEPTIONS"]
---

Error situations that occur during the execution of an ABAP statement raise exceptions. These exceptions are fully integrated into the [exception concept](ABENABAP_EXCEPTIONS.html) and are raised by the runtime framework. Two types of exception exist:

Each catchable exception is assigned to a runtime error that terminates the program if the exception is neither caught by using the [`CATCH`](ABAPCATCH_TRY.html) statement with a suitable exception class nor propagated to a caller. The keyword documentation lists the type of exceptions that can be raised for each statement.

For reasons of backward compatibility, catchable exceptions raised by many ABAP statements can be caught by using

Within processing blocks, the two mechanisms prevent each other from handling exceptions. It is advisable to catch an exception between `TRY ... ENDTRY` using `CATCH` or to use the `RAISING` addition in the definition of the interface to propagate it to the caller. Catching exceptions using `CATCH SYSTEM-EXCEPTIONS` is no longer recommended.

Unhandled exception.

The following program lines produce the runtime error `COMPUTE_INT_ZERODIVIDE` because division by zero is invalid and this exception situation is not handled:

Handling exceptions using exception classes.

The above exception is represented by the exception class `CX_SY_ZERODIVIDE`, which is a subclass of the exception class `CX_SY_ARITHMETIC_ERROR`. Therefore, the exception can be handled as follows (the `ERR_TEXT` variable is passed the text *Division by zero.*):

Handling exceptions as catchable runtime errors.

Since the runtime error `COMPUTE_INT_ZERODIVIDE` is catchable and assigned to the [exception group](ABENEXCEPTION_GROUP_GLOSRY.html)\\ `ARITHMETIC_ERRORS`, it can also be handled using the obsolete statement [`CATCH SYSTEM-EXCEPTIONS`](ABAPCATCH_SYS.html).

-   **Catchable exceptions**, which are based on [predefined](ABENABAP_EXCEPTION_CLASSES.html)\\ [exception classes](ABENEXCEPTION_CLASS_GLOSRY.html).
-   **Uncatchable exceptions**, which directly produce [runtime errors](ABENRUNTIME_ERROR_GLOSRY.html).

-   [`TRY ... CATCH ... ENDTRY`](ABAPTRY.html)
-   This is the recommended way.
-   [`CATCH SYSTEM-EXCEPTIONS ... ENDCATCH`](ABAPCATCH_SYS.html)
-   This statement is obsolete. To use it, the runtime error assigned to the exception class must be [catchable](ABENCATCHABLE_RUNTIME_ERROR_GLOSRY.html) itself.

DATA result TYPE i. \\nresult = 1 / 0. DATA myref TYPE REF TO cx\_sy\_arithmetic\_error. \\nDATA err\_text TYPE string. \\nDATA result TYPE i. \\nTRY. \\n result = 1 / 0. \\n CATCH cx\_sy\_arithmetic\_error INTO myref. \\n err\_text = myref->get\_text( ). \\nENDTRY. DATA result TYPE i. \\nCATCH SYSTEM-EXCEPTIONS arithmetic\_errors = 4. \\n result = 1 / 0. \\nENDCATCH. \\nIF sy-subrc = 4. \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html