---
title: "ABENCALL_PROCESSING_BLOCKS"
description: |
  ABENCALL_PROCESSING_BLOCKS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCALL_PROCESSING_BLOCKS.htm"
abapFile: "ABENCALL_PROCESSING_BLOCKS.html"
keywords: ["method", "class", "ABENCALL", "PROCESSING", "BLOCKS"]
---

In every [processing block](ABENPROCESSING_BLOCK_GLOSRY.html) of an ABAP program, processing blocks of the same program can be called (internal calls) or processing blocks of other ABAP programs can be called (external calls).

The statement [`MODULE`](ABAPMODULE.html) is used to call dialog modules in the processing blocks of the [dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html), however, and not in processing blocks of an ABAP program.

-   Direct [call of procedures](ABENCALL_PROCEDURES.html).
-   Indirect call of [event handlers](ABENCALL_EVENT_HANDLER.html) by raising events from the same class in methods. This supplies the interface of the event handler. A prerequisite for the execution of an event handler is its [registration](ABAPSET_HANDLER.html).
-   Indirect call of event blocks by raising events in the runtime framework explicitly.

abenabap.html abenabap\_reference.html abenabap\_execution.html