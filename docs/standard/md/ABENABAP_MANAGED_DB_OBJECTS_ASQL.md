---
title: "ABENABAP_MANAGED_DB_OBJECTS_ASQL"
description: |
  ABENABAP_MANAGED_DB_OBJECTS_ASQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MANAGED_DB_OBJECTS_ASQL.htm"
abapFile: "ABENABAP_MANAGED_DB_OBJECTS_ASQL.html"
keywords: ["select", "if", "class", "data", "types", "ABENABAP", "MANAGED", "OBJECTS", "ASQL"]
---

[ABAP SQL](ABENABAP_SQL_GLOSRY.html) includes a set of [ABAP SQL statements](ABENABAP_SQL.html) for use in ABAP programs. The database is accessed using the [ABAP SQL interface](ABENABAP_SQL_INTERFACE_GLOSRY.html) of the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html), which transforms the ABAP SQL statements into platform-dependent SQL.

ABAP SQL can be used to access [ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html) as follows:

The most important ABAP SQL features are as follows:

Some of the semantic properties defined in the ABAP Dictionary or ABAP CDS, such as foreign key relationships or reference fields, are ignored in ABAP SQL and are respected only by classic [Dynpros](ABENDYNPRO_GLOSRY.html), [Web Dynpros](ABENWEB_DYNPRO_GLOSRY.html), and some other frameworks. The latter applies in particular to the evaluation of [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) in ABAP CDS.

-   Reads and writes on [database tables](ABENDDIC_DATABASE_TABLES.html) and [DDIC database views](ABENDDIC_DATABASE_VIEWS.html) defined in the ABAP Dictionary. Writes on DDIC database views are restricted.
-   Reads on the database objects of CDS views, CDS table functions, and CDS hierarchies. When a CDS table function is accessed, the associated [AMDP table function](ABENAMDP_TABLE_FUNCTION_GLOSRY.html) is called internally and its result is provided as the result set of the ABAP SQL statement.

-   ABAP SQL is largely platform-independent
-   ABAP SQL is based on the data types defined in the ABAP Dictionary and their possible enhancements.

-   ABAP SQL respects the order of fields defined in the ABAP Dictionary, since this can differ from the order in the database.
-   ABAP SQL checks the compatibility of [host variables](ABENABAP_SQL_HOST_VARIABLES.html) with the associated dictionary types or database types.
-   ABAP SQL enables conversions between ABAP types and platform-dependent data types in accordance with uniform ABAP-specific rules.
-   ABAP SQL has its own [handler](ABENABAP_SQL_NULL_VALUES.html) for [null values](ABENNULL_VALUE_GLOSRY.html).

-   ABAP SQL supports the following ABAP Dictionary and ABAP CDS functions:

-   [Implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html)
-   [Table buffering](ABENSAP_PUFFERING.html)
-   Evaluating [CDS access control](ABENCDS_ACCESS_CONTROL.html)
-   [Enhancement categories of DDIC structures](ABENDDIC_STRUCTURES_ENH_CAT.html) are respected
-   [Logging of database tables](ABENDDIC_DATABASE_TABLES_PROTOCOL.html)

-   ABAP SQL accesses a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) using its name and respects all its relevant properties. Access to [CDS-managed DDIC views (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) is [obsolete](ABENABAP_SQL_CDS_OBSOLETE.html) and forbidden in [strict mode from ABAP release 7.62](ABENABAP_SQL_STRICTMODE_762.html).

-   [Implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) depends on how client dependency is defined using the corresponding annotations in the [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html).
-   The [CDS roles](ABENCDS_ROLE_GLOSRY.html) mapped to the CDS entity are evaluated.
-   The key fields defined in the CDS entity are respected.
-   [Actual parameters](ABENABAP_SQL_PARAMETERS.html) can be assigned to the input parameters of a CDS entity in uniform syntax.
-   [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html) can be specified for [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html).
-   When ABAP SQL is used to access a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html), the additional [hierarchy columns](ABENHIERARCHY_COLUMN_GLOSRY.html) can also be read.
-   All [session variables](ABENSESSION_VARIABLE_GLOSRY.html) are set correctly on all platforms when ABAP SQL is used to access a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). More specifically, the addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) modifies the session variable `client`.
-   When ABAP SQL is used to access a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html), the access is transformed to the call of the associated [AMDP table function](ABENAMDP_TABLE_FUNCTION_GLOSRY.html).

-   Database objects specified statically in ABAP SQL are recorded in the where-used list of the ABAP tools. Each time an ABAP-managed database object is modified it is advisable to record it in the where-used list. In this way the effects of the modification can be controlled.
-   ABAP SQL enables dynamic tokens to be specified that are evaluated at runtime of an ABAP program.
-   DDL statements are not included in ABAP SQL. The respective ABAP-managed database objects cannot be modified in ABAP SQL and no other database objects can be created or modified.
-   ABAP SQL supports the use of ABAP-managed [secondary connections](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) or [service connections](ABENSERVICE_CONNECTION_GLOSRY.html).
-   ABAP SQL respects the [dependency rules](ABENDEPENDENCY_RULE_GLOSRY.html) defined for a database.
-   ABAP SQL respects [data aging](ABENDATA_AGING_GLOSRY.html) by default.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_managed\_db\_objects.html abenabap\_managed\_db\_objects\_access.html