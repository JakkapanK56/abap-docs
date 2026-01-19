---
title: "ABAPMESSAGE_MSG"
description: |
  ABAPMESSAGE_MSG - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMESSAGE_MSG.htm"
abapFile: "ABAPMESSAGE_MSG.html"
keywords: ["do", "if", "case", "catch", "class", "data", "types", "ABAPMESSAGE", "MSG"]
---

`... \{ tn \}`\\ 
  `|\ \{ tn(id) \}`\\ 
  `|\ \{ ID mid TYPE mtype NUMBER num \}`\\ ` ...`

[1. `... tn ...`](#ABAP_ALTERNATIVE_1@2@)

[2. `... tn(id) ...`](#ABAP_ALTERNATIVE_2@2@)

[3. `... ID mid TYPE mtype NUMBER num ...`](#ABAP_ALTERNATIVE_3@2@)

`msg` specifies a [message](ABENMESSAGE_GLOSRY.html) from the database table `T100` either by specifying the message key consisting of `id` and `n` directly or by using the content of the data objects `mid` and `num` for the message class and the message number. Alternatively, an object reference variable `oref` is specified whose [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html) implements the interface [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html).

The [message type](ABENMESSAGE_TYPE_GLOSRY.html) that controls the behavior of the message must be specified directly in `t` or as content of the data object `mtype`. The following message types are possible: *A*, *E*, *I*, *S*, *W*, or *X*. An invalid type produces a syntax error or runtime error.

If the specified message is not found for the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) of the current user, a search is made in the [secondary language](ABENSECONDARY_LANGUAGE_GLOSRY.html) in AS ABAP and then in English. If it is still not found, the specified message type, message class, and message number are used as short text in uppercase letters and separated by a colon *:*.

The system fields of the statement `MESSAGE` are always supplied with the specified values.

`t` and `n` are used to specify the single-character message type and the three-digit message number directly one after another (static short form). The message class must be specified with the addition `MESSAGE-ID` in the statement that introduces the program.

Display of the short text of the message with the number 014 from the message class `SABAPDOCU` as an [information message](ABENINFORMATION_MESSAGE_GLOSRY.html).

The same applies to `t` and `n` as to the static short form. In the static long form, the message class is specified directly in parentheses using `id`.

Specifying the message class explicitly overrides the addition `MESSAGE-ID` of the statement that introduces the program. Specifying the message class in parentheses does not mean here that the content of `id` is used. Instead, the message class is used that has the name that was specified directly with `id`.

As in the example for alternative 1, with the message class specified explicitly.

The message class, the message type, and the message number are specified as content of the data objects `mid`, `mtype`, and `num` (dynamic form). `mid` and `mtype` expect character-like data objects that must contain the message class or the message type in uppercase letters. Invalid message types raise an uncatchable exception. `num` expects a data object of the type `n` and length 3.

Specifying the message class explicitly overrides the addition `MESSAGE-ID` of the statement that introduces the program.

As in the example for alternative 2, with the message and the message type specified dynamically.

REPORT rep MESSAGE-ID sabapdemos. \\n... \\nMESSAGE i014. MESSAGE i014(sabapdemos) INTO FINAL(msg). DATA: mid TYPE sy-msgid VALUE 'SABAPDEMOS', \\n mtype TYPE sy-msgty VALUE 'I', \\n num TYPE sy-msgno VALUE '014'. \\n\\ \\nMESSAGE ID mid TYPE mtype NUMBER num INTO FINAL(msg). abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abapmessage.html