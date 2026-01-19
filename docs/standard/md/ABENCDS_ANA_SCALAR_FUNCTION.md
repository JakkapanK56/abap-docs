---
title: "ABENCDS_ANA_SCALAR_FUNCTION"
description: |
  ABENCDS_ANA_SCALAR_FUNCTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ANA_SCALAR_FUNCTION.htm"
abapFile: "ABENCDS_ANA_SCALAR_FUNCTION.html"
keywords: ["select", "do", "if", "try", "ABENCDS", "ANA", "SCALAR", "FUNCTION"]
---

[Analytical scalar functions](ABENCDS_ANA_SCALAR_GLOSRY.html) are [scalar functions](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) that are evaluated by an analytical runtime environment.

They can be specified in the [element list](ABENCDS_SELECT_LIST_ENTRY_V2.html) of [analytical projection views](ABENCDS_ANALYTICAL_PV_GLOSRY.html).

Analytical scalar functions are delivered by SAP. They can only be defined and implemented internally by SAP. They are available for internal and external use in [CDS analytical queries](ABENCDS_ANALYTIC_QUERY_GLOSRY.html).

The following analytical scalar functions are delivered by SAP. They are released under the [C1 contract for system-internal use](ABENC1_CONTRACT_GLOSRY.html). The function documentation is available in [Knowledge Transfer Documents](ABENKTD_GLOSRY.html) and can be accessed by clicking `F2` in your IDE.

Analytical scalar functions cannot be used as operands in ABAP SQL.

The following example demonstrates the use of an analytical scalar function provided by SAP.

-   `CALENDAR_OPERATION`
-   `CALENDAR_SHIFT`
-   `COLUMN_TOTAL`
-   `CURRENT_TOTAL`
-   `DEVIATION_RATIO`
-   `EXPONENTIAL`
-   `FISCAL_CALENDAR_OPERATION`
-   `FISCAL_CALENDAR_SHIFT`
-   `GET_CELL_REFERENCE_VALUE`
-   `GRAND_TOTAL`
-   `HRY_NODE_SIGN_VALUE`
-   `LN`
-   `LOG`
-   `POWER`
-   `RATIO_OF`
-   `ROW_TOTAL`
-   `SQRT`

-   The projected entity `DEMO_CDS_CUBE_VIEW` is a cube view.
-   The provider contract is set to `ANALYTICAL_QUERY`.
-   The analytical scalar function `RATIO_OF` is used in the element list to calculate the ratio of the final value of the field `amount_sum` compared to the original value. The final value subtracts a discount from the original value and adds taxes.

@EndUserText.label: 'Analytical scalar function'\\n@AccessControl.authorizationCheck: #NOT\_ALLOWED\\ndefine transient view entity DEMO\_CDS\_USE\_ANA\_SCALAR\\n provider contract analytical\_query\\n as projection on DEMO\_CDS\_CUBE\_VIEW\\n\\{\\n @AnalyticsDetails.query.axis: #FREE\\n so\_key as SalesOrderKey,\\n\\n @AnalyticsDetails.query.axis: #ROWS\\n lifecycle\_status as LifecycleStatus,\\n\\n @AnalyticsDetails.query.axis: #ROWS\\n created\_on as SellingDate,\\n\\n @AnalyticsDetails.query.axis: #COLUMNS\\n amount\_sum as AmountSum,\\n\\n @AnalyticsDetails.query.axis: #COLUMNS\\n $projection.AmountSum as DuplicatedAmountSum,\\n\\n @AnalyticsDetails.query.hidden: true\\n currency\_sum as CurrencyOfAmount,\\n\\n @AnalyticsDetails.query.axis: #COLUMNS\\n quantity\_sum as QuantitySum,\\n\\n @AnalyticsDetails.query.hidden: true\\n uom\_sum as UnitOfQuantity,\\n\\n @Aggregation.default: #FORMULA\\n abap.decfloat34'0.05' as Discount,\\n\\n @Aggregation.default: #FORMULA\\n abap.decfloat34'1.19' as Tax,\\n\\n @Semantics.quantity.unitOfMeasure: 'AmPerQuanUnit'\\n @Aggregation.default: #FORMULA\\n curr\_to\_decfloat\_amount( amount\_sum )\\n / $projection.QuantitySum\\n as AmountPerQuantity,\\n\\n virtual AmPerQuanUnit : abap.char(3),\\n\\n @Semantics.amount.currencyCode: 'CurrencyOfAmount'\\n @Aggregation.default: #FORMULA\\n curr\_to\_decfloat\_amount( amount\_sum )\\n - ( curr\_to\_decfloat\_amount( amount\_sum )\\n \* $projection.Discount )\\n as AmountSumDiscounted,\\n\\n @Semantics.amount.currencyCode: 'CurrencyOfAmount'\\n @Aggregation.default: #FORMULA\\n $projection.AmountSumDiscounted \* $projection.Tax\\n as AmountSumDiscountedTaxed,\\n\\n @Aggregation.default: #FORMULA\\n ratio\_of(\\n portion => ( get\_numeric\_value( amount\_sum )\\n - get\_numeric\_value( amount\_sum )\\n \* $projection.Discount ) \* $projection.Tax,\\n total => get\_numeric\_value( amount\_sum ) )\\n as AmountRatioFinalToOriginal\\n\\}\\n abenabap.html abencds.html abencds\_fdl.html abencds\_functions.html abencds\_scalar\_functions.html