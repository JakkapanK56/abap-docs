---
title: "ABENCDS_AVG_AS_V2"
description: |
  ABENCDS_AVG_AS_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_AVG_AS_V2.htm"
abapFile: "ABENCDS_AVG_AS_V2.html"
keywords: ["select", "do", "if", "class", "data", "types", "ABENCDS", "AVG"]
---

`... AVG( [DISTINCT] arg AS dtype ) ...`

Aggregate expression [`AVG`](ABENCDS_AGGREGATE_FUNCTIONS_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) specifying the data type `dtype`. The data type determines the result type in which the average value is returned.

The same can be specified for `arg` as for all [aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V2.html). The data type of `arg` must be numeric and have one of the types [`INT1`, `INT2`, `INT4`, `INT8`](ABENDDIC_BUILTIN_TYPES.html), [`FLTP`](ABENDDIC_BUILTIN_TYPES.html), [`DEC`](ABENDDIC_BUILTIN_TYPES.html), [`CURR`](ABENDDIC_BUILTIN_TYPES.html), [`QUAN`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT16`](ABENDDIC_BUILTIN_TYPES.html), and [`DECFLOAT34`](ABENDDIC_BUILTIN_TYPES.html).

The data type `dtype` can have the built-in numeric type [`DEC`](ABENDDIC_BUILTIN_TYPES.html), [`CURR`](ABENDDIC_BUILTIN_TYPES.html), [`QUAN`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT16`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT34`](ABENDDIC_BUILTIN_TYPES.html), or [`FLTP`](ABENDDIC_BUILTIN_TYPES.html).

The data type `dtype` can be specified as follows:

The following table shows the syntax for specifying built-in data types:

The value range of the data type `dtype` must cover the value range of the type of `arg`:

If the average value cannot be represented exactly in the data type `dtype`, the result is rounded commercially.

If `arg` is assigned a currency key using the annotation [`Semantics.amount.currencyCode`](ABENCDS_F1_ELEMENT_ANNOTATION.html), then the result field must also be assigned a currency key using the same annotation.

If `arg` is assigned a unit of measurement key using the annotation [`Semantics.quantity.unitofMeasure`](ABENCDS_F1_ELEMENT_ANNOTATION.html), then the result field must also be assigned a unit of measurement key using the same annotation.

The following CDS view entity demonstrates different uses of the aggregate expression `AVG`. The class `CL_DEMO_CDS_AVG_VE` accesses the view. The average value is calculated with and without addition `DISTINCT` and is returned in various types. A built-in numeric function is used as operand to demonstrate the nesting of built-in functions.

-   Using a [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html) with an appropriate data type.
-   Using a [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html) with an appropriate data type.
-   Directly as a [built-in data type](ABENDDIC_BUILTIN_TYPES.html) in ABAP Dictionary.

-   If `arg` is an integer type, a type `dtype` of type `DEC` or `QUAN` must have at least as many integer digits as is required by the value range of the respective integer type, that is, 3 for `INT1`, 5 for `INT2`, 10 for `INT4`, and 19 for `INT8`. There is no restriction on the number of decimal places.
-   If `arg` has type `DEC` or `QUAN`, then `dtype` of type `DEC` or `QUAN` must have at least as many integer digits and decimal places.
-   If `arg` has the data type `DECFLOAT16`, then `dtype` must be `DECFLOAT16` or `DECFLOAT34`. If `arg` has the data type `DECFLOAT34`, then the target data type `dtype` must also be `DECFLOAT34`.
-   If `arg` has type `FLTP`, this type must also be specified for `dtype`.
-   If `arg` has type `CURR`, this type must also be specified for `dtype` and the number of decimal places must match exactly.
-   If `arg` has any other type except `CURR` and `dtype` is specified as `CURR`, then `dtype` must have exactly two decimal places.

-   The addition `AS` to `AVG` bridges the gap for average values where `FLTP` cannot be cast to other numeric data types with [`CAST`](ABENCDS_CAST_EXPRESSION_V2.html).
-   Since average values usually have decimal places, integer types are not supported for `dtype`. If necessary, the type `DEC` can be used without decimal places.
-   An aggregate expression `AVG` with the addition `AS dtype` can be used in accordance with this type in a [`CAST`](ABENCDS_CAST_EXPRESSION_V2.html) expression.
-   The actual calculation of the average value (determined by the involved data types) is platform-dependent. This can produce underflows, overflows, and exceptions during the calculation. To prevent exceptions, the total of the values for which the average value is being calculated should be within the value range of `dtype`. For further details on the calculation on SAP HANA Platform, see the [SAP HANA SQL Reference Guide](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity Demo\_Cds\_Avg\_Ve\\n as select from demo\_expressions\\n \\{\\n avg( num1 as abap.dec(10,0) ) as avg\_dec0,\\n avg( distinct num1 as abap.dec(10,0) ) as avg\_dec0\_distinct,\\n avg( num1 as abap.dec(12,2) ) as avg\_dec2,\\n avg( distinct num1 as abap.dec(12,2) ) as avg\_dec2\_distinct,\\n avg( abs(num1)\\n as abap.dec(12,2)) as avg\_numeric\_func\\n \\}\\n **dtype** **Dictionary Type**\\ `abap.dec(len,decimals)` [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with length `len` and `decimals` decimal places `abap.curr(len,decimals)` [`CURR`](ABENDDIC_BUILTIN_TYPES.html) with length `len` and `decimals` decimal places `abap.quan(len,decimals)` [`QUAN`](ABENDDIC_BUILTIN_TYPES.html) with length `len` with `decimals` decimal places `abap.decfloat16[(len,decimals)]` [`DECFLOAT16`](ABENDDIC_BUILTIN_TYPES.html) with length `len` with `decimals` decimal places `abap.decfloat34[(len,decimals)]` [`DECFLOAT34`](ABENDDIC_BUILTIN_TYPES.html) with length `len` with `decimals` decimal places `abap.fltp[(16,16)]` [`FLTP`](ABENDDIC_BUILTIN_TYPES.html) abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html abencds\_aggregate\_functions\_v2.html