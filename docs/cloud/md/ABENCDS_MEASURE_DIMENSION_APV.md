---
title: "ABENCDS_MEASURE_DIMENSION_APV"
description: |
  ABENCDS_MEASURE_DIMENSION_APV - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_MEASURE_DIMENSION_APV.htm"
abapFile: "ABENCDS_MEASURE_DIMENSION_APV.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "ABENCDS", "MEASURE", "DIMENSION", "APV"]
---

This topic explains some of the conceptual background of analytical data models.

The projected entity of a [CDS analytical projection view](ABENCDS_ANALYTICAL_PV_GLOSRY.html) must be an [analytical cube view](ABENCDS_ANALYTICAL_CUBE_GLOSRY.html) or an [analytical dimension view](ABENCDS_ANAL_DIM_VIEW_GLOSRY.html). The fields of an analytical cube view and an analytical dimension view are interpreted as [analytical measure fields](ABENCDS_MEASURE_GLOSRY.html) and [analytical dimension fields](ABENCDS_DIMENSION_GLOSRY.html).

The fields of a CDS analytical projection view can be classified into the following categories:

Development guide for [ABAP Analytics](https://help.sap.com/docs/ABAP_Cloud/67127c83ae1a4917b6b65ec222416894/4ae5db4d9bfd472ba70613b358dbb16b?version=sap_cross_product_abap)

-   Analytical dimension field:
-   Field that describes a characteristic or attribute and that can be used for [grouping](ABENCDS_GROUP_BY_V2.html) or filtering. For example if a view describes a sales order, the following columns can be dimension fields: customer, date, region. Dimension fields can have a [foreign key](ABENFOREIGN_KEY_GLOSRY.html) association with a dimension view or a text view as association target.
-   A dimension field must have one of the following data types: [`CHAR`](ABENDDIC_BUILTIN_TYPES.html), [`NUMC`](ABENDDIC_BUILTIN_TYPES.html), [`DATS`](ABENDDIC_BUILTIN_TYPES.html), [`TIMS`](ABENDDIC_BUILTIN_TYPES.html), [`INT1`](ABENDDIC_BUILTIN_TYPES.html), [`INT2`](ABENDDIC_BUILTIN_TYPES.html), [`INT4`](ABENDDIC_BUILTIN_TYPES.html), [`INT8`](ABENDDIC_BUILTIN_TYPES.html), [`DATN`](ABENDDIC_BUILTIN_TYPES.html), [`TIMN`](ABENDDIC_BUILTIN_TYPES.html), [`UNIT`](ABENDDIC_BUILTIN_TYPES.html), [`CUKY`](ABENDDIC_BUILTIN_TYPES.html), [`LANG`](ABENDDIC_BUILTIN_TYPES.html), [`CLNT`](ABENDDIC_BUILTIN_TYPES.html), [`SSTR`](ABENDDIC_BUILTIN_TYPES.html), [`RAW(16)`](ABENDDIC_BUILTIN_TYPES.html), [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).
-   Analytical measure field:
-   Field that contains measurable data. In other words, an analytical measure can be any element that contains quantifiable data that can be calculated and aggregated, for example, the total price of all sales order positions. The aggregation behavior is defined via the annotation [`@Aggregation.default`](ABENCDS_F1_ELEMENT_ANNOTATION.html). Measures can have a reference to a [unit key](ABENUNIT_GLOSRY.html) or [currency key](ABENCURRENCY_KEY_GLOSRY.html). The following data types are possible: [`DEC`](ABENDDIC_BUILTIN_TYPES.html), [`CURR`](ABENDDIC_BUILTIN_TYPES.html), [`QUAN`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT16`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT34`](ABENDDIC_BUILTIN_TYPES.html), [`FLTP`](ABENDDIC_BUILTIN_TYPES.html), [`DATS`](ABENDDIC_BUILTIN_TYPES.html), [`DATN`](ABENDDIC_BUILTIN_TYPES.html), [`TIMS`](ABENDDIC_BUILTIN_TYPES.html), [`TIMN`](ABENDDIC_BUILTIN_TYPES.html), [`INT1`](ABENDDIC_BUILTIN_TYPES.html), [`INT2`](ABENDDIC_BUILTIN_TYPES.html), [`INT4`](ABENDDIC_BUILTIN_TYPES.html), [`INT8`](ABENDDIC_BUILTIN_TYPES.html), [`DF16_DEC`](ABENDDIC_BUILTIN_TYPES.html), [`DF34_DEC`](ABENDDIC_BUILTIN_TYPES.html), [`DF16_RAW`](ABENDDIC_BUILTIN_TYPES.html).

-   [Analytical formula](ABENCDS_FORMULA_GLOSRY.html):
-   Field of a CDS analytical projection view that is added in the projection layer as a new field. A formula can be an [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V2.html), a [currency conversion](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) using the built-in function [`CURRENCY_CONVERSION`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html), a [unit conversion](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) using the built-in function [`UNIT_CONVERSION`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html), or a [formula-related case expression](ABENCDS_CASE_EXPRESSION_APV.html). The annotation `Aggregation.default: #FORMULA` is mandatory.
-   [Analytical selection](ABENCDS_SELECTION_GLOSRY.html):
-   Field of a CDS analytical projection view that is newly added in the projection layer. A selection is defined by means of a [selection-related case expression](ABENCDS_CASE_EXPRESSION_APV.html), also called restricted measure.
-   Dimension field: field of an analytical projection view that is defined as dimension field in the underlying [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html).
-   Text fields and attributes relating to a dimension. Such fields are included via [path expressions](ABENCDS_PATH_EXPR_APV.html).
-   [CDS amount fields](ABENCDS_AMOUNT_FIELD_GLOSRY.html), [CDS quantity fields](ABENCDS_QUANTITY_GLOSRY.html), [currency key](ABENCURRENCY_KEY_GLOSRY.html) fields, and [unit key](ABENUNIT_GLOSRY.html) fields.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_analytical\_query\_apv.html