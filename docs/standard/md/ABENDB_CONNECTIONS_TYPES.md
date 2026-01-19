---
title: "ABENDB_CONNECTIONS_TYPES"
description: |
  ABENDB_CONNECTIONS_TYPES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDB_CONNECTIONS_TYPES.htm"
abapFile: "ABENDB_CONNECTIONS_TYPES.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "catch", "method", "class", "data", "ABENDB", "CONNECTIONS", "TYPES"]
---

When ABAP SQL, Native SQL, or AMDP is used in an ABAP program, the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) uses a [database connection](ABENDATABASE_CONNECTION_GLOSRY.html) of the current [work process](ABENWORK_PROCESS_GLOSRY.html) to access a database. Every work process always has a standard connection to the standard database. In addition, secondary connections to other databases or database schemas or service connections to the standard database can be used.

In order to access other database systems than the standard database, [CDS external entities](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html) can be used.

Each AS ABAP work process always has a standard connection to the [standard database](ABENSTANDARD_DB_GLOSRY.html) and this connection cannot be closed. It is shared by all [internal sessions](ABENINTERNAL_SESSION_GLOSRY.html). If the standard connection is used, the work process acts as a [database user](ABENDATABASE_USER_GLOSRY.html) to which the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) is assigned.

Specifies the standard connection explicitly in ABAP SQL. It would not be necessary to specify the connection in the statements `DELETE` and `INSERT`. The statement [`COMMIT CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html), however, makes an explicit [database commit](ABENDATABASE_COMMIT_GLOSRY.html) possible on the standard connection.

Specifies the standard connection using an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) created with the method `DEFAULT` of class `CL_ABAP_SQL_CONNECTION_BUILDER`. It would not be necessary to specify the connection in the statements `DELETE` and `INSERT`. The statement [`COMMIT CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html), however, makes an explicit [database commit](ABENDATABASE_COMMIT_GLOSRY.html) possible on the standard connection.

A secondary connection is a database connection to a [secondary database](ABENSECONDARY_DB_GLOSRY.html) defined by an entry in the database table `DBCON`. The table key `CON_NAME` of the table `DBCON` is the name of the secondary connection in uppercase letters under which it can be specified explicitly in ABAP. The remaining columns describe the properties of the secondary connection, such as the [database system](ABENDATABASE_SYSTEM_GLOSRY.html), the [database user](ABENDATABASE_USER_GLOSRY.html), and the physical address.

Entries in the database table `DBCON` are created and modified using the central [DBA Cockpit](ABENDBA_COCKPIT_GLOSRY.html) tool. If the DBA Cockpit tool is not available in a system for some reason, transaction `DBCO` can be used instead, but this requires some expertise. `DBCON` should not be accessed in any other way. More specifically, the table `DBCON` cannot be displayed using the [Data Browser](ABENDATA_BROWSER_GLOSRY.html) tool.

The [database user name](ABENDATABASE_USER_NAME_GLOSRY.html) of the [database user](ABENDATABASE_USER_GLOSRY.html) used to log on the database connection to the database system is part of the definition of a secondary connection in the table `DBCON`. An ABAP SQL statement that uses a secondary connection accesses only that [database schema](ABENDATABASE_SCHEMA_GLOSRY.html) that is assigned to this user.

A secondary connection must be specified explicitly before it can be used in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) or [Native SQL](ABENABAP_SQL_GLOSRY.html). If possible, the secondary connection is opened for the current work process or an existing inactive secondary connection with the same name is reused. Secondary connections cannot be used in [AMDP](ABENAMDP_GLOSRY.html).

Secondary connections between an AS ABAP that has a SAP HANA database as its standard database and other non-SAP HANA secondary databases are now obsolete. [SAP HANA Smart Data Access (SDA)](ABENSAP_HANA_SDA_GLOSRY.html) should be used instead (see [SAP Note 2626805](https://launchpad.support.sap.com/#/notes/2626805)). In SDA, secondary databases are addressed from the SAP HANA database using special qualified names or by using virtual tables. If a SAP HANA database is used as a standard AS ABAP database, ABAP programs can use these names via the standard connection. This is only possible using AMDP and Native SQL, since no qualified names can be specified in ABAP SQL. In ABAP CDS, SDA is encapsulated by [CDS external entities](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html).

Use of a secondary connection in ABAP SQL. The connection can be entered, and a check is made to see whether it exists in the database table `DBCON`. If no secondary connection exists in ABAP SQL, the uncatchable exception `DBSQL_UNKNOWN_CONNECTION` is raised.

A service connection is a database connection defined as follows:

The name of a service connection is `R/3*name` and consists of the prefix `R/3*` in uppercase letters and a definable case-sensitive `name` that can have between 1 and 26 alphanumeric characters.

A service connection is always a database connection to the standard database and inherits all settings from the standard connection automatically.

When a service connection is requested in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) , [Native SQL](ABENABAP_SQL_GLOSRY.html), or [AMDP](ABENAMDP_GLOSRY.html), it is opened for the current work process if possible or an existing inactive service connection with the same name is reused.

Use of a service connection called `R/3*service_conn` via its name in ABAP SQL.

Use of a service connection called `R/3*service_conn` represented by an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) in ABAP SQL.

-   By default, [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements , [Native SQL](ABENABAP_SQL_GLOSRY.html), and [AMDP](ABENAMDP_GLOSRY.html) all use the standard connection to access the ABAP database schema of the standard AS ABAP database.
-   In all places where a database connection can be specified explicitly in ABAP, the standard connection can also be specified as follows:

-   Using an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) created with the method `DEFAULT` of class `CL_ABAP_SQL_CONNECTION_BUILDER`.
-   Using an [ADBC connection object](ABENABAP_ADBC_CONN_OBJ_GLOSRY.html) created with the method `DEFAULT` of class `CL_SQL_ADBC_CONNECTION_BUILDER`.
-   Using the predefined name `DEFAULT`.

-   Secondary connections can address any number of [database schemas](ABENDATABASE_SCHEMA_GLOSRY.html) in the [standard database](ABENSTANDARD_DB_GLOSRY.html) or databases other than the standard database as [secondary databases](ABENSECONDARY_DB_GLOSRY.html). An AS ABAP can, for example, access the SAP HANA database of an independently operated SAP HANA appliance.
-   The prerequisite for a [secondary database](ABENSECONDARY_DB_GLOSRY.html) is that it must be a database system supported by SAP. Only this system has software for ABAP SQL and Native SQL access as a shared library.
-   If the [secondary database](ABENSECONDARY_DB_GLOSRY.html) is a database system other than the standard database of the current AS ABAP, the Database Shared Library (DBSL) provided for this database by SAP and client software provided by the database vendor must be installed here before an access using a secondary connection from the table `DBCON`. Information about creating the `DBCON` entry and installing the additional software is described in the standard SAP Notes for every supported database system.
-   Once all reads on secondary database, except SAP HANA databases, have been replaced by [SDA](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/a07c7ff25997460bbcb73099fb59007d), Shared Libraries (DBSL) are no longer required.

-   Using an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) created with the method `SERVICE` of class `CL_ABAP_SQL_CONNECTION_BUILDER`. The name of the service connection must be passed to the method.
-   Using an [ADBC connection object](ABENABAP_ADBC_CONN_OBJ_GLOSRY.html) created with the method `SERVICE` of class `CL_SQL_ADBC_CONNECTION_BUILDER`. The name of the service connection must be passed to the method.
-   By specifying its name in ABAP SQL statements, Native SQL, or AMDP.

-   Service connections to the standard SAP database are useful for performing operations in a [database LUW](ABENDB_TRANSACTION.html) that are independent of the LUW of the standard connection. It should be noted that the current [isolation level](ABENDB_ISOLATION.html) is responsible for determining whether a read from a database LUW can access data modified in a different database LUW, before this data is committed using a database commit.
-   Service connections add to the number of open connections of the current work process. There can be a maximum of 16 open connections, including the standard connection itself.
-   Service connections can be used for modifying data on external database systems using [writable CDS external entities](ABENWRITABLE_EE_GLOSRY.html). For details, see the topic [CDS DDL - `DEFINE EXTERNAL ENTITY`, `WRITABLE`](ABENCDS_WRITABLE_EE.html).
-   The freely definable `name` is not associated with the entries in the database table `DBCON` and is used only to identify a service connection. Hence, specifying a database connection from the database table `DBCON` for `name` does not mean that this database connection is used.

DELETE FROM demo\_update OPTIONS CONNECTION default. \\nINSERT demo\_update \\n FROM @( VALUE #( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ) \\n OPTIONS CONNECTION default. \\nCOMMIT CONNECTION default. FINAL(conn) = cl\_abap\_sql\_connection\_builder=>default( )->create( ). \\n\\ \\nDELETE FROM demo\_update OPTIONS CONNECTION @conn. \\nINSERT demo\_update \\n FROM @( VALUE #( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ) \\n OPTIONS CONNECTION @conn. \\nCOMMIT CONNECTION @conn. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA conn TYPE dbcon-con\_name. \\ncl\_demo\_input=>request( CHANGING field = conn ). \\n\\ \\nSELECT SINGLE @abap\_true \\n FROM dbcon \\n WHERE con\_name = @conn \\n INTO @FINAL(dbtype). \\nIF sy-subrc <> 0. \\n out->display( 'Connection not in DBCON' ). \\n RETURN. \\nENDIF. \\n\\ \\nDELETE FROM demo\_update CONNECTION (conn). \\nINSERT demo\_update CONNECTION (conn) \\n FROM @( VALUE #( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ). \\nCOMMIT CONNECTION (conn). DELETE FROM demo\_update CONNECTION R/3\*service\_conn. \\nINSERT demo\_update CONNECTION R/3\*service\_conn \\n FROM @( VALUE #( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ). \\nCOMMIT CONNECTION R/3\*service\_conn. FINAL(conn) = \\n cl\_abap\_sql\_connection\_builder=>service( \\n \`R/3\*service\_conn\` )->create( ). \\n\\ \\nDELETE FROM demo\_update OPTIONS CONNECTION @conn. \\nINSERT demo\_update \\n FROM @( VALUE #( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ) \\n OPTIONS CONNECTION @conn. \\nCOMMIT CONNECTION @conn. abenabap.html abenabap\_reference.html abendb\_access.html abendb\_connections.html