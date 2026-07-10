---
title: "Messages - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessages_guidl.htm"
abapFile: "abenmessages_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Architecture](ABENARCHITECTURE_GUIDL.md) →  [Error Handling](ABENERROR_HANDLING_GUIDL.md) → 

Messages

Background

Messages are texts that are created using a message editor (transaction SE91). They are stored in the system table T100. In ABAP programs, the statement [MESSAGE](ABAPMESSAGE.md) is the main element for using messages. In its basic form, this statement sends a message; by specifying a message type, the display type and subsequent program behavior can be defined. For this reason, a distinction is made between the following message types:

-   Status message (S)

-   Information message (I)

-   Warning (W)

-   Error message (E)

-   Termination (abort) message (A)

In addition, there is a special message type, exit message (X), which causes a targeted program termination with a runtime error.

The actual system behavior after a message is sent is highly context-dependent. The current version of the ABAP keyword documentation contains a [detailed list](ABENABAP_MESSAGES_TYPES.md) of effects caused by different message types in different contexts (such as dialog processing, background processing, during an RFC and during the processing of HTTP requests).

The original purpose of messages is to act as dialog messages to display short information (types I and S) and handle incorrect user input (types W and E), during classic dynpro processing. Messages also have aspects that overlap with exceptions:

-   The statement [MESSAGE ... RAISING](ABAPMESSAGE_RAISING.md) is a combination of the statements MESSAGE and RAISE which enables classic exceptions to be associated with messages.

-   Using the special, predefined classic exception, error\_message, error and termination messages (that occur when function modules run) can be handled in the same way as exceptions. This also applies to messages sent from the ABAP runtime environment (for example, when the automatic input check of classic dynpros is running).

-   In exception classes, [exception texts](ABENEXCEPTION_TEXTS_GUIDL.md "Guideline") can be defined with a reference to messages. The message types A and X can also be used for direct program terminations.

Note

A further variant, [MESSAGE ... INTO](ABAPMESSAGE_INTO.md) makes it possible to copy the short texts of messages into fields.

Rule

Only use messages for error handling in classic dynpros and as exception texts

Only send dialog messages in PAI processing of classic dynpros. Messages should only be used as exception texts and should no longer be used anywhere else. In particular, messages should no longer be used to force program terminations.

Details

The wide use of messages for different purposes can be traced back to the previous programming model, which was only driven by classic dynpros. Here, an exception situation usually always required the direct output of a message to the user. This concept was adopted for other situations, such as targeted program terminations. Triggering a dialog message within application logic procedures violates the [SoC principle](ABENSEPERATION_CONCERNS_GUIDL.md "Guideline") and limits the usability of the relevant procedure ([Method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md "Guideline")) to the context of classic dynpro processing. The predefined exception error\_message should be regarded as a workaround that enables procedures to be executed for sending messages in the application logic or in the background.

In new programs, the use of messages should be restricted as described below.

Dialog Messages

In cases where [classic dynpros](ABENUSER_INTERFACES_GUIDL.md "Guideline") are still used, message types E, I, S, and W are still suitable for sending information to the user or for running error dialogs at the time of PAI (which is the original purpose of these messages types). Running error dialogs, in particular, is supported by the statements FIELD and CHAIN of the dynpro flow logic.

Exception Texts

Messages are the recommended category of text for [exception texts](ABENEXCEPTION_TEXTS_GUIDL.md "Guideline"). The statement MESSAGE allows these exception texts to be sent directly as dialog messages. A reference to a corresponding exception object can be specified directly. From a technical point of view, a reference must be specified to an object whose class includes the interface [IF\_T100\_MESSAGE](ABENIF_T100_MESSAGE.md).

Messages in procedures where classic exceptions are still necessary can continue to replace real exception texts. This is done by using the statement [MESSAGE ... RAISING](ABAPRAISE_EXCEPTION.md) instead of [RAISE](ABAPMESSAGE_RAISING.md). During this process, information about the exception text is passed to the handler, in the system fields sy-msgid and sy-msgv1 - sy-msgv4. These fields are filled using the statement MESSAGE. This works especially well for handling exceptions during an RFC, for which class-based exception handling is not possible. When a classic exception of this type is handled or a message caught using [error\_message](ABAPCALL_FUNCTION_PARAMETER.md), the message can then be raised as an exception and forwarded with a suitable message class. The system interface [IF\_T100\_DYN\_MSG](ABENIF_T100_DYN_MSG.md) and the addition [MESSAGE](ABAPRAISE_EXCEPTION_MESSAGE.md) of the statement [RAISE EXCEPTION](ABAPRAISE_EXCEPTION_CLASS.md) and of the addition [THROW](ABENCONDITIONAL_EXPRESSION_RESULT.md) in a [conditional exception](ABENCONDITIONAL_EXPRESSIONS.md) are used for these cases.

Program Terminations

Message types A and X cause program terminations (aborts) and should no longer be used:

-   If a termination message of type A is sent, the statement ROLLBACK WORK is executed implicitly. This can lead to unexpected results, if the message is handled with error\_message as a classic exception (rather than causing a program termination) To be on the safe side, the statements ROLLBACK WORK and LEAVE PROGRAM should be used explicitly to exit the program.

-   If a message of type X is sent, the program is terminated with the runtime error MESSAGE\_ TYPE\_X. When programs are forced to terminate due to internal inconsistencies, however, [assertions](ABENASSERTIONS_GUIDL.md "Guideline") or the language elements [RAISE SHORTDUMP](ABAPRAISE_SHORTDUMP.md) or [THROW SHORTDUMP](ABENCONDITIONAL_EXPRESSION_RESULT.md) should now be used. The values specified here using the addition FIELDS of the statement ASSERT or the exception object RAISE SHORTDUMP or THROW SHORTDUMP are usually better suited for troubleshooting than a message.

Exception

Exit messages can still be used if you want only the text of the message to appear in the short dump of the runtime error. However, this should not be misunderstood as communication with the user. A runtime error is not a suitable way of communicating with users. For a simple, unconditional program termination, however, exit messages should no longer be used. Instead, where required, the language elements [RAISE SHORTDUMP](ABAPRAISE_SHORTDUMP.md) or [THROW SHORTDUMP](ABENCONDITIONAL_EXPRESSION_RESULT.md) can be used instead.
