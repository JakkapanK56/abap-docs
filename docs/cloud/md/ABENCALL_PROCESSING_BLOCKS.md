---
title: "ABENCALL_PROCESSING_BLOCKS"
description: |
  ABENCALL_PROCESSING_BLOCKS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCALL_PROCESSING_BLOCKS.htm"
abapFile: "ABENCALL_PROCESSING_BLOCKS.html"
keywords: ["method", "class", "ABENCALL", "PROCESSING", "BLOCKS"]
---

In every [processing block](ABENPROCESSING_BLOCK_GLOSRY.html) of an ABAP program, processing blocks of the same program can be called (internal calls) or processing blocks of other ABAP programs can be called (external calls).

-   Direct [call of procedures](ABENCALL_PROCEDURES.html).
-   Indirect call of [event handlers](ABENCALL_EVENT_HANDLER.html) by raising events from the same class in methods. This supplies the interface of the event handler. A prerequisite for the execution of an event handler is its [registration](ABAPSET_HANDLER.html).

abenabap.html abenabap\_reference.html abenabap\_execution.html