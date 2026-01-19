---
title: "ABAPIUMD_CONN"
description: |
  ABAPIUMD_CONN - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPIUMD_CONN.htm"
abapFile: "ABAPIUMD_CONN.html"
keywords: ["if", "catch", "class", "data", "ABAPIUMD", "CONN"]
---

`... CONNECTION @con_ref ...`

The ABAP SQL statement is executed on the specified [database connection](ABENDATABASE_CONNECTION_GLOSRY.html).

The database connection is specified using an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html). The operand `con_ref` must be a reference variable of the [static type](ABENSTATIC_TYPE_GLOSRY.html)\\ [`IF_ABAP_SQL_CONNECTION`](ABENIF_ABAP_SQL_CONNECTION.html) or a class or interface that implements that interface. The reference variable must point to a valid ABAP SQL connection object that represents an open database connection, otherwise the uncatchable exception `DBSQL_INVALID_CONNECTION_OBJ` occurs.

See [ABAP SQL - Connection Objects](ABENIF_ABAP_SQL_CONNECTION_ABEXA.html)

-   The character `@` in front of `con_ref` demands that a [reference variable](ABENREFERENCE_VARIABLE_GLOSRY.html)\\ `con_ref` that can be cast to `IF_ABAP_SQL_CONNECTION` is available.
-   ABAP SQL connection objects that represent valid database connections can only be created with APIs released by SAP, such as `CL_ABAP_SQL_CONNECTION_BUILDER`.
-   Detailed information about database connections can be found under [Database Connections](ABENDB_CONNECTIONS.html).
-   Any ABAP SQL statement that uses the standard connection accesses the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) only.
-   The addition `CONNECTION` should always be specified behind the addition `OPTIONS`.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html abapiumd\_options.html