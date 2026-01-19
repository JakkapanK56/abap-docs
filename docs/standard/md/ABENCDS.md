---
title: "ABENCDS"
description: |
  ABENCDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS.htm"
abapFile: "ABENCDS.html"
keywords: ["do", "if", "case", "data", "types", "ABENCDS"]
---

The ABAP Core Data Services (ABAP CDS) are the implementation of the general [CDS](ABENCDS_GLOSRY.html) concept for AS ABAP. ABAP CDS makes it possible to define semantic data models on the [standard database](ABENSTANDARD_DB_GLOSRY.html) of an AS ABAP and support [ABAP RAP](ABENABAP_RAP_GLOSRY.html) using behavior models.

The data models are defined in the form of [CDS objects](ABENCDS_OBJECT_GLOSRY.html) using the [CDS TDL](ABENCDS_TDL_GLOSRY.html), [CDS DDL](ABENCDS_DDL_GLOSRY.html), [CDS SDL](ABENCDS_SDL_GLOSRY.html), and [CDS DCL](ABENCDS_DCL_GLOSRY.html) provided by ABAP CDS in the [syntax of ABAP CDS](ABENCDS_SYNTAX.html) in [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html). [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html) can be used to define metadata for CDS objects.

Data exchange between ABAP CDS data models and data models on different platforms is possible using [CDS schema notation](ABENCDS_SCHEMA_NOTATION_GLOSRY.html) (CSN). CSN is a data format for data exchange between data models and it can be used, for example, to exchange metadata between [ABAP CDS](ABENABAP_CDS_GLOSRY.html) and SAP Analytics Cloud (SAC).

For further details on ABAP Core Data Services, check the [*ABAP Data Models*](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/977a051cea1c4059be2500dcbf2d3d7d?version=sap_cross_product_abap) development guide on SAP Help Portal.

-   The entities of the data models defined in ABAP CDS provide enhanced access functions compared to previous DDIC database tables and DDIC views defined in [ABAP Dictionary](ABENABAP_DICTIONARY.html), thus enabling the optimization of ABAP SQL-based applications. This is particularly the case if an AS ABAP uses an [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), since its in-memory characteristics can be used optimally.
-   [ABAP RAP](ABENABAP_RAP_GLOSRY.html) is based both on the data models defined in ABAP CDS and on [RAP behavior definitions](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html), which model behavior.

-   [CDS Annotations](ABENCDS_ANNOTATIONS.html)
-   A CDS annotation adds metadata to a CDS object. Annotations can be specified in [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html), [SDL source code](ABENSDL_SOURCE_CODE_GLOSRY.html), and [DCL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) and outsourced to [metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html). [Annotation definitions](ABENCDS_ANNO_DEFINITION_GLOSRY.html) can be used to create an annotation itself as a CDS object. An annotation definition prescribes how an annotation is used.
-   [CDS Type Definitions](ABENCDS_TYPES.html)
-   CDS type definitions are created using the [CDS TDL](ABENCDS_TDL_GLOSRY.html). They define data types natively in ABAP CDS. They can be enhanced with [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html) and they can be used for typing, casting, and as operands of expressions in [CDS entities](ABENCDS_ENTITY_GLOSRY.html) and in the [ABAP language](ABENABALA_GLOSRY.html).

-   [CDS Simple Types](ABENCDS_SIMPLE_TYPES.html)
-   [CDS user-defined type](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html) that defines an [elementary data type](ABENELEMENTARY_DATA_TYPE_GLOSRY.html).
-   [CDS Enumerated Types](ABENCDS_ENUMERATION_TYPES.html)
-   [CDS user-defined type](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html) that defines an [enumerated type](ABENENUM_TYPE_GLOSRY.html).

-   [CDS Function Definitions](ABENCDS_FDL.html)
-   [CDS function definitions](ABENCDS_FUNCTION_DEFINITION_GLOSRY.html) are created using the [CDS FDL](ABENCDS_FDL_GLOSRY.html). CDS function definitions allow the definition of user-defined [CDS functions](ABENCDS_FUNCTION_GLOSRY.html) that encapsulate algorithms in reusable code that can be used in operand positions of [CDS entities](ABENCDS_ENTITY_GLOSRY.html). There is currently only one type of CDS function definition:

-   [CDS Scalar Functions](ABENCDS_SCALAR_FUNCTIONS.html)
-   [CDS function definitions](ABENCDS_FUNCTION_DEFINITION_GLOSRY.html) that are implemented in [AMDP functions](ABENAMDP_FUNCTION_GLOSRY.html) and return a scalar result.

-   [CDS Data Definitions](ABENCDS_ENTITIES.html)
-   CDS data definitions are created using the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of the ABAP CDS in [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html). They define the following [CDS entities](ABENCDS_ENTITY_GLOSRY.html) that can be accessed as a data type in ABAP programs and as a data source in reading ABAP SQL statements.

-   [CDS Table Entities](ABENCDS_TABLE_ENTITIES.html)
-   [CDS table entities](ABENCDS_TABLE_ENTITY_GLOSRY.html) that define database tables in ABAP CDS.
-   [CDS View Entities](ABENCDS_V2_VIEWS.html)
-   [CDS entities](ABENCDS_ENTITY_GLOSRY.html) that use SQL to access other data sources and can be enriched semantically using annotations.
-   [CDS Projection Views](ABENCDS_PROJ_VIEWS.html)
-   Special [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) that are based on a another CDS view entity (called [CDS projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html)). CDS projection views adapt a CDS data model for service-specific use cases.
-   [ABAP CDS - Aspects](ABENCDS_ASPECTS.html)
-   [CDS objects](ABENCDS_OBJECT_GLOSRY.html) that can be used to define reusable elements and calculations centrally to be reused across various [CDS entities](ABENCDS_ENTITY_GLOSRY.html).
-   [CDS Table Functions](ABENCDS_TABLE_FUNCTIONS.html)
-   [CDS entities](ABENCDS_ENTITY_GLOSRY.html) that are implemented in [AMDP functions](ABENAMDP_FUNCTION_GLOSRY.html) and return a tabular result set.
-   [CDS External Entities](ABENCDS_EXTERNAL_ENTITY.html)
-   [CDS entities](ABENCDS_ENTITY_GLOSRY.html) that can be used to access data from external database systems within the AS ABAP.
-   [CDS Hierarchies](ABENCDS_HIERARCHIES.html)
-   [CDS entities](ABENCDS_ENTITY_GLOSRY.html) that create an [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) from a data source.
-   [CDS Custom Entities](ABENCDS_CUSTOM_ENTITIES.html)
-   [CDS entities](ABENCDS_ENTITY_GLOSRY.html) for data models whose runtime is implemented manually.
-   [CDS Abstract Entities](ABENCDS_ABSTRACT_ENTITIES.html)
-   [CDS entities](ABENCDS_ENTITY_GLOSRY.html) that describe only type properties and for which no database objects are instantiated.
-   [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEWS.html)
-   [CDS entities](ABENCDS_ENTITY_GLOSRY.html) that use SQL to access other data sources and can be enriched semantically using annotations. These entities are technically based on [dictionary objects](ABENDICTIONARY_OBJECT_GLOSRY.html) and were superseded from release 7.81 on by [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), which are no longer based on dictionary objects.

-   The [CDS DDL](ABENCDS_DDL_GLOSRY.html) in ABAP CDS also contains language elements for enhancing CDS entities.
-   [CDS Tuning Objects](ABENCDS_TUNING_OBJECTS.html)
-   [ABAP tuning objects](ABENABAP_TUNING_OBJECT_GLOSRY.html) for CDS objects to define technical settings and tunings that can be transported separately.
-   [CDS Access Control](ABENCDS_ACCESS_CONTROL.html)
-   [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) is based on [CDS roles](ABENCDS_ROLE_GLOSRY.html) that are defined in [CDS DCL](ABENCDS_DCL_GLOSRY.html) in [DCL source code](ABENDCL_SOURCE_CODE_GLOSRY.html). When [CDS SQL entities](ABENCDS_SQL_ENTITY_GLOSRY.html) that are assigned a CDS role are accessed, additional [access conditions](ABENACCESS_CONDITION_GLOSRY.html) are evaluated by default.
-   [CDS System Entities](ABENCDS_SYSTEM_ENTITIES.html)
-   [CDS system entities](ABENCDS_SYSTEM_ENTITY_GLOSRY.html) are predefined CDS entities for common usage in ABAP CDS and ABAP SQL.

-   [CDS objects](ABENCDS_OBJECT_GLOSRY.html) are transported using the [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html). The actual objects, like the [CDS entities](ABENCDS_ENTITY_GLOSRY.html) that are defined using a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html) in [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html), are created after the transport by being activated in the target system.
-   [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html) can only be programmed in the Eclipse-based [ABAP development tools for Eclipse](ABENADT_GLOSRY.html). There are different editors for the Data Definition Language (DDL), the Service Definition Language (SDL), and the Data Control Language (DCL). The ADT documentation describes how these editors are used.
-   CDS source code can also be displayed in the [Repository Browser](ABENREPOSITORY_BROWSER_GLOSRY.html) of the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html).

abenabap.html