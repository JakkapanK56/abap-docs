---
title: "ABENNEWS-740-UPDATE"
description: |
  ABENNEWS-740-UPDATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740-UPDATE.htm"
abapFile: "ABENNEWS-740-UPDATE.html"
keywords: ["select", "update", "if", "case", "data", "ABENNEWS", "740", "UPDATE"]
---

When statements are executed that would produce a [database commit](ABENDATABASE_COMMIT_GLOSRY.html) or [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html) or would disrupt the update controller, the associated system behavior has been cleaned up as described under [Forbidden Statements in Updates](ABENDB_COMMIT_DURING_UPDATE.html). The behavior in the case of local and regular updates has been synchronized and all forbidden statements now produce a runtime error directly, which makes troubleshooting easier.

The following statements now also raise the exception `POSTING_ILLEGAL_STATEMENT` directly during the update, since they disrupt the update controller:

Before ABAP release 7.40, only the statements `CALL DIALOG`, `CALL SCREEN`, `CALL SELECTION SCREEN`, `CALL TRANSACTION`, `LEAVE TO TRANSACTION`, `SUBMIT`, plus `COMMIT WORK` and `ROLLBACK WORK` raised an exception directly. The behavior of [messages in updates](ABENABAP_MESSAGE_UPDATE.html) was not modified.

-   `LEAVE LIST-PROCESSING`
-   `LEAVE PROGRAM`
-   `LEAVE SCREEN`
-   `LEAVE TO LIST-PROCESSING`
-   `SET SCREEN`

abenabap.html abennews.html abennews-740.html abennews-740\_sp02.html