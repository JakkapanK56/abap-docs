---
title: "ABENADF_NON_BLOCKING_MODEL"
description: |
  ABENADF_NON_BLOCKING_MODEL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENADF_NON_BLOCKING_MODEL.htm"
abapFile: "ABENADF_NON_BLOCKING_MODEL.html"
keywords: ["select", "if", "class", "ABENADF", "NON", "BLOCKING", "MODEL"]
---

[ABAP daemon processing](ABENABAP_DAEMON_PROCESSING_GLOSRY.html) is event-driven. To prevent an [ABAP daemon session](ABENABAP_DAEMON_SESSION_GLOSRY.html) type from being blocked for inbound messages, the session runs in [non-blocking mode](ABENNON_BLOCKING_MODEL_GLOSRY.html). In non-blocking mode for ADF, the following blocking statements are forbidden in ABAP daemon processing and in the procedures called here:

Using a statement like this in non-blocking mode produces a runtime error.

-   Calls

-   [`SUBMIT`](ABAPSUBMIT.html)
-   [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html)
-   [`CALL DIALOG`](ABAPCALL_DIALOG.html)
-   [`CALL SCREEN`](ABAPCALL_SCREEN.html)
-   [`CALL SELECTION-SCREEN`](ABAPCALL_SELECTION_SCREEN.html)
-   [`SET SCREEN`](ABAPSET_SCREEN.html)

-   Exit

-   [`LEAVE LIST-PROCESSING`](ABAPLEAVE_LIST-PROCESSING.html)
-   [`LEAVE PROGRAM`](ABAPLEAVE_PROGRAM.html)
-   [`LEAVE SCREEN`](ABAPLEAVE_SCREEN.html)
-   [`LEAVE TO TRANSACTION`](ABAPLEAVE_TO_TRANSACTION.html)
-   [`LEAVE TO LIST-PROCESSING`](ABAPLEAVE_TO_LIST-PROCESSING.html)
-   [`CHECK`](ABAPCHECK_PROCESSING_BLOCKS.html), [`EXIT`](ABAPEXIT_PROCESSING_BLOCKS.html), [`STOP`](ABAPSTOP.html), and [`REJECT`](ABAPREJECT.html) for exiting [reporting events](ABENREPORTING_EVENT_GLOSRY.html)

-   Wait

-   [`WAIT UP TO`](ABAPWAIT_UP_TO.html), [`WAIT FOR ...`](ABAPWAIT_ARFC.html)
-   [`COMMUNICATION`](ABAPCOMMUNICATION.html)

-   The statement `WAIT` is not allowed in non-blocking mode. To be able to wait for certain events despite this restriction, such as the end of a callback routine in [aRFC](ABENARFC_GLOSRY.html), [ABAP Timers](ABENABAP_TIMER_GLOSRY.html) can be used. An ABAP Timer is created by [ABAP Timer Manager](ABENABAP_TIMER_MANAGER_GLOSRY.html) and handled using [ABAP Timer handlers](ABENABAP_TIMER_HANDLER_GLOSRY.html). The associated class and interfaces are `CL_ABAP_TIMER_MANAGER`, `IF_ABAP_TIMER_MANAGER`, and `IF_ABAP_TIMER_HANDLER`. ABAP Timers can only be used in non-blocking mode, namely [APC](ABENAPC_SESSION_GLOSRY.html) and [ABAP daemon sessions](ABENABAP_DAEMON_SESSION_GLOSRY.html).
-   Unlike in [non-blocking mode](ABENAPC_NON_BLOCKING_MODEL.html) for [APC](ABENAPC_GLOSRY.html), the statement [`CALL FUNCTION DESTINATION`](ABAPCALL_FUNCTION_DESTINATION.html) for [sRFC](ABENSRFC_GLOSRY.html) is allowed in ABAP daemon processing.

abenabap.html abenabap\_reference.html abenabap\_channel\_daemon.html abenabap\_daemon.html