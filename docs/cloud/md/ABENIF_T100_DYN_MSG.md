---
title: "ABENIF_T100_DYN_MSG"
description: |
  ABENIF_T100_DYN_MSG - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENIF_T100_DYN_MSG.htm"
abapFile: "ABENIF_T100_DYN_MSG.html"
keywords: ["if", "try", "catch", "class", "data", "ABENIF", "T100", "DYN", "MSG"]
---

The interface `IF_T100_DYN_MSG` contains the interface [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html) as a component interface and adds the following to it:

Like `IF_T100_MESSAGE`, the interface `IF_T100_DYN_MSG` associates classes with messages, whereby the attributes for the message type and placeholders of the message are already predefined.

[`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) is used to raise an exception of the class `CX_DEMO_DYN_T100`, which implements the interface `IF_T100_DYN_MSG`.

-   The attribute `MSGTY` for the message type
-   The attributes `MSGV1` to `MSGV4` for the placeholders of the message

-   The interface `IF_T100_DYN_MSG` is designed specifically for raising class-based exceptions with the addition [`MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html) of the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) or the addition [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in [conditional expressions](ABENCONDITIONAL_EXPRESSIONS.html). The properties of the message specified after `MESSAGE` are assigned automatically to the associated attributes in [exception classes](ABENEXCEPTIONS_CLASSES.html) that include `IF_T100_DYN_MSG`.
-   The addition [`MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html) of `RAISE EXCEPTION` and/or `THROW` has a short form `USING MESSAGE`. This can be used for exception classes with the interface `IF_T100_DYN_MSG` and enables determining the message from the current content of the system fields `sy-msg...`. The short form can be used particularly for converting classical exceptions to class-based exceptions.
-   If the object reference variable `oref` points to an object that includes the system interface `IF_T100_DYN_MSG` in the variant [`MESSAGE oref`](ABAPMESSAGE_MSG.html) of the statement [`MESSAGE`](ABAPMESSAGE.html), the addition `TYPE` can be omitted and the message type from the interface attribute `MSGTY` of the object is used implicitly.

-   [System Interface `IF_T100_DYN_MSG` in a Regular Class](ABENIF_T100_DYN_MSG_ABEXA.html)
-   [System Interface `IF_T100_DYN_MSG` in a Local Exception Class](ABENRAISE_MESSAGE_ABEXA.html)
-   [System Interface `IF_T100_DYN_MSG` for Exception `error_message`](ABENRAISE_ERROR_MESSAGE_ABEXA.html)

DATA col TYPE c LENGTH 1. \\n\\ \\n... \\n\\ \\nTRY. \\n FINAL(color) = COND string( \\n WHEN col = 'R' THEN 'red' \\n WHEN col = 'B' THEN 'blue' \\n WHEN col = 'G' THEN 'green' \\n ELSE THROW cx\_demo\_dyn\_t100( \\n MESSAGE e888(sabapdemos) \\n WITH 'Illegal value:' col ) ). \\n CATCH cx\_demo\_dyn\_t100. \\n ... \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abenmessage\_interfaces.html