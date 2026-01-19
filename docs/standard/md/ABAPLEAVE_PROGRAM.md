---
title: "ABAPLEAVE_PROGRAM"
description: |
  ABAPLEAVE_PROGRAM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLEAVE_PROGRAM.htm"
abapFile: "ABAPLEAVE_PROGRAM.html"
keywords: ["update", "delete", "if", "case", "data", "ABAPLEAVE", "PROGRAM"]
---

[Short Reference](ABAPLEAVE_PROGRAM_SHORTREF.html)\\ \\n

`LEAVE PROGRAM.`

This statement immediately terminates the current [main program](ABENMAIN_PROGRAM_GLOSRY.html) and deletes its [internal session](ABENINTERNAL_SESSION_GLOSRY.html), including all loaded programs, instances, and their data.

The statement `LEAVE PROGRAM` can appear anywhere within any processing block. It ends the program regardless of the program object or [program group](ABENPROGRAM_GROUP_GLOSRY.html) of the internal session in which it is executed.

The runtime framework responds to `LEAVE PROGRAM` depending on how the main program of the internal session was called:

Exiting a program after a failed authorization check.

-   If the main program was called using [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html), [`SUBMIT AND RETURN`](ABAPSUBMIT.html), or [`CALL DIALOG`](ABAPCALL_DIALOG.html), the runtime framework returns to the calling program after the call position. If the main program was called using `CALL DIALOG`, the output parameters of the [dialog module](ABENDIALOG_MODULE_OBJECT_GLOSRY.html) are passed to the calling program.
-   If the main program was called using [`LEAVE TO TRANSACTION`](ABAPLEAVE_TO_TRANSACTION.html) or using a transaction code from within a [dynpro](ABENDYNPRO_GLOSRY.html), the runtime framework returns to behind the position from which the first program in the current [call sequence](ABENCALL_SEQUENCE_GLOSRY.html) was called.
-   If the main program was called using [`SUBMIT`](ABAPSUBMIT.html) without the addition `AND RETURN`, the runtime framework returns to behind the position from which the calling program was started. The internal session of the calling program is also deleted, if it was preserved.

-   If procedures are still registered when a program is exited in the current [SAP LUW](ABENSAP_LUW_GLOSRY.html), the SAP LUW is terminated without calling or rolling back the procedures. Any registered [update function modules](ABENUPDATE_FUNCTION_MODULE_GLOSRY.html) are preserved in the database but can no longer be executed. In this case, the statement [`COMMIT WORK`](ABAPCOMMIT.html) or [`ROLLBACK WORK`](ABAPROLLBACK.html) should be executed explicitly before exiting the program.
-   The statement [`LEAVE`](ABAPLEAVE-.html) without additions is obsolete.

CALL FUNCTION 'AUTHORITY\_CHECK\_TCODE' \\n EXPORTING \\n tcode = sy-tcode \\n EXCEPTIONS \\n ok = 1 \\n not\_ok = 2 \\n OTHERS = 3. \\n\\ \\nIF sy-subrc > 1. \\n LEAVE PROGRAM. \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_execution.html abenleave\_program\_units.html abenabap\_leave\_program.html