---
title: "ABENCL_SQL_CONNECTION"
description: |
  ABENCL_SQL_CONNECTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_SQL_CONNECTION.htm"
abapFile: "ABENCL_SQL_CONNECTION.html"
keywords: ["insert", "update", "if", "case", "try", "catch", "method", "class", "data", "ABENCL", "SQL", "CONNECTION"]
---

The SQL statements that are represented by objects of the [`CL_SQL_STATEMENT`](ABENCL_SQL_STATEMENT.html) and [`CL_SQL_PREPARED_STATEMENT`](ABENCL_SQL_PREPARED_STATEMENT.html) classes work by default with the [standard AS ABAP database](ABENSTANDARD_DB_GLOSRY.html). The following class can be used to enable additional [database connections](ABENDATABASE_CONNECTION_GLOSRY.html) or to make settings for database connections, including the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html):

`CL_SQL_CONNECTION`

The method `GET_ABAP_CONNECTION` of the class `CL_SQL_CONNECTION` attempts to activate an [ABAP connection](ABENABAP_CONNECTION_GLOSRY.html) or to continue using it. The following parameters can be passed:

All of these names are case-sensitive. If the connection can be opened or used, an instance of the class `CL_SQL_CONNECTION` is created as a connection object and the corresponding reference is returned.

A further method `GET_CONNECTION` can be used to open or reuse an exclusive connection:

References to instances of `CL_SQL_CONNECTION` can be passed to the parameter `CON_REF` of the instance constructor of `CL_SQL_STATEMENT` or `CL_SQL_PREPARED_STATEMENT`. Instances created in this way execute their SQL statements on the database connection represented by the instance of `CL_SQL_CONNECTION`.

There are two ways to close the secondary connection or service connection represented by a connection object:

For both methods, all database changes not yet committed using a [database commit](ABENDB_COMMIT.html) are discarded. The connection object can no longer be used and statements that are already linked with the connection become invalid. The methods are ignored in instances that represent the standard connection.

To handle [database LUWs](ABENADBC_TRANSACTION.html) using ADBC, the class `CL_SQL_CONNECTION` contains the methods `COMMIT` and `ROLLBACK`, which raise a [database commit](ABENDATABASE_COMMIT_GLOSRY.html) or [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html) respectively. Furthermore, `CL_SQL_CONNECTION` contains methods for [setting the transaction behavior](ABENHANA_SET_TRANSACTION.html) of the current database connection. When an [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) is accessed, these methods must be used instead of the corresponding SQL `SET TRANSACTION` statements.

Specification of a service connection to the standard database for a prepared statement.

-   The value *DEFAULT* for the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) of the current work process.
-   The name of a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) from the column `CON_NAME` of the database table `DBCON`.
-   The name of a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) prefixed with `R/3*`.

-   If the value `abap_false` (default) is passed to the parameter `SHARABLE`, the secondary connection or service connection is not an ABAP connection and can be used exclusively via the connection object.
-   If the value `abap_true` is passed to the parameter `SHARABLE`, `GET_CONNECTION` works like `GET_ABAP_CONNECTION` and the connection is a shared ABAP connection.

-   The instance method `CLOSE_NO_DISCONNECT` of `CL_SQL_CONNECTION` ends the current database LUW with a [database rollback](ABENDB_ROLLBACK.html) and deactivates the connection. Its status is shown as `INACTIVE` in the output of program `DBCONINFO`.
-   The instance method `CLOSE` of `CL_SQL_CONNECTION` ends the current database LUW with a [database rollback](ABENDB_ROLLBACK.html) and closes the connection. Its status is shown as `DISCONNECTED` in the output of program `DBCONINFO`.

-   To create a connection object for the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html), an instance of `CL_SQL_CONNECTION` can be created directly using `CREATE OBJECT` or the instance operator `NEW` instead of calling the method `GET_ABAP_CONNECTION` with the value *DEFAULT*.
-   Method `CLOSE_NO_DISCONNECT` should be used instead of `CLOSE` if the database connection is to be reused in the current process. To restore a connection that was closed completely with `CLOSE` requires a significant amount of resources. `CLOSE` should only be used in exceptional cases, e.g, in order to avoid unwanted side effects that might exist for a connection when reusing it.
-   For detailed information about database connections, see [database connections](ABENDB_CONNECTIONS.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTRY. \\n FINAL(con) = cl\_sql\_connection=>get\_abap\_connection( \\n \`R/3\*my\_conn\` ). \\n FINAL(sql) = NEW cl\_sql\_prepared\_statement( \\n statement = \`INSERT INTO demo\_update VALUES( ?, ?, ?, ?, ?, ? )\` \\n con\_ref = con ). \\n\\ \\n ... \\n\\ \\n sql->close( ). \\n con->close\_no\_disconnect( ). \\n CATCH cx\_sql\_exception INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abennative\_sql\_obsolete.html abenadbc.html