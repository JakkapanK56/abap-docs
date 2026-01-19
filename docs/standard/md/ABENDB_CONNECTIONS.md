---
title: "ABENDB_CONNECTIONS"
description: |
  ABENDB_CONNECTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDB_CONNECTIONS.htm"
abapFile: "ABENDB_CONNECTIONS.html"
keywords: ["do", "data", "types", "ABENDB", "CONNECTIONS"]
---

An [AS ABAP](ABENAS_ABAP_GLOSRY.html) uses database connections to access databases. A database connection defines the address of the database system (database host), the [database user](ABENDATABASE_USER_GLOSRY.html), and hence the assigned [database schema](ABENDATABASE_SCHEMA_GLOSRY.html) that is accessed. The [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [Native SQL](ABENABAP_SQL_GLOSRY.html) statements of an ABAP program and the [AMDP](ABENAMDP_GLOSRY.html) Framework use a database connection of the current [work process](ABENWORK_PROCESS_GLOSRY.html) to access a database. By default, the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) is used to access the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) of the [standard AS ABAP database](ABENSTANDARD_DB_GLOSRY.html). By opening a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html), it is also possible to access databases or database schemas other than the [standard database](ABENSTANDARD_DB_GLOSRY.html). This makes possible a number of options, for example, data can be passed to and committed in other databases or in other database schemas. The [secondary database](ABENSECONDARY_DB_GLOSRY.html) does not need to be part of an ABAP system here, but it must be supported by SAP. Connections called [service connections](ABENSERVICE_CONNECTION_GLOSRY.html) can also be used to access the standard database.

-   [Possible Database Connections](ABENDB_CONNECTIONS_TYPES.html)
-   [Management of Database Connections](ABENDB_CONNECTIONS_MNGMNT.html)
-   [Database Access Using Secondary Connections](ABENDB_CONNECTIONS_USING.html)
-   [Database Connections and Transactions](ABENDB_CONNECTIONS_TRANS.html)

abenabap.html abenabap\_reference.html abendb\_access.html