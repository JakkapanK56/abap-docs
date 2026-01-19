---
title: "ABENIF_ABAP_SQL_CONNECTION"
description: |
  ABENIF_ABAP_SQL_CONNECTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENIF_ABAP_SQL_CONNECTION.htm"
abapFile: "ABENIF_ABAP_SQL_CONNECTION.html"
keywords: ["select", "insert", "update", "delete", "if", "method", "class", "data", "internal-table", "ABENIF", "ABAP", "SQL", "CONNECTION"]
---

The system interface `IF_ABAP_SQL_CONNECTION` is used for accessing [ABAP SQL connection objects](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) that represent [database connections](ABENDATABASE_CONNECTION_GLOSRY.html). [Interface reference variables](ABENINTERFACE_REF_VARIABLE_GLOSRY.html) pointing to valid connection objects can be used in the following statements:

The interface methods allow handling the database connection:

Valid connection objects can only be created using system classes such as `CL_ABAP_SQL_CONNECTION_BUILDER`. Currently, this class offers the following methods to create connection objects:

Different connection objects for service connections always represent different connections, even if they are created with the same name.

The interface methods `COMMIT` and `ROLLBACK` are internally called when the statements [`COMMIT|ROLLBACK CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html) are used with a connection object.

See [ABAP SQL - Connection Objects](ABENIF_ABAP_SQL_CONNECTION_ABEXA.html)

-   `SELECT`, `WITH`\\ `...`\\ [`CONNECTION`](ABAPSELECT_CONNECTION.html)
-   `INSERT`, `UPDATE`, `MODIFY`, `DELETE`\\ `...`\\ [`CONNECTION`](ABAPIUMD_CONN.html)
-   `COMMIT`, `ROLLBACK`\\ [`CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html)

-   `DESCRIBE` returns an internal table that contains a description of the database connection.
-   `COMMIT` commits all previous write accesses using that connection.
-   `ROLLBACK` rolls back all previous write accesses using that connection.
-   `HAS_UNCOMMITED_CHANGES` returns an initial value if all previous write accesses using that connection are committed.
-   `CLOSE` rolls back any uncommitted changes and closes the connection.

-   `DEFAULT` returns a connection object for the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html).
-   `SERVICE` creates a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) and returns a connection object for that connection. It must be passed a name of the service connection that must start with *R/3\**.
-   `WRITE_ENABLED_4_LOGICAL_SCHEMA` creates a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) and returns a connection object for a [logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html). This connection object enables write access on [dynamic external entities](ABENCDS_DYNAMIC_EE_GLOSRY.html). It must be passed a name for the service connection that must start with *R3\** and the name of the logical external schema that is to be write enabled. Note that a connection object can be write-enabled for exactly one logical external schema.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abencl\_osql.html