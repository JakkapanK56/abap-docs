---
title: "ABENABAP_MESSAGES_TYPES"
description: |
  ABENABAP_MESSAGES_TYPES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MESSAGES_TYPES.htm"
abapFile: "ABENABAP_MESSAGES_TYPES.html"
keywords: ["update", "if", "class", "types", "ABENABAP", "MESSAGES", "TYPES"]
---

When a [message](ABENMESSAGE_GLOSRY.html) is sent using the statement [`MESSAGE`](ABAPMESSAGE.html), it must be classified with a single-character [message type](ABENMESSAGE_TYPE_GLOSRY.html). For the basic form of the statement `MESSAGE`, the message type defines how the message is displayed and determines the subsequent program flow. Valid message types are *A*, *E*, *I*, `S`, *W*, and *X*. The abbreviations stand for termination (abort) message, error message, information message, status message, warning, and exit message.

The system behavior after sending a message of a particular type with the basic form of the statement [`MESSAGE`](ABAPMESSAGE.html), that is, without the additions [`RAISING`](ABAPMESSAGE_RAISING.html) or [`INTO`](ABAPMESSAGE_INTO.html), is context-dependent:

-   [Messages in list processing](ABENABAP_MESSAGE_LIST_PROCESSING.html)
-   [Messages in Dialog Processing](ABENABAP_MESSAGE_DIALOG.html)
-   [Messages in Control Processing](ABENABAP_MESSAGE_CONTROL.html)
-   [Messages in Batch Input](ABENABAP_MESSAGE_BATCH_INPUT.html)
-   [Messages in Background Processing](ABENABAP_MESSAGE_BATCH_JOB.html)
-   [Messages in Updates](ABENABAP_MESSAGE_UPDATE.html)
-   [Messages in Conversion Exits](ABENABAP_MESSAGE_EXIT.html)
-   [Messages in Procedures](ABENABAP_MESSAGE_PROCEDURE.html)
-   [Messages in RFC Processing](ABENABAP_MESSAGE_RFC.html)
-   [Messages in ICF Processing](ABENABAP_MESSAGE_HTTP_SERVER.html)
-   [Messages in APC Processing](ABENABAP_MESSAGE_APC_SERVER.html)
-   [Messages in ABAP daemon Processing](ABENABAP_MESSAGE_DAEMON.html)

-   Messages that are sent with the basic form of the statement [`MESSAGE`](ABAPMESSAGE.html) are mainly intended for use in dialog processing for the PAI event. Therefore, messages of type *E* and *W* allow an error dialog to be used in connection with the statement [`FIELD`](FIELD.html) of the [dynpro structure logic](ABENDYNP_FIELD_MESSAGES.html). Therefore messages of type *E* or *W*, in particular, should never be used in other contexts.
-   In list processing, warnings are always turned into error messages before being processed further, regardless of any other context.
-   An alternative to creating [runtime errors](ABENRUNTIME_ERROR_GLOSRY.html) with messages of type *X* are [assertions](ABENASSERTION_GLOSRY.html) and the language elements [`RAISE SHORTDUMP`](ABAPRAISE_SHORTDUMP.html) and [`THROW SHORTDUMP`](ABENCONDITIONAL_EXPRESSION_RESULT.html).

abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html