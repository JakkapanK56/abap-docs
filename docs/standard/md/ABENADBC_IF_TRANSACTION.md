---
title: "ABENADBC_IF_TRANSACTION"
description: |
  ABENADBC_IF_TRANSACTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENADBC_IF_TRANSACTION.htm"
abapFile: "ABENADBC_IF_TRANSACTION.html"
keywords: ["if", "case", "method", "class", "data", "ABENADBC", "TRANSACTION"]
---

For each open database connection that can be represented by an instance of class [`CL_SQL_ADBC_CONNECTION_BUILDER`](ABENCL_SQL_CONNECTION.html), only one [database LUW](ABENDATABASE_LUW_GLOSRY.html) is active at any time. When a connection is opened, the first database LUW of the connection is opened implicitly.

The interface `IF_SQL_CONNECTION` contains the following instance methods:

These methods end the current database LUW of a connection using a [database commit](ABENDATABASE_COMMIT_GLOSRY.html) or [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html). The current connection is set to inactive here. If the connection is still linked with an ADBC SQL statement and this statement is used, it is activated again implicitly, and a new database LUW is opened.

The database LUWs of different connections are independent and must be ended individually. When the work process is switched with the resulting [implicit database commit](ABENDB_COMMIT.html), it is executed on all open connections. The database commit on the default connection is the last one.

-   `COMMIT`
-   `ROLLBACK`

-   For detailed information about database connections, see [database connections](ABENDB_CONNECTIONS.html).
-   An instance of the connection must be created to execute a database commit or a database rollback on the default connection using ADBC.
-   Transaction control is possible only using the methods `COMMIT` and `ROLLBACK` of the `IF_SQL_CONNECTION*` interfaces since only in these cases are all actions required at the end of the transaction executed in the database interface. The native statements `COMMIT` or `ROLLBACK` should not be executed using the `IF_SQL_CONNECTION*` interfaces to avoid critical side effects.
-   The method [`CLOSE_WITHOUT_DISCONNECT`](ABENIF_SQL_CONNECTION.html) of the `IF_SQL_CONNECTION*` interfaces also ends the current database LUW of a connection using a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html) and closes the connection for usage by the respective connection object.

abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abenadbc\_intf.html abenif\_sql\_connection.html