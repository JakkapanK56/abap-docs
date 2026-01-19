---
title: "ABENABAP_MESSAGE_LIST_PROCESSING"
description: |
  ABENABAP_MESSAGE_LIST_PROCESSING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MESSAGE_LIST_PROCESSING.htm"
abapFile: "ABENABAP_MESSAGE_LIST_PROCESSING.html"
keywords: ["select", "if", "types", "ABENABAP", "MESSAGE", "LIST", "PROCESSING"]
---

In [list processing](ABENLIST_PROCESSING_GLOSRY.html), a message of type *W* is always converted to type *E* before further context-dependent handling takes place. The message is then handled in accordance with the other context.

List processing is active in the following contexts with respect to messages:

In programs called using `SUBMIT`, list processing is active, therefore, apart from when actual [list events](ABENLIST_EVENT_GLOSRY.html) are handled, even when [reporting events](ABENREPORTING_EVENT_GLOSRY.html) are being handled. The latter applies in particular to the standard event [`START-OF-SELECTION`](ABAPSTART-OF-SELECTION.html).

[Background jobs](ABENABAP_MESSAGE_BATCH_JOB.html) are always started using [`SUBMIT`](ABAPSUBMIT_VIA_JOB.html), which means that list processing is usually also active at the same time.

-   In all executable programs called using [`SUBMIT`](ABAPSUBMIT.html), if no dynpro sequence called using [`CALL SCREEN`](ABAPCALL_SCREEN.html) is processed there.
-   After list processing is called explicitly using [`LEAVE TO LIST-PROCESSING`](ABAPLEAVE_TO_LIST-PROCESSING.html) in a dynpro sequence. The statement [`LEAVE LIST-PROCESSING`](ABAPLEAVE_LIST-PROCESSING.html) switches list processing off during a dynpro sequence.

abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abenabap\_messages\_types.html