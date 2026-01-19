---
title: "ABENABAP_MESSAGES_STORING"
description: |
  ABENABAP_MESSAGES_STORING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MESSAGES_STORING.htm"
abapFile: "ABENABAP_MESSAGES_STORING.html"
keywords: ["do", "if", "class", "data", "ABENABAP", "MESSAGES", "STORING"]
---

[Messages](ABENMESSAGE_GLOSRY.html) are created and changed using the message maintenance tool in [ADT](ABENADT_GLOSRY.html) or using transaction `SE91`.

The message short texts are stored as language-specific texts in the database table `T100` and are connected to translation tools. The following table shows the structure of the database table `T100`.

The message class and the message number are the language independent message key.

The long texts assigned to a message are managed as SAPscript documents in the document class `NA`.

Placeholders can be used in both short and long texts, which can be replaced by the content of data objects using the statement [`MESSAGE`](ABAPMESSAGE.html) and the addition [`WITH`](ABAPMESSAGE.html). The placeholders in a short text can be defined in the form *&i* or *&* and the placeholders in a long text can have the form *&Vi&*, where i is a digit between 1 and 4. If the actual character *&* is to be used literally, *&&* must be entered in the short text and *&* in the long text.

The program `DEMO_MESSAGE_TEXTS` uses the class `CL_DEMO_MESSAGE_TEXTS` to read the short text and long text of a message.

-   For reasons of downward compatibility, the character *$* is handled in the same way as *&* in short texts. The same is true for *$i*. *$* should not be used as a placeholder. However, *$$* must be specified if *$* is to be used literally.
-   It is recommended that only one of the two forms *&i* or *&* is used as a placeholder in a short text. If a short text is to be translated into other languages, only the numbered placeholder *&i* can be used, since the structure of the sentence may change.

Component Meaning `SPRSL` Single-character language key. `ARBGB` Maximum 20-character message class. The message class assigns messages to a specific area, such as an application area or a package. `MSGNR` Maximum three-digit message number. The range between 900 and 999 is reserved for customers. `TEXT` Short text with a maximum of 73 characters. An explanatory long text must be created when the short text is created if the message itself is not self-explanatory. abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html