---
title: "ABENCALL_SEQUENCE_GLOSRY"
description: |
  ABENCALL_SEQUENCE_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCALL_SEQUENCE_GLOSRY.htm"
abapFile: "ABENCALL_SEQUENCE_GLOSRY.html"
keywords: ["ABENCALL", "SEQUENCE", "GLOSRY"]
---

A call sequence is the set of programs whose [internal sessions](ABENINTERNAL_SESSION_GLOSRY.html) are loaded jointly into an [ABAP session](ABENABAP_SESSION_GLOSRY.html) by a sequence of calls using [`SUBMIT ... AND RETURN`](ABAPSUBMIT.html) or [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html). It is possible to return to the preceding program in the call sequence from every program. The first program in a call sequence is the [top level transaction](ABENTOP_LEVEL_TRANSACTION_GLOSRY.html). The programs of a call sequence have collective access to the [ABAP memory](ABENABAP_MEMORY_GLOSRY.html). A call sequence can be exited completely using the statement [`LEAVE TO TRANSACTION`](ABAPLEAVE_TO_TRANSACTION.html).

[**\-> More about**](ABENABAP_PROGRAM_CALL.html)

ABENABALA\_GLOSSARY.html