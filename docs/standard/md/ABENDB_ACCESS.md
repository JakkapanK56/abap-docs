---
title: "ABENDB_ACCESS"
description: |
  ABENDB_ACCESS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDB_ACCESS.htm"
abapFile: "ABENDB_ACCESS.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENDB", "ACCESS"]
---

All the data relevant for all applications of an [AS ABAP](ABENAS_ABAP_GLOSRY.html), including metadata and technical data, is stored and managed centrally in its [standard database](ABENSTANDARD_DB_GLOSRY.html). AS ABAP supports database systems from different vendors. The [database objects](ABENDB_OBJECT_GLOSRY.html) for storing and accessing data, such as database tables, views, or stored procedures, are created as platform-dependent objects by the ABAP-specific frameworks [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html), [ABAP CDS](ABENABAP_CDS_GLOSRY.html), and [AMDP](ABENAMDP_GLOSRY.html) in the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html).

All database objects defined and managed in AS ABAP are known as:

To enable access to database objects, every database system uses the largely standardized language [SQL](ABENSQL_GLOSRY.html), which can be implemented in different ways to suit specific platforms. The following options are available in ABAP for accessing ABAP-managed database objects: [ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html):

The following topics also deal with important aspects of database access:

[Use ABAP SQL for general database accesses where possible.](ABENDATABASE_ACCESS_GUIDL.html)

-   In the ABAP Dictionary, [DDIC database tables](ABENDDIC_DATABASE_TABLES.html) and [DDIC views](ABENDDIC_VIEWS.html), and in ABAP CDS [CDS persistent entities](ABENCDS_SQL_ENTITY_GLOSRY.html) are defined as ABAP-specific objects. Instances of these objects are created in the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) when they are activated. Such database tables, views, and entities can also be used as globally visible structured types in ABAP programs.
-   The [AMDP](ABENAMDP_GLOSRY.html) framework makes it possible to create ABAP-based definitions of [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html) and [AMDP functions](ABENAMDP_FUNCTION_GLOSRY.html) in the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html). In ABAP, they can be called as follows:

-   Using [method calls](ABENMETHOD_CALLS.html)
-   Using [ABAP SQL](ABENABAP_SQL_GLOSRY.html) for accessing a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html).
-   With [CDS scalar functions](ABENCDS_SCALAR_FUNCTION_GLOSRY.html).

-   [ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECTS.html).

-   [ABAP SQL](ABENABAP_SQL.html)
-   For mostly platform-independent access to database tables, DDIC views, and [CDS persistent entities](ABENCDS_SQL_ENTITY_GLOSRY.html), the [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements embedded in ABAP are used, which themselves are transformed to platform-dependent SQL using the [ABAP SQL interface](ABENABAP_SQL_INTERFACE_GLOSRY.html) in AS ABAP. This method also covers ABAP-specific evaluations, such as implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) or [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).
-   [AMDP](ABENAMDP.html)
-   Framework used to manage and call [database procedures](ABENDATABASE_PROCEDURE_GLOSRY.html) and [database functions](ABENDATABASE_FUNCTION_GLOSRY.html) in ABAP.
-   [Native SQL](ABENNATIVE_SQL.html)
-   To use platform-dependent SQL in ABAP, [Native SQL](ABENNATIVE_SQL_GLOSRY.html) can be passed to the database as follows using the [Native-SQL interface](ABENNATIVE_SQL_INTERFACE_GLOSRY.html):

-   Using the object-oriented framework [ADBC](ABENADBC_GLOSRY.html)
-   Using embedded Native SQL statements after the ABAP statement [`EXEC SQL`](ABAPEXEC.html).

-   [ABAP and SAP HANA](ABENABAP_HANA.html)
-   Additional specific methods are available when accessing [SAP HANA databases](ABENHANA_DATABASE_GLOSRY.html) from ABAP.
-   [Object Services](ABENABAP_OBJECT_SERVICES.html)
-   The [Object Services](ABENOBJECT_SERVICES_GLOSRY.html) framework makes object-oriented access to the database possible by placing a wrapper around the actual database reads.

-   [Data consistency](ABENDATA_CONSISTENCY.html)
-   [LUW](ABENLUW_GLOSRY.html) concepts must be employed to ensure data consistency when handling persistent data in databases.
-   [Database connections](ABENDB_CONNECTIONS.html)
-   [Database connections](ABENDATABASE_CONNECTION_GLOSRY.html) can also be used to provide access to other databases or database schemas.
-   [System class for database features](ABENCL_ABAP_DBFEATURES.html)
-   The class `CL_ABAP_DBFEATURES` can be used to determine features of database.

-   If a [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) is used as the standard AS ABAP database, it is handled in ABAP programs like any relational database.
-   [ABAP-managed database objects should not be accessed](ABENDATABASE_ACCESS_RECOMM.html) using any methods other than those described here.
-   [SQL services](ABENABAP_SQL_SERVICES_GLOSRY.html) provide SQL-level access to [ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html) for consumers outside the system.
-   In addition to the statements described here for database reads, the following are also available:

-   Access to [data clusters](ABENDATA_CLUSTER.html) in database tables
-   [Obsolete access statements](ABENDB_ACCESS_OBSOLETE.html)

-   The framework for [logical databases](ABENLDB.html) is an obsolete wrapper framework for database access.

abenabap.html abenabap\_reference.html