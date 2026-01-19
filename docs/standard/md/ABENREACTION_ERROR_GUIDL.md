---
title: "ABENREACTION_ERROR_GUIDL"
description: |
  ABENREACTION_ERROR_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENREACTION_ERROR_GUIDL.htm"
abapFile: "ABENREACTION_ERROR_GUIDL.html"
keywords: ["select", "do", "if", "class", "exception-handling", "ABENREACTION", "ERROR", "GUIDL"]
---

ABAP provides the following concepts that a program can use to properly react to different error situations:

These four concepts either involve the handling of the error situations by the program or the user (exceptions or error messages) or produce a controlled program termination (assertions, `RAISE SHORTDUMP`, `THROW SHORTDUMP`, and exit messages).

**Select an appropriate reaction to error situations**

Select the appropriate concept of error handling (exception, assertion, message, or program termination) for the respective error situation so that the error can either be handled adequately in the further course of the program or is terminated in a controlled manner.

For each error situation, you should decide on one of the three concepts for error handling:

The statement `MESSAGE` is not only used to send dialog messages in a classic dynpro, but can also be deployed to terminate a program in a controlled manner or raise classic exceptions in the [`MESSAGE ... RAISING`](ABAPMESSAGE_RAISING.html) variant if the appropriate message type is selected. This invites you to combine the different concepts, which may lead to problems. This can be traced back to the old programming model that was driven exclusively by classic dynpros, in which an error situation directly required the output of a message to the user.

For contemporary programming that takes the [separation of concerns](ABENSEPARATION_CONCERNS_GUIDL.html) (SoC) into account, the question of whether a message is to be sent to the user in the event of an error can usually only be answered in a higher software layer. The layer in which such an error situation occurs must therefore react with an exception initially, which in turn represents a new situation for a higher layer, to which it can react with a dialog message or any other error message.

-   **Exceptions**
-   Exceptions are events in the execution of an ABAP program that interrupt the program when it is not possible for the program to continue in a meaningful way. Exceptions are raised either by the ABAP runtime framework or with ABAP statements (`RAISE EXCEPTION`) in the program. Exception handling enables a response to be made to these events. An exception that is not handled results in a runtime error; that is, the program terminates and displays a short dump that describes the exception.
-   **Assertions**
-   Assertions formulate conditions in a program that must be met to ensure a proper continuation of the program. An assertion is defined by the statement `ASSERT`.
-   **Messages**
-   Messages are texts that can contain up to four placeholders for value replacements and that can be sent using the statement `MESSAGE`.
-   **Program Terminations**
-   The language elements [`RAISE SHORTDUMP`](ABAPRAISE_SHORTDUMP.html) and [`THROW SHORTDUMP`](ABENCONDITIONAL_EXPRESSION_RESULT.html) make it possible to resolve runtime errors linked with an exception object. The attributes of the exception object can be listed in the short dump of the runtime error.

-   [Exceptions](ABENCLASS_EXCEPTION_GUIDL.html) are to be used in all unexpected situations that the user does not have under control. These include, for example, invalid parameter values during the procedure call or unavailable external resources, such as files.
-   [Assertions](ABENASSERTIONS_GUIDL.html) are to be used to detect inconsistent program states that necessitate an immediate program termination.
-   [Messages](ABENMESSAGES_GUIDL.html) are to be used only as dialog messages for error dialogs within the scope of classic dynpro processing (if still available). If you want to implement a program termination in situations where it is not a good idea for the program to continue, use assertions from now on instead of termination or exit messages.
-   Targeted program terminations should only be used as a last resource when a program cannot otherwise execute correctly. They can be raised by failed assertions `RAISE SHORTDUMP`, `THROW SHORTDUMP`, or exit messages. Exit messages, if used, offer the fewest options for passing error information to the short dump. Assertions make it possible to write log entries and can be controlled from outside the program. `RAISE SHORTDUMP` and `THROW SHORTDUMP` pass exception objects and their attributes, which is of particular use for analyzing previous exceptions.

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenarchitecture\_gdl.html abenerror\_handling\_gdl.html