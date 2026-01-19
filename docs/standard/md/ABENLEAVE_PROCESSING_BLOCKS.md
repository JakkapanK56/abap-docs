---
title: "ABENLEAVE_PROCESSING_BLOCKS"
description: |
  ABENLEAVE_PROCESSING_BLOCKS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLEAVE_PROCESSING_BLOCKS.htm"
abapFile: "ABENLEAVE_PROCESSING_BLOCKS.html"
keywords: ["select", "update", "if", "data", "ABENLEAVE", "PROCESSING", "BLOCKS"]
---

[Processing blocks](ABENPROCESSING_BLOCK_GLOSRY.html) can be exited implicitly using:

or program-driven, using:

The subsequent program flow depends on the type of processing block.

In addition to the statements described here, statements that call other units without returning to the caller after the call is made, also terminate their processing block. These include:

[Messages](ABENMESSAGE_GLOSRY.html) and raised [exceptions](ABENEXCEPTION_GLOSRY.html) can also exit processing blocks.

[Only use `RETURN` to exit procedures](ABENEXIT_PROCEDURE_GUIDL.html)

-   \\ [regular exiting](ABENEND_PROCESSING_BLOCKS.html)

-   [`RETURN`](ABAPRETURN.html)
-   [`EXIT`](ABAPEXIT_PROCESSING_BLOCKS.html)
-   [`CHECK`](ABAPCHECK_PROCESSING_BLOCKS.html)
-   [`STOP`](ABAPSTOP.html)
-   [`CHECK SELECT-OPTIONS`](ABAPCHECK_SELECT-OPTIONS.html) (obsolete, for logical databases only)
-   [`REJECT`](ABAPREJECT.html) (obsolete, for logical databases only)

-   [`LEAVE [TO] SCREEN`](ABAPLEAVE_SCREEN.html)
-   [`LEAVE LIST-PROCESSING`](ABAPLEAVE_LIST-PROCESSING.html)
-   [`LEAVE TO TRANSACTION`](ABAPLEAVE_TO_TRANSACTION.html)
-   [`SUBMIT`](ABAPSUBMIT.html) without `AND RETURN`

-   Exiting a procedure using `RETURN`, `EXIT` or `CHECK` is the error-free termination of the procedure. Formal parameters for which the pass by value is defined are not passed to the assigned actual parameters only if the procedure terminates after an error (an exception is raised or a message is sent).
-   The statements for [exiting programs](ABENABAP_LEAVE_PROGRAM.html) are not recommended inside procedures. They are not allowed in contexts like [unit tests](ABENUNIT_TEST_GLOSRY.html) or during [update](ABENDB_COMMIT_DURING_UPDATE.html) and lead to exceptions if a procedure is called from such a context.

abenabap.html abenabap\_reference.html abenabap\_execution.html abenleave\_program\_units.html