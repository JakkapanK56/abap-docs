---
title: "ABENABAP_MESSAGE_BATCH_JOB"
description: |
  ABENABAP_MESSAGE_BATCH_JOB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MESSAGE_BATCH_JOB.htm"
abapFile: "ABENABAP_MESSAGE_BATCH_JOB.html"
keywords: ["do", "if", "case", "class", "data", "types", "ABENABAP", "MESSAGE", "BATCH", "JOB"]
---

In [background processing](ABENBACKROUND_PROCESSING_GLOSRY.html), all messages are handled in accordance with the type specified in the statement `MESSAGE`.

**Note** There is one exception. [During list processing](ABENABAP_MESSAGE_LIST_PROCESSING.html), a message of type *W* changes to type *E* before handling. Since background processing starts internally with the [*SUBMIT*](ABAPSUBMIT_VIA_JOB.html) statement, list processing is usually active simultaneously. Therefore, a submitted report in background processing involves list processing, meaning that message conversion of type *W* to *E* applies as well.

A message is not displayed, but instead is written as follows to the background processing log (job log) depending on the (converted) message type:

For messages of type *A*, it should be noted that handling using [`error_message`](ABAPCALL_FUNCTION_PARAMETER.html) causes the statement [`ROLLBACK WORK`](ABAPROLLBACK.html) to be executed implicitly, hence producing a database rollback and other side-effects.

-   Messages of type `S` are written to the log and the program continues.
-   Messages of type *I* and *W* are written to the log and the program continues. The user input Enter, which is required to continue the program, is created automatically.
-   Messages of type *E* and *A* are written to the log. A check is then performed to see whether the message is handled using [`error_message`](ABAPCALL_FUNCTION_PARAMETER.html). If this is not the case, the message is also written to the log with message number 564 of the message class 00 and current background processing is terminated, whereby a message of type *A* executes a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html) and a message of type *E* does not. Background processing is resumed when the message is handled.
-   Messages of type *X* create a [runtime error](ABENRUNTIME_ERROR_GLOSRY.html) with associated [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html) and the current background processing is canceled.

abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abenabap\_messages\_types.html