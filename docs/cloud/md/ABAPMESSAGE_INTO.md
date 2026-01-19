---
title: "ABAPMESSAGE_INTO"
description: |
  ABAPMESSAGE_INTO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMESSAGE_INTO.htm"
abapFile: "ABAPMESSAGE_INTO.html"
keywords: ["do", "if", "data", "ABAPMESSAGE", "INTO"]
---

``MESSAGE [`msg`](ABAPMESSAGE_MSG.html)\ [`[WITH dobj1 ... dobj4]`](ABAPMESSAGE.html)\          INTO text.``

The statement [`MESSAGE`](ABAPMESSAGE.html) with the addition `INTO` assigns the short text of the message to the target field `text`. The [message type](ABENMESSAGE_TYPE_GLOSRY.html) is irrelevant. The program flow is not interrupted and no message processing takes place. The following can be specified for `text`:

The addition `INTO` cannot be specified when a text `text` is specified or when an object reference variable is specified in `msg`.

The short text of a message sent in a function module is assigned to the data object `mtext` declared inline when handling the exception [`error_message`](ABAPCALL_FUNCTION_PARAMETER.html) using the corresponding system fields.

-   An existing character-like variable.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of type `string` is declared.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nCALL FUNCTION 'DEMO\_FUNCTION\_ERROR\_MESSAGE' \\n EXCEPTIONS \\n error\_message = 4. \\nIF sy-subrc = 4. \\n MESSAGE ID sy-msgid TYPE sy-msgty NUMBER sy-msgno \\n INTO FINAL(mtext) \\n WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4. \\n out->write( mtext ). \\nENDIF. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abapmessage.html