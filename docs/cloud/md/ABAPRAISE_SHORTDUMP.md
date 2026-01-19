---
title: "ABAPRAISE_SHORTDUMP"
description: |
  ABAPRAISE_SHORTDUMP - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPRAISE_SHORTDUMP.htm"
abapFile: "ABAPRAISE_SHORTDUMP.html"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "exception-handling", "ABAPRAISE", "SHORTDUMP"]
---

``RAISE SHORTDUMP    \{\ \{TYPE cx_class [[`message`](ABAPRAISE_SHORTDUMP_MESSAGE.html)]\ [EXPORTING p1 = a1 p2 = a2 ...]\}``\\ 
  `| oref \}.`

This statement interrupts the execution of the current statement block and raises the [runtime error](ABENRUNTIME_ERROR_GLOSRY.html)\\ `RAISE_SHORTDUMP`, which performs a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html). This runtime error is linked with an [exception object](ABENEXCEPTION_OBJECT_GLOSRY.html) using `TYPE` or `oref`:

The [short dump](ABENSHORT_DUMP_GLOSRY.html) of the runtime error contains the name of the exception class and the exception text. The attributes of the exception object can be listed in the transaction `ST22`. Under *Chain of Exception Objects*, the long text of the short dump contains the attributes referenced in the attribute `PREVIOUS` of the exception object.

Raising of a runtime error with an exception object of the exception class `CX_DEMO_T100`. The instance constructor is supplied with parameters that define the exception text and supply any variable text parts with values.

Like the previous example, but the exception object is created first and not in the statement `RAISE SHORTDUMP`.

Raising of a runtime error when an exception is handled. A reference to the preceding exception object of the class `cx_sy_zerodivide` is passed to the attribute `PREVIOUS` of the created exception object of the class `cx_demo`. The *chain of exception objects* is listed in the long text of the short dump.

-   If the addition `TYPE` is specified, an exception object of the [exception class](ABENEXCEPTION_CLASS_GLOSRY.html)\\ `cx_class` is created. Every exception class `cx_class` visible at this point can be specified after `TYPE`. The [exception category](ABENEXCEPTION_CATEGORY_GLOSRY.html) is ignored.

-   The addition `EXPORTING` can be used to assign actual parameters to the input parameters of the instance constructor. The syntax and semantics are the same as for the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html).
-   The addition [`message`](ABAPRAISE_SHORTDUMP_MESSAGE.html) can be used to link the exception object to a [message](ABENMESSAGE_GLOSRY.html).

-   If `oref` is specified, no new exception object is created. `oref` expects an object reference variable that points to an existing exception object. The static type of `oref` must be an exception class, that is, a subclass of `CX_ROOT` or the class itself. `oref` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html). In the existing exception object, the internal attributes that describe the location of the exception are converted to the position of the `RAISE` statement.

-   The statement `RAISE SHORTDUMP` works in roughly the same way as when raising a [class-based exception](ABENCLASS_BASED_EXCEPTION_GLOSRY.html) that does not have a handler. There is no [propagation from procedures](ABENEXCEPTIONS_PROCEDURES.html), however, which removes the risk of violating interfaces and raising further exceptions such as `CX_SY_NO_HANDLER`. This means that the [exception category](ABENEXCEPTION_CATEGORY_GLOSRY.html) of the used exception class is not relevant in `RAISE SHORTDUMP`.
-   The statement `RAISE SHORTDUMP` does not raise [class-based exception](ABENCLASS_BASED_EXCEPTION_GLOSRY.html) that can be caught using [`CATCH`](ABAPCATCH_TRY.html). The exception object is used exclusively for the transport of information to the short dump.
-   The statement `RAISE SHORTDUMP` is an alternative to raising [exit messages](ABENEXIT_MESSAGE_GLOSRY.html), that is, [messages](ABENMESSAGE_GLOSRY.html) of type *X*. The attributes of the exception class can be used to send more information about an error to the short dump than a message text. More specifically, the attribute `PREVIOUS` can reference previous exceptions.
-   If `oref` is specified, either an exception object instantiated using [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) or [`CREATE OBJECT`](ABAPCREATE_OBJECT.html) can be used or a previously caught exception can be transformed into a runtime error in exception handling.
-   If a caught exception is transformed into a runtime error, it should be noted that the exception object does not remain unchanged and the information about the position of the exception is changed instead. If the original information is transported to the short dump, a new exception object of the same class can be created. The original exception object is passed to the constructor parameter `PREVIOUS` of the new object.
-   The addition [`THROW SHORTDUMP`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional expression](ABENCONDITIONAL_EXPRESSIONS.html) makes it possible to raise a runtime error in an operand position.

RAISE SHORTDUMP TYPE cx\_demo\_t100 \\n EXPORTING \\n textid = cx\_demo\_t100=>demo \\n text1 = 'I' \\n text2 = 'need' \\n text3 = 'a' \\n text4 = 'break!'. FINAL(oref) = NEW cx\_demo\_t100( \\n textid = cx\_demo\_t100=>demo \\n text1 = 'I' \\n text2 = 'need' \\n text3 = 'a' \\n text4 = 'break!' ). \\n\\ \\nRAISE SHORTDUMP oref. CLASS cx\_demo DEFINITION INHERITING FROM cx\_static\_check. \\nENDCLASS. \\n\\ \\nCLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main RAISING cx\_sy\_zerodivide. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD main. \\n FINAL(num) = 1 / 0. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS user DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main RAISING cx\_sy\_zerodivide. \\nENDCLASS. \\n\\ \\n\\ \\nCLASS user IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n demo=>main( ). \\n CATCH cx\_sy\_zerodivide INTO FINAL(oref). \\n RAISE SHORTDUMP TYPE cx\_demo EXPORTING previous = oref. \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abennoncat\_exceptions.html