---
title: "ABENABAP_PROGRAM_CALL"
description: |
  ABENABAP_PROGRAM_CALL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_PROGRAM_CALL.htm"
abapFile: "ABENABAP_PROGRAM_CALL.html"
keywords: ["delete", "do", "if", "data", "ABENABAP", "PROGRAM", "CALL"]
---

If allowed by the package concept, the following can be called in each [processing block](ABENPROCESSING_BLOCK_GLOSRY.html) of an ABAP program:

When a program is called, the calling program can be exited either temporarily or completely.

In temporary exits from the calling program (shown on the left side of the figure), the called program is started in a new [internal session](ABENINTERNAL_SESSION_GLOSRY.html). The internal session of the calling program is preserved. The calling program and the called program form a [call sequence](ABENCALL_SEQUENCE_GLOSRY.html). Within a call sequence, there is shared access to the [ABAP Memory](ABENABAP_MEMORY_GLOSRY.html) using the statements [`IMPORT FROM MEMORY`](ABAPIMPORT_DATA_CLUSTER.html) and [`EXPORT TO MEMORY`](ABAPEXPORT_DATA_CLUSTER.html). A call sequence can have a maximum of nine internal sessions. If this maximum is exceeded, the program terminates, and the entire call sequence is deleted.

When the calling program is completely exited (shown on the right side of the figure), the called program is started in a new internal session, which replaces the internal session of the calling program.

A program that creates an internal session when it is called represents the main program of the [main program group](ABENMAIN_PROGRAM_GROUP_GLOSRY.html) in the internal session.

-   [Executable programs](ABENABAP_SUBMIT_REPORT.html)
-   [Transactions](ABENABAP_CALL_TRANSACTION.html), that is, programs linked to a [transaction code](ABENTRANSACTION_CODE_GLOSRY.html)

-   When a called program is loaded, the event [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html) is raised in that program.
-   The statement [`SUBMIT`](ABAPSUBMIT.html) without the addition `AND RETURN` shown on the right side of the figure does not always replace the internal session of the calling program directly. If the calling program was not started with `SUBMIT` itself, its internal session is preserved in the call sequence and is only deleted after the submitted program is completed.

abenabap.html abenabap\_reference.html abenabap\_execution.html