---
title: "ABAPMESSAGE_SHORTREF"
description: |
  ABAPMESSAGE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMESSAGE_SHORTREF.htm"
abapFile: "ABAPMESSAGE_SHORTREF.html"
keywords: ["do", "if", "method", "class", "ABAPMESSAGE", "SHORTREF"]
---

[Reference](ABAPMESSAGE.html)

`MESSAGE \{ tn          | tn(id)          |\ \{ ID mid TYPE mtype NUMBER num \}\          |\ \{oref TYPE mtype\}\          |\ \{text TYPE mtype\}\ \}\          \{\ \{\ [DISPLAY LIKE dtype]\              [RAISING exception]\ \}\          |\ [INTO text]\ \}\          [WITH dobj1 ... dobj4].`

Sends a [message](ABENMESSAGE_GLOSRY.html).

**Specifies the message and message type:**

**Specifies the display type:**

**Raises a non-class-based exception**

-   [`tn`](ABAPMESSAGE_MSG.html) (message type `t`, message number `n`, message class from the addition `MESSAGE-ID` of the program introduction)
-   [`tn(id)`](ABAPMESSAGE_MSG.html) (message type `t`, message number `n`, message class `id`)
-   [`ID mid TYPE mtype NUMBER num`](ABAPMESSAGE_MSG.html) (message type from `mtype`, message number from `num`, message class from `mid`)
-   [`oref TYPE mtype`](ABAPMESSAGE_MSG.html) (message type from `mtype`, message number and message class from the interface `IF_T100_MESSAGE` implemented in the [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html) of the object reference variable `oref`)
-   [`text TYPE mtype`](ABAPMESSAGE_TEXT.html) (message type from `mtype`, message text from `text`)
    

-   [`DISPLAY LIKE dtype`](ABAPMESSAGE.html)\\
    Displays the message in a dialog box and uses the icon of the message type specified in `dtype`.
-   [`INTO text`](ABAPMESSAGE.html)\\
    Returns the message text in `text`; the message is not sent.
-   [`WITH dobj1 ... dobj4`](ABAPMESSAGE.html)\\
    Replaces the placeholders *&1* to *&4* and *&* of the message text with the content of `dobj1`, ... `dobj4`.
    

-   [`RAISING exception`](ABAPMESSAGE_RAISING.html)\\
    Either sends the message or raises a non-class-based exception `exception` in a [function module](ABENFUNCTION_MODULE_GLOSRY.html) or in a method. An exception is raised to which return codes were assigned in the call; another exception sends the message.

abenabap.html abenabap\_reference.html abenabap\_shortref.html