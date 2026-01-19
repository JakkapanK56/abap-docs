---
title: "ABENAMDP_DB_CONNECTIONS"
description: |
  ABENAMDP_DB_CONNECTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAMDP_DB_CONNECTIONS.htm"
abapFile: "ABENAMDP_DB_CONNECTIONS.html"
keywords: ["while", "if", "case", "method", "class", "data", "ABENAMDP", "CONNECTIONS"]
---

An [AMDP method](ABENAMDP_METHODS.html) is always implemented on the [standard database](ABENSTANDARD_DB_GLOSRY.html). By default, the call is made using the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html). An optional [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) can be specified for an [AMDP procedure implementation](ABENAMDP_PROCEDURE_METHODS.html).

To specify the database connection explicitly, an input parameter with the predefined name `connection` can be declared for an AMDP procedure implementation. This parameter must be of type `DBCON_NAME`. When the AMDP method is called, the following values can be passed to the parameter to specify the database connection:

All other names raise an exception.

[AMDP - Method Using a Service Connection (Client-safe)](ABENAMDP_CONNECTION_CS_ABEXA.html)

-   When the initial value or the value *DEFAULT* is passed, the standard connection is used.
-   When a name *R/3\*name* is passed, which consists of the prefix *R/3\** (uppercase characters) and a user-defined name `"name"` (case sensitive), a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) of this name to the standard database is used. The names *R/3\*AMDP\_SYNC* and *R/3\*AMDP\_ADBC* are exceptions. They are used by the AMDP framework itself.

-   The parameter `connection` cannot be used in the implementation of the AMDP method.
-   The input parameter `connection` cannot be declared for an [AMDP function implementation](ABENAMDP_FUNCTION_METHODS.html). This applies in particular to the parameter list of a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html).
-   The parameter `connection` cannot be used to specify connections to databases other than the standard database.
-   [Service connections](ABENSERVICE_CONNECTION_GLOSRY.html) to the standard database are useful for performing operations in a [database LUW](ABENDB_TRANSACTION.html) that is independent of the LUW of the standard connection.
-   For detailed information about database connections, see [database connections](ABENDB_CONNECTIONS.html).
-   The statement [`CALL DATABASE PROCEDURE`](ABAPCALL_DATABASE_PROCEDURE.html) or [ADBC](ABENADBC_GLOSRY.html) methods can be used to call database procedures on databases other than the standard database. This involves creating an object of the class [`CL_SQL_STATEMENT`](ABENCL_SQL_STATEMENT.html) while passing an object of the class [`CL_SQL_CONNECTION`](ABENCL_SQL_CONNECTION.html) and using the method [`EXECUTE_PROCEDURE`](ABENADBC_PROCEDURE.html).
-   If one of the additions [`CDS SESSION CLIENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) is used, the HANA session variable `CDS_CLIENT` is also set for a service connection.

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html