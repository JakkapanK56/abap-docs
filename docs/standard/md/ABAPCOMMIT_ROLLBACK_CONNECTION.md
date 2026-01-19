---
title: "ABAPCOMMIT_ROLLBACK_CONNECTION"
description: |
  ABAPCOMMIT_ROLLBACK_CONNECTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCOMMIT_ROLLBACK_CONNECTION.htm"
abapFile: "ABAPCOMMIT_ROLLBACK_CONNECTION.html"
keywords: ["insert", "delete", "do", "if", "case", "catch", "method", "class", "data", "ABAPCOMMIT", "ROLLBACK", "CONNECTION"]
---

[Short Reference](ABAPCOMMIT_CONNECTION_SHORTREF.html)

`COMMIT|ROLLBACK CONNECTION @con_ref                           | con|(con_syntax)...`

[1. `... @con_ref`](#ABAP_VARIANT_1@1@)

[2. `... con|(con_syntax)`](#ABAP_VARIANT_2@1@)

This `COMMIT` or `ROLLBACK` statement performs a [database commit](ABENDB_COMMIT.html) or [database rollback](ABENDB_ROLLBACK.html) on the specified [database connection](ABENDATABASE_CONNECTION_GLOSRY.html).

In this variant, that is available in [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html), the database connection is specified using an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html). The operand `con_ref` must be a reference variable of the [static type](ABENSTATIC_TYPE_GLOSRY.html)\\ [`IF_ABAP_SQL_CONNECTION`](ABENIF_ABAP_SQL_CONNECTION.html) or a class or interface that implements that interface. The reference variable must point to a valid ABAP SQL connection object that represents an open database connection, otherwise the uncatchable exception `DBSQL_INVALID_CONNECTION_OBJ` occurs.

See [ABAP SQL - Connection Objects](ABENIF_ABAP_SQL_CONNECTION_ABEXA.html)

In this variant, that is not available in [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html), the database connection can be specified as follows:

The following can be specified for `con` or in `con_syntax`, all of which are transformed to uppercase letters internally:

Triggering a database commit and releasing the exclusive lock after modifying ABAP SQL statements by using `COMMIT CONNECTION default` on the standard connection.

-   Detailed information about database connections can be found under [Database Connections](ABENDB_CONNECTIONS.html).
-   It is important to note that the statements `COMMIT CONNECTION` and `ROLLBACK CONNECTION` when used for the standard connection, perform a pure database commit or rollback. Unlike [`COMMIT WORK`](ABAPCOMMIT.html) and [`ROLLBACK WORK`](ABAPROLLBACK.html), they do not close the current [SAP LUW](ABENSAP_LUW_GLOSRY.html).
-   The statements `COMMIT CONNECTION` and `ROLLBACK CONNECTION` change the state of an active [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) or [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) to inactive. A subsequent use of such a connection in the same internal session opens a new database LUW.
-   The statements `COMMIT CONNECTION` and `ROLLBACK CONNECTION` are suitable for a simple close of a database LUW. If database LUWs are monitored by the [application log](https://help.sap.com/docs/ABAP_PLATFORM_NEW/addb96cd90c945dfb3182865363bbc47/4e21012c35d44180e10000000a15822b), the function modules `DB_COMMIT` and `DB_ROLLBACK` are better suited because they raise an appropriate event.
-   The statements `COMMIT CONNECTION` and `ROLLBACK CONNECTION` empty [global temporary tables](ABENDDIC_DATABASE_TABLES_GTT.html) on a secondary connection or service connection and prevent the runtime error `COMMIT_GTT_ERROR` in implicit [database commits](ABENDB_COMMIT.html) on this connection.

-   ABAP SQL connection objects that represent valid database connections can only be created with APIs released by SAP, such as `CL_ABAP_SQL_CONNECTION_BUILDER`.
-   The statements `COMMIT|ROLLBACK CONNECTION @con_ref` have the same effect as calling the methods `COMMIT` or `ROLLBACK` of the connection object.
-   The character `@` in front of `con_ref` demands that a [reference variable](ABENREFERENCE_VARIABLE_GLOSRY.html)\\ `con_ref` that can be cast to `IF_ABAP_SQL_CONNECTION` is available. This is an incompatible change in programs, where a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) is specified by `con` (see variant 2) that also starts with the character `@`.

-   `con`
-   Specified directly and statically as `con`.
-   `(con_syntax)`
-   Specified as the content of a parenthesized data object `con_syntax` of type `c` or `string`.

-   `default` specified statically or `DEFAULT` specified dynamically for the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) of the current work process.
-   The name of [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) specified statically or dynamically. The name must exist in the column `CON_NAME` of the DDIC database table `DBCON`.
-   The name of a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) to the [standard database](ABENSTANDARD_DB_GLOSRY.html) specified statically or dynamically. The name of the service connection must consist of the prefix `R/3*` followed by a maximum of any 26 alphanumeric characters in uppercase letters.
-   A name (in uppercase letters) assigned for a secondary connection or service connection by the addition `AS` of the static Native SQL statement [`CONNECT TO`](ABAPEXEC_CONNECTION.html). It should be noted here that a connection with a name of this type is a separate database connection that can exist in parallel with a connection not named using `AS`.

-   With `COMMIT CONNECTION` and `ROLLBACK CONNECTION`, connections activated in Native SQL or AMDP can only be processed if their names do not contain lowercase letters. This affects [service connections](ABENSERVICE_CONNECTION_GLOSRY.html) and names defined using the addition `AS` of the statement [`CONNECT TO`](ABAPEXEC_CONNECTION.html). The names of [secondary connections](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) do not contain any lowercase letters.
-   For detailed information about database connections specified by `con` or `con_syntax`, see [Database Connections](ABENDB_CONNECTIONS.html).

DELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ). \\nCOMMIT CONNECTION default. abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abendb\_transaction.html