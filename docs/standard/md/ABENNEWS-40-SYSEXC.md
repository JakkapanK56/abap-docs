---
title: "ABENNEWS-40-SYSEXC"
description: |
  ABENNEWS-40-SYSEXC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-40-SYSEXC.htm"
abapFile: "ABENNEWS-40-SYSEXC.html"
keywords: ["catch", "ABENNEWS", "SYSEXC"]
---

From ABAP release 4.0, runtime errors can be caught using [`CATCH SYSTEM-EXCEPTIONS ... ENDCATCH`](ABAPCATCH_SYS.html).

Previously, the occurrence of a runtime error always terminated the `ABAP` program. Special tests had to be programmed at critical locations in programs to ensure that the program would always execute without problems.

[`CATCH SYSTEM-EXCEPTIONS ... ENDCATCH`](ABAPCATCH_SYS.html) can now be used to wrap these critical program spots. After `ENDCATCH`, it is then possible to query whether the program block was ended correctly or whether a runtime error occurred that was caught.

abenabap.html abennews.html abennews-4.html abennews-40.html