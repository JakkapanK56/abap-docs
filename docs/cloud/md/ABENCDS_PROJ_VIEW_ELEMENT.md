---
title: "ABENCDS_PROJ_VIEW_ELEMENT"
description: |
  ABENCDS_PROJ_VIEW_ELEMENT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_PROJ_VIEW_ELEMENT.htm"
abapFile: "ABENCDS_PROJ_VIEW_ELEMENT.html"
keywords: ["do", "if", "data", "ABENCDS", "PROJ", "VIEW", "ELEMENT"]
---

``... [[`@element_annot1`](ABENCDS_ELEMENT_ANNOTATIONS_V2.html)]\      [[`@element_annot2`](ABENCDS_ELEMENT_ANNOTATIONS_V2.html)]\      ...      \{[KEY]    \{proj_element      [AS alias]\}\              |\ \{[`expose_assoc`](ABENCDS_PROJ_VIEW_EXPOSE_ASSOC.html)      [AS alias]\}\              |\ \{[`path_expr`](ABENCDS_PROJ_VIEW_PATH_EXPR.html).element [AS alias][: [`LOCALIZED`](ABENCDS_LOCALIZED.html)]\}\              |\ \{[`cast_expr`](ABENCDS_CAST_EXPRESSION_V2.html)          AS alias\}\}\     |\{[VIRTUAL  elem_name : [`typing`](ABENCDS_TYPING.html)]\}``

[1. `... KEY`](#ABAP_ADDITION_1@3@)

[2. `... AS alias`](#ABAP_ADDITION_2@3@)

[3. `... LOCALIZED`](#ABAP_ADDITION_3@3@)

[4. `... VIRTUAL`](#ABAP_ADDITION_4@3@)

Defines which elements of the projected entity are part of the CDS projection view. Only elements from the projected entity can be specified as projected element.

The following CDS projection view `DEMO_SALES_PV_SO_I_LIST` is a projection of the CDS view `DEMO_SALES_CDS_SO_I`. It contains details about a sales order item.

The keyword `KEY` is used to define the current element as a key element of the [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html). A CDS projection view must define exactly the same key elements in the same order as key elements as the underlying projected entity.

**Caution** The key elements of a CDS entity do not define unique lines in its result with regard to the key. An application or framework accessing a CDS entity must expect duplicate entries for the key fields in the result set. If the lines of a result set should be unique in respect to a set of key elements, it is the task of the application or framework that provides the CDS entity to define them appropriately and to document the view accordingly.

Defines an alternative element name for the projected element. The alternative element name replaces the actual name of the element from the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). The view field is created under the alternative element name in the CDS projection view. Accordingly, the alternative element name must comply with the general syntax rules for [names](ABENCDS_GENERAL_SYNTAX_RULES.html).

Defines a [CDS localized field](ABENCDS_LOCALIZED_FIELD_GLOSRY.html) in the projection list of a CDS projection view. Localized fields are text fields for which translations in different languages are maintained. The keyword `LOCALIZED` causes automatic and implicit filtering to the current system language. For further details, see the topic [CDS DDL - `LOCALIZED`](ABENCDS_LOCALIZED.html).

Defines a [virtual element](ABENCDS_VIRTUAL_ELEMENT_GLOSRY.html) in the [projection list](ABENCDS_PROJ_VIEW_ELEMENT_LIST.html) of a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html). Virtual elements are read-only elements of a CDS projection view which are not part of the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). For further details, see topic [CDS DDL - `VIRTUAL`](ABENCDS_PROJ_VIEW_VIRTUAL_ELEMENT.html).

-   The rules for [propagation of element annotations in CDS projection views](ABENCDS_ELEMENT_ANNOTATIONS_PV.html) apply.
-   `proj_element` exposes an element from the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). `AS` can be used to define an alternative element name `alias`.
-   **Note** In transactional projection views, an element from the projected entity can be exposed multiple times with different alias names.
-   [`expose_assoc`](ABENCDS_PROJ_VIEW_EXPOSE_ASSOC.html) exposes a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html), a [to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html), or a [CDS to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) from the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). Exposed associations can be redirected to a new target when the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is also projected. The keyword `REDIRECTED TO` is introduced in topic [CDS DDL - `CDS Projection View, expose_assoc`](ABENCDS_PROJ_VIEW_EXPOSE_ASSOC.html).
-   All elements included in the `ON` clause of an exposed [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) must also be included in the projection list of the CDS projection view.
-   `[path_expr](ABENCDS_PROJ_VIEW_PATH_EXPR.html).element` exposes an element of an association target of the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). If no alternative element name `alias` is defined, the element name is defined by the name of the element named by the path expression. The keyword [`LOCALIZED`](ABENCDS_LOCALIZED.html) can be used to define [CDS localized fields](ABENCDS_LOCALIZED_FIELD_GLOSRY.html). All associations that are part of the path expression must be filtered to 1. For details, see the topic about [path expressions in CDS projection views](ABENCDS_PROJ_VIEW_PATH_EXPR.html).
-   Cast expressions [`cast_expr`](ABENCDS_CAST_EXPRESSION_V2.html) are available in a reduced way:

-   The target data type can be specified as [CDS user-defined type](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html) or as [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html). Specifying a built-in ABAP Dictionary data type is not possible.
-   The addition `PRESERVING TYPE` is mandatory and must be used.
-   That means that type conversions are not supported in CDS projection views and cast expressions can only be used to derive semantic information.

@EndUserText.label: 'Projection View Sales Order Item List'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_SALES\_PV\_SO\_I\_LIST\\nprovider contract transactional\_query\\n as projection on\\n DEMO\_SALES\_CDS\_SO\_I\\n \\{\\n key so\_item\_key as SalesOrderItemKey,\\n \_SalesOrder.id as SalesOrderId,\\n posnr as PositionNumber,\\n @ObjectModel.text.element: \['MaterialName'\]\\n material as MaterialId,\\n \_Material.\_Text.material\_name as MaterialName : localized,\\n @Semantics.amount.currencyCode: 'Currency'\\n gross\_amount as GrossAmount,\\n currency as Currency,\\n @Semantics.quantity.unitOfMeasure: 'Unit'\\n quantity as Quantity,\\n unit as Unit\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_pv\_transactional\_query.html abencds\_proj\_view\_element\_list.html