---
title: "ABAPMESSAGE_RAISING"
description: |
  ABAPMESSAGE_RAISING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMESSAGE_RAISING.htm"
abapFile: "ABAPMESSAGE_RAISING.html"
keywords: ["do", "if", "case", "method", "class", "ABAPMESSAGE", "RAISING"]
---

`MESSAGE \{\ [msg](ABAPMESSAGE_MSG.html)\ |\ text\ \}\ [[DISPLAY LIKE dtype]](ABAPMESSAGE.html)\ [[WITH dobj1... dobj4]](ABAPMESSAGE.html)\ RAISING exception.`

***This syntax is only supported temporarily in the current ABAP language version and must be replaced with valid syntax for that version.***\\ \\n\\n

The statement [`MESSAGE`](ABAPMESSAGE.html) with the addition `RAISING` raises a non-class-based exception `exception` and only sends a message if the exception is not handled. The semantics of [`msg`](ABAPMESSAGE_MSG.html), `text`, and [`WITH`](ABAPMESSAGE.html) is the same as in the statement `MESSAGE` without the addition `RAISING`.

This addition only makes sense during the processing of methods and function modules in which the non-class-based exception `exception` is defined. Furthermore, it cannot be used in the same [processing block](ABENPROCESSING_BLOCK_GLOSRY.html) as the statement `RAISE EXCEPTION` or the addition [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional expression](ABENCONDITIONAL_EXPRESSIONS.html) to raise class-based exceptions.

The system fields of the statement `MESSAGE` are filled in both cases and are available in the calling program after an exception raised using `MESSAGE ...RAISING` is handled.

-   If the `MESSAGE` statement is executed with the addition `RAISING` during processing of a method or a function module whose caller assigns a return value to the [exception](ABENEXCEPTIONS_NON_CLASS.html)\\ `exception` using the addition `EXCEPTIONS` of the statement `CALL`, the statement has the same effect as the statement [`RAISE`](ABAPRAISE_EXCEPTION.html).
-   If no return code is assigned to the exception `exception`, the addition `RAISING` is ignored, and the message is sent using the statement [`MESSAGE`](ABAPMESSAGE.html) and processed according to its [message type](ABENMESSAGE_TYPE_GLOSRY.html).

-   The statement `MESSAGE ... RAISING` is to be seen primarily as a statement for raising exceptions and not for sending messages. Such an exception should always be handled like an exception raised using `RAISE`, since the behavior of the message depends strongly on the context and cannot usually be predicted when the function module is created.
-   Using `MESSAGE ... RAISING` in cases in which non class-based exceptions must still be used is preferable to using the `RAISE` statement, because it offers the option of providing additional text information with an exception.
-   A return code can be assigned to messages that are sent in function modules without the addition `RAISING` by using the predefined exception [`error_message`](ABAPCALL_FUNCTION_PARAMETER.html).
-   Messages that are sent as messages when a function module is called and that are not caught despite the addition `RAISING` are affected like messages with [`error_message`](ABAPCALL_FUNCTION_PARAMETER.html).
-   If a [procedure](ABENPROCEDURE_GLOSRY.html) is exited by raising an exception, the content of the formal parameter for which the [pass by value](ABENPASS_BY_VALUE_GLOSRY.html) is defined is not assigned to the respective actual parameters.

abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abenexceptions\_pre\_610.html abenexceptions\_non\_class.html