---
title: "ABENCDS_ASSOCIATION_V2"
description: |
  ABENCDS_ASSOCIATION_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ASSOCIATION_V2.htm"
abapFile: "ABENCDS_ASSOCIATION_V2.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENCDS", "ASSOCIATION"]
---

[CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) offer an advanced modelling capability for CDS data models. A CDS association defines a relationship between two [CDS entities](ABENCDS_ENTITY_GLOSRY.html). A CDS association can be used to include fields from the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) in the current view, and/or it can be published for usage in other CDS entities or in ABAP SQL.

As soon as an association is used in a [path expression](ABENPATH_EXPRESSION_GLOSRY.html), for example, to specify a field from the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) in the element list of a view, it is internally transformed into a [join](ABENJOIN_GLOSRY.html). So technically, a CDS association is instantiated as join. The benefit of a CDS association compared to a join is that it can be reused in different positions and that it renders the task of coding complex [join expressions](ABENJOIN_EXPRESSION_GLOSRY.html) superfluous. Further details about the use cases of CDS associations and by which join type they are represented are explained in the topic below about CDS associations and joins.

[Compositions](ABENCDS_COMPOSITION_GLOSRY.html) are special kinds of CDS associations. A CDS composition consists of a [CDS to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) and a [CDS to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) and it defines an existential dependency of the composition child to its composition parent. For example, a sales order item (composition child) always belongs to a sales order header (composition parent).

For an overview of all possible association targets of all CDS entities that can define associations, see [Data Source Matrix](ABENCDS_DATA_SOURCE_MATRIX.html).

The CDS view entity `DEMO_SALES_CDS_SO_I_VE` shown below returns information about sales order items. It defines three associations:

In the `SELECT` list, `_SalesOrder` and `_ScheduleLine` are exposed. They can be accessed externally, but the current view does not use any data from them and no join is generated. From the association `_Material`, the field `material` is included in the view. This means that this association is instantiated as join. Since it is not published, it cannot be used in other CDS view entities or in ABAP SQL.

For further details, see the following sections:

-   A to-parent association `_SalesOrder`: A sales order item must always belong to a sales order, so there is an existential dependency.
-   A to-child association `_ScheduleLine`: each sales order item can have one or more schedule lines, so the CDS view entity that contains information about schedule lines is defined as composition child.
-   A simple association `_Material`: this association can be used to enrich a sales order item with information about the material.

-   [Details on CDS Associations: Use Cases and Join Types](ABENCDS_ASSOC_JOIN_V2.html)
-   [Association](ABENCDS_SIMPLE_ASSOCIATION_V2.html)
-   [Composition](ABENCDS_COMPOSITION_V2.html)
-   [To-parent Association](ABENCDS_TO_PARENT_ASSOC_V2.html)

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_SALES\_CDS\_SO\_I\_VE\\n as select from\\n demo\_sales\_so\_i\\n association to parent DEMO\_SALES\_CDS\_SO\_VE as \_SalesOrder\\n on $projection.parent\_key = \_SalesOrder.so\_key\\n composition of exact one to many DEMO\_SALES\_CDS\_SO\_I\_SL\_VE \\n as \_ScheduleLine\\n \\n \\n association of many to one DEMO\_SALES\_CDS\_MATERIAL\_VE \\n as \_Material\\n on $projection.material = \_Material.material\\n \\{\\n key so\_item\_key,\\n parent\_key,\\n posnr,\\n material,\\n @Semantics.amount.currencyCode: 'currency'\\n gross\_amount,\\n currency,\\n @Semantics.quantity.unitOfMeasure: 'unit'\\n quantity,\\n unit,\\n \_SalesOrder,\\n \_ScheduleLine,\\n \_Material.material\_type as Type\\n \\}\\n\\n \\n \\n \\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html