---
title: "ABENABAP_LANGUAGE_EXCEPTIONS"
description: |
  ABENABAP_LANGUAGE_EXCEPTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_LANGUAGE_EXCEPTIONS.htm"
abapFile: "ABENABAP_LANGUAGE_EXCEPTIONS.html"
keywords: ["do", "if", "try", "catch", "class", "data", "types", "ABENABAP", "LANGUAGE", "EXCEPTIONS"]
---

Error situations that occur during the execution of an ABAP statement raise exceptions. These exceptions are fully integrated into the [exception concept](ABENABAP_EXCEPTIONS.html) and are raised by the runtime framework. Two types of exception exist:

Each catchable exception is assigned to a runtime error that terminates the program if the exception is neither caught by using the [`CATCH`](ABAPCATCH_TRY.html) statement with a suitable exception class nor propagated to a caller. The keyword documentation lists the type of exceptions that can be raised for each statement.

Unhandled exception.

The following program lines produce the runtime error `COMPUTE_INT_ZERODIVIDE` because division by zero is invalid and this exception situation is not handled:

Handling exceptions using exception classes.

The above exception is represented by the exception class `CX_SY_ZERODIVIDE`, which is a subclass of the exception class `CX_SY_ARITHMETIC_ERROR`. Therefore, the exception can be handled as follows (the `ERR_TEXT` variable is passed the text *Division by zero.*):

-   **Catchable exceptions**, which are based on predefined\\ [exception classes](ABENEXCEPTION_CLASS_GLOSRY.html).
-   **Uncatchable exceptions**, which directly produce [runtime errors](ABENRUNTIME_ERROR_GLOSRY.html).

DATA result TYPE i. \\nresult = 1 / 0. DATA myref TYPE REF TO cx\_sy\_arithmetic\_error. \\nDATA err\_text TYPE string. \\nDATA result TYPE i. \\nTRY. \\n result = 1 / 0. \\n CATCH cx\_sy\_arithmetic\_error INTO myref. \\n err\_text = myref->get\_text( ). \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html