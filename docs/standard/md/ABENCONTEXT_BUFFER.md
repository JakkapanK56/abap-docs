---
title: "ABENCONTEXT_BUFFER"
description: |
  ABENCONTEXT_BUFFER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONTEXT_BUFFER.htm"
abapFile: "ABENCONTEXT_BUFFER.html"
keywords: ["delete", "do", "if", "case", "try", "data", "ABENCONTEXT", "BUFFER"]
---

A context buffer is managed by the context program `CONTEXT_X_...` of a [context](ABENCONTEXT_GLOSRY.html). From a technical point of view, it is a [cross-transaction application buffer](ABENCROSSTRANS_APP_BUFFER_GLOSRY.html) of the structure `CONTEXTB` and the ID `IB` in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html), which is processed in the context program with the statements [`EXPORT TO SHARED BUFFER`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) and [`IMPORT FROM SHARED BUFFER`](ABAPIMPORT_MEDIUM.html). The context program renews the context buffer at specific times but does not try to synchronously or nearly synchronously track current changes.

The maximum number of entries to be buffered can also be defined. The default value is 128. This number refers to the permanent buffer per module. Within a transaction, everything that is written to the context is stored in the buffer unless buffering is switched off for this module. We recommend keeping a default value of 128. This is intended to prevent a module from occupying the entire buffer. Different combinations should no longer occur within an hour in a single AS instance. The system resets the buffer after one hour.

The E buffer provides the fastest access, since it can find the values requested in the `DEMAND` statement in a single step. However, it may return a smaller number of hits than the I buffer.

-   **Permanent (P)**: This is the default setting. In this case, the data is preserved across the transaction context. However, they are always reset to the full hour (8:00, 9:00...). Entries that are not found are not buffered. The buffer for each context can be deleted manually using the [Context Builder](ABENCONTEXT_BUILDER_GLOSRY.html). and affects all AS instances.
-   **Temporary (T)**: Data is only buffered for the duration of the current [transaction](ABENTRANSACTION_GLOSRY.html).
-   **No buffering (N)**

-   An I buffer is a table that assigns derived values to the input fields of the module. It

-   only contains one entry with key values.

-   An E buffer is a table that assigns the derived values of the module to the key fields of the context. It:

-   also contains multiple entries with the key values.
-   can be a join of all I buffers for the upstream modules

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abencontext.html