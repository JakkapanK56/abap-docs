---
title: "ABENDB_TRANSACTION"
description: |
  ABENDB_TRANSACTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDB_TRANSACTION.htm"
abapFile: "ABENDB_TRANSACTION.html"
keywords: ["update", "do", "if", "data", "ABENDB", "TRANSACTION"]
---

A database [LUW](ABENLUW_GLOSRY.html) (also referred to as a database transaction) is a non-separable sequence of database operations that is completed with a [database commit](ABENDATABASE_COMMIT_GLOSRY.html). The database LUW is either executed completely by the database system or not at all. After a database LUW has been completed successfully, the database returns to a consistent state and a new database LUW is opened. If an error is detected within a database LUW, all database changes made since the start of the database LUW can be undone using a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html). The database is subsequently restored to the same status as before the start of the database LUW. Isolation levels determine whether other users can perform reads on data modified in a database LUW before a database commit is performed.

The ABAP statements used to execute database commits or database rollbacks explicitly are as follows:

-   [Database commit](ABENDB_COMMIT.html)
-   [Database rollback](ABENDB_ROLLBACK.html)
-   [Isolation levels](ABENDB_ISOLATION.html)

-   [`COMMIT CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html)
-   [`ROLLBACK CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html)

-   At the end of a database LUW, all [reader streams](ABENREADER_STREAM_GLOSRY.html) and [locators](ABENLOCATOR_GLOSRY.html) created in it are closed implicitly. A writer stream that is still open is only closed as part of a database rollback and causes a runtime error during a a database commit.
-   Any database commits or database rollbacks that occur within the [update](ABENUPDATE_GLOSRY.html) cancel the update with a runtime error. See [Forbidden Statements in Updates](ABENDB_COMMIT_DURING_UPDATE.html).

abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html