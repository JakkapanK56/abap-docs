---
title: "ABENABAP_MESSAGES"
description: |
  ABENABAP_MESSAGES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MESSAGES.htm"
abapFile: "ABENABAP_MESSAGES.html"
keywords: ["if", "class", "data", "types", "ABENABAP", "MESSAGES"]
---

Messages are [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) that are managed using a [message maintenance](ABENMESSAGE_MAINTENANCE_GLOSRY.html) tool. Fundamentally, a message is a short text that can be expanded using an optional long text. A message is identified with the following key:

A message is created with an original language and can be translated to other languages.

The statement [`MESSAGE`](ABAPMESSAGE.html) is the basic statement for working with messages in an ABAP program. When the statement `MESSAGE` is used to send a message, the message key and a [message type](ABENMESSAGE_TYPE_GLOSRY.html) must be specified. Optionally, placeholders in the message text can be filled with values.

The message type defines the system behavior when the message is sent.

The system interfaces [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html) and [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html) make it possible to associate objects with messages and send them using the statement `MESSAGE`. This is intended mainly for [exception texts](ABENEXCEPTION_TEXTS.html) of exception classes.

After sending a message, a set of system fields contain the properties of the message, namely the message type the message key and the values for the placeholders.. The DDIC structure `SYMSG` contains components that allows this information to be stored in one structured data object.

[Only use messages for error handling in classic dynpros and as exception texts](ABENMESSAGES_GUIDL.html)

-   A 20-character message class
-   A 3-digit message number

-   In the basic form of the statement `MESSAGE`, the [behavior](ABENABAP_MESSAGES_TYPES.html) of a message depends on the context in which the message was sent
-   The variant [`MESSAGE ... RAISING`](ABAPMESSAGE_RAISING.html) raises a [non-class-based exception](ABENEXCEPTIONS_NON_CLASS.html) and uses the message as its exception text.
-   The variant [`MESSAGE ... INTO`](ABAPMESSAGE_INTO.html) assigns the short text of the message to a field.

-   [Messages - Maintenance](ABENABAP_MESSAGES_STORING.html)
-   [Messages - Behavior](ABENABAP_MESSAGES_TYPES.html)
-   [`MESSAGE`](ABAPMESSAGE.html)
-   [Messages - System Interfaces](ABENMESSAGE_INTERFACES.html)

abenabap.html abenabap\_reference.html abenabap\_texts.html