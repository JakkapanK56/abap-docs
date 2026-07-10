---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMESSAGES_GUIDL.html"
abapFile: "ABENMESSAGES_GUIDL.html"
type: "abap-reference"
---

## Background

Messages are texts that are created using a [message maintenance](ABENMESSAGE_MAINTENANCE_GLOSRY.md). They are stored in the system table `T100`. In ABAP programs, the statement [`MESSAGE`](ABAPMESSAGE.md) is the main element for using messages. In its basic form, this statement sends a message; by specifying a message type, the display type and subsequent program behavior can be defined. For this reason, a distinction is made between the following message types:

-   Status message (S)
-   Information message (I)
-   Warning (W)
-   Error message (E)
-   Termination (abort) message (A)

In addition, there is a special message type, exit message (X), which causes a targeted program termination with a runtime error.

The actual system behavior after a message is sent is highly context-dependent. The current version of the ABAP keyword documentation contains a [detailed list](ABENABAP_MESSAGES_TYPES.md) of effects caused by different message types in different contexts (such as dialog processing, background processing, during an RFC and during the processing of HTTP requests).

The original purpose of messages is to act as dialog messages to display short information (types I and S) and handle incorrect user input (types W and E), during classic dynpro processing. Messages also have aspects that overlap with exceptions:

-   The statement [`MESSAGE ... RAISING`](ABAPMESSAGE_RAISING.md) is a combination of the statements `MESSAGE` and `RAISE` which enables classic exceptions to be linked with messages.
-   Using the special, predefined classic exception, `error_message`, error and termination messages (that occur when function modules run) can be handled in the same way as exceptions. This also applies to messages sent from the ABAP runtime framework (for example, when the automatic input check of classic dynpros is running).
-   In exception classes, [exception texts](ABENEXCEPTION_TEXTS_GUIDL.md) can be defined with a reference to messages. The message types A and X can also be used for direct program terminations.

## Hint

A further variant, [`MESSAGE ... INTO`](ABAPMESSAGE_INTO.md) makes it possible to copy the short texts of messages into fields.

## Rule

**Only use messages for error handling in classic dynpros and as exception texts**

Only send dialog messages in PAI processing of classic dynpros. Messages should only be used as exception texts and should no longer be used anywhere else. In particular, messages should no longer be used to force program terminations.

## Details

The wide use of messages for different purposes can be traced back to the previous programming model, which was only driven by classic dynpros. Here, an exception situation usually always required the direct output of a message to the user. This concept was adopted for other situations, such as targeted program terminations. Triggering a dialog message within application logic procedures violates the [SoC principle](ABENSEPARATION_CONCERNS_GUIDL.md) and limits the usability of the relevant procedure ([Method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md)) to the context of classic dynpro processing. The predefined exception `error_message` should be regarded as a workaround that enables procedures to be executed for sending messages in the application logic or in the background.

In new programs, the use of messages should be restricted as described below.

## Use

Exit messages can still be used if you want only the text of the message to appear in the short dump of the runtime error. However, this should not be misunderstood as communication with the user. A runtime error is not a suitable way of communicating with users. For a simple, unconditional program termination, however, exit messages should no longer be used. Instead, where required, the language elements [`RAISE SHORTDUMP`](ABAPRAISE_SHORTDUMP.md) or [`THROW SHORTDUMP`](ABENCONDITIONAL_EXPRESSION_RESULT.md) can be used instead.
