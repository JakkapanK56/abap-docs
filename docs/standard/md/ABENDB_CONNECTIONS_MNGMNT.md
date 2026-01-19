---
title: "ABENDB_CONNECTIONS_MNGMNT"
description: |
  ABENDB_CONNECTIONS_MNGMNT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDB_CONNECTIONS_MNGMNT.htm"
abapFile: "ABENDB_CONNECTIONS_MNGMNT.html"
keywords: ["select", "insert", "update", "delete", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "ABENDB", "CONNECTIONS", "MNGMNT"]
---

Database connections are managed by the ABAP runtime framework. This is done at the [work process](ABENWORK_PROCESS_GLOSRY.html) level and the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) level. Each time an AS ABAP is started, a [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) is opened for every [work process](ABENWORK_PROCESS_GLOSRY.html) and this connection cannot be closed. In addition to the standard connection, 15 further [secondary connections](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) or [service connections](ABENSERVICE_CONNECTION_GLOSRY.html) can be opened for each work process. A maximum of 16 database connections can be open for each work process. On certain databases, it may not be possible to reach this number. If more than 16 database connections are opened, the runtime error `DBSQL_NO_MORE_CONNECTION` occurs.

ABAP SQL and Native SQL can request secondary connections or service connections. AMDP can only request service connections. A secondary connection or a service connection is requested as follows:

If no inactive database connection can be activated for the specified name, it is opened for the current work process and activated for the current internal session.

A secondary connection or service connection can be closed explicitly as follows:

If closed explicitly in ABAP SQL or in Native SQL, all database changes in the current database LUW of the connection that were not yet [committed on the database](ABENDB_COMMIT.html) are discarded.

Any secondary connection or service connection that is inactive for a specific period of time (approximately 15 minutes by default) is closed by the ABAP runtime framework implicitly.

Opening of three service connections by specifying their name in ABAP SQL, ADBC, and after `EXEC SQL`. The connection opened using ABAP SQL is closed again using Native SQL, which requires its name to be specified in uppercase letters.

Opening and closing a service connection using an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html).

An open secondary connection or service connection can be active or inactive. Once opened in ABAP SQL, Native SQL, or AMDP, a database connection is active and can be used by ABAP SQL, Native SQL, or AMDP. The secondary connection or service connection becomes inactive as soon as the current database LUW of this connection is ended. This can occur as follows:

An inactive open secondary connection or service connection is reused by the ABAP runtime framework if it is to be reopened for its work process. Once activated in an internal session, a secondary connection or service connection can be reused here regardless of whether it is active or inactive. It is not necessary to open it again explicitly. When an inactive connection is reused, it is activated implicitly and a new database LUW is opened. For a shared [ABAP connection](ABENABAP_CONNECTION_GLOSRY.html), the usage can be ABAP SQL, Native SQL or ADBC. An exception to this rule are connections closed by method [`CLOSE_WITHOUT_DISCONNECT`](ABENIF_SQL_CONNECTION.html) of ADBC. They cannot be used via the connection object any longer.

A service connection `R/3*DEMO` is requested using ADBC and used for an SQL statement. The statement `COMMIT CONNECTION` ends the database LUW of the connection and sets it from active to inactive. Since the connection is a shared [ABAP connection](ABENABAP_CONNECTION_GLOSRY.html) and the connection name does not contain any lowercase letters, it is reused by being specified in the ABAP SQL statement `INSERT`. The connection is reactivated here and a new database LUW is started. A further `COMMIT CONNECTION` statement ends this LUW and deactivates the connection.

Active open secondary connections or service connections can only be used within the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) in which they are opened. An active open secondary connection or service connection is usually an [ABAP connection](ABENABAP_CONNECTION_GLOSRY.html) that can be shared by ABAP SQL, Native SQL, and AMDP within an internal session. Exceptions from this rule are connections opened in Native SQL or AMDP with lowercase letters in the name.

When the internal session is closed, any changes made using the connections are committed and the connections are set to inactive. When an ABAP program is called that returns to the called program (`SUBMIT AND RETURN` or `CALL TRANSACTION`), the states of any secondary connections or service connections opened here are preserved as active or inactive. They are not, however, passed to the called program. If a secondary connection or service connection with the same name is requested here, a further connection of the same type is opened.

Any shared [ABAP connection](ABENABAP_CONNECTION_GLOSRY.html) that becomes inactive within an internal session when its database LUW is ended can be reused in the same session without being requested explicitly, not just in ABAP SQL, but also in Native SQL or AMDP.

An ABAP SQL statement requests a service connection `R/3*DEMO` and then calls a further program. The called program requests a service connection with the same name. After this, two service connections with the same name are open and active for the current work process until the end of the internal session of the called program. When a return is made from the called program, its service connection is deactivated, just as the service connection of the calling program is deactivated when it is exited. No database commit was made before the call, which means that the [isolation level](ABENDB_ISOLATION.html) of the database determines whether the change made in the caller is visible in the called program.

**Calling Program**

**Called Program**

The program `DBCONINFO` shows all database connections of all work processes in the current AS ABAP. The name `R/3` in the column `ConName` identifies the standard connection. Other names indicate the secondary connections and service connections. The column `ConState` shows the states `ACTIVE`, `INACTIVE`, and `DISCONNECTED`. The column `Hdl` indicates whether a connection is a secondary connection or a service connection. Identically named secondary and service connections can occur for the following reasons:

The program `DBCONINFO` can be used to explore the examples shown in this section while they are being executed step by step in the ABAP Debugger.

-   In ABAP SQL:

-   By creating an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) by using the method `SERVICE` of class `CL_ABAP_SQL_CONNECTION_BUILDER`.
-   Implicitly by specifying the name `con|(con_syntax)` of the connection after the addition [`CONNECTION`](ABAPSELECT_CONNECTION.html)

-   Explicitly and implicitly in Native SQL using one of the following:

-   By creating an [ADBC connection object](ABENABAP_ADBC_CONN_OBJ_GLOSRY.html) by using the method `ABAP`, `ADAPTER_2_ABAP_SQL`, or `PRIVATE` of class `CL_SQL_ADBC_CONNECTION_BUILDER`.
-   The statement [`CONNECT TO`](ABAPEXEC_CONNECTION.html) after [`EXEC SQL`](ABAPEXEC.html)

-   The input parameter [`CONNECTION`](ABENAMDP_DB_CONNECTIONS.html) of [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html) (for service connections only)

-   In ABAP SQL:

-   Using the method `CLOSE` of the interface `IF_ABAP_SQL_CONNECTION` of the [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) that represents the connection.
-   ABAP SQL does not have a statement that closes a database connection that was opened by specifying its name `con|(con_syntax)`.

-   In Native SQL:

-   Using the method [`CLOSE_WITHOUT_DISCONNECT`](ABENIF_SQL_CONNECTION.html) of the ADBC interface `IF_SQL_CONNECTION_ABAP`, or the method [`CLOSE_WITHOUT_DISCONNECT`](ABENIF_SQL_CONNECTION.html) or [`CLOSE_WITH_DISCONNECT`](ABENIF_SQL_CONNECTION.html) of the ADBC interface `IF_SQL_CONNECTION_PRIVATE`.
-   A connection opened by using the `ADAPTER_2_ABAP_SQL` method cannot be closed.
-   Using the statement [`DISCONNECT`](ABAPEXEC_CONNECTION.html) after [`EXEC SQL`](ABAPEXEC.html)

-   Generally speaking, database connections should only be closed implicitly by the ABAP runtime framework. Since it takes a significant amount of resources to restore a connection, database connections should only be closed explicitly in the following cases:

-   A database connection was used in such a way that unwanted side effects occur when reusing it.
-   The connections are not required for some time in the current process.

-   The method [`CLOSE_WITHOUT_DISCONNECT`](ABENIF_SQL_CONNECTION.html) of ADBC does not actually close a connection but makes it inactive (see below). The connection is not available via the respective connection object any more, but it can be activated again.
-   A closed connection has the status `DISCONNECTED` in the output of program `DBCONINFO`.

-   Using the statements [`COMMIT CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html) or [`ROLLBACK CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html) for this connection.
-   Using the Native SQL statements `COMMIT WORK` or `ROLLBACK WORK` after [`EXEC SQL`](ABAPEXEC.html) for this connection
-   Using the methods [`COMMIT`](ABENADBC_TRANSACTION.html) and [`ROLLBACK`](ABENADBC_TRANSACTION.html) of the ADBC interface `IF_SQL_CONNECTION` for this connection.
-   Using the method [`CLOSE_WITHOUT_DISCONNECT`](ABENIF_SQL_CONNECTION.html) of the ADBC interfaces `IF_SQL_CONNECTION_ABAP` or `IF_SQL_CONNECTION_PRIVATE` for this connection. This method ends the current database LUW with a database rollback and also closes the connection for the respective ADBC connection object.
-   Using the statements [`COMMIT WORK`](ABAPCOMMIT.html) and [`ROLLBACK WORK`](ABAPROLLBACK.html) for all connections
-   In an implicit [database commit](ABENDB_COMMIT.html) or [database rollback](ABENDB_ROLLBACK.html) for all connections
-   When closing the internal session in which the connection was opened, where a `COMMIT CONNECTION` is executed for the connection implicitly.

-   When a database connection is closed explicitly it is actually closed and not just set to inactive. The next request must then reopen the connection for the current work process.
-   The method [`CLOSE_WITHOUT_DISCONNECT`](ABENIF_SQL_CONNECTION.html) of ADBC does not fully close a connection but makes it inactive. A shared [ABAP connection](ABENABAP_CONNECTION_GLOSRY.html) closed in such a way can be implicitly reopened as any inactive ABAP connection.
-   Active and inactive connections have the status `ACTIVE` and `INACTIVE` in the output of program `DBCONINFO` respectively.

-   Identically named connections are opened in called programs
-   Connections are opened using `CONNECT TO` after `EXEC SQL`, where `AS` is used to specify an explicit name

TRY. \\n SELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(itab) \\n OPTIONS \\n CONNECTION r/3\*demo1. \\n FINAL(con) = cl\_sql\_adbc\_connection\_builder=>abap( \\n \`R/3\*Demo2\` )->get( ). \\n\\ \\n EXEC SQL. \\n CONNECT TO 'R/3\*Demo3' \\n ENDEXEC. \\n\\ \\n EXEC SQL. \\n DISCONNECT 'R/3\*DEMO1' \\n ENDEXEC. \\n CATCH cx\_sql\_exception. \\n ... \\nENDTRY. FINAL(conn) = \\n cl\_abap\_sql\_connection\_builder=>service( \\n \`R/3\*service\_conn\` )->create( ). \\n\\ \\n ... \\n\\ \\n conn->close( ). FINAL(conn) = CONV dbcon-con\_name( \`R/3\*DEMO\` ). \\nFINAL(asql\_con) = cl\_abap\_sql\_connection\_builder=>service( conn \\n )->enable\_adbc\_adapter( )->create( ). \\n\\ \\nTRY. \\n FINAL(adbc\_con) = \\n cl\_sql\_adbc\_connection\_builder=>adapter\_2\_abap\_sql( \\n asql\_con )->get( ). \\n FINAL(builder) = adbc\_con->build\_new\_statement( ). \\n\\ \\n builder->sequence( \`DELETE FROM\` )->table( \`DEMO\_UPDATE\` ). \\n\\ \\n FINAL(delete) = builder->create\_regular( )->delete( ). \\n\\ \\n COMMIT CONNECTION (conn). \\n\\ \\n INSERT demo\_update CONNECTION (conn) \\n FROM @( VALUE #( id = 'X' col1 = 1 \\n col2 = 2 \\n col3 = 3 \\n col4 = 4 ) ). \\n COMMIT CONNECTION (conn). \\n CATCH cx\_sql\_exception. \\n ... \\nENDTRY. DELETE FROM demo\_update CONNECTION r/3\*demo. \\n\\ \\nSUBMIT ... AND RETURN. SELECT \* \\n FROM demo\_update \\n INTO TABLE @DATA(itab) \\n OPTIONS \\n CONNECTION r/3\*demo. abenabap.html abenabap\_reference.html abendb\_access.html abendb\_connections.html