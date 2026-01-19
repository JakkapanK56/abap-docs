---
title: "ABENEXCEPTIONS_NON_CLASS"
description: |
  ABENEXCEPTIONS_NON_CLASS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEXCEPTIONS_NON_CLASS.htm"
abapFile: "ABENEXCEPTIONS_NON_CLASS.html"
keywords: ["select", "do", "if", "method", "class", "types", "exception-handling", "ABENEXCEPTIONS", "NON", "CLASS"]
---

Non-class-based exceptions are the predecessors of class-based exceptions and should not be defined any more in new developments.

[Using Class-Based Exceptions](ABENCLASS_EXCEPTION_GUIDL.html)

Non-class-based exceptions can be defined in the [parameter interfaces](ABENPARAMETER_INTERFACE_GLOSRY.html) of function modules and methods. These definitions take place as follows:

The statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) or the addition [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional expression](ABENCONDITIONAL_EXPRESSIONS.html) cannot be used to raise class-based exceptions in a method or a function module in whose interface non-class-based exceptions are defined.

Before class-based exceptions were introduced, all exceptions defined in the [parameter interface](ABENPARAMETER_INTERFACE_GLOSRY.html) of methods or function modules were non-class-based.

Non-class-based exceptions are raised by the following statements:

The handling of non-class-based exceptions is made possible by the addition `EXCEPTIONS` in [method calls](ABENMETHOD_CALLS.html) and [function module calls](ABAPCALL_FUNCTION.html) by assigning numeric values to the exceptions, which are used to fill the system field `sy-subrc` when the exception is raised. The actual error handling takes place after the call, when `sy-subrc` is evaluated.

-   In methods of local classes, by assigning a name for the exception after the addition [`EXCEPTIONS`](ABAPMETHODS_GENERAL.html) of the statement `[[CLASS-]](ABAPCLASS-METHODS.html)`[`METHODS`](ABAPMETHODS.html).
-   In methods of global classes, global interfaces or function modules, by assigning a name for the exception in [Class Builder](ABENCLASS_BUILDER_GLOSRY.html) or [Function Builder](ABENFUNCTION_BUILDER_GLOSRY.html), whereby the checkbox for exception classes is not selected.

-   [`RAISE`](ABAPRAISE_EXCEPTION.html)
-   [`MESSAGE ... RAISING`](ABAPMESSAGE_RAISING.html)

-   The exceptions that can be defined in the interfaces of methods and function modules are not real exceptions, since they do not change the control flow, but simply end the processing of the [procedure](ABENPROCEDURE_GLOSRY.html) prematurely and set the return code `sy-subrc` instead.
-   A predefined exception [`error_message`](ABAPCALL_FUNCTION_PARAMETER.html) can be used when calling function modules to handle [messages](ABENABAP_MESSAGES.html) of types *E* and *A* sent during the processing of the function module as non-class-based exceptions.
-   [RFC](ABENRFC_GLOSRY.html) currently allows only classic exception handling. Class-based exception handling is only possible in a different release track.

abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abenexceptions\_pre\_610.html