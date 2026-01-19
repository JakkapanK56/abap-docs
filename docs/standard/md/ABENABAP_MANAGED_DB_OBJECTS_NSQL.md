---
title: "ABENABAP_MANAGED_DB_OBJECTS_NSQL"
description: |
  ABENABAP_MANAGED_DB_OBJECTS_NSQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MANAGED_DB_OBJECTS_NSQL.htm"
abapFile: "ABENABAP_MANAGED_DB_OBJECTS_NSQL.html"
keywords: ["update", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABENABAP", "MANAGED", "OBJECTS", "NSQL"]
---

There are two types of Native SQL access to [ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html).

ABAP-managed Native SQL is [Native SQL](ABENNATIVE_SQL_GLOSRY.html) that can be used by ABAP programs to access the database through the [Native SQL interface](ABENNATIVE_SQL_INTERFACE_GLOSRY.html) in AS ABAP. It includes the following:

The Native SQL interface passes vendor-specific SQL statements to the database system without making any modifications. Alongside this, SAP-specific Native SQL is available, which is processed in platform-dependent parts of the interface (Client Libraries).

Native SQL can be used to access ABAP-managed database objects as follows:

The most important features of Native SQL are as follows:

Non-ABAP-managed Native SQL consists of SQL statements that are passed to the database using interfaces other than the [Native SQL interface](ABENNATIVE_SQL_INTERFACE_GLOSRY.html) of AS ABAP or that are executed in the database without being checked in AS ABAP. Examples are [database objects](ABENDB_OBJECT_GLOSRY.html) in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) created by [SAP Web IDE for SAP HANA](ABENSAP_WEB_IDE_FOR_SAP_HAN_GLOSRY.html) that access [ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html), as for example views that access database tables in ABAP Dictionary, or database procedures that call AMDP procedures or functions.

In general, the same applies to access using non-ABAP-managed Native SQL as to accessing ABAP-managed Native SQL. There are, however, the following additional restrictions:

A [dependency rule](ABENDEPENDENCY_RULE_GLOSRY.html) defined for a database table is also respected by non-ABAP-managed Native SQL, since this rule is evaluated by the optimizer of the SAP HANA database.

-   [ADBC - ABAP Database Connectivity](ABENADBC.html)
-   [`EXEC SQL` - Embedded Native SQL](ABENNATIVESQL.html)

-   Reads and writes on the following ABAP-managed database objects using database-specific SQL:

-   Instances of the [database tables](ABENDDIC_DATABASE_TABLES.html) and [DDIC database views](ABENDDIC_DATABASE_VIEWS.html) defined in the ABAP Dictionary.
-   [SQL views](ABENSQL_VIEW_GLOSRY.html) of CDS views defined in ABAP CDS.

-   Calls of the following ABAP-managed database procedures or database functions:

-   It is possible to call [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html) and [AMDP functions](ABENAMDP_FUNCTION_GLOSRY.html) that do not implement any [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) or [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html)..
-   The AMDP table function of a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) can be called.
-   The AMDP scalar function of a [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) can be called.

-   The [ABAP-specific session variables](ABENHANA_SESSION_VARIABLES.html) can be accessed on the SAP HANA database using the built-in HANA function `SESSION_CONTEXT`.

-   Native SQL is platform-dependent.
-   Data types defined in the ABAP Dictionary and their possible enhancements are not currently known in Native SQL.

-   Native SQL does not respect the order of fields defined in the ABAP Dictionary, which can differ from the order in the database.
-   The platform-dependent parts (Client Libraries) of the [Native SQL interface](ABENNATIVE_SQL_INTERFACE_GLOSRY.html) support [mappings](ABENNATIVE_SQL_TYPE_MAPPING.html) between ABAP types and appropriate database types for bound parameters in ADBC and [host variables](ABAPEXEC_HOST.html) after [`EXEC SQL`](ABAPEXEC.html). If types are not appropriate, on the other hand, platform-dependent conversions are made, which can easily produce unexpected results and errors.
-   Any [null values](ABENNULL_VALUE_GLOSRY.html) passed to ABAP data objects using the Native SQL interface are transformed to their type-dependent initial values. In the case of writes, null values cannot be prevented.

-   When procedures are called, Native SQL provides the following special methods alongside the platform-dependent SQL statements:

-   The method [`EXECUTE_PROCEDURE`](ABENADBC_PROCEDURE.html) of the class `CL_SQL_STATEMENT`
-   The statement [`EXECUTE PROCEDURE`](ABAPEXEC_PROCEDURE.html) after [`EXEC SQL`](ABAPEXEC.html)

-   Bindings of internal ABAP tables to Native SQL are only possible using the methods `SET_PARAM_TABLE` of the classes [`CL_SQL_STATEMENT`](ABENADBC_DDL_DML.html) and [`CL_SQL_RESULT_SET`](ABENADBC_QUERY.html) in ADBC. Internal tables cannot be used as [host variables](ABAPEXEC_HOST.html) after [`EXEC SQL`](ABAPEXEC.html) and cannot be used as parameters of the method [`EXECUTE_PROCEDURE`](ABENADBC_PROCEDURE.html) in ADBC.
-   When [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html) and [AMDP functions](ABENAMDP_FUNCTION_GLOSRY.html) are called, it cannot be guaranteed that the database objects exist or that their content is up-to-date. This is only the case in calls from ABAP and when accessing objects using ABAP SQL. Before an object is accessed using Native SQL, methods of the documented class `CL_AMDP_RUNTIME_SERVICES` can be used to create the database objects. This applies both to direct calls and indirect cases, such as when [SQL views](ABENSQL_VIEW_GLOSRY.html) of CDS views are accessed in whose DDL source code [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) are used as a data source.
-   Native SQL does not support the following ABAP Dictionary and ABAP CDS functions:

-   Native SQL does not support [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html). The client ID must always be specified explicitly. To do this, a parameter must be bound in ADBC or a host variable must be used after `EXEC SQL`. The ABAP-specific session variables `CLIENT` and `CDS_CLIENT` can be accessed on the SAP HANA database. It should be noted here that, when using Native SQL, the value of the session variable `CDS_CLIENT` cannot be set to a different value using ABAP methods.
-   Native SQL does not support [table buffering](ABENTABLE_BUFFERING_GLOSRY.html).
-   Native SQL does not support [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).
-   Native SQL cannot handle the [enhancement category of DDIC structures](ABENDDIC_STRUCTURES_ENH_CAT.html).
-   Native SQL does not support the [logging of database tables](ABENDDIC_DATABASE_TABLES_PROTOCOL.html).

-   Native SQL accesses the database objects of [CDS entities](ABENCDS_ENTITY_GLOSRY.html) directly and ignores any other properties of CDS entities:

-   When the [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a CDS view is accessed, the database-specific instance created of this view must be known. This applies in particular to CDS views with input parameters.
-   **Note** Accessing a CDS-managed DDIC view (obsolete) is [obsolete](ABENCDS_ACCESS_OBSOLETE.html).
-   When an instance of a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) is accessed, its AMDP table function must be called.
-   When an instance of a [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) is accessed, its AMDP scalar function must be called.
-   Native SQL cannot handle [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and [CDS roles](ABENCDS_ROLE_GLOSRY.html).
-   It must be ensured that all session variables used in a [CDS view entity](ABENCDS_SESSION_VARIABLE_V1.html) or [CDS DDIC-based view (obsolete)](ABENCDS_SESSION_VARIABLE_V1.html) have the correct value. This applies in particular to the session variable `client`, to which the HANA session variable `CDS_CLIENT` is assigned and not `CLIENT`.

-   The ABAP-managed database objects accessed in Native SQL are not recorded in a where-used list. Where-used lists can only be created indirectly, by declaring suitable parameters and host variables in references to the dictionary types of the database objects. Another option is a full text search in the ABAP source code in AS ABAP.
-   DDL statements are allowed in Native SQL.
-   Native SQL supports ABAP-managed [secondary connections](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) and [service connections](ABENSERVICE_CONNECTION_GLOSRY.html).
-   Native SQL respects the [dependency rules](ABENDEPENDENCY_RULE_GLOSRY.html) defined for a database.
-   Native SQL respects [data aging](ABENDATA_AGING_GLOSRY.html) by default.
-   When ADBC is used, Native SQL is either fully dynamic or, if `EXEC SQL` is used, fully static.

-   The exact instance and name of an [ABAP-managed database object](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html) is undefined and can change between releases. Only the AS ABAP [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) can react to such changes and make them transparent to the consumer.
-   The implementation and function of a database object managed by ABAP can depend on ABAP-specific context information that is provided only in cases where the database is a standard AS ABAP database and addressed using its database interface. More specifically, the content of the [ABAP-specific session variables](ABENHANA_SESSION_VARIABLES_ABEXA.html) in the SAP HANA database can be set correctly only when an object is accessed from ABAP. On other database platforms, in fact, only CDS session variables are set when CDS entities are accessed using ABAP SQL.
-   Only in cases where access is made from AS ABAP can it be guaranteed that an ABAP-managed database object actually exists and its content is up-to-date. The time when the instance is created or updated is not fixed and the existence or consistency of the instance is not guaranteed for access from outside AS ABAP. This applies in particular to [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html) and [AMDP functions](ABENAMDP_FUNCTION_GLOSRY.html) whose existence and consistency is only guaranteed by the AMDP framework of AS ABAP.
-   A where-used list for ABAP-managed database objects cannot be found using non-ABAP-managed Native SQL.
-   Non-ABAP-managed Native SQL does not support any ABAP-managed [secondary connections](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) and [service connections](ABENSERVICE_CONNECTION_GLOSRY.html).
-   Non-ABAP-managed Native SQL does not respect [data aging](ABENDATA_AGING_GLOSRY.html). If there is no suitable [dependency rule](ABENDEPENDENCY_RULE_GLOSRY.html), all partitions in the main memory of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) must be read.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_managed\_db\_objects.html abenabap\_managed\_db\_objects\_access.html