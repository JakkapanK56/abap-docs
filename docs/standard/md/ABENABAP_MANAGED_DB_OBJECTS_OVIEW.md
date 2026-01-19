---
title: "ABENABAP_MANAGED_DB_OBJECTS_OVIEW"
description: |
  ABENABAP_MANAGED_DB_OBJECTS_OVIEW - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MANAGED_DB_OBJECTS_OVIEW.htm"
abapFile: "ABENABAP_MANAGED_DB_OBJECTS_OVIEW.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "ABENABAP", "MANAGED", "OBJECTS", "OVIEW"]
---

[ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html) can be the following:

In addition to the database objects themselves, their definitions in the AS ABAP framework cover further properties described using metadata that are not known to the database. The most important of these properties are:

In AS ABAP, the database objects managed by the ABAP Dictionary, ABAP CDS, and AMDP are represented by [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) that have a [package](ABENPACKAGE_GLOSRY.html) interface to the [Change and Transport System (CTS)](ABENCTS_GLOSRY.html). The actual database objects are created and modified using internal DDL statements and the AS ABAP [database interface](ABENDATABASE_INTERFACE_GLOSRY.html).

The ABAP Dictionary, ABAP CDS, and AMDP frameworks, together with the [Change and Transport System (CTS)](ABENCTS_GLOSRY.html), ensure that complete and consistent ABAP-managed database objects are available to be accessed from AS ABAP.

The overview above does not contain any database objects created by AS ABAP on the database for purely technical reasons and which should therefore never be accessed. Examples are database objects in the AMDP framework that are part of the framework itself, unlike AMDP procedures and AMDP functions.

-   An instance of a [transparent table](ABENTRANSPARENT_TABLE_GLOSRY.html) defined in the ABAP Dictionary.

-   The name of the database table on the database matches the name of the table in the ABAP Dictionary.
-   The key fields defined in the ABAP Dictionary are the primary key of the database table on the database.
-   The indexes defined in the ABAP Dictionary are created on the database.
-   The order of the fields in the ABAP Dictionary does not need to match the order and on the database.

-   An instance of a [DDIC database view](ABENDATABASE_VIEW_GLOSRY.html) defined in the ABAP Dictionary.

-   The database object of a DDIC database view is implemented as an [SQL view](ABENSQL_VIEW_GLOSRY.html) using a platform-dependent database statement `CREATE VIEW`, which is itself based on the definition of the DDIC database view in the ABAP Dictionary.
-   The name of the view on the database matches the name of the table in the ABAP Dictionary.
-   The key fields of a DDIC database view defined in the ABAP Dictionary are ignored on the database.

-   An instance of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) defined in ABAP CDS.

-   In [CDS persistent entities](ABENCDS_SQL_ENTITY_GLOSRY.html), such as [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) or [CDS external entities](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html), an identically named [SQL view](ABENSQL_VIEW_GLOSRY.html) is created directly from the definition of the CDS entity.
-   In [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), an additional [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) is created in the ABAP Dictionary whose name is specified in the definition of the CDS view with the annotation `@AbapCatalog.sqlViewName`. The same applies as to DDIC database views, where instances of CDS views with input parameters can also be created as database functions using `CREATE FUNCTION`, depending on the database platform, as is currently the case on SAP HANA databases.

-   Instances of [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html) and [AMDP functions](ABENAMDP_FUNCTION_GLOSRY.html)

-   The AMDP framework copies the source code of [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html) and [AMDP function implementations](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) from [AMDP classes](ABENAMDP_CLASS_GLOSRY.html) to a [database procedure](ABENDATABASE_PROCEDURE_GLOSRY.html) managed by the framework.
-   The name of an AMDP-managed database procedure is `CLASS=>METH`, where `CLASS` is the [AMDP class](ABENAMDP_CLASS_GLOSRY.html) and `METH` is the [AMDP method](ABENAMDP_METHOD_GLOSRY.html).
-   The parameter interface of an AMDP-managed database procedure is generated as a platform-dependent interface from the parameter interface of the [AMDP method](ABENAMDP_METHOD_GLOSRY.html).

-   Instance of the [AMDP functions](ABENAMDP_FUNCTION_GLOSRY.html) of [CDS scalar functions](ABENCDS_SCALAR_FUNCTION_GLOSRY.html)

-   CDS scalar functions are implemented in [AMDP function implementations](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) whose parameter interface is defined by the CDS scalar function.
-   The same applies as to general [AMDP methods](ABENAMDP_METHOD_GLOSRY.html).

-   Instance of the [AMDP functions](ABENAMDP_FUNCTION_GLOSRY.html) of [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html)

-   CDS table functions are implemented in [AMDP function implementations](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) whose parameter interface is defined by the CDS table function.
-   The same applies as to general [AMDP methods](ABENAMDP_METHOD_GLOSRY.html).

-   Instance of a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html)

-   Instances of CDS hierarchies are created as special views on the database, which access a built-in hierarchy function on the database.
-   The name of the view on the database matches the name of the CDS hierarchy.

-   Instances of ABAP-specific session variables

-   The SAP HANA database has special [ABAP-specific session variables](ABENHANA_SESSION_VARIABLES.html) whose content matches the value of specific [ABAP system fields](ABENSYSTEM_FIELD_GLOSRY.html) when accessed from ABAP. Some of these variables can also be modified from ABAP.
-   On other database platforms, these ABAP-specific session variables exist only when CDS views are accessed using [ABAP SQL](ABENABAP_SQL.html).

-   Instances of [dependency rules](ABENDEPENDENCY_RULE_GLOSRY.html) defined in ABAP Dictionary on the SAP HANA database.

-   Use as data types

-   The database tables and DDIC database views in the ABAP Dictionary can be used in the ABAP Dictionary itself and as [structured types](ABENSTRUCTURED_TYPE_GLOSRY.html) in ABAP programs.
-   [CDS entities](ABENCDS_ENTITY_GLOSRY.html) can be used as [structured types](ABENSTRUCTURED_TYPE_GLOSRY.html).

-   In the ABAP Dictionary, the data types of the components of the database tables and views are based on [built-in dictionary types](ABENDDIC_BUILTIN_TYPES.html). These types are an ABAP-specific wrapper of the actual database types and have ABAP-specific properties.
-   Client dependency

-   Database tables and DDIC database views whose first column is a [client column](ABENCLIENT_COLUMN_GLOSRY.html) with the built-in dictionary type [`CLNT`](ABENDDIC_BUILTIN_TYPES.html) are [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html).
-   The annotation [`@ClientHandling.typ`](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) or the obsolete annotation [`@ClientDependent`](ABENCDS_VIEW_CLIENT_HANDLING_OBS.html) define whether CDS views and [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) are client-dependent.

-   Table buffering

-   In ABAP Dictionary, it is possible to define whether and how [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) takes place for database tables and DDIC database views.
-   Table buffering of CDS views is defined by the annotation [`@AbapCatalog.buffering`](ABENCDS_V1_BUFFERING.html).

-   Enhancements

-   An [enhancement category of DDIC structures](ABENDDIC_STRUCTURES_ENH_CAT.html) can be defined in the ABAP Dictionary for database tables.
-   The enhancement of CDS views is defined by the annotation `@AbapCatalog.viewEnhancementCategory`.
-   For [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) and [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html), special extensibility annotations [`@AbapCatalog.extensibility`](ABENCDS_F1_ENTITY_ANNOTATIONS.html) are available.

-   Foreign key dependencies

-   In the ABAP Dictionary, [foreign key dependencies](ABENFOREIGN_KEY_DEPENDENCY_GLOSRY.html) between [foreign key tables](ABENFOREIGN_KEY_TABLE_GLOSRY.html) and [check tables](ABENCHECK_TABLE_GLOSRY.html) can be defined for database tables. [Text tables](ABENTEXT_TABLE_GLOSRY.html) are special foreign key tables that link the lines in check tables with language-specific texts.

-   Logging

-   [Logging](ABENDDIC_DATABASE_TABLES_PROTOCOL.html) can be enabled in the ABAP Dictionary for database tables.

-   Access control

-   [CDS roles](ABENCDS_ROLE_GLOSRY.html) from [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) can be defined for CDS views and [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) and configured using the annotation `@AccessControl.authorizationCheck`.

-   Reference fields

-   For table fields or view fields with the [built-in data types](ABENDDIC_BUILTIN_TYPES.html)\\ `CURR` and `QUAN`, reference fields of the types `CUKY` and `UNIT` must be defined in the ABAP Dictionary.
-   For the elements of CDS views and [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html), the relationships to reference fields are defined using [`@Semantics annotations`](ABENCDS_F1_ELEMENT_ANNOTATION.html).

-   Translatable texts

-   For database tables and DDIC database views, translatable short texts and documentation can be created in the ABAP Dictionary.
-   For CDS views and [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) and their elements, translatable texts are defined using [`@EndUserText`](ABENCDS_ANNOTATIONS_ABAP_TABLES.html) annotations.
-   [AMDP classes](ABENAMDP_CLASS_GLOSRY.html) and [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) are documented in the same way as regular [classes](ABENCLASS_GLOSRY.html) in [ABAP Doc](ABENABAP_DOC_GLOSRY.html) or in classic class documentation.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_managed\_db\_objects.html