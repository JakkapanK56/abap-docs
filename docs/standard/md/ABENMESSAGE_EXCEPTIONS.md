---
title: "ABENMESSAGE_EXCEPTIONS"
description: |
  ABENMESSAGE_EXCEPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMESSAGE_EXCEPTIONS.htm"
abapFile: "ABENMESSAGE_EXCEPTIONS.html"
keywords: ["select", "if", "case", "class", "ABENMESSAGE", "EXCEPTIONS"]
---

The [exception texts](ABENEXCEPTION_TEXTS.html) described in the previous section are assigned to an exception class statically and express a predefined semantic meaning. This applies to both categories of exception texts, namely [messages as exception texts](ABENEXCEPTION_TEXTS_T100.html) and internal exception texts from [OTR](ABENEXCEPTION_TEXTS_T100.html).

Another frequent use case is passing a message from the table `T100` to the exception object when an exception is raised. This is the case, for example, when a non-class-based exception raised using [`MESSAGE RAISING`](ABAPMESSAGE_RAISING.html) is handled or a message of a function module is caught using [`error_message`](ABAPCALL_FUNCTION_PARAMETER.html) and then passed as a class-based exception.

The predefined exception texts that are selected using the input parameter `TEXTID` of the instance constructor are not suitable for this purpose. Instead, the following are available:

Exception objects of exception classes that include the system interface `IF_T100_DYN_MSG` can be linked with any message from the table `T100` using the addition `MESSAGE`. Exception objects of exception classes that include only the system interface `IF_T100_MESSAGE` can also be linked with messages using the addition `MESSAGE` with restrictions. The latter option is intended only for exception classes that previously had no specific exception texts for generic use before `IF_T100_DYN_MSG` was introduced. In other cases, the concept of exception texts and the linking of any messages are strictly separated with special exception classes provided specifically for this purpose. In particular, the addition `MESSAGE` cannot be combined with the input parameter `TEXTID`.

-   The system interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html).
-   The addition [`MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html) of the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) and of the addition [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional expression](ABENCONDITIONAL_EXPRESSIONS.html).

-   [System Interface `IF_T100_DYN_MSG` in a Local Exception Class](ABENRAISE_MESSAGE_ABEXA.html)
-   [System Interface `IF_T100_DYN_MSG` in a Global Exception Class](ABENRAISE_MESSAGE_GLOBAL_ABEXA.html)
-   [System Interface `IF_T100_DYN_MSG` for Exception `error_message`](ABENRAISE_ERROR_MESSAGE_ABEXA.html)
-   [System Interface `IF_T100_MESSAGE` for Exception with Message](ABENMESSAGE_INTERFACE_REUSE_ABEXA.html)

abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abenexceptions.html abenexceptions\_classes.html