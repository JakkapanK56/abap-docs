---
title: "ABENCDS_CALCULATED_QUANTITY"
description: |
  ABENCDS_CALCULATED_QUANTITY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_CALCULATED_QUANTITY.htm"
abapFile: "ABENCDS_CALCULATED_QUANTITY.html"
keywords: ["select", "insert", "do", "if", "case", "class", "data", "types", "ABENCDS", "CALCULATED", "QUANTITY"]
---

A [CDS calculated quantity](ABENCDS_CALCULATED_QUANTITY_GLOSRY.html) is a component of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or of a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) used to store a quantity in a specific unit. A calculated quantity is always the result type of a calculation using [ABAP CDS amount fields](ABENCDS_AMOUNT_FIELD_GLOSRY.html) and/or [ABAP CDS quantity fields](ABENCDS_QUANTITY_GLOSRY.html). The DDIC data type of a calculated quantity is [`DECFLOAT34`](ABENDDIC_BUILTIN_TYPES.html). A calculated quantity must be linked with a [ABAP CDS calculated unit](ABENCDS_CALCULATED_UNIT_GLOSRY.html) using the annotation [`@Semantics.quantity.unitOfMeasure: 'calculatedUnit'`](ABENCDS_F1_ELEMENT_ANNOTATION.html). A calculated unit is a component of the same CDS view entity of data type `CHAR` that specifies a user-defined unit which is not contained in any list of pre-defined values. The DDIC data element `DD_CDS_CALCULATED_UNIT` and DDIC domain `DD_CDS_CALCULATED_UNIT` can be used to type a calculated unit, but this is not mandatory.

In CDS view entities, the following functions are available for amount and quantity fields:

Calculated quantities can be the result type of the following expressions in CDS view entities:

Moreover, special rules apply in the following operand positions in CDS view entities:

In the following CDS view entity, the field `rent_per_size` divides the amount of the rent for an apartment by the apartment size. The result is the cost per square meter. The calculated unit is `EUR/MTK`, `MTK` being the unit ID for square meter.

The class `CL_DEMO_CDS_CALCULATED_QUNTTY` accesses the view, inserts values into the underlying database table, and displays the result.

-   [`GET_NUMERIC_VALUE`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) removes reference information from an amount or quantity field.
-   [`CURR_TO_DECFLOAT_AMOUNT`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) converts an amount field of data type `CURR` to data type `DECFLOAT34`, including shifting. The result remains an amount.

-   [Arithmetic expressions](ABENCDS_ARIT_EXP_CALC_V2.html)
-   [Aggregate functions](ABENCDS_AGGREGATE_FUNCTIONS_V2.html)
-   [Simple](ABENCDS_SIMPLE_CASE_EXPRESSION_V2.html) and [complex case expressions](ABENCDS_SEARCHED_CASE_EXPR_V2.html)
-   **Note**\\ [Cast expressions](ABENCDS_CAST_EXPRESSION_V2.html) do not handle calculated quantities.

-   [`UNION` views](ABENCDS_UNION_V2.html)
-   [`INTERSECT` views](ABENCDS_INTERSECT_V2.html)
-   [Comparisons](ABENCDS_COND_EXPR_TYPES_V2.html)

-   Reference annotations to currency or unit of measurement keys are propagated in CDS entities selecting from DDIC database tables or other CDS entities. It is possible, but not mandatory, to redefine them.
-   Currently, CDS calculated quantities are only available in CDS view entities and in CDS projection views. They are not supported in any other [CDS entity](ABENCDS_ENTITY_GLOSRY.html).
-   If a field is a calculated quantity, this characteristic is inherited when a view entity selects from another view entity.
-   A calculated unit can be used as reference only once in a view. If a view contains several calculated quantity fields, each field needs a different calculated unit.

@AccessControl.authorizationCheck: #NOT\_ALLOWED\\n@EndUserText.label: 'CDS view entity, calculated quantity'\\n\\ndefine view entity DEMO\_CDS\_CALCULATED\_QUANTITY\\n as select from demo\_rent\\n\\{\\n key apartment\_id as ApartmentId,\\n apartment\_size as ApartmentSize,\\n apartment\_unit as ApartmentUnit,\\n currency as Currency,\\n \\n // currency field and unit field in arith expression\\n @Semantics.quantity.unitOfMeasure: 'calculatedUnit'\\n rent\_decfloat34 / apartment\_size as rent\_per\_size,\\n concat( concat(currency, '/' ), apartment\_unit ) \\n as calculatedUnit\\n\\}\\n abenabap.html abencds.html abencds\_data\_types.html abencds\_overview\_builtin\_types.html aben\_cds\_special\_data\_types.html abencds\_calc\_quan.html