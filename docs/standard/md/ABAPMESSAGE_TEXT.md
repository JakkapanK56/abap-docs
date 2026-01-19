---
title: "ABAPMESSAGE_TEXT"
description: |
  ABAPMESSAGE_TEXT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMESSAGE_TEXT.htm"
abapFile: "ABAPMESSAGE_TEXT.html"
keywords: ["if", "case", "try", "catch", "data", "types", "field-symbol", "ABAPMESSAGE", "TEXT"]
---

[Short Reference](ABAPMESSAGE_SHORTREF.html)

`... text TYPE mtype ...`

This variant sends a character string in `text` as a [message](ABENMESSAGE_GLOSRY.html) of the [message type](ABENABAP_MESSAGES_TYPES.html) specified in `mtype`. `text` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html) whose value is used as the short text of the message. Only the first 300 characters are used. No long text can be defined for a message of this type.

`mtype` expects a character-like data object containing the message type in uppercase letters. Invalid message types raise an uncatchable exception.

In this variant, the addition [`WITH`](ABAPMESSAGE.html) and the variant with [`INTO`](ABAPMESSAGE_INTO.html) are not allowed.

Output of an exception text as an [information message](ABENINFORMATION_MESSAGE_GLOSRY.html).

-   If field symbols or formal parameters of the type `any` or `data` are specified for `text`, these must be character-like when the statement is executed. The variant [`MESSAGE oref`](ABAPMESSAGE_MSG.html), which has identical syntax, cannot be executed using generically typed field symbols or formal parameters.
-   The system fields `sy-msgid` and `sy-msgno` are filled in a non-specific way when a character string is specified, which means that this variant should only be used on rare occasions if the content of the system fields is not required for identifying the message. Otherwise, in all cases in which messages are passed using these system fields, for example, from [function modules](ABAPCALL_FUNCTION_PARAMETER.html), or logged, language-independent access to the message text would be lost.

DATA oref TYPE REF TO cx\_sy\_arithmetic\_error. \\nTRY. \\n ... \\n CATCH cx\_sy\_arithmetic\_error INTO oref. \\n MESSAGE oref->get\_text( ) TYPE 'I'. \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abapmessage.html