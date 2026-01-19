---
title: "ABENCDS_AMOUNT_FIELD"
description: |
  ABENCDS_AMOUNT_FIELD - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_AMOUNT_FIELD.htm"
abapFile: "ABENCDS_AMOUNT_FIELD.html"
keywords: ["select", "do", "while", "if", "case", "data", "types", "ABENCDS", "AMOUNT", "FIELD"]
---

An [ABAP CDS amount field](ABENCDS_AMOUNT_FIELD_GLOSRY.html) is a component of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) used to store an amount in a specific currency. An amount is an integer in the smallest unit of the currency. The integer is constructed from all figures in an amount field while ignoring the position of the decimal separator.

Possible [built-in DDIC data types](ABENDDIC_BUILTIN_TYPES.html) are `CURR`, `DECFLOAT34`, `DEC`, and `FLTP`. In case of data type `CURR`, a field is automatically interpreted as amount field and a reference to a [currency key](ABENCURRENCY_KEY_GLOSRY.html) using the annotation [`@Semantics.amount.currencyCode`](ABENCDS_F1_ELEMENT_ANNOTATION.html) is mandatory. In case of the other data types, this reference is not mandatory but if used, it turns the field into an amount field.

A CDS amount field must be linked with a currency key that specifies the currency and the number of decimal places. A currency key is a component of a DDIC structure, DDIC database table, DDIC view, or of a CDS entity which has the type `CUKY`, and can contain a [currency ID](ABENCURRENCY_ID_GLOSRY.html) from the DDIC database table `TCURC`.

By default, the number of decimal places for an amount is always two. Currencies with a different number of decimal places must also be entered in the table `TCURX`, where the number of decimal places can be defined explicitly.

For handling of CDS amount fields in ABAP Dictionary, handling in dynpros, and handling in ABAP programs, the same rules apply as for currency fields in DDIC, see topic [DDIC - Currency Fields](ABENDDIC_CURRENCY_FIELD.html).

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), special handling for CDS amount fields is implemented:

When used in [expressions](ABENCDS_EXPRESSIONS_V2.html), [`UNION` views](ABENCDS_UNION_V2.html), or [`INTERSECT`](ABENCDS_INTERSECT_V2.html) views, the reference annotation of a CDS amount field to a currency key is considered. Special rules apply concerning how amounts and quantities can be combined in calculations, compatibility of data types, and result types. A new result type is available: the [CDS calculated quantity](ABENCDS_CALCULATED_QUANTITY_GLOSRY.html). The rules are documented in the respective sections:

**Note**\\ [Cast expressions](ABENCDS_CAST_EXPRESSION_V2.html) do not handle amounts. Only the target type *CURR* requires a reference to a currency key.

The following two conversion functions are available for amounts in CDS view entities:

-   [Amounts and quantities in arithmetic expressions](ABENCDS_ARIT_EXP_CALC_V2.html)
-   [Amounts and quantities in aggregate functions](ABENCDS_AGGREGATE_FUNCTIONS_V2.html)
-   Amounts and quantities in [simple](ABENCDS_SIMPLE_CASE_EXPRESSION_V2.html) and [complex case expressions](ABENCDS_SEARCHED_CASE_EXPR_V2.html)
-   [Amounts and quantities in `UNION` views](ABENCDS_UNION_V2.html)
-   [Amounts and quantities in `INTERSECT` views](ABENCDS_INTERSECT_V2.html)
-   Amounts and quantities in [comparisons](ABENCDS_COND_EXPR_TYPES_V2.html).

-   [`GET_NUMERIC_VALUE`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html): removes the reference to a currency key and returns the numeric value of a field.
-   [`CURR_TO_DECFLOAT_AMOUNT`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html): converts an amount field of data type `CURR` into an amount field of data type `DECFLOAT34`.
-   **Note** The function [`DECIMAL_SHIFT`](ABENCDS_CONV_FUNC_UNIT_CURR_V1.html) is not available in CDS view entities.

-   Reference annotations that assign a currency key to a field are propagated in CDS entities selecting from DDIC database tables or other CDS entities. It is possible, but not mandatory, to redefine them. This is true for all CDS entities except for CDS DDIC-based views (obsolete).
-   Currently, the handling of CDS amount fields in expressions is only available in CDS view entities and not in any other [CDS entity](ABENCDS_ENTITY_GLOSRY.html).
-   Currencies are handled as specified by the data saved in the database tables `TCUR...` of the package `SFIB`. The exchange rates and other settings can be maintained in transaction `OB08`.

abenabap.html abencds.html abencds\_data\_types.html abencds\_overview\_builtin\_types.html aben\_cds\_special\_data\_types.html abencds\_calc\_quan.html