---
title: "ABENABAP_MESSAGE_BATCH_INPUT"
description: |
  ABENABAP_MESSAGE_BATCH_INPUT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MESSAGE_BATCH_INPUT.htm"
abapFile: "ABENABAP_MESSAGE_BATCH_INPUT.html"
keywords: ["data", "types", "ABENABAP", "MESSAGE", "BATCH", "INPUT"]
---

As in [dialog processing](ABENABAP_MESSAGE_DIALOG.html), messages in [batch input](ABENBATCH_INPUT_GLOSRY.html) can be converted to another message type depending on where they are called, for example from `I` to `S` in PBO processing or from *W* to *E* in list processing.

No message is displayed and instead is written to the batch input log, in accordance with the (converted) message type as follows:

-   Messages of type `S` are written to the log and the program continues.
-   Messages of type *I* and *W* are written to the log and the program continues. The user input Enter, which is required to continue the program, is created automatically.
-   Messages of type *E* and *A* are written to the log. The current program is terminated, and a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html) is executed for messages with the type *A*. The status of the current [batch input session](ABENBATCH_INPUT_SESSION_GLOSRY.html) is set to *processed with errors*. Processing of the session is then continued with the next program.
-   Messages of type *X*\\ [runtime error](ABENRUNTIME_ERROR_GLOSRY.html) with associated [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html). The status of the current [batch input session](ABENBATCH_INPUT_SESSION_GLOSRY.html) is set to *processed with errors*. Processing of the session is then continued with the next program.

abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abenabap\_messages\_types.html