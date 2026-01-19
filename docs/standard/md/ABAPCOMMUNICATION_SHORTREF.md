---
title: "ABAPCOMMUNICATION_SHORTREF"
description: |
  ABAPCOMMUNICATION_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCOMMUNICATION_SHORTREF.htm"
abapFile: "ABAPCOMMUNICATION_SHORTREF.html"
keywords: ["data", "ABAPCOMMUNICATION", "SHORTREF"]
---

[Reference](ABAPCOMMUNICATION.html)

`COMMUNICATION \{\ \{INIT DESTINATION dest\}\                |\ \{ALLOCATE\}\                |\ \{ACCEPT\}\                |\ \{SEND BUFFER buf\}\                |\ \{RECEIVE BUFFER buf DATAINFO dat STATUSINFO stat\}\                |\ \{DEALLOCATE\}\ \} ID id                [RETURNCODE rc]\                [LENGTH leng]\                [RECEIVED rec]\                [HOLD].`

**Obsolete:** Enables communication with external programs using the [CPI-C](ABENCPI-C_GLOSRY.html) interface; the connection number is in `id`.

-   [`INIT DESTINATION dest`](ABAPCOMMUNICATION_COMSTEP.html)\\
    Initializes a connection `dest`.
-   [`ALLOCATE`](ABAPCOMMUNICATION_COMSTEP.html)\\
    Establishes a connection.
-   [`ACCEPT`](ABAPCOMMUNICATION_COMSTEP.html)\\
    Accepts a connection.
-   [`SEND BUFFER buf`](ABAPCOMMUNICATION_COMSTEP.html)\\
    Sends data in `buf`.
-   [`RECEIVE BUFFER buf DATAINFO dat STATUSINFO stat`](ABAPCOMMUNICATION_COMSTEP.html)\\
    Receives data in `buf` and status information in `dat` and `stat`.
-   [`DEALLOCATE`](ABAPCOMMUNICATION_COMSTEP.html)\\
    Terminates a connection.
-   [`RETURNCODE rc`](ABAPCOMMUNICATION_OPTIONS.html)\\
    Receives a return code in `rc`.
-   [`LENGTH leng`](ABAPCOMMUNICATION_OPTIONS.html)\\
    Restricts the length of sent or received data to `leng`.
-   [`RECEIVED rec`](ABAPCOMMUNICATION_OPTIONS.html)\\
    Returns the number of received bytes in `rec`.
-   [`HOLD`](ABAPCOMMUNICATION_OPTIONS.html)\\
    Prevents the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) being changed when data is being received.
    

abenabap.html abenabap\_reference.html abenabap\_shortref.html