---
title: "ABENABAP_MESSAGES"
description: |
  ABENABAP_MESSAGES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_MESSAGES.htm"
abapFile: "ABENABAP_MESSAGES.html"
keywords: ["if", "class", "ABENABAP", "MESSAGES"]
---

Messages are [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) that are managed using a message maintenance tool. Fundamentally, a message is a short text that can be expanded using an optional long text. A message is identified with the following key:

A message is created with an original language and can be translated to other languages.

The statement [`MESSAGE`](ABAPMESSAGE.html) is the basic statement for working with messages in an ABAP program. When the statement `MESSAGE` is used to send a message, the message key and a [message type](ABENMESSAGE_TYPE_GLOSRY.html) must be specified. Optionally, placeholders in the message text can be filled with values.

Only the variant with the addition [`INTO`](ABAPMESSAGE_INTO.html) can be used in the current ABAP language version [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html).

-   A 20-character message class
-   A 3-digit message number

-   The variant [`MESSAGE ... INTO`](ABAPMESSAGE_INTO.html) assigns the short text of the message to a field.

-   [`MESSAGE`](ABAPMESSAGE.html)
-   [Messages - System Interfaces](ABENMESSAGE_INTERFACES.html)

abenabap.html abenabap\_reference.html abenabap\_texts.html