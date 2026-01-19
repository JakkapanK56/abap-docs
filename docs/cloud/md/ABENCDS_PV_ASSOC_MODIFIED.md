---
title: "ABENCDS_PV_ASSOC_MODIFIED"
description: |
  ABENCDS_PV_ASSOC_MODIFIED - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_PV_ASSOC_MODIFIED.htm"
abapFile: "ABENCDS_PV_ASSOC_MODIFIED.html"
keywords: ["if", "case", "data", "ABENCDS", "ASSOC", "MODIFIED"]
---

`... [[cardinality:] cds_cond ] ...`

Specifies a filter for an association from the projected entity that is exposed or redefined in a CDS projection view. The filter is specified in square brackets \[ \] when the association is exposed in the projection list. The filter can consist of two attributes, namely cardinality and [filter condition](ABENFILTER_CONDITION_GLOSRY.html).

Example: `_Assoc[exact one to exact one:field1 = 5].`

The rules described in topic [CDS DDL - CDS View Entity, `path_expr`, Cardinality](ABENCDS_PATH_EXPR_CARD_V2.html) apply to the cardinality `cardinality`. Additionally, the following special rules apply:

The following rules apply to the filter condition `cds_cond`:

The following CDS projection view `DEMO_SALES_PV_SO_MODIFY` is a projection of the CDS view `DEMO_SALES_CDS_SO`. It exposes the association `_Items` twice. The first time, all original properties are kept. The second time, the association is modified with a filter. The new alias name `_TopItems` is assigned and by using the keyword `REDIRECTED TO`, the specialization as composition child is lost and the association is projected as a simple CDS association.

The following CDS projection view `DEMO_SALES_PV_SO_PARAM` is a projection of the CDS view `DEMO_SALES_CDS_SO`. It exposes the parameter `my_parameter` that is included in the associated CDS view `DEMO_SALES_CDS_SO_PARAM`. The parameter has to be filled upon exposure.

-   A filter can never consist of a new cardinality alone. It must always be combined with a filter condition.
-   The cardinality of an association might implicitly be changed when a filter is added. If this is the case, and only in this case, the new cardinality can be specified in square brackets.

-   The rules described in topic [CDS DDL - View Entity, `path_expr`, filter](ABENCDS_PATH_EXPRESSION_FILTER_V2.html) apply with one exception: no [join type](ABENJOIN_TYPE_GLOSRY.html) can be specified for a filter of an exposed association in a CDS projection view.
-   The prefix `$projection.` can be used within a filter to access an element from the projection list
-   Example: `_Assoc[to exact one:field1 = $projection.field1] as _alias`

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine root view entity DEMO\_SALES\_PV\_SO\_MODIFY\\n provider contract transactional\_query\\n as projection on\\n DEMO\_SALES\_CDS\_SO\\n \\{\\n key so\_key as SalesOrderKey,\\n id as SalesOrderExternalId,\\n lifecycle\_status as LifecycleStatus,\\n buyer\_id as BuyerId,\\n \_Buyer.family\_name as BuyerDescription,\\n created\_by as CreatedBy,\\n last\_changed\_by as LastChangedBy,\\n \_Items: \\n redirected to composition child DEMO\_SALES\_PV\_MODIFY\_1,\\n \_Items\[many to many:posnr <= 3\] as \_TopItems: \\n redirected to DEMO\_SALES\_PV\_MODIFY\_1\\n \\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'Projection View SO'\\n@Metadata.allowExtensions: true\\ndefine root view entity DEMO\_SALES\_PV\_SO\_PARAM\\n as projection on\\n DEMO\_SALES\_CDS\_SO\\n \\{\\n key so\_key as SalesOrderKey,\\n id as SalesOrderExternalId,\\n lifecycle\_status as LifecycleStatus,\\n buyer\_id as BuyerId,\\n created\_by as CreatedBy,\\n last\_changed\_by as LastChangedBy,\\n \_Param(P\_MyParameter: 'A').my\_parameter \\n as MyParameter\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_pv\_transactional\_query.html abencds\_proj\_view\_element\_list.html abencds\_proj\_view\_element.html abencds\_proj\_view\_expose\_assoc.html