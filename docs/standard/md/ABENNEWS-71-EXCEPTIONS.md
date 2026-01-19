---
title: "ABENNEWS-71-EXCEPTIONS"
description: |
  ABENNEWS-71-EXCEPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-71-EXCEPTIONS.htm"
abapFile: "ABENNEWS-71-EXCEPTIONS.html"
keywords: ["delete", "while", "if", "try", "catch", "method", "class", "data", "ABENNEWS", "EXCEPTIONS"]
---

[1\. Resumable Exceptions](#ABAP_MODIFICATION_1@4@)

[2\. Preserving the Context of an Exception](#ABAP_MODIFICATION_2@4@)

[3. Retrying the `TRY` Block](#ABAP_MODIFICATION_3@4@)

Before ABAP release 7.0, EhP2, the context in which a [class-based exception](ABENCLASS_BASED_EXCEPTION_GLOSRY.html) was raised was always emptied completely. All procedures called between the raising of the exception and any handler, and their local data, were deleted before the handler was executed. The program could only resume after the `TRY` control structure of the handler.

From ABAP release 7.0, EhP2, [class-based exceptions](ABENCLASS_BASED_EXCEPTION_GLOSRY.html) can be raised and propagated as resumable exceptions. The new addition `RESUMABLE` can be used in

The new statement [`RESUME`](ABAPRESUME.html) is used to resume the execution of a program after the exception-raising statement, while the resumable exception is being handled.

The context of the exception must be retained while it is being handled so that the program can resume afterwards. To enable this, the new addition `BEFORE UNWIND` of the statement [`CATCH`](ABAPCATCH_TRY.html) has been implemented. This addition can also be used independently of resumable exceptions.

The new statement [`RETRY`](ABAPRETRY.html) enables an exception-raising `TRY` block to be retried.

-   the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html)
-   the `RAISING` addition for declaring exceptions in `[[CLASS-]](ABAPCLASS-METHODS.html)[METHODS](ABAPMETHODS.html)`, [`FUNCTION`](ABAPFUNCTION.html), and [`FORM`](ABAPFORM.html).

abenabap.html abennews.html abennews-70\_ehps.html abennews-71.html