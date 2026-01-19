---
title: "ABENHANA_SET_TRANSACTION"
description: |
  ABENHANA_SET_TRANSACTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENHANA_SET_TRANSACTION.htm"
abapFile: "ABENHANA_SET_TRANSACTION.html"
keywords: ["do", "if", "method", "class", "data", "ABENHANA", "SET", "TRANSACTION"]
---

[HANA-specific SQL](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f) contains the following statements for setting transaction behavior:

These statements modify the transaction behavior of the current [database connection](ABENDATABASE_CONNECTION_GLOSRY.html). They cannot be used directly by AS ABAP when accessing the SAP Hana database using [Native SQL](ABENNATIVE_SQL_GLOSRY.html) ([ADBC](ABENADBC.html), [`EXEC SQL`](ABENNATIVESQL.html)). This is because transaction behavior defined for the current database connection using these settings is persisted beyond its current [database LUW](ABENDATABASE_LUW_GLOSRY.html). If the database connection is then reused in ABAP SQL, Native SQL, or AMDP (see [Database Connections](ABENDB_CONNECTIONS.html)), unexpected or critical situations can arise. The following methods of the class `CL_SQL_CONNECTION` should be used instead:

These methods wrap the SQL statements. The HANA-specific part (Client Library) of the [Native SQL interface](ABENNATIVE_SQL_INTERFACE_GLOSRY.html) registers any calls of these methods and resets the transaction behavior of the current database connection to the default behavior at the end of the current database LUW.

-   `SET TRANSACTION AUTOCOMMIT DDL`
-   `SET TRANSACTION ISOLATION LEVEL`
-   `SET TRANSACTION LOCK WAIT TIMEOUT`
-   `SET TRANSACTION READ ONLY|WRITE`

-   `AUTOCOMMIT_DDL` for `SET TRANSACTION AUTOCOMMIT DDL`
-   `SET_ISOLATION_LEVEL` for `SET TRANSACTION ISOLATION LEVEL`
-   `SET_LOCK_WAIT_TIMEOUT` for `SET TRANSACTION LOCK WAIT TIMEOUT`
-   There is no current method available for `SET TRANSACTION READ ONLY|WRITE`

-   In [SQLScript](ABENSQL_SCRIPT_GLOSRY.html) (and hence automatically in the corresponding [AMDP methods](ABENAMDP_METHOD_GLOSRY.html)), the SQL `SET TRANSACTION` statements for setting transaction behavior are not allowed in the syntax.
-   Currently, there are no automatic resets of the transaction behavior after method calls on any other database platforms.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_hana.html