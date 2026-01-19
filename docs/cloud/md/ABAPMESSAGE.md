---
title: "ABAPMESSAGE"
description: |
  ABAPMESSAGE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMESSAGE.htm"
abapFile: "ABAPMESSAGE.html"
keywords: ["insert", "do", "if", "class", "data", "types", "ABAPMESSAGE"]
---

``MESSAGE \{\ [`msg`](ABAPMESSAGE_MSG.html)  \}\          \{  \{                      [WITH dobj1 ... dobj4]\ [`INTO text`](ABAPMESSAGE_INTO.html)\ \}\ \}.``

[1. `... DISPLAY LIKE dtype`](#ABAP_ADDITION_1@3@)

[2. `... WITH dobj1 ... dobj4`](#ABAP_ADDITION_2@3@)

The statement `MESSAGE` sends the short text of a [message](ABENMESSAGE_GLOSRY.html) specified in [`msg`](ABAPMESSAGE_MSG.html) from the table `T100` in the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) of the current user.

Only the variant with the addition [`INTO`](ABAPMESSAGE_INTO.html) can be used in the current ABAP language version [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html).

The DDIC structure `SYMSG` contains components `MSGTY`, `MSGID`, `MSGNO`, `MSGV1`, `MSGV2`, `MSGV3`, `MSGV4` of the same types as the above system fields and can be used to handle the properties of a message in one structured data object.

Assignment of a message to a string.

This addition replaces the placeholders *&1* to *&4* and *&* of the short text or *&V1&* to *&V4&* of the long text of the message with the formatted content of the operands `dobj1`, ..., `dobj4`. Up to four operands `dobj1` through `dobj4` can be specified. They can have the same data type as a source field of the statement `WRITE TO` and they are formatted in accordance with the associated predefined formats with an output length of 50. If the data type is character-like, `dobj1` through `dobj4` are [character-like expression positions](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). If it is not character-like, they are [functional operand positions](ABENFUNCTIONAL_POSITION_GLOSRY.html).

The position of an operand determines which placeholder is replaced. The formatted content of the first operand replaces the placeholders *&1*, the first placeholder *&* and *&V1&*, the second replaces *&2*, the second *&* and *&V2&* etc. Furthermore, the formatted content of the operands `dobj1`, ..., `dobj4` is assigned in sequence to the system fields `sy-msgv1` to `sy-msgv4`.

If fewer operands than placeholders are specified, surplus placeholders are not displayed in the short text and the associated system fields `sy-msgv1` to `sy-msgv4` are initialized. If a specified operand cannot be assigned to a placeholder, it is ignored.

If the system fields `sy-msgid`, `sy-msgno`, and `sy-msgv1` through `sy-msgv4` are specified directly after `WITH`, the values set by the current `MESSAGE` statement are used. If they are specified as operands of character-like expressions, the preceding values are used.

The addition `WITH` cannot be used with the output of a text `txt` or when an object reference variable is specified in [`msg`](ABAPMESSAGE_MSG.html).

The short text of the specified message in the table `T100` contains the value *& & & &* and the message text *This is not America* is assigned to a variable. If the short text were defined as *&4 &1 &3 &2*, the text would be *America This not is*.

-   If the addition [`INTO`](ABAPMESSAGE_INTO.html) is specified, the program flow is not interrupted and the short text of the message is assigned to a field instead.

-   If a short text contains placeholders of both forms *&i* and *&*, the content of an operand can replace two placeholders. The operand at the position i not only replaces *&i* but also the i-th placeholder at position *&*. It is advisable to use only one of the two forms for placeholders in a single short text. If a short text is to be translated into other languages, only the numbered placeholder *&i* can be used, since the structure of the sentence may change.
-   Duplicate characters *&&* are converted to *&* in the output.

-   To enable the output of an *&* character, it must be specified in the short text as *&&*.
-   To output multiple placeholders one after the other, the *&* characters must be separated by blanks in the short text.

-   For reasons of downward compatibility, the character *$* is handled in the same way as *&* in short texts. The same is true for *$i*. Therefore, *$$* must be specified if *$* is to be the output.
-   In long texts, the placeholders from *&V1&* to *&V4&* must be stored as such in the database. If the *Graphical PC Editor* is used, they cannot be entered directly, but must be inserted using *Insert -> Symbols -> Text Symbols*.

MESSAGE i014(sabapdemos) INTO FINAL(msg). MESSAGE s888(sabapdemos) \\n WITH 'This' 'is' 'not' 'America' \\n INTO FINAL(msg). **Name** **Meaning** `sy-msgid` Contains the message class after a message is sent, and the value *00* after any text is sent. `sy-msgno` Contains the message number after a message is sent, and the value *001* after any text is sent. `sy-msgty` Contains the identifier of the message type with which the message or the text was sent. `sy-msgv1` to `sy-msgv4` Contain the content of the data objects specified after the addition `WITH` in the order of the objects after a message is sent, and the first 200 characters of the data object `text` after any text is sent. abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html