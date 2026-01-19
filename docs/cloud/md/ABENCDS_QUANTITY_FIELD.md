---
title: "ABENCDS_QUANTITY_FIELD"
description: |
  ABENCDS_QUANTITY_FIELD - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_QUANTITY_FIELD.htm"
abapFile: "ABENCDS_QUANTITY_FIELD.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENCDS", "QUANTITY", "FIELD"]
---

An [ABAP CDS quantity field](ABENCDS_QUANTITY_GLOSRY.html) is a component of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) used to store a quantity in a specific unit.

Possible [built-in ABAP Dictionary data types](ABENDDIC_BUILTIN_TYPES.html) are `QUAN`, `DECFLOAT16`, `DECFLOAT34`, `DEC`, `FLTP`, `INT1`, `INT2`, or `INT4`. In the case of data type `QUAN`, the field is automatically interpreted as quantity field and a reference to a [unit of measurement key](ABENUNIT_GLOSRY.html) using the annotation [`@Semantics.quantity.unitOfMeasure`](ABENCDS_F1_ELEMENT_ANNOTATION.html) is mandatory. In the case of the other data types, this reference is not mandatory but if used, it turns the field into a quantity field.

A quantity field must be linked with a unit key that defines the unit and the number of decimal places. A unit key is a component of a structure, DDIC database table, DDIC view or of another CDS entity of type `UNIT` and it can contain a [unit ID](ABENUNIT_ID_GLOSRY.html) from the DDIC database table `T006`.

For handling of CDS quantity fields in ABAP Dictionary, handling in dynpros, and handling in ABAP programs, the same rules apply as for currency fields in DDIC, see topic [ABAP DDIC - Quantity Fields](ABENDDIC_QUANTITY_FIELD.html).

In CDS view entities, special handling for CDS quantity fields is implemented:

When used in [expressions](ABENCDS_EXPRESSIONS_V2.html), [`UNION` views](ABENCDS_UNION_V2.html), or [`INTERSECT`](ABENCDS_INTERSECT_V2.html) views, the reference annotation of a CDS quantity field to a unit key is considered. Special rules apply concerning how amounts and quantities can be combined in calculations, compatibility of data types, and result types. A new result type is available: the [CDS calculated quantity](ABENCDS_CALCULATED_QUANTITY_GLOSRY.html). The rules are documented in the respective sections:

**Note**\\ [Cast expressions](ABENCDS_CAST_EXPRESSION_V2.html) do not handle quantities. Only the target type *QUAN* requires a reference to a unit key.

The following conversion function is available for quantities in CDS view entities:

-   [Amounts and quantities in arithmetic expressions](ABENCDS_ARIT_EXP_CALC_V2.html)
-   [Amounts and quantities in aggregate functions](ABENCDS_AGGREGATE_FUNCTIONS_V2.html)
-   Amounts and quantities in [simple](ABENCDS_SIMPLE_CASE_EXPRESSION_V2.html) and [complex case expressions](ABENCDS_SEARCHED_CASE_EXPR_V2.html)
-   [Amounts and quantities in `UNION` views](ABENCDS_UNION_V2.html)
-   [Amounts and quantities in `INTERSECT` views](ABENCDS_INTERSECT_V2.html)
-   Amounts and quantities in [comparisons](ABENCDS_COND_EXPR_TYPES_V2.html).

-   [`GET_NUMERIC_VALUE`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html): removes the reference to a unit key and returns the numeric value of a field.

-   Reference annotations that assign a unit key to a field are propagated in CDS entities selecting from DDIC database tables or other CDS entities. It is possible, but not mandatory, to redefine them. This is true for all CDS entities except for CDS DDIC-based views (obsolete).
-   Currently, the handling of CDS quantity fields in expressions is only available in CDS view entities and not in any other [CDS entity](ABENCDS_ENTITY_GLOSRY.html).
-   Quantities and units are handled as specified by the data saved in the DDIC database tables `T006...` in the package `SZME`. This data can be maintained using the transaction `CUNI`.

abenabap.html abencds.html abencds\_data\_types.html abencds\_overview\_builtin\_types.html aben\_cds\_special\_data\_types.html abencds\_calc\_quan.html