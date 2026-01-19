---
title: "ABENADBC_TRANSACTION"
description: |
  ABENADBC_TRANSACTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENADBC_TRANSACTION.htm"
abapFile: "ABENADBC_TRANSACTION.html"
keywords: ["if", "case", "method", "class", "data", "ABENADBC", "TRANSACTION"]
---

For each open database connection that can be represented by an instance of class [`CL_SQL_CONNECTION`](ABENCL_SQL_CONNECTION.html), only one [database LUW](ABENDATABASE_LUW_GLOSRY.html) is active at any one time. When a connection is opened, the first database LUW of the connection is opened implicitly.

The class `CL_SQL_CONNECTION` contains the following instance methods:

These methods end the current database LUW of a connection using a [database commit](ABENDATABASE_COMMIT_GLOSRY.html) or [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html). The current connection is set to inactive here. If the connection is still linked with an ADBC SQL statement and this statement is used, it is activated again implicitly and a new database LUW opened.

The database LUWs of different connections are independent of one another and must be ended individually. When the work process is switched, with the resulting [implicit database commit](ABENDB_COMMIT.html), this is executed on all open connections. The database commit on the default connection is the last one.

-   `COMMIT`
-   `ROLLBACK`

-   For detailed information about database connections, see [database connections](ABENDB_CONNECTIONS.html).
-   To execute a database commit or a database rollback on the default connection using ADBC, an instance of class `CL_SQL_CONNECTION` must be created for this connection using `CREATE OBJECT`.
-   Transaction control is possible only using the methods `COMMIT` and `ROLLBACK` of the class `CL_SQL_CONNECTION`, since only in this case are all actions required at the end of the transaction executed in the database interface. The native statements `COMMIT` or `ROLLBACK` should not be executed using `CL_SQL_STATEMENT` or `CL_SQL_PREPARED_STATEMENT` to avoid critical side effects.
-   The method [`CLOSE_NO_DISCONNECT`](ABENCL_SQL_CONNECTION.html) of the class `CL_SQL_CONNECTION` also ends the current database LUW of a connection using a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html) and additionally closes the connection for usage by the respective connection object.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abennative\_sql\_obsolete.html abenadbc.html abencl\_sql\_connection.html