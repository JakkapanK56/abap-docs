---
title: "ABENCDS_FOR_CASE_EXPRESSION_APV"
description: |
  ABENCDS_FOR_CASE_EXPRESSION_APV - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_FOR_CASE_EXPRESSION_APV.htm"
abapFile: "ABENCDS_FOR_CASE_EXPRESSION_APV.html"
keywords: ["if", "case", "class", "data", "types", "ABENCDS", "FOR", "CASE", "EXPRESSION", "APV"]
---

`...  @Aggregation.default: #FORMULA    CASE      WHEN cds_cond      THEN result1      ELSE \{result2 | NULL\}\    END ...`

Formula-related case expression in the element list of an CDS analytical projection view. The case distinction evaluates the condition [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) and returns either the operand `result1` specified after `THEN`, or the operand `result2` specified after `ELSE`. `result2` can also be the null value. `ELSE NULL` is available to explicitly define the null value as result if no matches are found.

There must be exactly one `WHEN` branch, one `THEN` branch, and one `ELSE` branch. The annotation `@Aggregation.default: #FORMULA` is mandatory for formula-related case expressions.

`result1` and `result2` must be specified as a field of a data source with a data type valid for [analytical measures](ABENCDS_MEASURE_GLOSRY.html), numeric [typed literals](ABENCDS_TYPED_LITERAL_V2.html) (except for data type `NUMC`), or numeric [parameters](ABENCDS_F1_PARAM.html) (except for data type `NUMC`).

The following rules apply to the condition specified after `WHEN`:

-   All [comparison operators](ABENCDS_COND_EXPR_COMP_V2.html) except for <> are supported.
-   [`IS INITIAL`](ABENCDS_COND_EXPR_INITIAL_V2.html) is supported. [`BETWEEN`](ABENCDS_COND_EXPR_BETW_V2.html), [`LIKE`](ABENCDS_COND_EXPR_LIKE_V2.html), and [`IS NULL`](ABENCDS_COND_EXPR_NULL_V2.html) are not allowed.
-   The [Boolean operators](ABENBOOLEAN_OPERATOR_GLOSRY.html)\\ `AND` and `OR` are allowed.
-   `lhs` expects either a field of the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html) classified as an analytical measure, a [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V2.html), or an input parameter.
-   `rhs` can be a field of a data source specified as [analytical measure](ABENCDS_MEASURE_GLOSRY.html), a built-in function, a [parameter](ABENCDS_PARAMETER_LIST_APV.html), a session variable, or a [typed literal](ABENCDS_TYPED_LITERAL_V2.html) of one of the following data types: `DEC`, `DECFLOAT16`, `DECFLOAT34`, `FLTP`, `DF16_DEC`, `DF34_DEC`, `DF16_RAW`, `DF34_RAW`, `INT1`, `INT2`, `INT4`, `INT8`, `DATS`, `DATN`, `TIMN`, `TIMS`.
-   [Path expressions](ABENCDS_ELEMENT_APV.html) are not supported as operands.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_analytical\_query\_apv.html abencds\_element\_list\_apv.html abencds\_element\_apv.html abencds\_case\_expression\_apv.html