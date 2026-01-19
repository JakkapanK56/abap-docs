---
title: "ABENCDS_DEFINE_VIEW_ENTITY"
description: |
  ABENCDS_DEFINE_VIEW_ENTITY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_DEFINE_VIEW_ENTITY.htm"
abapFile: "ABENCDS_DEFINE_VIEW_ENTITY.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENCDS", "DEFINE", "VIEW", "ENTITY"]
---

``[[`@entity_annot1`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  [[`@entity_annot2`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  ...  [[`@view_entity_annot1`](ABENCDS_VIEW_ENTITY_ANNO.html)]\  [[`@view_entity_annot2`](ABENCDS_VIEW_ENTITY_ANNO.html)]\  ...  [DEFINE]\ [[`WRITABLE`](ABENCDS_DEFINE_WRTBL_VIEW_V2.html)]\ [[`ROOT`](ABENCDS_DEFINE_ROOT_VIEW_V2.html)] VIEW ENTITY view_entity          [[`parameter_list`](ABENCDS_PARAMETER_LIST_V2.html)]\           AS [`select_statement`](ABENCDS_SELECT_STATEMENT_V2.html)\ [;]...``

[1. `... WRITABLE ...`](#ABAP_ADDITION_1@3@)

[2. `... ROOT ...`](#ABAP_ADDITION_2@3@)

Defines a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html). A CDS view entity is implemented using a [`select_statement`](ABENCDS_SELECT_STATEMENT_V2.html).

The name of the CDS view entity is defined after the `DEFINE VIEW ENTITY` statement. The usual rules for ABAP Dictionary [views](ABENDDIC_VIEWS.html) apply to this name and it is not case-sensitive (it is transformed internally into uppercase letters). It can have a maximum of 30 characters and is in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP. The name of the DDL source and of the CDS entity must be identical.

The CDS view entity can be enriched with [entity annotations](ABENCDS_F1_ENTITY_ANNOTATIONS.html) (these are annotations that can be used in all CDS entities) or with [view entity annotations](ABENCDS_VIEW_ENTITY_ANNO.html) (these are annotations that are only available for CDS view entities). All annotations are optional and a view entity can also be created without any annotation.

[`parameter_list`](ABENCDS_PARAMETER_LIST_V2.html) can be used to assign input parameters to the view. These input parameters can be specified in operand positions of the view and can be assigned actual parameters when the view is used.

The CDS view entity `DEMO_SALES_CDS_BUPA_VE` contains information about a business partner. It selects data from the database table `DEMO_SALES_BUPA`.

The addition [`WRITABLE`](ABENCDS_DEFINE_WRTBL_VIEW_V2.html) is optional. It defines the CDS view entity as [writable](ABENWRITABLE_V2_GLOSRY.html) For further details, see the topic [CDS DDL - CDS View Entity, `WRITABLE`](ABENCDS_DEFINE_WRTBL_VIEW_V2.html).

The addition [`ROOT`](ABENCDS_DEFINE_ROOT_VIEW_V2.html) is optional. It defines the CDS view entity as root entity of a [RAP business object](ABENRAP_BO_GLOSRY.html) in the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html). For further details, see topic [CDS DDL - CDS View Entity, `ROOT`](ABENCDS_DEFINE_ROOT_VIEW_V2.html).

-   [ABAP annotations](ABENCDS_VIEW_ENTITY_ANNO.html) can be used to assign further technical and semantic properties to a view for evaluation by the ABAP runtime framework. [Framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be used to assign further semantic properties to a view that are evaluated by other SAP frameworks.
-   If a [CDS role](ABENCDS_ROLE_GLOSRY.html) is defined for a CDS entity using the CDS-DCL statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html), implicit [access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) applies by default when the CDS entity is accessed using ABAP SQL. CDS access control can be switched off using the value `#NOT_ALLOWED` for the annotation [`@AccessControl.authorizationCheck`](ABENCDS_VIEW_ENTITY_ANNO.html) and using the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) in the [`FROM`](ABAPFROM_CLAUSE.html) clause of an ABAP SQL query.
-   After a CDS view entity has been transported, its name can no longer be changed.
-   The programming of CDS views using the DDL of the Core Data Services is one of the tasks included in the implementation of data models and is not usually the responsibility of regular ABAP application programmers. Once created, CDS views are used in ABAP programs using ABAP SQL read statements and must be stable enough to allow this.
-   Every CDS view entity has its own [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html). The DDL source code of a CDS view entity is edited in a different editor than the [DDLA source code](ABENDDLA_SOURCE_CODE_GLOSRY.html) of an [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html), the [DDLX source code](ABENDDLX_SOURCE_CODE_GLOSRY.html) of a [CDS metadata extension](ABENCDS_METADATA_EXTENSION_GLOSRY.html), and the [DCL source code](ABENDCL_SOURCE_CODE_GLOSRY.html) of a [CDS role](ABENCDS_ROLE_GLOSRY.html). The [ADT](ABENADT_GLOSRY.html) documentation describes how the different types of source code are created.
-   CDS source code can also be displayed in [Repository Browser](ABENREPOSITORY_BROWSER_GLOSRY.html) in [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html).
-   If a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is accessed using an ABAP SQL [`SELECT`](ABAPSELECT.html) statement and the name `view_entity`, the syntax check is performed in [strict mode](ABENABAP_SQL_STRICTMODE_740_SP05.html), which handles the statement more strictly than the regular syntax check.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'SDDL: Interface (BO) View for BuPa'\\ndefine root view entity DEMO\_SALES\_CDS\_BUPA\_VE\\n as select from\\n demo\_sales\_bupa as bupa\\n \\{\\n key id,\\n given\_name,\\n middle\_name,\\n family\_name\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html