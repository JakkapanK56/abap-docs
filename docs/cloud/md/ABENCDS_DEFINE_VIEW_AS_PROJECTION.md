---
title: "ABENCDS_DEFINE_VIEW_AS_PROJECTION"
description: |
  ABENCDS_DEFINE_VIEW_AS_PROJECTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DEFINE_VIEW_AS_PROJECTION.htm"
abapFile: "ABENCDS_DEFINE_VIEW_AS_PROJECTION.html"
keywords: ["if", "case", "data", "types", "ABENCDS", "DEFINE", "VIEW", "PROJECTION"]
---

``[[`@entity_annot1`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  [[`@entity_annot2`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  ...  [[`@proj_view_annot1`](ABENCDS_PROJ_VIEW_ANNOTATIONS.html)]\  [[`@proj_view_annot2`](ABENCDS_PROJ_VIEW_ANNOTATIONS.html)]\  ...  DEFINE [ROOT] VIEW ENTITY projection_view     [[`PROVIDER CONTRACT TRANSACTIONAL_QUERY`](ABENCDS_PV_PROVIDER_CONTRACT.html)]\      AS PROJECTION ON cds_entity [AS alias_name]\     [[`aspect binding`](ABENCDS_BIND_ASPECT.html)]\     [[`association1`](ABENCDS_PROJ_VIEW_ASSOCIATION.html)\ [`association2`](ABENCDS_PROJ_VIEW_ASSOCIATION.html) ...]\     [[`redefined_assoc1`](ABENCDS_PROJ_VIEW_REDEFINED_ASSOC.html)\ [`redefined_assoc2`](ABENCDS_PROJ_VIEW_ASSOCIATION.html) ...]\        \{ [`projection_list`](ABENCDS_PROJ_VIEW_ELEMENT_LIST.html) \}     [[`WHERE`](ABENCDS_PROJ_VIEW_COND_EXPR.html) cds_cond]``

[1. `... ROOT`](#ABAP_ADDITION_1@3@)

[2. `... AS alias_name`](#ABAP_ADDITION_2@3@)

Defines a [CDS transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html) with the name `projection_view` in [CDS DDL](ABENCDS_DDL_GLOSRY.html). A CDS projection view is a direct projection of an underlying [CDS entity](ABENCDS_ENTITY_GLOSRY.html)\\ `cds_entity` (called [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html)) and exposes a subset of the elements of the projected entity, which are defined in the projection list [`projection_list`](ABENCDS_PROJ_VIEW_ELEMENT_LIST.html).

The projected entity `cds_entity` can be either a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), a [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html), or a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). No other CDS entities or data sources are allowed as projected entity. Path expressions are not allowed for specifying the projected entity. One CDS entity can be used as basis for multiple CDS projection views.

The name of the CDS projection view `projection_view` is defined after the `DEFINE VIEW ENTITY` statement. The usual rules for ABAP Dictionary views apply to this name and it is not case-sensitive (it is transformed internally into uppercase letters). It can have a maximum of 30 characters and is in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP. The name of the DDL source and of the CDS entity must be identical.

A CDS transactional query that uses the addition [`PROVIDER CONTRACT TRANSACTIONAL_QUERY`](ABENCDS_PV_PROVIDER_CONTRACT.html) must be part of a [RAP business object](ABENRAP_BO_GLOSRY.html). That means that the view must either be a root entity itself, or it must be part of a composition tree and reach a root entity via a composition.

The following CDS transactional query `DEMO_SALES_PV_BUPA` is a projection of the existing CDS view `DEMO_SALES_CDS_BUPA`. The result set contains only rows where the last name of the business partner starts with *P*.

The following CDS transactional query `DEMO_SALES_PV_SO_I_SL` is a projection of the existing CDS view `DEMO_SALES_CDS_SO_I_SL`. It exposes a subset of the elements of the projected entity as well as an association.

A provider contract is not specified, since the provider contract is specified only once in the root entity of a CDS composition tree and all child entities automatically inherit this provider contract. In this case, the root entity is `DEMO_SALES_PV_SO` and it specifies the business object as transactional query.

The keyword `ROOT` specifies that the projection view is the [root entity](ABENROOT_ENTITY_GLOSRY.html) of a [composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html). The projection view must always reflect the position of the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html) in the composition tree: if the projected entity is a [root entity](ABENROOT_ENTITY_GLOSRY.html), the projection view must be a root as well. If the projected entity is not a root, the projection view cannot be a root. In this case, the projected entity must contain a [to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html).

**Note** If a CDS projection view is defined as transactional query using the addition [*PROVIDER CONTRACT TRANSACTIONAL\_QUERY*](ABENCDS_PV_PROVIDER_CONTRACT.html), then the view must either be a root entity itself, or it must be part of a composition tree and reach a root entity via an association.

Defines the name `alias_name` as [alias name](ABENALIAS_GLOSRY.html) of the projected entity. The alias name can have a maximum of 30 characters. If no name is defined explicitly using `AS`, then the original name of the data source is used.

-   Header annotations specified before the statement `DEFINE VIEW ENTITY` are not inherited from the projected entity. It is possible, but not mandatory, to specify [entity annotations](ABENCDS_F1_ENTITY_ANNOTATIONS.html)\\ `@entity_annot` or [projection view annotations](ABENCDS_PROJ_VIEW_ANNOTATIONS.html)\\ `@proj_view_annot` as header annotations.
-   The [provider contract](ABENCDS_PV_PROVIDER_CONTRACT.html) specifies the scenario in which the projection view is used. It is recommended that a provider contract is always specified. Otherwise, no runtime-specific syntax checks are applied. See the [topic about provider contracts](ABENCDS_PV_PROVIDER_CONTRACT.html) for further details.
-   It is possible to add new, local, read-only associations `association1, association2` to a projection view after the view definition with `DEFINE VIEW ENTITY AS PROJECTION ON`. The same rules apply as to [associations in CDS view entities](ABENCDS_ASSOCIATION_V2.html). The main difference is that read-only associations in projection views can only be exposed but they cannot be used in [path expressions](ABENCDS_PATH_EXPRESSION_V2.html) to expose elements from new associations. Details on new local associations in CDS projection views can be found in topic [`CDS DDL - projection_view, ASSOCIATION`](ABENCDS_PROJ_VIEW_ASSOCIATION.html).
-   The projection list [`projection_list`](ABENCDS_PROJ_VIEW_ELEMENT_LIST.html) can consist of elements of the projected entity, path expressions, exposed associations, and [virtual elements](ABENCDS_VIRTUAL_ELEMENT_GLOSRY.html).
-   Optionally, the number of rows included in the result set can be further restricted by the addition [`WHERE`](ABENCDS_PROJ_VIEW_COND_EXPR.html).

-   [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) defined for a CDS transactional query must be defined symmetrically to the [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) for the projected entity. All behavior of the access control of the projected entity must be inherited.
-   For an overview of all possible data sources of all available CDS entities, see [Data Source Matrix](ABENCDS_DATA_SOURCE_MATRIX.html).

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'Projection View for BuPa'\\ndefine root view entity DEMO\_SALES\_PV\_BUPA\\nprovider contract transactional\_query\\n as projection on\\n DEMO\_SALES\_CDS\_BUPA\\n \\{\\n key id as BusinessPartnerID,\\n given\_name as GivenName,\\n middle\_name as MiddleName,\\n family\_name as FamilyName\\n \\}\\n where $projection.familyname like 'P%'\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'Projection View SO Item Schedule Line'\\n@Metadata.allowExtensions: true\\ndefine view entity DEMO\_SALES\_PV\_SO\_I\_SL\\n as projection on\\n DEMO\_SALES\_CDS\_SO\_I\_SL\\n \\{\\n key schedule\_line\_key as ScheduleLineKey,\\n parent\_key as SalesOrderItemKey,\\n \_SalesOrderItem : redirected to parent DEMO\_SALES\_PV\_SO\_I\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_pv\_transactional\_query.html