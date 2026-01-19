---
title: "ABENNEWS-769-DAEMONS"
description: |
  ABENNEWS-769-DAEMONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-769-DAEMONS.htm"
abapFile: "ABENNEWS-769-DAEMONS.html"
keywords: ["if", "class", "types", "ABENNEWS", "769", "DAEMONS"]
---

[1\. Introduction of ABAP Daemons](#ABAP_MODIFICATION_1@4@)

[2\. Timers for the Non-Blocking Mode](#ABAP_MODIFICATION_2@4@)

An [ABAP daemon](ABENABAP_DAEMON.html) is an instance of an [ABAP daemon class](ABENABAP_DAEMON_CLASS_GLOSRY.html) in an [ABAP daemon session](ABENABAP_DAEMON_SESSION_GLOSRY.html). An ABAP daemon is created again automatically every time a [runtime error](ABENRUNTIME_ERROR_GLOSRY.html) or a message of type *E*, *A*, or *X* causes a program termination.

[ABAP Timers](ABENABAP_TIMER_GLOSRY.html) can be used to define wait times in the [non-blocking mode](ABENNON_BLOCKING_MODEL_GLOSRY.html). An ABAP Timer is created by [ABAP Timer Manager](ABENABAP_TIMER_MANAGER_GLOSRY.html) and handled using [ABAP Timer handlers](ABENABAP_TIMER_HANDLER_GLOSRY.html). The associated class and interfaces are `CL_ABAP_TIMER_MANAGER`, `IF_ABAP_TIMER_MANAGER`, and `IF_ABAP_TIMER_HANDLER`.

The new object types replace the previous types `CL_APC_TIMER_MANAGER`, `IF_APC_TIMER_MANAGER`, and `IF_APC_TIMER_HANDLER`.

abenabap.html abennews.html abennews-76.html abennews-769.html