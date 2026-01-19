---
title: "ABENCDS_PROJ_VIEW_VIRTUAL_ELEMENT"
description: |
  ABENCDS_PROJ_VIEW_VIRTUAL_ELEMENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_PROJ_VIEW_VIRTUAL_ELEMENT.htm"
abapFile: "ABENCDS_PROJ_VIEW_VIRTUAL_ELEMENT.html"
keywords: ["do", "if", "case", "class", "data", "ABENCDS", "PROJ", "VIEW", "VIRTUAL", "ELEMENT"]
---

``... VIRTUAL elem_name : [`typing`](ABENCDS_TYPING.html)``

Defines a [virtual element](ABENCDS_VIRTUAL_ELEMENT_GLOSRY.html) in the [projection list](ABENCDS_PROJ_VIEW_ELEMENT_LIST.html) of a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html). Virtual elements are read-only elements of a CDS projection view which are not part of the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). Reading the virtual elements of a projection view with ABAP SQL delivers initial values. In order to fill and analyze the virtual elements of projection views, special frameworks like the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html) have to be involved.

In [RAP](ABENARAP_GLOSRY.html), for example, a virtual element can be connected to an ABAP class that implements a special virtual element interface by using the [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation [`ObjectModel.virtualElementCalculatedBy`](ABENCDS_F1_ELEMENT_ANNOTATION.html). In that case the value of the virtual element is calculated during runtime by the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html). For more information, see the development guide for the ABAP RESTful Application Programming Model, section [Using Virtual Elements in CDS Projection Views](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/319380e0cef94051ae9aa292ffadb59a?version=sap_cross_product_abap).

Virtual elements are also supported in CDS projection views that implement data retrieval via an ABAP class using the annotation [`ObjectModel.query.implementedBy`](ABENCDS_F1_ENTITY_ANNOTATIONS.html). This can be useful, for example, in extensibility scenarios. In this case, the ABAP query is evaluated first and the virtual element can use the returned values.

The projection view `DEMO_SALES_PV_SO_EXP` is based on the CDS view `DEMO_SALES_CDS_SO`. It contains a virtual element `expiry_date` that is bound to ABAP class `CL_DEMO_SALES_VIRT_ELEM_EXIT` that calculates the expiry date of an item during runtime if the view is accessed by the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html).

The executable example [Calculating a virtual element](ABENCDS_PROJ_VIEW_VIRTEL_ABEXA.html) accesses the CDS projection view shown above and returns the result of the virtual element.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'Exposure of SO Projection View'\\ndefine root view entity DEMO\_SALES\_PV\_SO\_EXP\\n as projection on DEMO\_SALES\_CDS\_SO\\n \\{\\n key so\_key,\\n id,\\n lifecycle\_status as LifecycleStatus,\\n buyer\_id as BuyerId,\\n created\_by,\\n @ObjectModel.virtualElementCalculatedBy:\\n 'ABAP:CL\_DEMO\_SALES\_VIRT\_ELEM\_EXIT'\\n virtual expiry\_date : abap.dats(8),\\n \_Buyer : redirected to DEMO\_SALES\_PV\_BUPA\_EXP\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_pv\_transactional\_query.html abencds\_proj\_view\_element\_list.html abencds\_proj\_view\_element.html