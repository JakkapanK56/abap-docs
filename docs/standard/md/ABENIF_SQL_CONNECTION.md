---
title: "ABENIF_SQL_CONNECTION"
description: |
  ABENIF_SQL_CONNECTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENIF_SQL_CONNECTION.htm"
abapFile: "ABENIF_SQL_CONNECTION.html"
keywords: ["insert", "update", "do", "if", "case", "try", "catch", "method", "class", "data", "ABENIF", "SQL", "CONNECTION"]
---

To build a connection, the class `CL_SQL_ADBC_CONNECTION_BUILDER` must be used. The following static methods can be used to specify a connection type:

All of these names are case-sensitive. The `GET` method creates an instance as a connection object, returns the corresponding reference of the specified connection type, and activates or continues using the [ABAP connection](ABENABAP_CONNECTION_GLOSRY.html). Depending on the connection type, the connection is a reference to `IF_SQL_CONNECTION_ABAP`, `IF_SQL_CONNECTION_PRIVATE`, or `IF_SQL_CONNECTION_ADAPTER`:

All database changes not yet committed using a [database commit](ABENDB_COMMIT.html) are discarded. The connection can no longer be used, and statements already linked to the connection become invalid. The methods are ignored in instances that represent the standard connection.

To handle [database LUWs](ABENADBC_TRANSACTION.html) using ADBC, the methods `COMMIT` and `ROLLBACK` can be used. These methods raise a [database commit](ABENDATABASE_COMMIT_GLOSRY.html) or [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html), respectively.

Specification of a service connection to the standard database for a regular statement.

-   `DEFAULT`: [Standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html).
-   `ABAP`: Connection shared by name with other ABAP statements in the same internal session.

-   [Service connection](ABENSERVICE_CONNECTION_GLOSRY.html) prefixed with `R/3*`.
-   [Secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) from the column `CON_NAME` of the database table `DBCON`.

-   `PRIVATE`: Connection privately owned by the given class instance, not shared by name with other ABAP statements.

-   [Service connection](ABENSERVICE_CONNECTION_GLOSRY.html) prefixed with `R/3*`.
-   [Secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) from the column `CON_NAME` of the database table `DBCON`.

-   `ADAPTER_2_ABAP_SQL`: Connection to support an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html).

-   The connection objects of connection type `DEFAULT` or `ABAP` have a reference to `IF_SQL_CONNECTION_ABAP`. The connection can be closed using the instance method `CLOSE_WITHOUT_DISCONNECT`.

-   `CLOSE_WITHOUT_DISCONNECT` ends the current database LUW with a [database rollback](ABENDB_ROLLBACK.html) and deactivates the connection. Its status is shown as `INACTIVE` in the output of the program `DBCONINFO`.

-   The connection object of connection type `PRIVATE` has a reference to `IF_SQL_CONNECTION_PRIVATE`. The connection can be closed using the instance methods `CLOSE_WITHOUT_DISCONNECT` and `CLOSE_WITH_DISCONNECT`.

-   `CLOSE_WITHOUT_DISCONNECT` ends the current database LUW with a [database rollback](ABENDB_ROLLBACK.html) and deactivates the connection. Its status is shown as `INACTIVE` in the output of the program `DBCONINFO`.
-   `CLOSE_WITH_DISCONNECT` ends the current database LUW with a [database rollback](ABENDB_ROLLBACK.html) and closes the connection. Its status is shown as `DISCONNECTED` in the output of the program `DBCONINFO`.

-   The connection object of connection type `ADAPTER` has a reference to `IF_SQL_CONNECTION_ADAPTER`. This connection object is an ABAP SQL connection object of type [`IF_ABAP_SQL_CONNECTION`](ABENIF_ABAP_SQL_CONNECTION.html), which was already defined and is now used continuously.

-   The connection should always be closed using the method `CLOSE_WITHOUT_DISCONNECT` at least once. Doing so ensures that limited resources like the [database cursor](ABENDATABASE_CURSOR_GLOSRY.html) are cleared.
-   For detailed information about database connections, see [database connections](ABENDB_CONNECTIONS.html).
-   Adapted ADBC connections do not set session variables or manipulate the database connection state.
-   Connections that are write-enabled for [logical external entities](ABENCDS_WRITABLE_EE.html) cannot be used in ADBC.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTRY. \\n\\ \\n FINAL(connection) = cl\_sql\_adbc\_connection\_builder=>abap( \\n 'R/3\*' && sy-repid )->get( ). \\n FINAL(builder) = connection->build\_new\_statement( ). \\n\\ \\n builder->sequence( |insert into| )->table( \\n |DEMO\_UPDATE| )->sequence( |"COL1" VALUES( ? )| ). \\n\\ \\n FINAL(insert) = builder->create\_regular( )->insert( ). \\n\\ \\n "... \\n\\ \\n CATCH cx\_sql\_exception INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abenadbc\_intf.html