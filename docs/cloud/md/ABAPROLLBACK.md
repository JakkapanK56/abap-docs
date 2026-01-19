---
title: "ABAPROLLBACK"
description: |
  ABAPROLLBACK - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPROLLBACK.htm"
abapFile: "ABAPROLLBACK.html"
keywords: ["select", "loop", "if", "case", "data", "ABAPROLLBACK"]
---

`ROLLBACK WORK.`

The statement `ROLLBACK WORK` closes the current [SAP LUW](ABENSAP_LUW_GLOSRY.html) and opens a new one.

The example Demonstrating the SAP LUW demonstrates the SAP LUW, covering the `ROLLBACK WORK` statement.

-   After a `ROLLBACK` statement is executed, `sy-subrc` is always zero. It is not necessary to query whether `sy-subrc` is not equal to zero after `ROLLBACK`.
-   The `ROLLBACK WORK` statement is executed implicitly if a [message](ABENMESSAGE_GLOSRY.html) of type A is handled by the addition `error_message` when calling a function module with `CALL FUNCTION`.
-   `ROLLBACK WORK` empties [global temporary tables](ABENDDIC_DATABASE_TABLES_GTT.html) of all currently open [database connections](ABENDATABASE_CONNECTION_GLOSRY.html) and prevents the runtime error `COMMIT_GTT_ERROR` in the case of implicit [database commits](ABENDB_COMMIT.html).
-   All open [database cursors](ABENDATABASE_CURSOR_GLOSRY.html) in the database connections concerned are closed during a `ROLLBACK`, which means that a runtime error occurs when the system attempts to continue a `SELECT` loop after a `ROLLBACK`. It must therefore be ensured that cursors that are still open are no longer used after the `ROLLBACK`.

abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abensap\_luw.html