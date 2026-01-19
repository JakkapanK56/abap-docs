---
title: "ABENRFC_STATEMENTS"
description: |
  ABENRFC_STATEMENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRFC_STATEMENTS.htm"
abapFile: "ABENRFC_STATEMENTS.html"
keywords: ["do", "if", "ABENRFC", "STATEMENTS"]
---

The following additions of the [`CALL FUNCTION`](ABAPCALL_FUNCTION.html) statement cause a remote function call:

Background RFC (bgRFC) is an enhanced successor technology of tRFC (and qRFC) and makes it obsolete. It is strongly recommended that bgRFC is used instead of tRFC.

-   [`DESTINATION`](ABAPCALL_FUNCTION_DESTINATION.html) for a synchronous RFC (sRFC)
-   If the `DESTINATION` addition is specified without one of the following two additions, the calling program waits until the remotely called function was completed.
-   [`IN REMOTE SESSION`](ABAPCALL_FUNCTION_REMOTE_SESSION.html) for a synchronous RFC (sRFC)
-   [`STARTING NEW TASK`](ABAPCALL_FUNCTION_STARTING.html) for an asynchronous RFC (aRFC) and its parallel RFC variety (pRFC)
-   The addition `STARTING NEW TASK` is used to continue the processing of the calling program as soon as the remotely called function has been started without waiting for the function to end. The results can be handled in callback routines.
-   [`CALL FUNCTION ... IN BACKGROUND UNIT`](ABAPCALL_FUNCTION_BACKGROUND_UNIT.html) for a background RFC (bgRFC).
-   [`CALL FUNCTION ... IN BACKGROUND TASK`](ABAPCALL_FUNCTION_BACKGROUND_TASK.html) (obsolete) for a transactional RFC (tRFC) and its variant queued RFC (qRFC)
-   The addition `IN BACKGROUND` flags the remotely called function for execution and starts it using the statement `COMMIT WORK`.

-   For a detailed description of RFC calls, see [`CALL FUNCTION` - RFC](ABAPCALL_FUNCTION_DESTINATION-.html)
-   and the documentation [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) in SAP Help Portal.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abenrfc.html