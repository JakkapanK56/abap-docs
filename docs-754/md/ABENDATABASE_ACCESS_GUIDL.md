---
title: "Database Accesses - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_access_guidl.htm"
abapFile: "abendatabase_access_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Architecture](ABENARCHITECTURE_GUIDL.md) →  [Data Storage](ABENDATA_STORAGE_GUIDL.md) → 

Database Accesses

Background

In ABAP, data in database tables can be accessed in the following ways:

-   ABAP SQL
    Implemented by ABAP statements, [ABAP SQL](ABENOPENSQL.md) is a subset of the Structured Query Language (SQL) comprising the DML (Data Manipulation Language) part. The ABAP SQL statements use the ABAP SQL interface for platform-independent access to those database tables in the [standard](ABENSTANDARD_DB_GLOSRY.md "Glossary Entry") [AS ABAP](ABENABAP_DB_SCHEMA_GLOSRY.md "Glossary Entry") database defined in ABAP Dictionary and having instances created in the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.md "Glossary Entry").

-   AMDP
    The [AMDP framework](ABENAMDP.md) is used to manage and call ABAP Managed Database Procedures. These are database procedures or database procedures implemented as AMDP procedures in an AMDP method or an AMDP class and replicated to the database system from here.

-   Native SQL
    Database-specific SQL statements that include both DML and DDL (Data Definition Language) statements and which can be passed to the Native SQL interface of the database as follows:

-   The methods of [ADBC](ABENADBC.md) make it possible to execute dynamic SQL statements on a database system and process the results. ADBC (ABAP Database Connectivity), a class-based API that enables object-oriented access to the Native SQL interface.

-   Native SQL statements can be specified in ABAP programs between the statements [EXEC SQL](ABAPEXEC.md) and [ENDEXEC](ABAPENDEXEC.md). Static Native SQL statements of this kind are not checked completely by the syntax check and are forwarded almost unchanged from the Native SQL interface to the database of an AS ABAP.

Alongside access to the ABAP database schema of the standard AS ABAP database, all access types (except for AMDP) also allow access to other databases and other database schemas using additional [database connections](ABENDATABASE_CONNECTION_GLOSRY.md "Glossary Entry").

Rule

Using ABAP SQL

Use ABAP SQL for general persistence services where possible. Only use AMDP and Native SQL for tasks where ABAP SQL is not suitable.

Details

Only ABAP SQL is guaranteed to be independent of the database platform used. For this reason, ABAP SQL does not contain the set of all possible SQL statements in a specific database, but only a subset of the DML scope of all database systems supported by AS ABAP. The database tables that can be processed using ABAP SQL can be used in ABAP directly as structured types for the declaration of suitable work areas. Only ABAP SQL supports [table buffering](ABENSAP_BUFFERING_GLOSRY.md "Glossary Entry") of table content in the [shared memory](ABENUSE_SHARED_MEMORY_GUIDL.md "Guideline").

AMDP and Native SQL should only be used if the task really cannot be solved using ABAP SQL. Services that work with AMDP and Native SQL are generally dependent on the database system used, so that they cannot be executed in all AS ABAP systems. For platform-independent services, implementations should be provided for all supported databases.

If the database is accessed using the Native SQL interface instead of the ABAP SQL interface, [AMDP](ABENADBC_GLOSRY.md "Glossary Entry") or [ADBC](ABENADBC_GLOSRY.md "Glossary Entry") should be used.

-   AMDP, currently only available for a SAP HANA database as the standard AS ABAP database, is recommended for all tasks that swap out code from ABAP programs to this SAP HANA database for performance reasons.

-   ADBC is a modern object-oriented API that is better suited to modern ABAP programming than [EXEC SQL](ABAPEXEC.md). Enhancements to the Native SQL interface, such as bulk access using internal tables, are now only provided using ADBC. ADBC also enables [dynamic access](ABENDYNAMIC_PROG_TECHNIQUE_GUIDL.md "Guideline"); Native SQL on the other hand is just static. Newer SQL statements, such as WITH for common table expressions (CTEs), are not supported in full by EXEC SQL.

Notes

-   The rule dictating that ABAP SQL is to be used for as long as possible applies in particular to [AMDP](ABENAMDP.md) too. It is not a good idea to swap out SQL statements to database procedures if these could be implemented using ABAP SQL or [ABAP CDS](ABENCDS_GLOSRY.md "Glossary Entry") too. In this case, no performance gains can be expected since the ABAP SQL statements are updated to Native SQL by the database interface in exactly the same way as they would be written in the database procedure. Using AMDP is a good idea only if HANA-specific properties can be exploited by procedure calls or if repeated transports of large amounts of data between the database and the AS ABAP can be bypassed.

-   It is [not advisable](ABENDATABASE_ACCESS_RECOMM.md) to access ABAP-managed database objects if the access does not take place in ABAP programs.

Bad Example

See the executable example [AMDP](ABENAMDP_VS_OPEN_SQL_ABEXA.md), Comparison with ABAP SQL. Database access not programmed well using ABAP SQL can often be optimized by improved use of ABAP SQL, making it unnecessary to use AMDP in these cases.

Good Example

See the executable example [Currency Conversion with SQL Script](ABENSQL_SCRIPT_CURR_CONV_ABEXA.md). In this case, a specific operator of the language [SQL Script](ABENSQL_SCRIPT_GLOSRY.md "Glossary Entry") is used that is not usually available.
