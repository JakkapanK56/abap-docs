---
title: "ABENABAP_LEAVE_PROGRAM"
description: |
  ABENABAP_LEAVE_PROGRAM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_LEAVE_PROGRAM.htm"
abapFile: "ABENABAP_LEAVE_PROGRAM.html"
keywords: ["update", "ABENABAP", "LEAVE", "PROGRAM"]
---

This section describes the statement [`LEAVE PROGRAM`](ABAPLEAVE_PROGRAM.html) used for exiting programs.

Apart from `LEAVE PROGRAM`, the following statements are also used to exit programs that calls other programs without returning to the caller after the call:

Exiting certain processing blocks can also cause the entire program to be exited implicitly.

The statements for exiting programs are not possible in some contexts as for example during [unit tests](ABENUNIT_TEST_GLOSRY.html) or during [update](ABENDB_COMMIT_DURING_UPDATE.html). Therefore they should not be used in [procedures](ABENPROCEDURE_GLOSRY.html).

-   [`LEAVE TO TRANSACTION`](ABAPLEAVE_TO_TRANSACTION.html)
-   [`SUBMIT`](ABAPSUBMIT.html) without `AND RETURN`

abenabap.html abenabap\_reference.html abenabap\_execution.html abenleave\_program\_units.html