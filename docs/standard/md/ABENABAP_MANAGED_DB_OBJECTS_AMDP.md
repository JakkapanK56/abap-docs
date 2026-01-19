---
title: "ABENABAP_MANAGED_DB_OBJECTS_AMDP"
description: |
  ABENABAP_MANAGED_DB_OBJECTS_AMDP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MANAGED_DB_OBJECTS_AMDP.htm"
abapFile: "ABENABAP_MANAGED_DB_OBJECTS_AMDP.html"
keywords: ["update", "do", "if", "case", "method", "class", "data", "types", "ABENABAP", "MANAGED", "OBJECTS", "AMDP"]
---

[ABAP Managed Database Procedures (AMDP)](ABENABAP_MANAGED_DB_PROC_GLOSRY.html) is a class-based AS ABAP framework for managing and calling [database procedures](ABENDATABASE_PROCEDURE_GLOSRY.html) and [database functions](ABENDATABASE_FUNCTION_GLOSRY.html) in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). No other database platforms are currently supported. [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) are implemented in [SQLScript](ABENSQL_SCRIPT_GLOSRY.html). The AMDP framework creates and manages the procedures and functions as ABAP-managed database objects. From ABAP, [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html) or [AMDP scalar functions](ABENAMDP_SCALAR_FUNCTION_GLOSRY.html) are called using method calls. [AMDP table functions](ABENAMDP_TABLE_FUNCTION_GLOSRY.html), on the other hand, are called by accessing the associated [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) using ABAP SQL. The AMDP framework itself uses the AS ABAP [Native SQL interface](ABENNATIVE_SQL_INTERFACE_GLOSRY.html) internally to access the database.

AMDP can be used to access [ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html) as follows:

The most important AMDP features are as follows:

Implementations of AMDP methods can be debugged in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html).

-   Reads and writes on the following ABAP-managed database objects in the SQLScript implementation of an AMDP method.

-   Instances of the [database tables](ABENDDIC_DATABASE_TABLES.html) and [DDIC database views](ABENDDIC_DATABASE_VIEWS.html) defined in ABAP Dictionary.
-   Instances of the [CDS-managed DDIC views](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) defined in ABAP CDS.
-   **Note** Accessing a CDS-managed DDIC view is [obsolete](ABENCDS_ACCESS_OBSOLETE.html). CDS DDIC-based views (obsolete) have been replaced by CDS view entities.

-   Calls of the following ABAP-managed database procedures or database functions:

-   [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html) and [AMDP functions](ABENAMDP_FUNCTION_GLOSRY.html) that do not implement any [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) or [CDS scalar functions](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) can be called from other AMDP methods.
-   The AMDP table function of a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) can be called from other AMDP methods.
-   The AMDP scalar function of a [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) can be called from other AMDP methods.

-   The [ABAP-specific session variables](ABENHANA_SESSION_VARIABLES.html) can be read using the built-in HANA function `SESSION_CONTEXT`.

-   The management of [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html) and [AMDP functions](ABENAMDP_FUNCTION_GLOSRY.html) is the full responsibility of the AMDP framework. This framework creates these database objects before they are used for the first time in ABAP or updates them as required.
-   AMDP methods are implemented as platform-dependent methods and their implementation is currently restricted to [SQLScript](ABENSQL_SCRIPT_GLOSRY.html) in the SAP HANA database.
-   Data types defined in the ABAP Dictionary and their possible enhancements are not currently known in the actual implementation of AMDP methods. Dictionary types are, however, respected as follows:

-   If possible, AMDP respects the order of fields defined in the ABAP Dictionary, which can differ from the order in the database. To do this, a view is generated internally. The prerequisite for this feature is that the AMDP framework detects that a database object defined in the ABAP Dictionary is being accessed.
-   If the AMDP option [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) is used when accessing a client-independent DDIC database table, a condition is added to the generated view that filters the result for the client ID contained in the HANA session variable `CDS_CLIENT`.
-   The typing of the formal parameters of an AMDP method using dictionary types is one way of creating appropriate variables. Here, a predefined mapping takes place between ABAP types and database types.
-   Any [null values](ABENNULL_VALUE_GLOSRY.html) passed from formal parameters to ABAP data objects are transformed to their type-dependent initial values. There is no special handling, however, within the implementation of an AMDP method.
-   The interface parameters of AMDP methods can be tabular. Internal ABAP tables can be bound to all categories of parameters. In the case of [input/output parameters](ABENINPUT_OUTPUT_PARAMETER_GLOSRY.html) declared using `CHANGING`, the parameters are transformed internally to a pair of input and output parameters declared using `IN` and `OUT`.
-   The [AMDP macro](ABENAMDP_MACRO_GLOSRY.html)\\ [`$ABAP.type`](ABENAMDP_ABAP_TYPES.html) can be used to specify ABAP Dictionary types and other ABAP types in the implementation of an [AMDP method](ABENAMDP_METHOD_GLOSRY.html). The AMDP framework transforms this information into the respective HANA types.

-   AMDP does not support the following ABAP Dictionary and ABAP CDS functions:

-   AMDP [does not support implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html). Either the ABAP-specific session variables `CDS_CLIENT` or `CLIENT` can be accessed or the client ID can be passed explicitly using an input parameter. The client handling of an AMDP method is defined by specific [`AMDP OPTIONS ... CLIENT ...`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html).
-   AMDP does not support [table buffering](ABENTABLE_BUFFERING_GLOSRY.html).
-   AMDP does not support [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html). CDS access control only applies when using ABAP SQL to access a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) implemented in AMDP.
-   AMDP cannot handle the [enhancement category of DDIC structures](ABENDDIC_STRUCTURES_ENH_CAT.html).
-   AMDP does not support the [logging of database tables](ABENDDIC_DATABASE_TABLES_PROTOCOL.html).

-   AMDP accesses the database objects of [CDS entities](ABENCDS_ENTITY_GLOSRY.html) directly and ignores any other properties of CDS entities:

-   When a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) is accessed, its database-specific instance must be known. This applies in particular to CDS DDIC-based views (obsolete) with input parameters.
-   **Note** Accessing a CDS-managed DDIC view (obsolete) is [obsolete](ABENCDS_ACCESS_OBSOLETE.html).
-   When an instance of a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) is accessed, its AMDP table function must be called.
-   When an instance of a [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) is accessed, its AMDP table function must be called.
-   AMDP cannot handle [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and [CDS roles](ABENCDS_ROLE_GLOSRY.html).
-   Care must be taken that all session variables used in a [CDS view entity](ABENCDS_SESSION_VARIABLE_V2.html) or a [CDS DDIC-based view (obsolete)](ABENCDS_SESSION_VARIABLE_V1.html) have the correct value. This applies in particular to the session variable `client`, to which the HANA session variable `CDS_CLIENT` is assigned and not `CLIENT`. In [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html), an AMDP method must be [client-safe](ABENCLIENT_SAFE_GLOSRY.html).

-   The ABAP-managed database objects accessed in an AMDP method must be declared with [`USING`](ABAPMETHOD_BY_DB_PROC.html) in the implementation of the method. This guarantees that the AMDP methods are recorded in the where-used list.
-   DDL statements are not allowed in AMDP methods. Furthermore, no statements are allowed that are only possible in database tables and not in views, such as `TRUNCATE TABLE` or `LOCK TABLE`.
-   AMDP supports ABAP-managed [service connections](ABENSERVICE_CONNECTION_GLOSRY.html) but does not support [secondary connections](ABENSECONDARY_DB_CONNECTION_GLOSRY.html).
-   The [SQLScript](ABENSQL_SCRIPT_GLOSRY.html) used to implement AMDP methods can use the input parameters of the AMDP as operands but does not support dynamic tokens.
-   In the implementation of [AMDP methods](ABENAMDP_METHOD_GLOSRY.html), the [AMDP macro](ABENAMDP_MACRO_GLOSRY.html)\\ [`$ABAP.schema`](ABENAMDP_LOGICAL_DB_SCHEMAS.html) can be used to specify [logical schemas](ABENLOGICAL_SCHEMA_GLOSRY.html) that are transformed to the names of actual [database schemas](ABENDATABASE_SCHEMA_GLOSRY.html) by the AMDP framework. This enables, for example, simple access to [HDI objects](ABENHDI_OBJECT_GLOSRY.html) that use an [ABAP-managed HDI container](ABENAMHC_GLOSRY.html) as an interface to the [Change and Transport System](ABENCTS_GLOSRY.html).
-   AMDP respects the [dependency rules](ABENDEPENDENCY_RULE_GLOSRY.html) defined for a database.
-   AMDP respects [data aging](ABENDATA_AGING_GLOSRY.html) by default.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_managed\_db\_objects.html abenabap\_managed\_db\_objects\_access.html