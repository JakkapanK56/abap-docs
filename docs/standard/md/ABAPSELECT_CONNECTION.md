---
title: "ABAPSELECT_CONNECTION"
description: |
  ABAPSELECT_CONNECTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT_CONNECTION.htm"
abapFile: "ABAPSELECT_CONNECTION.html"
keywords: ["select", "do", "if", "case", "catch", "class", "data", "ABAPSELECT", "CONNECTION"]
---

`... CONNECTION @con_ref               | con|(con_syntax)...`

[1. `... @con_ref`](#ABAP_VARIANT_1@1@)

[2. `... con|(con_syntax)`](#ABAP_VARIANT_2@1@)

The ABAP SQL statement is executed on the specified [database connection](ABENDATABASE_CONNECTION_GLOSRY.html).

In this variant, that is available in [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html), the database connection is specified using an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html). The operand `con_ref` must be a reference variable of the [static type](ABENSTATIC_TYPE_GLOSRY.html)\\ [`IF_ABAP_SQL_CONNECTION`](ABENIF_ABAP_SQL_CONNECTION.html) or a class or interface that implements that interface. The reference variable must point to a valid ABAP SQL connection object that represents an open database connection, otherwise the uncatchable exception `DBSQL_INVALID_CONNECTION_OBJ` occurs.

See [ABAP SQL - Connection Objects](ABENIF_ABAP_SQL_CONNECTION_ABEXA.html)

In this variant, that is not available in [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html), the database connection can be specified as follows:

The following can be specified for `con` or in `con_syntax`, all of which are converted to uppercase letters internally:

A database connection is not evaluated until runtime, regardless of whether it is specified statically or dynamically, and any unknown database connections produce the runtime error `DBSQL_UNKNOWN_CONNECTION`.

The database tables or views specified in the current ABAP SQL statement must be active in the ABAP Dictionary in the current AS ABAP regardless of the specified database connection. In a [secondary database](ABENSECONDARY_DB_GLOSRY.html), an identically named and usable object with a suitable structure must exist for each database table or view specified in the current ABAP SQL statement. If not, an exception is raised.

Reading of data using a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) to the standard database.

-   Detailed information about database connections can be found under [Database Connections](ABENDB_CONNECTIONS.html).
-   Any ABAP SQL statement that uses the standard connection accesses the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) only.
-   The [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) and [service connections](ABENSERVICE_CONNECTION_GLOSRY.html) can be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html).
-   The addition `CONNECTION` should always be specified behind the addition `OPTIONS`.
-   The addition `CONNECTION` cannot be used together with the addition `WITH HOLD` of the statement [`OPEN CURSOR`](ABAPOPEN_CURSOR.html).

-   The character `@` in front of `con_ref` demands that a [reference variable](ABENREFERENCE_VARIABLE_GLOSRY.html)\\ `con_ref` that can be cast to `IF_ABAP_SQL_CONNECTION` is available. This is an incompatible change in programs, where a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) is specified by `con` (see variant 2) that also starts with the character `@`.
-   ABAP SQL connection objects that represent valid database connections can only be created with APIs released by SAP, such as `CL_ABAP_SQL_CONNECTION_BUILDER`.
-   If this variant is used, the syntax check is performed in the [strict mode for ABAP release 9.14](ABENABAP_SQL_STRICTMODE_914.html).

-   `con`
-   Specified directly and statically as `con`.
-   `(con_syntax)`
-   Specified as the content of a parenthesized data object `con_syntax` of type `c` or `string`. The following can be specified for `con_syntax`:

-   Literal or constant
-   If the data object `con_syntax` is specified as a character literal or as a constant, it can be evaluated statically and the database connection is recognized as the used object.
-   Variable
-   If the data object `con_syntax` is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

-   `default` specified statically or `DEFAULT` specified dynamically for the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) of the current work process. The ABAP SQL statement uses the standard connection to access the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) of the [standard database](ABENSTANDARD_DB_GLOSRY.html).
-   The name of a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) specified statically or dynamically. The name must exist in the column `CON_NAME` of the database table `DBCON`. The following applies to the secondary connection:

-   It is used in its current database LUW if already open actively in the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html).
-   If it is not yet open actively in the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html), it is either opened as a shared [ABAP connection](ABENABAP_CONNECTION_GLOSRY.html) for the current work process or, if already open, it is reused and set to an active state.

-   The ABAP SQL statement uses the secondary connection to access the [database schema](ABENDATABASE_SCHEMA_GLOSRY.html) of the [database user](ABENDATABASE_USER_GLOSRY.html) of the [secondary database](ABENSECONDARY_DB_GLOSRY.html) that is defined for the secondary connection in the database table `DBCON`. All subsequent ABAP SQL statements in the same [internal session](ABENINTERNAL_SESSION_GLOSRY.html) for which the same secondary connection is specified use the active connection.
-   The name of a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) to the [standard database](ABENSTANDARD_DB_GLOSRY.html) specified statically or dynamically. The name of a service connection must consist of the prefix `R/3*` followed by a maximum of 26 alphanumeric characters in uppercase letters. The following applies to the service connection:

-   It is used in its current database LUW if already open actively in the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html).
-   If it is not yet open actively in the current internal session, it is either opened as a shared [ABAP connection](ABENABAP_CONNECTION_GLOSRY.html) for the current work process or, if already open, it is reused and set to an active state.

-   The ABAP SQL statement uses the standard connection to access the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) of the [standard database](ABENSTANDARD_DB_GLOSRY.html). All subsequent ABAP SQL statements in the same [internal session](ABENINTERNAL_SESSION_GLOSRY.html) for which the same service connection is specified use the active connection.
-   A name granted for a secondary connection or service connection by the addition `AS` of the static Native SQL statement [`CONNECT TO`](ABAPEXEC_CONNECTION.html) in uppercase letters. The same rules apply here as to directly specified secondary connections or service connections. It should be noted, however, that a connection with a name of this kind is a standalone database connection that can exist in parallel with a connection without a name defined using `AS`.

-   Secondary database connections can be used to access all [views](ABENVIEW_GLOSRY.html) that can be accessed using ABAP SQL, including [DDIC database views](ABENDATABASE_VIEW_GLOSRY.html), [DDIC projection views](ABENDDIC_PROJ_VIEW_GLOSRY.html), [DDIC external views](ABENEXTERNAL_VIEW_GLOSRY.html), and [CDS persistent entities](ABENCDS_SQL_ENTITY_GLOSRY.html). CDS views should be specified using the name of the [CDS entity](ABENCDS_ENTITY_GLOSRY.html), since the names of associated [CDS-managed DDIC views](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) are an [obsolete](ABENABAP_SQL_CDS_OBSOLETE.html) way of accessing views.
-   The type of a database object specified in an ABAP SQL statement does not necessarily need to match the type of the database object with the same name in the [secondary database](ABENSECONDARY_DB_GLOSRY.html). For example, a view with the same name in the secondary database can be accessed by specifying a database table and vice versa if they have the same structure.
-   Unlike in ABAP SQL, any database connections specified in Native SQL and AMDP are case-sensitive. To access a database connection activated in ABAP SQL in Native SQL or AMDP, the connection must be specified in uppercase letters. Conversely, an ABAP SQL statement cannot use a database connection activated using Native SQL or AMDP if its name contains lowercase letters.
-   The addition `CONNECTION` cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) in case of [secondary connections](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) that are available in table `DBCON`.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(itab) \\n OPTIONS \\n CONNECTION r/3\*my\_conn. \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapselect\_options.html