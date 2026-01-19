---
title: "ABENCDS_DEFINE_VIEW_AS_ANALYTICAL"
description: |
  ABENCDS_DEFINE_VIEW_AS_ANALYTICAL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DEFINE_VIEW_AS_ANALYTICAL.htm"
abapFile: "ABENCDS_DEFINE_VIEW_AS_ANALYTICAL.html"
keywords: ["if", "data", "ABENCDS", "DEFINE", "VIEW", "ANALYTICAL"]
---

``[[`@entity_annot1`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  [[`@entity_annot2`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  ...  \ [`@AccessControl.authorizationCheck: #NOT_ALLOWED`](ABENCDS_PROJ_VIEW_ANNOTATIONS.html)\  [[`@proj_view_annot1`](ABENCDS_PROJ_VIEW_ANNOTATIONS.html)]\  ...  DEFINE TRANSIENT VIEW ENTITY analytical_query     [`PROVIDER CONTRACT ANALYTICAL_QUERY`](ABENCDS_PV_PROVIDER_CONTRACT.html)\     [[`parameter_list`](ABENCDS_PARAMETER_LIST_APV.html)]\      AS PROJECTION ON cds_entity [AS alias_name]\     [[`aspect binding`](ABENCDS_BIND_ASPECT.html)]\        \{ [`element_list`](ABENCDS_ELEMENT_LIST_APV.html) \}     [[`WHERE`](ABENCDS_WHERE_APV.html) cds_cond]``

Defines a [CDS analytical projection view](ABENCDS_ANALYTICAL_PV_GLOSRY.html) with the name `analytical_query` in [CDS DDL](ABENCDS_DDL_GLOSRY.html). A CDS analytical projection view defines an analytical query in its [`element_list`](ABENCDS_ELEMENT_LIST_APV.html).

The [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html)\\ `cds_entity` can be an [analytical cube view](ABENCDS_ANALYTICAL_CUBE_GLOSRY.html) or an [analytical dimension view](ABENCDS_ANAL_DIM_VIEW_GLOSRY.html). One base view can serve as a basis for multiple analytical projection views.

The name of the CDS analytical projection view `analytical_query` is defined after the `DEFINE TRANSIENT VIEW ENTITY` statement. It must comply with the [naming rules for ABAP CDS](ABENCDS_GENERAL_SYNTAX_RULES.html) with one specialization: It can have a maximum of 28 characters (instead of 30 characters), because the analytical engine automatically adds the prefix *2C* during further processing.

The following CDS analytical projection view `DEMO_ANALYTICAL_QUERY` defines an analytical query. It is based on the cube view `DEMO_CDS_CUBE_VIEW`.

-   The header annotation [`@AccessControl.authorizationCheck`](ABENCDS_PROJ_VIEW_ANNOTATIONS.html) must be specified with the value `#NOT_ALLOWED`. Analytical queries cannot be accessed using [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and therefore, no [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) can be specified. Instead, the CDS access control of the projected entity is applied.
-   The projected entity must be one of the following:

-   An [analytical cube view](ABENCDS_ANALYTICAL_CUBE_GLOSRY.html), annotated with the framework-specific annotation [`@Analytics.dataCategory: #CUBE`](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).
-   An [analytical dimension view](ABENCDS_ANAL_DIM_VIEW_GLOSRY.html) annotated with the framework-specific annotation [`@Analytics.dataCategory: #DIMENSION`](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).

-   Header annotations specified before the statement `DEFINE TRANSIENT VIEW ENTITY` are not inherited from the projected entity. It is possible, but not mandatory, to specify [entity annotations](ABENCDS_F1_ENTITY_ANNOTATIONS.html)\\ `@entity_annot` or [projection view annotations](ABENCDS_PROJ_VIEW_ANNOTATIONS.html)\\ `@proj_view_annot` as header annotations.
-   The mandatory keyword `TRANSIENT` defines a CDS analytical projection view as transient CDS view entity. That means that only a runtime object on the ABAP server is generated, but no [SQL view](ABENSQL_VIEW_GLOSRY.html) is generated on the HANA database.
-   The [provider contract](ABENCDS_PV_PROVIDER_CONTRACT.html) must be specified with the value `ANALYTICAL_QUERY` to ensure that the appropriate features and syntax checks for analytical queries are applied.
-   [`parameter_list`](ABENCDS_PARAMETER_LIST_APV.html) can be used to assign [input parameters](ABENINPUT_PARAMETER_GLOSRY.html) to the projection view. These input parameters can be specified in operand positions of the view and can be assigned actual parameters when the view is used.
-   The optional addition `AS` defines the name `alias_name` as [alias name](ABENALIAS_GLOSRY.html) of the projected entity. The alias name can have a maximum of 30 characters. If no name is defined explicitly using `AS`, then the original name of the data source is used.
-   The element list [`element_list`](ABENCDS_ELEMENT_LIST_APV.html) defines the components of the analytical query.
-   Optionally, the number of rows included in the result set can be further restricted by the addition [`WHERE`](ABENCDS_WHERE_APV.html).

-   Defining new associations in the projection layer is not possible.
-   Exposing associations is not allowed either.

@EndUserText.label: 'CDS projection view, analytical query'\\n@AccessControl.authorizationCheck: #NOT\_ALLOWED\\ndefine transient view entity DEMO\_ANALYTICAL\_QUERY\\n provider contract analytical\_query\\n with parameters\\n p\_targetCurrency : abap.cuky\\n as projection on DEMO\_CDS\_CUBE\_VIEW\\n\\{\\n\\n //ROWS\\n @AnalyticsDetails.query.axis: #FREE\\n so\_key as SalesOrderKey,\\n\\n @AnalyticsDetails.query.axis: #ROWS\\n lifecycle\_status as LifecycleStatus,\\n\\n //COLUMNS\\n @AnalyticsDetails.query.axis: #COLUMNS\\n quantity\_sum as QuantitySum,\\n\\n uom\_sum as UnitOfQuantity,\\n\\n @ObjectModel.text.element: \['CurrencyDescription'\]\\n currency\_sum as CurrencyOfAmount,\\n \_Currency.\_Text.CurrencyName as CurrencyDescription : localized,\\n\\n //typed literal\\n @Aggregation.default: #FORMULA\\n abap.decfloat34'0.05' as Discount,\\n\\n\\n //Formula to define a calculated quantity\\n @Aggregation.default: #FORMULA\\n @Semantics.quantity.unitOfMeasure: 'AmPerQuanUnit'\\n curr\_to\_decfloat\_amount( amount\_sum ) /\\n $projection.QuantitySum as AmountPerQuantity,\\n\\n //virtual element to define a calculated unit\\n virtual AmPerQuanUnit : dd\_cds\_calculated\_unit,\\n\\n virtual targetCurrency : abap.cuky,\\n\\n //parameter used in currency conversion\\n @Aggregation.default: #FORMULA\\n @Semantics.amount.currencyCode: 'targetCurrency'\\n currency\_conversion(\\n amount => curr\_to\_decfloat\_amount( amount\_sum ),\\n source\_currency => currency\_sum,\\n target\_currency => $parameters.p\_targetCurrency,\\n exchange\_rate\_date => created\_on\\n ) as convertedAmount\\n\\n\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_analytical\_query\_apv.html