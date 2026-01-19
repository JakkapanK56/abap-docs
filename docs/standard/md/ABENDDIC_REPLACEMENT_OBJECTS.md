---
title: "ABENDDIC_REPLACEMENT_OBJECTS"
description: |
  ABENDDIC_REPLACEMENT_OBJECTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_REPLACEMENT_OBJECTS.htm"
abapFile: "ABENDDIC_REPLACEMENT_OBJECTS.html"
keywords: ["select", "update", "do", "if", "case", "data", "types", "ABENDDIC", "REPLACEMENT", "OBJECTS"]
---

A [transparent](ABENTRANSPARENT_TABLE_GLOSRY.html)\\ [DDIC database table](ABENDDIC_DATABASE_TABLES.html) and [DDIC database view](ABENDDIC_DATABASE_VIEWS.html) can be assigned a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) as a replacement object using the name of its [CDS entity](ABENCDS_ENTITY_GLOSRY.html). A prerequisite is that the structure type defined by the CDS view matches the structure of the DDIC database table or DDIC database view as follows:

When accessing a DDIC database table or a DDIC database view with a replacement object assigned, the access is redirected to the replacement object in the following cases:

All other access types are still performed on the DDIC database table or DDIC database view, such as:

When a replacement object is defined for a DDIC database table for a DDIC database view, the system checks whether the specified CDS view meets the prerequisites. If a CDS view used as a replacement object is changed later and the prerequisites are no longer met, a runtime error `DBSQL_REDIRECT_INCONSISTENCY` occurs when an ABAP SQL read is performed on the DDIC database table or on the DDIC database view.

No replacement objects can be defined for [global temporary tables](ABENGLOBAL_TEMPORARY_TABLE_GLOSRY.html). In customer systems, replacement objects can only be defined for user-defined database views and not for DDIC database tables.

If there is a redirection to a CDS view for which one or more [CDS roles](ABENCDS_ROLE_GLOSRY.html) are defined as part of the [CDS access control,](ABENCDS_ACCESS_CONTROL_GLOSRY.html) the associated access conditions are not evaluated when the replacement object is accessed.

[Replacement Object for Database Table](ABENDDIC_REPLACEMENT_OBJECT_ABEXA.html)

-   The number of components must match.
-   It must be possible to assign a component of the CDS view to each component of the DDIC database table or DDIC database view:

-   A [client column](ABENCLIENT_COLUMN_GLOSRY.html) is assigned regardless of its name.
-   For all other components of the DDIC database table, an identically named element of the CDS view must exist.

-   The order of the components in the DDIC database table and the CDS view does not need to match.
-   The technical type properties [built-in data type](ABENDDIC_BUILTIN_TYPES.html), length, and number of decimal places must match for all assigned components.
-   The CDS view must not have any input parameters.
-   A DDIC database view whose maintenance status is *modifiable* cannot have both a replacement object defined and table buffering switched on.

-   When used as a [data source](ABAPSELECT_DATA_SOURCE.html) of a [`SELECT`](ABAPSELECT.html) statement in [ABAP SQL](ABENABAP_SQL_GLOSRY.html). This also applies to [subqueries](ABENSUBQUERY_GLOSRY.html) in any ABAP SQL statement and to the statements [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) and [`FETCH`](ABAPFETCH.html). If [table buffering](ABENSAP_PUFFERING.html) is defined for the DDIC database table or the DDIC database view in question, this table buffer is bypassed.
-   When a [foreign key relationship](ABENFOREIGN_KEY_DEPENDENCY_GLOSRY.html) is checked for Web Dynpros or dynpros.

-   Writes in ABAP SQL:

-   [Write access](ABENABAP_SQL_WRITING.html) statements in ABAP SQL.
-   Use of the addition [`SINGLE FOR UPDATE`](ABAPSELECT_SINGLE.html) in the statement [`SELECT`](ABAPSELECT.html).

-   Use in other database objects, such as:

-   Use as a data source of a view defined on the database.
-   Access from database procedures or database functions.

-   Here it is not important how the database object was created. Native views, as well as the database views defined for [DDIC database views](ABENDATABASE_VIEW_GLOSRY.html) or for [CDS views](ABENCDS_VIEW_GLOSRY.html) also do not access the replacement object. The same applies to [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html) and [AMDP functions](ABENAMDP_FUNCTION_GLOSRY.html) and they do not access the replacement object. Even if ABAP SQL is used to access a DDIC database view, a CDS view, or a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) with DDIC database tables with replacement object as basis tables, the call is not redirected to the replacement object. The replacement object must be accessed directly. For DDIC database views, a new replacement object can be created that is used a replacement, without the need of modifying consumer programs.
-   Access types other than with ABAP SQL, for example:

-   Access using [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html)\\ `FROM`\\ [`DATABASE`](ABAPIMPORT_MEDIUM.html), or [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html)\\ `TO`\\ [`DATABASE`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html).
-   Access using [Native SQL](ABENNATIVE_SQL.html) ([ADBC](ABENADBC_GLOSRY.html), [`EXEC SQL`](ABAPEXEC.html)), and [AMDP](ABENAMDP_GLOSRY.html).

-   Extreme care should be taken when specifying a replacement object for a DDIC database table or a DDIC database view. Incorrect usage can cause inconsistencies.
-   Each ABAP SQL access to a DDIC database table or a DDIC database view with a replacement object produces a syntax check warning that can be suppressed by the pragma `##open_sql_redirect_dml[...]`. The pragma is used to highlight such accesses in the code and indicates the special rules that must be observed for them.
-   Replacement objects are mainly intended for existing aggregate tables. These are DDIC database tables that contain aggregated data from other tables. Instead of aggregating data in an ABAP program and storing it in an aggregate table, which can be exclusively accessed by reads in consumer programs, the aggregation can be performed for every read using the CDS view. This prevents redundant data from being stored. In addition, aggregation on the database can improve performance if it is necessary to read large volumes of data for aggregation in ABAP. Replacement objects allow refactoring of source code without invalidating consumer programs.
-   A prerequisite for assigning a replacement object to an existing DDIC database table or DDIC database view is that the CDS view returns the expected data and that, apart from aggregation, only ABAP SQL reads are performed on the aggregate table.
-   Once a replacement object is defined, no further writes should be performed on an aggregate table. These writes produce a syntax check warning and are scheduled to be disallowed in an upcoming release.
-   Make sure that, apart from the use of ABAP SQL, no other type of access is performed on an aggregate table with a replacement object. In particular, the CDS view that is assigned as replacement object must not access the replaced object, because the content of replaced objects is usually no longer updated.
-   Do not transport table content for which a replacement object is defined.
-   Table buffering should be deactivated for an aggregate table for which a replacement object is defined to prevent buffer invalidations.
-   In customer systems, it may be useful to define a replacement object for a user-defined DDIC database view, if a replacement object was defined for one of their basis tables at SAP. In this case, the replacement object of the view must access the replacement object of the basis table.
-   If a DDIC database table or a DDIC database view, which a replacement object is defined for, is [extended](ABENDDIC_ENHANCEMENTS.html) in a follow-on system, the assigned CDS view must also be extended with [CDS entity extensions](ABENCDS_ENTITY_EXTEND_GLOSRY.html).
-   [DDIC projection views](ABENDDIC_PROJ_VIEW_GLOSRY.html), [DDIC maintenance views](ABENMAINTENANCE_VIEW_GLOSRY.html), and [DDIC help views](ABENHELP_VIEW_GLOSRY.html) are not created on the database. Access to their basis tables is carried out on AS ABAP by using ABAP SQL. If a basis table has a replacement object, reads are redirected to the replacement object.
-   Frameworks that use ABAP SQL, such as [Data Browser](ABENDATA_BROWSER_GLOSRY.html), automatically access replacement objects if these objects are defined for a DDIC database table or a DDIC database view. Frameworks that use Native SQL or AMDP, such as the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html), do not automatically access replacement objects. The developers have to make sure that they access a replacement object rather than the replaced object.
-   If possible, programs that previously directly accessed aggregate tables or views with aggregate tables as base tables should be modified in such a way that they access the CDS views used as replacement objects directly. However, it is not possible to simply replace the data source in the `SELECT` statements concerned, for example because a client-dependent CDS view has no client column and therefore the target objects used no longer match. In addition, when a CDS view is accessed directly, the [CDS roles](ABENCDS_ROLE_GLOSRY.html) defined for this CDS view apply and might restrict the result set.
-   Replacement objects cannot be defined for the following DDIC views:

-   [DDIC Projection Views](ABENDDIC_PROJECTION_VIEWS.html)
-   [DDIC Maintenance Views](ABENDDIC_MAINTENANCE_VIEWS.html)
-   [DDIC Help Views](ABENDDIC_HELP_VIEWS.html)
-   For [CDS views](ABENCDS_VIEW_GLOSRY.html), replacement objects are not supported at all.

abenabap.html abenabap\_dictionary.html