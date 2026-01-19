---
title: "The preceding sections"
description: |
  The following rules for accessing ABAP-managed database objects are based on these two points. ABAP-managed database objects should be accessed exclusively via the ABAP SQL Interface(ABENABAP_SQL_INTERFACE_GLOSRY.html). This can be done from within AS ABAP in ABAP programs, or from external consum
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDATABASE_ACCESS_RECOMM.htm"
abapFile: "ABENDATABASE_ACCESS_RECOMM.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "catch", "method", "data", "types", "ABENDATABASE", "ACCESS", "RECOMM"]
---

The preceding sections

The following rules for accessing ABAP-managed database objects are based on these two points.

ABAP-managed database objects should be accessed exclusively via the [ABAP SQL Interface](ABENABAP_SQL_INTERFACE_GLOSRY.html). This can be done from within AS ABAP in ABAP programs, or from external consumers outside AS ABAP via the [SQL service](ABENABAP_SQL_SERVICES_GLOSRY.html) protocol.

The way in which instances of ABAP-managed database objects are managed is the sole responsibility of AS ABAP. The actual implementation can change in incompatible ways when the release is upgraded. When using [non-ABAP managed Native SQL](ABENABAP_MANAGED_DB_OBJECTS_NSQL.html) to access objects, the same restrictions apply as when using [ABAP-managed Native SQL](ABENABAP_MANAGED_DB_OBJECTS_NSQL.html) (see below) and there is no intermediate layer in the form of a [Native SQL interface](ABENNATIVE_SQL_INTERFACE_GLOSRY.html) that could catch any changes. For example, it is not even possible to guarantee the names of the ABAP-managed database objects, such as [CDS-managed DDIC views (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html), [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html), or [AMDP functions](ABENAMDP_FUNCTION_GLOSRY.html). Accesses, such as using a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) as a data source of a [SAP HANA view](ABENHANA_VIEW_GLOSRY.html) or calling an [AMDP function](ABENAMDP_FUNCTION_GLOSRY.html) in a non-ABAP managed database procedure can become invalid at any time. Furthermore, the [ABAP-specific session variables](ABENHANA_SESSION_VARIABLES_ABEXA.html) in the SAP HANA database, which can modify the way ABAP-managed database objects work, are not set and where-used lists using ABAP methods are not possible. If [data aging](ABENDATA_AGING_GLOSRY.html) is to be respected, this has to be programmed.

In exceptional cases, applications can bypass this basic rule if they can accept the lack of technical support provided by the AS ABAP infrastructure when ABAP-managed database objects are accessed from outside AS ABAP and errors occur as a result. Applications are themselves responsible for avoiding errors like this and removing any errors that do occur:

Within the database, ABAP-managed database objects can only be accessed from other ABAP-managed database objects in AS ABAP. ABAP programs should use [ABAP SQL](ABENABAP_MANAGED_DB_OBJECTS_ASQL.html) as the primary method for accessing ABAP-managed database objects. [AMDP](ABENABAP_MANAGED_DB_OBJECTS_AMDP.html) should only be used when ABAP SQL is not sufficient. And [ABAP-managed Native SQL](ABENABAP_MANAGED_DB_OBJECTS_NSQL.html) should itself only be used when AMDP is not sufficient. Because of the basic rule database objects must not be accessed by [non-ABAP managed Native SQL](ABENABAP_MANAGED_DB_OBJECTS_NSQL.html).

For access to ABAP-managed database objects from outside AS ABAP, the [SQL service](ABENABAP_SQL_SERVICES_GLOSRY.html) protocol should be used. With the SQL service, remote access to the database of AS ABAP is performed through the [ABAP SQL Interface](ABENABAP_SQL_INTERFACE_GLOSRY.html), and (almost) all important ABAP SQL features are supported.

The SQL service protocol is the primary method for accessing ABAP-managed database objects from outside AS ABAP. With the SQL service, remote access to the database of AS ABAP is performed through the [ABAP SQL Interface](ABENABAP_SQL_INTERFACE_GLOSRY.html), and (almost) all important ABAP SQL features are supported. It supports all functional and semantic properties of ABAP-managed database objects. Any internal changes made to ABAP-managed database objects are handled by the [ABAP SQL interface](ABENABAP_SQL_INTERFACE_GLOSRY.html).

[ABAP SQL](ABENABAP_MANAGED_DB_OBJECTS_ASQL.html) is the primary method for accessing ABAP-managed database objects from within AS ABAP. Only ABAP SQL supports all functional and semantic properties of ABAP-managed database objects. Any internal changes made to ABAP-managed database objects are handled by the [ABAP SQL interface](ABENABAP_SQL_INTERFACE_GLOSRY.html) and are transparent for the ABAP program.

Unlike Native SQL, [AMDP](ABENABAP_MANAGED_DB_OBJECTS_AMDP.html) is a high-order wrapper of database-specific SQL. If the scope of ABAP SQL is not sufficient, the first option is to try AMDP for access to ABAP-managed database objects. This mainly applies to database procedure calls not supported in ABAP SQL, but also to wrappers of SQL elements that do not yet exist in ABAP SQL and which do not have an adequate alternative, such as the use of non-supported built-in functions.

In principle, AMDP should only be used as intended:

The use of AMDP lifts or weakens some [Native SQL](ABENABAP_MANAGED_DB_OBJECTS_NSQL.html) restrictions, but the functional and semantic properties of ABAP-managed database objects are not supported in the same way as in ABAP SQL. Regarding client handling, only in [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html), an AMDP method must be [client-safe](ABENCLIENT_SAFE_GLOSRY.html), which is not the case but recommended in [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html).

Most of the following rules for Native SQL apply also to the implementation of AMDP methods, particularly to DML writes.

There is no benefit in moving SQL statements to AMDP methods, if they can also be formulated in ABAP SQL. See the [executable example](ABENAMDP_VS_ABAP_SQL_CS_ABEXA.html).

[ABAP-managed Native SQL](ABENABAP_MANAGED_DB_OBJECTS_NSQL.html) ([ADBC](ABENADBC.html), [`EXEC SQL`](ABENNATIVESQL.html)) is subject to most of the same restrictions as [non-ABAP-managed Native SQL](ABENABAP_MANAGED_DB_OBJECTS_NSQL.html). The field order defined in the ABAP Dictionary is just as unknown as the semantic properties. [Mappings](ABENNATIVE_SQL_TYPE_MAPPING.html) between ABAP types and database types are only possible for certain types. There is no [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) and the table buffer is always bypassed. The current instances of [CDS entities](ABENCDS_ENTITY_GLOSRY.html) must be known to the database, such as a CDS view with input parameters created as a SQL view or database function. Incompatible changes are also a possibility. [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) is bypassed. Access to objects using the [Native SQL interface](ABENNATIVE_SQL_INTERFACE_GLOSRY.html) offers some benefits over non-ABAP-managed Native SQL, such as the availability of environment information in session variables (on HANA only and non-modifiable) or the fact that [data aging](ABENDATA_AGING_GLOSRY.html) is respected. Despite this, this method should only be used if AMDP methods are not sufficient. The following rules should be followed in this case:

The various types of access to ABAP-managed database objects can also occur in mixed forms from a technical perspective. This means that one or more applications can use [ABAP SQL](ABENABAP_MANAGED_DB_OBJECTS_ASQL.html), [AMDP](ABENABAP_MANAGED_DB_OBJECTS_AMDP.html), or [Native SQL](ABENABAP_MANAGED_DB_OBJECTS_NSQL.html) to access the same database object. There is a risk here that mixing ABAP SQL with AMDP and Native SQL to access objects can produce errors, since Native SQL expects ABAP-specific behavior that is only guaranteed when using ABAP SQL. Examples:

For this reason, care should be taken to preserve the semantics of the ABAP SQL statements when using AMDP and Native SQL to access ABAP-managed data objects that can also be accessed by ABAP SQL.

In mixed access cases, all options in the implementation of AMDP methods or Native SQL should be exploited only to the extent that they do not endanger the consistency of an ABAP-managed data model.

-   show an [overview of ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECTS_OVIEW.html)
-   summarize [how ABAP-managed database objects are accessed](ABENABAP_MANAGED_DB_OBJECTS_ACCESS.html).

-   Applications delivered by SAP must be secured reliably against errors. If necessary, the prerequisites for accessing ABAP-managed database objects from outside AS ABAP must be described in SAP Notes.
-   Partners and customers should only access ABAP-managed database objects from outside AS ABAP when this is allowed by SAP and when the associated prerequisites are known and can be met.

-   Calls of [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) from ABAP or other AMDP methods.
-   Access to [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) using ABAP CDS and ABAP SQL.
-   If possible, no calls from Native SQL

-   Only [DQL](ABENDQL_GLOSRY.html) read statements should be used.

-   These read statements should not depend on any other properties of the ABAP-managed database objects apart from their names and the names of components. It should be noted here that, when database objects of [CDS entities](ABENCDS_ENTITY_GLOSRY.html) are accessed, even the name cannot be guaranteed
-   [Mappings](ABENNATIVE_SQL_TYPE_MAPPING.html) between ABAP types and database types are only possible for certain types. In all other cases, unexpected results or errors can occur. This applies in particular to platform-dependent truncating or padding of values.
-   The field order is undefined and is not stable. `SELECT *`, for example, should not be used to access objects.
-   It is probable that an ABAP-managed database object is replaced by a different type of database object, such as a database table by a view.
-   If necessary, the ABAP-specific properties that are respected automatically in ABAP SQL, such as client handling or special type conversions, must be programmed explicitly when using Native SQL.

-   [DML](ABENDML_GLOSRY.html) write statements, such as `INSERT`, `UPDATE` or, `DELETE` can cause problems and should be avoided. Alongside the points for reads above, the following should be noted:

-   There are no ABAP-specific type conversions and [null values](ABENNULL_VALUE_GLOSRY.html) are not avoided, which can cause data inconsistencies and problems when accessing objects in ABAP programs.
-   Native SQL writes are not registered by [buffer synchronization](ABENBUFFER_SYNCHRO.html) in the [table buffer](ABENBUFFER_SYNCHRO.html), which means they are not detected in ABAP SQL.
-   In certain phases in system delivery or in upgrades, ABAP-managed database objects that allow writes can be replaced temporarily by database objects that do not allow writes. Hence, these objects would produce errors when accessed.

-   ABAP-managed database objects should never be accessed using [DDL](ABENDDL_GLOSRY.html). It is technically possible to use DDL, however changes to the definition of ABAP-managed databases are the sole responsibility of frameworks such as the ABAP Dictionary or AMDP. In the worst case, the direct use of DDL for ABAP-managed database objects can make AS ABAP unusable.

-   As is the case when using non-ABAP managed Native SQL, applications that use ABAP-managed Native SQL are responsible for any aspects not supported by the Native SQL interface. One example is when a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) is accessed whose [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) uses the [CDS session variable](ABENCDS_SESSION_VARIABLE_V1.html)\\ `client`. This is represented in the database object by the HANA session variable `CDS_CLIENT`, which is not set by the Native SQL interface. The application itself must provide the required value or must not perform such an access.
-   It might be possible to handle any future incompatible changes made to ABAP-managed database objects using the Native SQL interface, but this cannot be guaranteed.

-   Different conversion rules when mapping non-matching types
-   Different handling of null values
-   Differently set environment information

-   When data is read using AMDP or Native SQL, the type conversions for non-matching types must be respected and the values may need to be modified to make them ABAP-specific.
-   When data is written using AMDP and Native SQL, it must not be modified in ways that make subsequent ABAP SQL statements behave differently than when changes are made using ABAP SQL.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_managed\_db\_objects.html