---
title: "ABENCDS_PV_PROVIDER_CONTRACT"
description: |
  ABENCDS_PV_PROVIDER_CONTRACT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_PV_PROVIDER_CONTRACT.htm"
abapFile: "ABENCDS_PV_PROVIDER_CONTRACT.html"
keywords: ["do", "if", "data", "ABENCDS", "PROVIDER", "CONTRACT"]
---

`... PROVIDER CONTRACT \{ TRANSACTIONAL_QUERY                        | TRANSACTIONAL_INTERFACE                        | ANALYTICAL_QUERY \} ...`\\ 
  `|\ \{\ \} ...`

[1. `... PROVIDER CONTRACT`](#ABAP_ALTERNATIVE_1@2@)

[2. `... \{\ \}`](#ABAP_ALTERNATIVE_2@2@)

A [CDS provider contract](ABENCDS_PROVIDER_CONTRACT_GLOSRY.html) specifies the scenario in which a CDS projection view is used. The scenario determines in which runtime a CDS projection view is executed and which features are available. It is recommended that the provider contract is always specified to ensure that the appropriate, runtime-specific syntax checks are applied.

It is also possible, but not recommended, to leave out the provider contract. Projection views without provider contract are handled similarly to transactional projection views, but there are some minor differences in the syntax checks applied.

[1. `... TRANSACTIONAL_QUERY`](#ABAP_ADDITION_1@3@)

[2. `... TRANSACTIONAL_INTERFACE`](#ABAP_ADDITION_2@3@)

[3. `... ANALYTICAL_QUERY`](#ABAP_ADDITION_3@3@)

Currently, the following provider contracts are available:

[Child entities](ABENCHILD_ENTITY_GLOSRY.html) within a [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) inherit their parents' provider contract and the specification of a provider contract for a child entity is not allowed. As soon as a projection view contains a [to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) or a [redirection](ABENCDS_PV_ASSOC_REDIRECTED.html) to a parent entity, a provider contract must not be set.

Further provider contracts are planned to be released in the near future.

Specifies a CDS projection view as [transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html). Transactional queries are intended for modelling the projection layer of a [RAP business object](ABENRAP_BO_GLOSRY.html). A transactional projection view must always be part of a business object. That means it must either be a [root entity](ABENROOT_ENTITY_GLOSRY.html) itself, or it must be part of a composition tree that contains a root entity.

The feature set focuses on specializing the [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html) of the underlying business object.

The runtime for transactional queries is mainly the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html), but also the [RAP transactional engine](ABENRAP_TRANSAC_ENGINE_GLOSRY.html).

The following CDS projection view defines the provider contract `TRANSACTIONAL_QUERY`.

Its child entity derives the provider contract from the parent entity. It does not specify a separate provider contract:

Specifies a [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html). CDS transactional interfaces serve as stable public interface layer in a CDS data model. They are typically used in the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html) to provide the basis for a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html). CDS transactional interfaces have a restricted feature set. They only support projecting elements and associations from the projected entity. It is recommended that [release contracts](ABENRELEASE_CONTRACT_GLOSRY.html)\\ [C1](ABENC1_CONTRACT_GLOSRY.html) and, optionally, also [C0](ABENC1_CONTRACT_GLOSRY.html) are added.

The following CDS transactional interface is based on the CDS view entity `DEMO_CDS_PURCH_DOC_M`. The to-child association is redirected to the CDS transactional interface of the child entity. Both parent and child entity are release for system-internal use (C1 Contract).

The following CDS transactional interface represents the child entity:

[CDS analytical projection views](ABENCDS_ANALYTICAL_PV_GLOSRY.html) are intended for modelling analytical queries within a CDS data model. An analytical projection view must always be part of an analytical object and the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html) must be an [analytical cube view](ABENCDS_ANALYTICAL_CUBE_GLOSRY.html) or an [analytical dimension view](ABENCDS_ANAL_DIM_VIEW_GLOSRY.html). The feature set is restricted to the capabilities of the runtime of the analytical engine. The runtime for analytical queries are analytical engines, such as [ABAP Analytical Engine](ABENABAP_AE_GLOSRY.html) or Online Analytical Processing (OLAP).

See also: [CDS Projection View, Analytical Queries](ABENCDS_ANALYTICAL_QUERY_APV.html)

The following CDS projection view defines the provider contract `ANALYTICAL_QUERY`.

It is possible, but not recommended, to leave out the provider contract. The default provider contract, if no provider contract is set explicitly, is `TRANSACTIONAL_QUERY`. The same features are available as for transactional queries and a projection view without provider contract can be used in the same scenarios. However, there are some minor differences in the syntax checks applied. The differences are listed in topic [CDS projection view, no contract](ABENCDS_PV_NO_CONTRACT.html).

-   `TRANSACTIONAL_QUERY`
-   `TRANSACTIONAL_INTERFACE`
-   `ANALYTICAL_QUERY`

@EndUserText.label: 'CDS projection view, REDEFINED ASSOC'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine root view entity DEMO\_CDS\_PV\_PARENT\\n provider contract transactional\_query\\n as projection on DEMO\_CDS\_VIEW\_PARENT\\n\\n redefine association \_child\\n redirected to composition child DEMO\_CDS\_PV\_CHILD\\n\\n\\{\\n key Id,\\n Int1,\\n /\* Associations \*/\\n \_child.Int1 as field\_exposure\\n \\}\\n @EndUserText.label: 'CDS projection view, REDEFINED ASSOC'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_PV\_CHILD\\n as projection on DEMO\_CDS\_VIEW\_CHILD\\n\\n redefine association \_to\_parent \\n redirected to parent DEMO\_CDS\_PV\_PARENT\\n\\n\\{\\n key Id,\\n Int1,\\n /\* Associations \*/\\n \_to\_parent\\n\\}\\n @EndUserText.label: 'CDS transactional interface'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine root view entity DEMO\_CDS\_TRANS\_INTERFACE\_ROOT\\n provider contract transactional\_interface\\n as projection on DEMO\_CDS\_PURCH\_DOC\_M\\n\\{\\n key PurchaseDocument,\\n Description,\\n Status,\\n Priority,\\n /\* Associations \*/\\n \_PurchaseDocumentItem: \\n redirected to DEMO\_CDS\_TRANS\_INTERFACE\_CHILD\\n\\}\\n @EndUserText.label: 'CDS transactional interface'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_TRANS\_INTERFACE\_CHILD\\n provider contract transactional\_interface\\n as projection on DEMO\_CDS\_PURCH\_DOC\_I\_M\\n\\{\\n key PurchaseDocumentItem,\\n key PurchaseDocument,\\n Description,\\n Vendor,\\n /\* Associations \*/\\n \_PurchaseDocument : redirected to DEMO\_CDS\_TRANS\_INTERFACE\_ROOT\\n\\}\\n @EndUserText.label: 'CDS projection view, analytical query'\\n@AccessControl.authorizationCheck: #NOT\_ALLOWED\\ndefine transient view entity DEMO\_ANALYTICAL\_QUERY\\n provider contract analytical\_query\\n with parameters\\n p\_targetCurrency : abap.cuky\\n as projection on DEMO\_CDS\_CUBE\_VIEW\\n\\{\\n\\n //ROWS\\n @AnalyticsDetails.query.axis: #FREE\\n so\_key as SalesOrderKey,\\n\\n @AnalyticsDetails.query.axis: #ROWS\\n lifecycle\_status as LifecycleStatus,\\n\\n //COLUMNS\\n @AnalyticsDetails.query.axis: #COLUMNS\\n quantity\_sum as QuantitySum,\\n\\n uom\_sum as UnitOfQuantity,\\n\\n @ObjectModel.text.element: \['CurrencyDescription'\]\\n currency\_sum as CurrencyOfAmount,\\n \_Currency.\_Text.CurrencyName as CurrencyDescription : localized,\\n\\n //typed literal\\n @Aggregation.default: #FORMULA\\n abap.decfloat34'0.05' as Discount,\\n\\n\\n //Formula to define a calculated quantity\\n @Aggregation.default: #FORMULA\\n @Semantics.quantity.unitOfMeasure: 'AmPerQuanUnit'\\n curr\_to\_decfloat\_amount( amount\_sum ) /\\n $projection.QuantitySum as AmountPerQuantity,\\n\\n //virtual element to define a calculated unit\\n virtual AmPerQuanUnit : dd\_cds\_calculated\_unit,\\n\\n virtual targetCurrency : abap.cuky,\\n\\n //parameter used in currency conversion\\n @Aggregation.default: #FORMULA\\n @Semantics.amount.currencyCode: 'targetCurrency'\\n currency\_conversion(\\n amount => curr\_to\_decfloat\_amount( amount\_sum ),\\n source\_currency => currency\_sum,\\n target\_currency => $parameters.p\_targetCurrency,\\n exchange\_rate\_date => created\_on\\n ) as convertedAmount\\n\\n\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_pv\_transactional\_query.html