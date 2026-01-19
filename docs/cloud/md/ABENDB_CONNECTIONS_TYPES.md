---
title: "ABENDB_CONNECTIONS_TYPES"
description: |
  ABENDB_CONNECTIONS_TYPES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDB_CONNECTIONS_TYPES.htm"
abapFile: "ABENDB_CONNECTIONS_TYPES.html"
keywords: ["insert", "update", "delete", "if", "case", "method", "class", "data", "ABENDB", "CONNECTIONS", "TYPES"]
---

When ABAP SQL is used in an ABAP program, the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) uses a [database connection](ABENDATABASE_CONNECTION_GLOSRY.html) of the current [work process](ABENWORK_PROCESS_GLOSRY.html) to access a database. Every work process always has a standard connection to the standard database. In addition, service connections to the standard database can be used.

In order to access other database systems than the standard database, [CDS external entities](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html) can be used.

Each AS ABAP work process always has a standard connection to the [standard database](ABENSTANDARD_DB_GLOSRY.html) and this connection cannot be closed. It is shared by all [internal sessions](ABENINTERNAL_SESSION_GLOSRY.html). If the standard connection is used, the work process acts as a [database user](ABENDATABASE_USER_GLOSRY.html) to which the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) is assigned.

Specifies the standard connection using an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) created with the method `DEFAULT` of class `CL_ABAP_SQL_CONNECTION_BUILDER`. It would not be necessary to specify the connection in the statements `DELETE` and `INSERT`. The statement [`COMMIT CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html), however, makes an explicit [database commit](ABENDATABASE_COMMIT_GLOSRY.html) possible on the standard connection.

A service connection is a database connection defined as follows:

The name of a service connection is `R/3*name` and consists of the prefix `R/3*` in uppercase letters and a definable case-sensitive `name` that can have between 1 and 26 alphanumeric characters.

A service connection is always a database connection to the standard database and inherits all settings from the standard connection automatically.

When a service connection is requested in [ABAP SQL](ABENABAP_SQL_GLOSRY.html), it is opened for the current work process if possible or an existing inactive service connection with the same name is reused.

Use of a service connection called `R/3*service_conn` represented by an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) in ABAP SQL.

-   By default, [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements use the standard connection to access the ABAP database schema of the standard AS ABAP database.
-   In all places where a database connection can be specified explicitly in ABAP, the standard connection can also be specified as follows:

-   Using an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) created with the method `DEFAULT` of class `CL_ABAP_SQL_CONNECTION_BUILDER`.

-   Using an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) created with the method `SERVICE` of class `CL_ABAP_SQL_CONNECTION_BUILDER`. The name of the service connection must be passed to the method.

-   Service connections to the standard SAP database are useful for performing operations in a [database LUW](ABENDB_TRANSACTION.html) that are independent of the LUW of the standard connection. It should be noted that the current [isolation level](ABENDB_ISOLATION.html) is responsible for determining whether a read from a database LUW can access data modified in a different database LUW, before this data is committed using a database commit.
-   Service connections add to the number of open connections of the current work process. There can be a maximum of 16 open connections, including the standard connection itself.
-   Service connections can be used for modifying data on external database systems using [writable CDS external entities](ABENWRITABLE_EE_GLOSRY.html). For details, see the topic [CDS DDL - `DEFINE EXTERNAL ENTITY`, `WRITABLE`](ABENCDS_WRITABLE_EE.html).

FINAL(conn) = cl\_abap\_sql\_connection\_builder=>default( )->create( ). \\n\\ \\nDELETE FROM demo\_update OPTIONS CONNECTION @conn. \\nINSERT demo\_update \\n FROM @( VALUE #( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ) \\n OPTIONS CONNECTION @conn. \\nCOMMIT CONNECTION @conn. FINAL(conn) = \\n cl\_abap\_sql\_connection\_builder=>service( \\n \`R/3\*service\_conn\` )->create( ). \\n\\ \\nDELETE FROM demo\_update OPTIONS CONNECTION @conn. \\nINSERT demo\_update \\n FROM @( VALUE #( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ) \\n OPTIONS CONNECTION @conn. \\nCOMMIT CONNECTION @conn. abenabap.html abenabap\_reference.html abendb\_access.html abendb\_connections.html