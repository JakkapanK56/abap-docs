---
title: "ABENCDS_ENTITIES"
description: |
  ABENCDS_ENTITIES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ENTITIES.htm"
abapFile: "ABENCDS_ENTITIES.html"
keywords: ["select", "do", "if", "try", "data", "types", "ABENCDS", "ENTITIES"]
---

CDS data definitions are written in the CDS data definition language ([CDS DDL](ABENCDS_DDL_GLOSRY.html)) of [ABAP CDS](ABENABAP_CDS_GLOSRY.html). CDS data definitions can be used to define [CDS entities](ABENCDS_ENTITY_GLOSRY.html), CDS DDL aspects, [CDS functions](ABENCDS_FUNCTION_GLOSRY.html), [CDS types](ABENCDS_TYPE_GLOSRY.html), or [CDS DDIC-based entities](ABENCDS_DDIC_BASED_ENTITY_GLOSRY.html):

A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is a structured object in ABAP CDS. When DDL source code with a CDS data definition is activated, the CDS entity is created in form of a metadata representation in system tables. The CDS entities themselves are not transported. Instead they are created after the transport of a DDL source code when this code is activated in the target system. Each CDS entity is defined in a separate piece of [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html). In the development tools, CDS entities are only visible as CDS definitions in their DDL source code. The ABAP runtime framework and other frameworks access the internal metadata of CDS entities. For example, the ABAP runtime framework recognizes a CDS entity as a [global type](ABENGLOBAL_TYPE_GLOSRY.html) or as a potential data source of ABAP SQL statements. The name of a CDS must be unique accordingly.

A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) represents the following type properties (or signature) as a global data type:

There are [CDS persistent entities](ABENCDS_SQL_ENTITY_GLOSRY.html) and [CDS transient entities](ABENCDS_NON_SQL_ENTITY_GLOSRY.html):

A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) cannot be used as a data type in ABAP Dictionary. It cannot, for example, be used as a type of a substructure, as an include structure, or as the row type of a table type.

The following sections describe the possible CDS objects and the associated DDL statements:

A further section describes the problems that can arise due to [cyclical dependencies](ABENCDS_CYCLE_PROBLEMS.html) between CDS entities.

-   [CDS table entities](ABENCDS_TABLE_ENTITY_GLOSRY.html)
-   [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html)
-   [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html)
-   CDS DDL aspects
-   [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html)
-   [CDS external entities](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html)
-   [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html)
-   [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html)
-   [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html)
-   [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html)
-   [CDS user-defined types](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html)
-   [CDS scalar functions](ABENCDS_SCALAR_FUNCTION_GLOSRY.html)

-   Metadata defined using [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html)
-   A structured type defined using an element list
-   Optional parameter interface defined using input parameters
-   Optional [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) exposed in the element list

-   For [CDS persistent entities](ABENCDS_SQL_ENTITY_GLOSRY.html), an artifact is created on the database and they can be used as data sources in other CDS entities.
-   For CDS transient entities, no artifact is created on the database and they cannot be used in read access in ABAP SQL and ABAP CDS.
-   Both transient and persistent entities can be specified after the `TYPE` addition to reference its structure type and its components in ABAP programs. The components of the structured type are, as usual, specified using the structure component selector `cds_entity-comp`. [CDS persistent entities](ABENCDS_SQL_ENTITY_GLOSRY.html) can be accessed in ABAP SQL read statements or [AMDP](ABENAMDP_GLOSRY.html)

-   [CDS table entities](ABENCDS_TABLE_ENTITIES.html)
-   [CDS view entities](ABENCDS_V2_VIEWS.html)
-   [CDS projection views](ABENCDS_PROJ_VIEWS.html)
-   [CDS aspects](ABENCDS_ASPECTS.html)
-   [CDS table functions](ABENCDS_TABLE_FUNCTIONS.html)
-   [CDS external entities](ABENCDS_EXTERNAL_ENTITY.html)
-   [CDS hierarchies](ABENCDS_HIERARCHIES.html)
-   [CDS custom entities](ABENCDS_CUSTOM_ENTITIES.html)
-   [CDS abstract entities](ABENCDS_ABSTRACT_ENTITIES.html)
-   [CDS DDIC-based entities](ABENCDS_DDIC_ENTITY.html)
-   [ABAP CDS - Type Definitions](ABENCDS_TDL.html)
-   [ABAP CDS - Function Definitions](ABENCDS_FDL.html)

-   CDS entities are in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP.
-   If a CDS role is defined for a [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html) using the [CDS DCL](ABENCDS_DCL_GLOSRY.html) statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html), implicit access control is applied when the CDS entity is accessed in ABAP SQL. Only that data can be accessed that meets the [access conditions](ABENACCESS_CONDITION_GLOSRY.html). Access control can be switched off using the value `#NOT_ALLOWED` for the annotation `@AccessControl.authorizationCheck` and using the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) in the [`FROM`](ABAPFROM_CLAUSE.html) clause of an ABAP SQL query.
-   When a CDS entity is used as a data source in another CDS entity, its [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) defined in [CDS DCL](ABENCDS_DCL_GLOSRY.html) is not considered when the wrapping entity is accessed. CDS access control only applies to the entry level entities accessed by ABAP SQL.
-   Once a piece of DDL source code has been activated, its name or names is/are stable and cannot be modified. The same applies to the DDL source code of a [CDS entity extension](ABENCDS_ENTITY_EXTEND_GLOSRY.html) (and, if available, its [DDIC append view](ABENDDIC_APPEND_VIEW_GLOSRY.html)).
-   The DDL source code of a data definition for a CDS entity is edited in a different editor than the [DDLA source code](ABENDDLA_SOURCE_CODE_GLOSRY.html) of a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html), the [DDLX source code](ABENDDLX_SOURCE_CODE_GLOSRY.html) of a [CDS metadata extension](ABENCDS_METADATA_EXTENSION_GLOSRY.html), and the [DCL source code](ABENDCL_SOURCE_CODE_GLOSRY.html) of a [CDS role](ABENCDS_ROLE_GLOSRY.html) for [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html). The [ADT](ABENADT_GLOSRY.html) documentation describes how the different types of source code are created.
-   A structure type defined using a CDS entity exists alongside the [DDIC structures](ABENDDIC_STRUCTURES.html) in ABAP Dictionary.

abenabap.html abencds.html