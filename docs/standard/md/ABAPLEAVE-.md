---
title: "ABAPLEAVE-"
description: |
  ABAPLEAVE- - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLEAVE-.htm"
abapFile: "ABAPLEAVE-.html"
keywords: ["do", "if", "ABAPLEAVE"]
---

[Short Reference](ABAPLEAVE_SHORTREF.html)

`LEAVE.`

The statement `LEAVE` without additions is context-specific:

The behavior of the statement `LEAVE` without additions cannot be predicted statically, particularly if it is specified in callable units. Therefore, `LEAVE` should only be used with additions that uniquely control the behavior:

-   In list processing that is, when the [list processor](ABENLIST_PROCESSOR_GLOSRY.html) is active, `LEAVE` works like [`LEAVE LIST-PROCESSING`](ABAPLEAVE_LIST-PROCESSING.html). The list processor is either called using [`LEAVE TO LIST-PROCESSING`](ABAPLEAVE_TO_LIST-PROCESSING.html) or called implicitly when [executable programs are processed](ABENREPORTING_PROCESS.html).
-   In all other situations, `LEAVE` is executed only when the system field `sy-calld` is not initial; if this field is initial, otherwise it is ignored.

-   `LEAVE` exits a program called using [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html) or [`SUBMIT ... AND RETURN`](ABAPSUBMIT.html), and returns to after the calling position.
-   `LEAVE` does not exit a program if it was started using [`LEAVE TO TRANSACTION`](ABAPLEAVE_TO_TRANSACTION.html) or a transaction code from a [dynpro](ABENDYNPRO_GLOSRY.html), or if the program is processed in [batch input](ABENBATCH_INPUT_GLOSRY.html).
-   If a program was called using `SUBMIT` without the addition `AND RETURN`, `LEAVE` behaves in the same way as in the calling program.

-   [`LEAVE PROGRAM`](ABAPLEAVE_PROGRAM.html)
-   [`LEAVE TO TRANSACTION`](ABAPLEAVE_TO_TRANSACTION.html)
-   [`LEAVE [TO] SCREEN`](ABAPLEAVE_SCREEN.html)
-   [`LEAVE LIST-PROCESSING`](ABAPLEAVE_LIST-PROCESSING.html).

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_leave.html