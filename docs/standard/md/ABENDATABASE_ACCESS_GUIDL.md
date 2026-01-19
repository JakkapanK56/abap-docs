---
title: "ABENDATABASE_ACCESS_GUIDL"
description: |
  ABENDATABASE_ACCESS_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDATABASE_ACCESS_GUIDL.htm"
abapFile: "ABENDATABASE_ACCESS_GUIDL.html"
keywords: ["update", "do", "while", "if", "case", "method", "class", "data", "types", "internal-table", "ABENDATABASE", "ACCESS", "GUIDL"]
---

In ABAP, data in database tables can be accessed in the following ways:

Alongside access to the ABAP database schema of the standard AS ABAP database, all access types (except for AMDP) also allow access to other databases and other database schemas using additional [database connections](ABENDATABASE_CONNECTION_GLOSRY.html).

**Using ABAP SQL**

Use ABAP SQL for general database accesses where possible. Only use AMDP and Native SQL for tasks where ABAP SQL is not suitable.

Only ABAP SQL is guaranteed to be independent of the database platform used. For this reason, ABAP SQL does not contain the set of all possible SQL statements in a specific database, but only a subset of the DQL and DML scope of all database systems supported by AS ABAP. The database tables that can be processed using ABAP SQL can be used in ABAP directly as structured types for the declaration of suitable work areas. Only ABAP SQL supports [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) of table content in the [shared memory](ABENUSE_SHARED_MEMORY_GUIDL.html).

AMDP and Native SQL should only be used if the task really cannot be solved using ABAP SQL. Services that work with AMDP and Native SQL are generally dependent on the database system used, so that they cannot be executed in all AS ABAP systems. For platform-independent services, implementations should be provided for all supported databases.

If the database is accessed using the Native SQL interface instead of the ABAP SQL interface, [AMDP](ABENADBC_GLOSRY.html) or [ADBC](ABENADBC_GLOSRY.html) should be used.

For a detailed description, see [Rules for Accessing ABAP-Managed Database Objects](ABENDATABASE_ACCESS_RECOMM.html).

See the executable example [AMDP, Comparison with ABAP SQL](ABENAMDP_VS_ABAP_SQL_CS_ABEXA.html). Database access not programmed well using ABAP SQL can often be optimized by improved use of ABAP SQL, making it unnecessary to use AMDP in these cases.

See the executable example [Currency Conversion with SQLScript](ABENSQL_SCRIPT_CURR_CONV_ABEXA.html). In this case, a specific built-in function of HANA SQL is used that was not generally available in ABAP SQL. Meanwhile, the function [`currency_conversion`](ABENSQL_CURR_UNIT_CONV_FUNC.html) is available in ABAP SQL and can replace the usage of AMDP.

-   **ABAP SQL**
-   Implemented by ABAP statements, [ABAP SQL](ABENABAP_SQL.html) is a subset of the Structured Query Language (SQL) comprising the DQL (Data Query Language) and DML (Data Manipulation Language) parts. The ABAP SQL statements use the ABAP SQL interface for platform-independent access to those database tables in the [standard AS ABAP database](ABENSTANDARD_DB_GLOSRY.html) defined in ABAP Dictionary and having instances created in the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html).
-   **AMDP**
-   The [AMDP framework](ABENAMDP.html) is used to manage and call ABAP Managed Database Procedures. These are database procedures or database procedures implemented as AMDP procedures in an AMDP method or an AMDP class and replicated to the database system from here.
-   **Native SQL**
-   Database-specific SQL statements that include DQL, DML and DDL (Data Definition Language) statements and which can be passed to the Native SQL interface of the database as follows:

-   The methods of [ADBC](ABENADBC.html) make it possible to execute dynamic SQL statements on a database system and process the results. ADBC (ABAP Database Connectivity), a class-based API that enables object-oriented access to the Native SQL interface.
-   Native SQL statements can be specified in ABAP programs between the statements [`EXEC SQL`](ABAPEXEC.html) and [`ENDEXEC`](ABAPENDEXEC.html). Static Native SQL statements of this kind are not checked completely by the syntax check and are forwarded almost unchanged from the Native SQL interface to the database of an AS ABAP.

-   AMDP, currently only available for a SAP HANA database as the standard AS ABAP database, is recommended for all tasks that swap out code from ABAP programs to this SAP HANA database for performance reasons.
-   ADBC is a modern object-oriented API that is better suited to modern ABAP programming than [`EXEC SQL`](ABAPEXEC.html). Enhancements to the Native SQL interface, such as bulk access using internal tables, are now only provided using ADBC. ADBC also enables [dynamic access](ABENDYNAMIC_PROG_TECHNIQUE_GDL.html); Native SQL on the other hand is just static. Newer SQL statements, such as `WITH` for common table expressions (CTEs), are not supported in full by `EXEC SQL`.

-   The rule dictating that ABAP SQL is to be used for as long as possible applies in particular to [AMDP](ABENAMDP.html) too. It is not a good idea to swap out SQL statements to database procedures if these could be implemented using ABAP SQL or [ABAP CDS](ABENCDS_GLOSRY.html) too. In this case, no performance gains can be expected since the ABAP SQL statements are updated to Native SQL by the database interface in exactly the same way as they would be written in the database procedure. Using AMDP is a good idea only if HANA-specific properties can be exploited by procedure calls or if repeated transports of large amounts of data between the database and the AS ABAP can be bypassed.
-   It is [not advisable](ABENDATABASE_ACCESS_RECOMM.html) to access ABAP-managed database objects if the access does not take place in ABAP programs.

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenarchitecture\_gdl.html abendata\_storage\_gdl.html