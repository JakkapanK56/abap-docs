---
title: "ABENLEAVE_PROCESSING_BLOCKS"
description: |
  ABENLEAVE_PROCESSING_BLOCKS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLEAVE_PROCESSING_BLOCKS.htm"
abapFile: "ABENLEAVE_PROCESSING_BLOCKS.html"
keywords: ["if", "ABENLEAVE", "PROCESSING", "BLOCKS"]
---

[Processing blocks](ABENPROCESSING_BLOCK_GLOSRY.html) can be exited implicitly using:

or program-driven, using:

The subsequent program flow depends on the type of processing block.

In addition to the statements described here, statements that call other units without returning to the caller after the call is made, also terminate their processing block. These include:

[Messages](ABENMESSAGE_GLOSRY.html) and raised [exceptions](ABENEXCEPTION_GLOSRY.html) can also exit processing blocks.

-   \\ [regular exiting](ABENEND_PROCESSING_BLOCKS.html)

-   [`RETURN`](ABAPRETURN.html)
-   [`EXIT`](ABAPEXIT_PROCESSING_BLOCKS.html)
-   [`CHECK`](ABAPCHECK_PROCESSING_BLOCKS.html)

-   Exiting a procedure using `RETURN`, `EXIT` or `CHECK` is the error-free termination of the procedure. Formal parameters for which the pass by value is defined are not passed to the assigned actual parameters only if the procedure terminates after an error (an exception is raised or a message is sent).

abenabap.html abenabap\_reference.html abenabap\_execution.html abenleave\_program\_units.html