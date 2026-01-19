---
title: "ABENCDS_PV_ASSOC_REDIRECTED"
description: |
  ABENCDS_PV_ASSOC_REDIRECTED - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_PV_ASSOC_REDIRECTED.htm"
abapFile: "ABENCDS_PV_ASSOC_REDIRECTED.html"
keywords: ["if", "data", "ABENCDS", "ASSOC", "REDIRECTED"]
---

`... REDIRECTED TO proj_view    | REDIRECTED TO COMPOSITION CHILD proj_view    | REDIRECTED TO PARENT proj_view`

[1. `... REDIRECTED TO proj_view`](#ABAP_VARIANT_1@1@)

[2. `... REDIRECTED TO COMPOSITION CHILD proj view`](#ABAP_VARIANT_2@1@)

[3. `... REDIRECTED TO PARENT proj view`](#ABAP_VARIANT_3@1@)

Redirects a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html), a [to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html), or a [CDS to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) of the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html) in a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) to a new association target. As a prerequisite, the original association target must also have a CDS projection view. Redirection using the keyword `REDIRECTED TO [...]` means to direct an association to a new association target, which is also a CDS projection view, in this way moving the complete data model to the projection layer.

With redirection, a specialized CDS association can lose its specialization and become a simple CDS association. This means that you can redirect a to-child or a CDS to-parent association with the keyword `REDIRECTED TO` and then it is exposed as a simple CDS association. The other way around is not possible - a simple CDS association cannot be specialized. Thus, you cannot use the addition `REDIRECTED TO COMPOSITION CHILD` or `REDIRECTED TO PARENT` to redirect a simple CDS association.

The projection view `DEMO_SALES_PV_SO` is based on the CDS view `DEMO_SALES_CDS_SO`. It replaces the [association targets](ABENASSOCIATION_TARGET_GLOSRY.html) of the associations with other CDS projection views where required.

The executable example [Exposing Associations](ABENWITH_ASSOCIATIONS_ABEXA.html) accesses the CDS projection view shown above, reads all fields and returns the result.

Redirects a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) exposed in a CDS projection view to a new [association target](ABENASSOCIATION_TARGET_GLOSRY.html).

The following applies to the redirection of a CDS association:

Redirects a to-child association exposed in a CDS projection view to a new [association target](ABENASSOCIATION_TARGET_GLOSRY.html). With the addition `REDIRECTED TO COMPOSITION CHILD`, the special characteristics of a to-child association are kept.

The following applies to the redirection of a CDS to-child association:

Redirects a [to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) in a CDS projection view to a new [association target](ABENASSOCIATION_TARGET_GLOSRY.html). With the addition `REDIRECTED TO PARENT`, the special characteristics of a CDS to-parent association are kept.

The following applies to the redirection of a CDS to-parent association:

-   Can be used to redirect simple CDS associations, to-child or to-parent associations.
-   **Note** When the keyword `REDIRECTED TO` is used on specialized CDS associations (to-child or to-parent associations), they become non-specialized and are handled as CDS associations. To-child and to-parent associations which are projected in this way never define to-child and to-parent associations in the projection view.
-   The target of the redirection `proj_view` must be a projection view based on the original target of the association.
-   The target of the redirection `proj_view` can be the CDS projection view `proj_view` itself only if the projected CDS association is a [self association](ABENSELF_ASSOCIATION_GLOSRY.html).
-   The target of the redirection `REDIRECTED TO` cannot be specified using a [path expression](ABENCDS_PROJ_VIEW_PATH_EXPR.html).
-   The CDS projection view `proj_view` can be used multiple times as the redirection target of the projected CDS associations in the CDS projection view `proj_view`. The following syntax is valid:
-   `_Assoc1: REDIRECTED TO proj_view, _Assoc2: REDIRECTED TO proj_view`

-   The CDS association redirected using the addition `REDIRECTED TO COMPOSITION CHILD` must be a CDS to-child association.
-   The target of the redirection `REDIRECTED TO COMPOSITION CHILD` must be the projection of the original target of the association. Therefore, the target cannot be a root projection view.
-   The target of the redirection `REDIRECTED TO COMPOSITION CHILD` cannot be specified using a [path expression](ABENCDS_PROJ_VIEW_PATH_EXPR.html).
-   The target of `REDIRECTED TO COMPOSITION CHILD` cannot be the CDS projection view `proj_view` itself. A [self association](ABENSELF_ASSOCIATION_GLOSRY.html) is not possible.
-   The redirection target `proj_view` must project exactly one to-parent association to its composition parent. This to-parent association must exist before the to-child association can be projected in the projection view.
-   The redirection target `proj_view` can be used only once in a CDS to-child association and multiple times in CDS associations. This is demonstrated in the following simplified example:

-   This is valid

-   `_Assoc1: REDIRECTED TO COMPOSITION CHILD proj_view, _Assoc2: REDIRECTED TO proj_view`

-   This is not valid

-   `_Assoc1: REDIRECTED TO COMPOSITION CHILD proj_view, _Assoc2: REDIRECTED TO PARENT|\{COMPOSITION CHILD\} proj_view`

-   The CDS association `to_parent_assoc` projected with this syntax must be defined as a CDS to-parent association in the underlying CDS view.
-   The target of the redirection `REDIRECTED TO PARENT` should be the projection of the original target of the to-parent association.
-   The target of the redirection `REDIRECTED TO PARENT` cannot be specified using a [path expression](ABENCDS_PROJ_VIEW_PATH_EXPR.html).
-   The addition `REDIRECTED TO PARENT` can be used no more than once in the definition of a CDS projection view. This means that a CDS projection view can have no more than one parent entity.
-   The redirection target cannot be the CDS projection view `proj_view` itself. A [self association](ABENSELF_ASSOCIATION_GLOSRY.html) is not possible.
-   The redirection target `proj_view` can be used only once in a CDS to-parent association and multiple times in CDS associations. This is demonstrated in the following simplified example:

-   This is valid

-   `_Assoc1: REDIRECTED TO PARENT proj_view, _Assoc2: REDIRECTED TO proj_view`

-   This is not valid

-   `_Assoc1: REDIRECTED TO PARENT proj_view, _Assoc2: REDIRECTED TO PARENT|\{COMPOSITION CHILD\} proj_view`

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'Projection View SO'\\n@Metadata.allowExtensions: true\\ndefine root view entity DEMO\_SALES\_PV\_SO\\nprovider contract transactional\_query\\n as projection on\\n DEMO\_SALES\_CDS\_SO\\n \\{\\n key so\_key as SalesOrderKey,\\n id as SalesOrderExternalId,\\n lifecycle\_status as LifecycleStatus,\\n @ObjectModel.text.element: \['BuyerDescription'\]\\n buyer\_id as BuyerId,\\n \_Buyer.family\_name as BuyerDescription,\\n created\_by as CreatedBy,\\n last\_changed\_by as LastChangedBy,\\n @ObjectModel.virtualElementCalculatedBy:\\n 'ABAP:CL\_DEMO\_SALES\_VIRT\_ELEM\_EXIT'\\n virtual ValidToDate : abap.dats(8),\\n \_Buyer \\n : redirected to DEMO\_SALES\_PV\_BUPA,\\n \_ShipTo as \_ShipToPartner \\n : redirected to DEMO\_SALES\_PV\_BUPA,\\n DEMO\_SALES\_CDS\_SO.ship\_to\_id as ShipToPartner,\\n \_Items \\n : redirected to composition child DEMO\_SALES\_PV\_SO\_I,\\n \_Items\[to many:posnr <= 3\] as \_TopItems \\n : redirected to DEMO\_SALES\_PV\_SO\_I\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_pv\_transactional\_query.html abencds\_proj\_view\_element\_list.html abencds\_proj\_view\_element.html abencds\_proj\_view\_expose\_assoc.html