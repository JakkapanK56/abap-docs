---
title: "ABENCDS_ELEMENT_APV"
description: |
  ABENCDS_ELEMENT_APV - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ELEMENT_APV.htm"
abapFile: "ABENCDS_ELEMENT_APV.html"
keywords: ["select", "if", "case", "class", "data", "ABENCDS", "ELEMENT", "APV"]
---

``... [[`@element_annot1`](ABENCDS_ELEMENT_ANNOTATIONS_V2.html)]\      [[`@element_annot2`](ABENCDS_ELEMENT_ANNOTATIONS_V2.html)]\      ...                  \{ field                [AS alias]             \}\        |         \{\ [`path_expr`](ABENCDS_PATH_EXPR_APV.html).element    [AS alias][: [`LOCALIZED`](ABENCDS_LOCALIZED.html)]\}\        |         \{\ [`arith_expr`](ABENCDS_ARITHMETIC_EXPRESSION_V2.html)            AS alias              \}\        |         \{\ [`builtin_func`](ABENCDS_BUILTIN_FUNCTIONS_V2.html)          AS alias              \}\        |         \{\ [`Analytical Scalar Functions`](ABENCDS_ANA_SCALAR_FUNCTION.html)\                                          AS alias              \}\        |         \{\ [`case_expr`](ABENCDS_CASE_EXPRESSION_APV.html)             AS alias              \}\        |\ \{ VIRTUAL [`calculated unit`](ABENCDS_CALCULATED_QUANTITY.html)       AS alias              \}\        |         \{\ [`parameter`](ABENCDS_PARAMETER_LIST_APV.html)             AS alias              \}\        |         \{\ [`session_variable`](ABENCDS_SESSION_VARIABLE_V2.html)      AS alias              \}\        |         \{\ [`typed_literal`](ABENCDS_TYPED_LITERAL_V2.html)         AS alias              \}\        |         \{\ [`cast_expr`](ABENCDS_CAST_EXPRESSION_V2.html)             AS alias              \}\        |         \{\ [`$projection.reuse_exp`](ABENCDS_REUSABLE_EXPRESSION_V2.html) AS alias              \}``

[1. `... AS alias`](#ABAP_ADDITION_1@3@)

[2. `... LOCALIZED`](#ABAP_ADDITION_2@3@)

[3. `... VIRTUAL`](#ABAP_ADDITION_3@3@)

Defines an element in the element list of a [CDS analytical projection view](ABENCDS_ANALYTICAL_PV_GLOSRY.html).

Elements in the element list of an analytical projection view can be [analytical formulas](ABENCDS_FORMULA_GLOSRY.html), [selections](ABENCDS_SELECTION_GLOSRY.html), dimension fields, text fields or attributes, or CDS amount and quantity fields. See the topic about [the conceptual background of analytical queries](ABENCDS_MEASURE_DIMENSION_APV.html) for further details.

The following CDS analytical projection view `DEMO_ANALYTICAL_QUERY_ELEM` defines an analytical query. It is based on the cube view `DEMO_CDS_CUBE_VIEW`.

Defines an alternative element name for the projected element. The alternative element name replaces the actual name of the element from the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). The view field is created under the alternative element name in the CDS projection view. Accordingly, the alternative element name must comply with the general syntax rules for [names](ABENCDS_GENERAL_SYNTAX_RULES.html).

The keyword [`LOCALIZED`](ABENCDS_LOCALIZED.html) defines a [SQL path target field](ABENSQL_TARGET_FIELD_GLOSRY.html) as [CDS localized field](ABENCDS_LOCALIZED_FIELD_GLOSRY.html). The effect is that the field in question is automatically and implicitly filtered to the current system language. See the topic [CDS DDL - `LOCALIZED`](ABENCDS_LOCALIZED.html) for further details.

The keyword `VIRTUAL` defines a [CDS virtual element](ABENCDS_VIRTUAL_ELEMENT_GLOSRY.html) in a CDS projection view. In general, CDS virtual elements calculate field values during runtime, see topic [CDS DDL - `VIRTUAL`](ABENCDS_PROJ_VIEW_VIRTUAL_ELEMENT.html).

In analytical queries, a virtual element is mostly used to define a [calculated unit](ABENCDS_CALCULATED_QUANTITY.html) for a [calculated quantity](ABENCDS_CALCULATED_QUANTITY.html). By using `VIRTUAL`, the analytical runtime automatically fills in the required value for the unit by interpreting the referred calculated quantity.

**Note** In an analytical query, the annotation [*@ObjectModel.virtualElementCalculatedBy*](ABENCDS_F1_ELEMENT_ANNOTATION.html), which connects the virtual element to an ABAP class that calculates a value at runtime, is not supported.

-   The rules for [propagation of element annotations in CDS projection views](ABENCDS_ELEMENT_ANNOTATIONS_PV.html) apply.
-   `field` exposes an element from the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). `AS` can be used to define an alternative element name `alias`.
-   In analytical projection views, [measure](ABENCDS_MEASURE_GLOSRY.html) fields can be exposed multiple times with different alias names. [Dimension fields](ABENCDS_DIMENSION_GLOSRY.html) can be exposed only once.
-   Analytical measure fields and analytical dimension fields from the projected entity remain analytical measures and dimensions and their type must not be changed in the projection layer.
-   `[path_expr](ABENCDS_PATH_EXPR_APV.html).element` exposes an element of an association target of the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). If no alternative element name `alias` is defined, the original element name of the element picked by the path expression is reused. For details, see the topic about [path expressions in analytical queries](ABENCDS_PATH_EXPR_APV.html).
-   [`arith_expr`](ABENCDS_ARITHMETIC_EXPRESSION_V2.html) can be used to specify an [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V2.html). The annotation `Aggregation.default: #FORMULA` is mandatory when an arithmetic expression is included as a field in the element list. Arithmetic expressions are evaluated by the analytical engine when the analytical query is accessed. An alternative element name `alias` must be defined with the keyword `AS`.
-   **Note** Arithmetic expressions must not have any path fields specified using `path_expr.element` as operands.
-   The following built-in functions [`builtin_func`](ABENCDS_BUILTIN_FUNCTIONS_V2.html) are supported:
-   \\ [`CURR_TO_DECFLOAT_AMOUNT`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html)
-   [`GET_NUMERIC_VALUE`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html)
-   [`DATS_DAYS_BETWEEN`](ABENCDS_DATE_FUNCTIONS_V2.html)
-   [`DATS_ADD_DAYS`](ABENCDS_DATE_FUNCTIONS_V2.html)
-   [`CURRENCY_CONVERSION`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html): The following special rules apply:

-   `amount` can be either a field of the [CDS projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html), or the function `CURR_TO_DECFLOAT_AMOUNT` with a field of the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html) as argument `arg`. No other expression or operand is allowed as operand for `amount`.
-   `source_currency` must be a field of the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html).
-   `target_currency` must not be a reuse expression specified using [`$projection`](ABENCDS_REUSABLE_EXPRESSION_V2.html).
-   The following optional parameters are not supported: `client`, `round`, `decimal_shift`, `decimal_shift_back`, and `error_handling`.

-   [`UNIT_CONVERSION`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html): The following special rules apply:

-   `quantity` and `source_unit` must be defined as a field of the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html).
-   `target_unit` must not be a reuse expression specified using [`$projection`](ABENCDS_REUSABLE_EXPRESSION_V2.html).
-   The following optional parameters are not supported: `client`, `error_handling`.

-   The annotation `Aggregation.default: #FORMULA` is mandatory for built-in functions.
-   [Analytical scalar functions](ABENCDS_ANA_SCALAR_FUNCTION.html) can be specified as elements. An alias name is mandatory.
-   [`case_exp`](ABENCDS_CASE_EXPRESSION_APV.html) can be used to specify [case distinctions](ABENCDS_CASE_EXPRESSION_APV.html). In an analytical query, case distinctions define [analytical formulas](ABENCDS_FORMULA_GLOSRY.html) or [restricted measures](ABENCDS_SELECTION_GLOSRY.html). See topic [CDS DDL - `case_expr`, Analytical Query](ABENCDS_CASE_EXPRESSION_APV.html) for further details.
-   [Calculated units](ABENCDS_CALCULATED_QUANTITY.html) can be defined using the keyword `VIRTUAL` in CDS analytical projection views. By that, the analytical runtime automatically fills in the required value for the unit.
-   `parameter` can be used to specify a parameter from the [parameter list](ABENCDS_PARAMETER_LIST_APV.html). An alternative element name using the keyword `AS` must be defined and it cannot be the name of the parameter. In analytical queries, parameters must have either a numeric data type (except for `NUMC`), or a unit or currency key. The annotation `Aggregation.default: #FORMULA` is mandatory when a parameter of a numeric data type is included as a field in the element list. No annotation is required when a parameter is used as an operand in a [formula](ABENCDS_FORMULA_GLOSRY.html).
-   [`session_variable`](ABENCDS_SESSION_VARIABLE_V2.html) can be used to specify a [session variable](ABENSESSION_VARIABLE_GLOSRY.html). `AS` must be used to define an alternative element name `alias`. The following session variables are supported in the element list of analytical queries: `system_date` and `user_date`. The annotation `Aggregation.default: #FORMULA` is mandatory when a session variable is included as a field in the element list. No annotation is required when a session variable is used as an operand in a [formula](ABENCDS_FORMULA_GLOSRY.html) or [selection](ABENCDS_SELECTION_GLOSRY.html).
-   [`typed_literal`](ABENCDS_TYPED_LITERAL_V2.html) can be used to declare a [typed literal](ABENTYPED_LITERAL_GLOSRY.html). `AS` must be used to define an alternative element name `alias`. In analytical queries, typed literals must have either a numeric data type (except for `NUMC`), or a unit or currency key. The annotation `Aggregation.default: #FORMULA` is mandatory when a numeric typed literal is included as a field in the element list. No annotation is required when a typed literal is used as an operand in a [formula](ABENCDS_FORMULA_GLOSRY.html) or [selection](ABENCDS_SELECTION_GLOSRY.html).
-   **Note**\\ [untyped literals](ABENCDS_UNTYPED_LITERAL_V2.html) are not supported in the element list of analytical projection views.
-   [`cast_expr`](ABENCDS_CAST_EXPRESSION_V2.html) can be used to specify [cast expressions](ABENCDS_CAST_EXPRESSION_V2.html). For a cast expression, an alias name must be specified with the keyword `AS`.
-   [`$projection.reuse_exp`](ABENCDS_REUSABLE_EXPRESSION_V2.html) reuses an expression defined in the `SELECT` list in another operand position of the same analytical projection view. An alternative element name specified using `AS` is required.

-   Exposing associations from the projected entity is not allowed.
-   The definition of key fields using `KEY` is not allowed.

@EndUserText.label: 'CDS projection view, analytical query'\\n@AccessControl.authorizationCheck: #NOT\_ALLOWED\\ndefine transient view entity DEMO\_ANALYTICAL\_QUERY\_ELEM\\n provider contract analytical\_query\\n with parameters\\n p\_preferred\_currency : abap.cuky\\n as projection on DEMO\_CDS\_CUBE\_VIEW\\n\\{\\n @AnalyticsDetails.query.axis: #FREE\\n so\_key as SalesOrderKey,\\n\\n @AnalyticsDetails.query.axis: #ROWS\\n lifecycle\_status as LifecycleStatus,\\n\\n \_Currency.\_Text.CurrencyName : localized,\\n //\\n @AnalyticsDetails.query.axis: #COLUMNS\\n quantity\_sum as QuantitySum,\\n //\\n uom\_sum as UnitOfQuantity,\\n\\n currency\_sum as CurrCode,\\n\\n \_Currency.AlternativeCurrencyKey as Currency,\\n\\n //typed literal\\n @Aggregation.default: #FORMULA\\n abap.decfloat34'0.05' as Discount,\\n\\n //calculated unit\\n @Aggregation.default: #FORMULA\\n @Semantics.quantity.unitOfMeasure: 'AmPerQuanUnit'\\n curr\_to\_decfloat\_amount( amount\_sum )\\n / $projection.QuantitySum as AmountPerQuantity,\\n\\n //calculated unit, defined as virtual element\\n virtual AmPerQuanUnit : dd\_cds\_calculated\_unit,\\n\\n //session variable\\n @Aggregation.default: #FORMULA\\n $session.system\_date as sysdat,\\n\\n @Aggregation.default: #FORMULA\\n @Semantics.amount.currencyCode: 'CurrCode'\\n currency\_conversion(\\n amount => amount\_sum,\\n source\_currency => currency\_sum,\\n target\_currency => $parameters.p\_preferred\_currency,\\n exchange\_rate\_date => created\_on\\n ) as convertedAmount\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_analytical\_query\_apv.html abencds\_element\_list\_apv.html