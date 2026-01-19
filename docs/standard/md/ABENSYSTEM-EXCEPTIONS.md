---
title: "ABENSYSTEM-EXCEPTIONS"
description: |
  ABENSYSTEM-EXCEPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSYSTEM-EXCEPTIONS.htm"
abapFile: "ABENSYSTEM-EXCEPTIONS.html"
keywords: ["catch", "class", "ABENSYSTEM", "EXCEPTIONS"]
---

Before class-based exceptions were introduced, exceptions for exception situations of the runtime framework that could be successfully handled in the program were defined exclusively as catchable runtime errors and could be handled using the statement `CATCH SYSTEM-EXCEPTIONS`.

All catchable runtime errors were predefined in the system and assigned to the ABAP statements where they could occur. It was possible to group multiple catchable runtime errors together in an exception group and under whose name they could be handled together.

With the introduction of class-based exceptions, an exception class is assigned to each catchable runtime error. The error can still be handled as a catchable runtime error, but should be handled as a class-based exception.

Catchable runtime errors cannot be raised explicitly; they are only raised implicitly by the runtime framework.

-   [Alphabetical Overview of Catchable Runtime Errors](ABENUEB-ABFB-SYSEXC.html)
-   [Assignment of Catchable Runtime Errors to Exception Groups](ABENSYSEXC-ERRKL.html)
-   [Handling Catchable Runtime Errors](ABAPCATCH_SYS.html)

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_program\_flow.html