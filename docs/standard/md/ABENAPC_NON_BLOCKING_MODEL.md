---
title: "ABENAPC_NON_BLOCKING_MODEL"
description: |
  ABENAPC_NON_BLOCKING_MODEL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAPC_NON_BLOCKING_MODEL.htm"
abapFile: "ABENAPC_NON_BLOCKING_MODEL.html"
keywords: ["select", "if", "class", "ABENAPC", "NON", "BLOCKING", "MODEL"]
---

Stateful [APC processing](ABENAPC_PROCESSING_GLOSRY.html) takes place in an event-driven way:

To stop [APC sessions](ABENAPC_SESSION_GLOSRY.html) of this type from being blocked for inbound messages, processing takes place in [non-blocking mode](ABENNON_BLOCKING_MODEL_GLOSRY.html). The following blocking statements are not allowed in non-blocking mode for APC:

Using a statement like this in non-blocking mode produces the runtime error `APC_ILLEGAL_STATEMENT`.

-   AS ABAP as a stateful APC server
-   AS ABAP as a stateful detached APC client

-   Calls

-   [`SUBMIT`](ABAPSUBMIT.html)
-   [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html)
-   [`CALL FUNCTION DESTINATION`](ABAPCALL_FUNCTION_DESTINATION.html) for [sRFC](ABENSRFC_GLOSRY.html)
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

-   The statement `WAIT` is not allowed in non-blocking mode. To be able to wait for certain events despite this restriction, such as the end of a callback routine in [aRFC](ABENARFC_GLOSRY.html), [ABAP Timers](ABENABAP_TIMER_GLOSRY.html) can be used. An ABAP Timer is created by the [ABAP Timer Manager](ABENABAP_TIMER_MANAGER_GLOSRY.html) and handled using the [ABAP Timer handlers](ABENABAP_TIMER_HANDLER_GLOSRY.html). The associated class and interfaces are `CL_ABAP_TIMER_MANAGER`, `IF_ABAP_TIMER_MANAGER`, and `IF_ABAP_TIMER_HANDLER`. ABAP Timers can only be used in non-blocking mode, namely [APC](ABENAPC_SESSION_GLOSRY.html) and [ABAP daemon sessions](ABENABAP_DAEMON_SESSION_GLOSRY.html).
-   Unlike in APC processing, the statement [`CALL FUNCTION DESTINATION`](ABAPCALL_FUNCTION_DESTINATION.html) is allowed for [sRFC](ABENSRFC_GLOSRY.html) in [non-blocking mode](ABENADF_NON_BLOCKING_MODEL.html) for [ADF](ABENADF_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_channel\_daemon.html abenabap\_channels.html abenapc.html