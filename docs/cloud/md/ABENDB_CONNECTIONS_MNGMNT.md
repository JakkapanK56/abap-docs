---
title: "ABENDB_CONNECTIONS_MNGMNT"
description: |
  ABENDB_CONNECTIONS_MNGMNT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDB_CONNECTIONS_MNGMNT.htm"
abapFile: "ABENDB_CONNECTIONS_MNGMNT.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABENDB", "CONNECTIONS", "MNGMNT"]
---

Database connections are managed by the ABAP runtime framework. This is done at the [work process](ABENWORK_PROCESS_GLOSRY.html) level and the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) level. Each time an AS ABAP is started, a [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) is opened for every [work process](ABENWORK_PROCESS_GLOSRY.html) and this connection cannot be closed. In addition to the standard connection, 15 further [service connections](ABENSERVICE_CONNECTION_GLOSRY.html) can be opened for each work process. A maximum of 16 database connections can be open for each work process. On certain databases, it may not be possible to reach this number. If more than 16 database connections are opened, the runtime error `DBSQL_NO_MORE_CONNECTION` occurs.

ABAP SQL can request service connections. A service connection is requested as follows:

If no inactive database connection can be activated for the specified name, it is opened for the current work process and activated for the current internal session.

A service connection can be closed explicitly as follows:

If closed explicitly in ABAP SQL all database changes in the current database LUW of the connection that were not yet [committed on the database](ABENDB_COMMIT.html) are discarded.

Any service connection that is inactive for a specific period of time (approximately 15 minutes by default) is closed by the ABAP runtime framework implicitly.

Opening and closing a service connection using an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html).

An open service connection can be active or inactive. Once opened in ABAP SQL, a database connection is active and can be used by ABAP SQL. The service connection becomes inactive as soon as the current database LUW of this connection is ended. This can occur as follows:

An inactive open service connection is reused by the ABAP runtime framework if it is to be reopened for its work process. Once activated in an internal session, a service connection can be reused here regardless of whether it is active or inactive. It is not necessary to open it again explicitly. When an inactive connection is reused, it is activated implicitly and a new database LUW is opened.

Active open service connections can only be used within the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) in which they are opened.

When the internal session is closed, any changes made using the connections are committed and the connections are set to inactive.

-   In ABAP SQL:

-   By creating an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) by using the method `SERVICE` of class `CL_ABAP_SQL_CONNECTION_BUILDER`.

-   In ABAP SQL:

-   Using the method `CLOSE` of the interface `IF_ABAP_SQL_CONNECTION` of the [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) that represents the connection.

-   Generally speaking, database connections should only be closed implicitly by the ABAP runtime framework. Since it takes a significant amount of resources to restore a connection, database connections should only be closed explicitly in the following cases:

-   A database connection was used in such a way that unwanted side effects occur when reusing it.
-   The connections are not required for some time in the current process.

-   Using the statements [`COMMIT CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html) or [`ROLLBACK CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html) for this connection.
-   Using the statements [`COMMIT WORK`](ABAPCOMMIT.html) and [`ROLLBACK WORK`](ABAPROLLBACK.html) for all connections
-   In an implicit [database commit](ABENDB_COMMIT.html) or [database rollback](ABENDB_ROLLBACK.html) for all connections
-   When closing the internal session in which the connection was opened, where a `COMMIT CONNECTION` is executed for the connection implicitly.

-   When a database connection is closed explicitly it is actually closed and not just set to inactive. The next request must then reopen the connection for the current work process.

FINAL(conn) = \\n cl\_abap\_sql\_connection\_builder=>service( \\n \`R/3\*service\_conn\` )->create( ). \\n\\ \\n ... \\n\\ \\n conn->close( ). abenabap.html abenabap\_reference.html abendb\_access.html abendb\_connections.html