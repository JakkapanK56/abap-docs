---
title: "ABENCDS_PATH_EXPR_APV"
description: |
  ABENCDS_PATH_EXPR_APV - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_PATH_EXPR_APV.htm"
abapFile: "ABENCDS_PATH_EXPR_APV.html"
keywords: ["select", "if", "types", "ABENCDS", "PATH", "EXPR", "APV"]
---

``... [source.]_assoc1[[`parameters`](ABENCDS_SELECT_PARAMETERS_V2.html)][[`filter`](ABENCDS_PV_ASSOC_MODIFIED.html)] ...``

A [path expression](ABENPATH_EXPRESSION_GLOSRY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) is a sequence of CDS associations separated by periods (.) whose names are specified using `assoc1, assoc2,` and so on.

In analytical projection views, path expressions are only supported in the following scenarios:

Fields included via path expressions can be texts, display attributes, or texts belonging to display attributes. In an [analytical cube view](ABENCDS_ANALYTICAL_CUBE_GLOSRY.html), such fields can be text or foreign key associations. In an [analytical dimension view](ABENCDS_ANAL_DIM_VIEW_GLOSRY.html), these fields can be text associations.

The following CDS analytical projection view `DEMO_ANALYTICAL_QUERY` defines an analytical query. It is based on the cube view `DEMO_CDS_CUBE_VIEW`. It contains a path expression to a localized text element `CurrencyDescription`.

-   Language dependencies implemented using the keyword [`LOCALIZED`](ABENCDS_LOCALIZED.html).
-   Temporal dependencies implemented in the following format:
-   `[to one:date_from <= $parameter.key_date && date_to >= $parameter.key_date]`
-   **Note**\\ `key_date` can be a [parameter](ABENCDS_F1_PARAM.html), a [session variable](ABENCDS_SESSION_VARIABLE_V2.html), or a [literal](ABENCDS_LITERAL_V2.html). It must be typed with [`DATS`](ABENDDIC_BUILTIN_TYPES.html) or [`DATN`](ABENDDIC_BUILTIN_TYPES.html). It must be annotated with `@Semantics.businessDate`.

@EndUserText.label: 'CDS projection view, analytical query'\\n@AccessControl.authorizationCheck: #NOT\_ALLOWED\\ndefine transient view entity DEMO\_ANALYTICAL\_QUERY\\n provider contract analytical\_query\\n with parameters\\n p\_targetCurrency : abap.cuky\\n as projection on DEMO\_CDS\_CUBE\_VIEW\\n\\{\\n\\n //ROWS\\n @AnalyticsDetails.query.axis: #FREE\\n so\_key as SalesOrderKey,\\n\\n @AnalyticsDetails.query.axis: #ROWS\\n lifecycle\_status as LifecycleStatus,\\n\\n //COLUMNS\\n @AnalyticsDetails.query.axis: #COLUMNS\\n quantity\_sum as QuantitySum,\\n\\n uom\_sum as UnitOfQuantity,\\n\\n @ObjectModel.text.element: \['CurrencyDescription'\]\\n currency\_sum as CurrencyOfAmount,\\n \_Currency.\_Text.CurrencyName as CurrencyDescription : localized,\\n\\n //typed literal\\n @Aggregation.default: #FORMULA\\n abap.decfloat34'0.05' as Discount,\\n\\n\\n //Formula to define a calculated quantity\\n @Aggregation.default: #FORMULA\\n @Semantics.quantity.unitOfMeasure: 'AmPerQuanUnit'\\n curr\_to\_decfloat\_amount( amount\_sum ) /\\n $projection.QuantitySum as AmountPerQuantity,\\n\\n //virtual element to define a calculated unit\\n virtual AmPerQuanUnit : dd\_cds\_calculated\_unit,\\n\\n virtual targetCurrency : abap.cuky,\\n\\n //parameter used in currency conversion\\n @Aggregation.default: #FORMULA\\n @Semantics.amount.currencyCode: 'targetCurrency'\\n currency\_conversion(\\n amount => curr\_to\_decfloat\_amount( amount\_sum ),\\n source\_currency => currency\_sum,\\n target\_currency => $parameters.p\_targetCurrency,\\n exchange\_rate\_date => created\_on\\n ) as convertedAmount\\n\\n\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_analytical\_query\_apv.html abencds\_element\_list\_apv.html abencds\_element\_apv.html