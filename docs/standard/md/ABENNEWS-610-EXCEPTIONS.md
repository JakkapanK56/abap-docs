---
title: "ABENNEWS-610-EXCEPTIONS"
description: |
  ABENNEWS-610-EXCEPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-610-EXCEPTIONS.htm"
abapFile: "ABENNEWS-610-EXCEPTIONS.html"
keywords: ["if", "try", "catch", "method", "class", "exception-handling", "ABENNEWS", "610", "EXCEPTIONS"]
---

Since ABAP release 6.10 it has been possible to catch class-based exceptions in [`TRY`](ABAPTRY.html)...[`CATCH`](ABAPCATCH_TRY.html)...[`ENDTRY`](ABAPENDTRY.html) blocks. This replaces exception handling using either [catchable runtime errors](ABENCATCHABLE_RUNTIME_ERROR_GLOSRY.html) or the `EXCEPTIONS` parameters of function modules and methods.

The new keyword [`CLEANUP`](ABAPTRY.html) has been introduced for a program area that helps to create a consistent state after an exception or runtime error occurs within the protected area. Across the call hierarchy, runtime errors are caught at a higher level, so that if a method terminates, for instance, a consistent object state remains and global resources are released in accordance with regulations.

For a detailed description of this topic, see [Exception Handling](ABENABAP_EXCEPTIONS.html).

abenabap.html abennews.html abennews-6.html abennews-610.html