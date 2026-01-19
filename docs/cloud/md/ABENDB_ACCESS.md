---
title: "ABENDB_ACCESS"
description: |
  ABENDB_ACCESS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDB_ACCESS.htm"
abapFile: "ABENDB_ACCESS.html"
keywords: ["do", "if", "method", "data", "types", "ABENDB", "ACCESS"]
---

All the data relevant for all applications of an [AS ABAP](ABENAS_ABAP_GLOSRY.html), including metadata and technical data, is stored and managed centrally in its [standard database](ABENSTANDARD_DB_GLOSRY.html). AS ABAP supports database systems from different vendors. The [database objects](ABENDB_OBJECT_GLOSRY.html) for storing and accessing data, such as database tables, views, or stored procedures, are created as platform-dependent objects by the ABAP-specific frameworks [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html), [ABAP CDS](ABENABAP_CDS_GLOSRY.html), and [AMDP](ABENAMDP_GLOSRY.html) in the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html).

To enable access to database objects, every database system uses the largely standardized language [SQL](ABENSQL_GLOSRY.html), which can be implemented in different ways to suit specific platforms. The following options are available in ABAP for accessing ABAP-managed database objects: [ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html):

The following topics also deal with important aspects of database access:

-   In the ABAP Dictionary, [DDIC database tables](ABENDDIC_DATABASE_TABLES.html) and DDIC views, and in ABAP CDS [CDS persistent entities](ABENCDS_SQL_ENTITY_GLOSRY.html) are defined as ABAP-specific objects. Instances of these objects are created in the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) when they are activated. Such database tables, views, and entities can also be used as globally visible structured types in ABAP programs.
-   The [AMDP](ABENAMDP_GLOSRY.html) framework makes it possible to create ABAP-based definitions of [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html) and [AMDP functions](ABENAMDP_FUNCTION_GLOSRY.html) in the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html). In ABAP, they can be called as follows:

-   Using [method calls](ABENMETHOD_CALLS.html)
-   Using [ABAP SQL](ABENABAP_SQL_GLOSRY.html) for accessing a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html).
-   With [CDS scalar functions](ABENCDS_SCALAR_FUNCTION_GLOSRY.html).

-   [ABAP SQL](ABENABAP_SQL.html)
-   For mostly platform-independent access to database tables, and [CDS persistent entities](ABENCDS_SQL_ENTITY_GLOSRY.html), the [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements embedded in ABAP are used, which themselves are transformed to platform-dependent SQL using the [ABAP SQL interface](ABENABAP_SQL_INTERFACE_GLOSRY.html) in AS ABAP. This method also covers ABAP-specific evaluations, such as implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) or [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).
-   [AMDP](ABENAMDP.html)
-   Framework used to manage and call [database procedures](ABENDATABASE_PROCEDURE_GLOSRY.html) and [database functions](ABENDATABASE_FUNCTION_GLOSRY.html) in ABAP.

-   [Data consistency](ABENDATA_CONSISTENCY.html)
-   [LUW](ABENLUW_GLOSRY.html) concepts must be employed to ensure data consistency when handling persistent data in databases.

-   If a [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) is used as the standard AS ABAP database, it is handled in ABAP programs like any relational database.
-   [SQL services](ABENABAP_SQL_SERVICES_GLOSRY.html) provide SQL-level access to [ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html) for consumers outside the system.

abenabap.html abenabap\_reference.html