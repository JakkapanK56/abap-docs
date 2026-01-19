---
title: "ABENABAP_SQL_OVIEW"
description: |
  ABENABAP_SQL_OVIEW - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_OVIEW.htm"
abapFile: "ABENABAP_SQL_OVIEW.html"
keywords: ["select", "if", "data", "internal-table", "ABENABAP", "SQL", "OVIEW"]
---

ABAP SQL defines the subset of ABAP statements that enable direct access to data in the [standard database](ABENSTANDARD_DB_GLOSRY.html) of the current [AS ABAP](ABENAS_ABAP_GLOSRY.html). The ABAP SQL statements represent the [DQL](ABENDQL_GLOSRY.html) and [DML](ABENDML_GLOSRY.html) parts of [SQL](ABENSQL_GLOSRY.html) in ABAP, which is supported by all database systems. ABAP SQL statements are processed by the [ABAP SQL engine](ABENABAP_SQL_ENGINE_GLOSRY.html). There are two possibilities:

By default, ABAP SQL statements use [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) to access only the data of the [current client](ABENCURRENT_CLIENT_GLOSRY.html). To improve performance when accessing the database, [table buffering](ABENSAP_PUFFERING.html) can be activated for individual DDIC database tables, [DDIC database views](ABENDATABASE_VIEW_GLOSRY.html), or CDS views to avoid accessing the database directly each time.

ABAP SQL is closely linked with the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html). ABAP SQL statements can be used only to access [DDIC database tables](ABENDDIC_DATABASE_TABLES.html) of the ABAP Dictionary, [DDIC views](ABENDDIC_VIEWS.html), and [CDS persistent entities](ABENCDS_SQL_ENTITY_GLOSRY.html). These are specified directly in ABAP SQL statements without specifying a [database schema](ABENDATABASE_SCHEMA_GLOSRY.html). By default, the ABAP SQL interface of the database interface accesses the associated database objects in the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) of the [standard database](ABENSTANDARD_DB_GLOSRY.html).

The ABAP SQL interface of the database interface respects the fact that the order of the columns of a data source in the database system can differ from the order in the definition of the data source in the ABAP Dictionary. If ABAP SQL is used, the order in the ABAP Dictionary applies and the database interface performs a transformation if necessary. The function [SQL Trace](ABENSQL_TRACE_GLOSRY.html) of the [Performance Trace](ABENPERFORMANCE_TRACE_GLOSRY.html) tool (transaction `ST05`) can be used to analyze the SQL statements actually passed to the database by the database interface.

Each non-buffered ABAP SQL statement is equivalent to one access to the database. This applies in particular to [`SELECT`](ABAPSELECT.html) statements that end with `[ENDSELECT](ABAPENDSELECT.html)`. Data to be read and to be modified is transported in packages between the database server and the current AS instance. The size of the packages can be configured using [profile parameters](ABENPROFILE_PARAMETER_GLOSRY.html) (for example, the default value for Oracle is 65 KB).

If more than approximately 2^32 entries are addressed in a single database access, the behavior of the database is undefined.

-   The statements are passed to the [ABAP SQL interface](ABENABAP_SQL_INTERFACE_GLOSRY.html), where they are converted to database-specific SQL and then transferred to the database system and executed there.
-   The statements are executed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) for tabular data in the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) or in [internal tables](ABENINTERNAL_TABLE_GLOSRY.html) specified in the [`FROM`](ABAPSELECT_ITAB.html) clause.

-   [ABAP SQL - Client Handling](ABENABAP_SQL_CLIENT_HANDLING.html)
-   [ABAP SQL - Null Values](ABENABAP_SQL_NULL_VALUES.html)
-   [ABAP SQL - Table Buffering](ABENSAP_PUFFERING.html)
-   [ABAP SQL - Release-Dependent Syntax Check Modes](ABENABAP_SQL_STRICT_MODES.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html