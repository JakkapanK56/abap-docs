---
title: "Syntax rules"
description: |
  Possible association targets: Exposure in the projection list Usage Client dependency For an overview of all possible association targets of all CDS entities that can define associations, see Data Source Matrix(ABENCDS_DATA_SOURCE_MATRIX.html). The following CDS projection view `DEMO_SALES_PV_SO_A
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_PROJ_VIEW_ASSOCIATION.htm"
abapFile: "ABENCDS_PROJ_VIEW_ASSOCIATION.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "PROJ", "VIEW", "ASSOCIATION"]
---

``... ASSOCIATION [[`cardinality`](ABENCDS_CARDINALITY_V2.html)]\ [TO] target [AS _assoc] ON [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html)\                  [ WITH DEFAULT FILTER [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html)\ ] ...``

Defines a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) with the name `_assoc` in a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html). Possible association targets and rules are the same as for [associations in CDS view entities](ABENCDS_ASSOCIATION_V2.html), but there are further restrictions. The main difference is that the newly defined associations can only be exposed, but they cannot be used in [path expressions](ABENPATH_EXPRESSION_GLOSRY.html) to include elements from the [association target](ABENASSOCIATION_TARGET_GLOSRY.html). The purpose of defining new associations is to model new relationships which can be interpreted by consumer frameworks, such as the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html). However, no additional [joins](ABENJOIN_GLOSRY.html) should be generated on CDS level by denormalizing fields from new association targets into the CDS projection view. Only regular associations can be defined in a CDS projection view. Specialized associations of type [to-child](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) or [to-parent](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) are not supported.

All elements included in the `ON` clause of an exposed [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) must also be included in the projection list of the CDS projection view.

Syntax rules

Possible association targets:

Exposure in the projection list

Usage

Client dependency

For an overview of all possible association targets of all CDS entities that can define associations, see [Data Source Matrix](ABENCDS_DATA_SOURCE_MATRIX.html).

The following CDS projection view `DEMO_SALES_PV_SO_ASSOC` is a projection of the CDS view entity `DEMO_SALES_CDS_SO`. It defines associations to a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html) and a CDS DDIC-based view (obsolete). These associations are exposed in the element list, but no fields are picked from the associations via a path expression.

-   New associations in CDS projection views are defined in exactly the same way as associations in CDS view entities. The same rules apply to the [cardinality specification](ABENCDS_CARDINALITY_V2.html), `AS _assoc`, `WITH DEFAULT FILTER`, and the `ON` condition. See topic [`CDS DDL - CDS View Entity, ASSOCIATION`](ABENCDS_SIMPLE_ASSOCIATION_V2.html).

-   Same as for CDS view entities, see topic [CDS View Entity, `ASSOCIATION`](ABENCDS_SIMPLE_ASSOCIATION_V2.html) or [Data Source Matrix](ABENCDS_DATA_SOURCE_MATRIX.html).

-   The newly defined association can be exposed, but exposure is not mandatory, as it can also be done in [CDS view entity extensions](ABENCDS_VIEW_ENTITY_EXTEND_GLOSRY.html) later on.
-   An alias name `alias` can be assigned to the exposed association.
-   It is possible to enhance a locally defined association with an additional filter when exposing it in the projection list. Two kinds of attributes can be added in square brackets as filter: [cardinality](ABENCARDINALITY_GLOSRY.html) and [filter condition](ABENFILTER_CONDITION_GLOSRY.html). It is not possible to specify [join type](ABENJOIN_TYPE_GLOSRY.html) characteristics in the filter. The details are described in topic [CDS DDL - CDS Projection View, filter](ABENCDS_PV_ASSOC_MODIFIED.html).
-   When exposing a CDS association with a filter, an alternative element name `alias` using `AS` is mandatory.
-   Here's an example: `_toAssoc[to exact one:field='1'] as filteredAssoc`
-   A CDS association can be exposed multiple times with various alternative element names. This makes it possible to use different filter conditions.
-   An exposed CDS association is part of the projection list. It is not, however, part of the result set, nor a component of the type defined in ABAP with respect to the CDS projection view.

-   No fields must be selected from locally defined associations. [Path expressions](ABENPATH_EXPRESSION_GLOSRY.html) are not supported.

-   A CDS projection view that is based on a client-independent CDS view must not contain an association to a client-dependent target view. Client dependency must not be changed by introducing a new association. This also applies to [CDS DDIC-based view extensions](ABENCDS_VIEW_EXTEND_GLOSRY.html) later on, as this may lead to incompatibilities.

-   Redirection of a newly defined association with the keyword [`REDIRECTED TO`](ABENCDS_PROJ_VIEW_EXPOSE_ASSOC.html) is not possible.
-   To-child or to-parent associations cannot be defined.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'Projection View SO'\\ndefine root view entity DEMO\_SALES\_PV\_SO\_ASSOC\\n provider contract transactional\_query\\n as projection on DEMO\_SALES\_CDS\_SO\\n\\n association of many to one DEMO\_SALES\_SO\_CUSTOM\_ANALYTICS \\n as \_SalesOrderCustomData \\n on \_SalesOrderCustomData.SalesOrderKey = $projection.SalesOrderKey\\n\\n association of many to one DEMO\_SALES\_CDS\_VIEW\_ANALYTICS \\n as \_SalesOrderAnalyticData \\n on \_SalesOrderAnalyticData.SalesOrderKey = $projection.SalesOrderKey\\n\\{\\n key so\_key as SalesOrderKey,\\n id as SalesOrderExternalId,\\n lifecycle\_status as LifecycleStatus,\\n buyer\_id as BuyerId,\\n \_Buyer.family\_name as BuyerDescription,\\n created\_by as CreatedBy,\\n last\_changed\_by as LastChangedBy,\\n \_SalesOrderAnalyticData,\\n \_SalesOrderCustomData\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_pv\_transactional\_query.html