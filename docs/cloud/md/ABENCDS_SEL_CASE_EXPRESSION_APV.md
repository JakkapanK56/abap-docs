---
title: "ABENCDS_SEL_CASE_EXPRESSION_APV"
description: |
  ABENCDS_SEL_CASE_EXPRESSION_APV - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SEL_CASE_EXPRESSION_APV.htm"
abapFile: "ABENCDS_SEL_CASE_EXPRESSION_APV.html"
keywords: ["select", "do", "if", "case", "class", "data", "ABENCDS", "SEL", "CASE", "EXPRESSION", "APV"]
---

``... CASE        WHEN [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html)\        THEN result       [ELSE NULL]\      END ...``

Case expression in a CDS analytical projection view that defines a selection. There must be exactly one `WHEN` branch. A regular `ELSE` branch is not allowed. `ELSE NULL` is available (optionally) to explicitly define the null value as result if no matches are found.

The following is allowed as `result` specified after `THEN`:

The following rules apply to the condition [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) specified after `WHEN`:

-   A field of a data source specified as [analytical measure](ABENCDS_MEASURE_GLOSRY.html).
-   The built-in functions [`CURR_TO_DECFLOAT_AMOUNT`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html), [`CURRENCY_CONVERSION`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html), and [`UNIT_CONVERSION`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html).
-   A numeric [typed literal](ABENCDS_TYPED_LITERAL_V2.html) of a measure-like data type or the [untyped literal](ABENCDS_UNTYPED_LITERAL_V2.html) 1. A literal is only allowed if the element is annotated with `AnalyticsDetails.query.onCharacteristicStructure: true` and when this annotation is used, a literal is mandatory.

-   All [comparison operators](ABENCDS_COND_EXPR_COMP_V2.html) are supported.
-   [`[NOT] BETWEEN`](ABENCDS_COND_EXPR_BETW_V2.html), [`LIKE`](ABENCDS_COND_EXPR_LIKE_V2.html), and [`IS [NOT] INITIAL`](ABENCDS_COND_EXPR_INITIAL_V2.html) are supported.
-   **Note**\\ `NOT LIKE` is not supported.
-   The [Boolean operators](ABENBOOLEAN_OPERATOR_GLOSRY.html)\\ `AND`, `OR`, and `NOT` are allowed. Identical fields must be combined with `OR` and different fields must be combined with `AND`.
-   **Note** A filter condition does not support nested negations. The following is not supported: `AND NOT field_a <> 'B`. The reason is that `NOT` and <> are both negations.
-   `lhs` expects a field of the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). The field must be classified as [analytical dimension field](ABENCDS_DIMENSION_GLOSRY.html).
-   `rhs` can be a [parameter](ABENCDS_PARAMETER_LIST_APV.html), a session variable, or a [typed literal](ABENCDS_TYPED_LITERAL_V2.html).
-   [Path expressions](ABENCDS_ELEMENT_APV.html) are not supported as operands.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_analytical\_query\_apv.html abencds\_element\_list\_apv.html abencds\_element\_apv.html abencds\_case\_expression\_apv.html