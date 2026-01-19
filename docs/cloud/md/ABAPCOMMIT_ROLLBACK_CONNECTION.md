---
title: "ABAPCOMMIT_ROLLBACK_CONNECTION"
description: |
  ABAPCOMMIT_ROLLBACK_CONNECTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCOMMIT_ROLLBACK_CONNECTION.htm"
abapFile: "ABAPCOMMIT_ROLLBACK_CONNECTION.html"
keywords: ["do", "if", "catch", "method", "class", "data", "ABAPCOMMIT", "ROLLBACK", "CONNECTION"]
---

`COMMIT|ROLLBACK CONNECTION @con_ref...`

[1. `... @con_ref`](#ABAP_VARIANT_1@1@)

[2. `... con|(con_syntax)`](#ABAP_VARIANT_2@1@)

This `COMMIT` or `ROLLBACK` statement performs a [database commit](ABENDB_COMMIT.html) or [database rollback](ABENDB_ROLLBACK.html) on the specified [database connection](ABENDATABASE_CONNECTION_GLOSRY.html).

In this variant, that is available in [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html), the database connection is specified using an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html). The operand `con_ref` must be a reference variable of the [static type](ABENSTATIC_TYPE_GLOSRY.html)\\ [`IF_ABAP_SQL_CONNECTION`](ABENIF_ABAP_SQL_CONNECTION.html) or a class or interface that implements that interface. The reference variable must point to a valid ABAP SQL connection object that represents an open database connection, otherwise the uncatchable exception `DBSQL_INVALID_CONNECTION_OBJ` occurs.

See [ABAP SQL - Connection Objects](ABENIF_ABAP_SQL_CONNECTION_ABEXA.html)

-   Detailed information about database connections can be found under [Database Connections](ABENDB_CONNECTIONS.html).
-   It is important to note that the statements `COMMIT CONNECTION` and `ROLLBACK CONNECTION` when used for the standard connection, perform a pure database commit or rollback. Unlike [`COMMIT WORK`](ABAPCOMMIT.html) and [`ROLLBACK WORK`](ABAPROLLBACK.html), they do not close the current [SAP LUW](ABENSAP_LUW_GLOSRY.html).
-   The statements `COMMIT CONNECTION` and `ROLLBACK CONNECTION` change the state of an active [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) to inactive. A subsequent use of such a connection in the same internal session opens a new database LUW.
-   The statements `COMMIT CONNECTION` and `ROLLBACK CONNECTION` are suitable for a simple close of a database LUW.
-   The statements `COMMIT CONNECTION` and `ROLLBACK CONNECTION` empty [global temporary tables](ABENDDIC_DATABASE_TABLES_GTT.html) on a service connection and prevent the runtime error `COMMIT_GTT_ERROR` in implicit [database commits](ABENDB_COMMIT.html) on this connection.

-   ABAP SQL connection objects that represent valid database connections can only be created with APIs released by SAP, such as `CL_ABAP_SQL_CONNECTION_BUILDER`.
-   The statements `COMMIT|ROLLBACK CONNECTION @con_ref` have the same effect as calling the methods `COMMIT` or `ROLLBACK` of the connection object.
-   The character `@` in front of `con_ref` demands that a [reference variable](ABENREFERENCE_VARIABLE_GLOSRY.html)\\ `con_ref` that can be cast to `IF_ABAP_SQL_CONNECTION` is available.

abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abendb\_transaction.html