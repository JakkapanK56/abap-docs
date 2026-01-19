---
title: "ABAPMESSAGE"
description: |
  ABAPMESSAGE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMESSAGE.htm"
abapFile: "ABAPMESSAGE.html"
keywords: ["insert", "update", "do", "if", "case", "catch", "method", "class", "data", "types", "ABAPMESSAGE"]
---

[Short Reference](ABAPMESSAGE_SHORTREF.html)

``MESSAGE \{\ [`msg`](ABAPMESSAGE_MSG.html)  |\ [`text`](ABAPMESSAGE_TEXT.html)  \}\          \{  \{\ [DISPLAY LIKE dtype]\ [WITH dobj1 ... dobj4]\ \}\          |  \{\ [DISPLAY LIKE dtype]\ [WITH dobj1 ... dobj4]\ [`RAISING exception`](ABAPMESSAGE_RAISING.html)\ \}\          |  \{                      [WITH dobj1 ... dobj4]\ [`INTO text`](ABAPMESSAGE_INTO.html)\ \}\ \}.``

[1. `... DISPLAY LIKE dtype`](#ABAP_ADDITION_1@3@)

[2. `... WITH dobj1 ... dobj4`](#ABAP_ADDITION_2@3@)

The statement `MESSAGE` sends either the short text of a [message](ABENMESSAGE_GLOSRY.html) specified in [`msg`](ABAPMESSAGE_MSG.html) from the table [`T100`](ABENABAP_MESSAGES_STORING.html) in the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) of the current user or any text specified in [`text`](ABAPMESSAGE_TEXT.html). The following variants are available:

The DDIC structure `SYMSG` contains components `MSGTY`, `MSGID`, `MSGNO`, `MSGV1`, `MSGV2`, `MSGV3`, `MSGV4` of the same types as the above system fields and can be used to handle the properties of a message in one structured data object.

Display of an [information message](ABENINFORMATION_MESSAGE_GLOSRY.html).

When this addition is used, the icon of the [message type](ABENMESSAGE_TYPE_GLOSRY.html) specified in `dtype` is displayed instead of the associated icon. `dtype` expects a character-like data objects containing one of the values *A*, *E*, *W*, *S*, or *I* in uppercase letters.

For messages displayed in a dialog box by default, the short text is still displayed as a dialog box. Messages with the type *E* or *W*, except those at PBO and `LOAD-OF-PROGRAM`, are displayed as a dialog box if `dtype` contains *A* or *I*. Messages with the type *S* are always displayed in the status bar, regardless of the `dtype`. The latter also applies to messages of the type *I* for PBO and `LOAD-OF-PROGRAM`. Messages of the type *X* always cause a runtime error.

Display of an [information message](ABENINFORMATION_MESSAGE_GLOSRY.html) with the icon of a [status message](ABENSTATUS_MESSAGE_GLOSRY.html).

This addition replaces the placeholders *&1* to *&4* and *&* of the short text or *&V1&* to *&V4&* of the long text of the message with the formatted content of the operands `dobj1`, ..., `dobj4`. Up to four operands `dobj1` through `dobj4` can be specified. They can have the same data type as a source field of the statement [`WRITE TO`](ABAPWRITE_TO.html) and they are formatted in accordance with the associated [predefined formats](ABENWRITE_FORMATS.html) with an output length of 50. If the data type is character-like, `dobj1` through `dobj4` are [character-like expression positions](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). If it is not character-like, they are [functional operand positions](ABENFUNCTIONAL_POSITION_GLOSRY.html).

The position of an operand determines which placeholder is replaced. The formatted content of the first operand replaces the placeholders *&1*, the first placeholder *&* and *&V1&*, the second replaces *&2*, the second *&* and *&V2&* etc. Furthermore, the formatted content of the operands `dobj1`, ..., `dobj4` is assigned in sequence to the system fields `sy-msgv1` to `sy-msgv4`.

If fewer operands than placeholders are specified, surplus placeholders are not displayed in the short text and the associated system fields `sy-msgv1` to `sy-msgv4` are initialized. If a specified operand cannot be assigned to a placeholder, it is ignored.

If the system fields `sy-msgid`, `sy-msgno`, and `sy-msgv1` through `sy-msgv4` are specified directly after `WITH`, the values set by the current `MESSAGE` statement are used. If they are specified as operands of character-like expressions, the preceding values are used.

The addition `WITH` cannot be used with the output of a text [`txt`](ABAPMESSAGE_TEXT.html) or when an object reference variable is specified in [`msg`](ABAPMESSAGE_MSG.html).

The short text of the specified message in the table `T100` contains the value *& & & &* and the message text *This is not America* is displayed as an [information message](ABENINFORMATION_MESSAGE_GLOSRY.html). If the short text were defined as *&4 &1 &3 &2*, the output would be *America This not is*.

-   If one of the additions `RAISING` or `INTO` is not specified, the statement `MESSAGE` interrupts the program flow and sends the message. The exact [behavior](ABENABAP_MESSAGES_TYPES.html) of this basic form of the statement `MESSAGE`, that is, how the message text is displayed and how the program flow is continued after the `MESSAGE` statement, is context-dependent and is determined by a [message type](ABENMESSAGE_TYPE_GLOSRY.html) specified in `msg` or `text`.
-   If the addition [`RAISING`](ABAPMESSAGE_RAISING.html) is specified, the statement `MESSAGE` raises a [non-class-based exception](ABENEXCEPTIONS_NON_CLASS.html) in function modules or methods. If the exception is not handled, the message is sent in the same way as when the addition `RAISING` is not specified.
-   If the addition [`INTO`](ABAPMESSAGE_INTO.html) is specified, the program flow is not interrupted and the short text of the message is assigned to a field instead.

-   Messages sent without one of the additions `RAISING` or `INTO` are a way of interacting with a user. Except for messages of the type *X*, the statement `MESSAGE` should be used exclusively in the presentation logic layer and never in the actual application logic layer.
-   The addition `RAISING` can also be specified together with `INTO`, but it is ignored in this case.
-   Setting the [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html) using the statement [`SET LOCALE`](ABAPSET_LOCALE.html) does not affect the language in which the message is displayed.

-   The use of this addition does not affect the behavior determined by the message type, but only the type of display.
-   Specifying *X* for `dtype` is not recommended, since no icon is assigned to this message type.

-   If a short text contains placeholders of both forms *&i* and *&*, the content of an operand can replace two placeholders. The operand at the position i not only replaces *&i* but also the i-th placeholder at position *&*. It is advisable to use only one of the two forms for placeholders in a single short text. If a short text is to be translated into other languages, only the numbered placeholder *&i* can be used, since the structure of the sentence may change.
-   Duplicate characters *&&* are converted to *&* in the output.

-   To enable the output of an *&* character, it must be specified in the short text as *&&*.
-   To output multiple placeholders one after the other, the *&* characters must be separated by blanks in the short text.

-   For reasons of downward compatibility, the character *$* is handled in the same way as *&* in short texts. The same is true for *$i*. Therefore, *$$* must be specified if *$* is to be the output.
-   In long texts, the placeholders from *&V1&* to *&V4&* must be stored as such in the database. If the *Graphical PC Editor* is used, they cannot be entered directly, but must be inserted using *Insert -> Symbols -> Text Symbols*.

-   *Cause:* Message type unknown
    *Runtime error:*\\ `MESSAGE_TYPE_UNKNOWN`
-   *Cause:* Deliberate termination with short dump
    *Runtime error:*\\ `MESSAGE_TYPE_X`\\
    *Runtime error:*\\ `MESSAGE_TYPE_X_TEXT`
-   *Cause:* It is not possible to catch messages of the type `'A'` using the language element `CALL FUNCTION ... EXCEPTIONS error_message` in `ON COMMIT` processing
    *Runtime error:*\\ `MESSAGE_ROLLBACK_ON_COMMIT`
-   *Cause:* It is not possible to catch messages of the type `'A'` using the language element `CALL FUNCTION ... EXCEPTIONS error_message` in updates
    *Runtime error:*\\ `MESSAGE_ROLLBACK_IN_POSTING`

MESSAGE 'Success!' TYPE 'I'. MESSAGE 'Success!' TYPE 'I' DISPLAY LIKE 'S'. MESSAGE ID 'SABAPDEMOS' TYPE 'I' NUMBER '888' \\n WITH 'This' 'is' 'not' 'America'. **Name** **Meaning** `sy-msgid` Contains the message class after a message is sent, and the value *00* after any text is sent. `sy-msgno` Contains the message number after a message is sent, and the value *001* after any text is sent. `sy-msgty` Contains the identifier of the message type with which the message or the text was sent. `sy-msgv1` to `sy-msgv4` Contain the content of the data objects specified after the addition `WITH` in the order of the objects after a message is sent, and the first 200 characters of the data object `text` after any text is sent. abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html