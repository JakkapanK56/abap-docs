---
title: "ABAPCOMMIT"
description: |
  ABAPCOMMIT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCOMMIT.htm"
abapFile: "ABAPCOMMIT.html"
keywords: ["select", "update", "loop", "case", "catch", "data", "ABAPCOMMIT"]
---

\\ `COMMIT WORK [AND WAIT].`

The statement `COMMIT WORK` closes the current [SAP LUW](ABENSAP_LUW_GLOSRY.html) and opens a new one.

-   An SAP LUW not closed by `COMMIT WORK` but by ending the current program or closing the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) is ignored by the registered procedures. Registered update function modules remain on the database but can no longer be executed.
-   `COMMIT WORK` empties [global temporary tables](ABENDDIC_DATABASE_TABLES_GTT.html) of all currently open [database connections](ABENDATABASE_CONNECTION_GLOSRY.html) and prevents the runtime error `COMMIT_GTT_ERROR` in the case of implicit [database commits](ABENDB_COMMIT.html).
-   The statement `COMMIT WORK` closes all [database cursors](ABENDATABASE_CURSOR_GLOSRY.html). ABAP SQL statements that access a database cursor later ([`SELECT`](ABAPSELECT.html) loop) raise a uncatchable exception.

abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abensap\_luw.html